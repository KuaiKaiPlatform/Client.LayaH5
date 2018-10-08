module common.play.controller {

    // 牌桌控制器
    export abstract class DeskController {

        protected deskDetail: common.model.DeskDetail;

        // 消息监听器
        protected messageListener: common.play.MessageListener;

        // 牌桌显示
        protected deskView: common.play.view.DeskView;

        // 牌局信息
        protected gameSetInfo: common.play.model.GameSetInfo;

        public getMessageListener(): common.play.MessageListener {
            return this.messageListener;
        }

        public getDeskView(): common.play.view.DeskView {
            return this.deskView;
        }

        public getGameSetInfo() {
            return this.gameSetInfo;
        }

        public getDeskDetail() : common.model.DeskDetail {
            return this.deskDetail;
        }

        public setDeskDetail(deskDetail) {
            this.deskDetail = deskDetail;
        }

        public abstract createGameSetInfo(setInit);

        /**
         * 根据玩家uid找到位置
         */
        public abstract findPosition(uid): number;

    }
}
