/**
* 通用工具类 
*/
module common.utils {

	export class Random {

		/**
		 * 返回 start 到 end（不包含）之间的随机整数
		 * @param start 
		 * @param end 
		 */
		public static getInt(start, end) {
			let delta = Math.abs(end-start);
			return Math.floor(Math.random()*delta) + Math.min(start, end);
		}

	}

}