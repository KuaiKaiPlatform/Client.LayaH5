module common.model {
    /*
     *   玩家基本信息
     */
    export class PlayerBasicInfo {

        private basicInfos = [];

        // private uid: number;
        // private direction: number;
        // private nickName: string;
        // private head: string;
        // private sex: number;
        // private ip: string;
        // private state: number;
        // private offline: boolean;
        // private points: number[];

        constructor(basicInfos) {
            basicInfos.forEach(basicInfo => {
                this.add(basicInfo);
            });
        }

        public getByUid(uid) { // 返回指定uid的玩家基本信息
            return this.basicInfos[uid.toString()];
        }

        public add(basicInfo) { // 增加一名玩家的基本信息
            this.basicInfos[basicInfo.uid.toString()] = basicInfo;
        }

        public getAll() {
            return this.basicInfos;
        }

    }
}