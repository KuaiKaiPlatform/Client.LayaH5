module mahjong.play.view {
    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Component = laya.ui.Component;

    /**
     * 麻将牌桌中心方位显示 ui.mahjong.DeskCenterUI
     */
    export class DirectionView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        private deskCenterUI: ui.mahjong.DeskCenterUI;

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        public show() {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/desk.atlas"
            ], Handler.create(this, () => {
                this.showDirection();
            }));
        }

        // 显示方位
        public showDirection(): void {
            console.log("mahjong.play.view.showDirection@Showing desk center");
            if(!this.deskCenterUI) this.deskCenterUI = new ui.mahjong.DeskCenterUI();
            this.showComponent(this.deskCenterUI, {
                centerX: 0,
                centerY: 0
            });
        }

    }
}