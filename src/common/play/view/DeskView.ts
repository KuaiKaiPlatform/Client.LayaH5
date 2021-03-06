module common.play.view {
    
    /**
     *  牌桌显示
     */
    export class DeskView {
        // 牌桌逻辑控制类
        protected deskController: common.play.controller.DeskController;

        // 玩家基本信息显示
        protected playerBasicView: common.play.view.PlayerBasicView;

        // 玩家准备状态显示
        protected playerReadyView: common.play.view.PlayerReadyView;

        // 牌桌基本信息显示
        protected gameSummaryView: common.play.view.GameSummaryView;

        // 牌桌菜单按钮显示
        protected deskMenuView: common.play.view.DeskMenuView;

        // 开始游戏特效显示
        protected startEffect: common.play.effect.StartEffect;

        constructor(deskController) {
            this.deskController = deskController;
            this.startEffect = new common.play.effect.StartEffect(deskController);
        }

        public getPlayerBasicView() {
            return this.playerBasicView;
        }

        public getPlayerReadyView() {
            return this.playerReadyView;
        }

        public getGameSummaryView() {
            return this.gameSummaryView;
        }

        public getDeskMenuView() {
            return this.deskMenuView;
        }

        public getStartEffect() {
            return this.startEffect;
        }

        public show(): void {
            // 设置背景
            this.setBg();

            // 显示玩家基本信息
            this.playerBasicView.showAll();

            // 显示玩家准备状态
            this.playerReadyView.showAll();

            // 显示牌桌基本信息
            this.gameSummaryView.showAll();

            // 显示牌桌菜单按钮
            this.deskMenuView.show();

        }

        // 设置背景
        public setBg(): void {
            // Laya.loader.load([
            //     "res/sounds/bgm.mp3"
            // ], Laya.Handler.create(this, () => {
            //     Laya.SoundManager.playMusic("res/sounds/bgm.mp3");
            // }));
        }

        public onPlayerJoin(player): void {
            this.playerBasicView.show(player);
            this.playerReadyView.show(player);
        }

        public onPlayerExit(uid): void {
            this.playerBasicView.removeSingle(uid);
            this.playerReadyView.removeSingle(uid);
        }

    }
}