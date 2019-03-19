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
             *  麻将玩家下注界面
             */
            var SelfBetView = (function (_super) {
                __extends(SelfBetView, _super);
                function SelfBetView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.deskController = deskController;
                    return _this;
                }
                SelfBetView.prototype.getUI = function () {
                    if (this.betView)
                        return this.betView;
                    this.betView = new ui.mahjong.PaoZiUI();
                    this.betView.getChildByName("0").on(Laya.Event.CLICK, this, this.clickHandler);
                    this.betView.getChildByName("1").on(Laya.Event.CLICK, this, this.clickHandler);
                    this.betView.getChildByName("2").on(Laya.Event.CLICK, this, this.clickHandler);
                    this.betView.getChildByName("3").on(Laya.Event.CLICK, this, this.clickHandler);
                    this.betView.getChildByName("4").on(Laya.Event.CLICK, this, this.clickHandler);
                    return this.betView;
                };
                /**
                 * 显示下注界面
                 */
                SelfBetView.prototype.show = function () {
                    var _this = this;
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/common/desk.atlas"
                    ], Handler.create(this, function () {
                        _this.showAll();
                    }));
                };
                /**
                 * 显示下注界面
                 */
                SelfBetView.prototype.showAll = function () {
                    var betView = this.getUI();
                    this.showComponent(betView, {});
                };
                SelfBetView.prototype.hide = function () {
                    this.removeComponent(this.betView);
                };
                /**
                 * 点击执行操作
                 */
                SelfBetView.prototype.clickHandler = function (e) {
                    this.hide();
                    console.log("mahjong.play.view.SelfBetView.clickHandler", e.target["name"]);
                    MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.CBet, {
                        bet: parseInt(e.target["name"])
                    });
                };
                return SelfBetView;
            }(common.view.ComponentView));
            view.SelfBetView = SelfBetView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=SelfBetView.js.map