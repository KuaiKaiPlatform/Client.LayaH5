var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var controller;
        (function (controller) {
            // 麻将牌桌控制器
            var DeskController = (function (_super) {
                __extends(DeskController, _super);
                function DeskController() {
                    var _this = _super.call(this) || this;
                    // 根据玩法找到牌桌显示类（暂未使用）
                    _this.rule2DeskView = {};
                    _this.deskView = new mahjong.play.view.DeskView(_this);
                    _this.messageListener = new mahjong.play.MessageListener(_this);
                    _this.operationHandler = new controller.OperationHandler(_this);
                    return _this;
                }
                DeskController.init = function () {
                    this.instance = new DeskController();
                };
                DeskController.prototype.getDeskView = function () {
                    return this.deskView;
                };
                DeskController.prototype.getOperationHandler = function () {
                    return this.operationHandler;
                };
                /**
                 * 找到指定玩家相对位置：mahjong.play.Position
                 */
                DeskController.prototype.findPosition = function (player) {
                    var selfPlayer = this.deskDetail.getPlayer(Login.getUid());
                    var pos = player.seat - selfPlayer.seat;
                    return pos < 0 ? pos + 4 : pos;
                };
                /**
                 * 找到指定玩家相对位置：mahjong.play.Position
                 */
                DeskController.prototype.findPositionByUid = function (uid) {
                    return this.findPosition(this.deskDetail.getPlayer(uid));
                };
                /**
                 * 初始化牌局数据
                 */
                DeskController.prototype.createGameSetInfo = function (setInit) {
                    this.gameSetInfo = new mahjong.play.model.GameSetInfo(setInit);
                };
                DeskController.prototype.getGameSetInfo = function () {
                    return this.gameSetInfo;
                };
                /**
                 * 新建牌局结果对话框
                 */
                DeskController.prototype.createSetResultDialog = function (setResult) {
                    this.setResultDialog = new mahjong.play.view.SetResultDialog(this, setResult);
                    return this.setResultDialog;
                };
                /**
                 * 新建整场比赛结果对话框
                 */
                DeskController.prototype.createGameResultDialog = function (gameResult) {
                    this.gameResultDialog = mahjong.play.view.ResultDialogFactory.createGameResultDialog(this.deskDetail.getRule(), this, gameResult);
                    return this.gameResultDialog;
                };
                /**
                 * 新建整场比赛结果对话框
                 */
                DeskController.prototype.getGameResultDialog = function () {
                    return this.gameResultDialog;
                };
                return DeskController;
            }(common.play.controller.DeskController));
            controller.DeskController = DeskController;
        })(controller = play.controller || (play.controller = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=DeskController.js.map