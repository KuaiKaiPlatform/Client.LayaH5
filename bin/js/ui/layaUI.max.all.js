var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
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
        CenterDirectionsUI.uiView = { "type": "View", "props": { "width": 123, "height": 123 }, "child": [{ "type": "Image", "props": { "width": 18, "skin": "mahjong/desk/dong.png", "height": 20, "centerY": 35, "centerX": 0 } }, { "type": "Image", "props": { "width": 18, "skin": "mahjong/desk/nan.png", "height": 20, "centerY": 0, "centerX": 35 } }, { "type": "Image", "props": { "width": 18, "skin": "mahjong/desk/xi.png", "height": 20, "centerY": -35, "centerX": 0 } }, { "type": "Image", "props": { "width": 18, "skin": "mahjong/desk/bei.png", "height": 20, "centerY": 0, "centerX": -35 } }] };
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
                View.regComponent("ui.mahjong.CardGroupSelfPengUI", ui.mahjong.CardGroupSelfPengUI);
                View.regComponent("ui.mahjong.DeskMenuUI", ui.mahjong.DeskMenuUI);
                View.regComponent("ui.mahjong.GameSummaryUI", ui.mahjong.GameSummaryUI);
                View.regComponent("ui.mahjong.DiscardSelfUI", ui.mahjong.DiscardSelfUI);
                View.regComponent("ui.mahjong.DiscardPreUI", ui.mahjong.DiscardPreUI);
                View.regComponent("ui.mahjong.DiscardNextUI", ui.mahjong.DiscardNextUI);
                View.regComponent("ui.mahjong.PlayerBasicInfosUI", ui.mahjong.PlayerBasicInfosUI);
                View.regComponent("ui.mahjong.HandCardAndMoSelfUI", ui.mahjong.HandCardAndMoSelfUI);
                View.regComponent("ui.mahjong.HandCardAndMoOppostieUI", ui.mahjong.HandCardAndMoOppostieUI);
                View.regComponent("ui.mahjong.HandCardAndMoPreUI", ui.mahjong.HandCardAndMoPreUI);
                View.regComponent("ui.mahjong.HandCardAndMoNextUI", ui.mahjong.HandCardAndMoNextUI);
                View.regComponent("ui.mahjong.CardGroupSelfDianGangUI", ui.mahjong.CardGroupSelfDianGangUI);
                View.regComponent("ui.mahjong.DiscardOppositeUI", ui.mahjong.DiscardOppositeUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.mahjong.DeskUI.uiView);
            };
            return DeskUI;
        }(View));
        DeskUI.uiView = { "type": "View", "props": { "x": 0, "name": "view_mahjong_desk" }, "child": [{ "type": "DeskCenter", "props": { "name": "desk_center", "centerY": 0, "centerX": 0, "runtime": "ui.mahjong.DeskCenterUI" } }, { "type": "PlayerBasicInfos", "props": { "name": "player_basic_info", "runtime": "ui.mahjong.PlayerBasicInfosUI" } }, { "type": "DeskMenu", "props": { "name": "desk_menu", "runtime": "ui.mahjong.DeskMenuUI" } }, { "type": "GameSummary", "props": { "name": "game_summary", "runtime": "ui.mahjong.GameSummaryUI" } }, { "type": "DiscardSelf", "props": { "name": "discards_self", "centerY": 140, "centerX": 0, "runtime": "ui.mahjong.DiscardSelfUI" } }, { "type": "DiscardPre", "props": { "name": "discards_pre", "centerY": 0, "centerX": -260, "runtime": "ui.mahjong.DiscardPreUI" } }, { "type": "DiscardNext", "props": { "name": "discards_next", "centerY": 0, "centerX": 260, "runtime": "ui.mahjong.DiscardNextUI" } }, { "type": "DiscardOpposite", "props": { "name": "discards_opposite", "centerY": -140, "centerX": 0, "runtime": "ui.mahjong.DiscardOppositeUI" } }, { "type": "HandCardAndMoSelf", "props": { "name": "handcard_self", "centerX": 0, "bottom": 10, "runtime": "ui.mahjong.HandCardAndMoSelfUI" } }, { "type": "HandCardAndMoOppostie", "props": { "top": 10, "name": "handcard_opposite", "centerX": 0, "runtime": "ui.mahjong.HandCardAndMoOppostieUI" } }, { "type": "HandCardAndMoPre", "props": { "name": "handcard_pre", "left": 180, "centerY": 0, "runtime": "ui.mahjong.HandCardAndMoPreUI" } }, { "type": "HandCardAndMoNext", "props": { "right": 180, "name": "handcard_next", "centerY": 0, "runtime": "ui.mahjong.HandCardAndMoNextUI" } }, { "type": "CardGroupSelfDianGang", "props": { "name": "card_group_self_1", "centerX": -388, "bottom": 10, "runtime": "ui.mahjong.CardGroupSelfDianGangUI" } }, { "type": "CardGroupSelfPeng", "props": { "name": "card_group_self_2", "centerX": -188, "bottom": 10, "runtime": "ui.mahjong.CardGroupSelfPengUI" } }] };
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
        DeskCenterUI.uiView = { "type": "View", "props": { "width": 123, "height": 123 }, "child": [{ "type": "Image", "props": { "width": 123, "skin": "mahjong/desk/direction_bg.png", "height": 123 } }, { "type": "CenterDirections", "props": { "name": "center_directions", "runtime": "ui.mahjong.CenterDirectionsUI" } }, { "type": "Image", "props": { "skin": "mahjong/desk/direction_focus.png", "scaleY": 0.75, "scaleX": 0.75, "centerY": -34, "centerX": 1 } }] };
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
        DiscardNextUI.uiView = { "type": "View", "props": { "width": 135, "height": 254 }, "child": [{ "type": "SingleCardNextGreen", "props": { "right": 90, "name": "1_9", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 27, "right": 90, "name": "1_8", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 54, "name": "1_7", "left": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "x": 0, "top": 81, "name": "1_6", "left": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "x": 0, "top": 108, "name": "1_5", "left": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 135, "name": "1_4", "left": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 162, "name": "1_3", "left": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "name": "1_2", "left": 0, "bottom": 27, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "name": "1_1", "bottom": 0, "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 0, "right": 45, "name": "2_9", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 27, "right": 45, "name": "2_8", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 54, "right": 45, "name": "2_7", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 81, "right": 45, "name": "2_6", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 108, "right": 45, "name": "2_5", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 135, "right": 45, "name": "2_4", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 162, "right": 45, "name": "2_3", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 189, "right": 45, "name": "2_2", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 216, "right": 45, "name": "2_1", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 189, "right": 0, "name": "3_2", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }, { "type": "SingleCardNextGreen", "props": { "top": 216, "right": 0, "name": "3_1", "runtime": "ui.mahjong.SingleCardNextGreenUI" } }] };
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
        DiscardOppositeUI.uiView = { "type": "View", "props": { "width": 351, "height": 145 }, "child": [{ "type": "SingleCardLandscapeGreen", "props": { "right": 0, "name": "3_1", "bottom": 90, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 312, "name": "2_9", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 273, "name": "2_8", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 234, "name": "2_7", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 195, "name": "2_6", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 156, "name": "2_5", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 117, "name": "2_4", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 78, "name": "2_3", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 39, "name": "2_2", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 0, "name": "2_1", "bottom": 45, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 0, "name": "1_1", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 39, "name": "1_2", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 78, "name": "1_3", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 117, "name": "1_4", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 156, "name": "1_5", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 195, "name": "1_6", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 234, "name": "1_7", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 273, "name": "1_8", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "right": 312, "name": "1_9", "bottom": 0, "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }] };
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
        DiscardSelfUI.uiView = { "type": "View", "props": { "width": 351, "height": 145 }, "child": [{ "type": "SingleCardLandscapeGreen", "props": { "name": "1_1", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 39, "name": "1_2", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 78, "name": "1_3", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 117, "name": "1_4", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 156, "name": "1_5", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 195, "name": "1_6", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 234, "name": "1_7", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 273, "name": "1_8", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "x": 312, "name": "1_9", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "visible": false, "name": "2_1", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 39, "name": "2_2", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 78, "name": "2_3", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 117, "name": "2_4", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 156, "name": "2_5", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 195, "name": "2_6", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 234, "name": "2_7", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 273, "name": "2_8", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 45, "x": 312, "name": "2_9", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }, { "type": "SingleCardLandscapeGreen", "props": { "y": 90, "name": "3_1", "runtime": "ui.mahjong.SingleCardLandscapeGreenUI" } }] };
        mahjong.DiscardSelfUI = DiscardSelfUI;
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
        PlayerBasicInfoUI.uiView = { "type": "View", "props": { "width": 86, "height": 122 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "player/icon_bg.png", "name": "img_player_bg" } }, { "type": "Image", "props": { "y": 12, "x": 12, "skin": "player/icon.png", "name": "img_player_head" } }, { "type": "Image", "props": { "y": 0, "x": 0, "visible": false, "skin": "player/banker.png", "name": "img_player_jiao" } }, { "type": "Label", "props": { "y": 82, "x": 0, "width": 86, "text": "我的昵称", "name": "label_player_name", "height": 20, "fontSize": 15, "color": "#deb40d", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 102, "x": 0, "width": 86, "text": "135", "name": "label_player_score", "height": 20, "fontSize": 18, "color": "#f4f2eb", "bold": false, "align": "center" } }] };
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
        SingleCardLandscapeGreenUI.uiView = { "type": "View", "props": { "width": 38, "height": 54 }, "child": [{ "type": "Image", "props": { "width": 38, "skin": "mahjong/card/self_group_plate_green.png", "name": "plate", "height": 54 } }, { "type": "Image", "props": { "width": 38, "visible": false, "skin": "mahjong/card/self_group_16.png", "name": "card", "height": 54 } }, { "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/jiao_bao1.png", "scaleY": 0.6, "scaleX": 0.6, "right": 0, "name": "jiao_right_top" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/jiao_ting.png", "scaleY": 0.5, "scaleX": 0.5, "name": "jiao_left_bottom", "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/landscape_disabled.png", "name": "grey" } }] };
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
        SingleCardNextGreenUI.uiView = { "type": "View", "props": { "width": 45, "height": 38 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/card/horizon_plate_green.png", "name": "plate" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/next_14.png", "name": "card" } }, { "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/jiao_bao1.png", "scaleY": 0.6, "scaleX": 0.6, "right": 0, "name": "jiao_right_top" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/jiao_ting.png", "scaleY": 0.5, "scaleX": 0.5, "name": "jiao_left_bottom", "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/horizon_disabled.png", "name": "grey" } }] };
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
        SingleCardPreGreenUI.uiView = { "type": "View", "props": { "width": 45, "height": 38 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/card/horizon_plate_green.png", "name": "plate" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/pre_36.png", "name": "card" } }, { "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/jiao_bao1.png", "scaleY": 0.6, "scaleX": 0.6, "right": 0, "name": "jiao_right_top" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/jiao_ting.png", "scaleY": 0.5, "scaleX": 0.5, "name": "jiao_left_bottom", "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/horizon_disabled.png", "name": "grey" } }] };
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
        SingleCardSelfHandGreenUI.uiView = { "type": "View", "props": { "width": 66, "height": 94 }, "child": [{ "type": "Image", "props": { "skin": "mahjong/card/self_hand_plate_green.png", "name": "plate", "centerY": 0, "centerX": 0 } }, { "type": "Image", "props": { "skin": "mahjong/card/self_hand_45.png", "name": "card" } }, { "type": "Image", "props": { "visible": false, "top": 0, "skin": "mahjong/card/jiao_bao1.png", "right": 0, "name": "jiao_right_top" } }, { "type": "Image", "props": { "visible": false, "skin": "mahjong/card/jiao_ting.png", "name": "jiao_left_bottom", "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "width": 66, "visible": false, "skin": "mahjong/card/landscape_disabled.png", "name": "grey", "height": 94 } }] };
        mahjong.SingleCardSelfHandGreenUI = SingleCardSelfHandGreenUI;
    })(mahjong = ui.mahjong || (ui.mahjong = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map