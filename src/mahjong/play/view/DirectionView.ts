module mahjong.play.view {
    import Handler = Laya.Handler;
    import Sprite = Laya.Sprite;
    import Component = laya.ui.Component;

    /**
     * 麻将牌桌中心方位显示 ui.mahjong.DeskCenterUI
     */
    export class DirectionView extends common.view.ComponentView {

        protected deskController: mahjong.play.controller.DeskController;
        protected deskCenterUI: ui.mahjong.DeskCenterUI;

        protected static IMG_PATH_DONG     = "mahjong/desk/dir_dong.png";
        protected static IMG_PATH_NAN      = "mahjong/desk/dir_nan.png";
        protected static IMG_PATH_XI       = "mahjong/desk/dir_xi.png";
        protected static IMG_PATH_BEI      = "mahjong/desk/dir_bei.png";

        constructor(deskController) {
            super();
            this.deskController = deskController;
        }

        public showAll(posFocus) {
            console.log("mahjong.play.view.DirectionView.showAll");
            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/desk.atlas"
            ], Handler.create(this, () => {
                this.show(posFocus);
            }));
        }

        public onSetInit(setInit) {
            if(setInit.lastOperDetail && setInit.lastOperDetail.uid) {  // focus 在最近一次操作者上
                this.showAll(this.deskController.findPositionByUid(setInit.lastOperDetail.uid));
            } else {
                this.showAll(-1);
            }
        }

        protected clear() {
            this.removeComponent(this.deskCenterUI);
        }

        protected initDeskCenterUI() {
            if(this.deskCenterUI) return this.deskCenterUI;
            this.deskCenterUI = new ui.mahjong.DeskCenterUI();
            return this.deskCenterUI;
        }

        // 显示方位
        public show(posFocus): void {
            console.log("mahjong.play.view.DirectionView.show@start");
            
            this.initDeskCenterUI();
            this.clear();

            // 显示各玩家方位
            this.showDirections();

            // 显示当前操作者，-1表示无操作者
            this.showCurrentFocusByPos(posFocus);

            this.showComponent(this.deskCenterUI, {
                centerX: 0,
                centerY: 0
            });
        }

        /**
         * 显示当前操作者
         */
        public showCurrentFocus(uid) {
            this.showCurrentFocusByPos(this.deskController.findPositionByUid(uid));
        }

        /**
         * 显示当前操作者，-1表示无操作者
         */
        public showCurrentFocusByPos(posFocus) {
            let Position = mahjong.play.Position;
            for(const member in Position) {
                //console.log("mahjong.play.view.DirectionView.showCurrentFocus@member", member);
                let pos = parseInt(member, 10);
                if (isNaN(pos)) {
                    continue;
                }

                let focusImg;
                switch(pos) {
                case mahjong.play.Position.SELF:
                    focusImg = this.deskCenterUI.getChildByName("focus_self");
                    break;
                case mahjong.play.Position.NEXT:
                    focusImg = this.deskCenterUI.getChildByName("focus_next");
                    break;
                case mahjong.play.Position.OPPOSITE:
                    focusImg = this.deskCenterUI.getChildByName("focus_oppo");
                    break;
                case mahjong.play.Position.PREVIOUS:
                    focusImg = this.deskCenterUI.getChildByName("focus_pre");
                    break;
                }

                focusImg.visible = (pos === posFocus);
                if(pos === posFocus)
                    console.log("mahjong.play.view.DirectionView.showCurrentFocus@pos", posFocus, focusImg.name);
            }

        }

        /**
         * 显示各玩家方位
         */
        public showDirections(): void {
            // 优先使用 setInfo 中的 direction，否则使用 seat 座位顺序作为 direction
            let selfDirection = this.deskController.getDeskDetail().getPlayer(Login.getUid()).seat;
            let gameSetInfo = this.deskController.getGameSetInfo();
            if(gameSetInfo) {
                let setInfo = gameSetInfo.getPlayerSetInfo().getByUid(Login.getUid());
                selfDirection = setInfo.direction;
            }
            console.log("mahjong.play.view.DirectionView.showDirections@self direction", selfDirection);

            let centerDirectionsView = this.deskCenterUI.getChildByName("center_directions");
            let Position = mahjong.play.Position;
            for(const member in Position) {
                //console.log("mahjong.play.view.DirectionView.showDirections@member", member);
                let pos = parseInt(member, 10);
                if (isNaN(pos)) {
                    continue;
                }

                let direction = selfDirection + pos;
                direction = direction>4?(direction-4):direction;

                let dirImg = this.getDirectionImage(centerDirectionsView, pos);
                this.changeSkinForDirection(dirImg, direction);

                //console.log("mahjong.play.view.DirectionView.showDirections@pos, direction", pos, direction, dirImg.name);
            }
        }


        /**
         * 获得一名玩家的方位图标
         * @param uid 
         */
        public getDirectionImage(centerDirectionsView, pos) {
            let dirImg;
            switch(pos) {
            case mahjong.play.Position.SELF:
                dirImg = centerDirectionsView.getChildByName("dir_self");
                break;
            case mahjong.play.Position.NEXT:
                dirImg = centerDirectionsView.getChildByName("dir_next");
                break;
            case mahjong.play.Position.OPPOSITE:
                dirImg = centerDirectionsView.getChildByName("dir_oppo");
                break;
            case mahjong.play.Position.PREVIOUS:
                dirImg = centerDirectionsView.getChildByName("dir_pre");
                break;
            }
            return dirImg;
        }

        public changeSkinForDirection(dirImg, direction) {
            let Direction = Protocol.getEnum("mahjong.Direction");
            switch(direction) {
            case Direction.DONG:
                dirImg.skin = (DirectionView.IMG_PATH_DONG);
                break;
            case Direction.NAN:
                dirImg.skin = (DirectionView.IMG_PATH_NAN);
                break;
            case Direction.XI:
                dirImg.skin = (DirectionView.IMG_PATH_XI);
                break;
            case Direction.BEI:
                dirImg.skin = (DirectionView.IMG_PATH_BEI);
                break;
            }
        }

    }
}