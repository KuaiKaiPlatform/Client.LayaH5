module mahjong.play.view {

    import Handler = Laya.Handler;
    import View = Laya.View;
    import Component = Laya.Component;

    /**
     *  麻将玩家打出的牌显示
     */
    export class PlayerDiscardsView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        protected playerUIs = {};

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
            let playerUI = this.playerUIs[uid];
            if(!playerUI) {
                playerUI = new View();
                this.playerUIs[uid] = playerUI;
            }
            return playerUI;
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
                    this.show(key);
                }
            }));
        }

        /**
         * 清空所有玩家打出的牌
         */
        public clearAll() {
            for(let uid in this.playerUIs) {
                let playerUI = this.playerUIs[uid] as View;
                playerUI.destroyChildren();
                this.removeComponent(playerUI);
            }
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
        public show(uid): void {
            let setInfo = this.deskController.getGameSetInfo().getPlayerSetInfo().getByUid(uid);
            if(!this.check(setInfo)) return;
            
            let pos = this.deskController.findPositionByUid(uid);
            let playerUI = this.getUI(uid) as View;

            // 遍历并显示每张打出的牌
            setInfo.discards.forEach((discard, index) => {
                this.addSingleCard(playerUI, pos, index, discard);
            });

            // 显示
            this.showComponent(playerUI, this.getAttrs(pos));
        }

        public removeLast(uid) {
            let playerUI = this.getUI(uid) as View;
            let setInfo = this.deskController.getGameSetInfo().getPlayerSetInfo().getByUid(uid);
            playerUI.removeChildByName(Number(setInfo.discards.length).toString());

            this.removeFocus();
            console.log("mahjong.view.PlayerDiscardsView.removeLast@removing", JSON.stringify(setInfo));
        }

        /**
         * 增加一张指定玩家打出的牌
         */
        public add(uid, discard): void {
            let pos = this.deskController.findPositionByUid(uid);
            let playerUI = this.getUI(uid) as View;
            let setInfo = this.deskController.getGameSetInfo().getPlayerSetInfo().getByUid(uid);
            this.addSingleCard(playerUI, pos, setInfo.discards.length-1, discard);

            this.focus(uid);

            // 显示
            this.showComponent(playerUI, this.getAttrs(pos));
        }

        /**
         * 增加一张指定位置玩家打出的牌
         */
        protected addSingleCard(playerUI: View, pos, index, discard): void {
            let singleCard;
            switch(pos) {
            case mahjong.play.Position.SELF:
                singleCard = this.addSelf(playerUI, index, discard);
                break;
            case mahjong.play.Position.NEXT:
                singleCard = this.addNext(playerUI, index, discard);
                break;
            case mahjong.play.Position.OPPOSITE:
                singleCard = this.addOpposite(playerUI, index, discard);
                break;
            case mahjong.play.Position.PREVIOUS:
                singleCard = this.addPre(playerUI, index, discard);
                break;
            }
            if(singleCard) {
                singleCard.name = index + "";
            }
        }

        /**
         * 增加一张自己打出的牌
         */
        protected addSelf(playerUI: View, index, discard): View {
            let GlobalSetting = common.data.GlobalSetting;
            console.log("PlayerDiscardsView.addSelf@adding", index, discard);
            let singleCard = SingleCardFactory.createLandscapeDiscard(GlobalSetting.get("mahjongTheme"), discard);
            singleCard.x = 39 * (index%9);
            singleCard.y = 45 * Math.floor(index/9);
            playerUI.addChild(singleCard);
            return singleCard;
        }
        
        /**
         * 增加一张对家打出的牌
         */
        protected addOpposite(playerUI: View, index, discard): View {
            let GlobalSetting = common.data.GlobalSetting;
            console.log("PlayerDiscardsView.addOpposite@adding", index, discard);
            let singleCard = SingleCardFactory.createLandscapeDiscard(GlobalSetting.get("mahjongTheme"), discard);
            singleCard.right = 39 * (index%9);
            singleCard.bottom = 45 * Math.floor(index/9);
            singleCard.zOrder = 1000 - index;
            playerUI.addChild(singleCard);
            return singleCard;
        }

        /**
         * 增加一张下家打出的牌
         */
        protected addNext(playerUI: View, index, discard): View {
            let GlobalSetting = common.data.GlobalSetting;
            console.log("PlayerDiscardsView.addNext@adding", index, discard);
            let singleCard = SingleCardFactory.createNextCard(GlobalSetting.get("mahjongTheme"), discard);
            singleCard.left = 45 * Math.floor(index/9);
            singleCard.bottom = 27 * (index%9);
            singleCard.zOrder = 1000-index;
            playerUI.addChild(singleCard);
            return singleCard;
        }

        /**
         * 增加一张上家打出的牌
         */
        protected addPre(playerUI: View, index, discard): View {
            let GlobalSetting = common.data.GlobalSetting;
            console.log("PlayerDiscardsView.addPre@adding", index, discard);
            let singleCard = SingleCardFactory.createPreCard(GlobalSetting.get("mahjongTheme"), discard);
            singleCard.right = 45 * Math.floor(index/9);
            singleCard.top = 27 * (index%9);
            playerUI.addChild(singleCard);
            return singleCard;
        }

        /**
         * focus 在指定玩家打出的最后一张牌上
         */
        public focus(uid) {
            this.removeFocus();

            let focusImg = new Component();
            focusImg.loadImage("mahjong/card/focus.png");
            focusImg.name = "current_focus";
            focusImg.scaleX = 0.5;
            focusImg.scaleY = 0.5;

            let pos = this.deskController.findPositionByUid(uid);
            let index = this.deskController.getGameSetInfo().getPlayerSetInfo().getByUid(uid).discards.length-1;

            switch(pos) {
            case mahjong.play.Position.SELF:
                focusImg.x = 39 * (index%9) + 9;
                focusImg.y = 45 * Math.floor(index/9) - 27;
                break;
            case mahjong.play.Position.NEXT:
                focusImg.left = 45 * Math.floor(index/9) + 12;
                focusImg.bottom = 27 * (index%9) + 38;
                break;
            case mahjong.play.Position.OPPOSITE:
                focusImg.right = 39 * (index%9) + 9;
                focusImg.bottom = 45 * Math.floor(index/9) + 52;
                break;
            case mahjong.play.Position.PREVIOUS:
                focusImg.right = 45 * Math.floor(index/9) + 12;
                focusImg.top = 27 * (index%9) - 26;
                break;
            }

            let playerUI = this.getUI(uid);
            playerUI.addChild(focusImg);
        }

        /**
         * 删除 focus
         */
        public removeFocus() {
            for(let uid in this.playerUIs) {
                this.playerUIs[uid].removeChildByName("current_focus");
            }
        }

    }
}