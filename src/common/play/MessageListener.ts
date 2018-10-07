module common.play {

    import GameSetting = common.play.model.GameSetting;
    import GameData = common.play.model.GameData;
    import PlayerInfo = common.play.model.PlayerInfo;

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
            GameData.sDeskInfo = sDeskInfo;
            PlayerInfo.init(sDeskInfo);
            GameSetting.init(sDeskInfo);
            this.deskView.show();
        }

        /**
         * 有人加入牌桌返回消息
         */
        public onPlayerEnter(playerInfo): void {
            PlayerInfo.add(playerInfo);
            this.deskView.onPlayerEnter(playerInfo);
        }

        /**
         * 有人离开牌桌返回消息
         */
        public onPlayerExit(exitRes): void {
            this.deskView.onPlayerExit(exitRes.uid);
            PlayerInfo.removeByUid(exitRes.uid);
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
