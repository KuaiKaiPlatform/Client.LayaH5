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
                    var deskController = common.Module.getDeskControllerByRule(deskDetail.getRule());
                    if (deskController) {
                        deskController.launch(deskDetail);
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
                    var deskController = common.Module.getDeskControllerByRule(deskDetail.getRule());
                    if (deskController) {
                        deskController.getDeskView().onPlayerJoin(player);
                    }
                }
                console.log("hall.desk.MessageListener.onPlayerJoin@Player join desk.", player.user.uid, deskKey);
            };
            /**
             * 离线状态切换
             */
            MessageListener.onOffline = function (sOffline) {
                // 修改数据
                var DeskInfo = common.data.DeskInfo;
                var deskKey = DeskInfo.getKey(sOffline);
                var deskDetail = DeskInfo.get(deskKey);
                if (!deskDetail) {
                    console.error("hall.desk.MessageListener.onOffline@Desk not found.", deskKey, sOffline);
                    return;
                }
                var uid = sOffline.uid;
                var player = deskDetail.getPlayer(uid);
                if (!player) {
                    console.error("hall.desk.MessageListener.onOffline@player not found.", deskKey, sOffline);
                    return;
                }
                player.offline = sOffline.offline;
                // 自己加入的牌桌，更新离线状态
                if (deskDetail.hasSelf()) {
                    var deskController = common.Module.getDeskControllerByRule(deskDetail.getRule());
                    if (deskController) {
                        deskController.getDeskView().getPlayerBasicView().showOffline(uid, player.offline);
                    }
                }
                console.log("hall.desk.MessageListener.onOffline@Player offline status changed.", deskKey, sOffline);
            };
            /**
             * 全局设置返回
             */
            MessageListener.onGlobalSetting = function (sGlobalSetting) {
                console.log("hall.desk.MessageListener.onGlobalSetting", sGlobalSetting);
                //let GlobalSetting = common.data.GlobalSetting;
                GlobalSetting.initSetting(JSON.parse(sGlobalSetting.setting.json));
                // 设置音量
                Laya.SoundManager.setMusicVolume(GlobalSetting.get("volumeBg"));
                Laya.SoundManager.setSoundVolume(GlobalSetting.get("volumePlay"));
                console.log("hall.desk.MessageListener.onGlobalSetting@volume set", GlobalSetting.get("volumeBg"), GlobalSetting.get("volumePlay"));
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