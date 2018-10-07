// 程序入口

import Protocol = common.pb.Protocol;
import Login = common.conn.Login;
import MessageHandler = common.msg.MessageHandler;
import MessageSender = common.msg.MessageSender;

class GameMain {
    constructor() {

        Laya.init(1334, 750, Laya.WebGL);
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.stage.scaleMode = "exactfit";

        //mahjong.Module.test();

        MessageHandler.init();
        MessageSender.init();

        // 初始化Protobuf
        Protocol.init().then(() => {
            // 初始化各模块
            return this.initModules();
        }).then(() => {
            console.log("GameMain@Modules init finish.");
            // 连接服务器
            Login.init();
            return Login.connectGs();
        });
    }

    /**
     * 初始化各模块
     */
    private initModules() {
        let promises = new Array();
        promises.push(mahjong.Module.init());
        promises.push(common.play.Module.init());
        return Promise.all(promises);
    }

}
new GameMain();