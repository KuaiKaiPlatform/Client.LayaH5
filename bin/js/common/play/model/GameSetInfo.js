var common;
(function (common) {
    var play;
    (function (play) {
        var model;
        (function (model) {
            /*
             *   牌局信息
             */
            var GameSetInfo = (function () {
                function GameSetInfo(setInit) {
                    this.setInit = setInit;
                }
                GameSetInfo.prototype.getPlayerSetInfo = function () {
                    return this.playerSetInfo;
                };
                GameSetInfo.prototype.getCurrentSet = function () {
                    return this.setInit.curSet;
                };
                return GameSetInfo;
            }());
            model.GameSetInfo = GameSetInfo;
        })(model = play.model || (play.model = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=GameSetInfo.js.map