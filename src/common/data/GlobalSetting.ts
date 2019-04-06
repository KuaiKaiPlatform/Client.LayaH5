module common.data {
    /*
     *   全局设置
     */
    export class GlobalSetting {

        private static setting = {};            // 服务器返回的玩家设置
        private static defaultSetting = {};     // 默认设置

        public static init() {
            let MahjongTheme = Protocol.getEnum("common.MahjongTheme");
            // let Dialect = Protocol.getEnum("common.Dialect");
            // let dialect = common.utils.Random.getInt(0, 2) === 0?Dialect.YU_LIN:Dialect.PU_TONG;
            GlobalSetting.defaultSetting = {
                mahjongTheme: MahjongTheme.GREEN,
                volumeBg: 1,
                volumePlay: 1//,
                //"rule.dialect.61002" : dialect
            };
        }

        public static initSetting(setting) {
            GlobalSetting.setting = setting;
        }

        public static get(key) {
            let setting = GlobalSetting.setting;
            return setting[key]?setting[key]:GlobalSetting.defaultSetting[key];
        }

        public static set(key, val) {
            GlobalSetting.setting[key] = val;
        }

        public static getDialect(rule) {
            let dialect = GlobalSetting.get("rule.dialect." + rule);
            let Dialect = Protocol.getEnum("common.Dialect");
            return dialect?dialect:Dialect.PU_TONG;
        }

        public static setDialect(rule, dialect) {
            console.log("common.data.GlobalSetting.setDialect", rule, dialect);
            GlobalSetting.set("rule.dialect." + rule, dialect);
        }

    }
}
