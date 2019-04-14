var common;
(function (common) {
    var play;
    (function (play) {
        var Module = (function () {
            function Module() {
            }
            // // 麻将牌桌
            // public static mahjongController;
            // // 扑克牌桌
            // public static pokerController;
            /**
             * 基础牌桌模块初始化
             */
            Module.init = function () {
                console.log("common.play.Module.init@finish");
                return Promise.resolve();
            };
            Module.getDeskControllerByRule = function (rule) {
                var GameRule = common.utils.GameRule;
                if (GameRule.isMahjong(rule)) {
                    return mahjong.play.controller.DeskController.instance;
                }
                else if (GameRule.isPoker(rule)) {
                }
            };
            return Module;
        }());
        play.Module = Module;
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=Module.js.map