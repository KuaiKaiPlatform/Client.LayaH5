module mahjong.play.view {
    import Handler = Laya.Handler;
    import Image = Laya.Image;
    import View = Laya.View;

    /**
     *  麻将玩家手牌显示
     */
    export class PlayerHandCardsView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        private playerUIs = {};
        protected selfHandCardsView: SelfHandCardsView;

        constructor(deskController) {
            super();
            this.deskController = deskController;
            this.selfHandCardsView = new SelfHandCardsView(deskController, this);
        }

        public getSelfHandCardsView(): SelfHandCardsView {
            return this.selfHandCardsView;
        }

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
            // case mahjong.play.Position.SELF:
            //     return PlayerHandCardsView.SELF;
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
        public getUI(uid, pos): View {
            let playerUI = this.playerUIs[uid.toString()] as View;
            if(!playerUI) {
                playerUI = new View();
                let handcards = new View();
                handcards.name = "handcards";
                playerUI.addChild(handcards);

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
                this.playerUIs[uid.toString()] = playerUI;
            }
            return playerUI;
        }

        /**
         * 显示所有玩家手牌
         */
        public showAll() {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/card.atlas"
            ], Handler.create(this, () => {
                let setInfos = this.deskController.getGameSetInfo().getPlayerSetInfo().getAll();
                for(let uid in setInfos) {
                    this.show(uid);
                }
            }));
        }

        /**
         * 显示指定玩家ID的手牌
         * @param uid 
         */
        public show(uid) {
            if(Login.isSelf(uid)) {
                this.selfHandCardsView.show();
                return;
            }

            let pos = this.deskController.findPositionByUid(uid);
            let playerUI = this.getUI(uid, pos) as View;
            this.clear(playerUI);

            let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            let setInfo =  playerSetInfo.getByUid(uid);
            let hasMo: boolean = playerSetInfo.hasMo(uid);
            let handCardNum = hasMo?setInfo.handCardNum-1:setInfo.handCardNum;
            // 遍历并显示每张打出的牌
            for(let i=0; i<handCardNum; i++) {
                this.addSingleCard(playerUI, i, pos);
            }

            if(hasMo) {
                this.showMoCard(playerUI, pos);
            }

            // 显示
            this.showComponent(playerUI, this.getAttrs(pos));
        }

        public clear(playerUI) {
            playerUI.removeChildByName("mo");
            let handcards = playerUI.getChildByName("handcards") as View;
            handcards.destroyChildren();
            
            this.removeComponent(playerUI);
        }

        /**
         * 清空所有玩家手牌
         */
        public clearAll() {
            for(let uid in this.playerUIs) {
                this.clear(this.playerUIs[uid]);
            }
            this.selfHandCardsView.clear();
        }

        /**
         * 显示一张其他玩家的手牌
         */
        public addSingleCard(playerUI: View, index, pos): void {
            //let GlobalSetting = common.data.GlobalSetting;
            let handcards = playerUI.getChildByName("handcards") as View;
            let singleCard: Image;

            switch(pos) {
            case mahjong.play.Position.SELF:
                return;
            case mahjong.play.Position.NEXT:
                singleCard = SingleCardFactory.createNextHand();
                singleCard.top = 23 * index;
                break;
            case mahjong.play.Position.OPPOSITE:
                singleCard = SingleCardFactory.createOppositeHand();
                singleCard.left = 40 * index;
                break;
            case mahjong.play.Position.PREVIOUS:
                singleCard = SingleCardFactory.createPreHand();
                singleCard.bottom = 23 * index;
                singleCard.zOrder = 1000 - index;
                break;
            }
            
            singleCard.name = index;
            handcards.addChild(singleCard);
        }

        /**
         * 去掉一张手牌
         */
        // public removeSingleCard(playerUI: View, index) {
        //     let handcards = playerUI.getChildByName("handcards") as View;
        //     handcards.removeChildByName(index);
        // }

        /**
         * 显示其他玩家摸到的手牌
         */
        public showMoCard(playerUI: View, pos): void {
            //let GlobalSetting = common.data.GlobalSetting;
            let moCard = playerUI.getChildByName("mo") as Image;
            if(moCard) {
                moCard.visible = true;
                return;
            }
            
            switch(pos) {
            case mahjong.play.Position.SELF:
                break;
            case mahjong.play.Position.NEXT:
                moCard = SingleCardFactory.createNextHand();
                moCard.top = 0;
                break;
            case mahjong.play.Position.OPPOSITE:
                moCard = SingleCardFactory.createOppositeHand();
                moCard.left = 0;
                break;
            case mahjong.play.Position.PREVIOUS:
                moCard = SingleCardFactory.createPreHand();
                moCard.bottom = 0;
                break;
            }
            moCard.name = "mo";
            playerUI.addChild(moCard);
        }

        /**
         * 去掉指定玩家一张手牌，优先去掉摸牌
         */
        // public removeOne(uid, handCardNum) {
        //     let pos = this.deskController.findPositionByUid(uid);
        //     let playerUI = this.getUI(uid, pos) as View;

        //     let moCard = playerUI.getChildByName("mo") as Image;
        //     if(moCard && moCard.visible) {
        //         moCard.visible = false;
        //         return;
        //     }

        //     this.removeSingleCard(playerUI, handCardNum-1);
        // }

    }
}