var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        // 牌桌消息监听器
        var MessageListener = (function (_super) {
            __extends(MessageListener, _super);
            function MessageListener(deskController) {
                return _super.call(this, deskController) || this;
            }
            MessageListener.prototype.getDeskController = function () {
                return this.deskController;
            };
            MessageListener.prototype.getDeskView = function () {
                return this.deskView;
            };
            /**
             * 开局或重连后返回牌局消息，SSetInit
             */
            MessageListener.prototype.onSetInit = function (setInit) {
                _super.prototype.onSetInit.call(this, setInit);
                var deskView = this.getDeskView();
                // 显示庄家
                deskView.getPlayerBasicView().showBanker(setInit.bankerId);
                // 显示手牌
                deskView.getHandCardsView().showAll();
                // 显示明牌
                deskView.getCardGroupsView().showAll();
                // 显示打出的牌
                deskView.getDiscardsView().showAll();
                // 显示各玩家方位
                //deskView.getDirectionView().showAll();
                deskView.getDirectionView().onSetInit(setInit);
                // 显示开始游戏特效
                deskView.getStartEffect().show();
            };
            /**
             * 玩家出牌后返回出牌消息和可执行操作，SOperCard
             */
            MessageListener.prototype.onOperCard = function (sOperCard) {
                var deskController = this.deskController;
                var gameSetInfo = deskController.getGameSetInfo();
                var playerSetInfo = gameSetInfo.getPlayerSetInfo();
                var deskView = this.getDeskView();
                // 刚完成的操作
                sOperCard.operDetails.forEach(function (operDetail, index) {
                    deskController.getOperationHandler().handleOperDetail(operDetail);
                    gameSetInfo.setLastOperDetail(operDetail);
                    gameSetInfo.setRemainCards(operDetail.remainCards);
                    // 更新剩余牌数
                    deskView.getGameSummaryView().showRemain();
                    // 中心方位focus
                    deskView.getDirectionView().showCurrentFocus(operDetail.uid);
                });
                // 可执行的操作
                this.handleCanOperDetails(sOperCard.canOperDetails);
                // 打听列表
                playerSetInfo.getSelfHandcards().setDiscardTingCards(sOperCard.discardTingCards);
                // 启动倒计时读秒
                deskView.getDirectionView().launchCountDown();
            };
            MessageListener.prototype.handleCanOperDetails = function (canOperDetails) {
                // 记录可执行的操作
                var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                playerSetInfo.getSelfOperations().setCanOperDetails(canOperDetails);
                // 显示可执行的操作
                this.getDeskView().getSelfCanOperView().show(canOperDetails);
            };
            /**
             * 有人过牌后如果有更多可执行的操作，发送给操作者，SCanOper
             */
            MessageListener.prototype.onCanOper = function (sCanOper) {
                this.handleCanOperDetails(sCanOper.canOperDetails);
            };
            /**
             * 一局结束收到牌局结算结果，SSetResult
             */
            MessageListener.prototype.onSetResult = function (sSetResult) {
                var deskDetail = this.deskController.getDeskDetail();
                // 修改牌桌状态
                var GameStatus = Protocol.getEnum("common.GameStatus");
                deskDetail.setStatus(GameStatus.SET_ENDING);
                // 记录数据
                deskDetail.addSetResult(sSetResult);
                // 修改下一局庄家
                deskDetail.setBankerId(sSetResult.nextBankerId);
                // 清空报听状态
                this.getDeskController().getGameSetInfo().getPlayerSetInfo().clearBaoTing();
                // 显示本局比赛结果
                var setResultDialog = this.deskController.createSetResultDialog(sSetResult);
                if (!this.getDeskController().getOperationHandler().isHuEffect())
                    setResultDialog.show();
            };
            /**
             * 整场结束返回牌局结算结果，SGameResult
             */
            MessageListener.prototype.onGameResult = function (sGameResult) {
                console.log("mahjong.play.MessageListener.onGameResult");
                var deskDetail = this.deskController.getDeskDetail();
                // 修改牌桌状态
                var GameStatus = Protocol.getEnum("common.GameStatus");
                deskDetail.setStatus(GameStatus.ENDING);
                // 记录数据
                deskDetail.setGameResult(sGameResult);
                // 创建整场比赛结果对话框，关闭最后一局结果后显示出来
                this.deskController.createGameResultDialog(sGameResult); //.show();
            };
            /**
             * 返回玩家准备，SReady
             */
            MessageListener.prototype.onReady = function (sReady) {
                console.log("mahjong.play.MessageListener.onReady", sReady.uid);
                this.deskController.getDeskDetail().setPrepared(sReady.uid);
                this.getDeskView().getPlayerReadyView().showSingle(sReady.uid);
            };
            /**
             * 返回玩家下注，SBet
             */
            MessageListener.prototype.onBet = function (sBet) {
                console.log("mahjong.play.MessageListener.onBet", JSON.stringify(sBet));
                this.deskController.getDeskDetail().setPrepared(sBet.uid);
                this.deskController.getDeskDetail().setBet(sBet.uid, sBet.bet);
                this.getDeskView().getPlayerReadyView().showSingle(sBet.uid);
                this.getDeskView().getPlayerBasicView().showSingle(sBet.uid);
            };
            MessageListener.prototype.toString = function () {
                return "mahjong.play.MessageListener";
            };
            return MessageListener;
        }(common.play.MessageListener));
        play.MessageListener = MessageListener;
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=MessageListener.js.map