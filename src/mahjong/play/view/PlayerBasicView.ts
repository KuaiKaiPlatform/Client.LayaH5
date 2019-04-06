module mahjong.play.view {
    import Handler = Laya.Handler;

    /**
     *  玩家基本信息显示
     */
    export class PlayerBasicView extends common.play.view.PlayerBasicView {

        constructor(deskController) {
            super(deskController);
        }

        private static SELF = {
            left: 30,
            bottom: 120
        };

        private static NEXT = {
            right: 10,
            centerY: 0
        };

        private static OPPOSITE = {
            right: 80,
            top: 30
        };

        private static PREVIOUS = {
            left: 10,
            centerY: 0
        };

        public getAttrs(player) {
            let deskController = this.deskController as mahjong.play.controller.DeskController;
            switch(deskController.findPosition(player)) {
            case mahjong.play.Position.SELF:
                return PlayerBasicView.SELF;
            case mahjong.play.Position.NEXT:
                return PlayerBasicView.NEXT;
            case mahjong.play.Position.OPPOSITE:
                return PlayerBasicView.OPPOSITE;
            case mahjong.play.Position.PREVIOUS:
                return PlayerBasicView.PREVIOUS;
            }
        }

        public showSingle(uid): void {
            super.showSingle(uid);
            this.showTing(uid);

            if(this.deskController.getDeskDetail().getSettingBool("xiaZhu"))
                this.showBet(uid);
        }

        /**
         * 显示隐藏听牌角标
         * @param uid
         */
        public showTing(uid) {
            let playerUI = this.getUI(uid);
            if(!playerUI) return;

            let ting = playerUI.getChildByName("ting") as laya.display.Sprite;
            let playerSetInfo = null;
            let gameSetInfo = this.deskController.getGameSetInfo();
            if(gameSetInfo) {
                playerSetInfo = gameSetInfo.getPlayerSetInfo();
            }
            ting.visible = playerSetInfo && playerSetInfo.isBaoTing(uid);

            console.log("mahjong.play.view.PlayerBasicView.showTing", uid, ting.visible);
        }

        public showBet(uid) {
            let playerUI = this.getUI(uid);

            let player = this.deskController.getDeskDetail().getPlayer(uid);
            if(player.prepared) {
                PlayerBasicView.showBet(playerUI, player.bet);
            } else {
                PlayerBasicView.hideBet(playerUI);
            }
        }

        /**
         * 在玩家UI内显示下注数
         * @param playerUI 
         */
        public static showBet(playerUI, bet) {
            let paoZiImg = playerUI.getChildByName("paozi") as Laya.Image;
            paoZiImg.visible = true;
            let paoZi = paoZiImg.getChildByName("label") as Laya.Label;
            paoZi.changeText(bet + "炮");
        }

        /**
         * 在玩家UI内隐藏下注数
         * @param playerUI 
         */
        public static hideBet(playerUI) {
            let paoZiImg = playerUI.getChildByName("paozi") as Laya.Image;
            paoZiImg.visible = false;
        }

    }
}