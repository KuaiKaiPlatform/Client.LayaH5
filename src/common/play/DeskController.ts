module common.play.controller {

    // 牌桌控制器
    export abstract class DeskController {

        // 本人UID
        protected selfId;

        // 加入牌桌后服务器返回的数据
        protected enterRes;

        // 牌局初始化信息
        protected setInit;

        // 牌桌显示
        protected deskView: common.play.view.DeskView;

        // 牌桌内玩家基本信息
        protected playerBasicInfo: common.model.PlayerBasicInfo;

        // 玩法设置
        //protected gameSetting: common.play.model.GameSetting;

        // 牌局信息
        protected setInfo: common.play.model.SetInfo;

        protected constructor(selfId) {
            this.selfId = selfId;
        }

        public getSelfId() {
            return this.selfId;
        }

        public getEnterRes() {
            return this.enterRes;
        }

        public getSetInit() {
            return this.setInit;
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

        // public getGameSetting(): common.play.model.GameSetting {
        //     return this.gameSetting;
        // }

        /**
         * 服务器返回自己加入牌桌消息
         */
        public onEnterRes(enterRes): void {
            this.enterRes = enterRes;
            this.playerBasicInfo = new common.model.PlayerBasicInfo(enterRes.basicInfos);
            common.play.model.GameSetting.init(enterRes.setting);

            this.onStart();
        }

        protected onStart(): void {
            this.deskView.show();
        }

        public onPlayerEnter(basicInfo): void {
            this.playerBasicInfo.add(basicInfo);
            this.deskView.onPlayerEnter(basicInfo);
        }

        public onPlayerExit(exitRes): void {
            this.deskView.onPlayerExit(exitRes.uid);
            this.playerBasicInfo.removeByUid(exitRes.uid);
        }

        /**
         * 服务器返回牌局初始化消息
         */
        public onSetInit(setInit): void {
            this.setInit = setInit;
            this.createSetInfo();
        }

        protected abstract createSetInfo();

        /**
         * 根据玩家方位找到位置
         */
        public abstract findPosition(direction): number;

        /**
         * 检查是否是自己
         */
        public isSelf(basicInfo): boolean {
            return this.selfId == basicInfo.uid;
        }

    }
}
