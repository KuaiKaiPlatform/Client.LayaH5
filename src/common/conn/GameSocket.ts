module common.conn {

    import Socket = Laya.Socket;
    import Byte = Laya.Byte;
    import GameEventDispacher = common.event.GameEventDispacher;
    import GlobalEvent = common.event.GlobalEvent;

    // Socket
    export class GameSocket {

        public static PREFIX_URL = "ws://";

        private socket: Socket;
        private byte: Byte;
        private url: string;
        private name: string;

        public constructor() {
            this.byte = new Byte();
            this.byte.endian = Byte.LITTLE_ENDIAN;
            this.socket = new Socket();
            this.socket.endian = Byte.LITTLE_ENDIAN;
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
            this.socket.connectByUrl(this.url);
            this.socket.on(Laya.Event.OPEN, this, this.openHandler);
            this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
            this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
            this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
        }

        private openHandler(event: any = null): void {
            console.log("GameSocket.openHandler", this.url);
            GameEventDispacher.instance.event(GlobalEvent.SERVER_CONNECTED, [this.url, this.name]);
        }

        private receiveHandler(msg: any = null): void {
            ///接收到数据触发函数
        }

        private closeHandler(e: any = null): void {
            //关闭事件
        }

        private errorHandler(e: any = null): void {
            //连接出错
        }

    }
}
