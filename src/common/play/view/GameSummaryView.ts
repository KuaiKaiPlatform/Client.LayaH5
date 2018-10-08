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
        protected modeLabel = new Label();

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        public show() {
            console.log("GameSummaryView.show");
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
            //console.log("GameSummaryView.showRule", GameSetting.rule);
            this.ruleSprite.loadImage("common/rule/" + common.play.model.GameSetting.rule  + ".png");

            this.showComponent(this.ruleSprite, this.getRuleAttrs());
        }

        protected abstract getModeAttrs();

        /**
         * 显示牌局模式，如：局 3/8
         */
        public showMode(curSet): void {
            //console.log("GameSummaryView.showMode@totalSet", GameSetting.get("totalSet"));
            this.modeLabel.changeText("局  " + curSet + "/" + common.play.model.GameSetting.get("totalSet"));
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