module common.conn {

    import Socket = Laya.Socket;
    import Byte = Laya.Byte;

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
            this.socket.endian = Byte.LITTLE_ENDIAN;
        }

        /**
         * 连接到指定IP和端口
         */
        public connectTo(ip, port) {
            this.url = GameSocket.PREFIX_URL + ip + ":" + port;
            return this.doConnect();
        }

        /**
         * 连接到指定url
         */
        public connectByUrl(url) {
            this.url = url;
            return this.doConnect();
        }

        /**
         * 建立连接
         */
        private doConnect() {
            return new Promise ((resolve, reject) => {
                console.log("GameSocket.doConnect@", this.url);
                this.connecting = true;
                this.socket.connectByUrl(this.url);
                this.socket.on(Laya.Event.OPEN, this, event => {
                    this.openHandler(event);
                    resolve();
                });

                this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
                this.socket.on(Laya.Event.CLOSE, this, e => {
                    this.closeHandler(e);
                    reject();
                });

                this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
            });
        }

        private openHandler(event: any = null): void {
            this.connecting = false;
            console.log("GameSocket.openHandler@", this.url);
            GameEventDispacher.instance.event(common.event.GlobalEvent.SERVER_CONNECTED, [this.url, this.name]);
        }

        private receiveHandler(msg: any = null): void {
            console.log("GameSocket.receiveHandler@msg", typeof msg, this.url, msg);
            if(msg instanceof ArrayBuffer) {
                MessageHandler.handleBytes(msg);
            } else {
                MessageHandler.handleText(msg);
            }
            this.socket.input.clear();
        }

        private closeHandler(e: any = null): void {
            this.connecting = false;
            console.error("GameSocket.closeHandler@Socket closed:", this.url, e);
            GameEventDispacher.instance.event(common.event.GlobalEvent.SERVER_CONNECTION_CLOSED, [this.url, this.name]);
        }

        private errorHandler(e: any = null): void {
            this.connecting = false;
            console.error("GameSocket.errorHandler@", e);
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
