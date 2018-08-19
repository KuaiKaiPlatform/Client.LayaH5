module common.model {
    /*
    玩家基本信息类 
    */
    export class PlayerBasicInfo {

        private uid: number;
        private pos: number;
        private nickName: string;
        private head: string;
        private sex: number;
        private ip: string;
        private state: number;
        private offline: boolean;
        private points: number[];

        constructor() {
            //super();

        }

    }
}