module mahjong.play.view {
    import Handler = Laya.Handler;

    /*
     *  麻将牌桌基本信息显示
     */
    export class GameSummaryView extends common.play.view.GameSummaryView {

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

    }
}