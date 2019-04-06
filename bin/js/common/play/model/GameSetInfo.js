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
                GameSetInfo.prototype.getCurrentDi = function () {
                    return this.setInit.curDi;
                };
                GameSetInfo.prototype.getCurrentQuan = function () {
                    return this.setInit.curQuan;
                };
                return GameSetInfo;
            }());
            model.GameSetInfo = GameSetInfo;
        })(model = play.model || (play.model = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=GameSetInfo.js.map