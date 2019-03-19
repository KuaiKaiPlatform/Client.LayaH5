var common;
(function (common) {
    var msg;
    (function (msg) {
        var Byte = Laya.Byte;
        /**
         * 消息发送
         */
        var MessageSender = (function () {
            function MessageSender() {
            }
            MessageSender.init = function () {
                this.byte.endian = Byte.LITTLE_ENDIAN;
            };
            MessageSender.getGameSocket = function (serverId) {
                console.log("MessageSender.getGameSocket@serverId", serverId);
                var gameSocket = this.gameSockets[serverId];
                if (!gameSocket) {
                    gameSocket = new common.conn.GameSocket(serverId);
                    this.gameSockets[serverId] = gameSocket;
                }
                return gameSocket;
            };
            /**
             * 发送消息
             *
             * @param msgId
             * @param properties
             */
            MessageSender.send = function (serverId, msgId, properties) {
                var result = Protocol.encodeMessage(msgId, properties);
                if (typeof result == "number") {
                    console.error("MessageSender.send@fail to encode message", msgId, result, properties);
                    return;
                }
                console.log("MessageSender.send@message", serverId, msgId, Protocol.getMsgType(msgId), JSON.stringify(properties));
                this.byte.clear();
                msg.MessageParser.format(this.byte, msgId, result);
                var gameSocket = this.getGameSocket(serverId);
                gameSocket.sendByte(this.byte);
            };
            return MessageSender;
        }());
        MessageSender.gameSockets = {};
        MessageSender.byte = new Byte();
        msg.MessageSender = MessageSender;
    })(msg = common.msg || (common.msg = {}));
})(common || (common = {}));
//# sourceMappingURL=MessageSender.js.map