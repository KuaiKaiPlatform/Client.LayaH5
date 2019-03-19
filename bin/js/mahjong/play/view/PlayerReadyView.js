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
             *  玩家准备状态显示
             */
            var PlayerReadyView = (function (_super) {
                __extends(PlayerReadyView, _super);
                function PlayerReadyView(deskController) {
                    return _super.call(this, deskController) || this;
                }
                PlayerReadyView.prototype.getAttrs = function (player) {
                    var deskController = this.deskController;
                    switch (deskController.findPosition(player)) {
                        case mahjong.play.Position.SELF:
                            return PlayerReadyView.SELF;
                        case mahjong.play.Position.NEXT:
                            return PlayerReadyView.NEXT;
                        case mahjong.play.Position.OPPOSITE:
                            return PlayerReadyView.OPPOSITE;
                        case mahjong.play.Position.PREVIOUS:
                            return PlayerReadyView.PREVIOUS;
                    }
                };
                /**
                 * 显示一名玩家准备状态：若有下注操作，显示自身下注界面
                 */
                PlayerReadyView.prototype.showSingle = function (uid) {
                    var player = this.deskController.getDeskDetail().getPlayer(uid);
                    var xiaZhu = this.deskController.getDeskDetail().getSettingBool("xiaZhu");
                    if (xiaZhu && !player.prepared && Login.isSelf(uid)) {
                        this.getSelfBetView().show();
                        return;
                    }
                    _super.prototype.showSingle.call(this, uid);
                };
                PlayerReadyView.prototype.getSelfBetView = function () {
                    if (this.selfBetView)
                        return this.selfBetView;
                    this.selfBetView = new view.SelfBetView(this.deskController);
                    return this.selfBetView;
                };
                return PlayerReadyView;
            }(common.play.view.PlayerReadyView));
            PlayerReadyView.SELF = {
                centerX: 0,
                centerY: 280,
                scaleX: 0.5,
                scaleY: 0.5
            };
            PlayerReadyView.NEXT = {
                centerX: 400,
                centerY: 0,
                scaleX: 0.5,
                scaleY: 0.5
            };
            PlayerReadyView.OPPOSITE = {
                centerX: 0,
                centerY: -280,
                scaleX: 0.5,
                scaleY: 0.5
            };
            PlayerReadyView.PREVIOUS = {
                centerX: -400,
                centerY: 0,
                scaleX: 0.5,
                scaleY: 0.5
            };
            view.PlayerReadyView = PlayerReadyView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=PlayerReadyView.js.map