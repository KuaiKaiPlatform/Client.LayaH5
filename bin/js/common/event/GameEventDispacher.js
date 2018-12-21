var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* 游戏事件发送与监听
*/
var common;
(function (common) {
    var event;
    (function (event) {
        var EventDispatcher = Laya.EventDispatcher;
        var GameEventDispacher = (function (_super) {
            __extends(GameEventDispacher, _super);
            function GameEventDispacher() {
                return _super.call(this) || this;
            }
            /**
             * 派发服务器消息事件。
             * @param msgId	消息ID。
             * @param data	（可选）回调数据。<b>注意：</b>如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p ，且 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。
             * @return 此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。
             */
            GameEventDispacher.prototype.eventMsg = function (msgId, data) {
                return _super.prototype.event.call(this, "message." + msgId, data);
            };
            /**
             * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
             * @param msgId		消息ID。
             * @param caller	事件侦听函数的执行域。
             * @param listener	事件侦听函数。
             * @param args		（可选）事件侦听函数的回调参数。
             * @return 此 EventDispatcher 对象。
             */
            GameEventDispacher.prototype.onMsg = function (msgId, caller, listener, args) {
                console.log("GameEventDispacher.onMsg@listener registered on message", Protocol.getMsgType(msgId), msgId, caller.toString());
                return _super.prototype.on.call(this, "message." + msgId, caller, listener, args);
            };
            /**
             * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
             * @param msgId		消息ID。
             * @param caller	事件侦听函数的执行域。
             * @param listener	事件侦听函数。
             * @param args		（可选）事件侦听函数的回调参数。
             * @return 此 EventDispatcher 对象。
             */
            GameEventDispacher.prototype.onceMsg = function (msgId, caller, listener, args) {
                console.log("GameEventDispacher.onceMsg@listener registered on message", Protocol.getMsgType(msgId), msgId, caller.toString());
                return _super.prototype.once.call(this, "message." + msgId, caller, listener, args);
            };
            return GameEventDispacher;
        }(EventDispatcher));
        GameEventDispacher.instance = new GameEventDispacher();
        event.GameEventDispacher = GameEventDispacher;
    })(event = common.event || (common.event = {}));
})(common || (common = {}));
//# sourceMappingURL=GameEventDispacher.js.map