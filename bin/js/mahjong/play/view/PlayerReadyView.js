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
            /**
             *  玩家准备状态显示
             */
            var PlayerReadyView = (function (_super) {
                __extends(PlayerReadyView, _super);
                function PlayerReadyView(deskController) {
                    return _super.call(this, deskController) || this;
                }
                PlayerReadyView.prototype.getAttrs = function (player) {
                    var deskController = this.deskController;
                    switch (deskController.findPosition(player)) {
                        case mahjong.play.Position.SELF:
                            return PlayerReadyView.SELF;
                        case mahjong.play.Position.NEXT:
                            return PlayerReadyView.NEXT;
                        case mahjong.play.Position.OPPOSITE:
                            return PlayerReadyView.OPPOSITE;
                        case mahjong.play.Position.PREVIOUS:
                            return PlayerReadyView.PREVIOUS;
                    }
                };
                /**
                 * 触发准备
                 */
                PlayerReadyView.prototype.onPrepare = function (e) {
                    var _this = this;
                    _super.prototype.onPrepare.call(this, e);
                    // 模拟：2秒后收到开局消息
                    setTimeout(function () {
                        _this.deskController.getMessageListener().onSetInit({
                            userInfos: [{
                                    uid: 100860,
                                    bet: -1,
                                    handCardNum: 2,
                                    handcards: [45, 34],
                                    discards: [15, 21, 47, 19, 33, 23, 46, 45, 13, 35, 23, 34],
                                    cardGroups: [{
                                            operType: 40,
                                            cards: [23, 23],
                                            target: 23
                                        }, {
                                            operType: 30,
                                            cards: [19, 17],
                                            target: 18
                                        }, {
                                            operType: 60,
                                            cards: [44, 44, 44],
                                            target: 44
                                        }, {
                                            operType: 50,
                                            cards: [36, 36, 36],
                                            target: 36
                                        }]
                                }, {
                                    uid: 100861,
                                    bet: -1,
                                    handCardNum: 2,
                                    discards: [39, 41, 25, 36, 47, 17, 11, 42, 13, 46, 19, 33, 23],
                                    cardGroups: [{
                                            operType: 40,
                                            cards: [32, 32],
                                            target: 32
                                        }, {
                                            operType: 60,
                                            cards: [19, 19, 19],
                                            target: 19
                                        }, {
                                            operType: 50,
                                            cards: [29, 29, 29],
                                            target: 29
                                        }, {
                                            operType: 70,
                                            cards: [42, 42, 42],
                                            target: 42
                                        }]
                                }, {
                                    uid: 100862,
                                    bet: -1,
                                    handCardNum: 2,
                                    discards: [11, 28, 25, 22, 39, 42, 16, 24, 47, 41, 21, 23, 32, 42],
                                    cardGroups: [{
                                            operType: 40,
                                            cards: [16, 16],
                                            target: 16
                                        }, {
                                            operType: 50,
                                            cards: [32, 32, 32],
                                            target: 32
                                        }, {
                                            operType: 60,
                                            cards: [42, 42, 42],
                                            target: 42
                                        }, {
                                            operType: 70,
                                            cards: [14, 14, 14],
                                            target: 14
                                        }]
                                }, {
                                    uid: 100863,
                                    bet: -1,
                                    handCardNum: 10,
                                    discards: [43, 17, 35, 36, 21, 29, 44, 12, 11, 16, 24, 28, 39, 31, 42],
                                    cardGroups: [{
                                            operType: 70,
                                            cards: [43, 43, 43],
                                            target: 43
                                        }]
                                }],
                            curSet: 1,
                            remainCards: 84,
                            bankerId: 100862,
                            stage: 0
                        });
                    }, 2000);
                };
                return PlayerReadyView;
            }(common.play.view.PlayerReadyView));
            PlayerReadyView.SELF = {
                centerX: 0,
                centerY: 280,
                scaleX: 0.5,
                scaleY: 0.5
            };
            PlayerReadyView.NEXT = {
                centerX: 400,
                centerY: 0,
                scaleX: 0.5,
                scaleY: 0.5
            };
            PlayerReadyView.OPPOSITE = {
                centerX: 0,
                centerY: -280,
                scaleX: 0.5,
                scaleY: 0.5
            };
            PlayerReadyView.PREVIOUS = {
                centerX: -400,
                centerY: 0,
                scaleX: 0.5,
                scaleY: 0.5
            };
            view.PlayerReadyView = PlayerReadyView;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=PlayerReadyView.js.map