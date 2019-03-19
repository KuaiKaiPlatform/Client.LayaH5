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
             *  麻将牌桌显示
             */
            var DeskView = (function (_super) {
                __extends(DeskView, _super);
                function DeskView(deskController) {
                    var _this = _super.call(this, deskController) || this;
                    _this.playerBasicView = new mahjong.play.view.PlayerBasicView(deskController);
                    _this.playerReadyView = new mahjong.play.view.PlayerReadyView(deskController);
                    _this.gameSummaryView = new mahjong.play.view.GameSummaryView(deskController);
                    _this.deskMenuView = new mahjong.play.view.DeskMenuView(deskController);
                    _this.directionView = new mahjong.play.view.DirectionView(deskController);
                    _this.discardsView = new mahjong.play.view.PlayerDiscardsView(deskController);
                    _this.handCardsView = new mahjong.play.view.PlayerHandCardsView(deskController);
                    _this.cardGroupsView = new mahjong.play.view.PlayerCardGroupsView(deskController);
                    _this.selfCanOperView = new view.SelfCanOperView(deskController);
                    return _this;
                }
                DeskView.prototype.show = function () {
                    _super.prototype.show.call(this);
                    this.directionView.showAll(-1);
                    //this.getPlayerBasicView().showBanker(this.deskController.getDeskDetail().getBankerId());
                };
                // 设置背景
                DeskView.prototype.setBg = function () {
                    console.log("mahjong.play.view.DeskView.setBg");
                    var imgBg = new Laya.Sprite();
                    imgBg.loadImage("mahjong/desk/bg.png");
                    Laya.stage.addChild(imgBg);
                    _super.prototype.setBg.call(this);
                };
                DeskView.prototype.getGameSummaryView = function () {
                    return this.gameSummaryView;
                };
                DeskView.prototype.getDirectionView = function () {
                    return this.directionView;
                };
                DeskView.prototype.getDiscardsView = function () {
                    return this.discardsView;
                };
                DeskView.prototype.getHandCardsView = function () {
                    return this.handCardsView;
                };
                DeskView.prototype.getCardGroupsView = function () {
                    return this.cardGroupsView;
                };
                DeskView.prototype.getSelfCanOperView = function () {
                    return this.selfCanOperView;
                };
                /**
                 * 关闭一局结算后清理牌桌，回到准备界面，若有下注操作，显示下注界面。
                 * 更新玩家总分，去掉庄家角标，增加局数，隐藏余牌张数。
                 *
                 */
                DeskView.prototype.onSetResultClosed = function () {
                    // 清理牌桌
                    this.discardsView.clearAll();
                    this.handCardsView.clearAll();
                    this.cardGroupsView.clearAll();
                    // 显示下一局庄家
                    // let curSetResult = this.deskController.getDeskDetail().getCurSetResult();
                    // let bankerId = 0;
                    // if(curSetResult) bankerId = curSetResult.nextBankerId;
                    // 更新总分，显示下一局庄家
                    this.playerBasicView.showAll();
                    // 增加局数，隐藏余牌张数
                    this.getGameSummaryView().onSetResultClosed();
                    // 准备界面
                    this.playerReadyView.showAll();
                };
                return DeskView;
            }(common.play.view.DeskView));
            view.DeskView = DeskView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=DeskView.js.map