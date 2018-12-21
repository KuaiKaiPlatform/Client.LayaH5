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
                    _this.handCardUIs = {};
                    _this.deskController = deskController;
                    return _this;
                }
                PlayerHandCardsView.prototype.getAttrs = function (pos) {
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            return PlayerHandCardsView.SELF;
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
                    var handCardUI = this.handCardUIs[uid.toString()];
                    if (!handCardUI) {
                        handCardUI = new View();
                        var handcards = new View();
                        handcards.name = "handcards";
                        handCardUI.addChild(handcards);
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
                        this.handCardUIs[uid.toString()] = handCardUI;
                    }
                    return handCardUI;
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
                        var gameSetInfo = _this.deskController.getGameSetInfo();
                        var setInfos = gameSetInfo.getPlayerSetInfo().getAll();
                        for (var key in setInfos) {
                            var setInfo = setInfos[key];
                            _this.show(setInfo);
                        }
                    }));
                };
                /**
                 * 显示指定玩家手牌
                 */
                PlayerHandCardsView.prototype.show = function (setInfo) {
                    if (Login.isSelf(setInfo.uid)) {
                        this.showSelf(setInfo);
                        return;
                    }
                    var pos = this.deskController.findPositionByUid(setInfo.uid);
                    var handcardUI = this.getUI(setInfo.uid, pos);
                    var hasMo = mahjong.play.model.PlayerSetInfo.hasMo(setInfo);
                    var handCardNum = hasMo ? setInfo.handCardNum - 1 : setInfo.handCardNum;
                    // 遍历并显示每张打出的牌
                    for (var i = 0; i < handCardNum; i++) {
                        this.addSingleCard(handcardUI, i, pos);
                    }
                    if (hasMo) {
                        this.showMoCard(handcardUI, pos);
                    }
                    // 显示
                    this.showComponent(handcardUI, this.getAttrs(pos));
                };
                /**
                 * 显示一张其他玩家的手牌
                 */
                PlayerHandCardsView.prototype.addSingleCard = function (handcardUI, index, pos) {
                    var GlobalSetting = common.data.GlobalSetting;
                    var handcards = handcardUI.getChildByName("handcards");
                    var singleCard;
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            break;
                        case mahjong.play.Position.NEXT:
                            singleCard = view.SingleCardFactory.createNextHand(GlobalSetting.get("mahjongTheme"));
                            singleCard.top = 23 * index;
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            singleCard = view.SingleCardFactory.createOppositeHand(GlobalSetting.get("mahjongTheme"));
                            singleCard.left = 40 * index;
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            singleCard = view.SingleCardFactory.createPreHand(GlobalSetting.get("mahjongTheme"));
                            singleCard.bottom = 23 * index;
                            singleCard.zOrder = 1000 - index;
                            break;
                    }
                    handcards.addChild(singleCard);
                };
                /**
                 * 显示其他玩家摸到的手牌
                 */
                PlayerHandCardsView.prototype.showMoCard = function (handcardUI, pos) {
                    var GlobalSetting = common.data.GlobalSetting;
                    var moCard = handcardUI.getChildByName("mo");
                    if (moCard) {
                        moCard.visible = true;
                        return;
                    }
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            break;
                        case mahjong.play.Position.NEXT:
                            moCard = view.SingleCardFactory.createNextHand(GlobalSetting.get("mahjongTheme"));
                            moCard.top = 0;
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            moCard = view.SingleCardFactory.createOppositeHand(GlobalSetting.get("mahjongTheme"));
                            moCard.left = 0;
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            moCard = view.SingleCardFactory.createPreHand(GlobalSetting.get("mahjongTheme"));
                            moCard.bottom = 0;
                            break;
                    }
                    moCard.name = "mo";
                    handcardUI.addChild(moCard);
                };
                /**
                 * 显示自己的手牌
                 */
                PlayerHandCardsView.prototype.showSelf = function (setInfo) {
                    var _this = this;
                    var pos = mahjong.play.Position.SELF;
                    var handcardUI = this.getUI(setInfo.uid, pos);
                    var handcards = setInfo.handcards;
                    var hasMo = mahjong.play.model.PlayerSetInfo.hasMo(setInfo);
                    if (hasMo) {
                        this.showSelfMo(handcardUI, handcards[handcards.length - 1]);
                    }
                    // 复制除了摸牌外的手牌，排序
                    var showHandcards = hasMo ? handcards.slice(0, handcards.length - 1) : handcards.slice(0);
                    showHandcards.sort(function (a, b) { return b - a; });
                    // 遍历并显示每张打出的牌
                    showHandcards.forEach(function (handcard, index) {
                        _this.addSelfCard(handcardUI, index, handcard);
                    });
                    // 显示
                    this.showComponent(handcardUI, this.getAttrs(pos));
                };
                /**
                 * 显示自己的摸牌
                 */
                PlayerHandCardsView.prototype.showSelfMo = function (handcardUI, moCard) {
                    var GlobalSetting = common.data.GlobalSetting;
                    handcardUI.removeChildByName("mo");
                    var moCardView = view.SingleCardFactory.createSelfHand(GlobalSetting.get("mahjongTheme"), moCard);
                    moCardView.right = 0;
                    moCardView.name = "mo";
                    handcardUI.addChild(moCardView);
                    console.log("PlayerHandCardsView.showSelfMo@card", moCard);
                };
                /**
                 * 增加一张自己的手牌
                 */
                PlayerHandCardsView.prototype.addSelfCard = function (handcardUI, index, card) {
                    var GlobalSetting = common.data.GlobalSetting;
                    var handcards = handcardUI.getChildByName("handcards");
                    var cardView = view.SingleCardFactory.createSelfHand(GlobalSetting.get("mahjongTheme"), card);
                    cardView.right = 64 * index;
                    handcards.addChild(cardView);
                };
                return PlayerHandCardsView;
            }(common.view.ComponentView));
            PlayerHandCardsView.SELF = {
                centerX: 0,
                bottom: 10,
                width: 916,
                height: 94
            };
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