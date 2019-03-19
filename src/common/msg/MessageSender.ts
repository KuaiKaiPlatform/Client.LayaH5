module common.msg {

    import Byte = Laya.Byte;

    /**
     * 消息发送
     */
    export class MessageSender {

        private static gameSockets = {};
        private static byte: Byte = new Byte();
        
        public static init() {
            this.byte.endian = Byte.LITTLE_ENDIAN;
        }

        public static getGameSocket(serverId): common.conn.GameSocket {
            console.log("MessageSender.getGameSocket@serverId", serverId);
            let gameSocket = this.gameSockets[serverId];
            if(!gameSocket) {
                gameSocket = new common.conn.GameSocket(serverId);
                this.gameSockets[serverId] = gameSocket;
            }
            return gameSocket;
        }

        /**
         * 发送消息
         * 
         * @param msgId 
         * @param properties 
         */

        public static send(serverId, msgId, properties) {
            var result = Protocol.encodeMessage(msgId, properties);
            if(typeof result == "number") {
                console.error("MessageSender.send@fail to encode message", msgId, result, properties);
                return;
            }
            console.log("MessageSender.send@message", serverId, msgId, Protocol.getMsgType(msgId), JSON.stringify(properties));
            this.byte.clear();
            MessageParser.format(this.byte, msgId, result);
            let gameSocket = this.getGameSocket(serverId);
            gameSocket.sendByte(this.byte);
        }

    }
}
