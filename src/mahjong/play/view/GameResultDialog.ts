module mahjong.play.view {

    import Handler = Laya.Handler;
    import Label = Laya.Label;
    import Component = Laya.Component;
    import Sprite = Laya.Sprite;
    import Image = Laya.Image;
    import JieSuan = mahjong.data.JieSuan;

    /**
     * 麻将整场牌局结果显示
     */
    export class GameResultDialog extends common.play.view.ResultDialog {

        protected labelDesc: Label;
        protected labelTime: Label;

        constructor(deskController, sGameResult) {
            super(deskController, sGameResult);
        }

        protected initDialog() {
            this.dialog = new ui.mahjong.GameResultUI();
            this.dialog.closeHandler = Handler.create(this, name => {
                console.log("mahjong.view.GameResultDialog@closeHandler", name);
                this.closeGameResult();
            });

            // 分享
            this.dialog.getChildByName("share").on(Laya.Event.CLICK, this, e => {
                console.log("mahjong.view.GameResultDialog@onclick share", e);
                //this.dialog.close();
            });

            // 返回
            this.dialog.getChildByName("return").on(Laya.Event.CLICK, this, e => {
                console.log("mahjong.view.GameResultDialog@onclick return", e);
                this.dialog.close();
            });

            this.labelDesc  = this.dialog.getChildByName("description") as Label;
            this.labelTime  = this.dialog.getChildByName("time") as Label;
        }

        /**
         * 关闭整场比赛结果，返回游戏首页，显示竞技排行榜
         */
        protected closeGameResult() {
            // 清理牌桌
            //this.getDeskController().getDeskView().onGameResultClosed();
        }

        public getDeskController() {
            return this.deskController as mahjong.play.controller.DeskController;
        }

        public show() {
            console.log("mahjong.play.view.GameResultDialog.show");

            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/result.atlas",
                "res/atlas/common/desk.atlas",
                "res/atlas/player.atlas",
                "mahjong/result/bg.png"
            ], Handler.create(this, () => {
                this.initDialog();

                this.showLabels();
                this.showPlayers();
                
                super.show();
            }));
            
        }

        protected showLabels() {
            this.labelDesc.changeText(this.getDescription());
            this.labelTime.changeText(common.utils.DateFormat.format(this.result.endTime));
        }

        protected getDescription() {
            return common.data.GameRule.getRuleName(this.deskController.getDeskDetail().getRule()) + "     "
                + this.getMode();
        }

        protected getMode() {
            return mahjong.data.DeskInfo.getMode(this.deskController.getDeskDetail());
        }

        protected showPlayers() {
            let bigWinners = [];
            let score = 0;

            this.result.playerGameResults.forEach((playerGameResult, index) => {
                let playerUI = this.showPlayer(playerGameResult, index);
                if(playerGameResult.total > score) {
                    score = playerGameResult.total;
                    bigWinners = [playerUI];
                } else if(playerGameResult.total == score) {
                    bigWinners.push(playerUI);
                }
            });

            // 显示大赢家
            bigWinners.forEach(playerUI => {
                playerUI.getChildByName("big_winner").visible = true;
            });
        }

        protected showPlayer(playerGameResult, index) {
            let playerUI = new ui.mahjong.GameResultPlayerUI() as Laya.View;

            this.showPlayerBasic(playerGameResult, playerUI);
            this.showPlayerStats(playerGameResult, playerUI);
            
            playerUI.top = 100;
            playerUI.scaleX = 0.9;
            playerUI.scaleY = 0.9;
            let totalPlayer = this.deskController.getDeskDetail().getSettingValue("totalPlayer");
            if(totalPlayer == 4) {
                switch(index) {
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
            } else if(totalPlayer == 3) {
                switch(index) {
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
            } else if(totalPlayer == 2) {
                switch(index) {
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
        }

        protected mapPlayerStats(playerGameResult) {
            playerGameResult.stats = {};
            playerGameResult.playerStats.forEach(stat => {
                playerGameResult.stats[stat.statType] = stat;
            });
        }

        protected showPlayerBasic(playerGameResult, playerUI) {
            let uid = playerGameResult.uid;

            // 昵称
            let player = this.getDeskController().getDeskDetail().getPlayer(uid);
            playerUI.removeChildByName("nickname");
            //let labelNkn = playerUI.getChildByName("nickname") as Label;
            let labelNkn = new Label();
            labelNkn.changeText(player.user.nkn);
            labelNkn.centerX = 0;
            labelNkn.y = 115;
            labelNkn.color = "#000000";
            labelNkn.bold = true;
            labelNkn.fontSize = 20;
            playerUI.addChild(labelNkn);

            // ID
            let labelUid = playerUI.getChildByName("uid") as Label;
            labelUid.changeText("ID：" + uid);
            labelUid.centerX = 0;

            // 最终得分
            playerGameResult.total = 0;
            playerGameResult.points.forEach(point => {
                playerGameResult.total += point;
            });
            let labelScore = new Label();
            //let labelScore = playerGameResult.total<0?playerUI.getChildByName("game_score_lose"):playerUI.getChildByName("game_score_win") as Label;
            if(playerGameResult.total > 0) {
                labelScore.changeText("+" + playerGameResult.total);
                labelScore.color = "#c02406";
            } else if(playerGameResult.total == 0) {
                labelScore.changeText(playerGameResult.total);
                labelScore.color = "#c02406";
            } else {
                labelScore.changeText(playerGameResult.total);
                labelScore.color = "#84827d";
            }
            //labelScore.visible = true;
            labelScore.centerX = 0;
            labelScore.bottom = 50;
            labelScore.bold = true;
            labelScore.fontSize = 80;

            playerUI.addChild(labelScore);
        }

        protected showPlayerStats(playerGameResult, playerUI) {
            playerGameResult.playerStats.forEach((stat, index) => {
                if(index > 4) return;   // 最多显示5项

                let labelStatType = playerUI.getChildByName("stat_" + index);
                labelStatType.changeText(this.getStatTypeDisplayName(stat.statType));
                labelStatType.visible = true;

                let labelStatVal = playerUI.getChildByName("stat_val_" + index);
                labelStatVal.changeText(stat.val);
                labelStatVal.visible = true;
            });
        }

        protected getStatTypeDisplayName(statType) {
            let PlayerStatType = Protocol.getEnum("mahjong.PlayerStatType");
            switch(statType) {
            case PlayerStatType.ZI_MO :
                return "自摸次数";
            case PlayerStatType.JIE_PAO :
                return "接炮次数";
            case PlayerStatType.DIAN_PAO :
                return "点炮次数";
            case PlayerStatType.MING_GANG :
                return "明杠次数";
            case PlayerStatType.AN_GANG :
                return "暗杠次数";
            }
            return "未知统计项";
        }

    }
}