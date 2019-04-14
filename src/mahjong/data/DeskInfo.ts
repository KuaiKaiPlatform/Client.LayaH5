module mahjong.data {
    
    /**
     * 牌桌
     */
    export class DeskInfo {

        /**
         * 返回牌局模式信息：局数、底数、圈数等
         */
        public static getMode(deskDetail: common.data.DeskDetail) {
            let deskController = mahjong.play.controller.DeskController.instance;
            let gameSetInfo = deskController.getGameSetInfo();

            let totalDi = deskDetail.getSettingValue("totalDi");
            if(totalDi && totalDi > 0) {
                let currentDi = 1;
                if(gameSetInfo) currentDi = gameSetInfo.getCurrentDi();
                return "底 " + currentDi + "/" + totalDi + "   局(" + deskDetail.getCurrentSet() + ")";
            }

            let totalQuan = deskDetail.getSettingValue("totalQuan");
            if(totalQuan && totalQuan > 0) {
                let currentQuan = 1;
                if(gameSetInfo) currentQuan = gameSetInfo.getCurrentQuan();
                return "圈 " + currentQuan + "/" + totalQuan + "   局(" + deskDetail.getCurrentSet() + ")";
            }

            return "局  " + deskDetail.getCurrentSet() + "/" + deskDetail.getSettingValue("totalSet");
        }

        /**
         * 根据玩法返回万能牌角标路径
         */
        public static getAlmightyJiaoImage(deskDetail: common.data.DeskDetail) {
            //let GameRule = Protocol.getEnum("common.GameRule");
            switch(deskDetail.getRule()) {
            case Laya.Browser.window.common.GameRule.SXMJ:
                return "mahjong/card/jiao_bao1.png";    // 陕西麻将显示宝
            }
            return "mahjong/card/jiao_bao1.png";
        }

    }
}