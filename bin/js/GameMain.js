// 程序入口
var Protocol = common.pb.Protocol;
var Login = common.conn.Login;
var MessageHandler = common.msg.MessageHandler;
var MessageSender = common.msg.MessageSender;
var GameEventDispacher = common.event.GameEventDispacher;
var GlobalSetting = common.data.GlobalSetting;
var GameMain = (function () {
    function GameMain() {
        var _this = this;
        Laya.init(1334, 750, Laya.WebGL);
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.stage.scaleMode = "exactfit";
        // 日期格式
        common.utils.DateFormat.init();
        MessageHandler.init();
        MessageSender.init();
        // 模式窗口点击边缘，不关闭窗口
        UIConfig.closeDialogOnSide = false;
        // 初始化Protobuf
        Protocol.init().then(function () {
            // 初始化各模块
            return _this.initModules();
        }).then(function () {
            console.log("GameMain@Modules init finish.");
            // 连接服务器
            return Login.init().connectGs();
        });
    }
    /**
     * 初始化各模块
     */
    GameMain.prototype.initModules = function () {
        var promises = new Array();
        promises.push(common.play.Module.init());
        promises.push(hall.desk.Module.init());
        promises.push(mahjong.Module.init());
        return Promise.all(promises);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map