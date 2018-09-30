module common.msg {

    import Byte = Laya.Byte;
    import Browser = Laya.Browser;

    /**
     * 消息错误代码
     */
    export enum Error {
        SUCCESS = 0,
        INVALID_LENGTH = 1,
        INVALID_TOTAL_LENGTH = 2,
        INVALID_CONTENT_LENGTH = 3,
        INVALID_CONTENT = 4,
        UNSUPPORTED_MSG_ID = 5
    }

    /**
     * 消息解析和格式化：前两字节为后续长度，再两字节为msg id，再四字节为protobuf长度，最后为protobuf内容
     */
    export class MessageParser {

        private ProtoBuf:any = Browser.window.protobuf;

        public static parse(byte: Byte) {
            console.log("MessageParser.parse@byte length:", byte.length);

            var result = {
                code: Error.SUCCESS,
                msgId: 0,
                content: null,
                message: null
            };

            // 总数据长度不够
            if(byte.length < 8) {  
                result.code = Error.INVALID_LENGTH;
                return result;
            }

            // 前两字节为后续长度
            let totalLength = byte.getUint16();
            console.log("MessageParser.parse@total length", totalLength);
            if(totalLength != byte.length-2) {
                result.code = Error.INVALID_TOTAL_LENGTH;
                return result;
            }

            // 再两字节为msg id
            let msgId = byte.getUint16();
            result.msgId = msgId;
            console.log("MessageParser.parse@msgId", msgId);

            // 再四字节为protobuf长度
            let contentLength = byte.getUint32();
            console.log("MessageParser.parse@conotent length", contentLength);
            if(contentLength !== byte.length-8) {
                result.code = Error.INVALID_CONTENT_LENGTH;
                return result;
            }

            // 消息内容
            result.content = byte.getUint8Array(byte.pos, contentLength);

            return result;
        }

    }
}
