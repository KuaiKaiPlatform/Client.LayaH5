module mahjong.play.view {
    import View = Laya.View;
    import Image = Laya.Image;

    /**
     *   单张麻将显示工厂类
     */
    export class SingleCardFactory {

        /**
         *   新建竖向（自己和对家）打出的一张指定麻将牌
         */
        public static createLandscapeDiscard(theme, card) {
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
            let cardImage = singleCard.getChildByName("card") as Image;
            cardImage.skin = "mahjong/card/landscape_" + card + ".png";
            cardImage.visible = true;
            return singleCard;
        }

        /**
         *   新建对家单张手牌麻将Image
         */
        public static createOppositeHand(theme) {
            let path: string;
            switch(theme) {
            case mahjong.play.Theme.GREEN:
                path = "mahjong/card/landscape_hand_green.png";
                break;
            case mahjong.play.Theme.YELLOW:
                path = "mahjong/card/landscape_hand_green.png";
                break;
            case mahjong.play.Theme.BLUE:
                path = "mahjong/card/landscape_hand_green.png";
                break;
            default:
                path = "mahjong/card/landscape_hand_green.png";
                break;
            }
            return new Image(path);
        }

        /**
         *   新建下家打出的一张指定麻将牌
         */
        public static createNextDiscard(theme, card) {
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
            let cardImage = singleCard.getChildByName("card") as Image;
            cardImage.skin = "mahjong/card/next_" + card + ".png";
            cardImage.visible = true;
            return singleCard;
        }

        /**
         *   新建下家单张手牌麻将Image
         */
        public static createNextHand(theme) {
            let path: string;
            switch(theme) {
            case mahjong.play.Theme.GREEN:
                path = "mahjong/card/next_hand_green.png";
                break;
            case mahjong.play.Theme.YELLOW:
                path = "mahjong/card/next_hand_green.png";
                break;
            case mahjong.play.Theme.BLUE:
                path = "mahjong/card/next_hand_green.png";
                break;
            default:
                path = "mahjong/card/next_hand_green.png";
                break;
            }
            return new Image(path);
        }

        /**
         *   新建上家打出的一张指定麻将牌
         */
        public static createPreDiscard(theme, card) {
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
            let cardImage = singleCard.getChildByName("card") as Image;
            cardImage.skin = "mahjong/card/pre_" + card + ".png";
            cardImage.visible = true;
            return singleCard;
        }

        /**
         *   新建上家单张手牌麻将Image
         */
        public static createPreHand(theme) {
            let path: string;
            switch(theme) {
            case mahjong.play.Theme.GREEN:
                path = "mahjong/card/pre_hand_green.png";
                break;
            case mahjong.play.Theme.YELLOW:
                path = "mahjong/card/pre_hand_green.png";
                break;
            case mahjong.play.Theme.BLUE:
                path = "mahjong/card/pre_hand_green.png";
                break;
            default:
                path = "mahjong/card/pre_hand_green.png";
                break;
            }
            return new Image(path);
        }

    }
}
