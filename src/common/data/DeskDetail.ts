module common.data {
    
    /**
     * 牌桌
     */
    export class DeskDetail {
        // 消息返回的 desk 对象
        private desk;
        private players = {};
        private sGameResult;
        private setResults = {};

        public constructor(desk) {
            this.desk = desk;
            desk.settings = JSON.parse(desk.setting.json);
            desk.players.forEach(player => {
                this.addPlayer(player);
            });
        }

        /**
         * 返回牌桌标识：deskId-clubId
         */
        public getKey() {
            return DeskInfo.getKey(this.desk);
        }

        public getRule() {
            return this.desk.rule;
        }

        public getSettingValue(key) {
            let setting = this.desk.settings;
            return setting?setting[key]:null;
        }

        public getSettingBool(key) {
            let val = this.getSettingValue(key);
            if(!val) return false;
            if(!isNaN(val)) return val > 0;             // 大于1的数字
            return val.toLowerCase() === "true";        // 值为true，其他都是false
        }

        /**
         * 玩家加入牌局
         */
        public addPlayer(player) {
            // 玩家总分
            player.total = 0;
            player.points.forEach(point => player.total += point);
            this.players[player.user.uid] = player;
            console.log("common.model.DeskDetail.addPlayer", player.user.uid, this.getKey());
        }

        public getAllPlayers() {
            return this.players;
        }

        public removeAllPlayers() {
            this.players = {};
        }

        /**
         * 删除一名玩家
         */
        public removePlayer(uid) {
            delete this.players[uid];
        }

        /**
         * 返回指定uid的玩家信息
         */
        public getPlayer(uid) {
            return this.players[uid];
        }

        /**
         * 是否为自己加入的牌桌
         */
        public hasSelf() {
            return Login.getUid() in this.players;
        }

        public getBankerId() {
            return this.desk.bankerId;
        }

        public setBankerId(bankerId) {
            this.desk.bankerId = bankerId;
        }

        public isBanker(uid) {
            return this.desk.bankerId == uid;
        }

        public getCurrentSet() {
            return Math.max(this.desk.curSet, 1); // 从第一局开始
        }

        public setCurrentSet(curSet) {
            this.desk.curSet = curSet;
        }

        public incrCurrentSet() {
            this.desk.curSet++;
        }

        public setStatus(status) {
            this.desk.status = status;
        }

        public getStatus() {
            return this.desk.status;
        }

        public setPrepared(uid) {
            this.players[uid].prepared = true;
        }

        public setBet(uid, bet) {
            this.players[uid].bet = bet;
        }

        public clearPrepared() {
            for(let uid in this.players) {
                this.players[uid].prepared = false;
            }
        }

        public addSetResult(sSetResult) {
            this.setResults[sSetResult.curSet] = sSetResult;
        }

        public getSetResult(set) {
            return this.setResults[set];
        }

        public getCurSetResult() {
            return this.setResults[this.getCurrentSet()];
        }

        public setGameResult(sGameResult) {
            this.sGameResult = sGameResult;
        }

        public getGameResult() {
            return this.sGameResult;
        }

    }
}