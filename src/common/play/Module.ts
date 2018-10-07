module common.play {

    import GlobalSetting = common.model.GlobalSetting;

    export class Module {

        /**
         * 基础牌桌模块初始化
         */
        public static init() {
            console.log("common.play.Module.init@finish");
            return Promise.resolve();
        }

    }
}
