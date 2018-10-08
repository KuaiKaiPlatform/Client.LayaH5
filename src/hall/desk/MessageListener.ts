module hall.desk {

    /**
     * 大厅牌桌消息监听器
     */
    export class MessageListener {

        /**
         * 牌桌消息
         */
        public static onDeskInfo(sDeskInfo): void {
            let DeskInfo = common.model.DeskInfo;
            let deskKey = DeskInfo.getKey(sDeskInfo.desk);
            DeskInfo.add(deskKey, sDeskInfo.desk);
            console.log("hall.desk.MessageListener.onDeskInfo@done", JSON.stringify(sDeskInfo));
        }

        /**
         * 有玩家加入牌桌
         */
        public static onPlayerJoin(sPlayerJoin): void {
            let DeskInfo = common.model.DeskInfo;
            let deskKey = DeskInfo.getKey(sPlayerJoin);
            let deskDetail = DeskInfo.get(deskKey) as common.model.DeskDetail;
            if(!deskDetail) {
                console.error("hall.desk.MessageListener.onPlayerJoin@Desk not found.", deskKey, sPlayerJoin);
                return;
            }
            let player = sPlayerJoin.player;
            deskDetail.addPlayer(player);
            console.log("hall.desk.MessageListener.onPlayerJoin@Player join desk.", player.user.uid, deskKey);
        }

        public static toString() {
            return "hall.desk.MessageListener";
        }

    }
}
