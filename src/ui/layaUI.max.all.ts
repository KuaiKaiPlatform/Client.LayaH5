
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.mahjong {
    export class DeskUI extends View {

        public static  uiView:any ={"type":"View","props":{"x":0,"name":"view_mahjong_desk"},"child":[{"type":"View","props":{"top":0,"right":0,"name":"layer_player","left":0,"bottom":0},"child":[{"type":"PlayerBasicInfo","props":{"name":"view_player_self","left":40,"bottom":120,"runtime":"ui.mahjong.PlayerBasicInfoUI"}},{"type":"PlayerBasicInfo","props":{"top":300,"right":10,"name":"view_player_next","runtime":"ui.mahjong.PlayerBasicInfoUI"}},{"type":"PlayerBasicInfo","props":{"top":300,"name":"view_player_pre","left":10,"runtime":"ui.mahjong.PlayerBasicInfoUI"}},{"type":"PlayerBasicInfo","props":{"top":40,"right":120,"name":"view_player_opposite","runtime":"ui.mahjong.PlayerBasicInfoUI"}}]},{"type":"View","props":{"top":0,"right":0,"name":"layer_summary","left":0,"bottom":0}},{"type":"View","props":{"top":0,"right":0,"name":"layer_menu","left":0,"bottom":0}},{"type":"View","props":{"top":0,"right":0,"name":"layer_system","left":0,"bottom":0}},{"type":"View","props":{"top":0,"right":0,"name":"layer_ready","left":0,"bottom":0}},{"type":"View","props":{"name":"layer_game"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.PlayerBasicInfoUI",ui.mahjong.PlayerBasicInfoUI);

            super.createChildren();
            this.createView(ui.mahjong.DeskUI.uiView);

        }

    }
}

module ui.mahjong {
    export class PlayerBasicInfoUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":86,"height":122},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"player/icon_bg.png","name":"img_player_bg"}},{"type":"Image","props":{"y":12,"x":12,"skin":"player/icon.png","name":"img_player_head"}},{"type":"Image","props":{"y":0,"x":0,"skin":"player/banker.png","name":"img_player_jiao"}},{"type":"Label","props":{"y":82,"x":0,"width":86,"text":"我的昵称","name":"lable_player_name","height":20,"fontSize":15,"color":"#deb40d","bold":true,"align":"center"}},{"type":"Label","props":{"y":102,"x":0,"width":86,"text":"135","name":"lable_player_score","height":20,"fontSize":18,"color":"#f4f2eb","bold":false,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.PlayerBasicInfoUI.uiView);

        }

    }
}
