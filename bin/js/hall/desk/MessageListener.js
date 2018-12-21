var hall;
(function (hall) {
    var desk;
    (function (desk) {
        /**
         * 大厅牌桌消息监听器
         */
        var MessageListener = (function () {
            function MessageListener() {
            }
            /**
             * 牌桌消息
             */
            MessageListener.onDeskInfo = function (sDeskInfo) {
                // 保存在 DeskInfo 中
                var DeskInfo = common.data.DeskInfo;
                var deskKey = DeskInfo.getKey(sDeskInfo.desk);
                var deskDetail = DeskInfo.add(deskKey, sDeskInfo.desk);
                // 自己加入的牌桌，显示
                if (deskDetail.hasSelf()) {
                    var deskController = common.play.Module.getDeskControllerByRule(deskDetail.getRule());
                    if (deskController) {
                        deskController.launch(Login.getUid(), deskDetail);
                    }
                }
                console.log("hall.desk.MessageListener.onDeskInfo@done", deskKey);
            };
            /**
             * 有玩家加入牌桌
             */
            MessageListener.onPlayerJoin = function (sPlayerJoin) {
                var DeskInfo = common.data.DeskInfo;
                var deskKey = DeskInfo.getKey(sPlayerJoin);
                var deskDetail = DeskInfo.get(deskKey);
                if (!deskDetail) {
                    console.error("hall.desk.MessageListener.onPlayerJoin@Desk not found.", deskKey, sPlayerJoin);
                    return;
                }
                var player = sPlayerJoin.player;
                deskDetail.addPlayer(player);
                // 自己加入的牌桌，显示
                if (deskDetail.hasSelf()) {
                    var deskController = common.play.Module.getDeskControllerByRule(deskDetail.getRule());
                    if (deskController) {
                        deskController.getDeskView().onPlayerJoin(player);
                    }
                }
                console.log("hall.desk.MessageListener.onPlayerJoin@Player join desk.", player.user.uid, deskKey);
            };
            MessageListener.toString = function () {
                return "hall.desk.MessageListener";
            };
            return MessageListener;
        }());
        desk.MessageListener = MessageListener;
    })(desk = hall.desk || (hall.desk = {}));
})(hall || (hall = {}));
//# sourceMappingURL=MessageListener.js.map