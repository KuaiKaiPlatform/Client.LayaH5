module mahjong.play.model {

    /*
     *  麻将牌局信息
     */
    export class GameSetInfo extends common.play.model.GameSetInfo {

        protected lastOperDetail;

        constructor(setInit) {
            super(setInit);
            this.lastOperDetail = setInit.lastOperDetail;
            this.playerSetInfo = new mahjong.play.model.PlayerSetInfo(setInit, this);
        }

        public getPlayerSetInfo() {
            return this.playerSetInfo as mahjong.play.model.PlayerSetInfo;
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

        public getAlmighty() {
            return this.setInit.almighty;
        }

        public getLastOperDetail() {
            return this.lastOperDetail;
        }

        public setLastOperDetail(lastOperDetail) {
            this.lastOperDetail = lastOperDetail;
        }

        public getDiscardTingCards() {
            return this.setInit.discardTingCards;
        }

        /**
         * 返回指定牌值的桌面剩余牌数量（扣除所有打牌明牌和自身手牌后）
         * 
         * @param val 
         */
        public getRemainNum(val) {
            let count = 0;
            let setInfos = this.playerSetInfo.getAll();
            
            // 打牌和明牌
            for(let uid in setInfos) {
                let setInfo = setInfos[uid];
                setInfo.discards.forEach(card => {
                    if(card == val) count++;
                });

                setInfo.cardGroups.forEach(cardGroup => {
                    if(cardGroup.target == val) count++;
                    cardGroup.cards.forEach(card => {
                        if(card == val) count++;
                    });
                });
            }

            // 自身手牌
            let selfHandcards = this.getPlayerSetInfo().getSelfHandcards();
            if(selfHandcards.getMoCard() == val) count++
            selfHandcards.getHandcards().forEach(card => {
                if(card == val) count++;
            });

            return 4-count;
        }

    }
}