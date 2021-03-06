var mahjong;
(function (mahjong) {
    var Module = (function () {
        function Module() {
        }
        /**
         * 麻将模块初始化：单例，监听消息等
         */
        Module.init = function () {
            var DeskController = mahjong.play.controller.DeskController;
            DeskController.init();
            mahjong.play.view.SingleCardFactory.init();
            // 牌桌，监听消息
            var messageListener = DeskController.instance.getMessageListener();
            GameEventDispacher.instance.onMsg(Protocol.meta.mahjong.SSetInit, messageListener, messageListener.onSetInit);
            GameEventDispacher.instance.onMsg(Protocol.meta.mahjong.SOperCard, messageListener, messageListener.onOperCard);
            GameEventDispacher.instance.onMsg(Protocol.meta.mahjong.SCanOper, messageListener, messageListener.onCanOper);
            GameEventDispacher.instance.onMsg(Protocol.meta.mahjong.SSetResult, messageListener, messageListener.onSetResult);
            GameEventDispacher.instance.onMsg(Protocol.meta.mahjong.SGameResult, messageListener, messageListener.onGameResult);
            GameEventDispacher.instance.onMsg(Protocol.meta.mahjong.SReady, messageListener, messageListener.onReady);
            GameEventDispacher.instance.onMsg(Protocol.meta.mahjong.SBet, messageListener, messageListener.onBet);
            console.log("mahjong.Module.init@finish");
            return Promise.resolve();
        };
        return Module;
    }());
    mahjong.Module = Module;
})(mahjong || (mahjong = {}));
//# sourceMappingURL=Module.js.map