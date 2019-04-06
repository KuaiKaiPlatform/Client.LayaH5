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
             *  麻将玩家牌局信息
             */
            var PlayerSetInfo = (function (_super) {
                __extends(PlayerSetInfo, _super);
                function PlayerSetInfo(setInit, gameSetInfo) {
                    var _this = _super.call(this, setInit.playerSetInfos) || this;
                    _this.gameSetInfo = gameSetInfo;
                    _this.initForBanker(setInit);
                    var setInfo = _this.getSelf();
                    _this.selfHandcards = new model.SelfHandcards(setInfo, gameSetInfo);
                    _this.selfOperations = new model.SelfOperations(setInit.canOperDetails);
                    return _this;
                }
                PlayerSetInfo.prototype.initForBanker = function (setInit) {
                    var setInfo = this.getByUid(setInit.bankerId);
                    if (PlayerSetInfo.hasMo(setInfo)) {
                        setInfo.hasMo = true;
                    }
                };
                PlayerSetInfo.hasMo = function (setInfo) {
                    return setInfo.handCardNum % 3 == 2;
                };
                /**
                 * 是否刚摸牌
                 * @param uid
                 */
                PlayerSetInfo.prototype.hasMo = function (uid) {
                    var setInfo = this.getByUid(uid);
                    return setInfo.hasMo && setInfo.hasMo === true;
                };
                /**
                 * 设置是否刚摸牌
                 *
                 * @param uid
                 */
                PlayerSetInfo.prototype.setHasMo = function (uid, hasMo) {
                    var setInfo = this.getByUid(uid);
                    setInfo.hasMo = hasMo;
                };
                /**
                 * 设置是否报听
                 *
                 * @param uid
                 */
                PlayerSetInfo.prototype.setBaoTing = function (uid, baoTing) {
                    var setInfo = this.getByUid(uid);
                    setInfo.baoTing = baoTing;
                };
                /**
                 * 是否报听
                 *
                 * @param uid
                 */
                PlayerSetInfo.prototype.isBaoTing = function (uid) {
                    var setInfo = this.getByUid(uid);
                    return setInfo.baoTing;
                };
                PlayerSetInfo.prototype.clearBaoTing = function () {
                    var setInfos = this.getAll();
                    for (var uid in setInfos) {
                        setInfos[uid].baoTing = false;
                    }
                };
                /**
                 * 返回自身手牌对象
                 */
                PlayerSetInfo.prototype.getSelfHandcards = function () {
                    return this.selfHandcards;
                };
                /**
                 * 返回自身可执行的操作
                 */
                PlayerSetInfo.prototype.getSelfOperations = function () {
                    return this.selfOperations;
                };
                /**
                 * 打出一张牌
                 * @param card
                 */
                PlayerSetInfo.prototype.discard = function (uid, target) {
                    var setInfo = this.getByUid(uid);
                    if (setInfo.discards.length === 0) {
                        setInfo.discards = new Array();
                    }
                    setInfo.discards.push(target);
                    setInfo.handCardNum--;
                };
                /**
                 * 增加指定玩家的手牌数量
                 *
                 * @param uid
                 * @param num
                 */
                PlayerSetInfo.prototype.incrHandcardNum = function (uid, num) {
                    var setInfo = this.getByUid(uid);
                    setInfo.handCardNum += num;
                };
                /**
                 * 减少指定玩家的手牌数量
                 *
                 * @param uid
                 * @param num
                 */
                PlayerSetInfo.prototype.decrHandcardNum = function (uid, num) {
                    var setInfo = this.getByUid(uid);
                    setInfo.handCardNum -= num;
                };
                /**
                 * 增加指定明牌（碰和杠）
                 *
                 * @param uid
                 * @param operType
                 * @param target
                 */
                PlayerSetInfo.prototype.addCardGroup = function (uid, operType, target) {
                    var setInfo = this.getByUid(uid);
                    if (!setInfo.cardGroups || setInfo.cardGroups.length === 0) {
                        setInfo.cardGroups = new Array();
                    }
                    var cardGroup = {
                        operType: operType,
                        cards: [],
                        target: target
                    };
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    switch (operType) {
                        case OperType.PENG:
                            cardGroup.cards = [target, target];
                            break;
                        case OperType.BU_GANG:
                        case OperType.AN_GANG:
                        case OperType.DIAN_GANG:
                            cardGroup.cards = [target, target, target];
                            break;
                    }
                    setInfo.cardGroups.push(cardGroup);
                };
                /**
                 * 删除指定明牌（碰和杠）
                 *
                 * @param uid
                 * @param operType
                 * @param target
                 */
                PlayerSetInfo.prototype.removeCardGroup = function (uid, operType, target) {
                    var setInfo = this.getByUid(uid);
                    if (!setInfo.cardGroups || setInfo.cardGroups.length === 0) {
                        console.warn("mahjong.play.model.PlayerSetInfo.removeCardGroup@card groups empty", uid, operType, target);
                        return false;
                    }
                    var rmIndex = setInfo.cardGroups.findIndex(function (cardGroup) {
                        return cardGroup.target == target && cardGroup.operType == operType;
                    });
                    if (rmIndex < 0) {
                        console.warn("mahjong.play.model.PlayerSetInfo.removeCardGroup@card group not found", uid, operType, target);
                        return false;
                    }
                    setInfo.cardGroups.splice(rmIndex, 1);
                    return true;
                };
                /**
                 * 删除最近一张打出的牌
                 */
                PlayerSetInfo.prototype.removeLastDiscard = function (lastOperDetail) {
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    if (!lastOperDetail || lastOperDetail.operType != OperType.DA) {
                        console.error("mahjong.model.PlayerSetInfo.removeLastDiscard@last discard not found", JSON.stringify(lastOperDetail));
                        return false;
                    }
                    var setInfo = this.getByUid(lastOperDetail.uid);
                    var rmCard = setInfo.discards.splice(setInfo.discards.length - 1, 1);
                    if (rmCard[0] != lastOperDetail.target) {
                        console.error("mahjong.model.PlayerSetInfo.removeLastDiscard@last discard not matched", JSON.stringify(lastOperDetail), rmCard[0]);
                        return false;
                    }
                    return true;
                };
                return PlayerSetInfo;
            }(common.play.model.PlayerSetInfo));
            model.PlayerSetInfo = PlayerSetInfo;
        })(model = play.model || (play.model = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=PlayerSetInfo.js.map