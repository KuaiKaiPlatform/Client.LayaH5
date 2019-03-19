var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var controller;
        (function (controller) {
            var SoundManager = Laya.SoundManager;
            // 收到麻将服务器消息 SOperCard 后处理出牌操作
            var OperationHandler = (function () {
                function OperationHandler(deskController) {
                    this.deskController = deskController;
                }
                /**
                 * 处理一项出牌操作
                 */
                OperationHandler.prototype.handleOperDetail = function (operDetail) {
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    switch (operDetail.operType) {
                        case OperType.DA:
                            this.handleDa(operDetail);
                            break;
                        case OperType.MO:
                            this.handleMo(operDetail);
                            break;
                        case OperType.PENG:
                            this.handlePeng(operDetail);
                            break;
                        case OperType.BU_GANG:
                            this.handleBuGang(operDetail);
                            break;
                        case OperType.AN_GANG:
                            this.handleAnGang(operDetail);
                            break;
                        case OperType.DIAN_GANG:
                            this.handleDianGang(operDetail);
                            break;
                        case OperType.TING:
                            this.handleTing(operDetail);
                            break;
                        case OperType.HU:
                            this.handleHu(operDetail);
                            break;
                    }
                };
                /**
                 * 处理打牌
                 */
                OperationHandler.prototype.handleDa = function (operDetail) {
                    SoundManager.playSound("res/sounds/mahjong/putong/female/" + operDetail.target + ".mp3");
                    // 修改玩家数据：去掉一张手牌
                    var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                    playerSetInfo.discard(operDetail.uid, operDetail.target);
                    playerSetInfo.setHasMo(operDetail.uid, false);
                    // 显示打出的牌
                    var deskView = this.deskController.getDeskView();
                    deskView.getDiscardsView().add(operDetail.uid, operDetail.target);
                    // 自己打牌
                    if (Login.isSelf(operDetail.uid)) {
                        // 更新手牌和打出的牌数据
                        playerSetInfo.getSelfHandcards().removeCard(operDetail.target);
                        // 显示手牌
                        deskView.getHandCardsView().getSelfHandCardsView().show();
                    }
                    else {
                        // 显示手牌
                        deskView.getHandCardsView().show(operDetail.uid);
                    }
                };
                /**
                 * 处理摸牌
                 */
                OperationHandler.prototype.handleMo = function (operDetail) {
                    var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                    playerSetInfo.setHasMo(operDetail.uid, true);
                    var deskView = this.deskController.getDeskView();
                    if (Login.isSelf(operDetail.uid)) {
                        // 修改玩家数据
                        playerSetInfo.getSelfHandcards().setMoCard(operDetail.target);
                        playerSetInfo.incrHandcardNum(operDetail.uid, 1);
                        // 显示自己摸的牌
                        var pos = mahjong.play.Position.SELF;
                        var handcardUI = deskView.getHandCardsView().getUI(Login.getUid(), pos);
                        deskView.getHandCardsView().getSelfHandCardsView().showSelfMo(handcardUI, operDetail.target);
                    }
                    else {
                        // 修改玩家数据
                        playerSetInfo.incrHandcardNum(operDetail.uid, 1);
                        // 显示别人摸的牌
                        var pos = this.deskController.findPositionByUid(operDetail.uid);
                        var handcardUI = deskView.getHandCardsView().getUI(operDetail.uid, pos);
                        deskView.getHandCardsView().showMoCard(handcardUI, pos);
                    }
                };
                /**
                 * 处理碰牌
                 */
                OperationHandler.prototype.handlePeng = function (operDetail) {
                    SoundManager.playSound("res/sounds/mahjong/putong/female/peng.mp3");
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    var playerSetInfo = gameSetInfo.getPlayerSetInfo();
                    var deskView = this.deskController.getDeskView();
                    var uid = operDetail.uid;
                    // 修改数据：减少手牌数量，增加碰牌
                    playerSetInfo.decrHandcardNum(uid, 2);
                    playerSetInfo.addCardGroup(uid, OperType.PENG, operDetail.target);
                    // 删除最后打出的牌
                    if (!playerSetInfo.removeLastDiscard(gameSetInfo.getLastOperDetail())) {
                        console.error("mahjong.play.controller.OperationHandler.handlePeng@last discard not removed.", JSON.stringify(operDetail));
                    }
                    else {
                        deskView.getDiscardsView().removeLast(gameSetInfo.getLastOperDetail().uid);
                    }
                    if (Login.isSelf(uid)) {
                        // 删除2张手牌
                        playerSetInfo.getSelfHandcards().removeHandcards(operDetail.target, 2);
                    }
                    // 刷新手牌
                    deskView.getHandCardsView().show(uid);
                    // 刷新明牌
                    deskView.getCardGroupsView().show(uid);
                };
                /**
                 * 处理点杠
                 */
                OperationHandler.prototype.handleDianGang = function (operDetail) {
                    SoundManager.playSound("res/sounds/mahjong/putong/female/gang.mp3");
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    var playerSetInfo = gameSetInfo.getPlayerSetInfo();
                    var deskView = this.deskController.getDeskView();
                    var uid = operDetail.uid;
                    // 修改数据：减少手牌数量，增加杠牌
                    playerSetInfo.decrHandcardNum(uid, 3);
                    playerSetInfo.addCardGroup(uid, OperType.DIAN_GANG, operDetail.target);
                    // 删除最后打出的牌
                    if (!playerSetInfo.removeLastDiscard(gameSetInfo.getLastOperDetail())) {
                        console.error("mahjong.play.controller.OperationHandler.handleDianGang@last discard not removed.", JSON.stringify(operDetail));
                    }
                    else {
                        deskView.getDiscardsView().removeLast(gameSetInfo.getLastOperDetail().uid);
                    }
                    if (Login.isSelf(uid)) {
                        // 删除3张手牌
                        playerSetInfo.getSelfHandcards().removeHandcards(operDetail.target, 3);
                    }
                    // 刷新手牌
                    deskView.getHandCardsView().show(uid);
                    // 刷新明牌
                    deskView.getCardGroupsView().show(uid);
                };
                /**
                 * 处理补杠
                 */
                OperationHandler.prototype.handleBuGang = function (operDetail) {
                    SoundManager.playSound("res/sounds/mahjong/putong/female/gang.mp3");
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    var playerSetInfo = gameSetInfo.getPlayerSetInfo();
                    var deskView = this.deskController.getDeskView();
                    var uid = operDetail.uid;
                    // 修改数据：减少手牌数量，删除碰牌，增加杠牌
                    playerSetInfo.decrHandcardNum(uid, 1);
                    playerSetInfo.setHasMo(uid, false);
                    playerSetInfo.removeCardGroup(uid, OperType.PENG, operDetail.target);
                    playerSetInfo.addCardGroup(uid, OperType.BU_GANG, operDetail.target);
                    if (Login.isSelf(uid)) {
                        playerSetInfo.getSelfHandcards().removeCard(operDetail.target);
                    }
                    // 刷新手牌
                    deskView.getHandCardsView().show(uid);
                    // 刷新明牌
                    deskView.getCardGroupsView().show(uid);
                };
                /**
                 * 处理暗杠
                 */
                OperationHandler.prototype.handleAnGang = function (operDetail) {
                    SoundManager.playSound("res/sounds/mahjong/putong/female/an_gang.mp3");
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    var playerSetInfo = gameSetInfo.getPlayerSetInfo();
                    var deskView = this.deskController.getDeskView();
                    var uid = operDetail.uid;
                    // 修改数据：减少手牌数量，增加杠牌
                    playerSetInfo.decrHandcardNum(uid, 4);
                    playerSetInfo.addCardGroup(uid, OperType.AN_GANG, operDetail.target);
                    if (Login.isSelf(uid)) {
                        // 删除4张手牌
                        playerSetInfo.getSelfHandcards().removeHandcards(operDetail.target, 4);
                    }
                    // 刷新手牌
                    deskView.getHandCardsView().show(uid);
                    // 刷新明牌
                    deskView.getCardGroupsView().show(uid);
                };
                /**
                 * 处理听牌
                 */
                OperationHandler.prototype.handleTing = function (operDetail) {
                    SoundManager.playSound("res/sounds/mahjong/putong/female/ting.mp3");
                    // 修改玩家数据：去掉一张手牌
                    // let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
                    // playerSetInfo.discard(operDetail.uid, operDetail.target);
                    // playerSetInfo.setHasMo(operDetail.uid, false);
                    // // 显示打出的牌
                    // let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;
                    // deskView.getDiscardsView().add(operDetail.uid, operDetail.target);
                    // // 自己打牌
                    // if(Login.isSelf(operDetail.uid)) {
                    //     // 更新手牌和打出的牌数据
                    //     playerSetInfo.getSelfHandcards().discard(operDetail.target);
                    //     // 显示手牌
                    //     deskView.getHandCardsView().getSelfHandCardsView().show();
                    // } else {
                    //     // 显示手牌
                    //     deskView.getHandCardsView().show(operDetail.uid);
                    // }
                };
                /**
                 * 处理胡牌
                 */
                OperationHandler.prototype.handleHu = function (operDetail) {
                    if (this.deskController.getGameSetInfo().getLastOperDetail().uid == operDetail.uid) {
                        SoundManager.playSound("res/sounds/mahjong/putong/female/zi_mo.mp3");
                    }
                    else {
                        SoundManager.playSound("res/sounds/mahjong/putong/female/hu.mp3");
                    }
                    var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                    if (Login.isSelf(operDetail.uid)) {
                        // 修改玩家数据
                        playerSetInfo.getSelfHandcards().addHandcard(operDetail.target);
                    }
                    // 修改玩家数据
                    playerSetInfo.incrHandcardNum(operDetail.uid, 1);
                    // 显示胡家手牌
                    var deskView = this.deskController.getDeskView();
                    deskView.getHandCardsView().show(operDetail.uid);
                };
                return OperationHandler;
            }());
            controller.OperationHandler = OperationHandler;
        })(controller = play.controller || (play.controller = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=OperationHandler.js.map