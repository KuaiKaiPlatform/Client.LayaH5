module mahjong.play.view {
    import Handler = Laya.Handler;
    import View = Laya.View;

    /**
     *  麻将玩家明牌（吃、碰、杠）显示
     */
    export class PlayerCardGroupsView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        private playerUIs = {};

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        private static SELF = {
            centerX: -140,
            bottom: 10,
            width: 780,
            height: 100
        };

        private static NEXT = {
            right: 180,
            centerY: 60,
            width: 45,
            height: 389
        };

        private static OPPOSITE = {
            centerX: 88,
            top: 10,
            width: 495,
            height: 64
        };

        private static PREVIOUS = {
            left: 180,
            centerY: -60,
            width: 45,
            height: 389
        };

        protected getAttrs(pos) {
            switch(pos) {
            case mahjong.play.Position.SELF:
                return PlayerCardGroupsView.SELF;
            case mahjong.play.Position.NEXT:
                return PlayerCardGroupsView.NEXT;
            case mahjong.play.Position.OPPOSITE:
                return PlayerCardGroupsView.OPPOSITE;
            case mahjong.play.Position.PREVIOUS:
                return PlayerCardGroupsView.PREVIOUS;
            }
        }

        /**
         * 返回指定玩家的明牌UI对象
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
         * 显示所有玩家明牌
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
         * 检查指定玩家是否有明牌
         */
        protected check(setInfo): boolean {
            let cardGroups = setInfo.cardGroups;
            if(!cardGroups || cardGroups.length == 0) {
                console.log("PlayerCardGroupsView.check@card groups empty", setInfo.uid);
                return false;
            }
            return true;
        }

        /**
         * 显示一名玩家明牌
         */
        public show(uid): void {
            let setInfo = this.deskController.getGameSetInfo().getPlayerSetInfo().getByUid(uid);
            if(!this.check(setInfo)) return;
            
            let pos = this.deskController.findPositionByUid(uid);
            let playerUI = this.getUI(uid) as View;

            // 遍历并显示各组明牌
            setInfo.cardGroups.forEach((cardGroup, index) => {
                this.addCardGroup(playerUI, pos, index, cardGroup);
            });

            // 显示
            this.showComponent(playerUI, this.getAttrs(pos));
        }

        /**
         * 增加一组指定玩家明牌
         */
        public add(uid, index, cardGroup): void {
            let pos = this.deskController.findPositionByUid(uid);
            let playerUI = this.getUI(uid) as View;
            this.addCardGroup(playerUI, pos, index, cardGroup);
        }

        /**
         * 增加一组指定位置玩家明牌
         */
        protected addCardGroup(playerUI: View, pos, index, cardGroup): void {
            switch(pos) {
            case mahjong.play.Position.SELF:
                this.addSelf(playerUI, index, cardGroup);
                break;
            case mahjong.play.Position.NEXT:
                this.addNext(playerUI, index, cardGroup);
                break;
            case mahjong.play.Position.OPPOSITE:
                this.addOpposite(playerUI, index, cardGroup);
                break;
            case mahjong.play.Position.PREVIOUS:
                this.addPre(playerUI, index, cardGroup);
                break;
            }
        }

        /**
         * 增加一组自己明牌
         */
        protected addSelf(playerUI: View, index, cardGroup): void {
            let GlobalSetting = common.data.GlobalSetting;
            console.log("PlayerCardGroupsView.addSelf@adding", index, JSON.stringify(cardGroup));
            let groupView = CardGroupFactory.createSelfGroup(cardGroup);
            groupView.left = 200 * index;
            groupView.bottom = 0;
            playerUI.addChild(groupView);
        }
        
        /**
         * 增加一组对家明牌
         */
        protected addOpposite(playerUI: View, index, cardGroup): void {
            let GlobalSetting = common.data.GlobalSetting;
            console.log("PlayerCardGroupsView.addOpposite@adding", index, JSON.stringify(cardGroup));
            let groupView = CardGroupFactory.createOppositeGroup(cardGroup);
            groupView.right = 127 * index;
            groupView.bottom = 0;
            playerUI.addChild(groupView);
        }

        /**
         * 增加一组下家明牌
         */
        protected addNext(playerUI: View, index, cardGroup): void {
            let GlobalSetting = common.data.GlobalSetting;
            console.log("PlayerCardGroupsView.addNext@adding", index, JSON.stringify(cardGroup));
            let groupView = CardGroupFactory.createNextGroup(cardGroup);
            groupView.bottom = 99 * index;
            playerUI.addChild(groupView);
        }

        /**
         * 增加一组上家明牌
         */
        protected addPre(playerUI: View, index, cardGroup): void {
            let GlobalSetting = common.data.GlobalSetting;
            console.log("PlayerCardGroupsView.addPre@adding", index, JSON.stringify(cardGroup));
            let groupView = CardGroupFactory.createPreGroup(cardGroup);
            groupView.top = 99 * index;
            playerUI.addChild(groupView);
        }

        /**
         * 清空所有玩家明牌
         */
        public clearAll() {
            for(let uid in this.playerUIs) {
                let playerUI = this.playerUIs[uid] as View;
                playerUI.destroyChildren();
                this.removeComponent(playerUI);
            }
        }

    }
}