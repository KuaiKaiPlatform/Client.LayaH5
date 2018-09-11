module mahjong.play.controller {

    import PlayerBasicInfo = common.model.PlayerBasicInfo;

    // 麻将牌桌控制器
    export class DeskController extends common.play.controller.DeskController {
        
        constructor() {
            super();
            this.deskView = new mahjong.play.view.DeskView(this);
            this.messageListener = new mahjong.play.MessageListener(this);
        }

        /**
         * 根据玩家方位找到位置
         */
        public findPosition(direction): number {
            let selfBasicInfo = PlayerBasicInfo.getSelf();
            let pos = direction - selfBasicInfo.direction;
            return pos < 0?pos+4:pos;
        }

        /**
         * 初始化牌局数据
         */
        public createSetInfo(setInit) {
            this.setInfo = new mahjong.play.model.SetInfo(setInit);
        }

    }

}