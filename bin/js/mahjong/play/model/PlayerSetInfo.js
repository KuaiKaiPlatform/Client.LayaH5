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
             *  麻将玩家牌局信息
             */
            var PlayerSetInfo = (function (_super) {
                __extends(PlayerSetInfo, _super);
                function PlayerSetInfo(setInfos) {
                    return _super.call(this, setInfos) || this;
                }
                /**
                 * 是否刚摸牌
                 * @param setInfo
                 */
                PlayerSetInfo.hasMo = function (setInfo) {
                    return setInfo.handCardNum % 3 == 2;
                };
                return PlayerSetInfo;
            }(common.play.model.PlayerSetInfo));
            model.PlayerSetInfo = PlayerSetInfo;
        })(model = play.model || (play.model = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=PlayerSetInfo.js.map