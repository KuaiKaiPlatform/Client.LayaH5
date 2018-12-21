var common;
(function (common) {
    var msg;
    (function (msg) {
        var Byte = Laya.Byte;
        var MessageHandler = (function () {
            function MessageHandler() {
            }
            MessageHandler.init = function () {
                this.byte.endian = Byte.LITTLE_ENDIAN;
            };
            /**
             * 处理收到的二进制数据
             */
            MessageHandler.handleBytes = function (bytes) {
                console.log("MessageHandler.handleBytes@byteLength", bytes.byteLength);
                this.byte.clear();
                this.byte.writeArrayBuffer(bytes);
                var parsed = msg.MessageParser.parse(this.byte);
                if (parsed.code !== common.msg.Error.SUCCESS) {
                    console.warn("MessageHandler.handleBytes@fail to parse message data, error code", parsed.code);
                    return;
                }
                console.log("MessageHandler.handleBytes@handling msg:", parsed.msgId, Protocol.getMsgType(parsed.msgId), JSON.stringify(parsed.message));
                // 发送事件：事件类型为 "message.${msgId}"，数据为 ProtoBuf 消息实例
                GameEventDispacher.instance.eventMsg(parsed.msgId, parsed.message);
                console.log("MessageHandler.handleBytes@finish msg:", parsed.msgId, Protocol.getMsgType(parsed.msgId));
            };
            /**
             * 处理收到的文本数据
             */
            MessageHandler.handleText = function (text) {
                console.log("MessageHandler.handleText@text", text);
            };
            return MessageHandler;
        }());
        MessageHandler.byte = new Byte();
        msg.MessageHandler = MessageHandler;
    })(msg = common.msg || (common.msg = {}));
})(common || (common = {}));
//# sourceMappingURL=MessageHandler.js.map