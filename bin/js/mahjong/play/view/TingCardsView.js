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
            var Component = Laya.Component;
            var Image = Laya.Image;
            var Label = Laya.Label;
            /**
             *  听牌列表显示
             */
            var TingCardsView = (function (_super) {
                __extends(TingCardsView, _super);
                function TingCardsView(deskController, tingCards) {
                    var _this = _super.call(this) || this;
                    _this.cardViews = {}; //  牌值对应的牌视图，用于更新余牌数量
                    _this.deskController = deskController;
                    _this.tingCards = tingCards;
                    return _this;
                }
                /**
                 * 显示听牌列表
                 */
                TingCardsView.prototype.show = function () {
                    var _this = this;
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/mahjong/card.atlas",
                        "res/atlas/mahjong/desk.atlas",
                        TingCardsView.BG_IMG_PATH
                    ], Handler.create(this, function () {
                        _this.showTing(false);
                        _this.showCards();
                    }));
                };
                /**
                 * 隐藏听牌列表
                 */
                TingCardsView.prototype.hide = function () {
                    this.hideCards();
                    this.removeComponent(this.tingImg);
                };
                TingCardsView.prototype.createTingImg = function () {
                    this.tingImg = new Image("mahjong/desk/oper_ting.png");
                };
                TingCardsView.prototype.showTing = function (withEvent) {
                    var _this = this;
                    if (!this.tingImg) {
                        this.createTingImg();
                    }
                    this.showComponent(this.tingImg, {
                        left: 230,
                        bottom: 110,
                        scaleX: 0.5,
                        scaleY: 0.5
                    });
                    if (withEvent) {
                        this.tingImg.offAll();
                        this.tingImg.on(Laya.Event.MOUSE_OVER, this, function (e) {
                            _this.showCards();
                        });
                        this.tingImg.on(Laya.Event.MOUSE_OUT, this, function (e) {
                            _this.hideCards();
                        });
                    }
                };
                /**
                 * 显示听牌列表
                 */
                TingCardsView.prototype.createCardsUI = function () {
                    this.cardsUI = new Component();
                    this.cardsUI.zOrder = 1100;
                    // 添加背景
                    var bgImg = new Image(TingCardsView.BG_IMG_PATH);
                    bgImg.alpha = 0.8;
                    this.cardsUI.addChild(bgImg);
                    // 排序
                    this.tingCards.sort(function (a, b) {
                        return a - b;
                    });
                    var total = this.tingCards.length; // 总数
                    var rows = Math.ceil(total / 9); // 总行数
                    // 按行添加听牌
                    for (var r = 0; r < rows; r++) {
                        var columns = (r == rows - 1) ? total % 9 : 9; // 本行牌数
                        // 逐个添加本行听牌（先从第一列添加，不够9列，整体右移后居中）
                        for (var c = 0; c < columns; c++) {
                            var card = this.tingCards[r * 9 + c];
                            var cardView = this.deskController.createLandscapeCard(card);
                            this.cardViews[card] = cardView;
                            cardView.centerX = 90 * c - 370 + (9 - columns) * 45;
                            cardView.bottom = 20 + 80 * (rows - r - 1);
                            var labelRemain = new Label();
                            labelRemain.changeText(TingCardsView.SIGN_NUM + this.deskController.getGameSetInfo().getRemainNum(card));
                            labelRemain.name = TingCardsView.LABEL_NUM;
                            labelRemain.color = "#FFFFFF";
                            labelRemain.fontSize = 20;
                            labelRemain.left = 40;
                            labelRemain.bottom = 10;
                            cardView.addChild(labelRemain);
                            this.cardsUI.addChild(cardView);
                        }
                    }
                    var uiHeight = 100 + (rows - 1) * 80;
                    var uiWidth = 873;
                    bgImg.scaleX = uiWidth / bgImg.displayWidth;
                    bgImg.scaleY = uiHeight / bgImg.displayHeight;
                    this.cardsUI.width = uiWidth;
                    this.cardsUI.height = uiHeight;
                };
                /**
                 * 显示听牌列表
                 */
                TingCardsView.prototype.showCards = function () {
                    if (!this.cardsUI) {
                        this.createCardsUI();
                    }
                    // 更新余牌数量
                    this.updateRemainNum();
                    // 显示
                    this.showComponent(this.cardsUI, {
                        bottom: 174,
                        centerX: 0
                    });
                };
                TingCardsView.prototype.updateRemainNum = function () {
                    var _this = this;
                    this.tingCards.forEach(function (card) {
                        var cardView = _this.cardViews[card];
                        if (!cardView) {
                            console.error("mahjong.play.view.TingCardsView.updateRemainNum@card view not found", card);
                            return;
                        }
                        var num = cardView.getChildByName(TingCardsView.LABEL_NUM);
                        num.changeText(TingCardsView.SIGN_NUM + _this.deskController.getGameSetInfo().getRemainNum(card));
                    });
                };
                TingCardsView.prototype.hideCards = function () {
                    this.removeComponent(this.cardsUI);
                };
                return TingCardsView;
            }(common.view.ComponentView));
            TingCardsView.BG_IMG_PATH = "mahjong/desk/bg_ting.png";
            TingCardsView.LABEL_NUM = "num";
            TingCardsView.SIGN_NUM = "×";
            view.TingCardsView = TingCardsView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=TingCardsView.js.map