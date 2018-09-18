module mahjong.play.view {
    import Handler = Laya.Handler;

    /**
     *  麻将玩家手牌显示
     */
    export class PlayerHandCardsView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        private handCardUIs = {};

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        private static SELF = {
            centerX: 0,
            bottom: 10
        };

        private static NEXT = {
            right: 180,
            centerY: 0
        };

        private static OPPOSITE = {
            centerX: 0,
            top: 10
        };

        private static PREVIOUS = {
            left: 180,
            centerY: 0
        };

        public getAttrs(setInfo) {
            switch(this.deskController.findPosition(setInfo.uid)) {
            case mahjong.play.Position.SELF:
                return PlayerHandCardsView.SELF;
            case mahjong.play.Position.NEXT:
                return PlayerHandCardsView.NEXT;
            case mahjong.play.Position.OPPOSITE:
                return PlayerHandCardsView.OPPOSITE;
            case mahjong.play.Position.PREVIOUS:
                return PlayerHandCardsView.PREVIOUS;
            }
        }

        /**
         * 返回指定玩家的手牌UI对象
         */
        protected getUI(uid): laya.ui.View {
            let handCardUI = this.handCardUIs[uid.toString()];
            if(!handCardUI) {
                switch(this.deskController.findPosition(uid)) {
                case mahjong.play.Position.SELF:
                    handCardUI = new ui.mahjong.HandCardAndMoSelfUI();
                    break;
                case mahjong.play.Position.NEXT:
                    handCardUI = new ui.mahjong.HandCardAndMoNextUI();
                    break;
                case mahjong.play.Position.OPPOSITE:
                    handCardUI = new ui.mahjong.HandCardAndMoOppostieUI();
                    break;
                case mahjong.play.Position.PREVIOUS:
                    handCardUI = new ui.mahjong.HandCardAndMoPreUI();
                    break;
                }
                this.handCardUIs[uid.toString()] = handCardUI;
            }
            return handCardUI;
        }

        /**
         * 显示所有玩家手牌
         */
        public showAll() {
            let gameSetInfo = this.deskController.getGameSetInfo() as mahjong.play.model.GameSetInfo;
            let setInfos = gameSetInfo.getPlayerSetInfo().getAll();
            for(let key in setInfos) {
                let setInfo = setInfos[key];
                this.show(setInfo);
            }
        }

        /**
         * 显示指定玩家手牌
         */
        public show(setInfo) {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/card.atlas"
            ], Handler.create(this, () => {
                this.showSingle(setInfo);
            }));
        }

        /**
         * 显示一名玩家手牌
         */
        public showSingle(setInfo): void {
            // 玩家手牌显示
            let handCardUI = this.getUI(setInfo.uid);

            // 昵称
            //let labelName = handCardUI.getChildByName("lable_player_name") as laya.ui.Label;
            //labelName.changeText(basicInfo.nkn);

            //if(this.deskController.findPosition(setInfo.uid) == mahjong.play.Position.SELF) return;

            // 显示
            this.showComponent(handCardUI, this.getAttrs(setInfo));
        }

    }
}