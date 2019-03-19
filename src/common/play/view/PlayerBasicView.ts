module common.play.view {

    import Handler = Laya.Handler;

    /*
     *  玩家基本信息显示
     */
    export abstract class PlayerBasicView extends common.view.ComponentView {

        protected deskController: common.play.controller.DeskController;
        private playerUIs = {};

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        // 返回指定玩家的基本信息UI对象
        protected getUI(uid): ui.mahjong.PlayerBasicInfoUI {
            let playerUI: ui.mahjong.PlayerBasicInfoUI = this.playerUIs[uid];
            if(!playerUI) {
                playerUI = new ui.mahjong.PlayerBasicInfoUI();
                this.playerUIs[uid] = playerUI;
            }
            return playerUI;
        }

        public showAll() {
            console.log("common.play.view.PlayerBasicView.showAll");

            //预加载图集资源
            Laya.loader.load([
                "res/atlas/player.atlas"
            ], Handler.create(this, () => {
                let players = this.deskController.getDeskDetail().getAllPlayers();
                for(let uid in players) {
                    this.showSingle(uid);
                }
            }));
        }

        public show(player) {
            this.showSingle(player.user.uid);
        }

        protected abstract getAttrs(player);

        // 显示指定玩家基本信息
        public showSingle(uid): void {
            let deskDetail = this.deskController.getDeskDetail();
            let player = deskDetail.getPlayer(uid);
            let playerUI = this.getUI(uid);

            // 昵称
            let labelName = playerUI.getChildByName("nickname") as laya.ui.Label;
            labelName.changeText(player.user.nkn);

            // 分数
            // let total = 0;
            // basicInfo.points.forEach(point => total += point);
            let labelPoint = playerUI.getChildByName("score") as laya.ui.Label;
            labelPoint.changeText(player.total);

            // 庄家
            let zhuang = playerUI.getChildByName("zhuang") as laya.display.Sprite;
            zhuang.visible = deskDetail.isBanker(uid);

            // 显示
            this.showComponent(playerUI, this.getAttrs(player));
        }

        // 删除一名玩家基本信息
        public removeSingle(uid): void {
            console.log("common.play.view.PlayerBasicView.removeSingle", uid);
            let playerUI: ui.mahjong.PlayerBasicInfoUI = this.playerUIs[uid];
            this.removeComponent(playerUI);
            // if(basicInfoUI) {
            //     console.log("common.view.PlayerBasicView.removeSingle@basicInfoUI found", uid);
            //     Laya.stage.removeChild(basicInfoUI);
            // }
        }

        /**
         * 显示指定庄家
         * @param bankerId
         */
        public showBanker(bankerId) {
            let playerUI = this.getUI(bankerId);
            if(!playerUI) return;
            let zhuang = playerUI.getChildByName("zhuang") as laya.display.Sprite;
            zhuang.visible = true;

            console.log("common.play.view.PlayerBasicView.showBanker@id", bankerId);
        }

    }
}