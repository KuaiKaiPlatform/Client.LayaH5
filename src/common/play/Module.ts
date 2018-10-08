module common.play {

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
