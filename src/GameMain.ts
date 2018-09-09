// 程序入口
class GameMain {
    constructor() {
        Laya.init(1334, 750);

        let deskCtrl = new mahjong.play.controller.DeskController(100860);
        deskCtrl.onEnterRes({
            basicInfos: [{
                uid: 100860,
                nkn: "阿列的脚印",
                direction: mahjong.play.Direction.XI,
                head: "http://",
                state: 0,
                points: [187]
            }, {
                uid: 100861,
                nkn: "龙的传人",
                direction: mahjong.play.Direction.BEI,
                head: "http://",
                state: 1,
                points: [27]
            }, {
                uid: 100862,
                nkn: "未来不是梦",
                direction: mahjong.play.Direction.DONG,
                head: "http://",
                state: 1,
                points: [-88]
            }],
            setting: {
                rule: 61007,
                total_set: 8
            }
        });

        setTimeout(() => deskCtrl.onPlayerEnter({
            uid: 100863,
            nkn: "鲁班七号",
            direction: mahjong.play.Direction.NAN,
            head: "http://",
            state: 0,
            points: [-126]
        }), 1000);


        // setTimeout(() => deskCtrl.onPlayerExit({
        //     uid: 100862
        // }), 3000);

    }

}
new GameMain();