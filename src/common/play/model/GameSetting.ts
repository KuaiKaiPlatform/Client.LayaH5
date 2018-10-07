module common.play.model {
    /*
     *   牌局设置
     */
    export class GameSetting {

        // public static RULE                  = "rule";
        // public static TOTAL_SET             = "total_set";
        public static rule;
        public static settings = {};

        public static init(sDeskInfo) {
            this.rule = sDeskInfo.rule;
            this.settings[sDeskInfo.rule] = sDeskInfo.setting;
            console.log("GameSetting.init", this.rule, sDeskInfo.setting);
        }

        public static get(key) {
            return this.getSettingByRule(this.rule)[key];
        }

        public static getSettingByRule(rule) {
            return this.settings[rule];
        }

    }
}
