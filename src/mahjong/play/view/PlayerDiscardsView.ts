module mahjong.play.view {
    import Handler = Laya.Handler;

    /**
     *  麻将玩家打出的牌显示
     */
    export class PlayerDiscardsView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;

        constructor(deskController) {
            super();
            this.deskController = deskController;
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
                return PlayerDiscardsView.SELF;
            case mahjong.play.Position.NEXT:
                return PlayerDiscardsView.NEXT;
            case mahjong.play.Position.OPPOSITE:
                return PlayerDiscardsView.OPPOSITE;
            case mahjong.play.Position.PREVIOUS:
                return PlayerDiscardsView.PREVIOUS;
            }
        }

        /**
         * 显示所有玩家打出的牌
         */
        public showAll() {
            let basicInfos = PlayerBasicInfo.getAll();
            for(let key in basicInfos) {
                let basicInfo = basicInfos[key];
                //this.show(basicInfo);
            }
        }

    }
}