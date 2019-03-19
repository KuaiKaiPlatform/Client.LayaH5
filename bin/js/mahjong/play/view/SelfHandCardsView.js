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
            /**
             *  麻将玩家手牌显示
             */
            var SelfHandCardsView = (function (_super) {
                __extends(SelfHandCardsView, _super);
                function SelfHandCardsView(deskController, playerHandCardsView) {
                    var _this = _super.call(this) || this;
                    _this.cardViews = {};
                    _this.deskController = deskController;
                    _this.playerHandCardsView = playerHandCardsView;
                    return _this;
                }
                SelfHandCardsView.prototype.getAttrs = function () {
                    return SelfHandCardsView.SELF;
                };
                /**
                 * 显示自己的手牌
                 */
                SelfHandCardsView.prototype.show = function () {
                    var _this = this;
                    var pos = mahjong.play.Position.SELF;
                    var handcardUI = this.playerHandCardsView.getUI(Login.getUid(), pos);
                    this.playerHandCardsView.clear(handcardUI);
                    var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                    // 刚摸的牌
                    var moCard = playerSetInfo.getSelfHandcards().getMoCard();
                    if (moCard && moCard > 0) {
                        this.showSelfMo(handcardUI, moCard);
                    }
                    // 遍历并显示每张手牌
                    playerSetInfo.getSelfHandcards().getHandcards().forEach(function (handcard, index) {
                        _this.addSelfCard(handcardUI, index, handcard);
                    });
                    // 显示
                    this.showComponent(handcardUI, SelfHandCardsView.SELF);
                };
                /**
                 * 显示自己的摸牌
                 */
                SelfHandCardsView.prototype.showSelfMo = function (handcardUI, moCard) {
                    var GlobalSetting = common.data.GlobalSetting;
                    handcardUI.removeChildByName("mo");
                    var moCardView = view.SingleCardFactory.createSelfHand(GlobalSetting.get("mahjongTheme"), moCard);
                    moCardView.right = 0;
                    moCardView.name = "mo";
                    handcardUI.addChild(moCardView);
                    moCardView["cardIndex"] = SelfHandCardsView.INDEX_MO;
                    moCardView.on(Laya.Event.CLICK, this, this.clickHandler);
                    this.cardViews[SelfHandCardsView.INDEX_MO] = moCardView;
                    console.log("mahjong.play.view.SelfHandCardsView.showSelfMo@card", moCard);
                };
                /**
                 * 增加一张自己的手牌
                 */
                SelfHandCardsView.prototype.addSelfCard = function (handcardUI, index, card) {
                    var GlobalSetting = common.data.GlobalSetting;
                    var handcards = handcardUI.getChildByName("handcards");
                    var cardView = view.SingleCardFactory.createSelfHand(GlobalSetting.get("mahjongTheme"), card);
                    cardView.right = 64 * index;
                    handcards.addChild(cardView);
                    cardView["cardIndex"] = index;
                    cardView.on(Laya.Event.CLICK, this, this.clickHandler);
                    this.cardViews[index] = cardView;
                };
                /**
                 * 点击手牌
                 */
                SelfHandCardsView.prototype.clickHandler = function (e) {
                    var cardIndex = e.target["cardIndex"];
                    var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                    var selfHandcards = playerSetInfo.getSelfHandcards();
                    if (!playerSetInfo.getSelfOperations().hasDaOperation()) {
                        console.log("mahjong.view.SelfHandCardsView.clickHandler@DA operation not found");
                        return;
                    }
                    Laya.SoundManager.playSound("res/sounds/play/click_card.mp3");
                    var target = selfHandcards.getHandcard(cardIndex);
                    // 二次点击，打出
                    if (selfHandcards.isSelected(cardIndex)) {
                        console.log("mahjong.view.SelfHandCardsView.clickHandler@click2|index, target", cardIndex, target);
                        Laya.SoundManager.playSound("res/sounds/play/discard.mp3");
                        // 发送打牌
                        var OperType = Protocol.getEnum("mahjong.OperType");
                        MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.COperCard, {
                            operDetail: {
                                operType: OperType.DA,
                                target: target
                            }
                        });
                        // 清空选中的手牌位置
                        selfHandcards.clearSelected();
                        return;
                    }
                    console.log("mahjong.view.SelfHandCardsView.clickHandler@click|index, target", cardIndex, target);
                    // 退回已选中的手牌
                    var selectedIndex = selfHandcards.getSelected();
                    if (selectedIndex >= 0) {
                        this.cardViews[selectedIndex]["bottom"] = 0;
                    }
                    // 突起新选中的手牌
                    selfHandcards.setSelected(cardIndex);
                    e.target["bottom"] = 20;
                };
                return SelfHandCardsView;
            }(common.view.ComponentView));
            SelfHandCardsView.INDEX_MO = 100;
            SelfHandCardsView.SELF = {
                centerX: 0,
                bottom: 10,
                width: 916,
                height: 94
            };
            view.SelfHandCardsView = SelfHandCardsView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=SelfHandCardsView.js.map