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
        protected settingView: common.view.SettingView;

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        public show() {
            console.log("common.play.view.DeskMenuView.show");
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

        public getSettingView() {
            if(this.settingView) return this.settingView;
            this.settingView = new common.view.SettingView();
            return this.settingView;
        }

        /**
         * 点击设置按钮
         */
        public onSettingClick(e: Event): void {
            // 显示设置界面
            let settingView = this.getSettingView();

            // 请求玩法相关语言
            let rule = this.deskController.getDeskDetail().getRule();
            let dialects = common.data.GameRule.getDialects(rule);
            if(!dialects) {
                // 监听 SRuleDialects
                GameEventDispacher.instance.onMsg(Protocol.meta.hall.SRuleDialects, settingView, settingView.onRuleDialects);
                // 发送 CRuleDialects
                MessageSender.send(Login.getServerId(), Protocol.meta.hall.CRuleDialects, {
                    rule: rule
                });
            }

            settingView.showAll({
                rule: this.deskController.getDeskDetail().getRule()
            });
        }

        // 显示设置按钮
        public showSetting(): void {
            this.showSprite(this.settingSprite, "common/desk/setting.png", this.getSettingAttrs());
            this.settingSprite.offAll();
            this.settingSprite.on(Laya.Event.CLICK, this, this.onSettingClick);
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