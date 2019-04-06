var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var model;
        (function (model) {
            /*
             *  麻将牌局信息
             */
            var GameSetInfo = (function (_super) {
                __extends(GameSetInfo, _super);
                function GameSetInfo(setInit) {
                    var _this = _super.call(this, setInit) || this;
                    _this.lastOperDetail = setInit.lastOperDetail;
                    _this.playerSetInfo = new mahjong.play.model.PlayerSetInfo(setInit, _this);
                    return _this;
                }
                GameSetInfo.prototype.getPlayerSetInfo = function () {
                    return this.playerSetInfo;
                };
                GameSetInfo.prototype.getRemainCards = function () {
                    return this.setInit.remainCards;
                };
                GameSetInfo.prototype.setRemainCards = function (remainCards) {
                    this.setInit.remainCards = remainCards;
                };
                GameSetInfo.prototype.getBankerId = function () {
                    return this.setInit.bankerId;
                };
                GameSetInfo.prototype.getAlmighty = function () {
                    return this.setInit.almighty;
                };
                GameSetInfo.prototype.getLastOperDetail = function () {
                    return this.lastOperDetail;
                };
                GameSetInfo.prototype.setLastOperDetail = function (lastOperDetail) {
                    this.lastOperDetail = lastOperDetail;
                };
                GameSetInfo.prototype.getDiscardTingCards = function () {
                    return this.setInit.discardTingCards;
                };
                /**
                 * 返回指定牌值的桌面剩余牌数量（扣除所有打牌明牌和自身手牌后）
                 *
                 * @param val
                 */
                GameSetInfo.prototype.getRemainNum = function (val) {
                    var count = 0;
                    var setInfos = this.playerSetInfo.getAll();
                    // 打牌和明牌
                    for (var uid in setInfos) {
                        var setInfo = setInfos[uid];
                        setInfo.discards.forEach(function (card) {
                            if (card == val)
                                count++;
                        });
                        setInfo.cardGroups.forEach(function (cardGroup) {
                            if (cardGroup.target == val)
                                count++;
                            cardGroup.cards.forEach(function (card) {
                                if (card == val)
                                    count++;
                            });
                        });
                    }
                    // 自身手牌
                    var selfHandcards = this.getPlayerSetInfo().getSelfHandcards();
                    if (selfHandcards.getMoCard() == val)
                        count++;
                    selfHandcards.getHandcards().forEach(function (card) {
                        if (card == val)
                            count++;
                    });
                    return 4 - count;
                };
                return GameSetInfo;
            }(common.play.model.GameSetInfo));
            model.GameSetInfo = GameSetInfo;
        })(model = play.model || (play.model = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=GameSetInfo.js.map