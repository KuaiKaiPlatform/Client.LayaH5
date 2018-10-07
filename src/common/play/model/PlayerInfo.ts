module common.play.model {

    import Login = common.conn.Login;

    /*
     *   玩家基本信息
     */
    export class PlayerInfo {

        private static playerInfos;

        public static init(sDeskInfo) {
            this.playerInfos = {};
            sDeskInfo.playerInfos.forEach(playerInfo => {
                playerInfo.total = 0;
                playerInfo.points.forEach(point => playerInfo.total += point);
                this.add(playerInfo);
            });
        }

        /**
         * 返回指定uid的玩家基本信息
         */
        public static getByUid(uid) {
            return this.playerInfos[uid];
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
        public static add(playerInfo) {
            this.playerInfos[playerInfo.userInfo.uid] = playerInfo;
        }

        /**
         * 删除一名玩家的基本信息
         */
        public static removeByUid(uid) {
            delete this.playerInfos[uid];
        }

        public static getAll() {
            return this.playerInfos;
        }

        public static clear() {
            this.playerInfos = {};
        }

        /**
         * 检查是否是自己
         */
        public static isSelf(uid): boolean {
            return Login.getUid() == uid;
        }

    }
}