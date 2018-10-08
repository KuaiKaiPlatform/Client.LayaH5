module common.play.model {
    /*
     *   牌局设置
     */
    export class GameSetting {

        public static rule;
        public static settings = {};

        public static init(sDeskInfo) {
            let desk = sDeskInfo.desk;
            this.rule = desk.rule;
            this.settings[desk.rule] = desk.setting;
            console.log("GameSetting.init", this.rule, desk.setting);
        }

        public static get(key) {
            return this.getSettingByRule(this.rule)[key];
        }

        public static getSettingByRule(rule) {
            return this.settings[rule];
        }

    }
}
