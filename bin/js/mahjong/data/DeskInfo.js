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
                return "局  " + deskDetail.getCurrentSet() + "/" + deskDetail.getSettingValue("totalSet");
            };
            return DeskInfo;
        }());
        data.DeskInfo = DeskInfo;
    })(data = mahjong.data || (mahjong.data = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=DeskInfo.js.map