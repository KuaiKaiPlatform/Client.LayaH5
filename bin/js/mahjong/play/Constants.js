var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var Position;
        (function (Position) {
            Position[Position["SELF"] = 0] = "SELF";
            Position[Position["NEXT"] = 1] = "NEXT";
            Position[Position["OPPOSITE"] = 2] = "OPPOSITE";
            Position[Position["PREVIOUS"] = 3] = "PREVIOUS";
        })(Position = play.Position || (play.Position = {}));
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
        // export enum Theme { // 配色方案
        //     GREEN = 1,
        //     YELLOW = 2,
        //     BLUE = 3
        // }
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=Constants.js.map