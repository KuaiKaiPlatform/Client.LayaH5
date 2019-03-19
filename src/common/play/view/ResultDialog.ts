module common.play.view {

    import Dialog = Laya.Dialog;

    /**
     * 牌局结果显示
     */
    export abstract class ResultDialog {

        protected deskController: common.play.controller.DeskController;
        protected result;
        protected dialog: Dialog;


        constructor(deskController, result) {
            this.deskController = deskController;
            this.result = result;
        }

        public show() {
            console.log("common.play.view.ResultDialog.show");
            if(this.dialog) {
                this.dialog.popup();
            }
        }

    }
}