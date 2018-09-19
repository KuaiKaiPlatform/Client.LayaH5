module mahjong.play.view {
    import Handler = Laya.Handler;
    import Image = Laya.Image;

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
            if(PlayerBasicInfo.isSelf(setInfo.uid)) return;

            let pos = this.deskController.findPosition(setInfo.uid);
            let handcardUI = this.getUI(setInfo.uid, pos) as laya.ui.View;

            // 遍历并显示每张打出的牌
            for(let i=0; i<setInfo.handCardNum; i++) {
                this.addSingleCard(handcardUI, pos, i);
            }

            // 显示
            this.showComponent(handcardUI, this.getAttrs(pos));
        }

        /**
         * 增加一张指定位置玩家手牌
         */
        public addSingleCard(handcardUI: laya.ui.View, pos, index): void {
            let handcards = handcardUI.getChildByName("handcards") as laya.ui.View;
            let card = handcards.getChildByName((index+1).toString()) as Image;
            card.visible = true;
            // switch(pos) {
            // case mahjong.play.Position.SELF:
            //     this.addSelf(handcardUI, index);
            //     break;
            // case mahjong.play.Position.NEXT:
            //     this.addNext(handcardUI, index);
            //     break;
            // case mahjong.play.Position.OPPOSITE:
            //     this.addOpposite(handcardUI, index);
            //     break;
            // case mahjong.play.Position.PREVIOUS:
            //     this.addPre(handcardUI, index);
            //     break;
            // }
        }

        /**
         * 增加一张自己手牌
         */
        protected addSelf(handcardUI: laya.ui.View, index): void {
            console.log("PlayerHandCardsView.addSelf@adding", index);
            let singleCard = SingleCardFactory.createOppositeHand(GlobalSetting.THEME_MAHJONG);
            singleCard.x = 39 * (index%9);
            singleCard.y = 45 * Math.floor(index/9);
            handcardUI.addChild(singleCard);
        }
        
        /**
         * 增加一张对家手牌
         */
        protected addOpposite(handcardUI: laya.ui.View, index): void {
            console.log("PlayerHandCardsView.addOpposite@adding", index);
            let singleCard = SingleCardFactory.createOppositeHand(GlobalSetting.THEME_MAHJONG);
            singleCard.right = 39 * (index%9);
            singleCard.bottom = 45 * Math.floor(index/9);
            singleCard.zOrder = 1000 - index;
            handcardUI.addChild(singleCard);
        }

        /**
         * 增加一张下家手牌
         */
        protected addNext(handcardUI: laya.ui.View, index): void {
            console.log("PlayerHandCardsView.addNext@adding", index);
            let singleCard = SingleCardFactory.createNextHand(GlobalSetting.THEME_MAHJONG);
            singleCard.left = 45 * Math.floor(index/9);
            singleCard.bottom = 27 * (index%9);
            singleCard.zOrder = 1000-index;
            handcardUI.addChild(singleCard);
        }

        /**
         * 增加一张上家手牌
         */
        protected addPre(handcardUI: laya.ui.View, index): void {
            console.log("PlayerHandCardsView.addPre@adding", index);
            let singleCard = SingleCardFactory.createPreHand(GlobalSetting.THEME_MAHJONG);
            singleCard.right = 45 * Math.floor(index/9);
            singleCard.top = 27 * (index%9);
            handcardUI.addChild(singleCard);
        }

    }
}