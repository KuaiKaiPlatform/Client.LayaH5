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
            var Label = Laya.Label;
            var Handler = Laya.Handler;
            /*
             *  麻将牌桌基本信息显示
             */
            var GameSummaryView = (function (_super) {
                __extends(GameSummaryView, _super);
                function GameSummaryView(deskController) {
                    var _this = _super.call(this, deskController) || this;
                    _this.remainLabel = new Label();
                    _this.modeLabel = new Label();
                    return _this;
                }
                GameSummaryView.prototype.getRuleAttrs = function () {
                    return {
                        left: 10,
                        top: 100,
                        color: "#47c03d",
                        fontSize: 28
                    };
                };
                GameSummaryView.prototype.getModeAttrs = function () {
                    return {
                        left: 10,
                        top: 10,
                        color: "#47c03d",
                        fontSize: 20
                    };
                };
                GameSummaryView.prototype.getRemainAttrs = function () {
                    return {
                        left: 10,
                        top: 50,
                        color: "#47c03d",
                        fontSize: 20
                    };
                };
                GameSummaryView.prototype.showAll = function () {
                    var _this = this;
                    console.log("mahjong.play.view.GameSummaryView.show");
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/common/rule.atlas"
                    ], Handler.create(this, function () {
                        //this.showRuleSprite();
                        _this.showRuleLabel();
                        _this.showMode();
                    }));
                };
                /**
                 * 牌局开始或重连
                 */
                GameSummaryView.prototype.onSetInit = function () {
                    // 显示剩余牌数
                    this.showRemain();
                    // 显示牌局模式
                    this.showMode();
                };
                /**
                 * 显示剩余牌数，如：余 53 张
                 */
                GameSummaryView.prototype.showRemain = function () {
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    this.remainLabel.changeText("余 " + gameSetInfo.getRemainCards() + " 张");
                    this.showComponent(this.remainLabel, this.getRemainAttrs());
                };
                /**
                 * 隐藏剩余牌数
                 */
                GameSummaryView.prototype.hideRemain = function () {
                    this.removeComponent(this.remainLabel);
                };
                /**
                 * 显示牌局模式，如：局 3/8
                 */
                GameSummaryView.prototype.showMode = function () {
                    //console.log("GameSummaryView.showMode@totalSet", GameSetting.get("totalSet"));
                    this.modeLabel.changeText(mahjong.data.DeskInfo.getMode(this.deskController.getDeskDetail()));
                    this.showComponent(this.modeLabel, this.getModeAttrs());
                };
                /**
                 * 关闭一局结算后增加局数，隐藏余牌张数
                 */
                GameSummaryView.prototype.onSetResultClosed = function () {
                    this.deskController.getDeskDetail().incrCurrentSet();
                    this.showMode();
                    this.hideRemain();
                };
                return GameSummaryView;
            }(common.play.view.GameSummaryView));
            view.GameSummaryView = GameSummaryView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=GameSummaryView.js.map