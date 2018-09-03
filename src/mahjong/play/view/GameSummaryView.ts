module mahjong.play {
    import Handler = Laya.Handler;

    /*
     *  麻将牌桌基本信息显示
     */
    export class GameSummaryView extends common.view.GameSummaryView {

        constructor(deskController) {
            super(deskController);
        }

        public getCoordinate() {
            return {
                left: 10,
                top: 100
            }
        }

    }
}