module mahjong.play.view {

    import Handler = Laya.Handler;
    import Image = Laya.Image;
    import View = Laya.View;
    import Component = Laya.Component;

    /**
     *  麻将玩家下注界面
     */
    export class SelfBetView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        protected betView : View;

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        protected getUI() {
            if(this.betView) return this.betView;
            this.betView = new ui.mahjong.PaoZiUI();

            this.betView.getChildByName("0").on(Laya.Event.CLICK, this, this.clickHandler);
            this.betView.getChildByName("1").on(Laya.Event.CLICK, this, this.clickHandler);
            this.betView.getChildByName("2").on(Laya.Event.CLICK, this, this.clickHandler);
            this.betView.getChildByName("3").on(Laya.Event.CLICK, this, this.clickHandler);
            this.betView.getChildByName("4").on(Laya.Event.CLICK, this, this.clickHandler);

            return this.betView;
        }

        /**
         * 显示下注界面
         */
        public show(): void {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/common/desk.atlas"
            ], Handler.create(this, () => {
                this.showAll();
            }));
        }

        /**
         * 显示下注界面
         */
        public showAll(): void {
            let betView = this.getUI();
            this.showComponent(betView, {});
        }

        public hide() {
            this.removeComponent(this.betView);
        }

        /**
         * 点击执行操作
         */
        protected clickHandler(e: Event): void {
            this.hide();
            console.log("mahjong.play.view.SelfBetView.clickHandler", e.target["name"]);

            MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.CBet, {
                bet: parseInt(e.target["name"])
            });

        }

    }
}