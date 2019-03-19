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

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        protected abstract getRuleAttrs();

        /**
         * 显示游戏名称
         */
        public showRule(): void {
            //console.log("GameSummaryView.showRule", GameSetting.rule);
            this.ruleSprite.loadImage("common/rule/" + this.deskController.getDeskDetail().getRule() + ".png");

            this.showComponent(this.ruleSprite, this.getRuleAttrs());
        }

        protected abstract getModeAttrs();

        public showAll() {
            
        }

        /**
         * 显示牌局模式，如：局 3/8
         */
        // public showMode(curSet): void {
        //     //console.log("GameSummaryView.showMode@totalSet", GameSetting.get("totalSet"));
        //     this.modeLabel.changeText("局  " + curSet + "/" + this.deskController.getDeskDetail().getSettingValue("totalSet"));
        //     this.showComponent(this.modeLabel, this.getModeAttrs());
        // }

        /**
         * 牌局开始或重连
         */
        public onSetInit() {
            let gameSetInfo = this.deskController.getGameSetInfo();

            // 显示局数
           // this.showMode(gameSetInfo.getCurrentSet());
        }

    }
}