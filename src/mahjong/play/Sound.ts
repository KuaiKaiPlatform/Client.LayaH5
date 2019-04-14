module mahjong.play {
    
    /**
     * 麻将声音
     */
    export class Sound {

        /**
         * 播放打牌音效
         */
        public static playCard(sex, target, rule) {
            let dialect = common.data.GlobalSetting.getDialect(rule);
            Laya.SoundManager.playSound("res/sounds/mahjong/" + dialect + "/" + sex + "/" + target + ".wav");
        }

        /**
         * 播放操作音效
         */
        public static playOper(sex, oper, rule) {
            let dialect = common.data.GlobalSetting.getDialect(rule);
            Laya.SoundManager.playSound("res/sounds/mahjong/" + dialect + "/" + sex + "/" + oper + ".wav");
        }

    }
}
