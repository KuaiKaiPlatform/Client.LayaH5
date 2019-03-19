module mahjong.play.view {
    
    /*
     *  麻将牌桌显示
     */
    export class DeskView extends common.play.view.DeskView {

        // 麻将牌桌中心方位显示
        protected directionView: mahjong.play.view.DirectionView;

        // 麻将牌桌打出的牌显示
        protected discardsView: mahjong.play.view.PlayerDiscardsView;

        // 麻将牌桌手牌显示
        protected handCardsView: mahjong.play.view.PlayerHandCardsView;

        // 麻将牌桌明牌显示
        protected cardGroupsView: mahjong.play.view.PlayerCardGroupsView;

        // 麻将牌桌可执行操作显示
        protected selfCanOperView: SelfCanOperView;

        constructor(deskController) {
            super(deskController);
            this.playerBasicView    = new mahjong.play.view.PlayerBasicView(deskController);
            this.playerReadyView    = new mahjong.play.view.PlayerReadyView(deskController);
            this.gameSummaryView    = new mahjong.play.view.GameSummaryView(deskController);
            this.deskMenuView       = new mahjong.play.view.DeskMenuView(deskController);

            this.directionView      = new mahjong.play.view.DirectionView(deskController);
            this.discardsView       = new mahjong.play.view.PlayerDiscardsView(deskController);
            this.handCardsView      = new mahjong.play.view.PlayerHandCardsView(deskController);
            this.cardGroupsView     = new mahjong.play.view.PlayerCardGroupsView(deskController);
            this.selfCanOperView    = new SelfCanOperView(deskController);
        }

        public show(): void {
            super.show();
            this.directionView.showAll(-1);

            //this.getPlayerBasicView().showBanker(this.deskController.getDeskDetail().getBankerId());
        }

        // 设置背景
        public setBg(): void {
            console.log("mahjong.play.view.DeskView.setBg");
            let imgBg: Laya.Sprite = new Laya.Sprite();
            imgBg.loadImage("mahjong/desk/bg.png");
            Laya.stage.addChild(imgBg);

            super.setBg();
        }

        public getGameSummaryView() {
            return this.gameSummaryView as mahjong.play.view.GameSummaryView;
        }

        public getDirectionView() {
            return this.directionView;
        }

        public getDiscardsView() {
            return this.discardsView;
        }

        public getHandCardsView() {
            return this.handCardsView;
        }

        public getCardGroupsView() {
            return this.cardGroupsView;
        }

        public getSelfCanOperView() {
            return this.selfCanOperView;
        }

        /**
         * 关闭一局结算后清理牌桌，回到准备界面，若有下注操作，显示下注界面。
         * 更新玩家总分，去掉庄家角标，增加局数，隐藏余牌张数。
         * 
         */
        public onSetResultClosed() {
            // 清理牌桌
            this.discardsView.clearAll();
            this.handCardsView.clearAll();
            this.cardGroupsView.clearAll();

            // 显示下一局庄家
            // let curSetResult = this.deskController.getDeskDetail().getCurSetResult();
            // let bankerId = 0;
            // if(curSetResult) bankerId = curSetResult.nextBankerId;

            // 更新总分，显示下一局庄家
            this.playerBasicView.showAll();

            // 增加局数，隐藏余牌张数
            this.getGameSummaryView().onSetResultClosed();

            // 准备界面
            this.playerReadyView.showAll();
        }

    }
}
