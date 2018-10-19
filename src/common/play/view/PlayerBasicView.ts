module common.play.view {

    import Handler = Laya.Handler;

    /*
     *  玩家基本信息显示
     */
    export abstract class PlayerBasicView extends common.view.ComponentView {

        protected deskController: common.play.controller.DeskController;
        private basicInfoUIs = {};

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        // 返回指定玩家的基本信息UI对象
        protected getUI(uid): ui.mahjong.PlayerBasicInfoUI {
            let basicInfoUI: ui.mahjong.PlayerBasicInfoUI = this.basicInfoUIs[uid];
            if(!basicInfoUI) {
                basicInfoUI = new ui.mahjong.PlayerBasicInfoUI();
                this.basicInfoUIs[uid] = basicInfoUI;
            }
            return basicInfoUI;
        }

        public showAll() {
            console.log("PlayerBasicView.showAll");
            //let players = common.play.model.PlayerInfo.getAll();
            let players = this.deskController.getDeskDetail().getAllPlayers();
            for(let key in players) {
                this.show(players[key]);
            }
        }

        public show(player) {
            //预加载图集资源
            // Laya.loader.load([
            //     "res/atlas/player.atlas"
            // ], Handler.create(this, () => {
            //     this.showSingle(player);
            // }));
            this.showSingle(player);
        }

        protected abstract getAttrs(playerInfo);

        // 显示指定坐标的一名玩家基本信息
        public showSingle(player): void {
            let user = player.user;
            // 玩家基本信息显示
            let basicInfoUI = this.getUI(user.uid);

            // 昵称
            let labelName = basicInfoUI.getChildByName("label_player_name") as laya.ui.Label;
            labelName.changeText(user.nkn);

            // 分数
            // let total = 0;
            // basicInfo.points.forEach(point => total += point);
            let labelPoint = basicInfoUI.getChildByName("label_player_score") as laya.ui.Label;
            labelPoint.changeText(player.total.toString());

            // 隐藏角标
            let jiaoBiao = basicInfoUI.getChildByName("img_player_jiao") as laya.display.Sprite;
            jiaoBiao.visible = false;

            // 显示
            this.showComponent(basicInfoUI, this.getAttrs(player));
        }

        // 删除一名玩家基本信息
        public removeSingle(uid): void {
            console.log("common.view.PlayerBasicView.removeSingle", uid);
            let basicInfoUI: ui.mahjong.PlayerBasicInfoUI = this.basicInfoUIs[uid];
            if(basicInfoUI) {
                console.log("common.view.PlayerBasicView.removeSingle@basicInfoUI found", uid);
                Laya.stage.removeChild(basicInfoUI);
            }
        }

        /**
         * 显示指定庄家
         * @param bankerId
         */
        public showBanker(bankerId) {
            console.log("PlayerBasicView.showBanker@id", bankerId);
            for(let key in this.basicInfoUIs) {
                console.log("PlayerBasicView.showBanker@processing", key);
                let basicInfoUI = this.basicInfoUIs[key];
                let jiaoBiao = basicInfoUI.getChildByName("img_player_jiao") as laya.display.Sprite;
                jiaoBiao.visible = (bankerId == parseInt(key))?true:false;
            }
        }

    }
}