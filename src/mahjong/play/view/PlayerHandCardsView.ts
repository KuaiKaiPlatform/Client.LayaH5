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
            bottom: 10,
            width: 916,
            height: 94
        };

        private static NEXT = {
            right: 180,
            centerY: 0,
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
            centerY: 0,
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
            if(PlayerBasicInfo.isSelf(setInfo.uid)) {
                //this.showSelf(setInfo);
                return;
            }

            let pos = this.deskController.findPosition(setInfo.uid);
            let handcardUI = this.getUI(setInfo.uid, pos) as View;

            let hasMo: boolean = PlayerSetInfo.hasMo(setInfo);
            let handCardNum = hasMo?setInfo.handCardNum-1:setInfo.handCardNum;
            // 遍历并显示每张打出的牌
            for(let i=0; i<handCardNum; i++) {
                this.addSingleCard(handcardUI, i, pos);
            }

            if(hasMo) {
                this.addMoCard(handcardUI, pos);
            }

            // 显示
            this.showComponent(handcardUI, this.getAttrs(pos));
        }

        /**
         * 显示一张指定位置玩家手牌
         */
        public addSingleCard(handcardUI: View, index, pos): void {
            let handcards = handcardUI.getChildByName("handcards") as View;
            let singleCard: Image;
            switch(pos) {
            case mahjong.play.Position.SELF:
                //singleCard = SingleCardFactory.create;
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
         * 显示玩家摸到的手牌
         */
        public addMoCard(handcardUI: View, pos): void {
            let moCard: Image;
            switch(pos) {
            case mahjong.play.Position.SELF:
                //singleCard = SingleCardFactory.create;
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