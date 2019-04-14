var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var controller;
        (function (controller) {
            // 收到麻将服务器消息 SOperCard 后处理出牌操作
            var OperationHandler = (function () {
                function OperationHandler(deskController) {
                    this.huEffect = false; // 正在播放胡牌特效，完毕后显示牌局结果
                    this.deskController = deskController;
                }
                /**
                 * 处理一项出牌操作
                 */
                OperationHandler.prototype.handleOperDetail = function (operDetail) {
                    //let OperType = Protocol.getEnum("mahjong.OperType");
                    var OperType = Laya.Browser.window.mahjong.OperType;
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
                    var target = operDetail.target;
                    // 播放声音
                    play.Sound.playCard(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), target, this.deskController.getDeskDetail().getRule());
                    // 修改玩家数据：去掉一张手牌
                    var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                    playerSetInfo.discard(operDetail.uid, target);
                    playerSetInfo.setHasMo(operDetail.uid, false);
                    var deskView = this.deskController.getDeskView();
                    if (Login.isSelf(operDetail.uid)) {
                        // 更新数据
                        playerSetInfo.getSelfHandcards().removeCard(target);
                        // 自己打牌直接显示打出的牌
                        deskView.getDiscardsView().add(operDetail.uid, target, false);
                        // 听牌显示
                        var selfHandCardsView = deskView.getHandCardsView().getSelfHandCardsView();
                        selfHandCardsView.refreshTingCardsView(target, true);
                    }
                    else {
                        // 他人打牌，显示打牌特效
                        deskView.getDiscardsView().showEffect(operDetail.uid, operDetail.target);
                    }
                    // 显示手牌
                    deskView.getHandCardsView().show(operDetail.uid);
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
                    play.Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "peng", this.deskController.getDeskDetail().getRule());
                    //let OperType = Protocol.getEnum("mahjong.OperType");
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    var playerSetInfo = gameSetInfo.getPlayerSetInfo();
                    var deskView = this.deskController.getDeskView();
                    var uid = operDetail.uid;
                    // 修改数据：减少手牌数量，增加碰牌
                    playerSetInfo.decrHandcardNum(uid, 2);
                    playerSetInfo.addCardGroup(uid, Laya.Browser.window.mahjong.OperType.PENG, operDetail.target);
                    // 删除最后打出的牌
                    if (!playerSetInfo.removeLastDiscard(gameSetInfo.getLastOperDetail())) {
                        console.error("mahjong.play.controller.OperationHandler.handlePeng@last discard not removed.", JSON.stringify(operDetail));
                    }
                    else {
                        deskView.getDiscardsView().removeLast(gameSetInfo.getLastOperDetail().uid);
                    }
                    var pos = this.deskController.findPositionByUid(uid);
                    if (pos == mahjong.play.Position.SELF) {
                        // 删除2张手牌
                        playerSetInfo.getSelfHandcards().removeCards(operDetail.target, 2);
                        // 刷新手牌
                        deskView.getHandCardsView().show(uid);
                        // 刷新明牌
                        deskView.getCardGroupsView().show(uid);
                        return;
                    }
                    // 他人碰牌，显示碰牌特效
                    var effectSprite = this.createEffectSprite("mahjong/desk/oper_peng.png", pos);
                    Laya.timer.once(500, this, this.onEffect, [operDetail, effectSprite]);
                };
                /**
                 * 新建特效图：吃碰杠胡听等
                 */
                OperationHandler.prototype.createEffectSprite = function (path, pos) {
                    var sprite = new Laya.Component();
                    sprite.loadImage(path);
                    switch (pos) {
                        case mahjong.play.Position.NEXT:
                            sprite.right = 150;
                            sprite.centerY = 0;
                            break;
                        case mahjong.play.Position.OPPOSITE:
                            sprite.top = 50;
                            sprite.centerX = 0;
                            break;
                        case mahjong.play.Position.PREVIOUS:
                            sprite.left = 150;
                            sprite.centerY = 0;
                            break;
                    }
                    sprite.zOrder = 1000;
                    Laya.stage.addChild(sprite);
                    return sprite;
                };
                /**
                 * 他人吃碰杠牌，显示特效，0.5秒后隐藏特效并刷新手牌和明牌
                 */
                OperationHandler.prototype.onEffect = function (operDetail, effectSprite) {
                    Laya.stage.removeChild(effectSprite);
                    // 刷新手牌
                    this.deskController.getDeskView().getHandCardsView().show(operDetail.uid);
                    // 刷新明牌
                    this.deskController.getDeskView().getCardGroupsView().show(operDetail.uid);
                };
                /**
                 * 处理点杠
                 */
                OperationHandler.prototype.handleDianGang = function (operDetail) {
                    play.Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "gang", this.deskController.getDeskDetail().getRule());
                    //let OperType = Protocol.getEnum("mahjong.OperType");
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    var playerSetInfo = gameSetInfo.getPlayerSetInfo();
                    var deskView = this.deskController.getDeskView();
                    var uid = operDetail.uid;
                    // 修改数据：减少手牌数量，增加杠牌
                    playerSetInfo.decrHandcardNum(uid, 3);
                    playerSetInfo.addCardGroup(uid, Laya.Browser.window.mahjong.OperType.DIAN_GANG, operDetail.target);
                    // 删除最后打出的牌
                    if (!playerSetInfo.removeLastDiscard(gameSetInfo.getLastOperDetail())) {
                        console.error("mahjong.play.controller.OperationHandler.handleDianGang@last discard not removed.", JSON.stringify(operDetail));
                    }
                    else {
                        deskView.getDiscardsView().removeLast(gameSetInfo.getLastOperDetail().uid);
                    }
                    var pos = this.deskController.findPositionByUid(uid);
                    if (pos == mahjong.play.Position.SELF) {
                        // 删除3张手牌
                        playerSetInfo.getSelfHandcards().removeCards(operDetail.target, 3);
                        // 刷新手牌
                        deskView.getHandCardsView().show(uid);
                        // 刷新明牌
                        deskView.getCardGroupsView().show(uid);
                        return;
                    }
                    // 他人杠牌，显示特效
                    var effectSprite = this.createEffectSprite("mahjong/desk/oper_gang.png", pos);
                    Laya.timer.once(500, this, this.onEffect, [operDetail, effectSprite]);
                };
                /**
                 * 处理补杠
                 */
                OperationHandler.prototype.handleBuGang = function (operDetail) {
                    play.Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "gang", this.deskController.getDeskDetail().getRule());
                    //let OperType = Protocol.getEnum("mahjong.OperType");
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    var playerSetInfo = gameSetInfo.getPlayerSetInfo();
                    var deskView = this.deskController.getDeskView();
                    var uid = operDetail.uid;
                    // 修改数据：减少手牌数量，删除碰牌，增加杠牌
                    playerSetInfo.decrHandcardNum(uid, 1);
                    playerSetInfo.setHasMo(uid, false);
                    playerSetInfo.removeCardGroup(uid, Laya.Browser.window.mahjong.OperType.PENG, operDetail.target);
                    playerSetInfo.addCardGroup(uid, Laya.Browser.window.mahjong.OperType.BU_GANG, operDetail.target);
                    var pos = this.deskController.findPositionByUid(uid);
                    if (pos == mahjong.play.Position.SELF) {
                        // 删除手牌
                        playerSetInfo.getSelfHandcards().removeCard(operDetail.target);
                        // 刷新手牌
                        deskView.getHandCardsView().show(uid);
                        // 刷新明牌
                        deskView.getCardGroupsView().show(uid);
                        return;
                    }
                    // 他人杠牌，显示特效
                    var effectSprite = this.createEffectSprite("mahjong/desk/oper_gang.png", pos);
                    Laya.timer.once(500, this, this.onEffect, [operDetail, effectSprite]);
                };
                /**
                 * 处理暗杠
                 */
                OperationHandler.prototype.handleAnGang = function (operDetail) {
                    play.Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "an_gang", this.deskController.getDeskDetail().getRule());
                    //let OperType = Protocol.getEnum("mahjong.OperType");
                    var gameSetInfo = this.deskController.getGameSetInfo();
                    var playerSetInfo = gameSetInfo.getPlayerSetInfo();
                    var deskView = this.deskController.getDeskView();
                    var uid = operDetail.uid;
                    // 修改数据：减少手牌数量，增加杠牌
                    playerSetInfo.decrHandcardNum(uid, 4);
                    playerSetInfo.addCardGroup(uid, Laya.Browser.window.mahjong.OperType.AN_GANG, operDetail.target);
                    var pos = this.deskController.findPositionByUid(uid);
                    if (pos == mahjong.play.Position.SELF) {
                        // 删除4张手牌
                        playerSetInfo.getSelfHandcards().removeCards(operDetail.target, 4);
                        // 刷新手牌
                        deskView.getHandCardsView().show(uid);
                        // 刷新明牌
                        deskView.getCardGroupsView().show(uid);
                        return;
                    }
                    // 他人杠牌，显示特效
                    var effectSprite = this.createEffectSprite("mahjong/desk/oper_gang.png", pos);
                    Laya.timer.once(500, this, this.onEffect, [operDetail, effectSprite]);
                };
                /**
                 * 处理听牌
                 */
                OperationHandler.prototype.handleTing = function (operDetail) {
                    play.Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "ting", this.deskController.getDeskDetail().getRule());
                    // 修改玩家数据：去掉一张手牌，报听
                    var target = operDetail.target;
                    var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                    playerSetInfo.discard(operDetail.uid, target);
                    playerSetInfo.setHasMo(operDetail.uid, false);
                    playerSetInfo.setBaoTing(operDetail.uid, true);
                    var deskView = this.deskController.getDeskView();
                    if (Login.isSelf(operDetail.uid)) {
                        // 更新数据
                        playerSetInfo.getSelfHandcards().removeCard(target);
                        // 显示手牌
                        deskView.getHandCardsView().show(operDetail.uid);
                        // 显示打出的牌（带听牌标识）
                        deskView.getDiscardsView().add(operDetail.uid, target, true);
                        // 听牌标志显示
                        var selfHandCardsView = deskView.getHandCardsView().getSelfHandCardsView();
                        selfHandCardsView.refreshTingCardsView(target, true);
                        // 听牌角标显示
                        deskView.getPlayerBasicView().showTing(operDetail.uid);
                        return;
                    }
                    // 他人听牌，显示特效
                    var pos = this.deskController.findPositionByUid(operDetail.uid);
                    var effectSprite = this.createEffectSprite("mahjong/desk/oper_ting.png", pos);
                    Laya.timer.once(500, this, this.onTingEffect, [operDetail, effectSprite]);
                };
                /**
                 * 他人听牌，显示特效，0.5秒后隐藏特效，刷新手牌和打牌，显示听牌角标
                 */
                OperationHandler.prototype.onTingEffect = function (operDetail, effectSprite) {
                    Laya.stage.removeChild(effectSprite);
                    var deskView = this.deskController.getDeskView();
                    // 刷新手牌
                    deskView.getHandCardsView().show(operDetail.uid);
                    // 显示打出的牌（带听牌标识）
                    deskView.getDiscardsView().add(operDetail.uid, operDetail.target, true);
                    // 听牌角标显示
                    deskView.getPlayerBasicView().showTing(operDetail.uid);
                };
                /**
                 * 处理胡牌
                 */
                OperationHandler.prototype.handleHu = function (operDetail) {
                    var ziMo = this.deskController.getGameSetInfo().getLastOperDetail().uid == operDetail.uid;
                    if (ziMo) {
                        play.Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "zi_mo", this.deskController.getDeskDetail().getRule());
                    }
                    else {
                        play.Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "hu", this.deskController.getDeskDetail().getRule());
                    }
                    var playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo();
                    // 不是自摸，增加一张手牌
                    if (!ziMo)
                        playerSetInfo.incrHandcardNum(operDetail.uid, 1);
                    // 自己胡牌，直接显示
                    var pos = this.deskController.findPositionByUid(operDetail.uid);
                    if (pos == mahjong.play.Position.SELF) {
                        // 不是自摸，增加胡牌
                        if (!ziMo) {
                            playerSetInfo.getSelfHandcards().addHandcard(operDetail.target);
                        }
                        // 刷新手牌
                        this.deskController.getDeskView().getHandCardsView().show(operDetail.uid);
                        return;
                    }
                    // 他人胡牌，显示特效
                    this.huEffect = true;
                    var effectSprite = this.createEffectSprite("mahjong/desk/oper_hu.png", pos);
                    Laya.timer.once(500, this, this.onHuEffect, [operDetail, effectSprite]);
                };
                /**
                 * 他人胡牌，显示特效，0.5秒后隐藏特效并刷新手牌，显示本局结果
                 */
                OperationHandler.prototype.onHuEffect = function (operDetail, effectSprite) {
                    this.huEffect = false;
                    Laya.stage.removeChild(effectSprite);
                    // 刷新手牌
                    this.deskController.getDeskView().getHandCardsView().show(operDetail.uid);
                    // 显示本局结果
                    var setResultDialog = this.deskController.getSetResultDialog();
                    if (setResultDialog) {
                        setResultDialog.show();
                    }
                };
                OperationHandler.prototype.isHuEffect = function () {
                    return this.huEffect;
                };
                return OperationHandler;
            }());
            controller.OperationHandler = OperationHandler;
        })(controller = play.controller || (play.controller = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=OperationHandler.js.map