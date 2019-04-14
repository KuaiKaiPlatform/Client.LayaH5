module hall {

    import Handler = Laya.Handler;

    export class Module {

        /**
         * 大厅模块初始化：监听消息
         */
        public static init() {
            // 牌桌信息
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SDeskInfo, MessageListener, MessageListener.onDeskInfo);

            // 有玩家加入
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SPlayerJoin, MessageListener, MessageListener.onPlayerJoin);

            // 离线状态切换
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SOffline, MessageListener, MessageListener.onOffline);

            // 全局设置
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SGlobalSetting, MessageListener, MessageListener.onGlobalSetting);

            // 玩法相关语言
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SRuleDialects, MessageListener, MessageListener.onRuleDialects);

            //预加载图集资源
			return new Promise((resolve, reject) => {
				Laya.loader.load([
                    "res/atlas/player.atlas",
                    "res/atlas/common.atlas",
                    "res/atlas/common/desk.atlas",
                    "res/atlas/common/info.atlas",
                    "res/sounds/bgm.mp3"
                ], Handler.create(this, () => {
                    console.log("hall.Module.init@finish");
                    Laya.SoundManager.playMusic("res/sounds/bgm.mp3");
					resolve();
				}));
			});

        }

        public static test() {
            MessageListener.onDeskInfo(this.sDeskInfo);
        }

        public static sDeskInfo = {
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

    }
}
