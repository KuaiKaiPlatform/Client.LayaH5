module common.model {
    
    /**
     * 牌桌
     */
    export class DeskInfo {

        private static desks = {};

        /**
         * 返回牌桌标识
         */
        public static getKey(obj) {
            let deskId = obj.deskId;
            let clubId = obj.clubId;
            return deskId + "-" + (clubId?clubId:0);
        }

        /**
         * 增加一个牌桌信息
         */
        public static add(deskKey, desk) {
            this.desks[deskKey] = new DeskDetail(desk);
            console.log("common.model.DeskInfo.add@done", deskKey);
        }

        /**
         * 返回指定牌桌
         */
        public static get(deskKey) {
            return this.desks[deskKey];
        }

        /**
         * 删除指定牌桌
         */
        public static remove(deskKey) {
            delete this.desks[deskKey];
        }

        public static getAll() {
            return this.desks;
        }

        public static clearAll() {
            this.desks = {};
        }

    }
}