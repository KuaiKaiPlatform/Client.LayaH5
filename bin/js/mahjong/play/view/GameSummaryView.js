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
            /*
             *  麻将牌桌基本信息显示
             */
            var GameSummaryView = (function (_super) {
                __extends(GameSummaryView, _super);
                function GameSummaryView(deskController) {
                    var _this = _super.call(this, deskController) || this;
                    _this.remainLabel = new Label();
                    return _this;
                }
                GameSummaryView.prototype.getRuleAttrs = function () {
                    return {
                        left: 10,
                        top: 100
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
                /**
                 * 牌局开始或重连
                 */
                GameSummaryView.prototype.onSetInit = function () {
                    _super.prototype.onSetInit.call(this);
                    // 显示剩余牌数
                    this.showRemain();
                };
                // 显示剩余牌数，如：剩余 53
                GameSummaryView.prototype.showRemain = function () {
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    this.remainLabel.changeText("余 " + gameSetInfo.getRemainCards() + " 张");
                    this.showComponent(this.remainLabel, this.getRemainAttrs());
                };
                return GameSummaryView;
            }(common.play.view.GameSummaryView));
            view.GameSummaryView = GameSummaryView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=GameSummaryView.js.map