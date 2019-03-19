module mahjong.data {
    
    /**
     * 牌桌
     */
    export class DeskInfo {

        /**
         * 返回牌局模式信息：局数、底数、圈数等
         */
        public static getMode(deskDetail: common.data.DeskDetail) {
            return "局  " + deskDetail.getCurrentSet() + "/" + deskDetail.getSettingValue("totalSet");
        }

    }
}