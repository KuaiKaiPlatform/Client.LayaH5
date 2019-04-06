module hall {

    /**
     * 大厅消息监听器
     */
    export class MessageListener {

        /**
         * 牌桌消息
         */
        public static onDeskInfo(sDeskInfo): void {
            // 保存在 DeskInfo 中
            let DeskInfo = common.data.DeskInfo;
            let deskKey = DeskInfo.getKey(sDeskInfo.desk);
            let deskDetail = DeskInfo.add(deskKey, sDeskInfo.desk);

            // 自己加入的牌桌，显示
            if(deskDetail.hasSelf()) {
                let deskController = common.Module.getDeskControllerByRule(deskDetail.getRule());
                if(deskController) {
                    deskController.launch(deskDetail);
                }
            }

            console.log("hall.desk.MessageListener.onDeskInfo@done", deskKey);
        }

        /**
         * 有玩家加入牌桌
         */
        public static onPlayerJoin(sPlayerJoin): void {
            let DeskInfo = common.data.DeskInfo;
            let deskKey = DeskInfo.getKey(sPlayerJoin);
            let deskDetail = DeskInfo.get(deskKey) as common.data.DeskDetail;
            if(!deskDetail) {
                console.error("hall.desk.MessageListener.onPlayerJoin@Desk not found.", deskKey, sPlayerJoin);
                return;
            }
            let player = sPlayerJoin.player;
            deskDetail.addPlayer(player);

            // 自己加入的牌桌，显示
            if(deskDetail.hasSelf()) {
                let deskController = common.Module.getDeskControllerByRule(deskDetail.getRule());
                if(deskController) {
                    deskController.getDeskView().onPlayerJoin(player);
                }
            }

            console.log("hall.desk.MessageListener.onPlayerJoin@Player join desk.", player.user.uid, deskKey);
        }

        /**
         * 离线状态切换
         */
        public static onOffline(sOffline): void {
            // 修改数据
            let DeskInfo = common.data.DeskInfo;
            let deskKey = DeskInfo.getKey(sOffline);
            let deskDetail = DeskInfo.get(deskKey) as common.data.DeskDetail;
            if(!deskDetail) {
                console.error("hall.desk.MessageListener.onOffline@Desk not found.", deskKey, sOffline);
                return;
            }
            let uid = sOffline.uid;
            let player = deskDetail.getPlayer(uid);
            if(!player) {
                console.error("hall.desk.MessageListener.onOffline@player not found.", deskKey, sOffline);
                return;
            }
            player.offline = sOffline.offline;

            // 自己加入的牌桌，更新离线状态
            if(deskDetail.hasSelf()) {
                let deskController = common.Module.getDeskControllerByRule(deskDetail.getRule());
                if(deskController) {
                    deskController.getDeskView().getPlayerBasicView().showOffline(uid, player.offline);
                }
            }

            console.log("hall.desk.MessageListener.onOffline@Player offline status changed.", deskKey, sOffline);
        }

        /**
         * 全局设置返回
         */
        public static onGlobalSetting(sGlobalSetting): void {
            console.log("hall.desk.MessageListener.onGlobalSetting", sGlobalSetting);

            //let GlobalSetting = common.data.GlobalSetting;
            GlobalSetting.initSetting(JSON.parse(sGlobalSetting.setting.json));

            // 设置音量
            Laya.SoundManager.setMusicVolume(GlobalSetting.get("volumeBg"));
            Laya.SoundManager.setSoundVolume(GlobalSetting.get("volumePlay"));
            
            console.log("hall.desk.MessageListener.onGlobalSetting@volume set",
                GlobalSetting.get("volumeBg"),
                GlobalSetting.get("volumePlay"));
                
        }

        /**
         * 玩法相关方言
         */
        public static onRuleDialects(sRuleDialects): void {
            console.log("hall.MessageListener.onRuleDialects", sRuleDialects);
            common.data.GameRule.putDialects(sRuleDialects.rule, sRuleDialects.dialects);
            // 发送自定义事件

            //this.deskView.getDeskMenuView().getSettingView().onRuleDialects(sRuleDialects.rule, sRuleDialects.dialects);
        }

        public static toString() {
            return "hall.desk.MessageListener";
        }

    }
}
