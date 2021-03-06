var common;
(function (common) {
    var play;
    (function (play) {
        var view;
        (function (view) {
            /**
             *  牌桌显示
             */
            var DeskView = (function () {
                function DeskView(deskController) {
                    this.deskController = deskController;
                    this.startEffect = new common.play.effect.StartEffect(deskController);
                }
                DeskView.prototype.getPlayerBasicView = function () {
                    return this.playerBasicView;
                };
                DeskView.prototype.getPlayerReadyView = function () {
                    return this.playerReadyView;
                };
                DeskView.prototype.getGameSummaryView = function () {
                    return this.gameSummaryView;
                };
                DeskView.prototype.getDeskMenuView = function () {
                    return this.deskMenuView;
                };
                DeskView.prototype.getStartEffect = function () {
                    return this.startEffect;
                };
                DeskView.prototype.show = function () {
                    // 设置背景
                    this.setBg();
                    // 显示玩家基本信息
                    this.playerBasicView.showAll();
                    // 显示玩家准备状态
                    this.playerReadyView.showAll();
                    // 显示牌桌基本信息
                    this.gameSummaryView.showAll();
                    // 显示牌桌菜单按钮
                    this.deskMenuView.show();
                };
                // 设置背景
                DeskView.prototype.setBg = function () {
                    // Laya.loader.load([
                    //     "res/sounds/bgm.mp3"
                    // ], Laya.Handler.create(this, () => {
                    //     Laya.SoundManager.playMusic("res/sounds/bgm.mp3");
                    // }));
                };
                DeskView.prototype.onPlayerJoin = function (player) {
                    this.playerBasicView.show(player);
                    this.playerReadyView.show(player);
                };
                DeskView.prototype.onPlayerExit = function (uid) {
                    this.playerBasicView.removeSingle(uid);
                    this.playerReadyView.removeSingle(uid);
                };
                return DeskView;
            }());
            view.DeskView = DeskView;
        })(view = play.view || (play.view = {}));
    })(play = common.play || (common.play = {}));
})(common || (common = {}));
//# sourceMappingURL=DeskView.js.map