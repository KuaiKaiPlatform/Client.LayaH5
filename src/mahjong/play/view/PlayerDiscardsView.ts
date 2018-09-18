module mahjong.play.view {
    import Handler = Laya.Handler;

    /**
     *  麻将玩家打出的牌显示
     */
    export class PlayerDiscardsView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        private discardUIs = {};

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        private static SELF = {
            centerX: 0,
            centerY: 140
        };

        private static NEXT = {
            centerX: 260,
            centerY: 0
        };

        private static OPPOSITE = {
            centerX: 0,
            centerY: -140
        };

        private static PREVIOUS = {
            centerX: -260,
            centerY: 0
        };

        protected getAttrs(pos) {
            switch(pos) {
            case mahjong.play.Position.SELF:
                return PlayerDiscardsView.SELF;
            case mahjong.play.Position.NEXT:
                return PlayerDiscardsView.NEXT;
            case mahjong.play.Position.OPPOSITE:
                return PlayerDiscardsView.OPPOSITE;
            case mahjong.play.Position.PREVIOUS:
                return PlayerDiscardsView.PREVIOUS;
            }
        }

        /**
         * 返回指定玩家的打出的牌UI对象
         */
        protected getUI(uid, pos): laya.ui.View {
            let discardUI = this.discardUIs[uid.toString()];
            if(!discardUI) {
                discardUI = new laya.ui.View();
                switch(pos) {
                case mahjong.play.Position.SELF:
                    discardUI.width = 351;
                    discardUI.height = 145;
                    break;
                case mahjong.play.Position.NEXT:
                    discardUI.width = 135;
                    discardUI.height = 254;
                    break;
                case mahjong.play.Position.OPPOSITE:
                    discardUI.width = 135;
                    discardUI.height = 254;
                    break;
                case mahjong.play.Position.PREVIOUS:
                    discardUI.width = 351;
                    discardUI.height = 145;
                    break;
                }
                this.discardUIs[uid.toString()] = discardUI;
            }
            return discardUI;
        }

        /**
         * 显示所有玩家打出的牌
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
                    this.show(setInfo, this.deskController.findPosition(setInfo.uid));
                }
            }));
        }


        private check(setInfo): boolean {
            let discards = setInfo.discards;
            if(!discards || discards.length == 0) {
                console.log("PlayerDiscardView.showSelf@discards empty", setInfo.uid);
                return false;
            }
            return true;
        }

        /**
         * 显示一名玩家打出的牌
         */
        public show(setInfo, pos): void {
            if(!this.check(setInfo)) return;
            
            // 遍历并显示每张打出的牌
            let discards = setInfo.discards;
            let discardUI = this.getUI(setInfo.uid, pos) as laya.ui.View;
    
            discards.forEach((discard, index) => {
                switch(pos) {
                case mahjong.play.Position.SELF:
                    this.addSelf(discardUI, index, discard);
                    break;
                case mahjong.play.Position.NEXT:
                    this.addNext(discardUI, index, discard);
                    break;
                case mahjong.play.Position.OPPOSITE:
                    //this.showOpposite(setInfo);
                    break;
                case mahjong.play.Position.PREVIOUS:
                    this.addPre(discardUI, index, discard);
                    break;
                }
            });

            // 显示
            this.showComponent(discardUI, this.getAttrs(pos));

        }

        /**
         * 增加一张自己打出的牌
         */
        public addSelf(discardUI: laya.ui.View, index, discard): void {
            console.log("PlayerDiscardsView.addSelf@adding", index, discard);
            let singleCard = SingleCardFactory.createLandscape(mahjong.play.Theme.GREEN, discard);
            singleCard.x = 39 * index;
            discardUI.addChild(singleCard);
        }

        /**
         * 增加一张下家打出的牌
         */
        public addNext(discardUI: laya.ui.View, index, discard): void {
            console.log("PlayerDiscardsView.addNext@adding", index, discard);
            let singleCard = SingleCardFactory.createNext(mahjong.play.Theme.GREEN, discard);
            //singleCard.bottom = 0;
            singleCard.bottom = 27 * index;
            discardUI.addChild(singleCard);
        }

        /**
         * 增加一张上家打出的牌
         */
        public addPre(discardUI: laya.ui.View, index, discard): void {
            console.log("PlayerDiscardsView.addPre@adding", index, discard);
            let singleCard = SingleCardFactory.createPre(mahjong.play.Theme.GREEN, discard);
            //singleCard.bottom = 0;
            singleCard.top = 27 * index;
            discardUI.addChild(singleCard);
        }

    }
}