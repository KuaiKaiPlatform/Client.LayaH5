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
                DeskController.prototype.getSelfId = function () {
                    return this.selfId;
                };
                DeskController.prototype.setSelfId = function (selfId) {
                    this.selfId = selfId;
                };
                DeskController.prototype.launch = function (selfId, deskDetail) {
                    this.setSelfId(Login.getUid());
                    this.setDeskDetail(deskDetail);
                    this.deskView.show();
                };
                return DeskController;
            }());
            controller.DeskController = DeskController;
        })(controller = play.controller || (play.controller = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=DeskController.js.map