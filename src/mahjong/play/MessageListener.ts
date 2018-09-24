module mahjong.play {

    import GameSetting = common.play.model.GameSetting;

    // 牌桌消息监听器
    export class MessageListener extends common.play.MessageListener {

        public constructor(deskController) {
            super(deskController);
        }

        /**
         * 开局或重连后返回牌局消息
         */
        public onSetInit(setInit): void {
            super.onSetInit(setInit);

            let deskView = this.deskView as mahjong.play.view.DeskView;

            // 显示庄家
            deskView.getPlayerBasicView().showBanker(setInit.bankerId);

            // 显示手牌
            deskView.getHandCardsView().showAll();

            // 显示明牌
            deskView.getCardGroupsView().showAll();

            // 显示打出的牌
            deskView.getDiscardsView().showAll();

            
        }

    }
}
