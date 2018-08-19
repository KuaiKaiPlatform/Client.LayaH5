// 程序入口
class GameMain {
    constructor() {
        Laya.init(1334, 750);

        var desk: mahjong.play.DeskView = new mahjong.play.DeskView();
    }

}
new GameMain();