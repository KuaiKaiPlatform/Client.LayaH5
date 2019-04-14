var mahjong;
(function (mahjong) {
    var data;
    (function (data) {
        /**
         * 牌桌
         */
        var DeskInfo = (function () {
            function DeskInfo() {
            }
            /**
             * 返回牌局模式信息：局数、底数、圈数等
             */
            DeskInfo.getMode = function (deskDetail) {
                var deskController = mahjong.play.controller.DeskController.instance;
                var gameSetInfo = deskController.getGameSetInfo();
                var totalDi = deskDetail.getSettingValue("totalDi");
                if (totalDi && totalDi > 0) {
                    var currentDi = 1;
                    if (gameSetInfo)
                        currentDi = gameSetInfo.getCurrentDi();
                    return "底 " + currentDi + "/" + totalDi + "   局(" + deskDetail.getCurrentSet() + ")";
                }
                var totalQuan = deskDetail.getSettingValue("totalQuan");
                if (totalQuan && totalQuan > 0) {
                    var currentQuan = 1;
                    if (gameSetInfo)
                        currentQuan = gameSetInfo.getCurrentQuan();
                    return "圈 " + currentQuan + "/" + totalQuan + "   局(" + deskDetail.getCurrentSet() + ")";
                }
                return "局  " + deskDetail.getCurrentSet() + "/" + deskDetail.getSettingValue("totalSet");
            };
            /**
             * 根据玩法返回万能牌角标路径
             */
            DeskInfo.getAlmightyJiaoImage = function (deskDetail) {
                //let GameRule = Protocol.getEnum("common.GameRule");
                switch (deskDetail.getRule()) {
                    case Laya.Browser.window.common.GameRule.SXMJ:
                        return "mahjong/card/jiao_bao1.png"; // 陕西麻将显示宝
                }
                return "mahjong/card/jiao_bao1.png";
            };
            return DeskInfo;
        }());
        data.DeskInfo = DeskInfo;
    })(data = mahjong.data || (mahjong.data = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=DeskInfo.js.map