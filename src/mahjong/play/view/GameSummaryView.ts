module mahjong.play.view {
    
    import Label = Laya.Label;
    import Handler = Laya.Handler;

    /*
     *  麻将牌桌基本信息显示
     */
    export class GameSummaryView extends common.play.view.GameSummaryView {

        protected remainLabel = new Label();
        protected modeLabel = new Label();

        constructor(deskController) {
            super(deskController);
        }

        public getRuleAttrs() {
            return {
                left: 10,
                top: 100,
                color: "#47c03d",
                fontSize: 28
            }
        }

        public getModeAttrs() {
            return {
                left: 10,
                top: 10,
                color: "#47c03d",
                fontSize: 20
            }
        }

        public getRemainAttrs() {
            return {
                left: 10,
                top: 50,
                color: "#47c03d",
                fontSize: 20
            }
        }

        public showAll() {
            console.log("mahjong.play.view.GameSummaryView.show");
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/common/rule.atlas"
            ], Handler.create(this, () => {
                //this.showRuleSprite();
                this.showRuleLabel();
                this.showMode();
            }));

        }

        /**
         * 牌局开始或重连
         */
        public onSetInit() {

            // 显示剩余牌数
            this.showRemain();

            // 显示牌局模式
            this.showMode();

        }

        /**
         * 显示剩余牌数，如：余 53 张
         */ 
        public showRemain(): void {
            let gameSetInfo = this.deskController.getGameSetInfo() as mahjong.play.model.GameSetInfo;
            this.remainLabel.changeText("余 " + gameSetInfo.getRemainCards() + " 张");
            this.showComponent(this.remainLabel, this.getRemainAttrs());
        }

        /**
         * 隐藏剩余牌数
         */
        public hideRemain(): void {
            this.removeComponent(this.remainLabel);
        }

        /**
         * 显示牌局模式，如：局 3/8
         */
        public showMode(): void {
            //console.log("GameSummaryView.showMode@totalSet", GameSetting.get("totalSet"));
            this.modeLabel.changeText(mahjong.data.DeskInfo.getMode(this.deskController.getDeskDetail()));
            this.showComponent(this.modeLabel, this.getModeAttrs());
        }

        /**
         * 关闭一局结算后增加局数，隐藏余牌张数
         */
        public onSetResultClosed(): void {
            this.deskController.getDeskDetail().incrCurrentSet();
            this.showMode();
            this.hideRemain();
        }

    }
}