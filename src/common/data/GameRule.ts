module common.data {

	export class GameRule {
        // 玩法相关方言
        protected static rule2Dialects = {};

		/**
		 * 检查是否麻将玩法
		 */
		public static isMahjong(rule) {
			return rule < 99000;
		}

		/**
		 * 检查是否扑克玩法
		 */
		public static isPoker(rule) {
			return rule > 99000;
		}

		/**
		 * 返回玩法名称
		 * @param rule 
		 */
        public static getRuleName(rule) {
            let GameRule = Protocol.getEnum("common.GameRule");

            switch(rule) {
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
        }

        public static putDialects(rule, dialects) {
            GameRule.rule2Dialects[rule] = dialects;
        }

        public static getDialects(rule) {
            return GameRule.rule2Dialects[rule];
        }

	}

}