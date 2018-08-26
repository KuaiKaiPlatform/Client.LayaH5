module common.play {

    // 牌桌控制器
    export class DeskController {

        // 本人UID
        protected selfId;

        // 加入牌桌后服务器返回的数据
        protected enterRes;

        // 牌桌显示
        protected deskView: DeskView;

        // 牌桌内玩家基本信息
        protected playerBasicInfo: common.model.PlayerBasicInfo;

        protected constructor(selfId) {
            this.selfId = selfId;
        }

        public getSelfId() {
            return this.selfId;
        }

        public getDeskView(): DeskView {
            return this.deskView;
        }

        public setDeskView(deskView: DeskView): void {
            this.deskView = deskView;
        }

        public getPlayerBasicInfo(): common.model.PlayerBasicInfo {
            return this.playerBasicInfo;
        }

        // 服务器返回加入牌桌消息
        public onEnterRes(enterRes): void {
            this.enterRes = enterRes;
            this.playerBasicInfo = new common.model.PlayerBasicInfo(enterRes.basicInfos);

            this.onStart();
        }

        protected onStart(): void {
            this.deskView.show();
        }

        public onPlayerEnter(basicInfo): void {
            this.playerBasicInfo.add(basicInfo);
            this.deskView.showSinglePlayerBasicView(basicInfo);
        }

        // 根据玩家方位找到位置
        public findPosition(direction): number {
            return 0;
        }

    }
}
