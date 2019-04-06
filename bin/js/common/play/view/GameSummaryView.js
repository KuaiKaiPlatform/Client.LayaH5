var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common;
(function (common) {
    var play;
    (function (play) {
        var view;
        (function (view) {
            var Component = laya.ui.Component;
            var Label = laya.ui.Label;
            /**
             * 牌桌基本信息显示
             */
            var GameSummaryView = (function (_super) {
                __extends(GameSummaryView, _super);
                function GameSummaryView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.ruleSprite = new Component();
                    _this.ruleLabel = new Label();
                    _this.deskController = deskController;
                    return _this;
                }
                /**
                 * 显示游戏名称图标
                 */
                GameSummaryView.prototype.showRuleSprite = function () {
                    this.ruleSprite.loadImage("common/rule/" + this.deskController.getDeskDetail().getRule() + ".png");
                    this.showComponent(this.ruleSprite, this.getRuleAttrs());
                };
                /**
                 * 显示游戏名称
                 */
                GameSummaryView.prototype.showRuleLabel = function () {
                    this.ruleLabel.changeText(common.data.GameRule.getRuleName(this.deskController.getDeskDetail().getRule()));
                    this.showComponent(this.ruleLabel, this.getRuleAttrs());
                };
                return GameSummaryView;
            }(common.view.ComponentView));
            view.GameSummaryView = GameSummaryView;
        })(view = play.view || (play.view = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=GameSummaryView.js.map