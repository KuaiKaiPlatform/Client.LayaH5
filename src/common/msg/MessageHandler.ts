module common.msg {

    import Byte = Laya.Byte;
    import GameEventDispacher = common.event.GameEventDispacher;

    export class MessageHandler {

        private static byte: Byte = new Byte();

        /**
         * 处理收到的二进制数据
         */
        public static handleBytes(bytes: ArrayBuffer) {
            console.log("MessageHandler.handleBytes@byteLength", bytes.byteLength);
            this.byte.clear();
            this.byte.writeArrayBuffer(bytes);
            let parsed = MessageParser.parse(this.byte);

            if(parsed.code !== common.msg.Error.SUCCESS) {
                console.warn("MessageHandler.handleBytes@fail to parse message data, error code", parsed.code);
                return;
            }

            // 发送事件：事件类型为 "message.${msgId}"，数据为 ProtoBuf 消息实例
            GameEventDispacher.instance.eventMsg(parsed.msgId, parsed.message);
            console.log("MessageHandler.handleBytes@finish msgId:", parsed.msgId);

        }

        /**
         * 处理收到的文本数据
         */
        public static handleText(text) {
            console.log("MessageHandler.handleText@text", text);
        }

    }
}
