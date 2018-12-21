var common;
(function (common) {
    var data;
    (function (data) {
        /*
         *   全局设置
         */
        var GlobalSetting = (function () {
            function GlobalSetting() {
            }
            GlobalSetting.init = function (setting) {
                this.setting = setting;
            };
            GlobalSetting.get = function (key) {
                var setting = this.setting;
                return setting ? setting[key] : null;
            };
            return GlobalSetting;
        }());
        data.GlobalSetting = GlobalSetting;
    })(data = common.data || (common.data = {}));
})(common || (common = {}));
//# sourceMappingURL=GlobalSetting.js.map