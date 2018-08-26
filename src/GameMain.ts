// 程序入口
class GameMain {
    constructor() {
        Laya.init(1334, 750);

        let deskCtrl = new mahjong.play.DeskController(100860);
        deskCtrl.onEnterRes({
            basicInfos: [{
                uid: 100860,
                nkn: "阿列的脚印",
                direction: mahjong.play.Direction.XI,
                head: "http://",
                points: [187]
            }, {
                uid: 100861,
                nkn: "龙的传人",
                direction: mahjong.play.Direction.BEI,
                head: "http://",
                points: [27]
            }, {
                uid: 100862,
                nkn: "未来不是梦",
                direction: mahjong.play.Direction.DONG,
                head: "http://",
                points: [-88]
            }]
        });
    }

}
new GameMain();