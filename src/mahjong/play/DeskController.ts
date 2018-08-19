module mahjong.play {
    /*
    麻将牌桌Controller
    */
    export class DeskController {

        private self: common.model.PlayerBasicInfo = new common.model.PlayerBasicInfo();
        private pre: common.model.PlayerBasicInfo;
        private next: common.model.PlayerBasicInfo;
        private opposite: common.model.PlayerBasicInfo;

        constructor() {
        }

        private onLoaded(): void {

        }

    }
}