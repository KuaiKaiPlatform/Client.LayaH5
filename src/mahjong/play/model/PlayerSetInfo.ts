module mahjong.play.model {

    /*
     *  麻将玩家牌局信息
     */
    export class PlayerSetInfo extends common.play.model.PlayerSetInfo {

        protected selfHandcards: SelfHandcards;     // 自身手牌及其状态管理
        protected selfOperations: SelfOperations;   // 自身可执行的操作

        constructor(setInit) {
            super(setInit.playerSetInfos);
            this.initForBanker(setInit);

            let setInfo = this.getSelf();
            this.selfHandcards = new SelfHandcards(setInfo);
            this.selfOperations = new SelfOperations(setInit.canOperDetails);
        }

        private initForBanker(setInit) {
            let setInfo = this.getByUid(setInit.bankerId);
            if(PlayerSetInfo.hasMo(setInfo)) {
                setInfo.hasMo = true;
            }
        }

        public static hasMo(setInfo) {
            return setInfo.handCardNum % 3 == 2;
        }

        /**
         * 是否刚摸牌
         * @param uid 
         */
        public hasMo(uid): boolean {
            let setInfo = this.getByUid(uid);
            return setInfo.hasMo && setInfo.hasMo === true;
        }

        /**
         * 设置是否刚摸牌
         * 
         * @param uid 
         */
        public setHasMo(uid, hasMo) {
            let setInfo = this.getByUid(uid);
            setInfo.hasMo = hasMo;
        }

        /**
         * 返回自身手牌对象
         */
        public getSelfHandcards(): SelfHandcards {
            return this.selfHandcards;
        } 

        /**
         * 返回自身可执行的操作
         */
        public getSelfOperations(): SelfOperations {
            return this.selfOperations;
        }

        /**
         * 打出一张牌
         * @param card 
         */
        public discard(uid, target) {
            let setInfo = this.getByUid(uid);
            if(setInfo.discards.length === 0) {
                setInfo.discards = new Array();
            }
            setInfo.discards.push(target);
            setInfo.handCardNum--;
        }

        /**
         * 增加指定玩家的手牌数量
         * 
         * @param uid 
         * @param num 
         */
        public incrHandcardNum(uid, num) {
            let setInfo = this.getByUid(uid);
            setInfo.handCardNum += num;
        }

        /**
         * 减少指定玩家的手牌数量
         * 
         * @param uid 
         * @param num 
         */
        public decrHandcardNum(uid, num) {
            let setInfo = this.getByUid(uid);
            setInfo.handCardNum -= num;
        }

        /**
         * 增加指定明牌（碰和杠）
         * 
         * @param uid 
         * @param operType 
         * @param target 
         */
        public addCardGroup(uid, operType, target) {
            let setInfo = this.getByUid(uid);
            if(!setInfo.cardGroups || setInfo.cardGroups.length === 0) {
                setInfo.cardGroups = new Array();
            }
            let cardGroup = {
                operType: operType,
                cards: [],
                target: target
            };
            let OperType = Protocol.getEnum("mahjong.OperType");
            switch(operType) {
            case OperType.PENG:
                cardGroup.cards = [target, target];
                break;
            case OperType.BU_GANG:
            case OperType.AN_GANG:
            case OperType.DIAN_GANG:
                cardGroup.cards = [target, target, target];
                break;
            }
            setInfo.cardGroups.push(cardGroup);
        }

        /**
         * 删除指定明牌（碰和杠）
         * 
         * @param uid 
         * @param operType 
         * @param target 
         */
        public removeCardGroup(uid, operType, target): boolean {
            let setInfo = this.getByUid(uid);
            if(!setInfo.cardGroups || setInfo.cardGroups.length === 0) {
                console.warn("mahjong.play.model.PlayerSetInfo.removeCardGroup@card groups empty", uid, operType, target);
                return false;
            }
            
            let rmIndex = setInfo.cardGroups.findIndex(cardGroup => {
                return cardGroup.target == target && cardGroup.operType == operType;
            });

            if(rmIndex < 0) {
                console.warn("mahjong.play.model.PlayerSetInfo.removeCardGroup@card group not found", uid, operType, target);
                return false;
            }

            setInfo.cardGroups.splice(rmIndex, 1);
            return true;
        }

        /**
         * 删除最近一张打出的牌
         */
        public removeLastDiscard(lastOperDetail): boolean {
            let OperType = Protocol.getEnum("mahjong.OperType");
            if(!lastOperDetail || lastOperDetail.operType != OperType.DA) {
                console.error("mahjong.model.PlayerSetInfo.removeLastDiscard@last discard not found", JSON.stringify(lastOperDetail));
                return false;
            }
            let setInfo = this.getByUid(lastOperDetail.uid);
            let rmCard = setInfo.discards.splice(setInfo.discards.length-1, 1);
            if(rmCard[0] != lastOperDetail.target) {
                console.error("mahjong.model.PlayerSetInfo.removeLastDiscard@last discard not matched", JSON.stringify(lastOperDetail), rmCard[0]);
                return false;
            }
            return true;
        }

    }
}