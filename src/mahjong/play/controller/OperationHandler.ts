module mahjong.play.controller {

    import Handler = Laya.Handler;

    // 收到麻将服务器消息 SOperCard 后处理出牌操作
    export class OperationHandler {
        
        protected huEffect = false; // 正在播放胡牌特效，完毕后显示牌局结果
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
            let target = operDetail.target;
            // 播放声音
            Sound.playCard(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), target, this.deskController.getDeskDetail().getRule());

            // 修改玩家数据：去掉一张手牌
            let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            playerSetInfo.discard(operDetail.uid, target);
            playerSetInfo.setHasMo(operDetail.uid, false);

            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;

            if(Login.isSelf(operDetail.uid)) {
                // 更新数据
                playerSetInfo.getSelfHandcards().removeCard(target);

                // 自己打牌直接显示打出的牌
                deskView.getDiscardsView().add(operDetail.uid, target, false);

                // 听牌显示
                let selfHandCardsView = deskView.getHandCardsView().getSelfHandCardsView();
                selfHandCardsView.refreshTingCardsView(target, true);
                
            } else {
                // 他人打牌，显示打牌特效
                deskView.getDiscardsView().showEffect(operDetail.uid, operDetail.target);
            }

            // 显示手牌
            deskView.getHandCardsView().show(operDetail.uid);

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
            Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "peng", this.deskController.getDeskDetail().getRule());

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
            
            let pos = this.deskController.findPositionByUid(uid);
            if(pos == mahjong.play.Position.SELF) { // 自己碰牌直接显示
                // 删除2张手牌
                playerSetInfo.getSelfHandcards().removeCards(operDetail.target, 2);

                // 刷新手牌
                deskView.getHandCardsView().show(uid);

                // 刷新明牌
                deskView.getCardGroupsView().show(uid);
                
                return;
            }

            // 他人碰牌，显示碰牌特效
            let effectSprite = this.createEffectSprite("mahjong/desk/oper_peng.png", pos);
            Laya.timer.once(500, this, this.onEffect, [operDetail, effectSprite]);
        }

        /**
         * 新建特效图：吃碰杠胡听等
         */
        protected createEffectSprite(path, pos) {
            let sprite = new Laya.Component();
            sprite.loadImage(path);
            switch(pos) {
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
        }

        /**
         * 他人吃碰杠牌，显示特效，0.5秒后隐藏特效并刷新手牌和明牌
         */
        protected onEffect(operDetail, effectSprite) {
            Laya.stage.removeChild(effectSprite);

            // 刷新手牌
            this.deskController.getDeskView().getHandCardsView().show(operDetail.uid);

            // 刷新明牌
            this.deskController.getDeskView().getCardGroupsView().show(operDetail.uid);
        }

        /**
         * 处理点杠
         */
        public handleDianGang(operDetail) {
            //SoundManager.playSound("res/sounds/mahjong/putong/female/gang.mp3");
            Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "gang", this.deskController.getDeskDetail().getRule());

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

            let pos = this.deskController.findPositionByUid(uid);
            if(pos == mahjong.play.Position.SELF) { // 自己杠牌直接显示
                // 删除3张手牌
                playerSetInfo.getSelfHandcards().removeCards(operDetail.target, 3);

                // 刷新手牌
                deskView.getHandCardsView().show(uid);

                // 刷新明牌
                deskView.getCardGroupsView().show(uid);
                
                return;
            }

            // 他人杠牌，显示特效
            let effectSprite = this.createEffectSprite("mahjong/desk/oper_gang.png", pos);
            Laya.timer.once(500, this, this.onEffect, [operDetail, effectSprite]);
        }

        /**
         * 处理补杠
         */
        public handleBuGang(operDetail) {
            //SoundManager.playSound("res/sounds/mahjong/putong/female/gang.mp3");
            Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "gang", this.deskController.getDeskDetail().getRule());

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

            let pos = this.deskController.findPositionByUid(uid);
            if(pos == mahjong.play.Position.SELF) { // 自己杠牌直接显示
                // 删除手牌
                playerSetInfo.getSelfHandcards().removeCard(operDetail.target);

                // 刷新手牌
                deskView.getHandCardsView().show(uid);

                // 刷新明牌
                deskView.getCardGroupsView().show(uid);
                
                return;
            }

            // 他人杠牌，显示特效
            let effectSprite = this.createEffectSprite("mahjong/desk/oper_gang.png", pos);
            Laya.timer.once(500, this, this.onEffect, [operDetail, effectSprite]);
        }

        /**
         * 处理暗杠
         */
        public handleAnGang(operDetail) {
            Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "an_gang", this.deskController.getDeskDetail().getRule());

            let OperType = Protocol.getEnum("mahjong.OperType");
            let gameSetInfo = this.deskController.getGameSetInfo() as mahjong.play.model.GameSetInfo;
            let playerSetInfo = gameSetInfo.getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;
            let uid = operDetail.uid;

            // 修改数据：减少手牌数量，增加杠牌
            playerSetInfo.decrHandcardNum(uid, 4);
            playerSetInfo.addCardGroup(uid, OperType.AN_GANG, operDetail.target);

            let pos = this.deskController.findPositionByUid(uid);
            if(pos == mahjong.play.Position.SELF) { // 自己杠牌直接显示
                // 删除4张手牌
                playerSetInfo.getSelfHandcards().removeCards(operDetail.target, 4);

                // 刷新手牌
                deskView.getHandCardsView().show(uid);

                // 刷新明牌
                deskView.getCardGroupsView().show(uid);
                
                return;
            }

            // 他人杠牌，显示特效
            let effectSprite = this.createEffectSprite("mahjong/desk/oper_gang.png", pos);
            Laya.timer.once(500, this, this.onEffect, [operDetail, effectSprite]);
        }

        /**
         * 处理听牌
         */
        public handleTing(operDetail) {
            Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "ting", this.deskController.getDeskDetail().getRule());

            // 修改玩家数据：去掉一张手牌，报听
            let target = operDetail.target;
            let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;
            playerSetInfo.discard(operDetail.uid, target);
            playerSetInfo.setHasMo(operDetail.uid, false);
            playerSetInfo.setBaoTing(operDetail.uid, true);

            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;

            if(Login.isSelf(operDetail.uid)) {
                // 更新数据
                playerSetInfo.getSelfHandcards().removeCard(target);

                // 显示手牌
                deskView.getHandCardsView().show(operDetail.uid);

                // 显示打出的牌（带听牌标识）
                deskView.getDiscardsView().add(operDetail.uid, target, true);

                // 听牌标志显示
                let selfHandCardsView = deskView.getHandCardsView().getSelfHandCardsView();
                selfHandCardsView.refreshTingCardsView(target, true);

                // 听牌角标显示
                deskView.getPlayerBasicView().showTing(operDetail.uid);

                return;
            }

            // 他人听牌，显示特效
            let pos = this.deskController.findPositionByUid(operDetail.uid);
            let effectSprite = this.createEffectSprite("mahjong/desk/oper_ting.png", pos);
            Laya.timer.once(500, this, this.onTingEffect, [operDetail, effectSprite]);
        }

        /**
         * 他人听牌，显示特效，0.5秒后隐藏特效，刷新手牌和打牌，显示听牌角标
         */
        protected onTingEffect(operDetail, effectSprite) {
            Laya.stage.removeChild(effectSprite);
            let deskView = this.deskController.getDeskView() as mahjong.play.view.DeskView;
            // 刷新手牌
            deskView.getHandCardsView().show(operDetail.uid);

            // 显示打出的牌（带听牌标识）
            deskView.getDiscardsView().add(operDetail.uid, operDetail.target, true);

            // 听牌角标显示
            deskView.getPlayerBasicView().showTing(operDetail.uid);
        }

        /**
         * 处理胡牌
         */
        public handleHu(operDetail) {
            let ziMo = this.deskController.getGameSetInfo().getLastOperDetail().uid == operDetail.uid;

            if(ziMo) {
                //SoundManager.playSound("res/sounds/mahjong/putong/female/zi_mo.mp3");
                Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "zi_mo", this.deskController.getDeskDetail().getRule());
            } else {
                //SoundManager.playSound("res/sounds/mahjong/putong/female/hu.mp3");
                Sound.playOper(this.deskController.getDeskDetail().getPlayerSex(operDetail.uid), "hu", this.deskController.getDeskDetail().getRule());
            }

            let playerSetInfo = this.deskController.getGameSetInfo().getPlayerSetInfo() as mahjong.play.model.PlayerSetInfo;

            // 不是自摸，增加一张手牌
            if(!ziMo) playerSetInfo.incrHandcardNum(operDetail.uid, 1);

            // 自己胡牌，直接显示
            let pos = this.deskController.findPositionByUid(operDetail.uid);
            if(pos == mahjong.play.Position.SELF) {
                // 不是自摸，增加胡牌
                if(!ziMo) {
                    playerSetInfo.getSelfHandcards().addHandcard(operDetail.target);
                }

                // 刷新手牌
                this.deskController.getDeskView().getHandCardsView().show(operDetail.uid);

                return;
            }

            // 他人胡牌，显示特效
            this.huEffect = true;
            let effectSprite = this.createEffectSprite("mahjong/desk/oper_hu.png", pos);
            Laya.timer.once(500, this, this.onHuEffect, [operDetail, effectSprite]);

        }

        /**
         * 他人胡牌，显示特效，0.5秒后隐藏特效并刷新手牌，显示本局结果
         */
        protected onHuEffect(operDetail, effectSprite) {
            this.huEffect = false;
            Laya.stage.removeChild(effectSprite);

            // 刷新手牌
            this.deskController.getDeskView().getHandCardsView().show(operDetail.uid);

            // 显示本局结果
            let setResultDialog = this.deskController.getSetResultDialog();
            if(setResultDialog) {
                setResultDialog.show();
            }
        }

        public isHuEffect() {
            return this.huEffect;
        }

    }

}