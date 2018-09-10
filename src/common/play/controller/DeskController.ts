module common.play.controller {

    // 牌桌控制器
    export abstract class DeskController {

        // 本人UID
        protected selfId;

        // 加入牌桌后服务器返回的数据
        protected enterRes;

        // 牌局初始化信息
        protected setInit;

        // 消息监听器
        protected messageListener: common.play.MessageListener;

        // 牌桌显示
        protected deskView: common.play.view.DeskView;

        // 牌桌内玩家基本信息
        protected playerBasicInfo: common.model.PlayerBasicInfo;

        // 牌局信息
        protected setInfo: common.play.model.SetInfo;

        protected constructor(selfId) {
            this.selfId = selfId;
            this.messageListener = new common.play.MessageListener(this);
        }

        public getSelfId() {
            return this.selfId;
        }

        public setEnterRes(enterRes) {
            this.enterRes = enterRes;
        }

        public getEnterRes() {
            return this.enterRes;
        }

        public setSetInit(setInit) {
            this.setInit = setInit;
        }

        public getSetInit() {
            return this.setInit;
        }

        public getMessageListener(): common.play.MessageListener {
            return this.messageListener;
        }

        public getDeskView(): common.play.view.DeskView {
            return this.deskView;
        }

        public setDeskView(deskView: common.play.view.DeskView): void {
            this.deskView = deskView;
        }

        public getPlayerBasicInfo(): common.model.PlayerBasicInfo {
            return this.playerBasicInfo;
        }

        public setPlayerBasicInfo(playerBasicInfo): void {
            this.playerBasicInfo = playerBasicInfo;
        }

        public abstract createSetInfo();

        /**
         * 根据玩家方位找到位置
         */
        public abstract findPosition(direction): number;

        /**
         * 检查是否是自己
         */
        public isSelf(uid): boolean {
            return this.selfId == uid;
        }

    }
}
