var common;
(function (common) {
    var play;
    (function (play) {
        var view;
        (function (view) {
            /**
             * 牌局结果显示
             */
            var SetResultDialog = (function () {
                function SetResultDialog(deskController, sSetResult) {
                    this.deskController = deskController;
                    this.sSetResult = sSetResult;
                }
                SetResultDialog.prototype.show = function () {
                    console.log("common.play.view.SetResultDialog.show");
                    if (this.dialog) {
                        this.dialog.popup();
                    }
                };
                return SetResultDialog;
            }());
            view.SetResultDialog = SetResultDialog;
        })(view = play.view || (play.view = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=SetResultDialog.js.map