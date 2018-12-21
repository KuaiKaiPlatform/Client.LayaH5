var common;
(function (common) {
    var data;
    (function (data) {
        /**
         * 牌桌
         */
        var DeskInfo = (function () {
            function DeskInfo() {
            }
            /**
             * 返回牌桌标识
             */
            DeskInfo.getKey = function (obj) {
                if (obj.uniq)
                    obj = obj.uniq;
                var deskId = obj.deskId;
                var clubId = obj.clubId;
                return deskId + "-" + (clubId ? clubId : 0);
            };
            /**
             * 增加一个牌桌信息
             */
            DeskInfo.add = function (deskKey, desk) {
                var deskDetail = new data.DeskDetail(desk);
                this.deskDetails[deskKey] = deskDetail;
                console.log("common.model.DeskInfo.add", deskKey);
                return deskDetail;
            };
            /**
             * 返回指定牌桌
             */
            DeskInfo.get = function (deskKey) {
                return this.deskDetails[deskKey];
            };
            /**
             * 删除指定牌桌
             */
            DeskInfo.remove = function (deskKey) {
                delete this.deskDetails[deskKey];
            };
            DeskInfo.getAll = function () {
                return this.deskDetails;
            };
            DeskInfo.clearAll = function () {
                this.deskDetails = {};
            };
            return DeskInfo;
        }());
        DeskInfo.deskDetails = {};
        data.DeskInfo = DeskInfo;
    })(data = common.data || (common.data = {}));
})(common || (common = {}));
//# sourceMappingURL=DeskInfo.js.map