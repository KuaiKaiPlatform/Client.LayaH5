/**
* 通用工具类 
*/
module common.utils {

	export class GameRule {

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

	}

}