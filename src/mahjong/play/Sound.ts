module mahjong.play {
    
    /**
     * 麻将声音
     */
    export class Sound {

        /**
         * 播放打牌音效
         */
        public static playCard(sex, target, rule) {
            let dialect = GlobalSetting.getDialect(rule);
            Laya.SoundManager.playSound("res/sounds/mahjong/" + dialect + "/" + sex + "/" + target + ".mp3");
        }

        /**
         * 播放操作音效
         */
        public static playOper(sex, oper, rule) {
            let dialect = GlobalSetting.getDialect(rule);
            Laya.SoundManager.playSound("res/sounds/mahjong/" + dialect + "/" + sex + "/" + oper + ".mp3");
        }

    }
}
