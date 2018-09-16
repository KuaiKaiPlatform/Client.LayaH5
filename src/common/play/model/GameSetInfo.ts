module common.play.model {
    /*
     *   牌局信息
     */
    export class GameSetInfo {

        protected setInit;
        protected playerSetInfo: PlayerSetInfo;

        constructor(setInit) {
            this.setInit = setInit;
        }

        public getPlayerSetInfo() {
            return this.playerSetInfo;
        }

        public getCurrentSet() {
            return this.setInit.curSet;
        }

    }
}