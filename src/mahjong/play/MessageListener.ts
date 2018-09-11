module mahjong.play {

    import GameSetting = common.play.model.GameSetting;

    // 牌桌消息监听器
    export class MessageListener extends common.play.MessageListener {

        public constructor(deskController) {
            super(deskController);
        }

    }
}
