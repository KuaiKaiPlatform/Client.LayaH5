
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.mahjong {
    export class CenterDirectionsUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":123,"height":123},"child":[{"type":"Image","props":{"width":18,"skin":"mahjong/desk/dong.png","height":20,"centerY":35,"centerX":0}},{"type":"Image","props":{"width":18,"skin":"mahjong/desk/nan.png","height":20,"centerY":0,"centerX":35}},{"type":"Image","props":{"width":18,"skin":"mahjong/desk/xi.png","height":20,"centerY":-35,"centerX":0}},{"type":"Image","props":{"width":18,"skin":"mahjong/desk/bei.png","height":20,"centerY":0,"centerX":-35}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.CenterDirectionsUI.uiView);

        }

    }
}

module ui.mahjong {
    export class DeskUI extends View {

        public static  uiView:any ={"type":"View","props":{"x":0,"name":"view_mahjong_desk"},"child":[{"type":"DeskCenter","props":{"name":"desk_center","centerY":0,"centerX":0,"runtime":"ui.mahjong.DeskCenterUI"}},{"type":"PlayerBasicInfos","props":{"name":"player_basic_info","runtime":"ui.mahjong.PlayerBasicInfosUI"}},{"type":"DeskMenu","props":{"name":"desk_menu","runtime":"ui.mahjong.DeskMenuUI"}},{"type":"GameSummary","props":{"name":"game_summary","runtime":"ui.mahjong.GameSummaryUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.DeskCenterUI",ui.mahjong.DeskCenterUI);
			View.regComponent("ui.mahjong.PlayerBasicInfosUI",ui.mahjong.PlayerBasicInfosUI);
			View.regComponent("ui.mahjong.DeskMenuUI",ui.mahjong.DeskMenuUI);
			View.regComponent("ui.mahjong.GameSummaryUI",ui.mahjong.GameSummaryUI);

            super.createChildren();
            this.createView(ui.mahjong.DeskUI.uiView);

        }

    }
}

module ui.mahjong {
    export class DeskCenterUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":123,"height":123},"child":[{"type":"Image","props":{"width":123,"skin":"mahjong/desk/direction_bg.png","height":123}},{"type":"CenterDirections","props":{"name":"center_directions","runtime":"ui.mahjong.CenterDirectionsUI"}},{"type":"Image","props":{"skin":"mahjong/desk/direction_focus.png","scaleY":0.75,"scaleX":0.75,"centerY":-34,"centerX":1}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.CenterDirectionsUI",ui.mahjong.CenterDirectionsUI);

            super.createChildren();
            this.createView(ui.mahjong.DeskCenterUI.uiView);

        }

    }
}

module ui.mahjong {
    export class DeskMenuUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1334,"name":"layer_menu","height":750},"child":[{"type":"Image","props":{"skin":"common/desk/exit.png","scaleY":0.47,"scaleX":0.47,"right":10,"bottom":10}},{"type":"Image","props":{"top":10,"skin":"common/desk/setting.png","scaleY":0.7,"scaleX":0.7,"right":10}},{"type":"Image","props":{"skin":"common/desk/message.png","scaleY":0.9,"scaleX":0.9,"right":10,"bottom":220}},{"type":"Image","props":{"skin":"common/desk/voice.png","right":15,"bottom":150}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.DeskMenuUI.uiView);

        }

    }
}

module ui.mahjong {
    export class GameSummaryUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1334,"name":"layer_summary","height":750},"child":[{"type":"Image","props":{"y":100,"x":10,"top":100,"skin":"common/rule/61007.png","left":10}},{"type":"Label","props":{"top":10,"text":"局  3/16  底  1/2","left":10,"fontSize":20,"color":"#47c03d","bold":false}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.GameSummaryUI.uiView);

        }

    }
}

module ui.mahjong {
    export class PlayerBasicInfoUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":86,"height":122},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"player/icon_bg.png","name":"img_player_bg"}},{"type":"Image","props":{"y":12,"x":12,"skin":"player/icon.png","name":"img_player_head"}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"player/banker.png","name":"img_player_jiao"}},{"type":"Label","props":{"y":82,"x":0,"width":86,"text":"我的昵称","name":"lable_player_name","height":20,"fontSize":15,"color":"#deb40d","bold":true,"align":"center"}},{"type":"Label","props":{"y":102,"x":0,"width":86,"text":"135","name":"lable_player_score","height":20,"fontSize":18,"color":"#f4f2eb","bold":false,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.PlayerBasicInfoUI.uiView);

        }

    }
}

module ui.mahjong {
    export class PlayerBasicInfosUI extends View {

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1334,"name":"layer_player","height":750},"child":[{"type":"PlayerBasicInfo","props":{"name":"view_player_self","left":40,"bottom":120,"runtime":"ui.mahjong.PlayerBasicInfoUI"}},{"type":"PlayerBasicInfo","props":{"top":300,"right":10,"name":"view_player_next","runtime":"ui.mahjong.PlayerBasicInfoUI"}},{"type":"PlayerBasicInfo","props":{"top":300,"name":"view_player_pre","left":10,"runtime":"ui.mahjong.PlayerBasicInfoUI"}},{"type":"PlayerBasicInfo","props":{"top":40,"right":120,"name":"view_player_opposite","runtime":"ui.mahjong.PlayerBasicInfoUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.PlayerBasicInfoUI",ui.mahjong.PlayerBasicInfoUI);

            super.createChildren();
            this.createView(ui.mahjong.PlayerBasicInfosUI.uiView);

        }

    }
}
