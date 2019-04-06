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
            // public onPlayerJoin(sPlayerJoin): void {
            //     //common.play.model.PlayerInfo.add(sPlayerJoin.player);
            //     this.deskView.onPlayerJoin(sPlayerJoin);
            //     console.log("common.play.MessageListener.onPlayerJoin@done", JSON.stringify(sPlayerJoin));
            // }
            /**
             * 有人离开牌桌返回消息
             */
            // public onPlayerQuit(exitRes): void {
            //     this.deskView.onPlayerExit(exitRes.uid);
            //     //common.play.model.PlayerInfo.removeByUid(exitRes.uid);
            // }
            /**
             * 开局或重连后返回牌局消息
             */
            MessageListener.prototype.onSetInit = function (setInit) {
                // 创建本局数据对象
                this.deskController.createGameSetInfo(setInit);
                var deskDetail = this.deskController.getDeskDetail();
                // 游戏开始
                var GameStatus = Protocol.getEnum("common.GameStatus");
                deskDetail.setStatus(GameStatus.STARTING);
                // 设置庄家
                deskDetail.setBankerId(setInit.bankerId);
                // 当前局数
                deskDetail.setCurrentSet(setInit.curSet);
                // 清理准备状态
                deskDetail.clearPrepared();
                // 隐藏准备相关操作
                this.deskView.getPlayerReadyView().clearAll();
                // 显示牌局基本信息
                this.deskView.getGameSummaryView().onSetInit();
            };
            /**
             * 一局结束返回牌局结算结果，SSetResult
             */
            MessageListener.prototype.onSetResult = function (sSetResult) {
            };
            return MessageListener;
        }());
        play.MessageListener = MessageListener;
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=MessageListener.js.map