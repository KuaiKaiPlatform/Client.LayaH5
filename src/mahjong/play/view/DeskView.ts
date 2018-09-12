module mahjong.play.view {
    
    /*
     *  麻将牌桌显示
     */
    export class DeskView extends common.play.view.DeskView {

        // 牌桌中心方位显示
        protected directionView: mahjong.play.view.DirectionView;

        constructor(deskController) {
            super(deskController);
            this.playerBasicView    = new mahjong.play.view.PlayerBasicView(deskController);
            this.playerReadyView    = new mahjong.play.view.PlayerReadyView(deskController);
            this.gameSummaryView    = new mahjong.play.view.GameSummaryView(deskController);
            this.deskMenuView       = new mahjong.play.view.DeskMenuView(deskController);

            this.directionView      = new mahjong.play.view.DirectionView(deskController);
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

    }
}