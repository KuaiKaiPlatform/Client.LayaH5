module common.data {
    /*
     *   全局设置
     */
    export class GlobalSetting {

        public static THEME_MAHJONG                 = "theme_mahjong";

        public static init(setting) {
            for(let key in setting) {
                GlobalSetting[key.toUpperCase()] = setting[key];
            }
        }

    }
}
