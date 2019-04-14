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
                    _this.discard2TingCardsViews = {}; // 打听牌显示
                    _this.tingOngoing = false; // 正在进行听牌操作（选择一张打听牌打出）
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
                    this.cardViews = {};
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
                    // 报听状态，所有手牌变灰
                    if (playerSetInfo.isBaoTing(Login.getUid())) {
                        for (var index in this.cardViews) {
                            var cardView = this.cardViews[index];
                            cardView.getChildByName("grey").visible = true;
                        }
                    }
                    // 显示
                    this.showComponent(handcardUI, SelfHandCardsView.SELF);
                };
                /**
                 * 显示自己的摸牌
                 */
                SelfHandCardsView.prototype.showSelfMo = function (handcardUI, moCard) {
                    var GlobalSetting = common.data.GlobalSetting;
                    handcardUI.removeChildByName("mo");
                    var moCardView = this.deskController.createSelfHandcard(moCard);
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
                    var cardView = this.deskController.createSelfHandcard(card);
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
                    var target = selfHandcards.getHandcard(cardIndex);
                    // 报听状态，不能操作手牌
                    if (playerSetInfo.isBaoTing(Login.getUid())) {
                        console.log("mahjong.view.SelfHandCardsView.clickHandler@BaoTing");
                        return;
                    }
                    var canOperTing = playerSetInfo.getSelfOperations().hasTingOperation();
                    if (!playerSetInfo.getSelfOperations().hasDaOperation() && !canOperTing) {
                        // 即无听牌，也无打牌可操作
                        console.log("mahjong.view.SelfHandCardsView.clickHandler@DA or TING operation not found");
                        return;
                    }
                    // 有听牌操作
                    if (canOperTing) {
                        if (!this.tingOngoing) {
                            // 还未点击听
                            console.log("mahjong.play.view.SelfHandCardsView.clickHandler@ting is not ongoing", target);
                            return;
                        }
                        if (!selfHandcards.isDiscardTing(cardIndex)) {
                            // 不是打听牌
                            console.log("mahjong.play.view.SelfHandCardsView.clickHandler@tingOngoing and not discard ting", target);
                            return;
                        }
                    }
                    Laya.SoundManager.playSound("res/sounds/play/click_card.wav");
                    // 二次点击，打出
                    if (selfHandcards.isSelected(cardIndex)) {
                        console.log("mahjong.view.SelfHandCardsView.clickHandler@click2|index, target", cardIndex, target);
                        Laya.SoundManager.playSound("res/sounds/play/discard.wav");
                        if (this.tingOngoing) {
                            // 发送听牌
                            //let OperType = Protocol.getEnum("mahjong.OperType");
                            MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.COperCard, {
                                operDetail: {
                                    operType: Laya.Browser.window.mahjong.OperType.TING,
                                    target: target
                                }
                            });
                            this.tingOngoing = false;
                        }
                        else {
                            // 发送打牌
                            //let OperType = Protocol.getEnum("mahjong.OperType");
                            MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.COperCard, {
                                operDetail: {
                                    operType: Laya.Browser.window.mahjong.OperType.DA,
                                    target: target
                                }
                            });
                        }
                        // 隐藏听牌列表，显示听字，可随时查看听牌列表
                        if (this.tingCardsView) {
                            this.tingCardsView.hide();
                            this.tingCardsView.showTing(true);
                        }
                        // 清空打听列表
                        this.clearDiscard2TingCardsViews();
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
                    this.refreshTingCardsView(target, false);
                };
                SelfHandCardsView.prototype.refreshTingCardsView = function (target, showTingOnly) {
                    // 隐藏当前听牌列表
                    if (this.tingCardsView) {
                        this.tingCardsView.hide();
                    }
                    var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                    var selfHandcards = playerSetInfo.getSelfHandcards();
                    var tingCards = selfHandcards.getTingCards(target);
                    if (tingCards) {
                        this.tingCardsView = this.getTingCardsView(target, tingCards);
                        if (showTingOnly) {
                            this.tingCardsView.showTing(true);
                        }
                        else {
                            this.tingCardsView.show();
                        }
                    }
                    else {
                        this.tingCardsView = null;
                    }
                };
                SelfHandCardsView.prototype.getTingCardsView = function (discard, tingCards) {
                    var tingCardsView = this.discard2TingCardsViews[discard];
                    if (tingCardsView)
                        return tingCardsView;
                    tingCardsView = new view.TingCardsView(this.deskController, tingCards);
                    this.discard2TingCardsViews[discard] = tingCardsView;
                    return tingCardsView;
                };
                SelfHandCardsView.prototype.clearDiscard2TingCardsViews = function () {
                    this.discard2TingCardsViews = {};
                };
                /**
                 * 点击听后：只可选中打听的牌之后打出，其他牌置灰。
                 */
                SelfHandCardsView.prototype.onTingClicked = function () {
                    this.tingOngoing = true;
                    var selfHandcards = this.deskController.getGameSetInfo().getPlayerSetInfo().getSelfHandcards();
                    for (var index in this.cardViews) {
                        var cardView = this.cardViews[index];
                        cardView.getChildByName("grey").visible = !selfHandcards.isDiscardTing(index);
                    }
                };
                SelfHandCardsView.prototype.clear = function () {
                    // 隐藏当前听牌列表
                    if (this.tingCardsView) {
                        this.tingCardsView.hide();
                        this.tingCardsView = null;
                    }
                    this.cardViews = {};
                    this.clearDiscard2TingCardsViews();
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