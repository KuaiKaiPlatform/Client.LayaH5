module common.play.model {
    /*
     *   牌局信息
     */
    export class SetInfo {

        private setInit;

        constructor(setInit) {
            this.setInit = setInit;
        }

        public getCurrentSet() {
            return this.setInit.curSet;
        }

    }
}