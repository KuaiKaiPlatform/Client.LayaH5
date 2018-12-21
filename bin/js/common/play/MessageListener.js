var common;
(function (common) {
    var play;
    (function (play) {
        // 牌桌消息监听器
        var MessageListener = (function () {
            function MessageListener(deskController) {
                this.deskController = deskController;
                this.deskView = deskController.getDeskView();
            }
            /**
             * 有人加入牌桌返回消息
             */
            MessageListener.prototype.onPlayerJoin = function (sPlayerJoin) {
                //common.play.model.PlayerInfo.add(sPlayerJoin.player);
                this.deskView.onPlayerJoin(sPlayerJoin);
                console.log("common.play.MessageListener.onPlayerJoin@done", JSON.stringify(sPlayerJoin));
            };
            /**
             * 有人离开牌桌返回消息
             */
            MessageListener.prototype.onPlayerQuit = function (exitRes) {
                this.deskView.onPlayerExit(exitRes.uid);
                //common.play.model.PlayerInfo.removeByUid(exitRes.uid);
            };
            /**
             * 开局或重连后返回牌局消息
             */
            MessageListener.prototype.onSetInit = function (setInit) {
                //GameData.setInit = setInit;
                this.deskController.createGameSetInfo(setInit);
                this.deskView.getPlayerReadyView().removeAll();
                // 显示牌局基本信息
                this.deskView.getGameSummaryView().onSetInit();
            };
            return MessageListener;
        }());
        play.MessageListener = MessageListener;
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=MessageListener.js.map