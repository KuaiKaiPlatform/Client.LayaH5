module common.play.view {
    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Event = Laya.Event;
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
        private getSprite(player): Component {
            // 准备状态
            if(player.prepared) {
                let uid = player.user.uid;
                let sprite = this.preparedSprites[uid] as Component;
                if(!sprite) {
                    sprite = new Component();
                    this.preparedSprites[uid] = sprite;
                }
                sprite.loadImage("common/desk/prepared.png");
                return sprite;
            }

            // 未准备状态，自己显示准备按钮，其他人不显示
            if(common.play.model.PlayerInfo.isSelf(player.user.uid)) {
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
            this.removeSingle(Login.getUid());
            let selfPlayerInfo = common.play.model.PlayerInfo.getSelf();
            selfPlayerInfo.prepared = true;
            this.show(selfPlayerInfo);

            // 发送准备消息
        }

        /**
         * 显示所有玩家准备状态
         */
        public showAll() {
            console.log("PlayerReadyView.showAll");
            let playerInfos = common.play.model.PlayerInfo.getAll();
            for(let key in playerInfos) {
                let playerInfo = playerInfos[key];
                this.show(playerInfo);
            }
        }

        /**
         * 显示指定玩家准备状态
         */
        public show(playerInfo) {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/common/desk.atlas"
            ], Handler.create(this, () => {
                this.showSingle(playerInfo);
            }));
        }

        protected abstract getAttrs(playerInfo);

        /**
         * 显示一名玩家准备状态
         */
        public showSingle(playerInfo): void {
            // 玩家准备状态显示
            let sprite = this.getSprite(playerInfo);
            if(!sprite) return;

            // 显示
            this.showComponent(sprite, this.getAttrs(playerInfo));
        }

        /**
         * 删除所有玩家准备状态
         */
        public removeAll() {
            let playerInfos = common.play.model.PlayerInfo.getAll();
            for(let key in playerInfos) {
                let playerInfo = playerInfos[key];
                this.removeSingle(playerInfo.userInfo.uid);
            }
        }

        /**
         * 删除一名玩家准备状态
         */
        public removeSingle(uid): void {
            console.log("common.play.view.PlayerReadyView.removeSingle", uid);
            let preparedSprite = this.preparedSprites[uid];
            if(preparedSprite) {
                console.log("common.play.view.PlayerReadyView.removeSingle@preparedSprite found", uid);
                Laya.stage.removeChild(preparedSprite);
            }

            if(common.play.model.PlayerInfo.isSelf(uid) && this.prepareSprite) {
                Laya.stage.removeChild(this.prepareSprite);
            }

        }

    }
}