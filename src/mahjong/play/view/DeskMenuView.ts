module mahjong.play.view {

    /*
     *  麻将牌桌菜单按钮显示
     */
    export class DeskMenuView extends common.play.view.DeskMenuView {

        constructor(deskController) {
            super(deskController);
        }

        public getSettingAttrs() {
            return {
                right: 10,
                top: 10,
                scaleX: 0.7,
                scaleY: 0.7
            }
        }

        public getExitAttrs() {
            return {
                right: 10,
                bottom: 10,
                scaleX: 0.47,
                scaleY: 0.47
            }
        }

        public getMessageAttrs() {
            return {
                right: 10,
                bottom: 220,
                scaleX: 0.9,
                scaleY: 0.9
            }
        }

        public getVoiceAttrs() {
            return {
                right: 15,
                bottom: 150
            }
        }

    }
}