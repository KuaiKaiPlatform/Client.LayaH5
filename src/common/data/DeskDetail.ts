module common.data {
    
    /**
     * 牌桌
     */
    export class DeskDetail {
        // 消息返回的 desk 对象
        private desk;
        private players = {};

        public constructor(desk) {
            this.desk = desk;
            desk.players.forEach(player => {
                this.addPlayer(player);
            });
        }

        /**
         * 返回牌桌标识：deskId-clubId
         */
        public getKey() {
            return DeskInfo.getKey(this.desk);
        }

        public getRule() {
            return this.desk.rule;
        }

        public getSettingValue(key) {
            let setting = this.desk.setting;
            return setting?setting[key]:null;
        }

        /**
         * 玩家加入牌局
         */
        public addPlayer(player) {
            // 玩家总分
            player.total = 0;
            player.points.forEach(point => player.total += point);
            this.players[player.user.uid] = player;
            console.log("common.model.DeskDetail.addPlayer", player.user.uid, this.getKey());
        }

        public getAllPlayers() {
            return this.players;
        }

        public removeAllPlayers() {
            this.players = {};
        }

        /**
         * 删除一名玩家
         */
        public removePlayer(uid) {
            delete this.players[uid];
        }

        /**
         * 返回指定uid的玩家信息
         */
        public getPlayer(uid) {
            return this.players[uid];
        }

        /**
         * 是否为自己加入的牌桌
         */
        public hasSelf() {
            return Login.getUid() in this.players;
        }

    }
}