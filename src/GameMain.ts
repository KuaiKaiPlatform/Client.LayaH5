// 程序入口

import Protocol = common.pb.Protocol;
import Login = common.conn.Login;
import MessageHandler = common.msg.MessageHandler;
import MessageSender = common.msg.MessageSender;
import GameEventDispacher = common.event.GameEventDispacher;
//import GlobalSetting = common.data.GlobalSetting;

class GameMain {
    constructor() {

        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;

        // if(Laya.Render.isConchApp) {
        //     console.log("laya native");
        //     Laya.Browser.window.showAlertOnJsException(false);
        // }

        // 日期格式
        common.utils.DateFormat.init();

        MessageHandler.init();
        MessageSender.init();

        // 模式窗口点击边缘，不关闭窗口
        UIConfig.closeDialogOnSide = false;

        // 初始化Protobuf
        Protocol.init().then(() => {
            // 初始化各模块
            return this.initModules();
        }).then(() => {
            console.log("GameMain@Modules init finish.");
            // 连接服务器
            return Login.init().connectGs();
        });
    }

    /**
     * 初始化各模块
     */
    private initModules() {
        let promises = new Array();
        promises.push(common.Module.init());
        promises.push(hall.Module.init());
        promises.push(mahjong.Module.init());
        return Promise.all(promises);
    }

}

Laya.MiniAdpter.init();
Laya.init(1334, 750, Laya.WebGL);

new GameMain();

