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
            /**
             * 返回玩法名称
             * @param rule
             */
            GameRule.getRuleName = function (rule) {
                var GameRule = Protocol.getEnum("common.GameRule");
                switch (rule) {
                    case GameRule.LIANG:
                        return "亮六飞一";
                    case GameRule.SXMJ:
                        return "陕西麻将";
                    case GameRule.HUA_SHUI:
                        return "划水麻将";
                    case GameRule.WEI_NAN:
                        return "渭南麻将";
                    case GameRule.BAO_JI:
                        return "宝鸡麻将";
                    case GameRule.ONE_FIVE_NINE:
                        return "159麻将";
                    case GameRule.GUO_ZI:
                        return "打锅子";
                    case GameRule.HAN_ZHONG:
                        return "汉中麻将";
                }
                return "未知玩法";
            };
            return GameRule;
        }());
        utils.GameRule = GameRule;
    })(utils = common.utils || (common.utils = {}));
})(common || (common = {}));
//# sourceMappingURL=GameRule.js.map