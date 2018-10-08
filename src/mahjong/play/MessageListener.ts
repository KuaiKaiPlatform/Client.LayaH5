module mahjong.play {

    // 牌桌消息监听器
    export class MessageListener extends common.play.MessageListener {

        public constructor(deskController) {
            super(deskController);
        }

        /**
         * 自己加入牌桌返回消息
         */
        public onDeskInfo(sDeskInfo): void {
            // let Direction = Protocol.getEnum("mahjong.Direction");
            // console.log("mahjong.play.MessageListener.onDeskInfo@Direction", Direction);
            // for(let key in Direction) {
            //     console.log("mahjong.play.MessageListener.onDeskInfo@Direction", key, Direction[key]);
            // }
            sDeskInfo.desk.players.forEach(player => {
                player.direction = player.seat;
                //console.log("mahjong.play.MessageListener.onDeskInfo@direction", Direction.valueOf(playerInfo.seat));
            });
            //super.onDeskInfo(mahjong.Module.sDeskInfo);
            super.onDeskInfo(sDeskInfo);
            console.log("mahjong.play.MessageListener.onDeskInfo@done", JSON.stringify(sDeskInfo));
        }

        /**
         * 开局或重连后返回牌局消息
         */
        public onSetInit(setInit): void {
            super.onSetInit(setInit);

            let deskView = this.deskView as mahjong.play.view.DeskView;

            // 显示庄家
            deskView.getPlayerBasicView().showBanker(setInit.bankerId);

            // 显示手牌
            deskView.getHandCardsView().showAll();

            // 显示明牌
            deskView.getCardGroupsView().showAll();

            // 显示打出的牌
            deskView.getDiscardsView().showAll();

            
        }

        public toString() {
            return "mahjong.play.MessageListener";
        }

    }
}
