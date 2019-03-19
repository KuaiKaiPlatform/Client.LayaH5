var common;
(function (common) {
    var play;
    (function (play) {
        var controller;
        (function (controller) {
            // 牌桌控制器
            var DeskController = (function () {
                function DeskController() {
                }
                DeskController.prototype.getMessageListener = function () {
                    return this.messageListener;
                };
                DeskController.prototype.getDeskView = function () {
                    return this.deskView;
                };
                DeskController.prototype.getGameSetInfo = function () {
                    return this.gameSetInfo;
                };
                DeskController.prototype.getDeskDetail = function () {
                    return this.deskDetail;
                };
                DeskController.prototype.setDeskDetail = function (deskDetail) {
                    this.deskDetail = deskDetail;
                };
                DeskController.prototype.launch = function (deskDetail) {
                    this.setDeskDetail(deskDetail);
                    this.deskView.show();
                };
                /**
                 * 牌局是否结束（是否收到SGameResult）
                 */
                DeskController.prototype.isGameEnded = function () {
                    if (this.deskDetail && this.deskDetail.getGameResult())
                        return true;
                    return false;
                };
                return DeskController;
            }());
            controller.DeskController = DeskController;
        })(controller = play.controller || (play.controller = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=DeskController.js.map