module common.play.controller {

    // 牌桌控制器
    export abstract class DeskController {

        // 消息监听器
        protected messageListener: common.play.MessageListener;

        // 牌桌显示
        protected deskView: common.play.view.DeskView;

        // 牌局信息
        protected setInfo: common.play.model.SetInfo;

        public getMessageListener(): common.play.MessageListener {
            return this.messageListener;
        }

        public getDeskView(): common.play.view.DeskView {
            return this.deskView;
        }

        public abstract createSetInfo(setInit);

        /**
         * 根据玩家方位找到位置
         */
        public abstract findPosition(direction): number;

    }
}
