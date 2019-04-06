var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var view;
        (function (view) {
            var Handler = Laya.Handler;
            var View = Laya.View;
            var Component = Laya.Component;
            /**
             *  麻将玩家打出的牌显示
             */
            var PlayerDiscardsView = (function (_super) {
                __extends(PlayerDiscardsView, _super);
                function PlayerDiscardsView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.playerUIs = {};
                    _this.deskController = deskController;
                    return _this;
                }
                PlayerDiscardsView.prototype.getAttrs = function (pos) {
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            return PlayerDiscardsView.SELF;
                        case mahjong.play.Position.NEXT:
                            return PlayerDiscardsView.NEXT;
                        case mahjong.play.Position.OPPOSITE:
                            return PlayerDiscardsView.OPPOSITE;
                        case mahjong.play.Position.PREVIOUS:
                            return PlayerDiscardsView.PREVIOUS;
                    }
                };
                /**
                 * 返回指定玩家的打出的牌UI对象
                 */
                PlayerDiscardsView.prototype.getUI = function (uid) {
                    var playerUI = this.playerUIs[uid];
                    if (!playerUI) {
                        playerUI = new View();
                        playerUI.zOrder = 900;
                        this.playerUIs[uid] = playerUI;
                        // 显示
                        this.showComponent(playerUI, this.getAttrs(this.deskController.findPositionByUid(uid)));
                    }
                    return playerUI;
                };
                /**
                 * 显示所有玩家打出的牌
                 */
                PlayerDiscardsView.prototype.showAll = function () {
                    var _this = this;
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/mahjong/card.atlas"
                    ], Handler.create(this, function () {
                        var gameSetInfo = _this.deskController.getGameSetInfo();
                        var setInfos = gameSetInfo.getPlayerSetInfo().getAll();
                        for (var key in setInfos) {
                            _this.show(key);
                        }
                    }));
                };
                /**
                 * 清空所有玩家打出的牌
                 */
                PlayerDiscardsView.prototype.clearAll = function () {
                    for (var uid in this.playerUIs) {
                        var playerUI = this.playerUIs[uid];
                        playerUI.destroyChildren();
                        this.removeComponent(playerUI);
                    }
                };
                /**
                 * 检查指定玩家是否有打出的牌
                 */
                PlayerDiscardsView.prototype.check = function (setInfo) {
                    var discards = setInfo.discards;
                    if (!discards || discards.length == 0) {
                        console.log("PlayerDiscardView.showSelf@discards empty", setInfo.uid);
                        return false;
                    }
                    return true;
                };
                /**
                 * 显示一名玩家打出的牌
                 */
                PlayerDiscardsView.prototype.show = function (uid) {
                    var _this = this;
                    var setInfo = this.deskController.getGameSetInfo().getPlayerSetInfo().getByUid(uid);
                    if (!this.check(setInfo))
                        return;
                    var pos = this.deskController.findPositionByUid(uid);
                    var playerUI = this.getUI(uid);
                    // 遍历并显示每张打出的牌
                    setInfo.discards.forEach(function (discard, index) {
                        _this.addSingleCard(playerUI, pos, index, discard, (index + 1) == setInfo.tingDiscardIndex);
                    });
                    // 显示
                    this.showComponent(playerUI, this.getAttrs(pos));
                };
                PlayerDiscardsView.prototype.removeLast = function (uid) {
                    var playerUI = this.getUI(uid);
                    var setInfo = this.deskController.getGameSetInfo().getPlayerSetInfo().getByUid(uid);
                    playerUI.removeChildByName(Number(setInfo.discards.length).toString());
                    this.removeFocus();
                    console.log("mahjong.view.PlayerDiscardsView.removeLast@removing", JSON.stringify(setInfo));
                };
                /**
                 * 显示他人打牌特效
                 */
                PlayerDiscardsView.prototype.showEffect = function (uid, discard) {
                    var pos = this.deskController.findPositionByUid(uid);
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            console.error("Discard effect not applicable for self", uid, discard);
                            return;
                        case mahjong.play.Position.NEXT:
                            this.effectCard = view.SingleCardFactory.createNextCard(discard);
                            this.effectCard.right = 150;
                            this.effectCard.centerY = 0;
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            //this.effectCard = SingleCardFactory.createLandscapeCard(theme, discard);
                            this.effectCard = this.deskController.createLandscapeCard(discard);
                            this.effectCard.top = 50;
                            this.effectCard.centerX = 0;
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            this.effectCard = view.SingleCardFactory.createPreCard(discard);
                            this.effectCard.left = 150;
                            this.effectCard.centerY = 0;
                            break;
                    }
                    this.effectCard.zOrder = 1000;
                    this.effectCard.scaleX = 2;
                    this.effectCard.scaleY = 2;
                    this.showComponent(this.effectCard, null);
                    Laya.timer.once(500, this, this.onEffect, [uid, discard]);
                };
                PlayerDiscardsView.prototype.onEffect = function (uid, discard) {
                    this.removeComponent(this.effectCard);
                    this.add(uid, discard, false);
                };
                /**
                 * 增加一张指定玩家打出的牌
                 */
                PlayerDiscardsView.prototype.add = function (uid, discard, ting) {
                    var pos = this.deskController.findPositionByUid(uid);
                    var playerUI = this.getUI(uid);
                    var setInfo = this.deskController.getGameSetInfo().getPlayerSetInfo().getByUid(uid);
                    this.addSingleCard(playerUI, pos, setInfo.discards.length - 1, discard, ting);
                    this.focus(uid);
                };
                /**
                 * 增加一张指定位置玩家打出的牌
                 */
                PlayerDiscardsView.prototype.addSingleCard = function (playerUI, pos, index, discard, ting) {
                    var singleCard;
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            singleCard = this.addSelf(index, discard);
                            break;
                        case mahjong.play.Position.NEXT:
                            singleCard = this.addNext(index, discard);
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            singleCard = this.addOpposite(index, discard);
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            singleCard = this.addPre(index, discard);
                            break;
                    }
                    if (singleCard) {
                        singleCard.name = index + "";
                        singleCard.getChildByName("focus").visible = ting;
                        playerUI.addChild(singleCard);
                    }
                };
                /**
                 * 增加一张自己打出的牌
                 */
                PlayerDiscardsView.prototype.addSelf = function (index, discard) {
                    var GlobalSetting = common.data.GlobalSetting;
                    console.log("PlayerDiscardsView.addSelf@adding", index, discard);
                    //let singleCard = SingleCardFactory.createLandscapeCard(GlobalSetting.get("mahjongTheme"), discard);
                    var singleCard = this.deskController.createLandscapeCard(discard);
                    singleCard.x = 39 * (index % 9);
                    singleCard.y = 45 * Math.floor(index / 9);
                    singleCard.zOrder = 900;
                    return singleCard;
                };
                /**
                 * 增加一张对家打出的牌
                 */
                PlayerDiscardsView.prototype.addOpposite = function (index, discard) {
                    var GlobalSetting = common.data.GlobalSetting;
                    console.log("PlayerDiscardsView.addOpposite@adding", index, discard);
                    //let singleCard = SingleCardFactory.createLandscapeCard(GlobalSetting.get("mahjongTheme"), discard);
                    var singleCard = this.deskController.createLandscapeCard(discard);
                    singleCard.right = 39 * (index % 9);
                    singleCard.bottom = 45 * Math.floor(index / 9);
                    singleCard.zOrder = 1000 - index;
                    return singleCard;
                };
                /**
                 * 增加一张下家打出的牌
                 */
                PlayerDiscardsView.prototype.addNext = function (index, discard) {
                    console.log("PlayerDiscardsView.addNext@adding", index, discard);
                    var singleCard = view.SingleCardFactory.createNextCard(discard);
                    singleCard.left = 45 * Math.floor(index / 9);
                    singleCard.bottom = 27 * (index % 9);
                    singleCard.zOrder = 1000 - index;
                    return singleCard;
                };
                /**
                 * 增加一张上家打出的牌
                 */
                PlayerDiscardsView.prototype.addPre = function (index, discard) {
                    console.log("PlayerDiscardsView.addPre@adding", index, discard);
                    var singleCard = view.SingleCardFactory.createPreCard(discard);
                    singleCard.right = 45 * Math.floor(index / 9);
                    singleCard.top = 27 * (index % 9);
                    singleCard.zOrder = 900;
                    return singleCard;
                };
                /**
                 * focus 在指定玩家打出的最后一张牌上
                 */
                PlayerDiscardsView.prototype.focus = function (uid) {
                    this.removeFocus();
                    var focusImg = new Component();
                    focusImg.loadImage("mahjong/card/focus.png");
                    focusImg.name = "current_focus";
                    focusImg.scaleX = 0.5;
                    focusImg.scaleY = 0.5;
                    focusImg.zOrder = 900;
                    var pos = this.deskController.findPositionByUid(uid);
                    var index = this.deskController.getGameSetInfo().getPlayerSetInfo().getByUid(uid).discards.length - 1;
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            focusImg.x = 39 * (index % 9) + 9;
                            focusImg.y = 45 * Math.floor(index / 9) - 27;
                            break;
                        case mahjong.play.Position.NEXT:
                            focusImg.left = 45 * Math.floor(index / 9) + 12;
                            focusImg.bottom = 27 * (index % 9) + 38;
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            focusImg.right = 39 * (index % 9) + 9;
                            focusImg.bottom = 45 * Math.floor(index / 9) + 52;
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            focusImg.right = 45 * Math.floor(index / 9) + 12;
                            focusImg.top = 27 * (index % 9) - 26;
                            break;
                    }
                    var playerUI = this.getUI(uid);
                    playerUI.addChild(focusImg);
                };
                /**
                 * 删除 focus
                 */
                PlayerDiscardsView.prototype.removeFocus = function () {
                    for (var uid in this.playerUIs) {
                        this.playerUIs[uid].removeChildByName("current_focus");
                    }
                };
                return PlayerDiscardsView;
            }(common.view.ComponentView));
            PlayerDiscardsView.SELF = {
                centerX: 0,
                centerY: 140,
                width: 351,
                height: 145
            };
            PlayerDiscardsView.NEXT = {
                centerX: 260,
                centerY: 0,
                width: 135,
                height: 254
            };
            PlayerDiscardsView.OPPOSITE = {
                centerX: 0,
                centerY: -140,
                width: 351,
                height: 145
            };
            PlayerDiscardsView.PREVIOUS = {
                centerX: -260,
                centerY: 0,
                width: 135,
                height: 254
            };
            view.PlayerDiscardsView = PlayerDiscardsView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=PlayerDiscardsView.js.map