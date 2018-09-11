module common.play {

    import GameSetting = common.play.model.GameSetting;
    import GameData = common.play.model.GameData;

    // 牌桌消息监听器
    export class MessageListener {

        protected deskController: common.play.controller.DeskController;
        protected deskView: common.play.view.DeskView;

        public constructor(deskController) {
            this.deskController = deskController;
            this.deskView = deskController.getDeskView();
        }

        /**
         * 加入牌桌返回消息
         */
        public onEnterRes(enterRes): void {
            GameData.enterRes = enterRes;
            common.model.PlayerBasicInfo.init(enterRes.basicInfos);
            GameSetting.init(enterRes.setting);
            this.deskView.show();
        }

        /**
         * 有人加入牌桌返回消息
         */
        public onPlayerEnter(basicInfo): void {
            common.model.PlayerBasicInfo.add(basicInfo);
            this.deskView.onPlayerEnter(basicInfo);
        }

        /**
         * 有人离开牌桌返回消息
         */
        public onPlayerExit(exitRes): void {
            this.deskView.onPlayerExit(exitRes.uid);
            common.model.PlayerBasicInfo.removeByUid(exitRes.uid);
        }

        /**
         * 开局或重连后返回牌局消息
         */
        public onSetInit(setInit): void {
            //GameData.setInit = setInit;
            this.deskController.createSetInfo(setInit);
            this.deskView.getPlayerReadyView().removeAll();

            // 显示牌局
            

        }

    }
}
