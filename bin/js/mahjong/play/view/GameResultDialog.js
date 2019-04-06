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
            /**
             * 麻将整场牌局结果显示
             */
            var GameResultDialog = (function (_super) {
                __extends(GameResultDialog, _super);
                function GameResultDialog(deskController, sGameResult) {
                    return _super.call(this, deskController, sGameResult) || this;
                }
                GameResultDialog.prototype.initDialog = function () {
                    var _this = this;
                    this.dialog = new ui.mahjong.GameResultUI();
                    this.dialog.closeHandler = Handler.create(this, function (name) {
                        console.log("mahjong.view.GameResultDialog@closeHandler", name);
                        _this.closeGameResult();
                    });
                    // 分享
                    this.dialog.getChildByName("share").on(Laya.Event.CLICK, this, function (e) {
                        console.log("mahjong.view.GameResultDialog@onclick share", e);
                        //this.dialog.close();
                    });
                    // 返回
                    this.dialog.getChildByName("return").on(Laya.Event.CLICK, this, function (e) {
                        console.log("mahjong.view.GameResultDialog@onclick return", e);
                        _this.dialog.close();
                    });
                    this.labelDesc = this.dialog.getChildByName("description");
                    this.labelTime = this.dialog.getChildByName("time");
                };
                /**
                 * 关闭整场比赛结果，返回游戏首页，显示竞技排行榜
                 */
                GameResultDialog.prototype.closeGameResult = function () {
                    // 清理牌桌
                    //this.getDeskController().getDeskView().onGameResultClosed();
                };
                GameResultDialog.prototype.getDeskController = function () {
                    return this.deskController;
                };
                GameResultDialog.prototype.show = function () {
                    var _this = this;
                    console.log("mahjong.play.view.GameResultDialog.show");
                    //预加载图集资源
                    Laya.loader.load([
                        "res/atlas/mahjong/result.atlas",
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
                GameResultDialog.prototype.showLabels = function () {
                    this.labelDesc.changeText(this.getDescription());
                    this.labelTime.changeText(common.utils.DateFormat.format(this.result.endTime));
                };
                GameResultDialog.prototype.getDescription = function () {
                    return common.data.GameRule.getRuleName(this.deskController.getDeskDetail().getRule()) + "     "
                        + this.getMode();
                };
                GameResultDialog.prototype.getMode = function () {
                    return mahjong.data.DeskInfo.getMode(this.deskController.getDeskDetail());
                };
                GameResultDialog.prototype.showPlayers = function () {
                    var _this = this;
                    var bigWinners = [];
                    var score = 0;
                    this.result.playerGameResults.forEach(function (playerGameResult, index) {
                        var playerUI = _this.showPlayer(playerGameResult, index);
                        if (playerGameResult.total > score) {
                            score = playerGameResult.total;
                            bigWinners = [playerUI];
                        }
                        else if (playerGameResult.total == score) {
                            bigWinners.push(playerUI);
                        }
                    });
                    // 显示大赢家
                    bigWinners.forEach(function (playerUI) {
                        playerUI.getChildByName("big_winner").visible = true;
                    });
                };
                GameResultDialog.prototype.showPlayer = function (playerGameResult, index) {
                    var playerUI = new ui.mahjong.GameResultPlayerUI();
                    this.showPlayerBasic(playerGameResult, playerUI);
                    this.showPlayerStats(playerGameResult, playerUI);
                    playerUI.top = 100;
                    playerUI.scaleX = 0.9;
                    playerUI.scaleY = 0.9;
                    var totalPlayer = this.deskController.getDeskDetail().getSettingValue("totalPlayer");
                    if (totalPlayer == 4) {
                        switch (index) {
                            case 0:
                                playerUI.centerX = -432;
                                break;
                            case 1:
                                playerUI.centerX = -144;
                                break;
                            case 2:
                                playerUI.centerX = 144;
                                break;
                            case 3:
                                playerUI.centerX = 432;
                                break;
                        }
                    }
                    else if (totalPlayer == 3) {
                        switch (index) {
                            case 0:
                                playerUI.centerX = -288;
                                break;
                            case 1:
                                playerUI.centerX = 0;
                                break;
                            case 2:
                                playerUI.centerX = 288;
                                break;
                        }
                    }
                    else if (totalPlayer == 2) {
                        switch (index) {
                            case 0:
                                playerUI.centerX = -144;
                                break;
                            case 1:
                                playerUI.centerX = 144;
                                break;
                        }
                    }
                    this.dialog.addChild(playerUI);
                    return playerUI;
                };
                GameResultDialog.prototype.mapPlayerStats = function (playerGameResult) {
                    playerGameResult.stats = {};
                    playerGameResult.playerStats.forEach(function (stat) {
                        playerGameResult.stats[stat.statType] = stat;
                    });
                };
                GameResultDialog.prototype.showPlayerBasic = function (playerGameResult, playerUI) {
                    var uid = playerGameResult.uid;
                    // 昵称
                    var player = this.getDeskController().getDeskDetail().getPlayer(uid);
                    playerUI.removeChildByName("nickname");
                    //let labelNkn = playerUI.getChildByName("nickname") as Label;
                    var labelNkn = new Label();
                    labelNkn.changeText(player.user.nkn);
                    labelNkn.centerX = 0;
                    labelNkn.y = 115;
                    labelNkn.color = "#000000";
                    labelNkn.bold = true;
                    labelNkn.fontSize = 20;
                    playerUI.addChild(labelNkn);
                    // ID
                    var labelUid = playerUI.getChildByName("uid");
                    labelUid.changeText("ID：" + uid);
                    labelUid.centerX = 0;
                    // 最终得分
                    playerGameResult.total = 0;
                    playerGameResult.points.forEach(function (point) {
                        playerGameResult.total += point;
                    });
                    var labelScore = new Label();
                    //let labelScore = playerGameResult.total<0?playerUI.getChildByName("game_score_lose"):playerUI.getChildByName("game_score_win") as Label;
                    if (playerGameResult.total > 0) {
                        labelScore.changeText("+" + playerGameResult.total);
                        labelScore.color = "#c02406";
                    }
                    else if (playerGameResult.total == 0) {
                        labelScore.changeText(playerGameResult.total);
                        labelScore.color = "#c02406";
                    }
                    else {
                        labelScore.changeText(playerGameResult.total);
                        labelScore.color = "#84827d";
                    }
                    //labelScore.visible = true;
                    labelScore.centerX = 0;
                    labelScore.bottom = 50;
                    labelScore.bold = true;
                    labelScore.fontSize = 80;
                    playerUI.addChild(labelScore);
                };
                GameResultDialog.prototype.showPlayerStats = function (playerGameResult, playerUI) {
                    var _this = this;
                    playerGameResult.playerStats.forEach(function (stat, index) {
                        if (index > 4)
                            return; // 最多显示5项
                        var labelStatType = playerUI.getChildByName("stat_" + index);
                        labelStatType.changeText(_this.getStatTypeDisplayName(stat.statType));
                        labelStatType.visible = true;
                        var labelStatVal = playerUI.getChildByName("stat_val_" + index);
                        labelStatVal.changeText(stat.val);
                        labelStatVal.visible = true;
                    });
                };
                GameResultDialog.prototype.getStatTypeDisplayName = function (statType) {
                    var PlayerStatType = Protocol.getEnum("mahjong.PlayerStatType");
                    switch (statType) {
                        case PlayerStatType.ZI_MO:
                            return "自摸次数";
                        case PlayerStatType.JIE_PAO:
                            return "接炮次数";
                        case PlayerStatType.DIAN_PAO:
                            return "点炮次数";
                        case PlayerStatType.MING_GANG:
                            return "明杠次数";
                        case PlayerStatType.AN_GANG:
                            return "暗杠次数";
                    }
                    return "未知统计项";
                };
                return GameResultDialog;
            }(common.play.view.ResultDialog));
            view.GameResultDialog = GameResultDialog;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=GameResultDialog.js.map