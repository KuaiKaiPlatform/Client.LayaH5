module mahjong.play.view {
    import Label = Laya.Label;

    /*
     *  麻将牌桌基本信息显示
     */
    export class GameSummaryView extends common.play.view.GameSummaryView {

        protected remainLabel = new Label();

        constructor(deskController) {
            super(deskController);
        }

        public getRuleAttrs() {
            return {
                left: 10,
                top: 100
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

        /**
         * 牌局开始或重连
         */
        public onSetInit() {
            super.onSetInit();

            // 显示剩余牌数
            this.showRemain();
        }

        // 显示剩余牌数，如：剩余 53
        public showRemain(): void {
            let gameSetInfo = this.deskController.getGameSetInfo() as mahjong.play.model.GameSetInfo;
            this.remainLabel.changeText("余 " + gameSetInfo.getRemainCards() + " 张");
            this.showComponent(this.remainLabel, this.getRemainAttrs());
        }

    }
}