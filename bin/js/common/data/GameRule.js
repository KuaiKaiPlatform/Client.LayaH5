var common;
(function (common) {
    var data;
    (function (data) {
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
                //let GameRule = Protocol.getEnum("common.GameRule");
                var GameRule = Laya.Browser.window.common.GameRule;
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
            GameRule.putDialects = function (rule, dialects) {
                GameRule.rule2Dialects[rule] = dialects;
            };
            GameRule.getDialects = function (rule) {
                return GameRule.rule2Dialects[rule];
            };
            return GameRule;
        }());
        // 玩法相关方言
        GameRule.rule2Dialects = {};
        data.GameRule = GameRule;
    })(data = common.data || (common.data = {}));
})(common || (common = {}));
//# sourceMappingURL=GameRule.js.map