module common.conn {

    import GameEventDispacher = common.event.GameEventDispacher;
    import GlobalEvent = common.event.GlobalEvent;
    import Protocol = common.pb.Protocol;
    import MessageSender = common.msg.MessageSender;
    import GameSocket = common.conn.GameSocket;
    import Random = common.utils.Random;

    export class Login {

        private static serverInfo = {
            "id": "1",
            "name": "CardLogicServer1",
            "ip": "127.0.0.1",
            "webPort": 10012
        };

        private static userInfo = {
            "uid": 100890,
            "name": "U100890",
            "token": "782g6fhew91gr"
        };

        public static init() {
            this.userInfo.uid = Random.getInt(100001, 1000000);
        }

        public static getUid() {
            return this.userInfo.uid;
        }

        /**
         * 连接游戏服务器
         */
        public static connectGs() {
            let si = Login.serverInfo;
            console.log("Login.connectGs@serverInfo", si);
            let gameSocket = MessageSender.getGameSocket(si.id);
            //console.log("Login.connectGs@GameSocket created.");
            return gameSocket.connectTo(si.ip, si.webPort).then(() => {
                // 连接成功
                console.log("Login.connectGs@web socket connected:", si);
                return Promise.resolve();
            }, () => {
                // 连接失败
                console.error("Login.connectGs@web socket connect failed", si);
                GameEventDispacher.instance.event(GlobalEvent.SERVER_CONNECTION_FAIL);
                return Promise.reject(si);
            }).then(() => {
                return this.loginGs();
            });
        }

        /**
         * 发送登录请求到游戏服务器
         */
        public static loginGs() {
            return new Promise ((resolve, reject) => {
                // 监听登录成功
                GameEventDispacher.instance.onceMsg(Protocol.meta.account.SLogin, this, data => {
                    console.log("Login.loginGs@success:", data);
                    resolve();
                });

                // 监听登录失败
                GameEventDispacher.instance.onceMsg(Protocol.meta.account.SKickOff, this, data => {
                    console.log("Login.loginGs@fail:", data);
                    reject();
                });

                // 发送登录请求
                //GameEventDispacher.instance.eventMsg(GlobalEvent.LOGIN_REQ_IN_PROCESS);
                let si = Login.serverInfo;
                let ui = Login.userInfo;
                MessageSender.send(si.id, Protocol.meta.account.CLogin, {
                    uid: ui.uid,
                    token: ui.token
                });

                console.log("Login.loginGs@CLogin sent|uid|token:", ui.uid, ui.token);
            });
        }

        public static toString() {
            return "common.conn.Login";
        }

    }
}
