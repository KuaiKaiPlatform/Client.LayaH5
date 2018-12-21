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
            /*
             *  麻将牌桌菜单按钮显示
             */
            var DeskMenuView = (function (_super) {
                __extends(DeskMenuView, _super);
                function DeskMenuView(deskController) {
                    return _super.call(this, deskController) || this;
                }
                DeskMenuView.prototype.getSettingAttrs = function () {
                    return {
                        right: 10,
                        top: 10,
                        scaleX: 0.7,
                        scaleY: 0.7
                    };
                };
                DeskMenuView.prototype.getExitAttrs = function () {
                    return {
                        right: 10,
                        bottom: 10,
                        scaleX: 0.47,
                        scaleY: 0.47
                    };
                };
                DeskMenuView.prototype.getMessageAttrs = function () {
                    return {
                        right: 10,
                        bottom: 220,
                        scaleX: 0.9,
                        scaleY: 0.9
                    };
                };
                DeskMenuView.prototype.getVoiceAttrs = function () {
                    return {
                        right: 15,
                        bottom: 150
                    };
                };
                return DeskMenuView;
            }(common.play.view.DeskMenuView));
            view.DeskMenuView = DeskMenuView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=DeskMenuView.js.map