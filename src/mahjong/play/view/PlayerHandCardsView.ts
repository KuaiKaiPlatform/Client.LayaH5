module mahjong.play.view {
    import Handler = Laya.Handler;
    import Image = Laya.Image;
    import PlayerSetInfo = mahjong.play.model.PlayerSetInfo;

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

        public getAttrs(pos) {
            switch(pos) {
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
        protected getUI(uid, pos): laya.ui.View {
            let handCardUI = this.handCardUIs[uid.toString()];
            if(!handCardUI) {
                switch(pos) {
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
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/card.atlas"
            ], Handler.create(this, () => {
                let gameSetInfo = this.deskController.getGameSetInfo() as mahjong.play.model.GameSetInfo;
                let setInfos = gameSetInfo.getPlayerSetInfo().getAll();
                for(let key in setInfos) {
                    let setInfo = setInfos[key];
                    this.show(setInfo);
                }
            }));
        }

        /**
         * 显示指定玩家手牌
         */
        protected show(setInfo) {
            if(PlayerBasicInfo.isSelf(setInfo.uid)) {
                this.showSelf(setInfo);
                return;
            }

            let pos = this.deskController.findPosition(setInfo.uid);
            let handcardUI = this.getUI(setInfo.uid, pos) as laya.ui.View;

            let hasMo: boolean = PlayerSetInfo.hasMo(setInfo);
            let handCardNum = hasMo?setInfo.handCardNum-1:setInfo.handCardNum;
            // 遍历并显示每张打出的牌
            for(let i=0; i<handCardNum; i++) {
                this.showSingleCard(handcardUI, i);
            }

            if(hasMo) {
                this.showMoCard(handcardUI);
            }

            // 显示
            this.showComponent(handcardUI, this.getAttrs(pos));
        }

        /**
         * 显示一张指定位置玩家手牌
         */
        public showSingleCard(handcardUI: laya.ui.View, index): void {
            let handcards = handcardUI.getChildByName("handcards") as laya.ui.View;
            let card = handcards.getChildByName((index+1).toString()) as Image;
            card.visible = true;
        }

        /**
         * 显示玩家摸到的手牌
         */
        public showMoCard(handcardUI: laya.ui.View): void {
            let card = handcardUI.getChildByName("mo") as Image;
            card.visible = true;
        }

        /**
         * 显示自己的手牌
         */
        protected showSelf(setInfo): void {
            let pos = mahjong.play.Position.SELF;
            let handcardUI = this.getUI(setInfo.uid, pos) as laya.ui.View;

            let hasMo: boolean = PlayerSetInfo.hasMo(setInfo);
            if(hasMo) {
                let moCard = handcardUI.getChildByName("mo") as Image;
                moCard.visible = true;
            }

            // 遍历并显示每张打出的牌
            setInfo.handcards.forEach((discard, index) => {
                //this.addSingleCard(handcardUI, pos, index, discard);
            });

            // 显示
            this.showComponent(handcardUI, this.getAttrs(pos));
        }

    }
}