module mahjong.play.controller {

    import PlayerInfo = common.play.model.PlayerInfo;
    import DeskView = mahjong.play.view.DeskView;
    import MessageListener = mahjong.play.MessageListener;

    // 麻将牌桌控制器
    export class DeskController extends common.play.controller.DeskController {
        
        public static instance;

        public static init() {
            this.instance = new DeskController();
        }

        constructor() {
            super();
            this.deskView = new DeskView(this);
            this.messageListener = new MessageListener(this);
        }

        /**
         * 根据玩家方位找到位置
         */
        public findPositionByDirection(direction): number {
            let selfPlayerInfo = PlayerInfo.getSelf();
            let pos = direction - selfPlayerInfo.direction;
            return pos < 0?pos+4:pos;
        }

        /**
         * 根据玩家uid找到位置
         */
        public findPosition(uid): number {
            let playerInfo = PlayerInfo.getByUid(uid);
            return this.findPositionByDirection(playerInfo.direction);
        }

        /**
         * 初始化牌局数据
         */
        public createGameSetInfo(setInit) {
            this.gameSetInfo = new mahjong.play.model.GameSetInfo(setInit);
        }

    }

}