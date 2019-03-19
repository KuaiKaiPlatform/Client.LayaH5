module mahjong.play.controller {

    import SoundManager = Laya.SoundManager;
    import Handler = Laya.Handler;

    // 收到麻将服务器消息 SOperCard 后处理出牌操作
    export class OperationHandler {
        
        protected deskController: DeskController;

        constructor(deskController) {
            this.deskController = deskController;
        }

        /**
         * 处理一项出牌操作
         */
        public handleOperDetail(operDetail) {
            let OperType = Protocol.getEnum("mahjong.OperType");
            switch(operDetail.operType) {
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
        }

        /**
         * 处理打牌
         */
        public handleDa(operDetail) {
            SoundManager.playSound("res/sounds/mahjong/putong/female/" + operDetail.target + ".mp3");

            // 修改玩家数据：去掉一张手牌
            let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            playerSetInfo.discard(operDetail.uid, operDetail.target);
            playerSetInfo.setHasMo(operDetail.uid, false);

            // 显示打出的牌
            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;
            deskView.getDiscardsView().add(operDetail.uid, operDetail.target);

            // 自己打牌
            if(Login.isSelf(operDetail.uid)) {
                // 更新手牌和打出的牌数据
                playerSetInfo.getSelfHandcards().removeCard(operDetail.target);

                // 显示手牌
                deskView.getHandCardsView().getSelfHandCardsView().show();
            } else {
                // 显示手牌
                deskView.getHandCardsView().show(operDetail.uid);
                // 去掉其他玩家一张手牌
                //deskView.getHandCardsView().removeOne(operDetail.uid, playerSetInfo.getByUid(operDetail.uid).handCardNum);
            }

        }

        /**
         * 处理摸牌
         */
        public handleMo(operDetail) {
            let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            playerSetInfo.setHasMo(operDetail.uid, true);
            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;
            if(Login.isSelf(operDetail.uid)) {
                // 修改玩家数据
                playerSetInfo.getSelfHandcards().setMoCard(operDetail.target);
                playerSetInfo.incrHandcardNum(operDetail.uid, 1);

                // 显示自己摸的牌
                let pos = mahjong.play.Position.SELF;
                let handcardUI = deskView.getHandCardsView().getUI(Login.getUid(), pos) as View;
                deskView.getHandCardsView().getSelfHandCardsView().showSelfMo(handcardUI, operDetail.target);
            } else {
                // 修改玩家数据
                playerSetInfo.incrHandcardNum(operDetail.uid, 1);

                // 显示别人摸的牌
                let pos = this.deskController.findPositionByUid(operDetail.uid);
                let handcardUI = deskView.getHandCardsView().getUI(operDetail.uid, pos) as View;
                deskView.getHandCardsView().showMoCard(handcardUI, pos);
            }
        }

        /**
         * 处理碰牌
         */
        public handlePeng(operDetail) {
            SoundManager.playSound("res/sounds/mahjong/putong/female/peng.mp3");

            let OperType = Protocol.getEnum("mahjong.OperType");
            let gameSetInfo = this.deskController.getGameSetInfo() as mahjong.play.model.GameSetInfo;
            let playerSetInfo = gameSetInfo.getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;
            let uid = operDetail.uid;

            // 修改数据：减少手牌数量，增加碰牌
            playerSetInfo.decrHandcardNum(uid, 2);
            playerSetInfo.addCardGroup(uid, OperType.PENG, operDetail.target);

            // 删除最后打出的牌
            if(!playerSetInfo.removeLastDiscard(gameSetInfo.getLastOperDetail())) {
                console.error("mahjong.play.controller.OperationHandler.handlePeng@last discard not removed.", JSON.stringify(operDetail));
            } else {
                deskView.getDiscardsView().removeLast(gameSetInfo.getLastOperDetail().uid);
            }

            if(Login.isSelf(uid)) {
                // 删除2张手牌
                playerSetInfo.getSelfHandcards().removeHandcards(operDetail.target, 2);
            }

            // 刷新手牌
            deskView.getHandCardsView().show(uid);

            // 刷新明牌
            deskView.getCardGroupsView().show(uid);

        }

        /**
         * 处理点杠
         */
        public handleDianGang(operDetail) {
            SoundManager.playSound("res/sounds/mahjong/putong/female/gang.mp3");

            let OperType = Protocol.getEnum("mahjong.OperType");
            let gameSetInfo = this.deskController.getGameSetInfo() as mahjong.play.model.GameSetInfo;
            let playerSetInfo = gameSetInfo.getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;
            let uid = operDetail.uid;

            // 修改数据：减少手牌数量，增加杠牌
            playerSetInfo.decrHandcardNum(uid, 3);
            playerSetInfo.addCardGroup(uid, OperType.DIAN_GANG, operDetail.target);

            // 删除最后打出的牌
            if(!playerSetInfo.removeLastDiscard(gameSetInfo.getLastOperDetail())) {
                console.error("mahjong.play.controller.OperationHandler.handleDianGang@last discard not removed.", JSON.stringify(operDetail));
            } else {
                deskView.getDiscardsView().removeLast(gameSetInfo.getLastOperDetail().uid);
            }

            if(Login.isSelf(uid)) {
                // 删除3张手牌
                playerSetInfo.getSelfHandcards().removeHandcards(operDetail.target, 3);
            }

            // 刷新手牌
            deskView.getHandCardsView().show(uid);

            // 刷新明牌
            deskView.getCardGroupsView().show(uid);
        }

        /**
         * 处理补杠
         */
        public handleBuGang(operDetail) {
            SoundManager.playSound("res/sounds/mahjong/putong/female/gang.mp3");
            let OperType = Protocol.getEnum("mahjong.OperType");
            let gameSetInfo = this.deskController.getGameSetInfo() as mahjong.play.model.GameSetInfo;
            let playerSetInfo = gameSetInfo.getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;
            let uid = operDetail.uid;

            // 修改数据：减少手牌数量，删除碰牌，增加杠牌
            playerSetInfo.decrHandcardNum(uid, 1);
            playerSetInfo.setHasMo(uid, false);
            playerSetInfo.removeCardGroup(uid, OperType.PENG, operDetail.target);
            playerSetInfo.addCardGroup(uid, OperType.BU_GANG, operDetail.target);

            if(Login.isSelf(uid)) {
                playerSetInfo.getSelfHandcards().removeCard(operDetail.target);
            }

            // 刷新手牌
            deskView.getHandCardsView().show(uid);

            // 刷新明牌
            deskView.getCardGroupsView().show(uid);
        }

        /**
         * 处理暗杠
         */
        public handleAnGang(operDetail) {
            SoundManager.playSound("res/sounds/mahjong/putong/female/an_gang.mp3");
            let OperType = Protocol.getEnum("mahjong.OperType");
            let gameSetInfo = this.deskController.getGameSetInfo() as mahjong.play.model.GameSetInfo;
            let playerSetInfo = gameSetInfo.getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;
            let uid = operDetail.uid;

            // 修改数据：减少手牌数量，增加杠牌
            playerSetInfo.decrHandcardNum(uid, 4);
            playerSetInfo.addCardGroup(uid, OperType.AN_GANG, operDetail.target);

            if(Login.isSelf(uid)) {
                // 删除4张手牌
                playerSetInfo.getSelfHandcards().removeHandcards(operDetail.target, 4);
            }

            // 刷新手牌
            deskView.getHandCardsView().show(uid);

            // 刷新明牌
            deskView.getCardGroupsView().show(uid);
        }

        /**
         * 处理听牌
         */
        public handleTing(operDetail) {
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
        }

        /**
         * 处理胡牌
         */
        public handleHu(operDetail) {
            if(this.deskController.getGameSetInfo().getLastOperDetail().uid == operDetail.uid) {
                SoundManager.playSound("res/sounds/mahjong/putong/female/zi_mo.mp3");
            } else {
                SoundManager.playSound("res/sounds/mahjong/putong/female/hu.mp3");
            }

            let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            
            if(Login.isSelf(operDetail.uid)) {
                // 修改玩家数据
                playerSetInfo.getSelfHandcards().addHandcard(operDetail.target);
            }

            // 修改玩家数据
            playerSetInfo.incrHandcardNum(operDetail.uid, 1);

            // 显示胡家手牌
            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;
            deskView.getHandCardsView().show(operDetail.uid);
        }

    }

}