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
            GlobalSetting.init = function () {
                var MahjongTheme = Protocol.getEnum("common.MahjongTheme");
                // let Dialect = Protocol.getEnum("common.Dialect");
                // let dialect = common.utils.Random.getInt(0, 2) === 0?Dialect.YU_LIN:Dialect.PU_TONG;
                GlobalSetting.defaultSetting = {
                    mahjongTheme: MahjongTheme.GREEN,
                    volumeBg: 1,
                    volumePlay: 1 //,
                };
            };
            GlobalSetting.initSetting = function (setting) {
                GlobalSetting.setting = setting;
            };
            GlobalSetting.get = function (key) {
                var setting = GlobalSetting.setting;
                return setting[key] ? setting[key] : GlobalSetting.defaultSetting[key];
            };
            GlobalSetting.set = function (key, val) {
                GlobalSetting.setting[key] = val;
            };
            GlobalSetting.getDialect = function (rule) {
                var dialect = GlobalSetting.get("rule.dialect." + rule);
                var Dialect = Protocol.getEnum("common.Dialect");
                return dialect ? dialect : Dialect.PU_TONG;
            };
            GlobalSetting.setDialect = function (rule, dialect) {
                console.log("common.data.GlobalSetting.setDialect", rule, dialect);
                GlobalSetting.set("rule.dialect." + rule, dialect);
            };
            return GlobalSetting;
        }());
        GlobalSetting.setting = {}; // 服务器返回的玩家设置
        GlobalSetting.defaultSetting = {}; // 默认设置
        data.GlobalSetting = GlobalSetting;
    })(data = common.data || (common.data = {}));
})(common || (common = {}));
//# sourceMappingURL=GlobalSetting.js.map