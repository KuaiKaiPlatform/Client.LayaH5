module mahjong.play {

    export enum Position {  // 玩家位置
        SELF,
        NEXT,
        OPPOSITE,
        PREVIOUS,
    }

    // export enum Direction { // 玩家方位
    //     DONG = 1,
    //     NAN = 2,
    //     XI = 3,
    //     BEI = 4,
    // }

    // export enum OperType { // 操作类型
    //     MO = 10,
    //     DA = 20,
    //     CHI = 30,
    //     PENG = 40,
    //     BU_GANG = 50,
    //     AN_GANG = 60,
    //     DIAN_GANG = 70,
    //     TING = 80,
    //     HU = 90
    // }

    export enum Theme { // 配色方案
        GREEN = 1,
        YELLOW = 2,
        BLUE = 3
    }

}
