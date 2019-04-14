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
            var Event = Laya.Event;
            var Component = laya.ui.Component;
            /**
             * 玩家准备相关操作和状态显示
             */
            var PlayerReadyView = (function (_super) {
                __extends(PlayerReadyView, _super);
                function PlayerReadyView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.preparedSprites = {};
                    _this.deskController = deskController;
                    return _this;
                }
                /**
                 * 返回指定玩家的准备相关UI对象
                 */
                PlayerReadyView.prototype.getSprite = function (player) {
                    // 准备状态
                    if (player.prepared) {
                        var uid = player.user.uid;
                        var sprite = this.preparedSprites[uid];
                        if (!sprite) {
                            sprite = new Component();
                            this.preparedSprites[uid] = sprite;
                        }
                        sprite.loadImage("common/desk/prepared.png");
                        return sprite;
                    }
                    // 未准备状态，自己显示准备按钮，其他人不显示
                    if (Login.isSelf(player.user.uid)) {
                        if (!this.prepareSprite)
                            this.prepareSprite = new Component();
                        this.prepareSprite.loadImage("common/desk/prepare.png");
                        this.prepareSprite.on(Event.CLICK, this, this.onPrepare);
                        return this.prepareSprite;
                    }
                    return null;
                };
                /**
                 * 触发准备
                 */
                PlayerReadyView.prototype.onPrepare = function (e) {
                    //this.removeSingle(Login.getUid());
                    var selfPlayer = this.deskController.getDeskDetail().getPlayer(Login.getUid());
                    selfPlayer.prepared = true;
                    this.show(selfPlayer);
                    // 不发送准备消息，首局自动准备，此后继续下一局时发送准备
                };
                /**
                 * 显示所有玩家准备状态
                 */
                PlayerReadyView.prototype.showAll = function () {
                    var _this = this;
                    console.log("common.play.view.PlayerReadyView.showAll");
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/common/desk.atlas"
                    ], Handler.create(this, function () {
                        //let GameStatus = Protocol.getEnum("common.GameStatus");
                        if (_this.deskController.getDeskDetail().getStatus() == Laya.Browser.window.common.GameStatus.STARTING) {
                            console.warn("common.play.view.PlayerReadyView.showAll@Game has started.");
                            return;
                        }
                        var players = _this.deskController.getDeskDetail().getAllPlayers();
                        for (var uid in players) {
                            _this.showSingle(uid);
                        }
                    }));
                };
                /**
                 * 显示指定玩家准备状态
                 */
                PlayerReadyView.prototype.show = function (player) {
                    this.showSingle(player.user.uid);
                };
                /**
                 * 显示一名玩家准备状态
                 */
                PlayerReadyView.prototype.showSingle = function (uid) {
                    // 删除所有
                    this.removeSingle(uid);
                    var player = this.deskController.getDeskDetail().getPlayer(uid);
                    // 玩家准备状态显示
                    var sprite = this.getSprite(player);
                    if (!sprite)
                        return;
                    // 显示
                    this.showComponent(sprite, this.getAttrs(player));
                };
                /**
                 * 删除所有玩家准备状态
                 */
                PlayerReadyView.prototype.clearAll = function () {
                    for (var uid in this.preparedSprites) {
                        this.removeComponent(this.preparedSprites[uid]);
                    }
                    this.removeComponent(this.prepareSprite);
                    // let players = this.deskController.getDeskDetail().getAllPlayers();
                    // for(let uid in players) {
                    //     this.removeSingle(uid);
                    // }
                };
                /**
                 * 删除一名玩家准备状态
                 */
                PlayerReadyView.prototype.removeSingle = function (uid) {
                    console.log("common.play.view.PlayerReadyView.removeSingle", uid);
                    var preparedSprite = this.preparedSprites[uid];
                    if (preparedSprite) {
                        console.log("common.play.view.PlayerReadyView.removeSingle@preparedSprite found", uid);
                        this.removeComponent(preparedSprite);
                    }
                    if (Login.isSelf(uid)) {
                        this.removeComponent(this.prepareSprite);
                    }
                };
                return PlayerReadyView;
            }(common.view.ComponentView));
            view.PlayerReadyView = PlayerReadyView;
        })(view = play.view || (play.view = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=PlayerReadyView.js.map