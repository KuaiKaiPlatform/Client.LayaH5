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
            /**
             * 麻将牌桌中心方位显示 ui.mahjong.DeskCenterUI
             */
            var DirectionView = (function (_super) {
                __extends(DirectionView, _super);
                function DirectionView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.deskController = deskController;
                    return _this;
                }
                DirectionView.prototype.show = function () {
                    var _this = this;
                    console.log("DirectionView.show");
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/mahjong/desk.atlas"
                    ], Handler.create(this, function () {
                        _this.showDirection();
                    }));
                };
                // 显示方位
                DirectionView.prototype.showDirection = function () {
                    console.log("mahjong.play.view.DirectionView.showDirection@Showing desk center");
                    if (!this.deskCenterUI)
                        this.deskCenterUI = new ui.mahjong.DeskCenterUI();
                    this.showComponent(this.deskCenterUI, {
                        centerX: 0,
                        centerY: 0
                    });
                };
                return DirectionView;
            }(common.view.ComponentView));
            view.DirectionView = DirectionView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=DirectionView.js.map