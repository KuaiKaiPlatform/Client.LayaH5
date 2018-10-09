module common.play.controller {

    // 牌桌控制器
    export abstract class DeskController {

        // 自身 ID
        protected selfId;

        // 牌桌数据
        protected deskDetail: common.data.DeskDetail;

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

        public getDeskDetail() : common.data.DeskDetail {
            return this.deskDetail;
        }

        public setDeskDetail(deskDetail) {
            this.deskDetail = deskDetail;
        }

        public abstract createGameSetInfo(setInit);

        public getSelfId() {
            return this.selfId;
        }

        public setSelfId(selfId) {
            this.selfId = selfId;
        }

        public launch(selfId, deskDetail) {
            this.setSelfId(Login.getUid());
            this.setDeskDetail(deskDetail);
            this.deskView.show();
        }

    }
}
