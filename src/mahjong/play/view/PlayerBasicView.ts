module mahjong.play {
    import Handler = Laya.Handler;

    /*
     *  玩家基本信息显示
     */
    export class PlayerBasicView extends common.view.PlayerBasicView {

        constructor(deskController) {
            super(deskController);
        }

        private static SELF = {
            left: 40,
            bottom: 120
        };

        private static NEXT = {
            right: 10,
            top: 300
        };

        private static OPPOSITE = {
            right: 120,
            top: 40
        };

        private static PREVIOUS = {
            left: 10,
            top: 300
        };

        public getCoordinate(basicInfo) {
            switch(this.deskController.findPosition(basicInfo.direction)) {
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