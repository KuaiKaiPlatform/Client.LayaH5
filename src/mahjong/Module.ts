module mahjong {

    export class Module {

        /**
         * 麻将模块初始化：单例，监听消息等
         */
        public static init() {
            let GameEventDispacher = common.event.GameEventDispacher;
            let GlobalSetting = common.data.GlobalSetting;
            let Protocol = common.pb.Protocol;
            let DeskController = mahjong.play.controller.DeskController;
            let Theme = Protocol.getEnum("common.MahjongTheme");

            DeskController.init();

            mahjong.play.view.SingleCardFactory.init();

            // 牌桌，监听消息
            // let messageListener = DeskController.instance.getMessageListener() as mahjong.play.MessageListener;
            // GameEventDispacher.instance.onMsg(Protocol.meta.hall.SDeskInfo, messageListener, messageListener.onDeskInfo);
            // GameEventDispacher.instance.onMsg(Protocol.meta.hall.SPlayerJoin, messageListener, messageListener.onPlayerJoin);
            
            // 牌桌设置
            GlobalSetting.init({
                mahjongTheme: Theme.GREEN
            });

            console.log("mahjong.Module.init@finish");
            return Promise.resolve();
        }

    }
}
