// 程序入口
class GameMain {
    constructor() {
        Laya.init(1334, 750);

        //this.onLoaded();
        //预加载资源
        Laya.loader.load([
            "res/atlas/Desk/Player.atlas",
            "laya/assets/Desk/bg.png"
        ], Laya.Handler.create(this, this.onLoaded));
    }
    private onLoaded(): void {
        //实例化牌桌
        var deskUI: ui.mahjong.DeskUI = new ui.mahjong.DeskUI();

        //添加到stage
        Laya.stage.addChild(deskUI);
    }
}
new GameMain();