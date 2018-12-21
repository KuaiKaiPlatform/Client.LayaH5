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
            /**
             *  麻将玩家打出的牌显示
             */
            var PlayerDiscardsView = (function (_super) {
                __extends(PlayerDiscardsView, _super);
                function PlayerDiscardsView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.discardUIs = {};
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
                    var discardUI = this.discardUIs[uid];
                    if (!discardUI) {
                        discardUI = new View();
                        this.discardUIs[uid] = discardUI;
                    }
                    return discardUI;
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
                            var setInfo = setInfos[key];
                            _this.show(setInfo);
                        }
                    }));
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
                PlayerDiscardsView.prototype.show = function (setInfo) {
                    var _this = this;
                    if (!this.check(setInfo))
                        return;
                    var pos = this.deskController.findPositionByUid(setInfo.uid);
                    var discardUI = this.getUI(setInfo.uid);
                    // 遍历并显示每张打出的牌
                    setInfo.discards.forEach(function (discard, index) {
                        _this.addSingleCard(discardUI, pos, index, discard);
                    });
                    // 显示
                    this.showComponent(discardUI, this.getAttrs(pos));
                };
                /**
                 * 增加一张指定玩家打出的牌
                 */
                PlayerDiscardsView.prototype.add = function (uid, index, discard) {
                    var pos = this.deskController.findPositionByUid(uid);
                    var discardUI = this.getUI(uid);
                    this.addSingleCard(discardUI, pos, index, discard);
                };
                /**
                 * 增加一张指定位置玩家打出的牌
                 */
                PlayerDiscardsView.prototype.addSingleCard = function (discardUI, pos, index, discard) {
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            this.addSelf(discardUI, index, discard);
                            break;
                        case mahjong.play.Position.NEXT:
                            this.addNext(discardUI, index, discard);
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            this.addOpposite(discardUI, index, discard);
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            this.addPre(discardUI, index, discard);
                            break;
                    }
                };
                /**
                 * 增加一张自己打出的牌
                 */
                PlayerDiscardsView.prototype.addSelf = function (discardUI, index, discard) {
                    var GlobalSetting = common.data.GlobalSetting;
                    console.log("PlayerDiscardsView.addSelf@adding", index, discard);
                    var singleCard = view.SingleCardFactory.createLandscapeDiscard(GlobalSetting.get("mahjongTheme"), discard);
                    singleCard.x = 39 * (index % 9);
                    singleCard.y = 45 * Math.floor(index / 9);
                    discardUI.addChild(singleCard);
                };
                /**
                 * 增加一张对家打出的牌
                 */
                PlayerDiscardsView.prototype.addOpposite = function (discardUI, index, discard) {
                    var GlobalSetting = common.data.GlobalSetting;
                    console.log("PlayerDiscardsView.addOpposite@adding", index, discard);
                    var singleCard = view.SingleCardFactory.createLandscapeDiscard(GlobalSetting.get("mahjongTheme"), discard);
                    singleCard.right = 39 * (index % 9);
                    singleCard.bottom = 45 * Math.floor(index / 9);
                    singleCard.zOrder = 1000 - index;
                    discardUI.addChild(singleCard);
                };
                /**
                 * 增加一张下家打出的牌
                 */
                PlayerDiscardsView.prototype.addNext = function (discardUI, index, discard) {
                    var GlobalSetting = common.data.GlobalSetting;
                    console.log("PlayerDiscardsView.addNext@adding", index, discard);
                    var singleCard = view.SingleCardFactory.createNextCard(GlobalSetting.get("mahjongTheme"), discard);
                    singleCard.left = 45 * Math.floor(index / 9);
                    singleCard.bottom = 27 * (index % 9);
                    singleCard.zOrder = 1000 - index;
                    discardUI.addChild(singleCard);
                };
                /**
                 * 增加一张上家打出的牌
                 */
                PlayerDiscardsView.prototype.addPre = function (discardUI, index, discard) {
                    var GlobalSetting = common.data.GlobalSetting;
                    console.log("PlayerDiscardsView.addPre@adding", index, discard);
                    var singleCard = view.SingleCardFactory.createPreCard(GlobalSetting.get("mahjongTheme"), discard);
                    singleCard.right = 45 * Math.floor(index / 9);
                    singleCard.top = 27 * (index % 9);
                    discardUI.addChild(singleCard);
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