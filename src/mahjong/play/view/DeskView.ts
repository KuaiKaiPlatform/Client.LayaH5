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

        constructor(deskController) {
            super(deskController);
            this.playerBasicView    = new mahjong.play.view.PlayerBasicView(deskController);
            this.playerReadyView    = new mahjong.play.view.PlayerReadyView(deskController);
            this.gameSummaryView    = new mahjong.play.view.GameSummaryView(deskController);
            this.deskMenuView       = new mahjong.play.view.DeskMenuView(deskController);

            this.directionView      = new mahjong.play.view.DirectionView(deskController);
            this.discardsView       = new mahjong.play.view.PlayerDiscardsView(deskController);
            this.handCardsView       = new mahjong.play.view.PlayerHandCardsView(deskController);
        }

        public show(): void {
            super.show();
            this.directionView.show();
        }

        // 设置背景
        public setBg(): void {
            let imgBg: Laya.Sprite = new Laya.Sprite();
            imgBg.loadImage("mahjong/desk/bg.png");
            Laya.stage.addChild(imgBg);
        }

        public getDiscardsView() {
            return this.discardsView;
        }

        public getHandCardsView() {
            return this.handCardsView;
        }

    }
}