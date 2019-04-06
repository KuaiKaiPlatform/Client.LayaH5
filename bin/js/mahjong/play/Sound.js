var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        /**
         * 麻将声音
         */
        var Sound = (function () {
            function Sound() {
            }
            /**
             * 播放打牌音效
             */
            Sound.playCard = function (sex, target, rule) {
                var dialect = GlobalSetting.getDialect(rule);
                //Laya.SoundManager.playSound("res/sounds/mahjong/" + dialect + "/" + sex + "/" + target + ".mp3");
            };
            /**
             * 播放操作音效
             */
            Sound.playOper = function (sex, oper, rule) {
                var dialect = GlobalSetting.getDialect(rule);
                //Laya.SoundManager.playSound("res/sounds/mahjong/" + dialect + "/" + sex + "/" + oper + ".mp3");
            };
            return Sound;
        }());
        play.Sound = Sound;
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=Sound.js.map