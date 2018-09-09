module common.play.model {
    /*
     *   牌局设置
     */
    export class GameSetting {

        public static RULE                  = "rule";
        public static TOTAL_SET             = "total_set";

        //private static setting;

        public static init(setting) {
            for(let key in setting) {
                GameSetting[key.toUpperCase()] = setting[key];
            }
        }

    }
}
