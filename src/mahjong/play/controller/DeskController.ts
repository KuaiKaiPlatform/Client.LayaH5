module mahjong.play.controller {

    // 麻将牌桌控制器
    export class DeskController extends common.play.controller.DeskController {
        
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
         * 根据玩家方位找到位置
         */
        public findPositionByDirection(direction): number {
            let selfPlayer = this.deskDetail.getPlayer(Login.getUid());
            let pos = direction - selfPlayer.direction;
            return pos < 0?pos+4:pos;
        }

        /**
         * 根据玩家uid找到位置
         */
        public findPosition(uid): number {
            //let player = common.play.model.PlayerInfo.getByUid(uid);
            let player = this.deskDetail.getPlayer(uid);
            return this.findPositionByDirection(player.direction);
        }

        /**
         * 初始化牌局数据
         */
        public createGameSetInfo(setInit) {
            this.gameSetInfo = new mahjong.play.model.GameSetInfo(setInit);
        }

    }

}