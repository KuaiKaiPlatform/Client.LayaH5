module mahjong.play.controller {

    // 麻将牌桌控制器
    export class DeskController extends common.play.controller.DeskController {
        
        // 根据玩法找到牌桌显示类（暂未使用）
        private rule2DeskView = {};

        private operationHandler: OperationHandler;

        public static instance: mahjong.play.controller.DeskController;

        public static init() {
            this.instance = new DeskController();
        }

        constructor() {
            super();
            this.deskView = new mahjong.play.view.DeskView(this);
            this.messageListener = new mahjong.play.MessageListener(this);
            this.operationHandler = new OperationHandler(this);
        }

        public getDeskView(): mahjong.play.view.DeskView {
            return this.deskView as mahjong.play.view.DeskView;
        }

        public getOperationHandler(): OperationHandler {
            return this.operationHandler;
        }

        /**
         * 找到指定玩家相对位置：mahjong.play.Position
         */
        public findPosition(player): number {
            let selfPlayer = this.deskDetail.getPlayer(Login.getUid());
            let pos = player.seat - selfPlayer.seat;
            return pos < 0?pos+4:pos;
        }

        /**
         * 找到指定玩家相对位置：mahjong.play.Position
         */
        public findPositionByUid(uid): number {
            return this.findPosition(this.deskDetail.getPlayer(uid));
        }

        /**
         * 初始化牌局数据
         */
        public createGameSetInfo(setInit) {
            this.gameSetInfo = new mahjong.play.model.GameSetInfo(setInit);
        }

        public getGameSetInfo() {
            return this.gameSetInfo as mahjong.play.model.GameSetInfo;
        }

        /**
         * 新建牌局结果对话框
         */
        public createSetResultDialog(setResult) {
            this.setResultDialog = new mahjong.play.view.SetResultDialog(this, setResult);
            return this.setResultDialog;
        }

        /**
         * 返回牌局结果对话框
         */
        public getSetResultDialog() {
            return this.setResultDialog;
        }

        public clearSetResultDialog() {
            this.setResultDialog = null;
        }

        /**
         * 新建整场比赛结果对话框
         */
        public createGameResultDialog(gameResult) {
            this.gameResultDialog = mahjong.play.view.ResultDialogFactory.createGameResultDialog(this.deskDetail.getRule(), this, gameResult);
            return this.gameResultDialog;
        }

        /**
         * 返回整场比赛结果对话框
         */
        public getGameResultDialog() {
            return this.gameResultDialog;
        }

        /**
         * 新建指定牌值的玩家手牌
         */
        public createSelfHandcard(card) {
            let params = {
                card: card
            };
            if(card == this.getGameSetInfo().getAlmighty()) {
                params["jiaoRightTopSkin"] = mahjong.data.DeskInfo.getAlmightyJiaoImage(this.getDeskDetail());
            }

            return mahjong.play.view.SingleCardFactory.createSelfHand(params);
        }

        /**
         * 新建指定牌值的竖向牌（打牌或听牌）
         */
        public createLandscapeCard(card) {
            let params = {
                card: card
            };
            if(card == this.getGameSetInfo().getAlmighty()) {
                params["jiaoRightTopSkin"] = mahjong.data.DeskInfo.getAlmightyJiaoImage(this.getDeskDetail());
            }

            return mahjong.play.view.SingleCardFactory.createLandscapeCard(params);
        }

    }

}