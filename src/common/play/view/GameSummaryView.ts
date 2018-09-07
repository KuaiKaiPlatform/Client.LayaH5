module common.view {
    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Component = laya.ui.Component;

    /**
     * 牌桌基本信息显示
     */
    export abstract class GameSummaryView {

        protected deskController: common.play.DeskController;
        private ruleSprite = new Component();

        constructor(deskController) {
            this.deskController = deskController;
        }

        public show() {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/common/rule.atlas"
            ], Handler.create(this, () => {
                this.showRule();
            }));
        }

        protected abstract getRuleCoordinate();

        // 显示游戏名称
        public showRule(): void {
            this.ruleSprite.loadImage("common/rule/" + this.deskController.getEnterRes().rule  + ".png");

            let coordinate = this.getRuleCoordinate();
            // 设置坐标
            if(coordinate) {
                Object.keys(coordinate).forEach(key => {
                    this.ruleSprite[key] = coordinate[key];
                });
            }

            //添加到stage
            Laya.stage.addChild(this.ruleSprite);
        }

        // 显示牌局模式，如：局 3/8，底 1/2
        public showMode(): void {
            this.ruleSprite.loadImage("common/rule/" + this.deskController.getEnterRes().rule  + ".png");

            let coordinate = this.getRuleCoordinate();
            // 设置坐标
            if(coordinate) {
                Object.keys(coordinate).forEach(key => {
                    this.ruleSprite[key] = coordinate[key];
                });
            }

            //添加到stage
            Laya.stage.addChild(this.ruleSprite);
        }

    }
}