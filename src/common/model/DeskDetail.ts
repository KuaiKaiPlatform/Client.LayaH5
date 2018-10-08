module common.model {
    
    /**
     * 牌桌
     */
    export class DeskDetail {

        private desk;
        private players = {};

        public constructor(desk) {
            this.desk = desk;
            desk.players.forEach(player => {
                this.addPlayer(player);
            });
        }

        /**
         * 返回牌桌标识
         */
        public getKey() {
            let deskId = this.desk.deskId;
            let clubId = this.desk.clubId;
            return deskId + "-" + (clubId?clubId:0);
        }

        /**
         * 玩家加入牌局
         */
        public addPlayer(player) {
            player.total = 0;
            player.points.forEach(point => player.total += point);
            this.players[player.user.uid] = player;
            console.log("DeskDetail.addPlayer", player.user.uid, this.getKey());
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

    }
}