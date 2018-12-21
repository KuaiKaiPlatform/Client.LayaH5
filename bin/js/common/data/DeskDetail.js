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
            return DeskDetail;
        }());
        data.DeskDetail = DeskDetail;
    })(data = common.data || (common.data = {}));
})(common || (common = {}));
//# sourceMappingURL=DeskDetail.js.map