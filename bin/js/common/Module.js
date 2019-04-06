var common;
(function (common) {
    var Module = (function () {
        function Module() {
        }
        /**
         * 基础牌桌模块初始化
         */
        Module.init = function () {
            common.data.GlobalSetting.init();
            console.log("common.play.Module.init@finish");
            return Promise.resolve();
        };
        Module.getDeskControllerByRule = function (rule) {
            var GameRule = common.data.GameRule;
            if (GameRule.isMahjong(rule)) {
                return mahjong.play.controller.DeskController.instance;
            }
            else if (GameRule.isPoker(rule)) {
            }
        };
        return Module;
    }());
    common.Module = Module;
})(common || (common = {}));
//# sourceMappingURL=Module.js.map