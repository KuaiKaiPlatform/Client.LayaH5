var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var common;
    (function (common) {
        var SameIpInfoUI = (function (_super) {
            __extends(SameIpInfoUI, _super);
            function SameIpInfoUI() {
                return _super.call(this) || this;
            }
            SameIpInfoUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.common.SameIpInfoUI.uiView);
            };
            return SameIpInfoUI;
        }(View));
        SameIpInfoUI.uiView = { "type": "View", "props": { "width": 724.5, "height": 486 }, "child": [{ "type": "Image", "props": { "skin": "common/info/bg.png", "scaleY": 1.5, "scaleX": 1.5 } }, { "type": "Label", "props": { "y": 88, "x": 27, "text": "以下玩家具有相同IP地址（134.5.32.209）：", "name": "title", "fontSize": 30, "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 145, "x": 27, "visible": false, "text": "豆子响", "name": "player1", "fontSize": 25 } }, { "type": "Label", "props": { "y": 190, "x": 27, "visible": false, "text": "神堂峪第一家", "name": "player2", "fontSize": 25 } }, { "type": "Label", "props": { "y": 235, "x": 27, "visible": false, "text": "3号玩家", "name": "player3", "fontSize": 25 } }, { "type": "Label", "props": { "y": 280, "x": 27, "visible": false, "text": "四大金刚", "name": "player4", "fontSize": 25 } }, { "type": "Image", "props": { "skin": "common/desk/btn_leave.png", "name": "leave", "centerX": -100, "bottom": 50 } }, { "type": "Image", "props": { "skin": "common/desk/btn_continue.png", "name": "continue", "centerX": 100, "bottom": 50 } }] };
        common.SameIpInfoUI = SameIpInfoUI;
    })(common = ui.common || (ui.common = {}));
})(ui || (ui = {}));
(function (ui) {
    var common;
    (function (common) {
        var SettingUI = (function (_super) {
            __extends(SettingUI, _super);
            function SettingUI() {
                return _super.call(this) || this;
            }
            SettingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.common.SettingUI.uiView);
            };
            return SettingUI;
        }(View));
        SettingUI.uiView = { "type": "View", "props": { "width": 640, "height": 430 }, "child": [{ "type": "Image", "props": { "skin": "common/setting/bg.png", "name": "bg" } }, { "type": "Image", "props": { "top": 15, "skin": "common/setting/title.png", "name": "title", "centerX": 0 } }, { "type": "Image", "props": { "y": 88, "x": 61, "skin": "common/setting/item_bg.png", "scaleY": 1, "scaleX": 0.4, "name": "item_bg_0" } }, { "type": "Image", "props": { "y": 98, "x": 73, "skin": "common/setting/music.png", "name": "item_label_0" } }, { "type": "Image", "props": { "y": 91, "x": 162, "skin": "common/setting/volume_bg.png", "scaleX": 1.5, "name": "volume_bg_0" } }, { "type": "Image", "props": { "y": 93, "x": 164, "visible": false, "skin": "common/setting/volume.png", "scaleX": 1.2, "name": "volume_0" } }, { "type": "Image", "props": { "y": 74, "x": 451, "skin": "common/desk/shaizi_6.png", "name": "volume_point_0" } }, { "type": "Image", "props": { "y": 159, "x": 61, "skin": "common/setting/item_bg.png", "scaleY": 1, "scaleX": 0.4, "name": "item_bg_1" } }, { "type": "Image", "props": { "y": 169, "x": 73, "skin": "common/setting/sound.png", "name": "item_label_1" } }, { "type": "Image", "props": { "y": 162, "x": 162, "skin": "common/setting/volume_bg.png", "scaleX": 1.5, "name": "volume_bg_1" } }, { "type": "Image", "props": { "y": 164, "x": 164, "visible": false, "skin": "common/setting/volume.png", "scaleX": 1.5, "name": "volume_1" } }, { "type": "Image", "props": { "y": 145, "x": 528, "skin": "common/desk/shaizi_6.png", "name": "volume_point_1" } }, { "type": "Image", "props": { "y": 230, "x": 61, "skin": "common/setting/item_bg.png", "scaleY": 1, "scaleX": 0.4, "name": "item_bg_2" } }, { "type": "Image", "props": { "y": 240, "x": 73, "skin": "common/setting/dialect.png", "name": "item_label_2" } }, { "type": "Image", "props": { "y": 238, "x": 160, "skin": "common/setting/check_bg.png", "name": "radio_dialect_0" }, "child": [{ "type": "Image", "props": { "skin": "common/setting/checked.png", "name": "checked" } }, { "type": "Label", "props": { "top": 5, "text": "普通话", "name": "dialect", "left": 50, "fontSize": 24, "font": "Microsoft YaHei", "color": "#66100e", "bold": true } }] }, { "type": "Image", "props": { "y": 238, "x": 300, "visible": false, "skin": "common/setting/check_bg.png", "name": "radio_dialect_1" }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "common/setting/checked.png", "name": "checked" } }, { "type": "Label", "props": { "top": 5, "text": "榆林话", "name": "dialect", "left": 50, "fontSize": 24, "font": "Microsoft YaHei", "color": "#66100e", "bold": true } }] }, { "type": "Image", "props": { "y": 238, "x": 440, "visible": false, "skin": "common/setting/check_bg.png", "name": "radio_dialect_2" }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "common/setting/checked.png", "name": "checked" } }, { "type": "Label", "props": { "top": 5, "text": "延安话", "name": "dialect", "left": 50, "fontSize": 24, "font": "Microsoft YaHei", "color": "#66100e", "bold": true } }] }, { "type": "Image", "props": { "skin": "common/setting/dismiss.png", "scaleY": 0.8, "scaleX": 0.8, "name": "dismiss", "centerX": 0, "bottom": 30 } }, { "type": "Image", "props": { "y": -6, "x": 590, "skin": "common/setting/close.png", "name": "close" } }] };
        common.SettingUI = SettingUI;
    })(common = ui.common || (ui.common = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var CardGroupNextUI = (function (_super) {
            __extends(CardGroupNextUI, _super);
            function CardGroupNextUI() {
                return _super.call(this) || this;
            }
            CardGroupNextUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.CardGroupNextfDianGangUI", ui.mahjong.CardGroupNextfDianGangUI);
                View.regComponent("ui.mahjong.CardGroupNextfPengUI", ui.mahjong.CardGroupNextfPengUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.CardGroupNextUI.uiView);
            };
            return CardGroupNextUI;
        }(View));
        CardGroupNextUI.uiView = { "type": "View", "props": { "width": 45, "height": 389 }, "child": [{ "type": "CardGroupNextfDianGang", "props": { "name": "1", "bottom": 0, "runtime": "ui.mahjong.CardGroupNextfDianGangUI" } }, { "type": "CardGroupNextfPeng", "props": { "name": "2", "bottom": 99, "runtime": "ui.mahjong.CardGroupNextfPengUI" } }, { "type": "CardGroupNextfDianGang", "props": { "name": "3", "bottom": 198, "runtime": "ui.mahjong.CardGroupNextfDianGangUI" } }, { "type": "CardGroupNextfPeng", "props": { "name": "4", "bottom": 297, "runtime": "ui.mahjong.CardGroupNextfPengUI" } }] };
        mahjong.CardGroupNextUI = CardGroupNextUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var CardGroupNextfDianGangUI = (function (_super) {
            __extends(CardGroupNextfDianGangUI, _super);
            function CardGroupNextfDianGangUI() {
                return _super.call(this) || this;
            }
            CardGroupNextfDianGangUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardNextGreenUI", ui.mahjong.SingleCardNextGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.CardGroupNextfDianGangUI.uiView);
            };
            return CardGroupNextfDianGangUI;
        }(View));
        CardGroupNextfDianGangUI.uiView = { "type": "View", "props": { "width": 45, "height": 92 }, "child": [{ "type": "SingleCardNextGreen", "props": { "name": "1", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 27, "name": "2", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 54, "name": "3", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 22, "name": "4", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }] };
        mahjong.CardGroupNextfDianGangUI = CardGroupNextfDianGangUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var CardGroupNextfPengUI = (function (_super) {
            __extends(CardGroupNextfPengUI, _super);
            function CardGroupNextfPengUI() {
                return _super.call(this) || this;
            }
            CardGroupNextfPengUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardNextGreenUI", ui.mahjong.SingleCardNextGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.CardGroupNextfPengUI.uiView);
            };
            return CardGroupNextfPengUI;
        }(View));
        CardGroupNextfPengUI.uiView = { "type": "View", "props": { "width": 45, "height": 92 }, "child": [{ "type": "SingleCardNextGreen", "props": { "name": "1", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 27, "name": "2", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 54, "name": "3", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }] };
        mahjong.CardGroupNextfPengUI = CardGroupNextfPengUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var CardGroupOppositeDianGangUI = (function (_super) {
            __extends(CardGroupOppositeDianGangUI, _super);
            function CardGroupOppositeDianGangUI() {
                return _super.call(this) || this;
            }
            CardGroupOppositeDianGangUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardLandscapeGreenUI", ui.mahjong.SingleCardLandscapeGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.CardGroupOppositeDianGangUI.uiView);
            };
            return CardGroupOppositeDianGangUI;
        }(View));
        CardGroupOppositeDianGangUI.uiView = { "type": "View", "props": { "width": 114, "height": 64 }, "child": [{ "type": "SingleCardLandscapeGreen", "props": { "name": "1", "left": 0, "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2", "left": 38, "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3", "left": 76, "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "name": "4", "left": 38, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }] };
        mahjong.CardGroupOppositeDianGangUI = CardGroupOppositeDianGangUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var CardGroupOppositePengUI = (function (_super) {
            __extends(CardGroupOppositePengUI, _super);
            function CardGroupOppositePengUI() {
                return _super.call(this) || this;
            }
            CardGroupOppositePengUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardLandscapeGreenUI", ui.mahjong.SingleCardLandscapeGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.CardGroupOppositePengUI.uiView);
            };
            return CardGroupOppositePengUI;
        }(View));
        CardGroupOppositePengUI.uiView = { "type": "View", "props": { "width": 114, "height": 54 }, "child": [{ "type": "SingleCardLandscapeGreen", "props": { "name": "1", "left": 0, "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2", "left": 38, "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3", "left": 76, "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }] };
        mahjong.CardGroupOppositePengUI = CardGroupOppositePengUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var CardGroupSelfDianGangUI = (function (_super) {
            __extends(CardGroupSelfDianGangUI, _super);
            function CardGroupSelfDianGangUI() {
                return _super.call(this) || this;
            }
            CardGroupSelfDianGangUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.CardGroupSelfPengUI", ui.mahjong.CardGroupSelfPengUI);
                View.regComponent("ui.mahjong.SingleCardSelfGroupGreenUI", ui.mahjong.SingleCardSelfGroupGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.CardGroupSelfDianGangUI.uiView);
            };
            return CardGroupSelfDianGangUI;
        }(View));
        CardGroupSelfDianGangUI.uiView = { "type": "View", "props": { "width": 180, "height": 100 }, "child": [{ "type": "CardGroupSelfPeng", "props": { "name": "base", "bottom": 0, "runtime": "ui.mahjong.CardGroupSelfPengUI" } }, { "type": "SingleCardSelfGroupGreen", "props": { "name": "target", "centerX": 0, "runtime": "ui.mahjong.SingleCardSelfGroupGreenUI" } }] };
        mahjong.CardGroupSelfDianGangUI = CardGroupSelfDianGangUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var CardGroupSelfPengUI = (function (_super) {
            __extends(CardGroupSelfPengUI, _super);
            function CardGroupSelfPengUI() {
                return _super.call(this) || this;
            }
            CardGroupSelfPengUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardSelfGroupGreenUI", ui.mahjong.SingleCardSelfGroupGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.CardGroupSelfPengUI.uiView);
            };
            return CardGroupSelfPengUI;
        }(View));
        CardGroupSelfPengUI.uiView = { "type": "View", "props": { "width": 180, "height": 84 }, "child": [{ "type": "SingleCardSelfGroupGreen", "props": { "name": "1", "runtime": "ui.mahjong.SingleCardSelfGroupGreenUI" } }, { "type": "SingleCardSelfGroupGreen", "props": { "x": 60, "name": "2", "runtime": "ui.mahjong.SingleCardSelfGroupGreenUI" } }, { "type": "SingleCardSelfGroupGreen", "props": { "x": 120, "name": "3", "runtime": "ui.mahjong.SingleCardSelfGroupGreenUI" } }] };
        mahjong.CardGroupSelfPengUI = CardGroupSelfPengUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var CardGroupsOppositeUI = (function (_super) {
            __extends(CardGroupsOppositeUI, _super);
            function CardGroupsOppositeUI() {
                return _super.call(this) || this;
            }
            CardGroupsOppositeUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.CardGroupOppositeDianGangUI", ui.mahjong.CardGroupOppositeDianGangUI);
                View.regComponent("ui.mahjong.CardGroupOppositePengUI", ui.mahjong.CardGroupOppositePengUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.CardGroupsOppositeUI.uiView);
            };
            return CardGroupsOppositeUI;
        }(View));
        CardGroupsOppositeUI.uiView = { "type": "View", "props": { "y": 0, "width": 495, "height": 64 }, "child": [{ "type": "CardGroupOppositeDianGang", "props": { "right": 0, "name": "1", "bottom": 0, "runtime": "ui.mahjong.CardGroupOppositeDianGangUI" } }, { "type": "CardGroupOppositePeng", "props": { "right": 127, "name": "2", "bottom": 0, "runtime": "ui.mahjong.CardGroupOppositePengUI" } }, { "type": "CardGroupOppositePeng", "props": { "right": 254, "name": "3", "bottom": 0, "runtime": "ui.mahjong.CardGroupOppositePengUI" } }, { "type": "CardGroupOppositeDianGang", "props": { "right": 381, "name": "4", "bottom": 0, "runtime": "ui.mahjong.CardGroupOppositeDianGangUI" } }] };
        mahjong.CardGroupsOppositeUI = CardGroupsOppositeUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var CardGroupsSelfUI = (function (_super) {
            __extends(CardGroupsSelfUI, _super);
            function CardGroupsSelfUI() {
                return _super.call(this) || this;
            }
            CardGroupsSelfUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.CardGroupSelfDianGangUI", ui.mahjong.CardGroupSelfDianGangUI);
                View.regComponent("ui.mahjong.CardGroupSelfPengUI", ui.mahjong.CardGroupSelfPengUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.CardGroupsSelfUI.uiView);
            };
            return CardGroupsSelfUI;
        }(View));
        CardGroupsSelfUI.uiView = { "type": "View", "props": { "width": 780, "height": 100 }, "child": [{ "type": "CardGroupSelfDianGang", "props": { "name": "1", "left": 0, "bottom": 0, "runtime": "ui.mahjong.CardGroupSelfDianGangUI" } }, { "type": "CardGroupSelfPeng", "props": { "name": "2", "left": 200, "bottom": 0, "runtime": "ui.mahjong.CardGroupSelfPengUI" } }, { "type": "CardGroupSelfPeng", "props": { "name": "3", "left": 400, "bottom": 0, "runtime": "ui.mahjong.CardGroupSelfPengUI" } }, { "type": "CardGroupSelfDianGang", "props": { "name": "4", "left": 600, "bottom": 0, "runtime": "ui.mahjong.CardGroupSelfDianGangUI" } }] };
        mahjong.CardGroupsSelfUI = CardGroupsSelfUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var CenterDirectionsUI = (function (_super) {
            __extends(CenterDirectionsUI, _super);
            function CenterDirectionsUI() {
                return _super.call(this) || this;
            }
            CenterDirectionsUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.CenterDirectionsUI.uiView);
            };
            return CenterDirectionsUI;
        }(View));
        CenterDirectionsUI.uiView = { "type": "View", "props": { "width": 123, "height": 123 }, "child": [{ "type": "Image", "props": { "width": 18, "skin": "mahjong/desk/dir_dong.png", "name": "dir_self", "height": 20, "centerY": 35, "centerX": 0 } }, { "type": "Image", "props": { "width": 18, "skin": "mahjong/desk/dir_nan.png", "name": "dir_next", "height": 20, "centerY": 0, "centerX": 35 } }, { "type": "Image", "props": { "width": 18, "skin": "mahjong/desk/dir_xi.png", "name": "dir_oppo", "height": 20, "centerY": -35, "centerX": 0 } }, { "type": "Image", "props": { "width": 18, "skin": "mahjong/desk/dir_bei.png", "name": "dir_pre", "height": 20, "centerY": 0, "centerX": -35 } }] };
        mahjong.CenterDirectionsUI = CenterDirectionsUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var DeskUI = (function (_super) {
            __extends(DeskUI, _super);
            function DeskUI() {
                return _super.call(this) || this;
            }
            DeskUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.DeskCenterUI", ui.mahjong.DeskCenterUI);
                View.regComponent("ui.mahjong.TingCardsUI", ui.mahjong.TingCardsUI);
                View.regComponent("ui.mahjong.DeskMenuUI", ui.mahjong.DeskMenuUI);
                View.regComponent("ui.mahjong.GameSummaryUI", ui.mahjong.GameSummaryUI);
                View.regComponent("ui.mahjong.DiscardSelfUI", ui.mahjong.DiscardSelfUI);
                View.regComponent("ui.mahjong.DiscardPreUI", ui.mahjong.DiscardPreUI);
                View.regComponent("ui.mahjong.DiscardNextUI", ui.mahjong.DiscardNextUI);
                View.regComponent("ui.mahjong.DiscardOppositeUI", ui.mahjong.DiscardOppositeUI);
                View.regComponent("ui.mahjong.PlayerBasicInfosUI", ui.mahjong.PlayerBasicInfosUI);
                View.regComponent("ui.mahjong.HandCardAndMoOppostieUI", ui.mahjong.HandCardAndMoOppostieUI);
                View.regComponent("ui.mahjong.HandCardAndMoPreUI", ui.mahjong.HandCardAndMoPreUI);
                View.regComponent("ui.mahjong.HandCardAndMoNextUI", ui.mahjong.HandCardAndMoNextUI);
                View.regComponent("ui.mahjong.CardGroupSelfDianGangUI", ui.mahjong.CardGroupSelfDianGangUI);
                View.regComponent("ui.mahjong.CardGroupSelfPengUI", ui.mahjong.CardGroupSelfPengUI);
                View.regComponent("ui.mahjong.SelfOperationsUI", ui.mahjong.SelfOperationsUI);
                View.regComponent("ui.mahjong.HandCardAndMoSelfUI", ui.mahjong.HandCardAndMoSelfUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.DeskUI.uiView);
            };
            return DeskUI;
        }(View));
        DeskUI.uiView = { "type": "View", "props": { "x": 0, "name": "view_mahjong_desk" }, "child": [{ "type": "DeskCenter", "props": { "name": "desk_center", "centerY": 0, "centerX": 0, "runtime": "ui.mahjong.DeskCenterUI" } }, { "type": "PlayerBasicInfos", "props": { "name": "player_basic_info", "runtime": "ui.mahjong.PlayerBasicInfosUI" } }, { "type": "DeskMenu", "props": { "name": "desk_menu", "runtime": "ui.mahjong.DeskMenuUI" } }, { "type": "GameSummary", "props": { "name": "game_summary", "runtime": "ui.mahjong.GameSummaryUI" } }, { "type": "DiscardSelf", "props": { "name": "discards_self", "centerY": 140, "centerX": 0, "runtime": "ui.mahjong.DiscardSelfUI" } }, { "type": "DiscardPre", "props": { "name": "discards_pre", "centerY": 0, "centerX": -260, "runtime": "ui.mahjong.DiscardPreUI" } }, { "type": "DiscardNext", "props": { "name": "discards_next", "centerY": 0, "centerX": 260, "runtime": "ui.mahjong.DiscardNextUI" } }, { "type": "DiscardOpposite", "props": { "name": "discards_opposite", "centerY": -140, "centerX": 0, "runtime": "ui.mahjong.DiscardOppositeUI" } }, { "type": "HandCardAndMoSelf", "props": { "name": "handcard_self", "centerX": 0, "bottom": 10, "runtime": "ui.mahjong.HandCardAndMoSelfUI" } }, { "type": "HandCardAndMoOppostie", "props": { "top": 10, "name": "handcard_opposite", "centerX": 0, "runtime": "ui.mahjong.HandCardAndMoOppostieUI" } }, { "type": "HandCardAndMoPre", "props": { "name": "handcard_pre", "left": 180, "centerY": 0, "runtime": "ui.mahjong.HandCardAndMoPreUI" } }, { "type": "HandCardAndMoNext", "props": { "right": 180, "name": "handcard_next", "centerY": 0, "runtime": "ui.mahjong.HandCardAndMoNextUI" } }, { "type": "CardGroupSelfDianGang", "props": { "name": "card_group_self_1", "centerX": -388, "bottom": 10, "runtime": "ui.mahjong.CardGroupSelfDianGangUI" } }, { "type": "CardGroupSelfPeng", "props": { "name": "card_group_self_2", "centerX": -188, "bottom": 10, "runtime": "ui.mahjong.CardGroupSelfPengUI" } }, { "type": "SelfOperations", "props": { "name": "self_operations", "runtime": "ui.mahjong.SelfOperationsUI" } }, { "type": "Image", "props": { "skin": "mahjong/desk/oper_ting.png", "scaleY": 0.5, "scaleX": 0.5, "name": "ting", "left": 230, "bottom": 110 } }, { "type": "TingCards", "props": { "name": "ting_cards", "centerX": 0, "bottom": 174, "alpha": 0.9, "runtime": "ui.mahjong.TingCardsUI" } }] };
        mahjong.DeskUI = DeskUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var DeskCenterUI = (function (_super) {
            __extends(DeskCenterUI, _super);
            function DeskCenterUI() {
                return _super.call(this) || this;
            }
            DeskCenterUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.CenterDirectionsUI", ui.mahjong.CenterDirectionsUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.DeskCenterUI.uiView);
            };
            return DeskCenterUI;
        }(View));
        DeskCenterUI.uiView = { "type": "View", "props": { "width": 123, "height": 123 }, "child": [{ "type": "Image", "props": { "width": 123, "skin": "mahjong/desk/dir_bg.png", "name": "bg", "height": 123 } }, { "type": "CenterDirections", "props": { "name": "center_directions", "runtime": "ui.mahjong.CenterDirectionsUI" } }, { "type": "Image", "props": { "skin": "mahjong/desk/dir_focus.png", "scaleY": 0.75, "scaleX": 0.75, "name": "focus_oppo", "centerY": -34, "centerX": 1 } }, { "type": "Image", "props": { "skin": "mahjong/desk/dir_focus.png", "skewX": 180, "scaleY": 0.75, "scaleX": 0.75, "name": "focus_self", "centerY": 65, "centerX": 1 } }, { "type": "Image", "props": { "skin": "mahjong/desk/dir_focus.png", "skewY": 90, "skewX": 90, "scaleY": 0.75, "scaleX": 0.75, "name": "focus_pre", "centerY": -30, "centerX": -4 } }, { "type": "Image", "props": { "skin": "mahjong/desk/dir_focus.png", "skewY": -90, "skewX": -90, "scaleY": 0.75, "scaleX": 0.75, "name": "focus_next", "centerY": 61, "centerX": 97 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/desk/count_1.png", "name": "count_first", "centerY": -2, "centerX": -10 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/desk/count_0.png", "scaleY": 0.9, "scaleX": 0.9, "name": "count_second", "centerY": 0, "centerX": 5 } }] };
        mahjong.DeskCenterUI = DeskCenterUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var DeskMenuUI = (function (_super) {
            __extends(DeskMenuUI, _super);
            function DeskMenuUI() {
                return _super.call(this) || this;
            }
            DeskMenuUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.DeskMenuUI.uiView);
            };
            return DeskMenuUI;
        }(View));
        DeskMenuUI.uiView = { "type": "View", "props": { "width": 1334, "name": "layer_menu", "height": 750 }, "child": [{ "type": "Image", "props": { "skin": "common/desk/exit.png", "scaleY": 0.47, "scaleX": 0.47, "right": 10, "bottom": 10 } }, { "type": "Image", "props": { "top": 10, "skin": "common/desk/setting.png", "scaleY": 0.7, "scaleX": 0.7, "right": 10 } }, { "type": "Image", "props": { "skin": "common/desk/message.png", "scaleY": 0.9, "scaleX": 0.9, "right": 10, "bottom": 220 } }, { "type": "Image", "props": { "skin": "common/desk/voice.png", "right": 15, "bottom": 150 } }] };
        mahjong.DeskMenuUI = DeskMenuUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var DiscardNextUI = (function (_super) {
            __extends(DiscardNextUI, _super);
            function DiscardNextUI() {
                return _super.call(this) || this;
            }
            DiscardNextUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardNextGreenUI", ui.mahjong.SingleCardNextGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.DiscardNextUI.uiView);
            };
            return DiscardNextUI;
        }(View));
        DiscardNextUI.uiView = { "type": "View", "props": { "width": 135, "height": 254 }, "child": [{ "type": "SingleCardNextGreen", "props": { "right": 90, "name": "1_9", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 27, "right": 90, "name": "1_8", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 54, "name": "1_7", "left": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "x": 0, "top": 81, "name": "1_6", "left": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "x": 0, "top": 108, "name": "1_5", "left": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 135, "name": "1_4", "left": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 162, "name": "1_3", "left": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "name": "1_2", "left": 0, "bottom": 27, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "name": "1_1", "bottom": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 0, "right": 45, "name": "2_9", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 27, "right": 45, "name": "2_8", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 54, "right": 45, "name": "2_7", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 81, "right": 45, "name": "2_6", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 108, "right": 45, "name": "2_5", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 135, "right": 45, "name": "2_4", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 162, "right": 45, "name": "2_3", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 189, "right": 45, "name": "2_2", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 216, "right": 45, "name": "2_1", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 189, "right": 0, "name": "3_2", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 216, "right": 0, "name": "3_1", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "Image", "props": { "top": 165, "skin": "mahjong/card/focus.png", "scaleY": 0.5, "scaleX": 0.5, "right": 12, "name": "focus" } }] };
        mahjong.DiscardNextUI = DiscardNextUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var DiscardOppositeUI = (function (_super) {
            __extends(DiscardOppositeUI, _super);
            function DiscardOppositeUI() {
                return _super.call(this) || this;
            }
            DiscardOppositeUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardLandscapeGreenUI", ui.mahjong.SingleCardLandscapeGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.DiscardOppositeUI.uiView);
            };
            return DiscardOppositeUI;
        }(View));
        DiscardOppositeUI.uiView = { "type": "View", "props": { "width": 351, "height": 145 }, "child": [{ "type": "SingleCardLandscapeGreen", "props": { "right": 0, "name": "3_1", "bottom": 90, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 312, "name": "2_9", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 273, "name": "2_8", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 234, "name": "2_7", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 195, "name": "2_6", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 156, "name": "2_5", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 117, "name": "2_4", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 78, "name": "2_3", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 39, "name": "2_2", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 0, "name": "2_1", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 0, "name": "1_1", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 39, "name": "1_2", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 78, "name": "1_3", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 117, "name": "1_4", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 156, "name": "1_5", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 195, "name": "1_6", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 234, "name": "1_7", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 273, "name": "1_8", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 312, "name": "1_9", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "Image", "props": { "skin": "mahjong/card/focus.png", "scaleY": 0.5, "scaleX": 0.5, "right": 243, "bottom": 97 } }] };
        mahjong.DiscardOppositeUI = DiscardOppositeUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var DiscardPreUI = (function (_super) {
            __extends(DiscardPreUI, _super);
            function DiscardPreUI() {
                return _super.call(this) || this;
            }
            DiscardPreUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardPreGreenUI", ui.mahjong.SingleCardPreGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.DiscardPreUI.uiView);
            };
            return DiscardPreUI;
        }(View));
        DiscardPreUI.uiView = { "type": "View", "props": { "width": 135, "height": 254 }, "child": [{ "type": "SingleCardPreGreen", "props": { "right": 0, "name": "1_1", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 27, "right": 0, "name": "1_2", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 54, "right": 0, "name": "1_3", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 81, "right": 0, "name": "1_4", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 108, "right": 0, "name": "1_5", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 135, "right": 0, "name": "1_6", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 162, "right": 0, "name": "1_7", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 189, "right": 0, "name": "1_8", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 216, "right": 0, "name": "1_9", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 0, "right": 45, "name": "2_1", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 27, "right": 45, "name": "2_2", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 54, "right": 45, "name": "2_3", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 81, "right": 45, "name": "2_4", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 108, "right": 45, "name": "2_5", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 135, "right": 45, "name": "2_6", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 162, "right": 45, "name": "2_7", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 189, "right": 45, "name": "2_8", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 216, "right": 45, "name": "2_9", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "right": 90, "name": "3_1", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }, { "type": "SingleCardPreGreen", "props": { "top": 27, "right": 90, "name": "3_2", "runtime": "ui.mahjong.SingleCardPreGreenUI" } }] };
        mahjong.DiscardPreUI = DiscardPreUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var DiscardSelfUI = (function (_super) {
            __extends(DiscardSelfUI, _super);
            function DiscardSelfUI() {
                return _super.call(this) || this;
            }
            DiscardSelfUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardLandscapeGreenUI", ui.mahjong.SingleCardLandscapeGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.DiscardSelfUI.uiView);
            };
            return DiscardSelfUI;
        }(View));
        DiscardSelfUI.uiView = { "type": "View", "props": { "width": 351, "height": 145 }, "child": [{ "type": "SingleCardLandscapeGreen", "props": { "name": "1_1", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 39, "name": "1_2", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 78, "name": "1_3", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 117, "name": "1_4", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 156, "name": "1_5", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 195, "name": "1_6", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 234, "name": "1_7", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 273, "name": "1_8", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 312, "name": "1_9", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "visible": false, "name": "2_1", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 39, "name": "2_2", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 78, "name": "2_3", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 117, "name": "2_4", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 156, "name": "2_5", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 195, "name": "2_6", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 234, "name": "2_7", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 273, "name": "2_8", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 312, "name": "2_9", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 90, "name": "3_1", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "Image", "props": { "y": 63, "x": 9, "skin": "mahjong/card/focus.png", "scaleY": 0.5, "scaleX": 0.5 } }] };
        mahjong.DiscardSelfUI = DiscardSelfUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var GameResultUI = (function (_super) {
            __extends(GameResultUI, _super);
            function GameResultUI() {
                return _super.call(this) || this;
            }
            GameResultUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.GameResultPlayerUI", ui.mahjong.GameResultPlayerUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.GameResultUI.uiView);
            };
            return GameResultUI;
        }(Dialog));
        GameResultUI.uiView = { "type": "Dialog", "props": { "width": 1166, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 1, "x": 0, "skin": "mahjong/result/bg.png", "name": "bg" } }, { "type": "Image", "props": { "y": -20, "skin": "mahjong/result/jie_suan.png", "name": "title", "centerX": 0 } }, { "type": "Label", "props": { "top": 10, "text": "陕西麻将   局 8/8", "name": "description", "left": 10, "fontSize": 20, "color": "#deb40d" } }, { "type": "Label", "props": { "top": 10, "text": "2019-03-08 21:38:09", "right": 10, "name": "time", "fontSize": 20, "color": "#deb40d" } }, { "type": "GameResultPlayer", "props": { "y": 100, "visible": false, "scaleY": 0.9, "scaleX": 0.9, "centerX": -432, "runtime": "ui.mahjong.GameResultPlayerUI" } }, { "type": "GameResultPlayer", "props": { "y": 100, "visible": false, "scaleY": 0.9, "scaleX": 0.9, "centerX": -144, "runtime": "ui.mahjong.GameResultPlayerUI" } }, { "type": "GameResultPlayer", "props": { "y": 100, "visible": false, "scaleY": 0.9, "scaleX": 0.9, "centerX": 144, "runtime": "ui.mahjong.GameResultPlayerUI" } }, { "type": "GameResultPlayer", "props": { "y": 100, "visible": false, "scaleY": 0.9, "scaleX": 0.9, "centerX": 432, "runtime": "ui.mahjong.GameResultPlayerUI" } }, { "type": "Image", "props": { "skin": "common/desk/btn_continue.png", "name": "share", "centerX": -100, "bottom": 50 } }, { "type": "Image", "props": { "skin": "common/desk/btn_leave.png", "name": "return", "centerX": 100, "bottom": 47 } }] };
        mahjong.GameResultUI = GameResultUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var GameResultPlayerUI = (function (_super) {
            __extends(GameResultPlayerUI, _super);
            function GameResultPlayerUI() {
                return _super.call(this) || this;
            }
            GameResultPlayerUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.GameResultPlayerUI.uiView);
            };
            return GameResultPlayerUI;
        }(View));
        GameResultPlayerUI.uiView = { "type": "View", "props": { "width": 318, "height": 530 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/result/bg_player_0.png", "name": "bg_player" } }, { "type": "Label", "props": { "y": 115, "text": "我", "name": "nickname", "fontSize": 20, "color": "#000000", "centerX": 0, "bold": true } }, { "type": "Label", "props": { "y": 151, "text": "ID：873098", "name": "uid", "fontSize": 20, "centerX": 0 } }, { "type": "Image", "props": { "y": 21, "skin": "player/icon_bg.png", "centerX": 0 } }, { "type": "Image", "props": { "y": 33, "skin": "player/icon.png", "name": "head", "centerX": 0 } }, { "type": "Label", "props": { "y": 196, "visible": false, "text": "自摸次数", "name": "stat_0", "left": 40, "fontSize": 24, "color": "#000000", "bold": false } }, { "type": "Label", "props": { "y": 196, "visible": false, "text": "0", "right": 40, "name": "stat_val_0", "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 236, "visible": false, "text": "接炮次数", "name": "stat_1", "left": 40, "fontSize": 24, "color": "#000000", "bold": false } }, { "type": "Label", "props": { "y": 236, "visible": false, "text": "0", "right": 40, "name": "stat_val_1", "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 276, "visible": false, "text": "点炮次数", "name": "stat_2", "left": 40, "fontSize": 24, "color": "#000000", "bold": false } }, { "type": "Label", "props": { "y": 276, "visible": false, "text": "0", "right": 40, "name": "stat_val_2", "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 316, "visible": false, "text": "明杠次数", "name": "stat_3", "left": 40, "fontSize": 24, "color": "#000000", "bold": false } }, { "type": "Label", "props": { "y": 316, "visible": false, "text": "0", "right": 40, "name": "stat_val_3", "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "y": 356, "visible": false, "text": "明杠次数", "name": "stat_4", "left": 40, "fontSize": 24, "color": "#000000", "bold": false } }, { "type": "Label", "props": { "y": 356, "visible": false, "text": "0", "right": 40, "name": "stat_val_4", "fontSize": 24, "color": "#000000" } }, { "type": "Label", "props": { "visible": false, "text": "0", "name": "game_score_win", "fontSize": 80, "font": "Arial", "color": "#c02406", "centerX": 0, "bottom": 50, "bold": true } }, { "type": "Label", "props": { "visible": false, "text": "0", "name": "game_score_lose", "fontSize": 80, "font": "Arial", "color": "#84827d", "centerX": 0, "bottom": 50, "bold": true } }, { "type": "Image", "props": { "y": 16, "x": 38, "visible": false, "skin": "mahjong/result/big_winner.png", "name": "big_winner" } }] };
        mahjong.GameResultPlayerUI = GameResultPlayerUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var GameResultPlayer_UI = (function (_super) {
            __extends(GameResultPlayer_UI, _super);
            function GameResultPlayer_UI() {
                return _super.call(this) || this;
            }
            GameResultPlayer_UI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.GameResultPlayer_UI.uiView);
            };
            return GameResultPlayer_UI;
        }(View));
        GameResultPlayer_UI.uiView = { "type": "View", "props": { "width": 277, "height": 395 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/result/bg_player_1.png", "name": "bg_player" } }, { "type": "Image", "props": { "y": 8, "x": 16, "skin": "player/icon.png" } }, { "type": "Label", "props": { "y": 15, "x": 90, "width": 160, "text": "我的昵称我的昵称", "height": 20, "fontSize": 20, "color": "#000000", "bold": true } }, { "type": "Label", "props": { "y": 48, "x": 90, "width": 160, "text": "ID：873098", "height": 20, "fontSize": 16 } }] };
        mahjong.GameResultPlayer_UI = GameResultPlayer_UI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var GameSummaryUI = (function (_super) {
            __extends(GameSummaryUI, _super);
            function GameSummaryUI() {
                return _super.call(this) || this;
            }
            GameSummaryUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.GameSummaryUI.uiView);
            };
            return GameSummaryUI;
        }(View));
        GameSummaryUI.uiView = { "type": "View", "props": { "width": 1334, "name": "layer_summary", "height": 750 }, "child": [{ "type": "Image", "props": { "y": 100, "x": 10, "top": 100, "skin": "common/rule/61007.png", "left": 10 } }, { "type": "Label", "props": { "top": 10, "text": "局  3/16  底  1/2", "left": 10, "fontSize": 20, "color": "#47c03d", "bold": false } }, { "type": "Label", "props": { "top": 50, "text": "余 53 张", "left": 10, "fontSize": 20, "color": "#47c03d", "bold": false } }] };
        mahjong.GameSummaryUI = GameSummaryUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var HandCardAndMoNextUI = (function (_super) {
            __extends(HandCardAndMoNextUI, _super);
            function HandCardAndMoNextUI() {
                return _super.call(this) || this;
            }
            HandCardAndMoNextUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.HandCardNextUI", ui.mahjong.HandCardNextUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.HandCardAndMoNextUI.uiView);
            };
            return HandCardAndMoNextUI;
        }(View));
        HandCardAndMoNextUI.uiView = { "type": "View", "props": { "width": 24, "height": 371 }, "child": [{ "type": "HandCardNext", "props": { "name": "handcards", "bottom": 0, "runtime": "ui.mahjong.HandCardNextUI" } }, { "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/next_hand_green.png", "name": "mo" } }] };
        mahjong.HandCardAndMoNextUI = HandCardAndMoNextUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var HandCardAndMoOppostieUI = (function (_super) {
            __extends(HandCardAndMoOppostieUI, _super);
            function HandCardAndMoOppostieUI() {
                return _super.call(this) || this;
            }
            HandCardAndMoOppostieUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.HandCardOppositeUI", ui.mahjong.HandCardOppositeUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.HandCardAndMoOppostieUI.uiView);
            };
            return HandCardAndMoOppostieUI;
        }(View));
        HandCardAndMoOppostieUI.uiView = { "type": "View", "props": { "width": 575, "height": 55 }, "child": [{ "type": "HandCardOpposite", "props": { "right": 0, "name": "handcards", "runtime": "ui.mahjong.HandCardOppositeUI" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "mo", "left": 0 } }] };
        mahjong.HandCardAndMoOppostieUI = HandCardAndMoOppostieUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var HandCardAndMoPreUI = (function (_super) {
            __extends(HandCardAndMoPreUI, _super);
            function HandCardAndMoPreUI() {
                return _super.call(this) || this;
            }
            HandCardAndMoPreUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.HandCardPreUI", ui.mahjong.HandCardPreUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.HandCardAndMoPreUI.uiView);
            };
            return HandCardAndMoPreUI;
        }(View));
        HandCardAndMoPreUI.uiView = { "type": "View", "props": { "width": 24, "height": 371 }, "child": [{ "type": "HandCardPre", "props": { "y": 0, "top": 0, "name": "handcards", "runtime": "ui.mahjong.HandCardPreUI" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "mo", "bottom": 0 } }] };
        mahjong.HandCardAndMoPreUI = HandCardAndMoPreUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var HandCardAndMoSelfUI = (function (_super) {
            __extends(HandCardAndMoSelfUI, _super);
            function HandCardAndMoSelfUI() {
                return _super.call(this) || this;
            }
            HandCardAndMoSelfUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.HandCardSelfUI", ui.mahjong.HandCardSelfUI);
                View.regComponent("ui.mahjong.SingleCardSelfHandGreenUI", ui.mahjong.SingleCardSelfHandGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.HandCardAndMoSelfUI.uiView);
            };
            return HandCardAndMoSelfUI;
        }(View));
        HandCardAndMoSelfUI.uiView = { "type": "View", "props": { "width": 916, "height": 94 }, "child": [{ "type": "HandCardSelf", "props": { "name": "handcards", "runtime": "ui.mahjong.HandCardSelfUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 0, "name": "mo", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }] };
        mahjong.HandCardAndMoSelfUI = HandCardAndMoSelfUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var HandCardNextUI = (function (_super) {
            __extends(HandCardNextUI, _super);
            function HandCardNextUI() {
                return _super.call(this) || this;
            }
            HandCardNextUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.HandCardNextUI.uiView);
            };
            return HandCardNextUI;
        }(View));
        HandCardNextUI.uiView = { "type": "View", "props": { "width": 24, "height": 323 }, "child": [{ "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/next_hand_green.png", "name": "1" } }, { "type": "Image", "props": { "visible": false, "top": 23, "skin": "mahjong/card/next_hand_green.png", "name": "2" } }, { "type": "Image", "props": { "visible": false, "top": 46, "skin": "mahjong/card/next_hand_green.png", "name": "3" } }, { "type": "Image", "props": { "visible": false, "top": 69, "skin": "mahjong/card/next_hand_green.png", "name": "4" } }, { "type": "Image", "props": { "visible": false, "top": 92, "skin": "mahjong/card/next_hand_green.png", "name": "5" } }, { "type": "Image", "props": { "visible": false, "top": 115, "skin": "mahjong/card/next_hand_green.png", "name": "6" } }, { "type": "Image", "props": { "visible": false, "top": 138, "skin": "mahjong/card/next_hand_green.png", "name": "7" } }, { "type": "Image", "props": { "visible": false, "top": 161, "skin": "mahjong/card/next_hand_green.png", "name": "8" } }, { "type": "Image", "props": { "visible": false, "top": 184, "skin": "mahjong/card/next_hand_green.png", "name": "9" } }, { "type": "Image", "props": { "visible": false, "top": 207, "skin": "mahjong/card/next_hand_green.png", "name": "10" } }, { "type": "Image", "props": { "visible": false, "top": 230, "skin": "mahjong/card/next_hand_green.png", "name": "11" } }, { "type": "Image", "props": { "visible": false, "top": 253, "skin": "mahjong/card/next_hand_green.png", "name": "12" } }, { "type": "Image", "props": { "visible": false, "top": 276, "skin": "mahjong/card/next_hand_green.png", "name": "13" } }] };
        mahjong.HandCardNextUI = HandCardNextUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var HandCardOppositeUI = (function (_super) {
            __extends(HandCardOppositeUI, _super);
            function HandCardOppositeUI() {
                return _super.call(this) || this;
            }
            HandCardOppositeUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.HandCardOppositeUI.uiView);
            };
            return HandCardOppositeUI;
        }(View));
        HandCardOppositeUI.uiView = { "type": "View", "props": { "width": 520, "height": 55 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "1" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "2", "left": 40 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "3", "left": 80 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "4", "left": 120 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "5", "left": 160 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "6", "left": 200 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "7", "left": 240 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "8", "left": 280 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "9", "left": 320 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "10", "left": 360 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "11", "left": 400 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "12", "left": 440 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_hand_green.png", "name": "13", "left": 480 } }] };
        mahjong.HandCardOppositeUI = HandCardOppositeUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var HandCardPreUI = (function (_super) {
            __extends(HandCardPreUI, _super);
            function HandCardPreUI() {
                return _super.call(this) || this;
            }
            HandCardPreUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.HandCardPreUI.uiView);
            };
            return HandCardPreUI;
        }(View));
        HandCardPreUI.uiView = { "type": "View", "props": { "width": 24, "height": 323 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "13", "bottom": 276 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "12", "bottom": 253 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "11", "bottom": 230 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "10", "bottom": 207 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "9", "bottom": 184 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "8", "bottom": 161 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "7", "bottom": 138 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "6", "bottom": 115 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "5", "bottom": 92 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "4", "bottom": 69 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "3", "bottom": 46 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "2", "bottom": 23 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_hand_green.png", "name": "1", "bottom": 0 } }] };
        mahjong.HandCardPreUI = HandCardPreUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var HandCardSelfUI = (function (_super) {
            __extends(HandCardSelfUI, _super);
            function HandCardSelfUI() {
                return _super.call(this) || this;
            }
            HandCardSelfUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardSelfHandGreenUI", ui.mahjong.SingleCardSelfHandGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.HandCardSelfUI.uiView);
            };
            return HandCardSelfUI;
        }(View));
        HandCardSelfUI.uiView = { "type": "View", "props": { "width": 832, "height": 94 }, "child": [{ "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 0, "name": "1", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 64, "name": "2", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 128, "name": "3", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 192, "name": "4", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 256, "name": "5", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 320, "name": "6", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 384, "name": "7", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 448, "name": "8", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 512, "name": "9", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 576, "name": "10", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 640, "name": "11", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 704, "name": "12", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "right": 768, "name": "13", "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }] };
        mahjong.HandCardSelfUI = HandCardSelfUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var JieSuanHandCardFullUI = (function (_super) {
            __extends(JieSuanHandCardFullUI, _super);
            function JieSuanHandCardFullUI() {
                return _super.call(this) || this;
            }
            JieSuanHandCardFullUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardSelfHandGreenUI", ui.mahjong.SingleCardSelfHandGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.JieSuanHandCardFullUI.uiView);
            };
            return JieSuanHandCardFullUI;
        }(View));
        JieSuanHandCardFullUI.uiView = { "type": "View", "props": { "width": 896, "height": 94 }, "child": [{ "type": "SingleCardSelfHandGreen", "props": { "x": 0, "visible": false, "name": "1", "left": 0, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "2", "left": 64, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "3", "left": 128, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "4", "left": 192, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "5", "left": 256, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "6", "left": 320, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "7", "left": 384, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "8", "left": 448, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "9", "left": 512, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "10", "left": 576, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "11", "left": 640, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "12", "left": 704, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "13", "left": 768, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "14", "left": 832, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }] };
        mahjong.JieSuanHandCardFullUI = JieSuanHandCardFullUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var JieSuanPlayerUI = (function (_super) {
            __extends(JieSuanPlayerUI, _super);
            function JieSuanPlayerUI() {
                return _super.call(this) || this;
            }
            JieSuanPlayerUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.PlayerBasicInfoUI", ui.mahjong.PlayerBasicInfoUI);
                View.regComponent("ui.mahjong.JieSuanHandCardFullUI", ui.mahjong.JieSuanHandCardFullUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.JieSuanPlayerUI.uiView);
            };
            return JieSuanPlayerUI;
        }(View));
        JieSuanPlayerUI.uiView = { "type": "View", "props": { "width": 1166, "height": 140 }, "child": [{ "type": "PlayerBasicInfo", "props": { "name": "player_info", "left": 20, "centerY": 0, "runtime": "ui.mahjong.PlayerBasicInfoUI" } }, { "type": "Label", "props": { "top": 12, "text": "胡牌（清一色，抢杠胡）+12", "name": "score_details", "left": 120, "fontSize": 18, "font": "Microsoft YaHei", "color": "#22d1e8" } }, { "type": "Image", "props": { "width": 30, "skin": "common/score/win_sign.png", "right": 80, "height": 30, "centerY": -20 } }, { "type": "Image", "props": { "width": 30, "skin": "common/score/win_score_1.png", "right": 50, "height": 50, "centerY": -20 } }, { "type": "Image", "props": { "width": 30, "skin": "common/score/win_score_2.png", "right": 20, "height": 50, "centerY": -20 } }, { "type": "Image", "props": { "skin": "mahjong/result/hu_pai.png", "right": -30, "name": "extra_info", "bottom": -10 } }, { "type": "JieSuanHandCardFull", "props": { "name": "player_cards", "left": 120, "bottom": 0, "runtime": "ui.mahjong.JieSuanHandCardFullUI" } }] };
        mahjong.JieSuanPlayerUI = JieSuanPlayerUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var JieSuanPlayer1UI = (function (_super) {
            __extends(JieSuanPlayer1UI, _super);
            function JieSuanPlayer1UI() {
                return _super.call(this) || this;
            }
            JieSuanPlayer1UI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.PlayerBasicInfoUI", ui.mahjong.PlayerBasicInfoUI);
                View.regComponent("ui.mahjong.JieSuanHandCardFullUI", ui.mahjong.JieSuanHandCardFullUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.JieSuanPlayer1UI.uiView);
            };
            return JieSuanPlayer1UI;
        }(View));
        JieSuanPlayer1UI.uiView = { "type": "View", "props": { "width": 1166, "height": 140 }, "child": [{ "type": "PlayerBasicInfo", "props": { "name": "player_info", "left": 20, "centerY": 0, "runtime": "ui.mahjong.PlayerBasicInfoUI" } }, { "type": "Label", "props": { "top": 12, "text": "胡牌（清一色，抢杠胡）- 4", "name": "score_details", "left": 120, "fontSize": 18, "font": "Microsoft YaHei", "color": "#22d1e8" } }, { "type": "Image", "props": { "width": 30, "skin": "common/score/fail_sign.png", "right": 50, "height": 10, "centerY": -20 } }, { "type": "Image", "props": { "width": 30, "skin": "common/score/fail_score_4.png", "right": 20, "height": 50, "centerY": -20 } }, { "type": "Image", "props": { "skin": "mahjong/result/dian_pao.png", "right": 10, "name": "extra_info", "bottom": 0 } }, { "type": "JieSuanHandCardFull", "props": { "left": 120, "bottom": 0, "runtime": "ui.mahjong.JieSuanHandCardFullUI" } }] };
        mahjong.JieSuanPlayer1UI = JieSuanPlayer1UI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var JieSuanPlayer2UI = (function (_super) {
            __extends(JieSuanPlayer2UI, _super);
            function JieSuanPlayer2UI() {
                return _super.call(this) || this;
            }
            JieSuanPlayer2UI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.PlayerBasicInfoUI", ui.mahjong.PlayerBasicInfoUI);
                View.regComponent("ui.mahjong.JieSuanHandCardFullUI", ui.mahjong.JieSuanHandCardFullUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.JieSuanPlayer2UI.uiView);
            };
            return JieSuanPlayer2UI;
        }(View));
        JieSuanPlayer2UI.uiView = { "type": "View", "props": { "width": 1166, "height": 140 }, "child": [{ "type": "PlayerBasicInfo", "props": { "name": "player_info", "left": 20, "centerY": 0, "runtime": "ui.mahjong.PlayerBasicInfoUI" } }, { "type": "Label", "props": { "top": 12, "text": "胡牌（清一色，抢杠胡）- 4", "name": "score_details", "left": 120, "fontSize": 18, "font": "Microsoft YaHei", "color": "#22d1e8" } }, { "type": "Image", "props": { "width": 30, "skin": "common/score/fail_sign.png", "right": 50, "height": 10, "centerY": 20 } }, { "type": "Image", "props": { "width": 30, "skin": "common/score/fail_score_4.png", "right": 20, "height": 50, "centerY": 20 } }, { "type": "JieSuanHandCardFull", "props": { "left": 120, "bottom": 0, "runtime": "ui.mahjong.JieSuanHandCardFullUI" } }] };
        mahjong.JieSuanPlayer2UI = JieSuanPlayer2UI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var JieSuanPlayer4UI = (function (_super) {
            __extends(JieSuanPlayer4UI, _super);
            function JieSuanPlayer4UI() {
                return _super.call(this) || this;
            }
            JieSuanPlayer4UI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardSelfHandGreenUI", ui.mahjong.SingleCardSelfHandGreenUI);
                View.regComponent("ui.mahjong.PlayerBasicInfoUI", ui.mahjong.PlayerBasicInfoUI);
                View.regComponent("ui.mahjong.CardGroupSelfPengUI", ui.mahjong.CardGroupSelfPengUI);
                View.regComponent("ui.mahjong.CardGroupSelfDianGangUI", ui.mahjong.CardGroupSelfDianGangUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.JieSuanPlayer4UI.uiView);
            };
            return JieSuanPlayer4UI;
        }(View));
        JieSuanPlayer4UI.uiView = { "type": "View", "props": { "width": 1166, "height": 140 }, "child": [{ "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "handcard0", "left": 86, "bottom": 0, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "handcard1", "left": 150, "bottom": 0, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "handcard2", "left": 214, "bottom": 0, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "handcard3", "left": 278, "bottom": 0, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "handcard4", "left": 342, "bottom": 0, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "handcard5", "left": 406, "bottom": 0, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "handcard6", "left": 470, "bottom": 0, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "SingleCardSelfHandGreen", "props": { "visible": false, "name": "handcard7", "left": 534, "bottom": 0, "runtime": "ui.mahjong.SingleCardSelfHandGreenUI" } }, { "type": "PlayerBasicInfo", "props": { "y": 9, "x": 0, "name": "player_info", "centerY": 0, "runtime": "ui.mahjong.PlayerBasicInfoUI" } }, { "type": "Label", "props": { "top": 15, "text": "胡牌（清一色，抢杠胡）-4", "name": "score_details", "left": 97, "fontSize": 15, "font": "Microsoft YaHei", "color": "#22d1e8" } }, { "type": "Image", "props": { "width": 30, "skin": "common/score/fail_sign.png", "right": 50, "height": 10, "centerY": -20 } }, { "type": "Image", "props": { "width": 30, "skin": "common/score/fail_score_4.png", "right": 20, "height": 50, "centerY": -20 } }, { "type": "CardGroupSelfPeng", "props": { "y": 56, "x": 810, "runtime": "ui.mahjong.CardGroupSelfPengUI" } }, { "type": "CardGroupSelfDianGang", "props": { "y": 40, "x": 616, "runtime": "ui.mahjong.CardGroupSelfDianGangUI" } }, { "type": "Image", "props": { "skin": "mahjong/result/zi_mo.png", "right": -30, "bottom": -10 } }] };
        mahjong.JieSuanPlayer4UI = JieSuanPlayer4UI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var PaoZiUI = (function (_super) {
            __extends(PaoZiUI, _super);
            function PaoZiUI() {
                return _super.call(this) || this;
            }
            PaoZiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.PaoZiUI.uiView);
            };
            return PaoZiUI;
        }(View));
        PaoZiUI.uiView = { "type": "View", "props": { "y": 0, "width": 1334, "name": "layer_paozi", "height": 750 }, "child": [{ "type": "Image", "props": { "skin": "common/desk/btn_green.png", "scaleY": 0.7, "scaleX": 0.7, "name": "0", "centerX": -400, "bottom": 100 }, "child": [{ "type": "Label", "props": { "text": "0", "name": "paozi", "fontSize": 50, "color": "#FFFFFF", "centerY": -10, "centerX": 0 } }] }, { "type": "Image", "props": { "skin": "common/desk/btn_green.png", "scaleY": 0.7, "scaleX": 0.7, "name": "1", "centerX": -200, "bottom": 100 }, "child": [{ "type": "Label", "props": { "text": "1", "name": "paozi", "fontSize": 50, "color": "#FFFFFF", "centerY": -10, "centerX": 0 } }] }, { "type": "Image", "props": { "skin": "common/desk/btn_green.png", "scaleY": 0.7, "scaleX": 0.7, "name": "2", "centerX": 0, "bottom": 100 }, "child": [{ "type": "Label", "props": { "text": "2", "name": "paozi", "fontSize": 50, "color": "#FFFFFF", "centerY": -10, "centerX": 0 } }] }, { "type": "Image", "props": { "skin": "common/desk/btn_green.png", "scaleY": 0.7, "scaleX": 0.7, "name": "3", "centerX": 200, "bottom": 100 }, "child": [{ "type": "Label", "props": { "text": "3", "name": "paozi", "fontSize": 50, "color": "#FFFFFF", "centerY": -10, "centerX": 0 } }] }, { "type": "Image", "props": { "skin": "common/desk/btn_green.png", "scaleY": 0.7, "scaleX": 0.7, "name": "4", "centerX": 400, "bottom": 100 }, "child": [{ "type": "Label", "props": { "text": "4", "name": "paozi", "fontSize": 50, "color": "#FFFFFF", "centerY": -10, "centerX": 0 } }] }] };
        mahjong.PaoZiUI = PaoZiUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var PlayerBasicInfoUI = (function (_super) {
            __extends(PlayerBasicInfoUI, _super);
            function PlayerBasicInfoUI() {
                return _super.call(this) || this;
            }
            PlayerBasicInfoUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.PlayerBasicInfoUI.uiView);
            };
            return PlayerBasicInfoUI;
        }(View));
        PlayerBasicInfoUI.uiView = { "type": "View", "props": { "width": 86, "height": 122 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "player/icon_bg.png", "name": "bg" } }, { "type": "Image", "props": { "y": 12, "x": 12, "skin": "player/icon.png", "name": "head" } }, { "type": "Image", "props": { "y": 0, "x": 0, "visible": false, "skin": "player/banker.png", "name": "zhuang" } }, { "type": "Label", "props": { "y": 82, "x": 0, "width": 86, "text": "我的昵称", "name": "nickname", "height": 20, "fontSize": 15, "color": "#deb40d", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 102, "x": 0, "width": 86, "text": "135", "name": "score", "height": 20, "fontSize": 18, "color": "#f4f2eb", "bold": false, "align": "center" } }, { "type": "Image", "props": { "y": 48, "x": 0, "visible": false, "skin": "player/jiao_ting.png", "name": "ting" } }, { "type": "Image", "props": { "visible": false, "top": -5, "skin": "player/jiao_pao_zi.png", "right": -5, "name": "paozi" }, "child": [{ "type": "Label", "props": { "top": 15, "text": "0炮", "name": "label", "left": 10, "color": "#8e0112" } }] }, { "type": "Label", "props": { "visible": false, "top": 60, "text": "离线", "right": 0, "name": "offline", "fontSize": 12, "color": "#FFFFFF", "bold": true, "bgColor": "#000000" } }] };
        mahjong.PlayerBasicInfoUI = PlayerBasicInfoUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var PlayerBasicInfosUI = (function (_super) {
            __extends(PlayerBasicInfosUI, _super);
            function PlayerBasicInfosUI() {
                return _super.call(this) || this;
            }
            PlayerBasicInfosUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.PlayerBasicInfoUI", ui.mahjong.PlayerBasicInfoUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.PlayerBasicInfosUI.uiView);
            };
            return PlayerBasicInfosUI;
        }(View));
        PlayerBasicInfosUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1334, "name": "layer_player", "height": 750 }, "child": [{ "type": "PlayerBasicInfo", "props": { "name": "view_player_self", "left": 30, "bottom": 120, "runtime": "ui.mahjong.PlayerBasicInfoUI" } }, { "type": "PlayerBasicInfo", "props": { "right": 10, "name": "view_player_next", "centerY": 0, "runtime": "ui.mahjong.PlayerBasicInfoUI" } }, { "type": "PlayerBasicInfo", "props": { "name": "view_player_pre", "left": 10, "centerY": 0, "runtime": "ui.mahjong.PlayerBasicInfoUI" } }, { "type": "PlayerBasicInfo", "props": { "top": 30, "right": 80, "name": "view_player_opposite", "runtime": "ui.mahjong.PlayerBasicInfoUI" } }] };
        mahjong.PlayerBasicInfosUI = PlayerBasicInfosUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var SelfOperationsUI = (function (_super) {
            __extends(SelfOperationsUI, _super);
            function SelfOperationsUI() {
                return _super.call(this) || this;
            }
            SelfOperationsUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.SelfOperationsUI.uiView);
            };
            return SelfOperationsUI;
        }(View));
        SelfOperationsUI.uiView = { "type": "View", "props": { "width": 1334, "name": "layer_summary", "height": 750 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/desk/oper_guo.png", "right": 200, "bottom": 110 } }, { "type": "Image", "props": { "skin": "mahjong/desk/oper_chi.png", "right": 328, "bottom": 110 } }, { "type": "Image", "props": { "skin": "mahjong/desk/oper_peng.png", "right": 456, "bottom": 110 } }, { "type": "Image", "props": { "skin": "mahjong/desk/oper_gang.png", "right": 584, "bottom": 110 } }, { "type": "Image", "props": { "skin": "mahjong/desk/oper_hu.png", "right": 712, "bottom": 110 } }] };
        mahjong.SelfOperationsUI = SelfOperationsUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var SetResultUI = (function (_super) {
            __extends(SetResultUI, _super);
            function SetResultUI() {
                return _super.call(this) || this;
            }
            SetResultUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.JieSuanPlayerUI", ui.mahjong.JieSuanPlayerUI);
                View.regComponent("ui.mahjong.JieSuanPlayer1UI", ui.mahjong.JieSuanPlayer1UI);
                View.regComponent("ui.mahjong.JieSuanPlayer2UI", ui.mahjong.JieSuanPlayer2UI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.SetResultUI.uiView);
            };
            return SetResultUI;
        }(Dialog));
        SetResultUI.uiView = { "type": "Dialog", "props": { "width": 1166, "height": 720 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/result/bg.png", "name": "bg" } }, { "type": "Image", "props": { "skin": "common/desk/btn_continue.png", "name": "continue", "centerX": 0, "bottom": 20 } }, { "type": "Image", "props": { "y": -20, "skin": "mahjong/result/set_end.png", "name": "title", "centerX": 0 } }, { "type": "JieSuanPlayer", "props": { "visible": false, "top": 60, "name": "player_set_result_0", "left": 0, "runtime": "ui.mahjong.JieSuanPlayerUI" } }, { "type": "JieSuanPlayer1", "props": { "visible": false, "top": 200, "name": "player_set_result_1", "left": 0, "runtime": "ui.mahjong.JieSuanPlayer1UI" } }, { "type": "JieSuanPlayer2", "props": { "visible": false, "top": 340, "name": "player_set_result_2", "left": 0, "runtime": "ui.mahjong.JieSuanPlayer2UI" } }, { "type": "JieSuanPlayer2", "props": { "visible": false, "top": 480, "name": "player_set_result_3", "left": 0, "runtime": "ui.mahjong.JieSuanPlayer2UI" } }, { "type": "Label", "props": { "top": 10, "text": "陕西麻将 局 3/8", "name": "set_description", "left": 10, "fontSize": 20, "color": "#deb40d" } }, { "type": "Label", "props": { "top": 10, "text": "2019-03-08 21:38:09", "right": 10, "name": "set_time", "fontSize": 20, "color": "#deb40d" } }] };
        mahjong.SetResultUI = SetResultUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var SetResultPlayerUI = (function (_super) {
            __extends(SetResultPlayerUI, _super);
            function SetResultPlayerUI() {
                return _super.call(this) || this;
            }
            SetResultPlayerUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.PlayerBasicInfoUI", ui.mahjong.PlayerBasicInfoUI);
                View.regComponent("ui.mahjong.JieSuanHandCardFullUI", ui.mahjong.JieSuanHandCardFullUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.SetResultPlayerUI.uiView);
            };
            return SetResultPlayerUI;
        }(View));
        SetResultPlayerUI.uiView = { "type": "View", "props": { "width": 1166, "height": 140 }, "child": [{ "type": "PlayerBasicInfo", "props": { "name": "basic_info", "left": 20, "centerY": 0, "runtime": "ui.mahjong.PlayerBasicInfoUI" } }, { "type": "Label", "props": { "top": 12, "text": "胡牌（清一色，抢杠胡）+12", "name": "score_details", "left": 120, "fontSize": 18, "font": "Microsoft YaHei", "color": "#22d1e8" } }, { "type": "Image", "props": { "skin": "common/score/win_sign.png", "scaleY": 1.818, "scaleX": 1.905, "right": 80, "centerY": -20 } }, { "type": "Image", "props": { "skin": "common/score/win_score_1.png", "scaleY": 1.923, "scaleX": 2.5, "right": 50, "centerY": -20 } }, { "type": "Image", "props": { "skin": "common/score/win_score_2.png", "scaleY": 2, "scaleX": 2, "right": 20, "centerY": -20 } }, { "type": "Image", "props": { "y": 65, "skin": "mahjong/result/hu_pai.png", "right": -30, "name": "extra_info" } }, { "type": "JieSuanHandCardFull", "props": { "name": "player_cards", "left": 120, "bottom": 0, "runtime": "ui.mahjong.JieSuanHandCardFullUI" } }] };
        mahjong.SetResultPlayerUI = SetResultPlayerUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var SingleCardLandscapeGreenUI = (function (_super) {
            __extends(SingleCardLandscapeGreenUI, _super);
            function SingleCardLandscapeGreenUI() {
                return _super.call(this) || this;
            }
            SingleCardLandscapeGreenUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.SingleCardLandscapeGreenUI.uiView);
            };
            return SingleCardLandscapeGreenUI;
        }(View));
        SingleCardLandscapeGreenUI.uiView = { "type": "View", "props": { "width": 38, "height": 54 }, "child": [{ "type": "Image", "props": { "width": 38, "skin": "mahjong/card/self_group_plate_green.png", "name": "plate", "height": 54 } }, { "type": "Image", "props": { "width": 38, "visible": false, "skin": "mahjong/card/self_group_16.png", "name": "card", "height": 54 } }, { "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/jiao_bao1.png", "scaleY": 0.6, "scaleX": 0.6, "right": 0, "name": "jiao_right_top" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/jiao_ting.png", "scaleY": 0.5, "scaleX": 0.5, "name": "jiao_left_bottom", "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_disabled.png", "name": "grey" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_ting.png", "name": "focus" } }] };
        mahjong.SingleCardLandscapeGreenUI = SingleCardLandscapeGreenUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var SingleCardNextGreenUI = (function (_super) {
            __extends(SingleCardNextGreenUI, _super);
            function SingleCardNextGreenUI() {
                return _super.call(this) || this;
            }
            SingleCardNextGreenUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.SingleCardNextGreenUI.uiView);
            };
            return SingleCardNextGreenUI;
        }(View));
        SingleCardNextGreenUI.uiView = { "type": "View", "props": { "width": 45, "height": 38 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/card/horizon_plate_green.png", "name": "plate" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/next_14.png", "name": "card" } }, { "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/jiao_bao1.png", "scaleY": 0.6, "scaleX": 0.6, "right": 0, "name": "jiao_right_top" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/jiao_ting.png", "scaleY": 0.5, "scaleX": 0.5, "name": "jiao_left_bottom", "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/horizon_disabled.png", "name": "grey" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/horizon_ting.png", "name": "focus" } }] };
        mahjong.SingleCardNextGreenUI = SingleCardNextGreenUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var SingleCardPreGreenUI = (function (_super) {
            __extends(SingleCardPreGreenUI, _super);
            function SingleCardPreGreenUI() {
                return _super.call(this) || this;
            }
            SingleCardPreGreenUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.SingleCardPreGreenUI.uiView);
            };
            return SingleCardPreGreenUI;
        }(View));
        SingleCardPreGreenUI.uiView = { "type": "View", "props": { "width": 45, "height": 38 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/card/horizon_plate_green.png", "name": "plate" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_36.png", "name": "card" } }, { "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/jiao_bao1.png", "scaleY": 0.6, "scaleX": 0.6, "right": 0, "name": "jiao_right_top" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/jiao_ting.png", "scaleY": 0.5, "scaleX": 0.5, "name": "jiao_left_bottom", "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/horizon_disabled.png", "name": "grey" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/horizon_ting.png", "name": "focus" } }] };
        mahjong.SingleCardPreGreenUI = SingleCardPreGreenUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var SingleCardSelfGroupGreenUI = (function (_super) {
            __extends(SingleCardSelfGroupGreenUI, _super);
            function SingleCardSelfGroupGreenUI() {
                return _super.call(this) || this;
            }
            SingleCardSelfGroupGreenUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.SingleCardSelfGroupGreenUI.uiView);
            };
            return SingleCardSelfGroupGreenUI;
        }(View));
        SingleCardSelfGroupGreenUI.uiView = { "type": "View", "props": { "width": 60, "height": 84 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/card/self_group_plate_green.png", "name": "plate" } }, { "type": "Image", "props": { "width": 60, "skin": "mahjong/card/self_group_34.png", "name": "card", "height": 84 } }, { "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/jiao_bao1.png", "right": 0, "name": "jiao_right_top" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/jiao_ting.png", "name": "jiao_left_bottom", "left": 0, "bottom": 0 } }] };
        mahjong.SingleCardSelfGroupGreenUI = SingleCardSelfGroupGreenUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var SingleCardSelfHandGreenUI = (function (_super) {
            __extends(SingleCardSelfHandGreenUI, _super);
            function SingleCardSelfHandGreenUI() {
                return _super.call(this) || this;
            }
            SingleCardSelfHandGreenUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.SingleCardSelfHandGreenUI.uiView);
            };
            return SingleCardSelfHandGreenUI;
        }(View));
        SingleCardSelfHandGreenUI.uiView = { "type": "View", "props": { "width": 66, "height": 94 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/card/self_hand_plate_green.png", "name": "plate", "centerY": 0, "centerX": 0 } }, { "type": "Image", "props": { "skin": "mahjong/card/self_hand_45.png", "name": "card" } }, { "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/jiao_bao1.png", "right": 0, "name": "jiao_right_top" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/jiao_ting.png", "name": "jiao_left_bottom", "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "width": 66, "visible": false, "skin": "mahjong/card/landscape_disabled.png", "name": "grey", "height": 94 } }, { "type": "Image", "props": { "width": 66, "visible": false, "skin": "mahjong/card/landscape_ting.png", "name": "focus", "height": 94 } }] };
        mahjong.SingleCardSelfHandGreenUI = SingleCardSelfHandGreenUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
(function (ui) {
    var mahjong;
    (function (mahjong) {
        var TingCardsUI = (function (_super) {
            __extends(TingCardsUI, _super);
            function TingCardsUI() {
                return _super.call(this) || this;
            }
            TingCardsUI.prototype.createChildren = function () {
                View.regComponent("ui.mahjong.SingleCardLandscapeGreenUI", ui.mahjong.SingleCardLandscapeGreenUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.TingCardsUI.uiView);
            };
            return TingCardsUI;
        }(View));
        TingCardsUI.uiView = { "type": "View", "props": { "width": 873, "height": 340 }, "child": [{ "type": "Image", "props": { "width": 873, "skin": "mahjong/desk/bg_ting.png", "name": "bg", "height": 340, "bottom": 0 } }, { "type": "SingleCardLandscapeGreen", "props": { "name": "1_0", "centerX": -370, "bottom": 20, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "1_1", "centerX": -280, "bottom": 20, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "1_2", "centerX": -190, "bottom": 20, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "1_3", "centerX": -100, "bottom": 20, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "1_4", "centerX": -10, "bottom": 20, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "1_5", "centerX": 80, "bottom": 20, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "1_6", "centerX": 170, "bottom": 20, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "1_7", "centerX": 260, "bottom": 20, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "1_8", "centerX": 350, "bottom": 20, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2_0", "centerX": -370, "bottom": 100, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2_1", "centerX": -280, "bottom": 100, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2_2", "centerX": -190, "bottom": 100, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2_3", "centerX": -100, "bottom": 100, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2_4", "centerX": -10, "bottom": 100, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2_5", "centerX": 80, "bottom": 100, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2_6", "centerX": 170, "bottom": 100, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2_7", "centerX": 260, "bottom": 100, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "2_8", "centerX": 350, "bottom": 100, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3_0", "centerX": -370, "bottom": 180, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3_1", "centerX": -280, "bottom": 180, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3_2", "centerX": -190, "bottom": 180, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3_3", "centerX": -100, "bottom": 180, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3_4", "centerX": -10, "bottom": 180, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3_5", "centerX": 80, "bottom": 180, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3_6", "centerX": 170, "bottom": 180, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3_7", "centerX": 260, "bottom": 180, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "3_8", "centerX": 350, "bottom": 180, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "4_0", "centerX": -370, "bottom": 260, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "4_1", "centerX": -280, "bottom": 260, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "4_2", "centerX": -190, "bottom": 260, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "4_3", "centerX": -100, "bottom": 260, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "4_4", "centerX": -10, "bottom": 260, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "4_5", "centerX": 80, "bottom": 260, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "4_6", "centerX": 170, "bottom": 260, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "4_7", "centerX": 260, "bottom": 260, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }, { "type": "SingleCardLandscapeGreen", "props": { "name": "4_8", "centerX": 350, "bottom": 260, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" }, "child": [{ "type": "Label", "props": { "text": "×2", "name": "num", "left": 40, "fontSize": 20, "color": "#FFFFFF", "bottom": 10 } }] }] };
        mahjong.TingCardsUI = TingCardsUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map