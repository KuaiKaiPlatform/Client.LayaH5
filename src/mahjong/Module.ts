module mahjong {

    import GameEventDispacher = common.event.GameEventDispacher;
    import DeskController = mahjong.play.controller.DeskController;
    import GlobalSetting = common.model.GlobalSetting;
    import Protocol = common.pb.Protocol;

    export class Module {

        /**
         * 麻将模块初始化：监听消息
         */
        public static init() {
            // 牌桌，监听消息
            DeskController.init();
            let messageListener = DeskController.instance.getMessageListener();
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SDeskInfo, messageListener, messageListener.onDeskInfo);
            
            // 牌桌设置
            GlobalSetting.init({
                theme_mahjong: mahjong.play.Theme.GREEN
            });
            //this.test();

            console.log("mahjong.Module.init@finish");
            return Promise.resolve();
        }

        public static sDeskInfo = {
            playerInfos: [{
                userInfo: {
                    uid: 100890,
                    nkn: "阿列的脚印"
                },
                seat: 3,
                head: "http://",
                prepared: false,
                points: [187]
            }, {
                userInfo: {
                    uid: 100861,
                    nkn: "龙的传人"
                },
                seat: 4,
                head: "http://",
                prepared: true,
                points: [27]
            }, {
                userInfo: {
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
            let deskCtrl = new DeskController();
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
