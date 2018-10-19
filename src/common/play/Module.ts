module common.play {

    import Handler = Laya.Handler;

    export class Module {

        // // 麻将牌桌
        // public static mahjongController;

        // // 扑克牌桌
        // public static pokerController;

        /**
         * 基础牌桌模块初始化
         */
        public static init() {
            console.log("common.play.Module.init@finish");
            return Promise.resolve();
        }

        public static getDeskControllerByRule(rule) : common.play.controller.DeskController {
            let GameRule = common.utils.GameRule;
            if(GameRule.isMahjong(rule)) {
                return mahjong.play.controller.DeskController.instance;
            } else if(GameRule.isPoker(rule)) {
                //return poker.play.controller.DeskController.instance;
            }
        }

    }
}
