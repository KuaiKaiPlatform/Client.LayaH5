module common.play.view {
    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Component = laya.ui.Component;
    import Label = laya.ui.Label;
    import GameSetting = common.play.model.GameSetting;

    /**
     * 牌桌基本信息显示
     */
    export abstract class GameSummaryView extends common.view.ComponentView {

        protected deskController: common.play.controller.DeskController;
        protected ruleSprite = new Component();
        protected modeLabel = new Label();

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        public show() {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/common/rule.atlas"
            ], Handler.create(this, () => {
                this.showRule();
            }));

            this.showMode(0);
        }

        protected abstract getRuleAttrs();

        /**
         * 显示游戏名称
         */
        public showRule(): void {
            this.ruleSprite.loadImage("common/rule/" + GameSetting.RULE  + ".png");

            this.showComponent(this.ruleSprite, this.getRuleAttrs());
        }

        protected abstract getModeAttrs();

        /**
         * 显示牌局模式，如：局 3/8
         */
        public showMode(curSet): void {
            this.modeLabel.changeText("局  " + curSet + "/" + GameSetting.TOTAL_SET);
            this.showComponent(this.modeLabel, this.getModeAttrs());
        }

        /**
         * 牌局开始或重连
         */
        public onSetInit() {
            let gameSetInfo = this.deskController.getGameSetInfo();

            // 显示局数
            this.showMode(gameSetInfo.getCurrentSet());
        }

    }
}