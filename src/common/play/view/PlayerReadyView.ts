module common.play.view {
    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Component = laya.ui.Component;

    /**
     * 玩家准备相关操作和状态显示
     */
    export abstract class PlayerReadyView extends common.view.ComponentView {

        protected deskController: common.play.controller.DeskController;
        private preparedSprites = {};
        private prepareSprite;

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        /**
         * 返回指定玩家的准备相关UI对象
         */
        private getSprite(basicInfo): Component {
            // 准备状态
            if(basicInfo.state == 1) {
                let uid = basicInfo.uid.toString();
                let sprite = this.preparedSprites[uid] as Component;
                if(!sprite) {
                    sprite = new Component();
                    this.preparedSprites[uid] = sprite;
                }
                sprite.loadImage("mahjong/desk/prepared.png");
                return sprite;
            }

            // 未准备状态，自己显示准备按钮，其他人不显示
            if(this.deskController.isSelf(basicInfo)) {
                if(!this.prepareSprite) this.prepareSprite = new Component();
                this.prepareSprite.loadImage("mahjong/desk/prepare.png");
                return this.prepareSprite;
            }

            return null;
        }

        public showAll() {
            let basicInfos = this.deskController.getPlayerBasicInfo().getAll();
            for(let key in basicInfos) {
                let basicInfo = basicInfos[key];
                this.show(basicInfo);
            }
        }

        public show(basicInfo) {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/desk.atlas"
            ], Handler.create(this, () => {
                this.showSingle(basicInfo);
            }));
        }

        protected abstract getAttrs(basicInfo);

        // 显示指定坐标的一名玩家准备状态
        public showSingle(basicInfo): void {
            // 玩家准备状态显示
            let sprite = this.getSprite(basicInfo);
            if(!sprite) return;

            // 显示
            this.showComponent(sprite, this.getAttrs(basicInfo));
        }

        // 删除一名玩家准备状态
        public removeSingle(uid): void {
            console.log("common.play.view.PlayerReadyView.removeSingle", uid);
            let preparedSprite = this.preparedSprites[uid.toString()];
            if(preparedSprite) {
                console.log("common.play.view.PlayerReadyView.removeSingle@preparedSprite found", uid);
                Laya.stage.removeChild(preparedSprite);
            }
        }

    }
}