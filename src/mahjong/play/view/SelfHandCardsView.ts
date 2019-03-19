module mahjong.play.view {
    import Handler = Laya.Handler;
    import Image = Laya.Image;
    import View = Laya.View;

    /**
     *  麻将玩家手牌显示
     */
    export class SelfHandCardsView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        protected playerHandCardsView: mahjong.play.view.PlayerHandCardsView;
        protected cardViews = {};

        constructor(deskController, playerHandCardsView) {
            super();
            this.deskController = deskController;
            this.playerHandCardsView = playerHandCardsView;
        }

        public static INDEX_MO = 100;

        private static SELF = {
            centerX: 0,
            bottom: 10,
            width: 916,
            height: 94
        };

        public getAttrs() {
            return SelfHandCardsView.SELF;
        }

        /**
         * 显示自己的手牌
         */
        public show(): void {
            let pos = mahjong.play.Position.SELF;
            let handcardUI = this.playerHandCardsView.getUI(Login.getUid(), pos) as View;

            this.playerHandCardsView.clear(handcardUI);

            let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            // 刚摸的牌
            let moCard = playerSetInfo.getSelfHandcards().getMoCard();
            if(moCard && moCard > 0) {
                this.showSelfMo(handcardUI, moCard);
            }

            // 遍历并显示每张手牌
            playerSetInfo.getSelfHandcards().getHandcards().forEach((handcard, index) => {
                this.addSelfCard(handcardUI, index, handcard);
            });

            // 显示
            this.showComponent(handcardUI, SelfHandCardsView.SELF);
        }

        /**
         * 显示自己的摸牌
         */
        public showSelfMo(handcardUI: View, moCard): void {
            let GlobalSetting = common.data.GlobalSetting;
            handcardUI.removeChildByName("mo");
            let moCardView = SingleCardFactory.createSelfHand(GlobalSetting.get("mahjongTheme"), moCard);
            moCardView.right = 0;
            moCardView.name = "mo";
            handcardUI.addChild(moCardView);

            moCardView["cardIndex"] = SelfHandCardsView.INDEX_MO;
            moCardView.on(Laya.Event.CLICK, this, this.clickHandler);
            this.cardViews[SelfHandCardsView.INDEX_MO] = moCardView;

            console.log("mahjong.play.view.SelfHandCardsView.showSelfMo@card", moCard);
        }

        /**
         * 增加一张自己的手牌
         */
        public addSelfCard(handcardUI: View, index, card): void {
            let GlobalSetting = common.data.GlobalSetting;
            let handcards = handcardUI.getChildByName("handcards") as View;
            let cardView = SingleCardFactory.createSelfHand(GlobalSetting.get("mahjongTheme"), card);
            cardView.right = 64 * index;
            handcards.addChild(cardView);

            cardView["cardIndex"] = index;
            cardView.on(Laya.Event.CLICK, this, this.clickHandler);

            this.cardViews[index] = cardView;
        }

        /**
         * 点击手牌
         */
         protected clickHandler(e: Event): void {
             let cardIndex = e.target["cardIndex"];
             let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
             let selfHandcards = playerSetInfo.getSelfHandcards();
            
             if(!playerSetInfo.getSelfOperations().hasDaOperation()) {
                console.log("mahjong.view.SelfHandCardsView.clickHandler@DA operation not found");
                return;
             }

             Laya.SoundManager.playSound("res/sounds/play/click_card.mp3");

             let target = selfHandcards.getHandcard(cardIndex);

            // 二次点击，打出
            if(selfHandcards.isSelected(cardIndex)) {
                console.log("mahjong.view.SelfHandCardsView.clickHandler@click2|index, target", cardIndex, target);
                Laya.SoundManager.playSound("res/sounds/play/discard.mp3");
                
                // 发送打牌
                let OperType = Protocol.getEnum("mahjong.OperType");
                MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.COperCard, {
                    operDetail: {
                        operType: OperType.DA,
                        target: target
                    }
                });

                // 清空选中的手牌位置
                selfHandcards.clearSelected();
                return;
            }

            console.log("mahjong.view.SelfHandCardsView.clickHandler@click|index, target", cardIndex, target);

            // 退回已选中的手牌
            let selectedIndex = selfHandcards.getSelected();
            if(selectedIndex >= 0) {
                this.cardViews[selectedIndex]["bottom"] = 0;
            }

            // 突起新选中的手牌
            selfHandcards.setSelected(cardIndex);
            e.target["bottom"] = 20;
         }

    }
}