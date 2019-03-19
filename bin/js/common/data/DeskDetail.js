var common;
(function (common) {
    var data;
    (function (data) {
        /**
         * 牌桌
         */
        var DeskDetail = (function () {
            function DeskDetail(desk) {
                var _this = this;
                this.players = {};
                this.setResults = {};
                this.desk = desk;
                desk.settings = JSON.parse(desk.setting.json);
                desk.players.forEach(function (player) {
                    _this.addPlayer(player);
                });
            }
            /**
             * 返回牌桌标识：deskId-clubId
             */
            DeskDetail.prototype.getKey = function () {
                return data.DeskInfo.getKey(this.desk);
            };
            DeskDetail.prototype.getRule = function () {
                return this.desk.rule;
            };
            DeskDetail.prototype.getSettingValue = function (key) {
                var setting = this.desk.settings;
                return setting ? setting[key] : null;
            };
            DeskDetail.prototype.getSettingBool = function (key) {
                var val = this.getSettingValue(key);
                if (!val)
                    return false;
                if (!isNaN(val))
                    return val > 0; // 大于1的数字
                return val.toLowerCase() === "true"; // 值为true，其他都是false
            };
            /**
             * 玩家加入牌局
             */
            DeskDetail.prototype.addPlayer = function (player) {
                // 玩家总分
                player.total = 0;
                player.points.forEach(function (point) { return player.total += point; });
                this.players[player.user.uid] = player;
                console.log("common.model.DeskDetail.addPlayer", player.user.uid, this.getKey());
            };
            DeskDetail.prototype.getAllPlayers = function () {
                return this.players;
            };
            DeskDetail.prototype.removeAllPlayers = function () {
                this.players = {};
            };
            /**
             * 删除一名玩家
             */
            DeskDetail.prototype.removePlayer = function (uid) {
                delete this.players[uid];
            };
            /**
             * 返回指定uid的玩家信息
             */
            DeskDetail.prototype.getPlayer = function (uid) {
                return this.players[uid];
            };
            /**
             * 是否为自己加入的牌桌
             */
            DeskDetail.prototype.hasSelf = function () {
                return Login.getUid() in this.players;
            };
            DeskDetail.prototype.getBankerId = function () {
                return this.desk.bankerId;
            };
            DeskDetail.prototype.setBankerId = function (bankerId) {
                this.desk.bankerId = bankerId;
            };
            DeskDetail.prototype.isBanker = function (uid) {
                return this.desk.bankerId == uid;
            };
            DeskDetail.prototype.getCurrentSet = function () {
                return Math.max(this.desk.curSet, 1); // 从第一局开始
            };
            DeskDetail.prototype.setCurrentSet = function (curSet) {
                this.desk.curSet = curSet;
            };
            DeskDetail.prototype.incrCurrentSet = function () {
                this.desk.curSet++;
            };
            DeskDetail.prototype.setStatus = function (status) {
                this.desk.status = status;
            };
            DeskDetail.prototype.getStatus = function () {
                return this.desk.status;
            };
            DeskDetail.prototype.setPrepared = function (uid) {
                this.players[uid].prepared = true;
            };
            DeskDetail.prototype.setBet = function (uid, bet) {
                this.players[uid].bet = bet;
            };
            DeskDetail.prototype.clearPrepared = function () {
                for (var uid in this.players) {
                    this.players[uid].prepared = false;
                }
            };
            DeskDetail.prototype.addSetResult = function (sSetResult) {
                this.setResults[sSetResult.curSet] = sSetResult;
            };
            DeskDetail.prototype.getSetResult = function (set) {
                return this.setResults[set];
            };
            DeskDetail.prototype.getCurSetResult = function () {
                return this.setResults[this.getCurrentSet()];
            };
            DeskDetail.prototype.setGameResult = function (sGameResult) {
                this.sGameResult = sGameResult;
            };
            DeskDetail.prototype.getGameResult = function () {
                return this.sGameResult;
            };
            return DeskDetail;
        }());
        data.DeskDetail = DeskDetail;
    })(data = common.data || (common.data = {}));
})(common || (common = {}));
//# sourceMappingURL=DeskDetail.js.map