var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common;
(function (common) {
    var play;
    (function (play) {
        var view;
        (function (view) {
            var Handler = Laya.Handler;
            /*
             *  玩家基本信息显示
             */
            var PlayerBasicView = (function (_super) {
                __extends(PlayerBasicView, _super);
                function PlayerBasicView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.playerUIs = {};
                    _this.deskController = deskController;
                    return _this;
                }
                // 返回指定玩家的基本信息UI对象
                PlayerBasicView.prototype.getUI = function (uid) {
                    var playerUI = this.playerUIs[uid];
                    if (!playerUI) {
                        playerUI = new ui.mahjong.PlayerBasicInfoUI();
                        this.playerUIs[uid] = playerUI;
                    }
                    return playerUI;
                };
                PlayerBasicView.prototype.showAll = function () {
                    var _this = this;
                    console.log("common.play.view.PlayerBasicView.showAll");
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/player.atlas"
                    ], Handler.create(this, function () {
                        var players = _this.deskController.getDeskDetail().getAllPlayers();
                        for (var uid in players) {
                            _this.showSingle(uid);
                        }
                    }));
                };
                PlayerBasicView.prototype.show = function (player) {
                    this.showSingle(player.user.uid);
                };
                // 显示指定玩家基本信息
                PlayerBasicView.prototype.showSingle = function (uid) {
                    var deskDetail = this.deskController.getDeskDetail();
                    var player = deskDetail.getPlayer(uid);
                    var playerUI = this.getUI(uid);
                    // 昵称
                    var labelName = playerUI.getChildByName("nickname");
                    labelName.changeText(player.user.nkn);
                    // 分数
                    // let total = 0;
                    // basicInfo.points.forEach(point => total += point);
                    var labelPoint = playerUI.getChildByName("score");
                    labelPoint.changeText(player.total);
                    // 庄家
                    var zhuang = playerUI.getChildByName("zhuang");
                    zhuang.visible = deskDetail.isBanker(uid);
                    // 显示
                    this.showComponent(playerUI, this.getAttrs(player));
                };
                // 删除一名玩家基本信息
                PlayerBasicView.prototype.removeSingle = function (uid) {
                    console.log("common.play.view.PlayerBasicView.removeSingle", uid);
                    var playerUI = this.playerUIs[uid];
                    this.removeComponent(playerUI);
                    // if(basicInfoUI) {
                    //     console.log("common.view.PlayerBasicView.removeSingle@basicInfoUI found", uid);
                    //     Laya.stage.removeChild(basicInfoUI);
                    // }
                };
                /**
                 * 显示指定庄家
                 * @param bankerId
                 */
                PlayerBasicView.prototype.showBanker = function (bankerId) {
                    var playerUI = this.getUI(bankerId);
                    if (!playerUI)
                        return;
                    var zhuang = playerUI.getChildByName("zhuang");
                    zhuang.visible = true;
                    console.log("common.play.view.PlayerBasicView.showBanker@id", bankerId);
                };
                return PlayerBasicView;
            }(common.view.ComponentView));
            view.PlayerBasicView = PlayerBasicView;
        })(view = play.view || (play.view = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=PlayerBasicView.js.map