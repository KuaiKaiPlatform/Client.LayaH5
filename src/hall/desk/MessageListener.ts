module hall.desk {

    /**
     * 大厅牌桌消息监听器
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
                let deskController = common.play.Module.getDeskControllerByRule(deskDetail.getRule());
                if(deskController) {
                    deskController.launch(Login.getUid(), deskDetail);
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
                let deskController = common.play.Module.getDeskControllerByRule(deskDetail.getRule());
                if(deskController) {
                    deskController.getDeskView().onPlayerJoin(player);
                }
            }

            console.log("hall.desk.MessageListener.onPlayerJoin@Player join desk.", player.user.uid, deskKey);
        }

        public static toString() {
            return "hall.desk.MessageListener";
        }

    }
}
