module mahjong.play.view {
    import Handler = Laya.Handler;
    import Image = Laya.Image;
    import view = Laya.View;
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
        protected getUI(uid, pos): View {
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
            let handcardUI = this.getUI(setInfo.uid, pos) as View;

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
        public showSingleCard(handcardUI: View, index): void {
            let handcards = handcardUI.getChildByName("handcards") as View;
            let card = handcards.getChildByName((index+1).toString()) as Image;
            card.visible = true;
        }

        /**
         * 显示玩家摸到的手牌
         */
        public showMoCard(handcardUI: View): void {
            let card = handcardUI.getChildByName("mo") as Image;
            card.visible = true;
        }

        /**
         * 显示自己的手牌
         */
        protected showSelf(setInfo): void {
            let pos = mahjong.play.Position.SELF;
            let handcardUI = this.getUI(setInfo.uid, pos) as View;

            let handcards = setInfo.handcards;
            let hasMo: boolean = PlayerSetInfo.hasMo(setInfo);
            if(hasMo) {
                let card = handcards[handcards.length-1];
                let moCardView = handcardUI.getChildByName("mo") as View;
                let moCard = moCardView.getChildByName("card") as Image;
                moCard.skin = "mahjong/card/self_hand_" + card + ".png";
                moCardView.visible = true;
                console.log("PlayerHandCardsView.showSelf@mo", card);
            }

            // 复制除了摸牌外的手牌，排序
            let showHandcards = hasMo?handcards.slice(0, handcards.length-1):handcards.slice(0);
            showHandcards.sort((a, b) => b-a);

            // 遍历并显示每张打出的牌
            showHandcards.forEach((handcard, index) => {
                this.addSelfCard(handcardUI, index, handcard);
            });

            // 显示
            this.showComponent(handcardUI, this.getAttrs(pos));
        }


        /**
         * 增加一张自己的手牌
         */
        public addSelfCard(handcardUI: View, index, handcard): void {
            let handcards = handcardUI.getChildByName("handcards") as View;
            let cardView = handcards.getChildByName((index+1).toString()) as View;
            let card = cardView.getChildByName("card") as Image;
            card.skin = "mahjong/card/self_hand_" + handcard + ".png";
            cardView.visible = true;
        }

    }
}