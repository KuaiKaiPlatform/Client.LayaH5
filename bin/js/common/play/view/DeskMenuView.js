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
            var Component = laya.ui.Component;
            /**
             * 牌桌菜单按钮显示
             */
            var DeskMenuView = (function (_super) {
                __extends(DeskMenuView, _super);
                function DeskMenuView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.settingSprite = new Component();
                    _this.messageSprite = new Component();
                    _this.voiceSprite = new Component();
                    _this.exitSprite = new Component();
                    _this.deskController = deskController;
                    return _this;
                }
                DeskMenuView.prototype.show = function () {
                    var _this = this;
                    console.log("common.play.view.DeskMenuView.show");
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/common/desk.atlas"
                    ], Handler.create(this, function () {
                        _this.showSetting();
                        _this.showExit();
                        _this.showMessage();
                        _this.showVoice();
                    }));
                };
                // 显示设置按钮
                DeskMenuView.prototype.showSetting = function () {
                    this.showSprite(this.settingSprite, "common/desk/setting.png", this.getSettingAttrs());
                };
                // 显示退出按钮
                DeskMenuView.prototype.showExit = function () {
                    this.showSprite(this.exitSprite, "common/desk/exit.png", this.getExitAttrs());
                };
                // 显示消息按钮
                DeskMenuView.prototype.showMessage = function () {
                    this.showSprite(this.messageSprite, "common/desk/message.png", this.getMessageAttrs());
                };
                // 显示语音按钮
                DeskMenuView.prototype.showVoice = function () {
                    this.showSprite(this.voiceSprite, "common/desk/voice.png", this.getVoiceAttrs());
                };
                DeskMenuView.prototype.showSprite = function (sprite, path, attrs) {
                    sprite.loadImage(path);
                    this.showComponent(sprite, attrs);
                };
                return DeskMenuView;
            }(common.view.ComponentView));
            view.DeskMenuView = DeskMenuView;
        })(view = play.view || (play.view = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=DeskMenuView.js.map