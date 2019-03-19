module mahjong.play.view {

    /**
     *   比赛结果对话框工厂类
     */
    export class ResultDialogFactory {

        /**
         *   新建一张自己的指定手牌
         */
        public static createGameResultDialog(rule, deskController, sGameResult) {
            let GameRule = Protocol.getEnum("common.GameRule");
            switch(rule) {
            case GameRule.SXMJ:
                return new mahjong.play.view.SXMJGameResultDialog(deskController, sGameResult);
            }

            return new mahjong.play.view.GameResultDialog(deskController, sGameResult);
        }

    }
}
