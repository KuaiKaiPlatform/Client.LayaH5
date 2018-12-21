var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var model;
        (function (model) {
            /*
             *  麻将牌局信息
             */
            var GameSetInfo = (function (_super) {
                __extends(GameSetInfo, _super);
                function GameSetInfo(setInit) {
                    var _this = _super.call(this, setInit) || this;
                    _this.playerSetInfo = new mahjong.play.model.PlayerSetInfo(setInit.playerSetInfos);
                    return _this;
                }
                GameSetInfo.prototype.getRemainCards = function () {
                    return this.setInit.remainCards;
                };
                return GameSetInfo;
            }(common.play.model.GameSetInfo));
            model.GameSetInfo = GameSetInfo;
        })(model = play.model || (play.model = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=GameSetInfo.js.map