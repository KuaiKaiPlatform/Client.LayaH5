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
            /**
             *  玩家基本信息显示
             */
            var PlayerBasicView = (function (_super) {
                __extends(PlayerBasicView, _super);
                function PlayerBasicView(deskController) {
                    return _super.call(this, deskController) || this;
                }
                PlayerBasicView.prototype.getAttrs = function (player) {
                    var deskController = this.deskController;
                    switch (deskController.findPosition(player)) {
                        case mahjong.play.Position.SELF:
                            return PlayerBasicView.SELF;
                        case mahjong.play.Position.NEXT:
                            return PlayerBasicView.NEXT;
                        case mahjong.play.Position.OPPOSITE:
                            return PlayerBasicView.OPPOSITE;
                        case mahjong.play.Position.PREVIOUS:
                            return PlayerBasicView.PREVIOUS;
                    }
                };
                PlayerBasicView.prototype.showSingle = function (uid) {
                    _super.prototype.showSingle.call(this, uid);
                    this.showTing(uid);
                    if (this.deskController.getDeskDetail().getSettingBool("xiaZhu"))
                        this.showBet(uid);
                };
                /**
                 * 显示隐藏听牌角标
                 * @param uid
                 */
                PlayerBasicView.prototype.showTing = function (uid) {
                    var playerUI = this.getUI(uid);
                    if (!playerUI)
                        return;
                    var ting = playerUI.getChildByName("ting");
                    var playerSetInfo = null;
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    if (gameSetInfo) {
                        playerSetInfo = gameSetInfo.getPlayerSetInfo();
                    }
                    ting.visible = playerSetInfo && playerSetInfo.isBaoTing(uid);
                    console.log("mahjong.play.view.PlayerBasicView.showTing", uid, ting.visible);
                };
                PlayerBasicView.prototype.showBet = function (uid) {
                    var playerUI = this.getUI(uid);
                    var player = this.deskController.getDeskDetail().getPlayer(uid);
                    if (player.prepared) {
                        PlayerBasicView.showBet(playerUI, player.bet);
                    }
                    else {
                        PlayerBasicView.hideBet(playerUI);
                    }
                };
                /**
                 * 在玩家UI内显示下注数
                 * @param playerUI
                 */
                PlayerBasicView.showBet = function (playerUI, bet) {
                    var paoZiImg = playerUI.getChildByName("paozi");
                    paoZiImg.visible = true;
                    var paoZi = paoZiImg.getChildByName("label");
                    paoZi.changeText(bet + "炮");
                };
                /**
                 * 在玩家UI内隐藏下注数
                 * @param playerUI
                 */
                PlayerBasicView.hideBet = function (playerUI) {
                    var paoZiImg = playerUI.getChildByName("paozi");
                    paoZiImg.visible = false;
                };
                return PlayerBasicView;
            }(common.play.view.PlayerBasicView));
            PlayerBasicView.SELF = {
                left: 30,
                bottom: 120
            };
            PlayerBasicView.NEXT = {
                right: 10,
                centerY: 0
            };
            PlayerBasicView.OPPOSITE = {
                right: 80,
                top: 30
            };
            PlayerBasicView.PREVIOUS = {
                left: 10,
                centerY: 0
            };
            view.PlayerBasicView = PlayerBasicView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=PlayerBasicView.js.map