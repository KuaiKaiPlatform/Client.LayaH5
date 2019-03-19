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
            var Label = Laya.Label;
            var Component = Laya.Component;
            var Image = Laya.Image;
            var JieSuan = mahjong.data.JieSuan;
            /**
             * 麻将牌局结果显示
             */
            var SetResultDialog = (function (_super) {
                __extends(SetResultDialog, _super);
                function SetResultDialog(deskController, sSetResult) {
                    return _super.call(this, deskController, sSetResult) || this;
                }
                SetResultDialog.prototype.initDialog = function () {
                    var _this = this;
                    this.dialog = new ui.mahjong.SetResultUI();
                    this.dialog.closeHandler = Handler.create(this, function (name) {
                        console.log("mahjong.view.SetResultDialog@closeHandler", name);
                        _this.closeSetResult();
                    });
                    this.dialog.getChildByName("continue").on(Laya.Event.CLICK, this, function (e) {
                        console.log("mahjong.view.SetResultDialog@onclick", e);
                        _this.dialog.close();
                    });
                    if (this.result.huang) {
                        var imgTitle = this.dialog.getChildByName("title");
                        imgTitle.skin = "mahjong/result/huang_zhuang.png";
                    }
                    this.labelDesc = this.dialog.getChildByName("set_description");
                    this.labelTime = this.dialog.getChildByName("set_time");
                };
                /**
                 * 关闭本局结算，发送准备进入下一局，若有下注操作，显示下注界面。
                 */
                SetResultDialog.prototype.closeSetResult = function () {
                    var curSetResult = this.deskController.getDeskDetail().getCurSetResult();
                    //if(this.deskController.isGameEnded()) {
                    if (curSetResult && curSetResult.over) {
                        // 牌局结束，显示整场结果
                        var dialog = this.getDeskController().getGameResultDialog();
                        if (dialog)
                            dialog.show();
                        return;
                    }
                    if (!this.deskController.getDeskDetail().getSettingBool("xiaZhu")) {
                        // 无下注操作，发送准备进入下一局
                        MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.CReady, {});
                    }
                    // 清理牌桌
                    this.getDeskController().getDeskView().onSetResultClosed();
                };
                SetResultDialog.prototype.getDeskController = function () {
                    return this.deskController;
                };
                SetResultDialog.prototype.show = function () {
                    var _this = this;
                    console.log("mahjong.play.view.SetResultDialog.show");
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/mahjong/result.atlas",
                        "res/atlas/common/score.atlas",
                        "res/atlas/common/desk.atlas",
                        "res/atlas/player.atlas",
                        "mahjong/result/bg.png"
                    ], Handler.create(this, function () {
                        _this.initDialog();
                        _this.showLabels();
                        _this.showPlayers();
                        _super.prototype.show.call(_this);
                    }));
                };
                SetResultDialog.prototype.showLabels = function () {
                    this.labelDesc.changeText(this.getDescription());
                    this.labelTime.changeText(new Date(this.result.endTime)["format"]("yyyy-MM-dd HH:mm:ss"));
                };
                SetResultDialog.prototype.getDescription = function () {
                    return common.utils.GameRule.getRuleName(this.deskController.getDeskDetail().getRule()) + "     "
                        + this.getMode();
                };
                SetResultDialog.prototype.getMode = function () {
                    return mahjong.data.DeskInfo.getMode(this.deskController.getDeskDetail());
                };
                SetResultDialog.prototype.showPlayers = function () {
                    var _this = this;
                    this.result.playerSetResults.forEach(function (playerSetResult, index) {
                        _this.showPlayer(playerSetResult, index);
                    });
                };
                SetResultDialog.prototype.showPlayer = function (playerSetResult, index) {
                    var playerUI = new ui.mahjong.SetResultPlayerUI();
                    playerUI.destroyChildren();
                    this.showPlayerBasic(playerSetResult, playerUI);
                    this.showPlayerCards(playerSetResult, playerUI);
                    this.showPlayerScoreDetails(playerSetResult, playerUI);
                    this.showPlayerSetPoint(playerSetResult, playerUI);
                    this.showPlayerExtraInfo(playerSetResult, playerUI);
                    playerUI.top = 60 + 140 * index;
                    this.dialog.addChild(playerUI);
                };
                SetResultDialog.prototype.showPlayerBasic = function (playerSetResult, playerUI) {
                    //let basicInfo = playerUI.getChildByName("basic_info");
                    var basicInfo = new ui.mahjong.PlayerBasicInfoUI();
                    var uid = playerSetResult.playerSetInfo.uid;
                    // 是否庄家
                    var bankerId = this.getDeskController().getGameSetInfo().getBankerId();
                    var zhuang = basicInfo.getChildByName("zhuang");
                    zhuang.visible = (bankerId == uid);
                    // 下注数量
                    if (this.deskController.getDeskDetail().getSettingBool("xiaZhu")) {
                        view.PlayerBasicView.showBet(basicInfo, playerSetResult.playerSetInfo.bet);
                    }
                    // 昵称
                    var player = this.getDeskController().getDeskDetail().getPlayer(uid);
                    var nickname = basicInfo.getChildByName("nickname");
                    nickname.changeText(player.user.nkn);
                    // 本局得分
                    playerSetResult.setPoint = 0;
                    playerSetResult.points.forEach(function (point) {
                        playerSetResult.setPoint += point;
                    });
                    // 总得分
                    //player.total += playerSetResult.setPoint;
                    player.total = 0;
                    playerSetResult.playerSetInfo.points.forEach(function (point) {
                        player.total += point;
                    });
                    var score = basicInfo.getChildByName("score");
                    score.changeText(player.total);
                    basicInfo.left = 20;
                    basicInfo.centerY = 0;
                    playerUI.addChild(basicInfo);
                };
                SetResultDialog.prototype.showPlayerCards = function (playerSetResult, playerUI) {
                    var _this = this;
                    //let playerCards = playerUI.getChildByName("player_cards") as View;
                    var playerCards = new Component();
                    playerCards.left = 120;
                    playerCards.bottom = 0;
                    playerUI.addChild(playerCards);
                    // 手牌
                    var focusShown = false;
                    playerSetResult.playerSetInfo.handcards.sort(function (a, b) { return a - b; });
                    playerSetResult.playerSetInfo.handcards.forEach(function (card, index) {
                        var cardView = view.SingleCardFactory.createSelfHand(GlobalSetting.get("mahjongTheme"), card);
                        cardView.left = index * 64;
                        if (card == _this.result.huCard
                            && !focusShown
                            && (playerSetResult.jiePao || playerSetResult.zimo)) {
                            var focus_1 = cardView.getChildByName("focus");
                            focus_1.visible = true;
                            focusShown = true;
                        }
                        playerCards.addChild(cardView);
                    });
                    // 明牌
                    var handCardNum = playerSetResult.playerSetInfo.handCardNum;
                    playerSetResult.playerSetInfo.cardGroups.forEach(function (cardGroup, index) {
                        var groupView = view.CardGroupFactory.createSelfGroup(GlobalSetting.get("mahjongTheme"), cardGroup);
                        groupView.left = handCardNum * 64 + index * 190 + 16;
                        playerCards.addChild(groupView);
                    });
                };
                SetResultDialog.prototype.showPlayerScoreDetails = function (playerSetResult, playerUI) {
                    var display = "";
                    playerSetResult.scoreDetails.forEach(function (scoreDetail, index) {
                        display += JieSuan.getDisplay(scoreDetail.mainType);
                        if (scoreDetail.subTypes.length > 0) {
                            display += "（";
                            scoreDetail.subTypes.forEach(function (subType, index) {
                                display += JieSuan.getDisplay(subType);
                                if (index < scoreDetail.subTypes.length - 1)
                                    display += "，";
                            });
                            display += "）";
                        }
                        display += scoreDetail.score > 0 ? " +" : " ";
                        display += scoreDetail.score;
                        display += "   ";
                    });
                    var label = new Label();
                    label.changeText(display);
                    label.color = "#22d1e8";
                    label.fontSize = 18;
                    label.left = 120;
                    label.top = 12;
                    playerUI.addChild(label);
                };
                SetResultDialog.prototype.createWinPointImg = function (point, hasExtra) {
                    var img = new Image();
                    //img.width = 30;
                    //img.height = 50;
                    img.centerY = hasExtra ? -20 : 20;
                    img.loadImage("common/score/win_score_" + point + ".png");
                    //console.log("SetResultDialog.createWinPointImg", img.displayWidth, img.displayHeight);
                    img.scaleX = 30 / img.displayWidth;
                    img.scaleY = 50 / img.displayHeight;
                    //console.log("SetResultDialog.createWinPointImg", img.displayWidth, img.displayHeight);
                    return img;
                };
                SetResultDialog.prototype.createLosePointImg = function (point, hasExtra) {
                    var img = new Image();
                    //img.width = 30;
                    //img.height = 50;
                    img.centerY = hasExtra ? -20 : 20;
                    img.loadImage("common/score/fail_score_" + point + ".png");
                    //console.log("SetResultDialog.creteLosePointImg", img.displayWidth, img.displayHeight);
                    img.scaleX = 30 / img.displayWidth;
                    img.scaleY = 50 / img.displayHeight;
                    //console.log("SetResultDialog.creteLosePointImg", img.displayWidth, img.displayHeight);
                    return img;
                };
                /**
                 * 显示一名玩家的总得失分
                 *
                 * @param playerSetResult
                 * @param playerUI
                 */
                SetResultDialog.prototype.showPlayerSetPoint = function (playerSetResult, playerUI) {
                    var hasExtra = playerSetResult.zimo || playerSetResult.jiePao || playerSetResult.dianPao;
                    // 0分
                    if (playerSetResult.setPoint == 0) {
                        var zeroImg = this.createWinPointImg(0, hasExtra);
                        zeroImg.right = 20;
                        playerUI.addChild(zeroImg);
                        return;
                    }
                    // 分数图片
                    var setPoint = Math.abs(playerSetResult.setPoint);
                    var count = 0;
                    while (setPoint > 0) {
                        var point = setPoint % 10;
                        var img = playerSetResult.setPoint > 0 ? this.createWinPointImg(point, hasExtra) : this.createLosePointImg(point, hasExtra);
                        img.right = count * 30 + 20;
                        playerUI.addChild(img);
                        count++;
                        setPoint = Math.floor(setPoint / 10);
                    }
                    // 输赢显示加减号
                    var signImg = new Component();
                    if (playerSetResult.setPoint > 0) {
                        signImg.loadImage("common/score/win_sign.png");
                        signImg.scaleX = 30 / signImg.displayWidth;
                        signImg.scaleY = 30 / signImg.displayHeight;
                    }
                    else {
                        signImg.loadImage("common/score/fail_sign.png");
                        signImg.scaleX = 30 / signImg.displayWidth;
                        signImg.scaleY = 10 / signImg.displayHeight;
                    }
                    signImg.right = count * 30 + 20;
                    signImg.centerY = hasExtra ? -20 : 20;
                    playerUI.addChild(signImg);
                    //console.log("SetResultDialog.showPlayerSetPoint", signImg.displayWidth, signImg.displayHeight);
                };
                SetResultDialog.prototype.showPlayerExtraInfo = function (playerSetResult, playerUI) {
                    var img = new Component();
                    if (playerSetResult.zimo) {
                        img.loadImage("mahjong/result/zi_mo.png");
                        img.right = -30;
                        img.bottom = -10;
                    }
                    else if (playerSetResult.jiePao) {
                        img.loadImage("mahjong/result/hu_pai.png");
                        img.right = -30;
                        img.bottom = -10;
                    }
                    else if (playerSetResult.dianPao) {
                        img.loadImage("mahjong/result/dian_pao.png");
                        img.right = 10;
                        img.bottom = 0;
                    }
                    playerUI.addChild(img);
                };
                return SetResultDialog;
            }(common.play.view.ResultDialog));
            view.SetResultDialog = SetResultDialog;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=SetResultDialog.js.map