module common.play.effect {
    
    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Component = laya.ui.Component;

    /**
     * 开始游戏特效显示
     */
    export class StartEffect extends common.view.ComponentView {

        protected deskController: common.play.controller.DeskController;
        private startSprite = new Component();
        private scaleDelta: number = 0;

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        public show() {
            console.log("common.play.effect.StartEffect.show");
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/common/desk.atlas"
            ], Handler.create(this, () => {
                this.showEffect("common/desk/start.png");
                Laya.SoundManager.playSound("res/sounds/play/start.mp3");
            }));
        }

        // 显示开始游戏特效
        public showEffect(path): void {
            let sprite = this.startSprite;
            sprite.loadImage(path);
            sprite.centerX = 0;
            sprite.centerY = 0;
            sprite.zOrder = 1000;
            this.showComponent(sprite, null);

            Laya.timer.frameLoop(1, this, this.animate);
        }

        private animate(e: Event): void {
            //心跳缩放
            this.scaleDelta += 0.02;
            //var scaleValue: number = Math.sin(this.scaleDelta);
            let scaleValue = this.scaleDelta;
            this.startSprite.scale(scaleValue, scaleValue);

            if(this.scaleDelta >= 1.5) {
                console.log("common.play.effect.StartEffect.animate@clear");
                Laya.timer.clear(this, this.animate);
                this.removeComponent(this.startSprite);
            }

        }

    }
}