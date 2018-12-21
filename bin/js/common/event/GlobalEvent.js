/**
* 全局事件定义
*/
var common;
(function (common) {
    var event;
    (function (event) {
        var GlobalEvent = (function () {
            function GlobalEvent() {
            }
            return GlobalEvent;
        }());
        // 登录相关
        GlobalEvent.LOGIN_HTTP_RESPONSE_ERROR = "global.0001"; // 登录HTTP服务器返回错误
        GlobalEvent.WX_USER_INFO_DENIED = "global.0003"; // 用户信息授权被拒绝
        GlobalEvent.LOGIN_REQ_IN_PROCESS = "global.0004"; // 登录请求中
        // 连接相关
        GlobalEvent.SERVER_CONNECTION_FAIL = "global.0011";
        GlobalEvent.SERVER_CONNECTION_CLOSED = "global.0012";
        GlobalEvent.SERVER_RECONNECTING = "global.0013";
        GlobalEvent.SERVER_CONNECTED = "global.0014";
        // 前后台切换
        GlobalEvent.GAME_FOREGROUND = "global.0021"; // 回到前台
        GlobalEvent.GAME_BACKGROUND = "global.0022"; // 切到后台
        event.GlobalEvent = GlobalEvent;
    })(event = common.event || (common.event = {}));
})(common || (common = {}));
//# sourceMappingURL=GlobalEvent.js.map