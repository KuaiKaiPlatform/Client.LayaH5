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
            /*
             *  玩家基本信息显示
             */
            var PlayerBasicView = (function (_super) {
                __extends(PlayerBasicView, _super);
                function PlayerBasicView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.basicInfoUIs = {};
                    _this.deskController = deskController;
                    return _this;
                }
                // 返回指定玩家的基本信息UI对象
                PlayerBasicView.prototype.getUI = function (uid) {
                    var basicInfoUI = this.basicInfoUIs[uid];
                    if (!basicInfoUI) {
                        basicInfoUI = new ui.mahjong.PlayerBasicInfoUI();
                        this.basicInfoUIs[uid] = basicInfoUI;
                    }
                    return basicInfoUI;
                };
                PlayerBasicView.prototype.showAll = function () {
                    console.log("PlayerBasicView.showAll");
                    //let players = common.play.model.PlayerInfo.getAll();
                    var players = this.deskController.getDeskDetail().getAllPlayers();
                    for (var key in players) {
                        this.show(players[key]);
                    }
                };
                PlayerBasicView.prototype.show = function (player) {
                    //预加载图集资源
                    // Laya.loader.load([
                    //     "res/atlas/player.atlas"
                    // ], Handler.create(this, () => {
                    //     this.showSingle(player);
                    // }));
                    this.showSingle(player);
                };
                // 显示指定坐标的一名玩家基本信息
                PlayerBasicView.prototype.showSingle = function (player) {
                    var user = player.user;
                    // 玩家基本信息显示
                    var basicInfoUI = this.getUI(user.uid);
                    // 昵称
                    var labelName = basicInfoUI.getChildByName("label_player_name");
                    labelName.changeText(user.nkn);
                    // 分数
                    // let total = 0;
                    // basicInfo.points.forEach(point => total += point);
                    var labelPoint = basicInfoUI.getChildByName("label_player_score");
                    labelPoint.changeText(player.total.toString());
                    // 隐藏角标
                    var jiaoBiao = basicInfoUI.getChildByName("img_player_jiao");
                    jiaoBiao.visible = false;
                    // 显示
                    this.showComponent(basicInfoUI, this.getAttrs(player));
                };
                // 删除一名玩家基本信息
                PlayerBasicView.prototype.removeSingle = function (uid) {
                    console.log("common.view.PlayerBasicView.removeSingle", uid);
                    var basicInfoUI = this.basicInfoUIs[uid];
                    if (basicInfoUI) {
                        console.log("common.view.PlayerBasicView.removeSingle@basicInfoUI found", uid);
                        Laya.stage.removeChild(basicInfoUI);
                    }
                };
                /**
                 * 显示指定庄家
                 * @param bankerId
                 */
                PlayerBasicView.prototype.showBanker = function (bankerId) {
                    console.log("PlayerBasicView.showBanker@id", bankerId);
                    for (var key in this.basicInfoUIs) {
                        console.log("PlayerBasicView.showBanker@processing", key);
                        var basicInfoUI = this.basicInfoUIs[key];
                        var jiaoBiao = basicInfoUI.getChildByName("img_player_jiao");
                        jiaoBiao.visible = (bankerId == parseInt(key)) ? true : false;
                    }
                };
                return PlayerBasicView;
            }(common.view.ComponentView));
            view.PlayerBasicView = PlayerBasicView;
        })(view = play.view || (play.view = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=PlayerBasicView.js.map