var common;
(function (common) {
    var conn;
    (function (conn) {
        var Socket = Laya.Socket;
        var Byte = Laya.Byte;
        // Socket
        var GameSocket = (function () {
            function GameSocket(name) {
                this.connecting = false;
                this.name = name;
                this.socket = new Socket();
                this.socket.endian = Byte.LITTLE_ENDIAN;
            }
            /**
             * 连接到指定IP和端口
             */
            GameSocket.prototype.connectTo = function (ip, port) {
                this.url = GameSocket.PREFIX_URL + ip + ":" + port;
                return this.doConnect();
            };
            /**
             * 连接到指定url
             */
            GameSocket.prototype.connectByUrl = function (url) {
                this.url = url;
                return this.doConnect();
            };
            /**
             * 建立连接
             */
            GameSocket.prototype.doConnect = function () {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    console.log("GameSocket.doConnect@", _this.url);
                    _this.connecting = true;
                    _this.socket.connectByUrl(_this.url);
                    _this.socket.on(Laya.Event.OPEN, _this, function (event) {
                        _this.openHandler(event);
                        resolve();
                    });
                    _this.socket.on(Laya.Event.MESSAGE, _this, _this.receiveHandler);
                    _this.socket.on(Laya.Event.CLOSE, _this, function (e) {
                        _this.closeHandler(e);
                        reject();
                    });
                    _this.socket.on(Laya.Event.ERROR, _this, _this.errorHandler);
                });
            };
            GameSocket.prototype.openHandler = function (event) {
                if (event === void 0) { event = null; }
                this.connecting = false;
                console.log("GameSocket.openHandler@", this.url);
                GameEventDispacher.instance.event(common.event.GlobalEvent.SERVER_CONNECTED, [this.url, this.name]);
            };
            GameSocket.prototype.receiveHandler = function (msg) {
                if (msg === void 0) { msg = null; }
                console.log("GameSocket.receiveHandler@msg", typeof msg, this.url, msg);
                if (msg instanceof ArrayBuffer) {
                    MessageHandler.handleBytes(msg);
                }
                else {
                    MessageHandler.handleText(msg);
                }
                this.socket.input.clear();
            };
            GameSocket.prototype.closeHandler = function (e) {
                if (e === void 0) { e = null; }
                this.connecting = false;
                console.error("GameSocket.closeHandler@Socket closed:", this.url, e);
                GameEventDispacher.instance.event(common.event.GlobalEvent.SERVER_CONNECTION_CLOSED, [this.url, this.name]);
            };
            GameSocket.prototype.errorHandler = function (e) {
                if (e === void 0) { e = null; }
                this.connecting = false;
                console.error("GameSocket.errorHandler@", e);
            };
            GameSocket.prototype.sendText = function (text) {
                this.socket.send(text);
            };
            GameSocket.prototype.sendByte = function (byte) {
                this.socket.send(byte.buffer);
            };
            GameSocket.prototype.close = function () {
                this.socket.close();
            };
            GameSocket.prototype.isConnected = function () {
                return this.socket.connected;
            };
            GameSocket.prototype.isConnecting = function () {
                return this.connecting;
            };
            return GameSocket;
        }());
        GameSocket.PREFIX_URL = "ws://";
        conn.GameSocket = GameSocket;
    })(conn = common.conn || (common.conn = {}));
})(common || (common = {}));
//# sourceMappingURL=GameSocket.js.map