module mahjong.play.view {
    import Handler = Laya.Handler;
    import Image = Laya.Image;
    import View = Laya.View;

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
            bottom: 10,
            width: 916,
            height: 94
        };

        private static NEXT = {
            right: 180,
            centerY: -50,
            width: 24,
            height: 371
        };

        private static OPPOSITE = {
            centerX: 0,
            top: 10,
            width: 575,
            height: 55
        };

        private static PREVIOUS = {
            left: 180,
            centerY: 50,
            width: 24,
            height: 371
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
            let handCardUI = this.handCardUIs[uid.toString()] as View;
            if(!handCardUI) {
                handCardUI = new View();
                let handcards = new View();
                handcards.name = "handcards";
                handCardUI.addChild(handcards);

                switch(pos) {
                case mahjong.play.Position.SELF:
                    handcards.left = 0;
                    handcards.width = 832;
                    handcards.height = 94;
                    break;
                case mahjong.play.Position.NEXT:
                    handcards.bottom = 0;
                    handcards.width = 24;
                    handcards.height = 323;
                    break;
                case mahjong.play.Position.OPPOSITE:
                    handcards.right = 0;
                    handcards.width = 520;
                    handcards.height = 55;
                    break;
                case mahjong.play.Position.PREVIOUS:
                    handcards.top = 0;
                    handcards.width = 24;
                    handcards.height = 323;
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
            if(Login.isSelf(setInfo.uid)) {
                this.showSelf(setInfo);
                return;
            }

            let pos = this.deskController.findPosition(setInfo.uid);
            let handcardUI = this.getUI(setInfo.uid, pos) as View;

            let hasMo: boolean = mahjong.play.model.PlayerSetInfo.hasMo(setInfo);
            let handCardNum = hasMo?setInfo.handCardNum-1:setInfo.handCardNum;
            // 遍历并显示每张打出的牌
            for(let i=0; i<handCardNum; i++) {
                this.addSingleCard(handcardUI, i, pos);
            }

            if(hasMo) {
                this.showMoCard(handcardUI, pos);
            }

            // 显示
            this.showComponent(handcardUI, this.getAttrs(pos));
        }

        /**
         * 显示一张其他玩家的手牌
         */
        public addSingleCard(handcardUI: View, index, pos): void {
            let GlobalSetting = common.model.GlobalSetting;
            let handcards = handcardUI.getChildByName("handcards") as View;
            let singleCard: Image;

            switch(pos) {
            case mahjong.play.Position.SELF:
                break;
            case mahjong.play.Position.NEXT:
                singleCard = SingleCardFactory.createNextHand(GlobalSetting.THEME_MAHJONG);
                singleCard.top = 23 * index;
                break;
            case mahjong.play.Position.OPPOSITE:
                singleCard = SingleCardFactory.createOppositeHand(GlobalSetting.THEME_MAHJONG);
                singleCard.left = 40 * index;
                break;
            case mahjong.play.Position.PREVIOUS:
                singleCard = SingleCardFactory.createPreHand(GlobalSetting.THEME_MAHJONG);
                singleCard.bottom = 23 * index;
                singleCard.zOrder = 1000 - index;
                break;
            }
            handcards.addChild(singleCard);
        }

        /**
         * 显示其他玩家摸到的手牌
         */
        public showMoCard(handcardUI: View, pos): void {
            let GlobalSetting = common.model.GlobalSetting;
            let moCard = handcardUI.getChildByName("mo") as Image;
            if(moCard) {
                moCard.visible = true;
                return;
            }
            
            switch(pos) {
            case mahjong.play.Position.SELF:
                break;
            case mahjong.play.Position.NEXT:
                moCard = SingleCardFactory.createNextHand(GlobalSetting.THEME_MAHJONG);
                moCard.top = 0;
                break;
            case mahjong.play.Position.OPPOSITE:
                moCard = SingleCardFactory.createOppositeHand(GlobalSetting.THEME_MAHJONG);
                moCard.left = 0;
                break;
            case mahjong.play.Position.PREVIOUS:
                moCard = SingleCardFactory.createPreHand(GlobalSetting.THEME_MAHJONG);
                moCard.bottom = 0;
                break;
            }
            moCard.name = "mo";
            handcardUI.addChild(moCard);
        }

        /**
         * 显示自己的手牌
         */
        protected showSelf(setInfo): void {
            let pos = mahjong.play.Position.SELF;
            let handcardUI = this.getUI(setInfo.uid, pos) as View;

            let handcards = setInfo.handcards;
            let hasMo: boolean = mahjong.play.model.PlayerSetInfo.hasMo(setInfo);
            if(hasMo) {
                this.showSelfMo(handcardUI, handcards[handcards.length-1]);
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
         * 显示自己的摸牌
         */
        protected showSelfMo(handcardUI: View, moCard): void {
            let GlobalSetting = common.model.GlobalSetting;
            handcardUI.removeChildByName("mo");
            let moCardView = SingleCardFactory.createSelfHand(GlobalSetting.THEME_MAHJONG, moCard);
            moCardView.right = 0;
            moCardView.name = "mo";
            handcardUI.addChild(moCardView);
            console.log("PlayerHandCardsView.showSelfMo@card", moCard);
        }

        /**
         * 增加一张自己的手牌
         */
        public addSelfCard(handcardUI: View, index, card): void {
            let GlobalSetting = common.model.GlobalSetting;
            let handcards = handcardUI.getChildByName("handcards") as View;
            let cardView = SingleCardFactory.createSelfHand(GlobalSetting.THEME_MAHJONG, card);
            cardView.right = 64 * index;
            handcards.addChild(cardView);
        }

    }
}