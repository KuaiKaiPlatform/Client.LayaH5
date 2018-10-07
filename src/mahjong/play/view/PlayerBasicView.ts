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

        public getAttrs(playerInfo) {
            let deskController = this.deskController as mahjong.play.controller.DeskController;
            switch(deskController.findPositionByDirection(playerInfo.direction)) {
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

    }
}