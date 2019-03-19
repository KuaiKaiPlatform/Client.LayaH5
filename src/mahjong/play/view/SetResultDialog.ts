module mahjong.play.view {

    import Handler = Laya.Handler;
    import Label = Laya.Label;
    import Component = Laya.Component;
    import Sprite = Laya.Sprite;
    import Image = Laya.Image;
    import JieSuan = mahjong.data.JieSuan;

    /**
     * 麻将牌局结果显示
     */
    export class SetResultDialog extends common.play.view.ResultDialog {

        protected labelDesc: Label;
        protected labelTime: Label;

        constructor(deskController, sSetResult) {
            super(deskController, sSetResult);
        }

        protected initDialog() {
            this.dialog = new ui.mahjong.SetResultUI();
            this.dialog.closeHandler = Handler.create(this, name => {
                console.log("mahjong.view.SetResultDialog@closeHandler", name);
                this.closeSetResult();
            });

            this.dialog.getChildByName("continue").on(Laya.Event.CLICK, this, e => {
                console.log("mahjong.view.SetResultDialog@onclick", e);
                this.dialog.close();
            });

            if(this.result.huang) {
                let imgTitle = this.dialog.getChildByName("title") as Image;
                imgTitle.skin = "mahjong/result/huang_zhuang.png";
            }

            this.labelDesc  = this.dialog.getChildByName("set_description") as Label;
            this.labelTime  = this.dialog.getChildByName("set_time") as Label;
        }

        /**
         * 关闭本局结算，发送准备进入下一局，若有下注操作，显示下注界面。
         */
        protected closeSetResult() {
            let curSetResult = this.deskController.getDeskDetail().getCurSetResult(); 
            //if(this.deskController.isGameEnded()) {
            if(curSetResult && curSetResult.over) {
                // 牌局结束，显示整场结果
                let dialog = this.getDeskController().getGameResultDialog();
                if(dialog) dialog.show();
                return;
            }

            if(!this.deskController.getDeskDetail().getSettingBool("xiaZhu")) {
                // 无下注操作，发送准备进入下一局
                MessageSender.send(Login.getServerId(), Protocol.meta.mahjong.CReady, {});
            }

            // 清理牌桌
            this.getDeskController().getDeskView().onSetResultClosed();
        }

        public getDeskController() {
            return this.deskController as mahjong.play.controller.DeskController;
        }

        public show() {
            console.log("mahjong.play.view.SetResultDialog.show");

            //预加载图集资源
            Laya.loader.load([
                "res/atlas/mahjong/result.atlas",
                "res/atlas/common/score.atlas",
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
            this.labelTime.changeText(new Date(this.result.endTime)["format"]("yyyy-MM-dd HH:mm:ss"));
        }

        protected getDescription() {
            return common.utils.GameRule.getRuleName(this.deskController.getDeskDetail().getRule()) + "     "
                + this.getMode();
        }

        protected getMode() {
            return mahjong.data.DeskInfo.getMode(this.deskController.getDeskDetail());
        }

        protected showPlayers() {
            this.result.playerSetResults.forEach((playerSetResult, index) => {
                this.showPlayer(playerSetResult, index);
            });
        }

        protected showPlayer(playerSetResult, index) {
            let playerUI = new ui.mahjong.SetResultPlayerUI() as Laya.View;
            playerUI.destroyChildren();

            this.showPlayerBasic(playerSetResult, playerUI);
            this.showPlayerCards(playerSetResult, playerUI);
            this.showPlayerScoreDetails(playerSetResult, playerUI);
            this.showPlayerSetPoint(playerSetResult, playerUI);
            this.showPlayerExtraInfo(playerSetResult, playerUI);
            
            playerUI.top = 60 + 140*index;
            this.dialog.addChild(playerUI);
        }

        protected showPlayerBasic(playerSetResult, playerUI) {
            //let basicInfo = playerUI.getChildByName("basic_info");
            let basicInfo = new ui.mahjong.PlayerBasicInfoUI();
            let uid = playerSetResult.playerSetInfo.uid;

            // 是否庄家
            let bankerId = this.getDeskController().getGameSetInfo().getBankerId();
            let zhuang = basicInfo.getChildByName("zhuang") as View;
            zhuang.visible = (bankerId == uid);

            // 下注数量
            if(this.deskController.getDeskDetail().getSettingBool("xiaZhu")) {
                PlayerBasicView.showBet(basicInfo, playerSetResult.playerSetInfo.bet);
            }

            // 昵称
            let player = this.getDeskController().getDeskDetail().getPlayer(uid);
            let nickname = basicInfo.getChildByName("nickname") as Label;
            nickname.changeText(player.user.nkn);

            // 本局得分
            playerSetResult.setPoint = 0;
            playerSetResult.points.forEach(point => {
                playerSetResult.setPoint += point;
            });

            // 总得分
            //player.total += playerSetResult.setPoint;
            player.total = 0;
            playerSetResult.playerSetInfo.points.forEach(point => {
                player.total += point;
            });
            let score = basicInfo.getChildByName("score") as Label;
            score.changeText(player.total);

            basicInfo.left = 20;
            basicInfo.centerY = 0;
            playerUI.addChild(basicInfo);
        }

        protected showPlayerCards(playerSetResult, playerUI) {
            //let playerCards = playerUI.getChildByName("player_cards") as View;
            let playerCards = new Component();
            playerCards.left = 120;
            playerCards.bottom = 0;
            playerUI.addChild(playerCards);

            // 手牌
            let focusShown = false;
            playerSetResult.playerSetInfo.handcards.sort((a, b) => a-b);
            playerSetResult.playerSetInfo.handcards.forEach((card, index) => {
                let cardView = SingleCardFactory.createSelfHand(GlobalSetting.get("mahjongTheme"), card);
                cardView.left = index*64;
                
                if(card == this.result.huCard 
                    && !focusShown 
                    && (playerSetResult.jiePao || playerSetResult.zimo)) {
                    let focus = cardView.getChildByName("focus") as View;
                    focus.visible = true;
                    focusShown = true;
                }
                
                playerCards.addChild(cardView);
            });

            // 明牌
            let handCardNum = playerSetResult.playerSetInfo.handCardNum;
            playerSetResult.playerSetInfo.cardGroups.forEach((cardGroup, index) => {
                let groupView = CardGroupFactory.createSelfGroup(GlobalSetting.get("mahjongTheme"), cardGroup);
                groupView.left = handCardNum*64 + index*190 + 16;
                playerCards.addChild(groupView);
            });

        }

        protected showPlayerScoreDetails(playerSetResult, playerUI) {
            let display = "";
            playerSetResult.scoreDetails.forEach((scoreDetail, index) => {
                display += JieSuan.getDisplay(scoreDetail.mainType);

                if(scoreDetail.subTypes.length > 0) {
                    display += "（";
                    scoreDetail.subTypes.forEach((subType, index) => {
                        display += JieSuan.getDisplay(subType);
                        if(index < scoreDetail.subTypes.length-1) display += "，";
                    });
                    display += "）";
                }

                display += scoreDetail.score > 0?" +":" ";
                display += scoreDetail.score;
                display += "   ";
            });

            let label = new Label();
            label.changeText(display);
            label.color = "#22d1e8";
            label.fontSize = 18;
            label.left = 120;
            label.top = 12;
            playerUI.addChild(label);
        }

        protected createWinPointImg(point, hasExtra) {
            let img = new Image();
            //img.width = 30;
            //img.height = 50;
            img.centerY = hasExtra?-20:20;
            img.loadImage("common/score/win_score_" + point + ".png");
            //console.log("SetResultDialog.createWinPointImg", img.displayWidth, img.displayHeight);

            img.scaleX = 30/img.displayWidth;
            img.scaleY = 50/img.displayHeight;

            //console.log("SetResultDialog.createWinPointImg", img.displayWidth, img.displayHeight);
            return img;
        }

        protected createLosePointImg(point, hasExtra) {
            let img = new Image();
            //img.width = 30;
            //img.height = 50;
            img.centerY = hasExtra?-20:20;
            img.loadImage("common/score/fail_score_" + point + ".png");
            //console.log("SetResultDialog.creteLosePointImg", img.displayWidth, img.displayHeight);
            
            img.scaleX = 30/img.displayWidth;
            img.scaleY = 50/img.displayHeight;

            //console.log("SetResultDialog.creteLosePointImg", img.displayWidth, img.displayHeight);
            return img;
        }

        /**
         * 显示一名玩家的总得失分
         * 
         * @param playerSetResult 
         * @param playerUI 
         */
        protected showPlayerSetPoint(playerSetResult, playerUI) {
            let hasExtra = playerSetResult.zimo || playerSetResult.jiePao || playerSetResult.dianPao;

            // 0分
            if(playerSetResult.setPoint == 0) {
                let zeroImg = this.createWinPointImg(0, hasExtra);
                zeroImg.right = 20;
                playerUI.addChild(zeroImg);
                return;
            }

            // 分数图片
            let setPoint = Math.abs(playerSetResult.setPoint);
            let count = 0;
            while(setPoint > 0) {
                let point = setPoint%10;
                let img = playerSetResult.setPoint > 0?this.createWinPointImg(point, hasExtra):this.createLosePointImg(point, hasExtra);
                img.right = count*30 + 20;
                playerUI.addChild(img);
                count++;
                setPoint = Math.floor(setPoint/10);
            }

            // 输赢显示加减号
            let signImg = new Component();
            if(playerSetResult.setPoint > 0) {
                signImg.loadImage("common/score/win_sign.png");
                signImg.scaleX = 30/signImg.displayWidth;
                signImg.scaleY = 30/signImg.displayHeight;
            } else {
                signImg.loadImage("common/score/fail_sign.png");
                signImg.scaleX = 30/signImg.displayWidth;
                signImg.scaleY = 10/signImg.displayHeight;
            }

            signImg.right = count*30 + 20;
            signImg.centerY = hasExtra?-20:20;
            playerUI.addChild(signImg);

            //console.log("SetResultDialog.showPlayerSetPoint", signImg.displayWidth, signImg.displayHeight);
        }

        protected showPlayerExtraInfo(playerSetResult, playerUI) {
            let img = new Component();
            if(playerSetResult.zimo) {
                img.loadImage("mahjong/result/zi_mo.png");
                img.right = -30;
                img.bottom = -10;
            } else if(playerSetResult.jiePao) {
                img.loadImage("mahjong/result/hu_pai.png");
                img.right = -30;
                img.bottom = -10;
            } else if(playerSetResult.dianPao) {
                img.loadImage("mahjong/result/dian_pao.png");
                img.right = 10;
                img.bottom = 0;
            }
            playerUI.addChild(img);
        }

    }
}