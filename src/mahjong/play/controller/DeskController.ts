module mahjong.play.controller {

    // 麻将牌桌控制器
    export class DeskController extends common.play.controller.DeskController {
        
        constructor(selfId) {
            super(selfId);
            this.setDeskView(new mahjong.play.view.DeskView(this));
        }

        /**
         * 根据玩家方位找到位置
         */
        public findPosition(direction): number {
            let selfBasicInfo = this.playerBasicInfo.getByUid(this.selfId);
            let pos = direction - selfBasicInfo.direction;
            return pos < 0?pos+4:pos;
        }

        /**
         * 初始化牌局数据
         */
        protected createSetInfo() {
            this.setInfo = new mahjong.play.model.SetInfo(this.setInit);
        }

    }

}