module common.play {

    import GameSetting = common.play.model.GameSetting;

    // 牌桌消息监听器
    export class MessageListener {

        protected deskController: common.play.controller.DeskController;

        public constructor(deskController) {
            this.deskController = deskController;
        }

        /**
         * 加入牌桌返回消息
         */
        public onEnterRes(enterRes): void {
            this.deskController.setEnterRes(enterRes);
            this.deskController.setPlayerBasicInfo(new common.model.PlayerBasicInfo(enterRes.basicInfos));
            GameSetting.init(enterRes.setting);
            this.deskController.getDeskView().show();
        }

        /**
         * 有人加入牌桌返回消息
         */
        public onPlayerEnter(basicInfo): void {
            this.deskController.getPlayerBasicInfo().add(basicInfo);
            this.deskController.getDeskView().onPlayerEnter(basicInfo);
        }

        /**
         * 有人离开牌桌返回消息
         */
        public onPlayerExit(exitRes): void {
            this.deskController.getDeskView().onPlayerExit(exitRes.uid);
            this.deskController.getPlayerBasicInfo().removeByUid(exitRes.uid);
        }

        /**
         * 开局或重连后返回牌局消息
         */
        public onSetInit(setInit): void {
            this.deskController.setSetInit(setInit);
            this.deskController.createSetInfo();

            this.deskController.getDeskView().getPlayerReadyView().removeAll();
            
        }

    }
}
