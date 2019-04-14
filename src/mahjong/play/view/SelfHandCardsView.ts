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
        protected discard2TingCardsViews = {};                 // 打听牌显示
        protected tingCardsView: TingCardsView;                // 当前听牌显示
        protected tingOngoing = false;                         // 正在进行听牌操作（选择一张打听牌打出）

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
            this.cardViews = {};

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

            // 报听状态，所有手牌变灰
            if(playerSetInfo.isBaoTing(Login.getUid())) {
                for(let index in this.cardViews) {
                    let cardView = this.cardViews[index];
                    cardView.getChildByName("grey").visible = true;
                }
            }

            // 显示
            this.showComponent(handcardUI, SelfHandCardsView.SELF);
        }

        /**
         * 显示自己的摸牌
         */
        public showSelfMo(handcardUI: View, moCard): void {
            let GlobalSetting = common.data.GlobalSetting;
            handcardUI.removeChildByName("mo");
            let moCardView = this.deskController.createSelfHandcard(moCard);
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
            let cardView = this.deskController.createSelfHandcard(card);
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
            let target = selfHandcards.getHandcard(cardIndex);

            // 报听状态，不能操作手牌
            if(playerSetInfo.isBaoTing(Login.getUid())) {
                console.log("mahjong.view.SelfHandCardsView.clickHandler@BaoTing");
                return;
            }

            let canOperTing = playerSetInfo.getSelfOperations().hasTingOperation();
            if(!playerSetInfo.getSelfOperations().hasDaOperation() && !canOperTing) {
                // 即无听牌，也无打牌可操作
                console.log("mahjong.view.SelfHandCardsView.clickHandler@DA or TING operation not found");
                return;
            }

            // 有听牌操作
            if(canOperTing) {
                if(!this.tingOngoing) {
                    // 还未点击听
                    console.log("mahjong.play.view.SelfHandCardsView.clickHandler@ting is not ongoing", target);
                    return;
                }

                if(!selfHandcards.isDiscardTing(cardIndex)) {
                    // 不是打听牌
                    console.log("mahjong.play.view.SelfHandCardsView.clickHandler@tingOngoing and not discard ting", target);
                    return;
                }
            }

            Laya.SoundManager.playSound("res/sounds/play/click_card.wav");

            // 二次点击，打出
            if(selfHandcards.isSelected(cardIndex)) {
                console.log("mahjong.view.SelfHandCardsView.clickHandler@click2|index, target", cardIndex, target);
                Laya.SoundManager.playSound("res/sounds/play/discard.wav");
                
                if(this.tingOngoing) {
                    // 发送听牌
                    //let OperType = Protocol.getEnum("mahjong.OperType");
                    MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.COperCard, {
                        operDetail: {
                            operType: Laya.Browser.window.mahjong.OperType.TING,
                            target: target
                        }
                    });
                    this.tingOngoing = false;
                } else {
                    // 发送打牌
                    //let OperType = Protocol.getEnum("mahjong.OperType");
                    MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.COperCard, {
                        operDetail: {
                            operType: Laya.Browser.window.mahjong.OperType.DA,
                            target: target
                        }
                    });
                }

                // 隐藏听牌列表，显示听字，可随时查看听牌列表
                if(this.tingCardsView) {
                    this.tingCardsView.hide();
                    this.tingCardsView.showTing(true);
                }

                // 清空打听列表
                this.clearDiscard2TingCardsViews();

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

            this.refreshTingCardsView(target, false);
        }

        public refreshTingCardsView(target, showTingOnly) {
            // 隐藏当前听牌列表
            if(this.tingCardsView) {
                this.tingCardsView.hide();
            }

            let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            let selfHandcards = playerSetInfo.getSelfHandcards();
            let tingCards = selfHandcards.getTingCards(target);
            if(tingCards) {
                this.tingCardsView = this.getTingCardsView(target, tingCards);
                if(showTingOnly) {
                    this.tingCardsView.showTing(true);
                } else {
                    this.tingCardsView.show();
                }
            } else {
                this.tingCardsView = null;
            }
        }

        public getTingCardsView(discard, tingCards) {
            let tingCardsView = this.discard2TingCardsViews[discard];
            if(tingCardsView) return tingCardsView;
            tingCardsView = new TingCardsView(this.deskController, tingCards);
            this.discard2TingCardsViews[discard] = tingCardsView;
            return tingCardsView;
        }

        public clearDiscard2TingCardsViews() {
            this.discard2TingCardsViews = {};
        }

        /**
         * 点击听后：只可选中打听的牌之后打出，其他牌置灰。
         */
        public onTingClicked() {
            this.tingOngoing = true;
            let selfHandcards = this.deskController.getGameSetInfo().getPlayerSetInfo().getSelfHandcards();
            for(let index in this.cardViews) {
                let cardView = this.cardViews[index];
                cardView.getChildByName("grey").visible = !selfHandcards.isDiscardTing(index);
            }
        }

        public clear() {
            // 隐藏当前听牌列表
            if(this.tingCardsView) {
                this.tingCardsView.hide();
                this.tingCardsView = null;
            }

            this.cardViews = {};
            this.clearDiscard2TingCardsViews();
        }

    }
}