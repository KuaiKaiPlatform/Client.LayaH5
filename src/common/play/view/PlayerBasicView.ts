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
        protected getUI(uid: string): ui.mahjong.PlayerBasicInfoUI {
            let basicInfoUI: ui.mahjong.PlayerBasicInfoUI = this.basicInfoUIs[uid];
            if(!basicInfoUI) {
                basicInfoUI = new ui.mahjong.PlayerBasicInfoUI();
                this.basicInfoUIs[uid] = basicInfoUI;
            }
            return basicInfoUI;
        }

        public showAll() {
            let basicInfos = this.deskController.getPlayerBasicInfo().getAll();
            for(let key in basicInfos) {
                let basicInfo = basicInfos[key];
                this.show(basicInfo);
            }
        }

        public show(basicInfo) {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/player.atlas"
            ], Handler.create(this, () => {
                this.showSingle(basicInfo);
            }));
        }

        protected abstract getAttrs(basicInfo);

        // 显示指定坐标的一名玩家基本信息
        public showSingle(basicInfo): void {
            // 玩家基本信息显示
            let basicInfoUI = this.getUI(basicInfo.uid.toString());

            // 昵称
            let labelName = basicInfoUI.getChildByName("lable_player_name") as laya.ui.Label;
            labelName.changeText(basicInfo.nkn);

            // 分数
            let total = 0;
            basicInfo.points.forEach(point => total += point);
            let labelPoint = basicInfoUI.getChildByName("lable_player_score") as laya.ui.Label;
            labelPoint.changeText(total.toString());

            // 隐藏角标
            // let jiaoBiao = basicInfoUI.getChildByName("img_player_jiao") as laya.display.Sprite;
            // jiaoBiao.visible = false;

            // 显示
            this.showComponent(basicInfoUI, this.getAttrs(basicInfo));
        }

        // 删除一名玩家基本信息
        public removeSingle(uid): void {
            console.log("common.view.PlayerBasicView.removeSingle", uid);
            let basicInfoUI: ui.mahjong.PlayerBasicInfoUI = this.basicInfoUIs[uid.toString()];
            if(basicInfoUI) {
                console.log("common.view.PlayerBasicView.removeSingle@basicInfoUI found", uid);
                Laya.stage.removeChild(basicInfoUI);
            }
        }

    }
}