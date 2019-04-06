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
            var Image = Laya.Image;
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
                DirectionView.prototype.showAll = function (posFocus) {
                    var _this = this;
                    console.log("mahjong.play.view.DirectionView.showAll");
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/mahjong/desk.atlas"
                    ], Handler.create(this, function () {
                        _this.show(posFocus);
                        // 有 focus 在最近一次操作者上，启动倒计时读秒
                        if (posFocus >= mahjong.play.Position.SELF) {
                            _this.launchCountDown();
                        }
                    }));
                };
                DirectionView.prototype.onSetInit = function (setInit) {
                    if (setInit.lastOperDetail && setInit.lastOperDetail.uid) {
                        this.showAll(this.deskController.findPositionByUid(setInit.lastOperDetail.uid));
                    }
                    else {
                        this.showAll(-1);
                    }
                };
                DirectionView.prototype.clear = function () {
                    this.removeComponent(this.deskCenterUI);
                };
                DirectionView.prototype.initDeskCenterUI = function () {
                    if (this.deskCenterUI)
                        return this.deskCenterUI;
                    this.deskCenterUI = new ui.mahjong.DeskCenterUI();
                    return this.deskCenterUI;
                };
                // 显示方位
                DirectionView.prototype.show = function (posFocus) {
                    console.log("mahjong.play.view.DirectionView.show@start");
                    this.initDeskCenterUI();
                    this.clear();
                    // 显示各玩家方位
                    this.showDirections();
                    // 显示当前操作者，-1表示无操作者
                    this.showCurrentFocusByPos(posFocus);
                    this.showComponent(this.deskCenterUI, {
                        centerX: 0,
                        centerY: 0
                    });
                };
                /**
                 * 显示当前操作者
                 */
                DirectionView.prototype.showCurrentFocus = function (uid) {
                    this.showCurrentFocusByPos(this.deskController.findPositionByUid(uid));
                };
                /**
                 * 显示当前操作者，-1表示无操作者
                 */
                DirectionView.prototype.showCurrentFocusByPos = function (posFocus) {
                    var Position = mahjong.play.Position;
                    for (var member in Position) {
                        //console.log("mahjong.play.view.DirectionView.showCurrentFocus@member", member);
                        var pos = parseInt(member, 10);
                        if (isNaN(pos)) {
                            continue;
                        }
                        var focusImg = void 0;
                        switch (pos) {
                            case mahjong.play.Position.SELF:
                                focusImg = this.deskCenterUI.getChildByName("focus_self");
                                break;
                            case mahjong.play.Position.NEXT:
                                focusImg = this.deskCenterUI.getChildByName("focus_next");
                                break;
                            case mahjong.play.Position.OPPOSITE:
                                focusImg = this.deskCenterUI.getChildByName("focus_oppo");
                                break;
                            case mahjong.play.Position.PREVIOUS:
                                focusImg = this.deskCenterUI.getChildByName("focus_pre");
                                break;
                        }
                        focusImg.visible = (pos === posFocus);
                        if (pos === posFocus)
                            console.log("mahjong.play.view.DirectionView.showCurrentFocus@pos", posFocus, focusImg.name);
                    }
                };
                /**
                 * 显示各玩家方位
                 */
                DirectionView.prototype.showDirections = function () {
                    // 优先使用 setInfo 中的 direction，否则使用 seat 座位顺序作为 direction
                    var selfDirection = this.deskController.getDeskDetail().getPlayer(Login.getUid()).seat;
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    if (gameSetInfo) {
                        var setInfo = gameSetInfo.getPlayerSetInfo().getByUid(Login.getUid());
                        selfDirection = setInfo.direction;
                    }
                    console.log("mahjong.play.view.DirectionView.showDirections@self direction", selfDirection);
                    var centerDirectionsView = this.deskCenterUI.getChildByName("center_directions");
                    var Position = mahjong.play.Position;
                    for (var member in Position) {
                        //console.log("mahjong.play.view.DirectionView.showDirections@member", member);
                        var pos = parseInt(member, 10);
                        if (isNaN(pos)) {
                            continue;
                        }
                        var direction = selfDirection + pos;
                        direction = direction > 4 ? (direction - 4) : direction;
                        var dirImg = this.getDirectionImage(centerDirectionsView, pos);
                        this.changeSkinForDirection(dirImg, direction);
                    }
                };
                /**
                 * 获得一名玩家的方位图标
                 * @param uid
                 */
                DirectionView.prototype.getDirectionImage = function (centerDirectionsView, pos) {
                    var dirImg;
                    switch (pos) {
                        case mahjong.play.Position.SELF:
                            dirImg = centerDirectionsView.getChildByName("dir_self");
                            break;
                        case mahjong.play.Position.NEXT:
                            dirImg = centerDirectionsView.getChildByName("dir_next");
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            dirImg = centerDirectionsView.getChildByName("dir_oppo");
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            dirImg = centerDirectionsView.getChildByName("dir_pre");
                            break;
                    }
                    return dirImg;
                };
                DirectionView.prototype.changeSkinForDirection = function (dirImg, direction) {
                    var Direction = Protocol.getEnum("mahjong.Direction");
                    switch (direction) {
                        case Direction.DONG:
                            dirImg.skin = (DirectionView.IMG_PATH_DONG);
                            break;
                        case Direction.NAN:
                            dirImg.skin = (DirectionView.IMG_PATH_NAN);
                            break;
                        case Direction.XI:
                            dirImg.skin = (DirectionView.IMG_PATH_XI);
                            break;
                        case Direction.BEI:
                            dirImg.skin = (DirectionView.IMG_PATH_BEI);
                            break;
                    }
                };
                /**
                 * 启动倒计时读秒
                 *
                 */
                DirectionView.prototype.launchCountDown = function () {
                    var count = this.deskController.getDeskDetail().getSetting().operDelaySeconds;
                    if (!count)
                        return;
                    if (count <= 2)
                        return;
                    this.startCountDown(count - 2); // 延迟2秒
                };
                /**
                 * 启动倒计时读秒
                 *
                 */
                DirectionView.prototype.startCountDown = function (count) {
                    Laya.timer.clearAll(this);
                    this.showCountDown(count);
                    if (count > 0)
                        Laya.timer.once(1000, this, this.startCountDown, [count - 1]);
                };
                /**
                 * 显示倒计时指定秒数
                 */
                DirectionView.prototype.showCountDown = function (count) {
                    this.hideCountDown();
                    var countFirst;
                    var countSecond;
                    if (count < 10) {
                        countFirst = new Image("mahjong/desk/count_" + count + ".png");
                    }
                    else {
                        countFirst = new Image("mahjong/desk/count_" + Math.floor(count / 10) + ".png");
                        countSecond = new Image("mahjong/desk/count_" + count % 10 + ".png");
                    }
                    if (countFirst) {
                        if (countSecond) {
                            countFirst.centerX = count == 11 ? -7 : -10;
                            countFirst.centerY = 0;
                        }
                        else {
                            countFirst.centerX = 0;
                            countFirst.centerY = 0;
                        }
                        countFirst.scaleX = 0.9;
                        countFirst.scaleY = 0.9;
                        countFirst.name = DirectionView.COUNT_FIRST;
                        this.deskCenterUI.addChild(countFirst);
                    }
                    if (countSecond) {
                        countSecond.centerX = count == 11 ? 7 : 5;
                        countSecond.centerY = 0;
                        countSecond.scaleX = 0.9;
                        countSecond.scaleY = 0.9;
                        countSecond.name = DirectionView.COUNT_SECOND;
                        this.deskCenterUI.addChild(countSecond);
                    }
                };
                /**
                 * 隐藏倒计时读秒
                 */
                DirectionView.prototype.hideCountDown = function () {
                    this.deskCenterUI.removeChildByName(DirectionView.COUNT_FIRST);
                    this.deskCenterUI.removeChildByName(DirectionView.COUNT_SECOND);
                };
                return DirectionView;
            }(common.view.ComponentView));
            DirectionView.IMG_PATH_DONG = "mahjong/desk/dir_dong.png";
            DirectionView.IMG_PATH_NAN = "mahjong/desk/dir_nan.png";
            DirectionView.IMG_PATH_XI = "mahjong/desk/dir_xi.png";
            DirectionView.IMG_PATH_BEI = "mahjong/desk/dir_bei.png";
            DirectionView.COUNT_FIRST = "count_first";
            DirectionView.COUNT_SECOND = "count_second";
            view.DirectionView = DirectionView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=DirectionView.js.map