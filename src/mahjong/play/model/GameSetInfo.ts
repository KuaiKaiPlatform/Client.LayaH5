module mahjong.play.model {

    /*
     *  麻将牌局信息
     */
    export class GameSetInfo extends common.play.model.GameSetInfo {

        protected lastOperDetail;

        constructor(setInit) {
            super(setInit);
            this.lastOperDetail = setInit.lastOperDetail;
            this.playerSetInfo = new mahjong.play.model.PlayerSetInfo(setInit);
        }

        public getRemainCards() {
            return this.setInit.remainCards;
        }

        public setRemainCards(remainCards) {
            this.setInit.remainCards = remainCards;
        }

        public getBankerId() {
            return this.setInit.bankerId;
        }

        public getLastOperDetail() {
            return this.lastOperDetail;
        }

        public setLastOperDetail(lastOperDetail) {
            this.lastOperDetail = lastOperDetail;
        }

    }
}