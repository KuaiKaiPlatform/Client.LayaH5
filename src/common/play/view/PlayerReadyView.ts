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
        protected preparedSprites = {};
        protected prepareSprite;

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        /**
         * 返回指定玩家的准备相关UI对象
         */
        protected getSprite(player): Component {
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
            if(Login.isSelf(player.user.uid)) {
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
            //this.removeSingle(Login.getUid());
            let selfPlayer = this.deskController.getDeskDetail().getPlayer(Login.getUid());
            selfPlayer.prepared = true;
            this.show(selfPlayer);

            // 发送准备消息
        }

        /**
         * 显示所有玩家准备状态
         */
        public showAll() {
            console.log("common.play.view.PlayerReadyView.showAll");
            
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/common/desk.atlas"
            ], Handler.create(this, () => {
                let GameStatus = Protocol.getEnum("common.GameStatus");
                if(this.deskController.getDeskDetail().getStatus() == GameStatus.STARTING) {
                    console.warn("common.play.view.PlayerReadyView.showAll@Game has started.");
                    return;
                }

                let players = this.deskController.getDeskDetail().getAllPlayers();
                for(let uid in players) {
                    this.showSingle(uid);
                }
            }));

        }

        /**
         * 显示指定玩家准备状态
         */
        public show(player) {
            this.showSingle(player.user.uid);
        }

        protected abstract getAttrs(player);

        /**
         * 显示一名玩家准备状态
         */
        public showSingle(uid): void {
            // 删除所有
            this.removeSingle(uid);

            let player = this.deskController.getDeskDetail().getPlayer(uid);
            // 玩家准备状态显示
            let sprite = this.getSprite(player);
            if(!sprite) return;

            // 显示
            this.showComponent(sprite, this.getAttrs(player));
        }

        /**
         * 删除所有玩家准备状态
         */
        public clearAll() {
            for(let uid in this.preparedSprites) {
                this.removeComponent(this.preparedSprites[uid]);
            }
            this.removeComponent(this.prepareSprite);
            
            // let players = this.deskController.getDeskDetail().getAllPlayers();
            // for(let uid in players) {
            //     this.removeSingle(uid);
            // }
        }

        /**
         * 删除一名玩家准备状态
         */
        public removeSingle(uid): void {
            console.log("common.play.view.PlayerReadyView.removeSingle", uid);
            let preparedSprite = this.preparedSprites[uid];
            if(preparedSprite) {
                console.log("common.play.view.PlayerReadyView.removeSingle@preparedSprite found", uid);
                this.removeComponent(preparedSprite);
            }

            if(Login.isSelf(uid)) {
                this.removeComponent(this.prepareSprite);
            }

        }

    }
}