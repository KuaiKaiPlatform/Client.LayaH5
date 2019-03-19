module mahjong.play.model {
    /*
     *   自身手牌信息
     */
    export class SelfHandcards {

        protected moCard;               // 刚摸到的牌
        protected handcards;            // 当前手牌（已排序），不包含摸牌
        protected selectedIndex = -1;   // 已选择的将要打出的牌：-1表示未选择，100表示摸牌

        constructor(setInfo) {
            // 复制除了摸牌外的手牌，排序
            if(PlayerSetInfo.hasMo(setInfo)) {
                this.handcards = setInfo.handcards.slice(0, setInfo.handcards.length-1);
                this.moCard = setInfo.handcards[setInfo.handcards.length-1];
            } else {
                this.handcards = setInfo.handcards;
            }
            this.sort();
        }

        /**
         * 删除一张牌并排序手牌（打牌和补杠时调用）
         */
        public removeCard(card) {
            if(card == this.moCard) {
                this.moCard = 0;
                return;
            }

            let cardIndex = this.findHandcardIndex(card);
            if(cardIndex < 0) {
                console.error("mahjong.play.model.SelfHandcards.discard@card not found", card);
                return;
            }

            this.discardByIndex(cardIndex);
        }

        /**
         * 打出一张牌（指定位置）
         */
        public discardByIndex(cardIndex) {
            if(this.moCard > 0) {
                this.handcards.splice(cardIndex, 1, this.moCard);
                this.moCard = 0;
            } else {
                this.handcards.splice(cardIndex, 1);
            }
            this.sort();
        }

        /**
         * 查找第一张指定牌值的位置
         * 
         * @param card 
         */
        public findHandcardIndex(card) {
            return this.handcards.findIndex(handcard => {
                return handcard === card;
            });
        }

        /**
         * 手牌排序
         */
        public sort() {
            this.handcards.sort((a, b) => b-a);
        }

        /**
         * 返回摸牌
         */
        public getMoCard() {
            return this.moCard;
        }

        /**
         * 设置摸牌
         */
        public setMoCard(moCard) {
            this.moCard = moCard;
        }

        /**
         * 清除摸牌
         */
        public clearMoCard() {
            this.moCard = 0;
        }

        /**
         * 返回所有手牌（已排序）
         */
        public getHandcards() {
            return this.handcards;
        }

        /**
         * 返回单张手牌（指定位置）
         */
        public getHandcard(index) {
            let SelfHandCardsView = mahjong.play.view.SelfHandCardsView;
            return index === SelfHandCardsView.INDEX_MO?this.moCard:this.handcards[index];
        }

        /**
         * 是否已选择（指定位置）
         */
        public isSelected(index) {
           return index === this.selectedIndex;
        }

        /**
         * 修改已选择的牌位置
         */
        public setSelected(index) {
           this.selectedIndex = index;
        }

        /**
         * 返回已选择的牌位置
         */
        public getSelected() {
           return this.selectedIndex;
        }

        /**
         * 清除已选择的牌位置
         */
        public clearSelected() {
           this.selectedIndex = -1;
        }

        /**
         * 删除指定数量和牌值的手牌
         * 
         * @param card 
         * @param num 
         */
        public removeHandcards(card, num): boolean {
            let cardIndex = this.findHandcardIndex(card);
            if(cardIndex < 0) {
                console.error("mahjong.play.model.SelfHandcards.removeHandcards@card not found", card);
                return false;
            }

            let rmCards = this.handcards.splice(cardIndex, num);
            let result = rmCards.every(rmCard => {
                return rmCard === card;
            });

            if(!result) {
                console.error("mahjong.play.model.SelfHandcards.removeHandcards@cards removed error", card, JSON.stringify(rmCards));
            }

            return result;
        }

        /**
         * 增加一张手牌
         * @param card 
         */
        public addHandcard(card) {
            this.handcards.push(card);
            this.sort();
        }

    }
}