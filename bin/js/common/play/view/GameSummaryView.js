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
            /**
             * 牌桌基本信息显示
             */
            var GameSummaryView = (function (_super) {
                __extends(GameSummaryView, _super);
                function GameSummaryView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.ruleSprite = new Component();
                    _this.deskController = deskController;
                    return _this;
                }
                /**
                 * 显示游戏名称
                 */
                GameSummaryView.prototype.showRule = function () {
                    //console.log("GameSummaryView.showRule", GameSetting.rule);
                    this.ruleSprite.loadImage("common/rule/" + this.deskController.getDeskDetail().getRule() + ".png");
                    this.showComponent(this.ruleSprite, this.getRuleAttrs());
                };
                GameSummaryView.prototype.showAll = function () {
                };
                /**
                 * 显示牌局模式，如：局 3/8
                 */
                // public showMode(curSet): void {
                //     //console.log("GameSummaryView.showMode@totalSet", GameSetting.get("totalSet"));
                //     this.modeLabel.changeText("局  " + curSet + "/" + this.deskController.getDeskDetail().getSettingValue("totalSet"));
                //     this.showComponent(this.modeLabel, this.getModeAttrs());
                // }
                /**
                 * 牌局开始或重连
                 */
                GameSummaryView.prototype.onSetInit = function () {
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    // 显示局数
                    // this.showMode(gameSetInfo.getCurrentSet());
                };
                return GameSummaryView;
            }(common.view.ComponentView));
            view.GameSummaryView = GameSummaryView;
        })(view = play.view || (play.view = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=GameSummaryView.js.map