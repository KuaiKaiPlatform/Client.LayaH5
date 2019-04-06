module mahjong.play {

    // 牌桌消息监听器
    export class MessageListener extends common.play.MessageListener {

        public constructor(deskController) {
            super(deskController);
        }

        protected getDeskController(): mahjong.play.controller.DeskController {
            return this.deskController as mahjong.play.controller.DeskController;
        }

        protected getDeskView(): mahjong.play.view.DeskView {
            return this.deskView as mahjong.play.view.DeskView;
        }

        /**
         * 开局或重连后返回牌局消息，SSetInit
         */
        public onSetInit(setInit): void {
            super.onSetInit(setInit);

            let deskView = this.getDeskView();

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

        }

        /**
         * 玩家出牌后返回出牌消息和可执行操作，SOperCard
         */
        public onOperCard(sOperCard): void {
            let deskController = this.deskController as mahjong.play.controller.DeskController;
            let gameSetInfo = deskController.getGameSetInfo() as mahjong.play.model.GameSetInfo;
            let playerSetInfo = gameSetInfo.getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            let deskView = this.getDeskView();

            // 刚完成的操作
            sOperCard.operDetails.forEach((operDetail, index) => {
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
        }

        protected handleCanOperDetails(canOperDetails) {
            // 记录可执行的操作
            let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            playerSetInfo.getSelfOperations().setCanOperDetails(canOperDetails);

            // 显示可执行的操作
            this.getDeskView().getSelfCanOperView().show(canOperDetails);
        }

        /**
         * 有人过牌后如果有更多可执行的操作，发送给操作者，SCanOper
         */
        public onCanOper(sCanOper): void {
            this.handleCanOperDetails(sCanOper.canOperDetails);
        }

        /**
         * 一局结束收到牌局结算结果，SSetResult
         */
        public onSetResult(sSetResult): void {
            let deskDetail = this.deskController.getDeskDetail();

            // 修改牌桌状态
            let GameStatus = Protocol.getEnum("common.GameStatus");
            deskDetail.setStatus(GameStatus.SET_ENDING);

            // 记录数据
            deskDetail.addSetResult(sSetResult);

            // 修改下一局庄家
            deskDetail.setBankerId(sSetResult.nextBankerId);

            // 清空报听状态
            this.getDeskController().getGameSetInfo().getPlayerSetInfo().clearBaoTing();
            
            // 显示本局比赛结果
            let setResultDialog = this.deskController.createSetResultDialog(sSetResult);
            
            if(!this.getDeskController().getOperationHandler().isHuEffect())
                setResultDialog.show();
        }

        /**
         * 整场结束返回牌局结算结果，SGameResult
         */
        public onGameResult(sGameResult): void {
            console.log("mahjong.play.MessageListener.onGameResult");
            let deskDetail = this.deskController.getDeskDetail();

            // 修改牌桌状态
            let GameStatus = Protocol.getEnum("common.GameStatus");
            deskDetail.setStatus(GameStatus.ENDING);

            // 记录数据
            deskDetail.setGameResult(sGameResult);

            // 创建整场比赛结果对话框，关闭最后一局结果后显示出来
            this.deskController.createGameResultDialog(sGameResult);//.show();
        }

        /**
         * 返回玩家准备，SReady
         */
        public onReady(sReady): void {
            console.log("mahjong.play.MessageListener.onReady", sReady.uid);
            this.deskController.getDeskDetail().setPrepared(sReady.uid);
            this.getDeskView().getPlayerReadyView().showSingle(sReady.uid);
        }

        /**
         * 返回玩家下注，SBet
         */
        public onBet(sBet): void {
            console.log("mahjong.play.MessageListener.onBet", JSON.stringify(sBet));
            this.deskController.getDeskDetail().setPrepared(sBet.uid);
            this.deskController.getDeskDetail().setBet(sBet.uid, sBet.bet);
            
            this.getDeskView().getPlayerReadyView().showSingle(sBet.uid);
            this.getDeskView().getPlayerBasicView().showSingle(sBet.uid);
            
        }

        public toString() {
            return "mahjong.play.MessageListener";
        }

    }
}
