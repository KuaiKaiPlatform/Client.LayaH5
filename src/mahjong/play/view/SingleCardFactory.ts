module mahjong.play.view {
    import View = Laya.View;
	import Sprite = Laya.Sprite;

    /**
     *   单个麻将显示工厂类
     */
    export class SingleCardFactory {

        /**
         *   新建正面单个麻将UI
         */
        public static createLandscape(theme, card) {
            let singleCard: View;
            switch(theme) {
            case mahjong.play.Theme.GREEN:
                singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                break;
            case mahjong.play.Theme.YELLOW:
                singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                break;
            case mahjong.play.Theme.BLUE:
                singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                break;
            default:
                singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                break;
            }
            let cardSprite = new Sprite();
            cardSprite.loadImage("mahjong/card/landscape_" + card + ".png");
            singleCard.addChild(cardSprite);
            return singleCard;
        }

        /**
         *   新建下家单个麻将UI
         */
        public static createNext(theme, card) {
            let singleCard: View;
            switch(theme) {
            case mahjong.play.Theme.GREEN:
                singleCard = new ui.mahjong.SingleCardNextGreenUI();
                break;
            case mahjong.play.Theme.YELLOW:
                singleCard = new ui.mahjong.SingleCardNextGreenUI();
                break;
            case mahjong.play.Theme.BLUE:
                singleCard = new ui.mahjong.SingleCardNextGreenUI();
                break;
            default:
                singleCard = new ui.mahjong.SingleCardNextGreenUI();
                break;
            }
            let cardSprite = new Sprite();
            cardSprite.loadImage("mahjong/card/next_" + card + ".png");
            singleCard.addChild(cardSprite);
            return singleCard;
        }

        /**
         *   新建上家单个麻将UI
         */
        public static createPre(theme, card) {
            let singleCard: View;
            switch(theme) {
            case mahjong.play.Theme.GREEN:
                singleCard = new ui.mahjong.SingleCardPreGreenUI();
                break;
            case mahjong.play.Theme.YELLOW:
                singleCard = new ui.mahjong.SingleCardPreGreenUI();
                break;
            case mahjong.play.Theme.BLUE:
                singleCard = new ui.mahjong.SingleCardPreGreenUI();
                break;
            default:
                singleCard = new ui.mahjong.SingleCardPreGreenUI();
                break;
            }
            let cardSprite = new Sprite();
            cardSprite.loadImage("mahjong/card/pre_" + card + ".png");
            singleCard.addChild(cardSprite);
            return singleCard;
        }

    }
}
