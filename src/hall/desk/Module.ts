module hall.desk {

    export class Module {

        /**
         * 大厅牌桌模块初始化：监听消息
         */
        public static init() {
            // 有玩家加入
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SDeskInfo, MessageListener, MessageListener.onDeskInfo);
            GameEventDispacher.instance.onMsg(Protocol.meta.hall.SPlayerJoin, MessageListener, MessageListener.onPlayerJoin);

            console.log("hall.desk.Module.init@finish");
            return Promise.resolve();
        }

    }
}
