module mahjong.play.view {
    import Handler = Laya.Handler;
    import Event = Laya.Event;

    /**
     *  玩家准备状态显示
     */
    export class PlayerReadyView extends common.play.view.PlayerReadyView {

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

        public getAttrs(basicInfo) {
            let deskController = this.deskController as mahjong.play.controller.DeskController;
            switch(deskController.findPositionByDirection(basicInfo.direction)) {
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
         * 触发准备
         */
        public onPrepare(e: Event): void {
            super.onPrepare(e);

            // 模拟：2秒后收到开局消息
            setTimeout(() => {
                this.deskController.getMessageListener().onSetInit({
                    userInfos: [{
                        uid: 100860,
                        bet: -1,
                        handCardNum: 10,
                        discards: [15, 21, 47, 19, 33, 23, 46, 45, 13, 35, 23, 34],
                        cardGroups: []
                    }, {
                        uid: 100861,
                        bet: -1,
                        handCardNum: 8,
                        discards: [39, 41, 25, 36, 47, 17, 11, 42, 13, 46, 19, 33, 23],
                        cardGroups: []
                    }, {
                        uid: 100862,
                        bet: -1,
                        handCardNum: 13,
                        discards: [11, 28, 25, 22, 39, 42, 46, 24, 47, 41, 21, 23, 32, 42],
                        cardGroups: []
                    }, {
                        uid: 100863,
                        bet: -1,
                        handCardNum: 11,
                        discards: [43, 17, 35, 36, 21, 29, 44, 12, 11, 16, 24, 28, 39, 31, 42],
                        cardGroups: []
                    }],
                    curSet: 1,
                    remainCards: 84,
                    bankerid: 100862,
                    stage: 0
                });
            }, 2000);
        }

    }
}