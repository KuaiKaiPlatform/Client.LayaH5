var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var view;
        (function (view) {
            /**
             *   比赛结果对话框工厂类
             */
            var ResultDialogFactory = (function () {
                function ResultDialogFactory() {
                }
                /**
                 *   新建一张自己的指定手牌
                 */
                ResultDialogFactory.createGameResultDialog = function (rule, deskController, sGameResult) {
                    var GameRule = Protocol.getEnum("common.GameRule");
                    switch (rule) {
                        case GameRule.SXMJ:
                            return new mahjong.play.view.SXMJGameResultDialog(deskController, sGameResult);
                    }
                    return new mahjong.play.view.GameResultDialog(deskController, sGameResult);
                };
                return ResultDialogFactory;
            }());
            view.ResultDialogFactory = ResultDialogFactory;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=ResultDialogFactory.js.map