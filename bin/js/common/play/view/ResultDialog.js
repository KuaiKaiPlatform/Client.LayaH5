var common;
(function (common) {
    var play;
    (function (play) {
        var view;
        (function (view) {
            /**
             * 牌局结果显示
             */
            var ResultDialog = (function () {
                function ResultDialog(deskController, result) {
                    this.deskController = deskController;
                    this.result = result;
                }
                ResultDialog.prototype.show = function () {
                    console.log("common.play.view.ResultDialog.show");
                    if (this.dialog) {
                        this.dialog.popup();
                    }
                };
                return ResultDialog;
            }());
            view.ResultDialog = ResultDialog;
        })(view = play.view || (play.view = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=ResultDialog.js.map