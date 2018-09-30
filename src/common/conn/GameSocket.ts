module common.conn {

    import Socket = Laya.Socket;
    import Byte = Laya.Byte;
    import GameEventDispacher = common.event.GameEventDispacher;
    import GlobalEvent = common.event.GlobalEvent;
    import MessageHandler = common.msg.MessageHandler;

    // Socket
    export class GameSocket {

        public static PREFIX_URL = "ws://";

        private socket: Socket;
        private url: string;
        private name: string;                   // 连接的服务器名称，如：Game logic server 1
        private connecting: boolean = false;

        public constructor(name) {
            this.name = name;
            this.socket = new Socket();
            //this.socket.endian = Byte.LITTLE_ENDIAN;
        }

        /**
         * 连接到指定IP和端口
         */
        public connectTo(ip, port): void {
            this.url = GameSocket.PREFIX_URL + ip + ":" + port;
            this.doConnect();
        }

        /**
         * 连接到指定url
         */
        public connectByUrl(url): void {
            this.url = url;
            this.doConnect();
        }

        /**
         * 建立连接
         */
        private doConnect(): void {
            this.connecting = true;
            this.socket.connectByUrl(this.url);
            this.socket.on(Laya.Event.OPEN, this, this.openHandler);
            this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
            this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
            this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
        }

        private openHandler(event: any = null): void {
            this.connecting = false;
            console.log("GameSocket.openHandler", this.url);
            GameEventDispacher.instance.event(GlobalEvent.SERVER_CONNECTED, [this.url, this.name]);
        }

        private receiveHandler(msg: any = null): void {
            console.log("GameSocket.receiveHandler@msg", typeof msg, msg);
            if(msg instanceof ArrayBuffer) {
                MessageHandler.handleBytes(msg);
            } else {
                MessageHandler.handleText(msg);
            }
            this.socket.input.clear();
        }

        private closeHandler(e: any = null): void {
            this.connecting = false;
            console.warn("GameSocket.closeHandler@Socket closed:", JSON.stringify(e));
            GameEventDispacher.instance.event(GlobalEvent.SERVER_CONNECTION_CLOSED, [this.url, this.name]);
        }

        private errorHandler(e: any = null): void {
            this.connecting = false;
            console.error("GameSocket.errorHandler", JSON.stringify(e));
        }

        public sendText(text: string) {
            this.socket.send(text);
        }

        public sendByte(byte: Byte) {
            this.socket.send(byte.buffer);
        }

        public close() {
            this.socket.close();
        }

        public isConnected(): boolean {
            return this.socket.connected;
        }

        public isConnecting(): boolean {
            return this.connecting;
        }

    }
}
