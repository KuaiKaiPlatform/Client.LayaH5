module common.play.view {
    
    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Component = laya.ui.Component;

    /**
     * 牌桌菜单按钮显示
     */
    export abstract class DeskMenuView extends common.view.ComponentView {

        protected deskController: common.play.controller.DeskController;
        private settingSprite = new Component();
        private messageSprite = new Component();
        private voiceSprite = new Component();
        private exitSprite = new Component();

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        public show() {
            console.log("DeskMenuView.show");
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/common/desk.atlas"
            ], Handler.create(this, () => {
                this.showSetting();
                this.showExit();
                this.showMessage();
                this.showVoice();
            }));
        }

        protected abstract getSettingAttrs();

        // 显示设置按钮
        public showSetting(): void {
            this.showSprite(this.settingSprite, "common/desk/setting.png", this.getSettingAttrs());
        }

        protected abstract getExitAttrs();

        // 显示退出按钮
        public showExit(): void {
            this.showSprite(this.exitSprite, "common/desk/exit.png", this.getExitAttrs());
        }

        protected abstract getMessageAttrs();

        // 显示消息按钮
        public showMessage(): void {
            this.showSprite(this.messageSprite, "common/desk/message.png", this.getMessageAttrs());
        }

        protected abstract getVoiceAttrs();

        // 显示语音按钮
        public showVoice(): void {
            this.showSprite(this.voiceSprite, "common/desk/voice.png", this.getVoiceAttrs());
        }

        private showSprite(sprite, path, attrs) {
            sprite.loadImage(path);
            this.showComponent(sprite, attrs);
        }

    }
}