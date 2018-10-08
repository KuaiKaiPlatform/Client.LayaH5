module mahjong.play.view {
    import Handler = Laya.Handler;
    import View = Laya.View;

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
            centerY: 140,
            width: 351,
            height: 145
        };

        private static NEXT = {
            centerX: 260,
            centerY: 0,
            width: 135,
            height: 254
        };

        private static OPPOSITE = {
            centerX: 0,
            centerY: -140,
            width: 351,
            height: 145
        };

        private static PREVIOUS = {
            centerX: -260,
            centerY: 0,
            width: 135,
            height: 254
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
        protected getUI(uid): View {
            let discardUI = this.discardUIs[uid];
            if(!discardUI) {
                discardUI = new View();
                this.discardUIs[uid] = discardUI;
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
                    this.show(setInfo);
                }
            }));
        }

        /**
         * 检查指定玩家是否有打出的牌
         */
        protected check(setInfo): boolean {
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
        protected show(setInfo): void {
            if(!this.check(setInfo)) return;
            
            let pos = this.deskController.findPosition(setInfo.uid);
            let discardUI = this.getUI(setInfo.uid) as View;

            // 遍历并显示每张打出的牌
            setInfo.discards.forEach((discard, index) => {
                this.addSingleCard(discardUI, pos, index, discard);
            });

            // 显示
            this.showComponent(discardUI, this.getAttrs(pos));
        }

        /**
         * 增加一张指定玩家打出的牌
         */
        public add(uid, index, discard): void {
            let pos = this.deskController.findPosition(uid);
            let discardUI = this.getUI(uid) as View;
            this.addSingleCard(discardUI, pos, index, discard);
        }

        /**
         * 增加一张指定位置玩家打出的牌
         */
        protected addSingleCard(discardUI: View, pos, index, discard): void {
            switch(pos) {
            case mahjong.play.Position.SELF:
                this.addSelf(discardUI, index, discard);
                break;
            case mahjong.play.Position.NEXT:
                this.addNext(discardUI, index, discard);
                break;
            case mahjong.play.Position.OPPOSITE:
                this.addOpposite(discardUI, index, discard);
                break;
            case mahjong.play.Position.PREVIOUS:
                this.addPre(discardUI, index, discard);
                break;
            }
        }

        /**
         * 增加一张自己打出的牌
         */
        protected addSelf(discardUI: View, index, discard): void {
            let GlobalSetting = common.model.GlobalSetting;
            console.log("PlayerDiscardsView.addSelf@adding", index, discard);
            let singleCard = SingleCardFactory.createLandscapeDiscard(GlobalSetting.THEME_MAHJONG, discard);
            singleCard.x = 39 * (index%9);
            singleCard.y = 45 * Math.floor(index/9);
            discardUI.addChild(singleCard);
        }
        
        /**
         * 增加一张对家打出的牌
         */
        protected addOpposite(discardUI: View, index, discard): void {
            let GlobalSetting = common.model.GlobalSetting;
            console.log("PlayerDiscardsView.addOpposite@adding", index, discard);
            let singleCard = SingleCardFactory.createLandscapeDiscard(GlobalSetting.THEME_MAHJONG, discard);
            singleCard.right = 39 * (index%9);
            singleCard.bottom = 45 * Math.floor(index/9);
            singleCard.zOrder = 1000 - index;
            discardUI.addChild(singleCard);
        }

        /**
         * 增加一张下家打出的牌
         */
        protected addNext(discardUI: View, index, discard): void {
            let GlobalSetting = common.model.GlobalSetting;
            console.log("PlayerDiscardsView.addNext@adding", index, discard);
            let singleCard = SingleCardFactory.createNextCard(GlobalSetting.THEME_MAHJONG, discard);
            singleCard.left = 45 * Math.floor(index/9);
            singleCard.bottom = 27 * (index%9);
            singleCard.zOrder = 1000-index;
            discardUI.addChild(singleCard);
        }

        /**
         * 增加一张上家打出的牌
         */
        protected addPre(discardUI: View, index, discard): void {
            let GlobalSetting = common.model.GlobalSetting;
            console.log("PlayerDiscardsView.addPre@adding", index, discard);
            let singleCard = SingleCardFactory.createPreCard(GlobalSetting.THEME_MAHJONG, discard);
            singleCard.right = 45 * Math.floor(index/9);
            singleCard.top = 27 * (index%9);
            discardUI.addChild(singleCard);
        }

    }
}