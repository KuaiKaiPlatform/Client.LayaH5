module mahjong.play.model {

    /*
     *  麻将牌局信息
     */
    export class GameSetInfo extends common.play.model.GameSetInfo {

        constructor(setInit) {
            super(setInit);
            this.playerSetInfo = new mahjong.play.model.PlayerSetInfo(setInit.playerSetInfos);
        }

        public getRemainCards() {
            return this.setInit.remainCards;
        }

    }
}