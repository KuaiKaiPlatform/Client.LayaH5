module common.view {
    import Handler = Laya.Handler;

    /*
     *  玩家基本信息显示
     */
    export class PlayerBasicView {

        private basicInfoUIs = {};

        // 返回指定玩家的基本信息UI对象
        private getUI(basicInfo): ui.mahjong.PlayerBasicInfoUI {
            let basicInfoUI: ui.mahjong.PlayerBasicInfoUI = this.basicInfoUIs[basicInfo.uid.toString()];
            if(!basicInfoUI) {
                basicInfoUI = new ui.mahjong.PlayerBasicInfoUI();
                this.basicInfoUIs[basicInfo.uid.toString()] = basicInfoUI;
            }
            return basicInfoUI;
        }

        public show(basicInfo, coordinate) {
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/player.atlas"
            ], Handler.create(this, () => {
                this.showSingle(basicInfo, coordinate);
            }));
        }

        // 显示指定坐标的一名玩家基本信息
        public showSingle(basicInfo, coordinate): void {
            // 玩家基本信息显示
            let basicInfoUI = this.getUI(basicInfo);

            // 昵称
            let labelName = <laya.ui.Label>basicInfoUI.getChildByName("lable_player_name");
            labelName.changeText(basicInfo.nkn);

            // 分数
            let total = 0;
            basicInfo.points.forEach(point => total += point);
            let labelPoint = <laya.ui.Label>basicInfoUI.getChildByName("lable_player_score");
            labelPoint.changeText(total.toString());

            // 设置坐标
            if(coordinate) {
                if(coordinate.left) basicInfoUI.left = coordinate.left;
                if(coordinate.right) basicInfoUI.right = coordinate.right;
                if(coordinate.top) basicInfoUI.top = coordinate.top;
                if(coordinate.bottom) basicInfoUI.bottom = coordinate.bottom;
            }

            //添加到stage
            Laya.stage.addChild(basicInfoUI);
        }

    }
}