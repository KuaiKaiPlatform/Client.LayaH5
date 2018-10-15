module common.data {
    
    /**
     * 牌桌
     */
    export class DeskInfo {

        private static deskDetails = {};

        /**
         * 返回牌桌标识
         */
        public static getKey(obj) {
            if(obj.uniq) obj = obj.uniq;
            let deskId = obj.deskId;
            let clubId = obj.clubId;
            return deskId + "-" + (clubId?clubId:0);
        }

        /**
         * 增加一个牌桌信息
         */
        public static add(deskKey, desk) {
            let deskDetail = new DeskDetail(desk);
            this.deskDetails[deskKey] = deskDetail;
            console.log("common.model.DeskInfo.add", deskKey);
            return deskDetail;
        }

        /**
         * 返回指定牌桌
         */
        public static get(deskKey) {
            return this.deskDetails[deskKey];
        }

        /**
         * 删除指定牌桌
         */
        public static remove(deskKey) {
            delete this.deskDetails[deskKey];
        }

        public static getAll() {
            return this.deskDetails;
        }

        public static clearAll() {
            this.deskDetails = {};
        }

    }
}