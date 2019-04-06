module mahjong.play.view {

    import Handler = Laya.Handler;
    import View = Laya.View;
    import Component = Laya.Component;
    import Image = Laya.Image;
    import Label = Laya.Label;

    /**
     *  听牌列表显示
     */
    export class TingCardsView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        protected tingCards;
        protected cardsUI;
        protected static BG_IMG_PATH = "mahjong/desk/bg_ting.png";
        protected static LABEL_NUM = "num";
        protected static SIGN_NUM = "×";
        protected tingImg;                      //  听牌提示标
        protected cardViews = {};               //  牌值对应的牌视图，用于更新余牌数量

        constructor(deskController, tingCards) {
            super();
            this.deskController = deskController;
            this.tingCards = tingCards;
        }

        /**
         * 显示听牌列表
         */
        public show() {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/card.atlas",
                "res/atlas/mahjong/desk.atlas",
                TingCardsView.BG_IMG_PATH
            ], Handler.create(this, () => {
                this.showTing(false);
                this.showCards();
            }));
        }

        /**
         * 隐藏听牌列表
         */
        public hide() {
            this.hideCards();
            this.removeComponent(this.tingImg);
        }

        public createTingImg() {
            this.tingImg = new Image("mahjong/desk/oper_ting.png");
        }
        
        public showTing(withEvent) {
            if(!this.tingImg) {
                this.createTingImg();
            }

            this.showComponent(this.tingImg, {
                left: 230,
                bottom: 110,
                scaleX: 0.5,
                scaleY: 0.5
            });

            if(withEvent) {
                this.tingImg.offAll();
                this.tingImg.on(Laya.Event.MOUSE_OVER, this, e => {
                    this.showCards();
                });
                this.tingImg.on(Laya.Event.MOUSE_OUT, this, e => {
                    this.hideCards();
                });
            }

        }

        /**
         * 显示听牌列表
         */
        public createCardsUI(): void {
            this.cardsUI = new Component();
            this.cardsUI.zOrder = 1100;

            // 添加背景
            let bgImg = new Image(TingCardsView.BG_IMG_PATH);
            bgImg.alpha = 0.8;
            
            this.cardsUI.addChild(bgImg);

            // 排序
            this.tingCards.sort((a, b) => {
                return a-b;
            });

            let total = this.tingCards.length;      // 总数
            let rows = Math.ceil(total/9);          // 总行数

            // 按行添加听牌
            for(let r=0; r<rows; r++) {
                let columns = (r==rows-1)?total%9:9;    // 本行牌数
                // 逐个添加本行听牌（先从第一列添加，不够9列，整体右移后居中）
                for(let c=0; c<columns; c++) {
                    let card = this.tingCards[r*9+c];
                    let cardView = this.deskController.createLandscapeCard(card);
                    this.cardViews[card] = cardView;
                    cardView.centerX = 90*c - 370 + (9-columns)*45;
                    cardView.bottom = 20 + 80*(rows-r-1);

                    let labelRemain = new Label();
                    labelRemain.changeText(TingCardsView.SIGN_NUM + this.deskController.getGameSetInfo().getRemainNum(card));
                    labelRemain.name = TingCardsView.LABEL_NUM;
                    labelRemain.color = "#FFFFFF";
                    labelRemain.fontSize = 20;
                    labelRemain.left = 40;
                    labelRemain.bottom = 10;
                    cardView.addChild(labelRemain);

                    this.cardsUI.addChild(cardView);
                }
            }

            let uiHeight = 100 + (rows-1)*80;
            let uiWidth = 873;

            bgImg.scaleX = uiWidth/bgImg.displayWidth;
            bgImg.scaleY = uiHeight/bgImg.displayHeight;

            this.cardsUI.width = uiWidth;
            this.cardsUI.height = uiHeight;

        }

        /**
         * 显示听牌列表
         */
        public showCards(): void {
            if(!this.cardsUI) {
                this.createCardsUI();
            }

            // 更新余牌数量
            this.updateRemainNum();

            // 显示
            this.showComponent(this.cardsUI, {
                bottom: 174,
                centerX: 0
            });
            
        }

        protected updateRemainNum() {
            this.tingCards.forEach(card => {
                let cardView = this.cardViews[card] as View;
                if(!cardView) {
                    console.error("mahjong.play.view.TingCardsView.updateRemainNum@card view not found", card);
                    return;
                }
                let num = cardView.getChildByName(TingCardsView.LABEL_NUM) as Label;
                num.changeText(TingCardsView.SIGN_NUM + this.deskController.getGameSetInfo().getRemainNum(card));
            });
        }

        public hideCards() {
            this.removeComponent(this.cardsUI);
        }

    }
}