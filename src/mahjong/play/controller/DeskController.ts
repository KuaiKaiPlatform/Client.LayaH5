module mahjong.play.controller {

    // 麻将牌桌控制器
    export class DeskController extends common.play.controller.DeskController {
        
        // 根据玩法找到牌桌显示类（暂未使用）
        private rule2DeskView = {};

        public static instance;

        public static init() {
            this.instance = new DeskController();
        }

        constructor() {
            super();
            this.deskView = new mahjong.play.view.DeskView(this);
            this.messageListener = new mahjong.play.MessageListener(this);
        }

        /**
         * 找到指定玩家相对位置：mahjong.play.Position
         */
        public findPosition(player): number {
            let selfPlayer = this.deskDetail.getPlayer(this.selfId);
            let pos = player.seat - selfPlayer.seat;
            return pos < 0?pos+4:pos;
        }

        /**
         * 初始化牌局数据
         */
        public createGameSetInfo(setInit) {
            this.gameSetInfo = new mahjong.play.model.GameSetInfo(setInit);
        }

    }

}