module mahjong.play.model {
    /*
     *   自身可执行的操作
     */
    export class SelfOperations {

        protected canOperDetails = [];       // 当前可执行的操作

        constructor(canOperDetails) {
            this.canOperDetails = canOperDetails;
        }

        /**
         * 是否有可执行的操作
         */
        public hasOperation(): boolean {
            return this.canOperDetails && this.canOperDetails.length > 0;
        }

        /**
         * 是否有可打的操作
         */
        public hasDaOperation(): boolean {
            let OperType = Protocol.getEnum("mahjong.OperType");
            for(let i=0; i<this.canOperDetails.length; i++) {
                if(this.canOperDetails[i].operType === OperType.DA) return true;
            }
            return false;
        }

        /**
         * 是否有可听的操作
         */
        public hasTingOperation(): boolean {
            let OperType = Protocol.getEnum("mahjong.OperType");
            for(let i=0; i<this.canOperDetails.length; i++) {
                if(this.canOperDetails[i].operType === OperType.TING) return true;
            }
            return false;
        }

        /**
         * 设置可执行的操作
         */
         public setCanOperDetails(canOperDetails): void {
             this.canOperDetails = canOperDetails;
         }

         /**
          * 返回所有可执行操作
          */
        public getCanOperDetails() {
            return this.canOperDetails;
        }


        /**
         * 清空可执行的操作
         */
         public clear(): void {
             this.canOperDetails = [];
         }

    }
}