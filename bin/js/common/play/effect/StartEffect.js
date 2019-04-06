var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common;
(function (common) {
    var play;
    (function (play) {
        var effect;
        (function (effect) {
            var Handler = Laya.Handler;
            var Component = laya.ui.Component;
            /**
             * 开始游戏特效显示
             */
            var StartEffect = (function (_super) {
                __extends(StartEffect, _super);
                function StartEffect(deskController) {
                    var _this = _super.call(this) || this;
                    _this.startSprite = new Component();
                    _this.scaleDelta = 0;
                    _this.deskController = deskController;
                    return _this;
                }
                StartEffect.prototype.show = function () {
                    var _this = this;
                    console.log("common.play.effect.StartEffect.show");
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/common/desk.atlas"
                    ], Handler.create(this, function () {
                        _this.showEffect("common/desk/start.png");
                        Laya.SoundManager.playSound("res/sounds/play/start.mp3");
                    }));
                };
                // 显示开始游戏特效
                StartEffect.prototype.showEffect = function (path) {
                    var sprite = this.startSprite;
                    sprite.loadImage(path);
                    sprite.centerX = 0;
                    sprite.centerY = 0;
                    sprite.zOrder = 1000;
                    this.showComponent(sprite, null);
                    Laya.timer.frameLoop(1, this, this.animate);
                };
                StartEffect.prototype.animate = function (e) {
                    //心跳缩放
                    this.scaleDelta += 0.02;
                    //var scaleValue: number = Math.sin(this.scaleDelta);
                    var scaleValue = this.scaleDelta;
                    this.startSprite.scale(scaleValue, scaleValue);
                    if (this.scaleDelta >= 1.5) {
                        console.log("common.play.effect.StartEffect.animate@clear");
                        Laya.timer.clear(this, this.animate);
                        this.removeComponent(this.startSprite);
                    }
                };
                return StartEffect;
            }(common.view.ComponentView));
            effect.StartEffect = StartEffect;
        })(effect = play.effect || (play.effect = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=StartEffect.js.map