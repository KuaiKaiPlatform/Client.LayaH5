var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        // 牌桌消息监听器
        var MessageListener = (function (_super) {
            __extends(MessageListener, _super);
            function MessageListener(deskController) {
                return _super.call(this, deskController) || this;
            }
            /**
             * 开局或重连后返回牌局消息
             */
            MessageListener.prototype.onSetInit = function (setInit) {
                _super.prototype.onSetInit.call(this, setInit);
                var deskView = this.deskView;
                // 显示庄家
                deskView.getPlayerBasicView().showBanker(setInit.bankerId);
                // 显示手牌
                deskView.getHandCardsView().showAll();
                // 显示明牌
                deskView.getCardGroupsView().showAll();
                // 显示打出的牌
                deskView.getDiscardsView().showAll();
            };
            MessageListener.prototype.toString = function () {
                return "mahjong.play.MessageListener";
            };
            return MessageListener;
        }(common.play.MessageListener));
        play.MessageListener = MessageListener;
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=MessageListener.js.map