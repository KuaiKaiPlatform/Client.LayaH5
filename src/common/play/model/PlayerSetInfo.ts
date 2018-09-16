module common.play.model {
    /*
     *   玩家牌局信息
     */
    export class PlayerSetInfo {

        private setInfos = {};

        constructor(setInfos) {
            setInfos.forEach(setInfo => {
                this.add(setInfo);
            });
        }

        /**
         * 返回指定uid的玩家牌局信息
         */
        public getByUid(uid) {
            return this.setInfos[uid.toString()];
        }

        /**
         * 返回自身玩家牌局信息
         */
        public getSelf() {
            return this.getByUid(PlayerBasicInfo.selfId);
        }

        /**
         * 增加一名玩家的牌局信息
         */
        public add(setInfo) {
            this.setInfos[setInfo.uid.toString()] = setInfo;
        }

        /**
         * 删除一名玩家的牌局信息
         */
        public removeByUid(uid) {
            delete this.setInfos[uid.toString()];
        }

        public getAll() {
            return this.setInfos;
        }

        public clear() {
            this.setInfos = {};
        }

    }
}