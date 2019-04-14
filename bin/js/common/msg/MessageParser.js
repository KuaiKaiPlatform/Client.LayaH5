var common;
(function (common) {
    var msg;
    (function (msg) {
        //import Browser = Laya.Browser;
        /**
         * 消息错误代码
         */
        var Error;
        (function (Error) {
            Error[Error["SUCCESS"] = 0] = "SUCCESS";
            Error[Error["INVALID_LENGTH"] = 1] = "INVALID_LENGTH";
            Error[Error["INVALID_TOTAL_LENGTH"] = 2] = "INVALID_TOTAL_LENGTH";
            Error[Error["INVALID_CONTENT_LENGTH"] = 3] = "INVALID_CONTENT_LENGTH";
            Error[Error["INVALID_CONTENT"] = 4] = "INVALID_CONTENT";
            Error[Error["UNSUPPORTED_MSG_ID"] = 5] = "UNSUPPORTED_MSG_ID";
        })(Error = msg.Error || (msg.Error = {}));
        /**
         * 消息解析和格式化：前两字节为后续长度，再两字节为msg id，再四字节为protobuf长度，最后为protobuf内容
         */
        var MessageParser = (function () {
            function MessageParser() {
            }
            //private ProtoBuf:any = Browser.window.protobuf;
            MessageParser.parse = function (byte) {
                //console.log("MessageParser.parse@byte length:", byte.length);
                var result = {
                    code: Error.SUCCESS,
                    msgId: 0,
                    content: null,
                    message: null
                };
                // 总数据长度不够
                if (byte.length < 8) {
                    result.code = Error.INVALID_LENGTH;
                    return result;
                }
                byte.pos = 0;
                // 前两字节为后续长度
                var totalLength = byte.getInt16();
                //console.log("MessageParser.parse@total length", totalLength);
                if (totalLength != byte.length - 2) {
                    result.code = Error.INVALID_TOTAL_LENGTH;
                    return result;
                }
                // 再两字节为msg id
                var msgId = byte.getInt16();
                result.msgId = msgId;
                console.log("MessageParser.parse@msg", msgId, Protocol.getMsgType(msgId));
                // 再四字节为protobuf长度
                var contentLength = byte.getInt32();
                console.log("MessageParser.parse@content length", contentLength);
                if (contentLength !== byte.length - 8) {
                    result.code = Error.INVALID_CONTENT_LENGTH;
                    return result;
                }
                // 消息内容 Protobuf 解码
                var content = byte.getUint8Array(byte.pos, contentLength);
                var decoded = Protocol.decodeMessage(msgId, content);
                switch (decoded) {
                    case 1:
                        result.code = Error.UNSUPPORTED_MSG_ID;
                        break;
                    case 2:
                        result.code = Error.INVALID_CONTENT;
                        break;
                    default:
                        result.message = decoded;
                        break;
                }
                return result;
            };
            MessageParser.format = function (byte, msgId, encoded) {
                var byteLength = encoded.byteLength;
                //var result = new Uint8Array (8 + byteLength);
                // 前两字节
                var first2 = 6 + byteLength;
                byte.writeUint16(first2);
                // 第三、四字节
                byte.writeUint16(msgId);
                // 第5-8字节
                byte.writeUint32(byteLength);
                // 消息内容
                byte.writeArrayBuffer(encoded);
                console.log("MessageParser.format|msg", msgId, Protocol.getMsgType(msgId));
            };
            return MessageParser;
        }());
        msg.MessageParser = MessageParser;
    })(msg = common.msg || (common.msg = {}));
})(common || (common = {}));
//# sourceMappingURL=MessageParser.js.map