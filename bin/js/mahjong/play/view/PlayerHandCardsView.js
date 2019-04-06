var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var view;
        (function (view) {
            var Handler = Laya.Handler;
            var View = Laya.View;
            /**
             *  麻将玩家手牌显示
             */
            var PlayerHandCardsView = (function (_super) {
                __extends(PlayerHandCardsView, _super);
                function PlayerHandCardsView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.playerUIs = {};
                    _this.deskController = deskController;
                    _this.selfHandCardsView = new view.SelfHandCardsView(deskController, _this);
                    return _this;
                }
                PlayerHandCardsView.prototype.getSelfHandCardsView = function () {
                    return this.selfHandCardsView;
                };
                PlayerHandCardsView.prototype.getAttrs = function (pos) {
                    switch (pos) {
                        // case mahjong.play.Position.SELF:
                        //     return PlayerHandCardsView.SELF;
                        case mahjong.play.Position.NEXT:
                            return PlayerHandCardsView.NEXT;
                        case mahjong.play.Position.OPPOSITE:
                            return PlayerHandCardsView.OPPOSITE;
                        case mahjong.play.Position.PREVIOUS:
                            return PlayerHandCardsView.PREVIOUS;
                    }
                };
                /**
                 * 返回指定玩家的手牌UI对象
                 */
                PlayerHandCardsView.prototype.getUI = function (uid, pos) {
                    var playerUI = this.playerUIs[uid.toString()];
                    if (!playerUI) {
                        playerUI = new View();
                        var handcards = new View();
                        handcards.name = "handcards";
                        playerUI.addChild(handcards);
                        switch (pos) {
                            case mahjong.play.Position.SELF:
                                handcards.left = 0;
                                handcards.width = 832;
                                handcards.height = 94;
                                break;
                            case mahjong.play.Position.NEXT:
                                handcards.bottom = 0;
                                handcards.width = 24;
                                handcards.height = 323;
                                break;
                            case mahjong.play.Position.OPPOSITE:
                                handcards.right = 0;
                                handcards.width = 520;
                                handcards.height = 55;
                                break;
                            case mahjong.play.Position.PREVIOUS:
                                handcards.top = 0;
                                handcards.width = 24;
                                handcards.height = 323;
                                break;
                        }
                        this.playerUIs[uid.toString()] = playerUI;
                    }
                    return playerUI;
                };
                /**
                 * 显示所有玩家手牌
                 */
                PlayerHandCardsView.prototype.showAll = function () {
                    var _this = this;
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/mahjong/card.atlas"
                    ], Handler.create(this, function () {
                        var setInfos = _this.deskController.getGameSetInfo().getPlayerSetInfo().getAll();
                        for (var uid in setInfos) {
                            _this.show(uid);
                        }
                    }));
                };
                /**
                 * 显示指定玩家ID的手牌
                 * @param uid
                 */
                PlayerHandCardsView.prototype.show = function (uid) {
                    if (Login.isSelf(uid)) {
                        this.selfHandCardsView.show();
                        return;
                    }
                    var pos = this.deskController.findPositionByUid(uid);
                    var playerUI = this.getUI(uid, pos);
                    this.clear(playerUI);
                    var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                    var setInfo = playerSetInfo.getByUid(uid);
                    var hasMo = playerSetInfo.hasMo(uid);
                    var handCardNum = hasMo ? setInfo.handCardNum - 1 : setInfo.handCardNum;
                    // 遍历并显示每张打出的牌
                    for (var i = 0; i < handCardNum; i++) {
                        this.addSingleCard(playerUI, i, pos);
                    }
                    if (hasMo) {
                        this.showMoCard(playerUI, pos);
                    }
                    // 显示
                    this.showComponent(playerUI, this.getAttrs(pos));
                };
                PlayerHandCardsView.prototype.clear = function (playerUI) {
                    playerUI.removeChildByName("mo");
                    var handcards = playerUI.getChildByName("handcards");
                    handcards.destroyChildren();
                    this.removeComponent(playerUI);
                };
                /**
                 * 清空所有玩家手牌
                 */
                PlayerHandCardsView.prototype.clearAll = function () {
                    for (var uid in this.playerUIs) {
                        this.clear(this.playerUIs[uid]);
                    }
                    this.selfHandCardsView.clear();
                };
                /**
                 * 显示一张其他玩家的手牌
                 */
                PlayerHandCardsView.prototype.addSingleCard = function (playerUI, index, pos) {
                    //let GlobalSetting = common.data.GlobalSetting;
                    var handcards = playerUI.getChildByName("handcards");
                    var singleCard;
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            return;
                        case mahjong.play.Position.NEXT:
                            singleCard = view.SingleCardFactory.createNextHand();
                            singleCard.top = 23 * index;
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            singleCard = view.SingleCardFactory.createOppositeHand();
                            singleCard.left = 40 * index;
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            singleCard = view.SingleCardFactory.createPreHand();
                            singleCard.bottom = 23 * index;
                            singleCard.zOrder = 1000 - index;
                            break;
                    }
                    singleCard.name = index;
                    handcards.addChild(singleCard);
                };
                /**
                 * 去掉一张手牌
                 */
                // public removeSingleCard(playerUI: View, index) {
                //     let handcards = playerUI.getChildByName("handcards") as View;
                //     handcards.removeChildByName(index);
                // }
                /**
                 * 显示其他玩家摸到的手牌
                 */
                PlayerHandCardsView.prototype.showMoCard = function (playerUI, pos) {
                    //let GlobalSetting = common.data.GlobalSetting;
                    var moCard = playerUI.getChildByName("mo");
                    if (moCard) {
                        moCard.visible = true;
                        return;
                    }
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            break;
                        case mahjong.play.Position.NEXT:
                            moCard = view.SingleCardFactory.createNextHand();
                            moCard.top = 0;
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            moCard = view.SingleCardFactory.createOppositeHand();
                            moCard.left = 0;
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            moCard = view.SingleCardFactory.createPreHand();
                            moCard.bottom = 0;
                            break;
                    }
                    moCard.name = "mo";
                    playerUI.addChild(moCard);
                };
                return PlayerHandCardsView;
            }(common.view.ComponentView));
            PlayerHandCardsView.NEXT = {
                right: 180,
                centerY: -50,
                width: 24,
                height: 371
            };
            PlayerHandCardsView.OPPOSITE = {
                centerX: 0,
                top: 10,
                width: 575,
                height: 55
            };
            PlayerHandCardsView.PREVIOUS = {
                left: 180,
                centerY: 50,
                width: 24,
                height: 371
            };
            view.PlayerHandCardsView = PlayerHandCardsView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=PlayerHandCardsView.js.map