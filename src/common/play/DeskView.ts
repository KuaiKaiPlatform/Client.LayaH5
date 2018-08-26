module common.play {
    
    /*
     *  牌桌显示
     */
    export class DeskView {
        // 牌桌逻辑控制类
        protected deskController: DeskController;

        // 玩家基本信息显示
        protected playerBasicView: common.view.PlayerBasicView = new common.view.PlayerBasicView();

        constructor(deskController) {
            this.deskController = deskController;
        }

        public getPlayerBasicView() {
            return this.playerBasicView;
        }

        public show(): void {
            // 设置背景
            this.setBg();

            // 显示玩家基本信息
            this.showPlayerBasicView();
        }

        // 设置背景
        public setBg(): void {
        }

        // 显示所有玩家基本信息
        public showPlayerBasicView(): void {
        }

        // 显示一名玩家基本信息
        public showSinglePlayerBasicView(basicInfo): void {
        }

    }
}