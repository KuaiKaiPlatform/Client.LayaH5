module mahjong.play {

    export enum Position {  // 玩家位置
        SELF,
        NEXT,
        OPPOSITE,
        PREVIOUS,
    }

    export enum Direction { // 玩家方位
        DONG = 1,
        NAN = 2,
        XI = 3,
        BEI = 4,
    }

}
