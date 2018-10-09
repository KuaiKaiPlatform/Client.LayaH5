module common.data {
    /*
     *   全局设置
     */
    export class GlobalSetting {

        private static setting;

        public static init(setting) {
            this.setting = setting;
        }

        public static get(key) {
            let setting = this.setting;
            return setting?setting[key]:null;
        }

    }
}
