module mahjong.play {
    
    /*
     *  麻将牌桌显示
     */
    export class DeskView extends common.play.DeskView {

        constructor(deskController) {
            super(deskController);
            this.playerBasicView = new mahjong.play.PlayerBasicView(deskController);
            this.playerReadyView = new mahjong.play.PlayerReadyView(deskController);
        }

        // 设置背景
        public setBg(): void {
            let imgBg: Laya.Sprite = new Laya.Sprite();
            imgBg.loadImage("mahjong/desk/bg.png");
            Laya.stage.addChild(imgBg);
        }

    }
}