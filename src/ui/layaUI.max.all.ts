
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

        public static  uiView:any ={"type":"View","props":{"x":0,"name":"view_mahjong_desk"},"child":[{"type":"DeskCenter","props":{"name":"desk_center","centerY":0,"centerX":0,"runtime":"ui.mahjong.DeskCenterUI"}},{"type":"PlayerBasicInfos","props":{"name":"player_basic_info","runtime":"ui.mahjong.PlayerBasicInfosUI"}},{"type":"DeskMenu","props":{"name":"desk_menu","runtime":"ui.mahjong.DeskMenuUI"}},{"type":"GameSummary","props":{"name":"game_summary","runtime":"ui.mahjong.GameSummaryUI"}},{"type":"DiscardSelf","props":{"name":"discards_self","centerY":140,"centerX":0,"runtime":"ui.mahjong.DiscardSelfUI"}},{"type":"DicardPre","props":{"name":"discards_pre","centerY":0,"centerX":-260,"runtime":"ui.mahjong.DicardPreUI"}},{"type":"DicardNext","props":{"name":"discards_next","centerY":0,"centerX":260,"runtime":"ui.mahjong.DicardNextUI"}},{"type":"DiscardOpposite","props":{"name":"discards_opposite","centerY":-140,"centerX":0,"runtime":"ui.mahjong.DiscardOppositeUI"}},{"type":"HandCardAndMoSelf","props":{"name":"handcard_self","centerX":0,"bottom":10,"runtime":"ui.mahjong.HandCardAndMoSelfUI"}},{"type":"HandCardAndMoOppostie","props":{"top":10,"name":"handcard_opposite","centerX":0,"runtime":"ui.mahjong.HandCardAndMoOppostieUI"}},{"type":"HandCardAndMoPre","props":{"name":"handcard_pre","left":180,"centerY":0,"runtime":"ui.mahjong.HandCardAndMoPreUI"}},{"type":"HandCardAndMoNext","props":{"right":180,"name":"handcard_next","centerY":0,"runtime":"ui.mahjong.HandCardAndMoNextUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.DeskCenterUI",ui.mahjong.DeskCenterUI);
			View.regComponent("ui.mahjong.HandCardAndMoNextUI",ui.mahjong.HandCardAndMoNextUI);
			View.regComponent("ui.mahjong.DeskMenuUI",ui.mahjong.DeskMenuUI);
			View.regComponent("ui.mahjong.GameSummaryUI",ui.mahjong.GameSummaryUI);
			View.regComponent("ui.mahjong.DiscardSelfUI",ui.mahjong.DiscardSelfUI);
			View.regComponent("ui.mahjong.DicardPreUI",ui.mahjong.DicardPreUI);
			View.regComponent("ui.mahjong.PlayerBasicInfosUI",ui.mahjong.PlayerBasicInfosUI);
			View.regComponent("ui.mahjong.DiscardOppositeUI",ui.mahjong.DiscardOppositeUI);
			View.regComponent("ui.mahjong.HandCardAndMoSelfUI",ui.mahjong.HandCardAndMoSelfUI);
			View.regComponent("ui.mahjong.HandCardAndMoOppostieUI",ui.mahjong.HandCardAndMoOppostieUI);
			View.regComponent("ui.mahjong.HandCardAndMoPreUI",ui.mahjong.HandCardAndMoPreUI);
			View.regComponent("ui.mahjong.DicardNextUI",ui.mahjong.DicardNextUI);

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
    export class DicardNextUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":135,"height":254},"child":[{"type":"SingleCardNextGreen","props":{"right":90,"name":"1_9","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":27,"right":90,"name":"1_8","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":54,"name":"1_7","left":0,"runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"x":0,"top":81,"name":"1_6","left":0,"runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"x":0,"top":108,"name":"1_5","left":0,"runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":135,"name":"1_4","left":0,"runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":162,"name":"1_3","left":0,"runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"x":0,"name":"1_2","left":0,"bottom":27,"runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"name":"1_1","left":0,"bottom":0,"runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":0,"right":45,"name":"2_9","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":27,"right":45,"name":"2_8","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":54,"right":45,"name":"2_7","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":81,"right":45,"name":"2_6","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":108,"right":45,"name":"2_5","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":135,"right":45,"name":"2_4","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":162,"right":45,"name":"2_3","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":189,"right":45,"name":"2_2","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":216,"right":45,"name":"2_1","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":189,"right":0,"name":"3_2","runtime":"ui.mahjong.SingleCardNextGreenUI"}},{"type":"SingleCardNextGreen","props":{"top":216,"right":0,"name":"3_1","runtime":"ui.mahjong.SingleCardNextGreenUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.SingleCardNextGreenUI",ui.mahjong.SingleCardNextGreenUI);

            super.createChildren();
            this.createView(ui.mahjong.DicardNextUI.uiView);

        }

    }
}

module ui.mahjong {
    export class DicardPreUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":135,"height":254},"child":[{"type":"SingleCardPreGreen","props":{"right":0,"name":"1_1","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":27,"right":0,"name":"1_2","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":54,"right":0,"name":"1_3","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":81,"right":0,"name":"1_4","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":108,"right":0,"name":"1_5","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":135,"right":0,"name":"1_6","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":162,"right":0,"name":"1_7","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":189,"right":0,"name":"1_8","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":216,"right":0,"name":"1_9","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":0,"right":45,"name":"2_1","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":27,"right":45,"name":"2_2","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":54,"right":45,"name":"2_3","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":81,"right":45,"name":"2_4","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":108,"right":45,"name":"2_5","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":135,"right":45,"name":"2_6","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":162,"right":45,"name":"2_7","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":189,"right":45,"name":"2_8","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":216,"right":45,"name":"2_9","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"right":90,"name":"3_1","runtime":"ui.mahjong.SingleCardPreGreenUI"}},{"type":"SingleCardPreGreen","props":{"top":27,"right":90,"name":"3_2","runtime":"ui.mahjong.SingleCardPreGreenUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.SingleCardPreGreenUI",ui.mahjong.SingleCardPreGreenUI);

            super.createChildren();
            this.createView(ui.mahjong.DicardPreUI.uiView);

        }

    }
}

module ui.mahjong {
    export class DiscardOppositeUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":352,"height":145},"child":[{"type":"SingleCardLandscapeGreen","props":{"right":0,"name":"3_1","bottom":90,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":312,"name":"2_9","bottom":45,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":273,"name":"2_8","bottom":45,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":234,"name":"2_7","bottom":45,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":195,"name":"2_6","bottom":45,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":156,"name":"2_5","bottom":45,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":117,"name":"2_4","bottom":45,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":78,"name":"2_3","bottom":45,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":39,"name":"2_2","bottom":45,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":0,"name":"2_1","bottom":45,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":0,"name":"1_1","bottom":0,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":39,"name":"1_2","bottom":0,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":78,"name":"1_3","bottom":0,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":117,"name":"1_4","bottom":0,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":156,"name":"1_5","bottom":0,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":195,"name":"1_6","bottom":0,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":234,"name":"1_7","bottom":0,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":273,"name":"1_8","bottom":0,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"right":312,"name":"1_9","bottom":0,"runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.SingleCardLandscapeGreenUI",ui.mahjong.SingleCardLandscapeGreenUI);

            super.createChildren();
            this.createView(ui.mahjong.DiscardOppositeUI.uiView);

        }

    }
}

module ui.mahjong {
    export class DiscardSelfUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":352,"height":145},"child":[{"type":"SingleCardLandscapeGreen","props":{"name":"1_1","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"x":39,"name":"1_2","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"x":78,"name":"1_3","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"x":117,"name":"1_4","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"x":156,"name":"1_5","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"x":195,"name":"1_6","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"x":234,"name":"1_7","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"x":273,"name":"1_8","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"x":312,"name":"1_9","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"x":351,"name":"1_10","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"x":390,"name":"1_11","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"name":"2_1","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"x":39,"name":"2_2","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"x":78,"name":"2_3","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"x":117,"name":"2_4","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"x":156,"name":"2_5","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"x":195,"name":"2_6","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"x":234,"name":"2_7","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"x":273,"name":"2_8","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"x":312,"name":"2_9","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"x":351,"name":"2_10","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":45,"x":390,"name":"2_11","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}},{"type":"SingleCardLandscapeGreen","props":{"y":90,"name":"3_1","runtime":"ui.mahjong.SingleCardLandscapeGreenUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.SingleCardLandscapeGreenUI",ui.mahjong.SingleCardLandscapeGreenUI);

            super.createChildren();
            this.createView(ui.mahjong.DiscardSelfUI.uiView);

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
    export class HandCardAndMoNextUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":24,"height":371},"child":[{"type":"HandCardNext","props":{"top":47,"runtime":"ui.mahjong.HandCardNextUI"}},{"type":"Image","props":{"top":0,"skin":"mahjong/card/next_hand_green.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.HandCardNextUI",ui.mahjong.HandCardNextUI);

            super.createChildren();
            this.createView(ui.mahjong.HandCardAndMoNextUI.uiView);

        }

    }
}

module ui.mahjong {
    export class HandCardAndMoOppostieUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":575,"height":55},"child":[{"type":"HandCardOpposite","props":{"right":0,"runtime":"ui.mahjong.HandCardOppositeUI"}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","left":0}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.HandCardOppositeUI",ui.mahjong.HandCardOppositeUI);

            super.createChildren();
            this.createView(ui.mahjong.HandCardAndMoOppostieUI.uiView);

        }

    }
}

module ui.mahjong {
    export class HandCardAndMoPreUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":24,"height":371},"child":[{"type":"HandCardPre","props":{"bottom":47,"runtime":"ui.mahjong.HandCardPreUI"}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","bottom":0}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.HandCardPreUI",ui.mahjong.HandCardPreUI);

            super.createChildren();
            this.createView(ui.mahjong.HandCardAndMoPreUI.uiView);

        }

    }
}

module ui.mahjong {
    export class HandCardAndMoSelfUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":916,"height":94},"child":[{"type":"HandCardSelf","props":{"name":"handcards","runtime":"ui.mahjong.HandCardSelfUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":0,"name":"mocard","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.HandCardSelfUI",ui.mahjong.HandCardSelfUI);
			View.regComponent("ui.mahjong.SingleCardSelfHandGreenUI",ui.mahjong.SingleCardSelfHandGreenUI);

            super.createChildren();
            this.createView(ui.mahjong.HandCardAndMoSelfUI.uiView);

        }

    }
}

module ui.mahjong {
    export class HandCardNextUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":24,"height":323},"child":[{"type":"Image","props":{"top":0,"skin":"mahjong/card/next_hand_green.png","name":"1"}},{"type":"Image","props":{"top":23,"skin":"mahjong/card/next_hand_green.png","name":"2"}},{"type":"Image","props":{"top":46,"skin":"mahjong/card/next_hand_green.png","name":"3"}},{"type":"Image","props":{"top":69,"skin":"mahjong/card/next_hand_green.png","name":"4"}},{"type":"Image","props":{"top":92,"skin":"mahjong/card/next_hand_green.png","name":"5"}},{"type":"Image","props":{"top":115,"skin":"mahjong/card/next_hand_green.png","name":"6"}},{"type":"Image","props":{"top":138,"skin":"mahjong/card/next_hand_green.png","name":"7"}},{"type":"Image","props":{"top":161,"skin":"mahjong/card/next_hand_green.png","name":"8"}},{"type":"Image","props":{"top":184,"skin":"mahjong/card/next_hand_green.png","name":"9"}},{"type":"Image","props":{"top":207,"skin":"mahjong/card/next_hand_green.png","name":"10"}},{"type":"Image","props":{"top":230,"skin":"mahjong/card/next_hand_green.png","name":"11"}},{"type":"Image","props":{"top":253,"skin":"mahjong/card/next_hand_green.png","name":"12"}},{"type":"Image","props":{"top":276,"skin":"mahjong/card/next_hand_green.png","name":"13"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.HandCardNextUI.uiView);

        }

    }
}

module ui.mahjong {
    export class HandCardOppositeUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":520,"height":55},"child":[{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"1"}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"2","left":40}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"3","left":80}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"4","left":120}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"5","left":160}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"6","left":200}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"7","left":240}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"8","left":280}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"9","left":320}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"10","left":360}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"11","left":400}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"12","left":440}},{"type":"Image","props":{"skin":"mahjong/card/ops_hand_green.png","name":"13","left":480}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.HandCardOppositeUI.uiView);

        }

    }
}

module ui.mahjong {
    export class HandCardPreUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":24,"height":324},"child":[{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"13","bottom":276}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"12","bottom":253}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"11","bottom":230}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"10","bottom":207}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"9","bottom":184}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"8","bottom":161}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"7","bottom":138}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"6","bottom":115}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"5","bottom":92}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"4","bottom":69}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"3","bottom":46}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"2","bottom":23}},{"type":"Image","props":{"skin":"mahjong/card/pre_hand_green.png","name":"1","bottom":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.HandCardPreUI.uiView);

        }

    }
}

module ui.mahjong {
    export class HandCardSelfUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":832,"height":94},"child":[{"type":"SingleCardSelfHandGreen","props":{"right":0,"name":"1","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":64,"name":"2","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":128,"name":"3","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":192,"name":"4","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":256,"name":"5","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":320,"name":"6","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":384,"name":"7","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":448,"name":"8","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":512,"name":"9","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":576,"name":"10","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":640,"name":"11","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":704,"name":"12","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}},{"type":"SingleCardSelfHandGreen","props":{"right":768,"name":"13","runtime":"ui.mahjong.SingleCardSelfHandGreenUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.mahjong.SingleCardSelfHandGreenUI",ui.mahjong.SingleCardSelfHandGreenUI);

            super.createChildren();
            this.createView(ui.mahjong.HandCardSelfUI.uiView);

        }

    }
}

module ui.mahjong {
    export class PlayerBasicInfoUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":86,"height":122},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"player/icon_bg.png","name":"img_player_bg"}},{"type":"Image","props":{"y":12,"x":12,"skin":"player/icon.png","name":"img_player_head"}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"player/banker.png","name":"img_player_jiao"}},{"type":"Label","props":{"y":82,"x":0,"width":86,"text":"我的昵称","name":"label_player_name","height":20,"fontSize":15,"color":"#deb40d","bold":true,"align":"center"}},{"type":"Label","props":{"y":102,"x":0,"width":86,"text":"135","name":"label_player_score","height":20,"fontSize":18,"color":"#f4f2eb","bold":false,"align":"center"}}]};
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

module ui.mahjong {
    export class SingleCardLandscapeGreenUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":38,"height":54},"child":[{"type":"Image","props":{"skin":"mahjong/card/landscape_plate_green.png","name":"plate"}},{"type":"Image","props":{"skin":"mahjong/card/ops_tiao1.png","name":"card"}},{"type":"Image","props":{"top":0,"skin":"mahjong/card/jiao_bao1.png","scaleY":0.6,"scaleX":0.6,"right":0,"name":"jiao_right_top"}},{"type":"Image","props":{"skin":"mahjong/card/jiao_ting.png","scaleY":0.5,"scaleX":0.5,"name":"jiao_left_bottom","left":0,"bottom":0}},{"type":"Image","props":{"skin":"mahjong/card/landscape_disabled.png","name":"grey"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.SingleCardLandscapeGreenUI.uiView);

        }

    }
}

module ui.mahjong {
    export class SingleCardNextGreenUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":45,"height":38},"child":[{"type":"Image","props":{"skin":"mahjong/card/horizon_plate_green.png","name":"plate"}},{"type":"Image","props":{"skin":"mahjong/card/next_wan4.png","name":"card"}},{"type":"Image","props":{"top":0,"skin":"mahjong/card/jiao_bao1.png","scaleY":0.6,"scaleX":0.6,"right":0,"name":"jiao_right_top"}},{"type":"Image","props":{"skin":"mahjong/card/jiao_ting.png","scaleY":0.5,"scaleX":0.5,"name":"jiao_left_bottom","left":0,"bottom":0}},{"type":"Image","props":{"skin":"mahjong/card/horizon_disabled.png","name":"grey"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.SingleCardNextGreenUI.uiView);

        }

    }
}

module ui.mahjong {
    export class SingleCardPreGreenUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":45,"height":38},"child":[{"type":"Image","props":{"skin":"mahjong/card/horizon_plate_green.png","name":"plate"}},{"type":"Image","props":{"skin":"mahjong/card/pre_tong6.png","name":"card"}},{"type":"Image","props":{"top":0,"skin":"mahjong/card/jiao_bao1.png","scaleY":0.6,"scaleX":0.6,"right":0,"name":"jiao_right_top"}},{"type":"Image","props":{"skin":"mahjong/card/jiao_ting.png","scaleY":0.5,"scaleX":0.5,"name":"jiao_left_bottom","left":0,"bottom":0}},{"type":"Image","props":{"skin":"mahjong/card/horizon_disabled.png","name":"grey"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.SingleCardPreGreenUI.uiView);

        }

    }
}

module ui.mahjong {
    export class SingleCardSelfHandGreenUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":66,"height":94},"child":[{"type":"Image","props":{"skin":"mahjong/card/self_hand_plate_green.png","name":"plate","centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"mahjong/card/self_hand_zi_zhong.png","name":"card"}},{"type":"Image","props":{"top":0,"skin":"mahjong/card/jiao_bao1.png","right":0,"name":"jiao_right_top"}},{"type":"Image","props":{"skin":"mahjong/card/jiao_ting.png","name":"jiao_left_bottom","left":0,"bottom":0}},{"type":"Image","props":{"width":66,"skin":"mahjong/card/landscape_disabled.png","name":"grey","height":94}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.mahjong.SingleCardSelfHandGreenUI.uiView);

        }

    }
}
