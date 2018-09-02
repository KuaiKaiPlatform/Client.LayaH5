module mahjong.play {

    // 麻将牌桌控制器
    export class DeskController extends common.play.DeskController {
        
        constructor(selfId) {
            super(selfId);
            this.setDeskView(new DeskView(this));
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
         * 检查是否是自己
         */
        public isSelf(basicInfo): boolean {
            return this.selfId == basicInfo.uid;
        }

    }

}