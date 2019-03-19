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
             *  麻将玩家明牌（吃、碰、杠）显示
             */
            var PlayerCardGroupsView = (function (_super) {
                __extends(PlayerCardGroupsView, _super);
                function PlayerCardGroupsView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.playerUIs = {};
                    _this.deskController = deskController;
                    return _this;
                }
                PlayerCardGroupsView.prototype.getAttrs = function (pos) {
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            return PlayerCardGroupsView.SELF;
                        case mahjong.play.Position.NEXT:
                            return PlayerCardGroupsView.NEXT;
                        case mahjong.play.Position.OPPOSITE:
                            return PlayerCardGroupsView.OPPOSITE;
                        case mahjong.play.Position.PREVIOUS:
                            return PlayerCardGroupsView.PREVIOUS;
                    }
                };
                /**
                 * 返回指定玩家的明牌UI对象
                 */
                PlayerCardGroupsView.prototype.getUI = function (uid) {
                    var playerUI = this.playerUIs[uid];
                    if (!playerUI) {
                        playerUI = new View();
                        this.playerUIs[uid] = playerUI;
                    }
                    return playerUI;
                };
                /**
                 * 显示所有玩家明牌
                 */
                PlayerCardGroupsView.prototype.showAll = function () {
                    var _this = this;
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/mahjong/card.atlas"
                    ], Handler.create(this, function () {
                        var setInfos = _this.deskController.getGameSetInfo().getPlayerSetInfo().getAll();
                        for (var uid in setInfos) {
                            _this.show(uid);
                        }
                    }));
                };
                /**
                 * 检查指定玩家是否有明牌
                 */
                PlayerCardGroupsView.prototype.check = function (setInfo) {
                    var cardGroups = setInfo.cardGroups;
                    if (!cardGroups || cardGroups.length == 0) {
                        console.log("PlayerCardGroupsView.check@card groups empty", setInfo.uid);
                        return false;
                    }
                    return true;
                };
                /**
                 * 显示一名玩家明牌
                 */
                PlayerCardGroupsView.prototype.show = function (uid) {
                    var _this = this;
                    var setInfo = this.deskController.getGameSetInfo().getPlayerSetInfo().getByUid(uid);
                    if (!this.check(setInfo))
                        return;
                    var pos = this.deskController.findPositionByUid(uid);
                    var playerUI = this.getUI(uid);
                    // 遍历并显示各组明牌
                    setInfo.cardGroups.forEach(function (cardGroup, index) {
                        _this.addCardGroup(playerUI, pos, index, cardGroup);
                    });
                    // 显示
                    this.showComponent(playerUI, this.getAttrs(pos));
                };
                /**
                 * 增加一组指定玩家明牌
                 */
                PlayerCardGroupsView.prototype.add = function (uid, index, cardGroup) {
                    var pos = this.deskController.findPositionByUid(uid);
                    var playerUI = this.getUI(uid);
                    this.addCardGroup(playerUI, pos, index, cardGroup);
                };
                /**
                 * 增加一组指定位置玩家明牌
                 */
                PlayerCardGroupsView.prototype.addCardGroup = function (playerUI, pos, index, cardGroup) {
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            this.addSelf(playerUI, index, cardGroup);
                            break;
                        case mahjong.play.Position.NEXT:
                            this.addNext(playerUI, index, cardGroup);
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            this.addOpposite(playerUI, index, cardGroup);
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            this.addPre(playerUI, index, cardGroup);
                            break;
                    }
                };
                /**
                 * 增加一组自己明牌
                 */
                PlayerCardGroupsView.prototype.addSelf = function (playerUI, index, cardGroup) {
                    var GlobalSetting = common.data.GlobalSetting;
                    console.log("PlayerCardGroupsView.addSelf@adding", index, JSON.stringify(cardGroup));
                    var groupView = view.CardGroupFactory.createSelfGroup(GlobalSetting.get("mahjongTheme"), cardGroup);
                    groupView.left = 200 * index;
                    groupView.bottom = 0;
                    playerUI.addChild(groupView);
                };
                /**
                 * 增加一组对家明牌
                 */
                PlayerCardGroupsView.prototype.addOpposite = function (playerUI, index, cardGroup) {
                    var GlobalSetting = common.data.GlobalSetting;
                    console.log("PlayerCardGroupsView.addOpposite@adding", index, JSON.stringify(cardGroup));
                    var groupView = view.CardGroupFactory.createOppositeGroup(GlobalSetting.get("mahjongTheme"), cardGroup);
                    groupView.right = 127 * index;
                    groupView.bottom = 0;
                    playerUI.addChild(groupView);
                };
                /**
                 * 增加一组下家明牌
                 */
                PlayerCardGroupsView.prototype.addNext = function (playerUI, index, cardGroup) {
                    var GlobalSetting = common.data.GlobalSetting;
                    console.log("PlayerCardGroupsView.addNext@adding", index, JSON.stringify(cardGroup));
                    var groupView = view.CardGroupFactory.createNextGroup(GlobalSetting.get("mahjongTheme"), cardGroup);
                    groupView.bottom = 99 * index;
                    playerUI.addChild(groupView);
                };
                /**
                 * 增加一组上家明牌
                 */
                PlayerCardGroupsView.prototype.addPre = function (playerUI, index, cardGroup) {
                    var GlobalSetting = common.data.GlobalSetting;
                    console.log("PlayerCardGroupsView.addPre@adding", index, JSON.stringify(cardGroup));
                    var groupView = view.CardGroupFactory.createPreGroup(GlobalSetting.get("mahjongTheme"), cardGroup);
                    groupView.top = 99 * index;
                    playerUI.addChild(groupView);
                };
                /**
                 * 清空所有玩家明牌
                 */
                PlayerCardGroupsView.prototype.clearAll = function () {
                    for (var uid in this.playerUIs) {
                        var playerUI = this.playerUIs[uid];
                        playerUI.destroyChildren();
                        this.removeComponent(playerUI);
                    }
                };
                return PlayerCardGroupsView;
            }(common.view.ComponentView));
            PlayerCardGroupsView.SELF = {
                centerX: -140,
                bottom: 10,
                width: 780,
                height: 100
            };
            PlayerCardGroupsView.NEXT = {
                right: 180,
                centerY: 60,
                width: 45,
                height: 389
            };
            PlayerCardGroupsView.OPPOSITE = {
                centerX: 88,
                top: 10,
                width: 495,
                height: 64
            };
            PlayerCardGroupsView.PREVIOUS = {
                left: 180,
                centerY: -60,
                width: 45,
                height: 389
            };
            view.PlayerCardGroupsView = PlayerCardGroupsView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=PlayerCardGroupsView.js.map