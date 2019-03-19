var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var model;
        (function (model) {
            /*
             *   自身手牌信息
             */
            var SelfHandcards = (function () {
                function SelfHandcards(setInfo) {
                    this.selectedIndex = -1; // 已选择的将要打出的牌：-1表示未选择，100表示摸牌
                    // 复制除了摸牌外的手牌，排序
                    if (model.PlayerSetInfo.hasMo(setInfo)) {
                        this.handcards = setInfo.handcards.slice(0, setInfo.handcards.length - 1);
                        this.moCard = setInfo.handcards[setInfo.handcards.length - 1];
                    }
                    else {
                        this.handcards = setInfo.handcards;
                    }
                    this.sort();
                }
                /**
                 * 删除一张牌并排序手牌（打牌和补杠时调用）
                 */
                SelfHandcards.prototype.removeCard = function (card) {
                    if (card == this.moCard) {
                        this.moCard = 0;
                        return;
                    }
                    var cardIndex = this.findHandcardIndex(card);
                    if (cardIndex < 0) {
                        console.error("mahjong.play.model.SelfHandcards.discard@card not found", card);
                        return;
                    }
                    this.discardByIndex(cardIndex);
                };
                /**
                 * 打出一张牌（指定位置）
                 */
                SelfHandcards.prototype.discardByIndex = function (cardIndex) {
                    if (this.moCard > 0) {
                        this.handcards.splice(cardIndex, 1, this.moCard);
                        this.moCard = 0;
                    }
                    else {
                        this.handcards.splice(cardIndex, 1);
                    }
                    this.sort();
                };
                /**
                 * 查找第一张指定牌值的位置
                 *
                 * @param card
                 */
                SelfHandcards.prototype.findHandcardIndex = function (card) {
                    return this.handcards.findIndex(function (handcard) {
                        return handcard === card;
                    });
                };
                /**
                 * 手牌排序
                 */
                SelfHandcards.prototype.sort = function () {
                    this.handcards.sort(function (a, b) { return b - a; });
                };
                /**
                 * 返回摸牌
                 */
                SelfHandcards.prototype.getMoCard = function () {
                    return this.moCard;
                };
                /**
                 * 设置摸牌
                 */
                SelfHandcards.prototype.setMoCard = function (moCard) {
                    this.moCard = moCard;
                };
                /**
                 * 清除摸牌
                 */
                SelfHandcards.prototype.clearMoCard = function () {
                    this.moCard = 0;
                };
                /**
                 * 返回所有手牌（已排序）
                 */
                SelfHandcards.prototype.getHandcards = function () {
                    return this.handcards;
                };
                /**
                 * 返回单张手牌（指定位置）
                 */
                SelfHandcards.prototype.getHandcard = function (index) {
                    var SelfHandCardsView = mahjong.play.view.SelfHandCardsView;
                    return index === SelfHandCardsView.INDEX_MO ? this.moCard : this.handcards[index];
                };
                /**
                 * 是否已选择（指定位置）
                 */
                SelfHandcards.prototype.isSelected = function (index) {
                    return index === this.selectedIndex;
                };
                /**
                 * 修改已选择的牌位置
                 */
                SelfHandcards.prototype.setSelected = function (index) {
                    this.selectedIndex = index;
                };
                /**
                 * 返回已选择的牌位置
                 */
                SelfHandcards.prototype.getSelected = function () {
                    return this.selectedIndex;
                };
                /**
                 * 清除已选择的牌位置
                 */
                SelfHandcards.prototype.clearSelected = function () {
                    this.selectedIndex = -1;
                };
                /**
                 * 删除指定数量和牌值的手牌
                 *
                 * @param card
                 * @param num
                 */
                SelfHandcards.prototype.removeHandcards = function (card, num) {
                    var cardIndex = this.findHandcardIndex(card);
                    if (cardIndex < 0) {
                        console.error("mahjong.play.model.SelfHandcards.removeHandcards@card not found", card);
                        return false;
                    }
                    var rmCards = this.handcards.splice(cardIndex, num);
                    var result = rmCards.every(function (rmCard) {
                        return rmCard === card;
                    });
                    if (!result) {
                        console.error("mahjong.play.model.SelfHandcards.removeHandcards@cards removed error", card, JSON.stringify(rmCards));
                    }
                    return result;
                };
                /**
                 * 增加一张手牌
                 * @param card
                 */
                SelfHandcards.prototype.addHandcard = function (card) {
                    this.handcards.push(card);
                    this.sort();
                };
                return SelfHandcards;
            }());
            model.SelfHandcards = SelfHandcards;
        })(model = play.model || (play.model = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=SelfHandcards.js.map