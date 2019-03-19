module common.play.controller {

    // 牌桌控制器
    export abstract class DeskController {

        // 牌桌数据
        protected deskDetail: common.data.DeskDetail;

        // 消息监听器
        protected messageListener: common.play.MessageListener;

        // 牌桌显示
        protected deskView: common.play.view.DeskView;

        // 牌局结果显示
        protected setResultDialog: common.play.view.ResultDialog;

        // 整场比赛结果显示
        protected gameResultDialog: common.play.view.ResultDialog;

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

        public abstract createGameSetInfo(sSetInit);

        public abstract createSetResultDialog(sSetResult);

        public abstract createGameResultDialog(sGameResult);

        public launch(deskDetail) {
            this.setDeskDetail(deskDetail);
            this.deskView.show();
        }

        /**
         * 牌局是否结束（是否收到SGameResult）
         */
        public isGameEnded() {
            if(this.deskDetail && this.deskDetail.getGameResult()) return true;
            return false;
        }

    }
}
