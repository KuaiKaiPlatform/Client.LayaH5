var common;
(function (common) {
    var data;
    (function (data) {
        /*
         *   玩法规则
         */
        var RuleName = (function () {
            function RuleName() {
            }
            RuleName.get = function (rule) {
                var GameRule = Protocol.getEnum("common.GameRule");
                switch (rule) {
                    case GameRule.SXMJ:
                        return "陕西麻将";
                    case GameRule.LIANG:
                        return "亮六飞一";
                    case GameRule.HUA_SHUI:
                        return "划水麻将";
                    case GameRule.WEI_NAN:
                        return "渭南麻将";
                    case GameRule.HAN_ZHONG:
                        return "汉中麻将";
                    case GameRule.ONE_FIVE_NINE:
                        return "159麻将";
                    case GameRule.GUO_ZI:
                        return "打锅子";
                }
                return "未名玩法";
            };
            return RuleName;
        }());
        data.RuleName = RuleName;
    })(data = common.data || (common.data = {}));
})(common || (common = {}));
//# sourceMappingURL=RuleName.js.map