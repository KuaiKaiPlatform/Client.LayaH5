var hall;
(function (hall) {
    var Handler = Laya.Handler;
    var Module = (function () {
        function Module() {
        }
        /**
         * 大厅模块初始化：监听消息
         */
        Module.init = function () {
            var _this = this;
            // 牌桌信息
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SDeskInfo, hall.MessageListener, hall.MessageListener.onDeskInfo);
            // 有玩家加入
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SPlayerJoin, hall.MessageListener, hall.MessageListener.onPlayerJoin);
            // 离线状态切换
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SOffline, hall.MessageListener, hall.MessageListener.onOffline);
            // 全局设置
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SGlobalSetting, hall.MessageListener, hall.MessageListener.onGlobalSetting);
            // 玩法相关语言
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SRuleDialects, hall.MessageListener, hall.MessageListener.onRuleDialects);
            //预加载图集资源
            return new Promise(function (resolve, reject) {
                Laya.loader.load([
                    "res/atlas/player.atlas",
                    "res/atlas/common.atlas",
                    "res/atlas/common/desk.atlas",
                    "res/atlas/common/info.atlas",
                    "res/sounds/bgm.mp3"
                ], Handler.create(_this, function () {
                    console.log("hall.desk.Module.init@finish");
                    Laya.SoundManager.playMusic("res/sounds/bgm.mp3");
                    resolve();
                }));
            });
        };
        Module.test = function () {
            hall.MessageListener.onDeskInfo(this.sDeskInfo);
        };
        return Module;
    }());
    Module.sDeskInfo = {
        players: [{
                user: {
                    uid: 100890,
                    nkn: "阿列的脚印"
                },
                seat: 3,
                head: "http://",
                prepared: false,
                points: [187]
            }, {
                user: {
                    uid: 100861,
                    nkn: "龙的传人"
                },
                seat: 4,
                head: "http://",
                prepared: true,
                points: [27]
            }, {
                user: {
                    uid: 100862,
                    nkn: "未来不是梦"
                },
                seat: 1,
                head: "http://",
                prepared: true,
                points: [-88]
            }],
        rule: 61007,
        setting: {
            totalSet: 8
        }
    };
    hall.Module = Module;
})(hall || (hall = {}));
//# sourceMappingURL=Module.js.map