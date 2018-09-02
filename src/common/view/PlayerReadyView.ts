module common.view {
    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Component = laya.ui.Component;

    /**
     * 玩家准备相关操作和状态显示
     */
    export abstract class PlayerReadyView {

        protected deskController: common.play.DeskController;
        private preparedSprites = {};
        private prepareSprite;

        constructor(deskController) {
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
            let coordinate = this.getCoordinate(basicInfo);
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/desk.atlas"
            ], Handler.create(this, () => {
                this.showSingle(basicInfo, coordinate);
            }));
        }

        protected abstract getCoordinate(basicInfo);

        // 显示指定坐标的一名玩家基本信息
        public showSingle(basicInfo, coordinate): void {
            // 玩家基本信息显示
            let sprite = this.getSprite(basicInfo);
            if(!sprite) return;

            // 设置坐标
            if(coordinate) {
                Object.keys(coordinate).forEach(key => {
                    sprite[key] = coordinate[key];
                });
            }

            //添加到stage
            Laya.stage.addChild(sprite);
        }

        // 删除一名玩家基本信息
        public removeSingle(uid): void {
            console.log("common.view.PlayerReadyView.removeSingle", uid);
            let preparedSprite = this.preparedSprites[uid.toString()];
            if(preparedSprite) {
                console.log("common.view.PlayerReadyView.removeSingle@preparedSprite found", uid);
                Laya.stage.removeChild(preparedSprite);
            }
        }

    }
}