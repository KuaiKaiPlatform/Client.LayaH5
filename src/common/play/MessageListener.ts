module common.play {

    // 牌桌消息监听器
    export class MessageListener {

        protected deskController: common.play.controller.DeskController;
        protected deskView: common.play.view.DeskView;

        public constructor(deskController) {
            this.deskController = deskController;
            this.deskView = deskController.getDeskView();
        }

        /**
         * 自己加入牌桌返回消息
         */
        public onDeskInfo(sDeskInfo): void {
            let DeskInfo = common.model.DeskInfo;
            let deskDetail = DeskInfo.get(DeskInfo.getKey(sDeskInfo.desk));
            this.deskController.setDeskDetail(deskDetail);

            //common.play.model.PlayerInfo.init(sDeskInfo);
            common.play.model.GameSetting.init(sDeskInfo);
            this.deskView.show();
        }

        /**
         * 有人加入牌桌返回消息
         */
        public onPlayerJoin(sPlayerJoin): void {
            //common.play.model.PlayerInfo.add(sPlayerJoin.player);
            this.deskView.onPlayerJoin(sPlayerJoin);
            console.log("common.play.MessageListener.onPlayerJoin@done", JSON.stringify(sPlayerJoin));
        }

        /**
         * 有人离开牌桌返回消息
         */
        public onPlayerQuit(exitRes): void {
            this.deskView.onPlayerExit(exitRes.uid);
            //common.play.model.PlayerInfo.removeByUid(exitRes.uid);
        }

        /**
         * 开局或重连后返回牌局消息
         */
        public onSetInit(setInit): void {
            //GameData.setInit = setInit;
            this.deskController.createGameSetInfo(setInit);
            this.deskView.getPlayerReadyView().removeAll();

            // 显示牌局基本信息
            this.deskView.getGameSummaryView().onSetInit();
        }

    }
}
