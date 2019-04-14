module mahjong.play.view {

    import Handler = Laya.Handler;
    import Image = Laya.Image;
    import View = Laya.View;
    import Component = Laya.Component;

    /**
     *  麻将玩家可执行操作交互
     */
    export class SelfCanOperView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        protected canOperDetails;
        protected operType2Details = {};

        protected operViews = [];   // 可执行操作UI对象
        protected static TOTAL_OPERATIONS = 5;
        protected static OPER_TYPE_GUO = 0;

        protected static IMG_PATH_GUO      = "mahjong/desk/oper_guo.png";
        protected static IMG_PATH_CHI      = "mahjong/desk/oper_chi.png";
        protected static IMG_PATH_PENG     = "mahjong/desk/oper_peng.png";
        protected static IMG_PATH_GANG     = "mahjong/desk/oper_gang.png";
        protected static IMG_PATH_HU       = "mahjong/desk/oper_hu.png";
        protected static IMG_PATH_TING     = "mahjong/desk/oper_ting.png";

        constructor(deskController) {
            super();
            this.deskController = deskController;
            // 初始化5个可执行操作 UI 组件
            for(let i=0; i<SelfCanOperView.TOTAL_OPERATIONS; i++) {
                let operView = new Image();
                this.operViews[i] = operView;
            }
        }

        /**
         * 显示可执行的操作
         */
        public show(canOperDetails): void {
            console.log("SelfCanOperView.show", JSON.stringify(canOperDetails));
            this.canOperDetails = canOperDetails;
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/desk.atlas"
            ], Handler.create(this, () => {
                this.showAll();
            }));
        }

        /**
         * 显示可执行的操作列表
         */
        public showAll(): void {
            this.hideAll();

            // 报听不做操作
            if(this.deskController.getGameSetInfo().getPlayerSetInfo().isBaoTing(Login.getUid())) {
                return;
            }

            if(!this.canOperDetails || this.canOperDetails.length == 0) {
                return;
            }

            let showGuo = false;
            //let OperType = Protocol.getEnum("mahjong.OperType");
            let OperType = Laya.Browser.window.mahjong.OperType;
            this.canOperDetails.reverse().forEach((canOperDetail, index) => {
                let imgPath;
                switch(canOperDetail.operType) {
                case OperType.CHI:
                    imgPath = SelfCanOperView.IMG_PATH_CHI;
                    break;
                case OperType.PENG:
                    imgPath = SelfCanOperView.IMG_PATH_PENG;
                    break;
                case OperType.BU_GANG:
                case OperType.DIAN_GANG:
                case OperType.AN_GANG:
                    imgPath = SelfCanOperView.IMG_PATH_GANG;
                    break;
                case OperType.HU:
                    imgPath = SelfCanOperView.IMG_PATH_HU;
                    break;
                case OperType.TING:
                    imgPath = SelfCanOperView.IMG_PATH_TING;
                    break;
                default:
                    console.warn("mahjong.view.SelfCanOperView.showAll@operation not shown", canOperDetail.operType);
                    return;
                }

                // 记录 operType 2 details
                this.operType2Details[canOperDetail.operType] = canOperDetail;

                // 显示可执行操作
                let i = index + 1;
                let operView = this.operViews[i];
                operView.skin = imgPath;
                operView["operType"] = canOperDetail.operType;
                operView.on(Laya.Event.CLICK, this, this.clickHandler);

                this.showComponent(operView, {
                    bottom: 110,
                    right: 200 + 128*i
                });

                showGuo = true;
                console.log("mahjong.view.SelfCanOperView.showAll@canOperType", canOperDetail.operType);
            });

            if(showGuo) {
                // 有可执行操作，显示过牌
                let operView = this.operViews[0];
                operView.loadImage(SelfCanOperView.IMG_PATH_GUO);
                operView["operType"] = SelfCanOperView.OPER_TYPE_GUO;
                operView.on(Laya.Event.CLICK, this, this.clickHandler);

                this.showComponent(operView, {
                    bottom: 110,
                    right: 200
                });
            }

        }

        public hideAll() {
            this.operViews.forEach((operView, index) => {
                this.removeComponent(operView);
            });
        }

        /**
         * 点击执行操作
         */
        protected clickHandler(e: Event): void {
            this.hideAll();
            let operType = e.target["operType"];
            let canOperDetail = this.operType2Details[operType];

            let cOperCard = {};
            //let OperType = Protocol.getEnum("mahjong.OperType");
            let OperType = Laya.Browser.window.mahjong.OperType;

            switch(operType) {
            case SelfCanOperView.OPER_TYPE_GUO:
                MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.CPassCard, {});
                break;
            case OperType.CHI:
                break;
            case OperType.PENG:
            case OperType.BU_GANG:
            case OperType.DIAN_GANG:
            case OperType.AN_GANG:
            case OperType.HU:
                cOperCard["operDetail"] = {
                    operType: operType,
                    target: canOperDetail.target
                }
                MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.COperCard, cOperCard);
                break;
            case OperType.TING:
                this.deskController.getDeskView().getHandCardsView().getSelfHandCardsView().onTingClicked();
                break;
            default:
                console.warn("mahjong.view.SelfCanOperView.clickHandler@operation not shown", operType);
                break;
            }
        }

    }
}