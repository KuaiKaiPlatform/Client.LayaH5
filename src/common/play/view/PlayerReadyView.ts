module common.play.view {
    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Event = Laya.Event;
    import Component = laya.ui.Component;
    import PlayerBasicInfo = common.model.PlayerBasicInfo;

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
                sprite.loadImage("common/desk/prepared.png");
                return sprite;
            }

            // 未准备状态，自己显示准备按钮，其他人不显示
            if(PlayerBasicInfo.isSelf(basicInfo.uid)) {
                if(!this.prepareSprite) this.prepareSprite = new Component();
                this.prepareSprite.loadImage("common/desk/prepare.png");
                this.prepareSprite.on(Event.CLICK, this, this.onPrepare);
                return this.prepareSprite;
            }

            return null;
        }

        /**
         * 触发准备
         */
        public onPrepare(e: Event): void {
            this.removeSingle(PlayerBasicInfo.selfId);
            let basicInfo = PlayerBasicInfo.getSelf();
            basicInfo.state = 1;
            this.show(basicInfo);

            // 发送准备消息
        }

        /**
         * 显示所有玩家准备状态
         */
        public showAll() {
            let basicInfos = PlayerBasicInfo.getAll();
            for(let key in basicInfos) {
                let basicInfo = basicInfos[key];
                this.show(basicInfo);
            }
        }

        /**
         * 显示指定玩家准备状态
         */
        public show(basicInfo) {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/common/desk.atlas"
            ], Handler.create(this, () => {
                this.showSingle(basicInfo);
            }));
        }

        protected abstract getAttrs(basicInfo);

        /**
         * 显示一名玩家准备状态
         */
        public showSingle(basicInfo): void {
            // 玩家准备状态显示
            let sprite = this.getSprite(basicInfo);
            if(!sprite) return;

            // 显示
            this.showComponent(sprite, this.getAttrs(basicInfo));
        }

        /**
         * 删除所有玩家准备状态
         */
        public removeAll() {
            let basicInfos = PlayerBasicInfo.getAll();
            for(let key in basicInfos) {
                let basicInfo = basicInfos[key];
                this.removeSingle(basicInfo.uid);
            }
        }

        /**
         * 删除一名玩家准备状态
         */
        public removeSingle(uid): void {
            console.log("common.play.view.PlayerReadyView.removeSingle", uid);
            let preparedSprite = this.preparedSprites[uid.toString()];
            if(preparedSprite) {
                console.log("common.play.view.PlayerReadyView.removeSingle@preparedSprite found", uid);
                Laya.stage.removeChild(preparedSprite);
            }

            if(PlayerBasicInfo.isSelf(uid) && this.prepareSprite) {
                Laya.stage.removeChild(this.prepareSprite);
            }

        }

    }
}