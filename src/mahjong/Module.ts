module mahjong {

    export class Module {

        /**
         * 麻将模块初始化：单例，监听消息等
         */
        public static init() {
            let GameEventDispacher = common.event.GameEventDispacher;
            let GlobalSetting = common.model.GlobalSetting;
            let Protocol = common.pb.Protocol;
            let DeskController = mahjong.play.controller.DeskController;

            // 牌桌，监听消息
            DeskController.init();
            let messageListener = DeskController.instance.getMessageListener() as mahjong.play.MessageListener;
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SDeskInfo, messageListener, messageListener.onDeskInfo);
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SPlayerJoin, messageListener, messageListener.onPlayerJoin);
            
            // 牌桌设置
            GlobalSetting.init({
                theme_mahjong: mahjong.play.Theme.GREEN
            });
            //this.test();

            console.log("mahjong.Module.init@finish");
            return Promise.resolve();
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

        public static test() {
            let deskCtrl = new mahjong.play.controller.DeskController();
            deskCtrl.getMessageListener().onDeskInfo(this.sDeskInfo);
            //DeskController.instance.getMessageListener().onJoinDesk(this.sJoinDesk);

            // setTimeout(() => deskCtrl.getMessageListener().onPlayerEnter({
            //     uid: 100863,
            //     nkn: "鲁班七号",
            //     seat: 2,
            //     head: "http://",
            //     state: 0,
            //     points: [-126]
            // }), 1000);


            // setTimeout(() => deskCtrl.onPlayerExit({
            //     uid: 100862
            // }), 3000);
        }

    }
}
