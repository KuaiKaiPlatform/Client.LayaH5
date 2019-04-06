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
             *  麻将玩家可执行操作交互
             */
            var SelfCanOperView = (function (_super) {
                __extends(SelfCanOperView, _super);
                function SelfCanOperView(deskController) {
                    var _this = _super.call(this) || this;
                    _this.operType2Details = {};
                    _this.operViews = []; // 可执行操作UI对象
                    _this.deskController = deskController;
                    // 初始化5个可执行操作 UI 组件
                    for (var i = 0; i < SelfCanOperView.TOTAL_OPERATIONS; i++) {
                        var operView = new Image();
                        _this.operViews[i] = operView;
                    }
                    return _this;
                }
                /**
                 * 显示可执行的操作
                 */
                SelfCanOperView.prototype.show = function (canOperDetails) {
                    var _this = this;
                    console.log("SelfCanOperView.show", JSON.stringify(canOperDetails));
                    this.canOperDetails = canOperDetails;
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/mahjong/desk.atlas"
                    ], Handler.create(this, function () {
                        _this.showAll();
                    }));
                };
                /**
                 * 显示可执行的操作列表
                 */
                SelfCanOperView.prototype.showAll = function () {
                    var _this = this;
                    this.hideAll();
                    // 报听不做操作
                    if (this.deskController.getGameSetInfo().getPlayerSetInfo().isBaoTing(Login.getUid())) {
                        return;
                    }
                    if (!this.canOperDetails || this.canOperDetails.length == 0) {
                        return;
                    }
                    var showGuo = false;
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    this.canOperDetails.reverse().forEach(function (canOperDetail, index) {
                        var imgPath;
                        switch (canOperDetail.operType) {
                            case OperType.CHI:
                                imgPath = SelfCanOperView.IMG_PATH_CHI;
                                break;
                            case OperType.PENG:
                                imgPath = SelfCanOperView.IMG_PATH_PENG;
                                break;
                            case OperType.BU_GANG:
                            case OperType.DIAN_GANG:
                            case OperType.AN_GANG:
                                imgPath = SelfCanOperView.IMG_PATH_GANG;
                                break;
                            case OperType.HU:
                                imgPath = SelfCanOperView.IMG_PATH_HU;
                                break;
                            case OperType.TING:
                                imgPath = SelfCanOperView.IMG_PATH_TING;
                                break;
                            default:
                                console.warn("mahjong.view.SelfCanOperView.showAll@operation not shown", canOperDetail.operType);
                                return;
                        }
                        // 记录 operType 2 details
                        _this.operType2Details[canOperDetail.operType] = canOperDetail;
                        // 显示可执行操作
                        var i = index + 1;
                        var operView = _this.operViews[i];
                        operView.skin = imgPath;
                        operView["operType"] = canOperDetail.operType;
                        operView.on(Laya.Event.CLICK, _this, _this.clickHandler);
                        _this.showComponent(operView, {
                            bottom: 110,
                            right: 200 + 128 * i
                        });
                        showGuo = true;
                        console.log("mahjong.view.SelfCanOperView.showAll@canOperType", canOperDetail.operType);
                    });
                    if (showGuo) {
                        // 有可执行操作，显示过牌
                        var operView = this.operViews[0];
                        operView.loadImage(SelfCanOperView.IMG_PATH_GUO);
                        operView["operType"] = SelfCanOperView.OPER_TYPE_GUO;
                        operView.on(Laya.Event.CLICK, this, this.clickHandler);
                        this.showComponent(operView, {
                            bottom: 110,
                            right: 200
                        });
                    }
                };
                SelfCanOperView.prototype.hideAll = function () {
                    var _this = this;
                    this.operViews.forEach(function (operView, index) {
                        _this.removeComponent(operView);
                    });
                };
                /**
                 * 点击执行操作
                 */
                SelfCanOperView.prototype.clickHandler = function (e) {
                    this.hideAll();
                    var operType = e.target["operType"];
                    var canOperDetail = this.operType2Details[operType];
                    var cOperCard = {};
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    switch (operType) {
                        case SelfCanOperView.OPER_TYPE_GUO:
                            MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.CPassCard, {});
                            break;
                        case OperType.CHI:
                            break;
                        case OperType.PENG:
                        case OperType.BU_GANG:
                        case OperType.DIAN_GANG:
                        case OperType.AN_GANG:
                        case OperType.HU:
                            cOperCard["operDetail"] = {
                                operType: operType,
                                target: canOperDetail.target
                            };
                            MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.COperCard, cOperCard);
                            break;
                        case OperType.TING:
                            this.deskController.getDeskView().getHandCardsView().getSelfHandCardsView().onTingClicked();
                            break;
                        default:
                            console.warn("mahjong.view.SelfCanOperView.clickHandler@operation not shown", operType);
                            break;
                    }
                };
                return SelfCanOperView;
            }(common.view.ComponentView));
            SelfCanOperView.TOTAL_OPERATIONS = 5;
            SelfCanOperView.OPER_TYPE_GUO = 0;
            SelfCanOperView.IMG_PATH_GUO = "mahjong/desk/oper_guo.png";
            SelfCanOperView.IMG_PATH_CHI = "mahjong/desk/oper_chi.png";
            SelfCanOperView.IMG_PATH_PENG = "mahjong/desk/oper_peng.png";
            SelfCanOperView.IMG_PATH_GANG = "mahjong/desk/oper_gang.png";
            SelfCanOperView.IMG_PATH_HU = "mahjong/desk/oper_hu.png";
            SelfCanOperView.IMG_PATH_TING = "mahjong/desk/oper_ting.png";
            view.SelfCanOperView = SelfCanOperView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=SelfCanOperView.js.map