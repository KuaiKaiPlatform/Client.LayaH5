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
             * 陕西麻将整场牌局结果显示
             */
            var SXMJGameResultDialog = (function (_super) {
                __extends(SXMJGameResultDialog, _super);
                function SXMJGameResultDialog(deskController, sGameResult) {
                    return _super.call(this, deskController, sGameResult) || this;
                }
                SXMJGameResultDialog.prototype.showPlayerStats = function (playerGameResult, playerUI) {
                    var _this = this;
                    this.mapPlayerStats(playerGameResult);
                    var PlayerStatType = Protocol.getEnum("mahjong.PlayerStatType");
                    var statTypes = [
                        PlayerStatType.ZI_MO,
                        PlayerStatType.JIE_PAO,
                        PlayerStatType.DIAN_PAO,
                        PlayerStatType.MING_GANG,
                        PlayerStatType.AN_GANG
                    ];
                    statTypes.forEach(function (statType, index) {
                        var labelStatType = playerUI.getChildByName("stat_" + index);
                        labelStatType.changeText(_this.getStatTypeDisplayName(statType));
                        labelStatType.visible = true;
                        var labelStatVal = playerUI.getChildByName("stat_val_" + index);
                        var stat = playerGameResult.stats[statType];
                        labelStatVal.changeText(stat ? stat.val : 0);
                        labelStatVal.visible = true;
                    });
                };
                return SXMJGameResultDialog;
            }(mahjong.play.view.GameResultDialog));
            view.SXMJGameResultDialog = SXMJGameResultDialog;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=SXMJGameResultDialog.js.map