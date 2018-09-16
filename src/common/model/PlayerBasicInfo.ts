module common.model {
    /*
     *   玩家基本信息
     */
    export class PlayerBasicInfo {

        // 自身ID
        public static selfId;

        private static basicInfos;

        public static init(basicInfos) {
            PlayerBasicInfo.basicInfos = {};
            basicInfos.forEach(basicInfo => {
                PlayerBasicInfo.add(basicInfo);
            });
        }

        /**
         * 返回指定uid的玩家基本信息
         */
        public static getByUid(uid) {
            return PlayerBasicInfo.basicInfos[uid.toString()];
        }

        /**
         * 返回指定uid的玩家基本信息
         */
        public static getSelf() {
            return PlayerBasicInfo.getByUid(PlayerBasicInfo.selfId);
        }

        /**
         * 增加一名玩家的基本信息
         */
        public static add(basicInfo) {
            PlayerBasicInfo.basicInfos[basicInfo.uid.toString()] = basicInfo;
        }

        /**
         * 删除一名玩家的基本信息
         */
        public static removeByUid(uid) {
            delete PlayerBasicInfo.basicInfos[uid.toString()];
        }

        public static getAll() {
            return PlayerBasicInfo.basicInfos;
        }

        public static clear() {
            PlayerBasicInfo.basicInfos = {};
        }

        /**
         * 检查是否是自己
         */
        public static isSelf(uid): boolean {
            return PlayerBasicInfo.selfId == uid;
        }

    }
}