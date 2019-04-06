module common.play.view {

    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Component = laya.ui.Component;
    import Label = laya.ui.Label;

    /**
     * 牌桌基本信息显示
     */
    export abstract class GameSummaryView extends common.view.ComponentView {

        protected deskController: common.play.controller.DeskController;
        protected ruleSprite = new Component();
        protected ruleLabel = new Label();

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        protected abstract getRuleAttrs();

        /**
         * 显示游戏名称图标
         */
        public showRuleSprite(): void {
            this.ruleSprite.loadImage("common/rule/" + this.deskController.getDeskDetail().getRule() + ".png");
            this.showComponent(this.ruleSprite, this.getRuleAttrs());
        }

        /**
         * 显示游戏名称
         */
        public showRuleLabel(): void {
            this.ruleLabel.changeText(common.data.GameRule.getRuleName(this.deskController.getDeskDetail().getRule()));
            this.showComponent(this.ruleLabel, this.getRuleAttrs());
        }

        public abstract showAll();

        public abstract onSetInit();

    }
}