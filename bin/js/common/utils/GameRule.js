/**
* 通用工具类
*/
var common;
(function (common) {
    var utils;
    (function (utils) {
        var GameRule = (function () {
            function GameRule() {
            }
            /**
             * 检查是否麻将玩法
             */
            GameRule.isMahjong = function (rule) {
                return rule < 99000;
            };
            /**
             * 检查是否扑克玩法
             */
            GameRule.isPoker = function (rule) {
                return rule > 99000;
            };
            return GameRule;
        }());
        utils.GameRule = GameRule;
    })(utils = common.utils || (common.utils = {}));
})(common || (common = {}));
//# sourceMappingURL=GameRule.js.map