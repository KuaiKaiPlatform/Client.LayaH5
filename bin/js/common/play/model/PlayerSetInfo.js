var common;
(function (common) {
    var play;
    (function (play) {
        var model;
        (function (model) {
            /*
             *   玩家牌局信息
             */
            var PlayerSetInfo = (function () {
                function PlayerSetInfo(setInfos) {
                    var _this = this;
                    this.setInfos = {};
                    setInfos.forEach(function (setInfo) {
                        _this.add(setInfo);
                    });
                }
                /**
                 * 返回指定uid的玩家牌局信息
                 */
                PlayerSetInfo.prototype.getByUid = function (uid) {
                    return this.setInfos[uid];
                };
                /**
                 * 返回自身玩家牌局信息
                 */
                PlayerSetInfo.prototype.getSelf = function () {
                    return this.getByUid(Login.getUid());
                };
                /**
                 * 增加一名玩家的牌局信息
                 */
                PlayerSetInfo.prototype.add = function (setInfo) {
                    this.setInfos[setInfo.uid] = setInfo;
                };
                /**
                 * 删除一名玩家的牌局信息
                 */
                PlayerSetInfo.prototype.removeByUid = function (uid) {
                    delete this.setInfos[uid];
                };
                PlayerSetInfo.prototype.getAll = function () {
                    return this.setInfos;
                };
                PlayerSetInfo.prototype.clear = function () {
                    this.setInfos = {};
                };
                return PlayerSetInfo;
            }());
            model.PlayerSetInfo = PlayerSetInfo;
        })(model = play.model || (play.model = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=PlayerSetInfo.js.map