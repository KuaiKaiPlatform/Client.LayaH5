module mahjong.play.model {

    /*
     *  麻将玩家牌局信息
     */
    export class PlayerSetInfo extends common.play.model.PlayerSetInfo {

        constructor(setInfos) {
            super(setInfos);
        }

        public static hasMo(setInfo): boolean {
            return setInfo.handCardNum %3 == 2;
        }

    }
}