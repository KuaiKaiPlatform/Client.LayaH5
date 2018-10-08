module common.play.model {

    /*
     *   玩家基本信息
     */
    export class PlayerInfo {

        private static players = {};

        public static init(sDeskInfo) {
            sDeskInfo.desk.players.forEach(player => {
                player.total = 0;
                player.points.forEach(point => player.total += point);
                this.add(player);
            });
        }

        /**
         * 返回指定uid的玩家基本信息
         */
        public static getByUid(uid) {
            return this.players[uid];
        }

        /**
         * 返回指定uid的玩家基本信息
         */
        public static getSelf() {
            return this.getByUid(Login.getUid());
        }

        /**
         * 增加一名玩家的基本信息
         */
        public static add(player) {
            this.players[player.user.uid] = player;
        }

        /**
         * 删除一名玩家的基本信息
         */
        public static removeByUid(uid) {
            delete this.players[uid];
        }

        public static getAll() {
            return this.players;
        }

        public static clearAll() {
            this.players = {};
        }

        /**
         * 检查是否是自己
         */
        public static isSelf(uid): boolean {
            return Login.getUid() == uid;
        }

    }
}