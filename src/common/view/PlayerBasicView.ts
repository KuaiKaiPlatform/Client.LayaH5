module common.view {
    /*
    牌桌内玩家基本信息显示
    */
    export class PlayerBasicView {

        private selfBasicInfoUI: ui.mahjong.PlayerBasicInfoUI = new ui.mahjong.PlayerBasicInfoUI();

        constructor() {
            //预加载资源
            Laya.loader.load([
                "res/atlas/player.atlas",
                "Desk/bg.png"
            ]);
            //this.showSelfBasicInfo();
        }

        public showSelfBasicInfo(): void {
            //实例化牌桌
            //selfBasicInfoUI

            //添加到stage
            Laya.stage.addChild(this.selfBasicInfoUI);
        }

    }
}