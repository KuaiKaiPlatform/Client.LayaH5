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
                    return _this;
                }
                DeskView.prototype.show = function () {
                    _super.prototype.show.call(this);
                    this.directionView.show();
                };
                // 设置背景
                DeskView.prototype.setBg = function () {
                    console.log("DeskView.setBg");
                    var imgBg = new Laya.Sprite();
                    imgBg.loadImage("mahjong/desk/bg.png");
                    Laya.stage.addChild(imgBg);
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
                return DeskView;
            }(common.play.view.DeskView));
            view.DeskView = DeskView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=DeskView.js.map