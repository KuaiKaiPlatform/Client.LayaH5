module mahjong.play {
    
    /*
    麻将牌桌View
    */
    export class DeskView {
        // 玩家基本信息View
        private playerBasicView: common.view.PlayerBasicView = new common.view.PlayerBasicView();

        constructor() {
            this.onLoaded();
        }

        private onLoaded(): void {
            // 设置背景
            this.setBg();
            // 自身头像
            this.playerBasicView.showSelfBasicInfo();
        }

        private setBg(): void {
            var imgBg: Laya.Sprite = new Laya.Sprite();
            imgBg.loadImage("Desk/bg.png");
            Laya.stage.addChild(imgBg);
        }

    }
}