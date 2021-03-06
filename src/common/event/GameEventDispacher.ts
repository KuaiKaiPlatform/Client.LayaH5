/**
* 游戏事件发送与监听 
*/
module common.event {
	import EventDispatcher = Laya.EventDispatcher;

	export class GameEventDispacher extends EventDispatcher {
		constructor() {
			super();
		}

		public static instance = new GameEventDispacher();

        /**
         * 派发服务器消息事件。
         * @param msgId	消息ID。
         * @param data	（可选）回调数据。<b>注意：</b>如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p ，且 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。
         * @return 此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。
         */
		public eventMsg(msgId: number, data?: any):Boolean {
			return super.event("message." + msgId, data);
		}

        /**
         * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
         * @param msgId		消息ID。
         * @param caller	事件侦听函数的执行域。
         * @param listener	事件侦听函数。
         * @param args		（可选）事件侦听函数的回调参数。
         * @return 此 EventDispatcher 对象。
         */
        onMsg(msgId: number, caller: any, listener: Function, args?: Array<any>): EventDispatcher {
            console.log("GameEventDispacher.onMsg@listener registered on message", Protocol.getMsgType(msgId), msgId, caller.toString());
			return super.on("message." + msgId, caller, listener, args);
		}

        /**
         * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
         * @param msgId		消息ID。
         * @param caller	事件侦听函数的执行域。
         * @param listener	事件侦听函数。
         * @param args		（可选）事件侦听函数的回调参数。
         * @return 此 EventDispatcher 对象。
         */
        onceMsg(msgId: number, caller: any, listener: Function, args?: Array<any>): EventDispatcher {
            console.log("GameEventDispacher.onceMsg@listener registered on message", Protocol.getMsgType(msgId), msgId, caller.toString());
			return super.once("message." + msgId, caller, listener, args);
		}

	}
}