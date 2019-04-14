var common;
(function (common) {
    var conn;
    (function (conn) {
        var Login = (function () {
            function Login() {
            }
            Login.init = function () {
                this.userInfo.uid = common.utils.Random.getInt(100001, 1000000);
                return this;
            };
            Login.getUid = function () {
                return this.userInfo.uid;
            };
            Login.getServerId = function () {
                return this.serverInfo.id;
            };
            /**
             * 检查是否是自己
             */
            Login.isSelf = function (uid) {
                return this.getUid() == uid;
            };
            /**
             * 连接游戏服务器
             */
            Login.connectGs = function () {
                var _this = this;
                var si = Login.serverInfo;
                console.log("Login.connectGs@serverInfo", si);
                var gameSocket = MessageSender.getGameSocket(si.id);
                //console.log("Login.connectGs@GameSocket created.");
                return gameSocket.connectTo(si.ip, si.webPort).then(function () {
                    // 连接成功
                    console.log("Login.connectGs@web socket connected:", si);
                    return Promise.resolve();
                }, function () {
                    // 连接失败
                    console.error("Login.connectGs@web socket connect failed", si);
                    GameEventDispacher.instance.event(common.event.GlobalEvent.SERVER_CONNECTION_FAIL);
                    return Promise.reject(si);
                }).then(function () {
                    return _this.loginGs();
                });
            };
            /**
             * 发送登录请求到游戏服务器
             */
            Login.loginGs = function () {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    // 监听登录成功
                    GameEventDispacher.instance.onceMsg(Protocol.meta.account.SLogin, _this, function (data) {
                        console.log("Login.loginGs@success:", data);
                        resolve();
                    });
                    // 监听登录失败
                    GameEventDispacher.instance.onceMsg(Protocol.meta.account.SKickOff, _this, function (data) {
                        console.log("Login.loginGs@fail:", data);
                        reject();
                    });
                    // 发送登录请求
                    //GameEventDispacher.instance.eventMsg(GlobalEvent.LOGIN_REQ_IN_PROCESS);
                    var si = Login.serverInfo;
                    var ui = Login.userInfo;
                    MessageSender.send(si.id, Protocol.meta.account.CLogin, {
                        uid: ui.uid,
                        token: ui.token
                    });
                    console.log("Login.loginGs@CLogin sent|uid|token:", ui.uid, ui.token);
                });
            };
            Login.toString = function () {
                return "common.conn.Login";
            };
            return Login;
        }());
        Login.serverInfo = {
            "id": "1",
            "name": "CardLogicServer1",
            //"ip": "127.0.0.1",
            "ip": "192.168.1.26",
            "webPort": 10012
        };
        Login.userInfo = {
            "uid": 100890,
            "name": "U100890",
            "token": "782g6fhew91gr"
        };
        conn.Login = Login;
    })(conn = common.conn || (common.conn = {}));
})(common || (common = {}));
//# sourceMappingURL=Login.js.map