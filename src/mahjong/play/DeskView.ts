module mahjong.play {
    
    /*
     *  麻将牌桌显示
     */
    export class DeskView extends common.play.DeskView {

        constructor(deskController) {
            super(deskController);
        }

        // 设置背景
        public setBg(): void {
            let imgBg: Laya.Sprite = new Laya.Sprite();
            imgBg.loadImage("mahjong/desk/bg.png");
            Laya.stage.addChild(imgBg);
        }

        // 显示所有玩家基本信息
        public showPlayerBasicView(): void {
            // let selfId = this.deskController.getSelfId();
            // let selfBasicInfo = this.deskController.getPlayerBasicInfo().getByUid(selfId);
            // this.playerBasicView.show(selfBasicInfo, mahjong.play.Coordinates.SELF);

            let basicInfos = this.deskController.getPlayerBasicInfo().getAll();
            for(let key in basicInfos) {
                this.showSinglePlayerBasicView(basicInfos[key]);
            }
        }

        // 显示一名玩家基本信息
        public showSinglePlayerBasicView(basicInfo): void {
            switch(this.deskController.findPosition(basicInfo.direction)) {
            case mahjong.play.Position.SELF:
                this.playerBasicView.show(basicInfo, mahjong.play.Coordinates.SELF);
                break;
            case mahjong.play.Position.NEXT:
                this.playerBasicView.show(basicInfo, mahjong.play.Coordinates.NEXT);
                break;
            case mahjong.play.Position.OPPOSITE:
                this.playerBasicView.show(basicInfo, mahjong.play.Coordinates.OPPOSITE);
                break;
            case mahjong.play.Position.PREVIOUS:
                this.playerBasicView.show(basicInfo, mahjong.play.Coordinates.PREVIOUS);
                break;
            }
        }

    }
}