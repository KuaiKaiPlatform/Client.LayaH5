/**
* 全局事件定义 
*/
module common.event {
	export class GlobalEvent {

		// 登录相关
		public static LOGIN_HTTP_RESPONSE_ERROR 	= "global.0001";			// 登录HTTP服务器返回错误
		public static WX_USER_INFO_DENIED			= "global.0003";			// 用户信息授权被拒绝
		public static LOGIN_REQ_IN_PROCESS			= "global.0004";			// 登录请求中

		// 连接相关
		public static SERVER_CONNECTION_FAIL		= "global.0011";
		public static SERVER_CONNECTION_CLOSED		= "global.0012";
		public static SERVER_RECONNECTING			= "global.0013";
		public static SERVER_CONNECTED				= "global.0014";

		// 前后台切换
		public static GAME_FOREGROUND	= "global.0021";					// 回到前台
		public static GAME_BACKGROUND	= "global.0022";					// 切到后台

	}
}
