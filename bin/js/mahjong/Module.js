var mahjong;
(function (mahjong) {
    var Module = (function () {
        function Module() {
        }
        /**
         * 麻将模块初始化：单例，监听消息等
         */
        Module.init = function () {
            var GameEventDispacher = common.event.GameEventDispacher;
            var GlobalSetting = common.data.GlobalSetting;
            var Protocol = common.pb.Protocol;
            var DeskController = mahjong.play.controller.DeskController;
            var Theme = Protocol.getEnum("common.MahjongTheme");
            DeskController.init();
            mahjong.play.view.SingleCardFactory.init();
            // 牌桌，监听消息
            var messageListener = DeskController.instance.getMessageListener();
            GameEventDispacher.instance.onMsg(Protocol.meta.mahjong.SSetInit, messageListener, messageListener.onSetInit);
            // 牌桌设置
            GlobalSetting.init({
                mahjongTheme: Theme.GREEN
            });
            console.log("mahjong.Module.init@finish");
            return Promise.resolve();
            //预加载图集资源
            // return new Promise((resolve, reject) => {
            // 	Laya.loader.load([
            //         "res/atlas/mahjong/card.atlas"
            //     ], Handler.create(this, () => {
            //         console.log("mahjong.Module.init@finish");
            // 		resolve();
            // 	}));
            // });
        };
        return Module;
    }());
    mahjong.Module = Module;
})(mahjong || (mahjong = {}));
//# sourceMappingURL=Module.js.map