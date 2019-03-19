module mahjong.play.view {

    import Handler = Laya.Handler;
    import Event = Laya.Event;

    /**
     *  玩家准备状态显示
     */
    export class PlayerReadyView extends common.play.view.PlayerReadyView {

        protected selfBetView : SelfBetView;

        constructor(deskController) {
            super(deskController);
        }

        private static SELF = {
            centerX: 0,
            centerY: 280,
            scaleX: 0.5,
            scaleY: 0.5
        };

        private static NEXT = {
            centerX: 400,
            centerY: 0,
            scaleX: 0.5,
            scaleY: 0.5
        };

        private static OPPOSITE = {
            centerX: 0,
            centerY: -280,
            scaleX: 0.5,
            scaleY: 0.5
        };

        private static PREVIOUS = {
            centerX: -400,
            centerY: 0,
            scaleX: 0.5,
            scaleY: 0.5
        };

        public getAttrs(player) {
            let deskController = this.deskController as mahjong.play.controller.DeskController;
            switch(deskController.findPosition(player)) {
            case mahjong.play.Position.SELF:
                return PlayerReadyView.SELF;
            case mahjong.play.Position.NEXT:
                return PlayerReadyView.NEXT;
            case mahjong.play.Position.OPPOSITE:
                return PlayerReadyView.OPPOSITE;
            case mahjong.play.Position.PREVIOUS:
                return PlayerReadyView.PREVIOUS;
            }
        }

        /**
         * 显示一名玩家准备状态：若有下注操作，显示自身下注界面
         */
        public showSingle(uid): void {
            let player = this.deskController.getDeskDetail().getPlayer(uid);
            
            let xiaZhu = this.deskController.getDeskDetail().getSettingBool("xiaZhu");
            if(xiaZhu && !player.prepared && Login.isSelf(uid)) { // 陕西麻将下炮子，自由炮时显示选炮子界面
                this.getSelfBetView().show();
                return;
            }

            super.showSingle(uid);
        }

        public getSelfBetView() {
            if(this.selfBetView) return this.selfBetView;
            this.selfBetView = new SelfBetView(this.deskController);
            return this.selfBetView;
        }

    }
}