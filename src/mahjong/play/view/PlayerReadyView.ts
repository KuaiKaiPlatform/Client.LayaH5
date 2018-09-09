module mahjong.play.view {
    import Handler = Laya.Handler;

    /*
     *  玩家准备状态显示
     */
    export class PlayerReadyView extends common.play.view.PlayerReadyView {

        constructor(deskController) {
            super(deskController);
        }

        private static SELF = {
            centerX: null,
            centerY: 280,
            scaleX: 0.5,
            scaleY: 0.5
        };

        private static NEXT = {
            centerX: 400,
            centerY: null,
            scaleX: 0.5,
            scaleY: 0.5
        };

        private static OPPOSITE = {
            centerX: null,
            centerY: -280,
            scaleX: 0.5,
            scaleY: 0.5
        };

        private static PREVIOUS = {
            centerX: -400,
            centerY: null,
            scaleX: 0.5,
            scaleY: 0.5
        };

        public getAttrs(basicInfo) {
            switch(this.deskController.findPosition(basicInfo.direction)) {
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

    }
}