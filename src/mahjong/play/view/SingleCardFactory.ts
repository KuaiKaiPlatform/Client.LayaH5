module mahjong.play.view {
    import View = Laya.View;
    import Image = Laya.Image;

    /**
     *   单张麻将显示工厂类
     */
    export class SingleCardFactory {

        private static Theme;

        public static init() {
            this.Theme = Protocol.getEnum("common.MahjongTheme");
        }

        /**
         *   新建一张自己的指定手牌
         */
        public static createSelfHand(params) {
            let singleCard: View;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                singleCard = new ui.mahjong.SingleCardSelfHandGreenUI();
                break;
            case this.Theme.YELLOW:
                singleCard = new ui.mahjong.SingleCardSelfHandGreenUI();
                break;
            case this.Theme.BLUE:
                singleCard = new ui.mahjong.SingleCardSelfHandGreenUI();
                break;
            default:
                singleCard = new ui.mahjong.SingleCardSelfHandGreenUI();
                break;
            }
            let cardImage = singleCard.getChildByName("card") as Image;
            cardImage.skin = "mahjong/card/self_hand_" + params.card + ".png";
            cardImage.visible = true;

            if(params.jiaoRightTopSkin) {
                let jiaoRightTop = singleCard.getChildByName("jiao_right_top") as Image;
                jiaoRightTop.skin = params.jiaoRightTopSkin;
                jiaoRightTop.visible = true;
            }

            return singleCard;
        }

        /**
         *   新建一张自己的指定明牌（吃、碰、杠）
         */
        public static createSelfGroupCard(card) {
            let singleCard: View;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                singleCard = new ui.mahjong.SingleCardSelfGroupGreenUI();
                break;
            case this.Theme.YELLOW:
                singleCard = new ui.mahjong.SingleCardSelfGroupGreenUI();
                break;
            case this.Theme.BLUE:
                singleCard = new ui.mahjong.SingleCardSelfGroupGreenUI();
                break;
            default:
                singleCard = new ui.mahjong.SingleCardSelfGroupGreenUI();
                break;
            }
            let cardImage = singleCard.getChildByName("card") as Image;
            cardImage.skin = "mahjong/card/self_group_" + card + ".png";
            cardImage.visible = true;
            return singleCard;
        }

        /**
         *   新建一张自己明牌中隐藏麻将Image
         */
        public static createSelfGroupHidden() {
            let path: string;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                path = "mahjong/card/self_group_hidden_green.png";
                break;
            case this.Theme.YELLOW:
                path = "mahjong/card/self_group_hidden_yellow.png";
                break;
            case this.Theme.BLUE:
                path = "mahjong/card/self_group_hidden_blue.png";
                break;
            default:
                path = "mahjong/card/self_group_hidden_green.png";
                break;
            }
            let image = new Image(path);
            image.width = 60;
            image.height = 84;
            return image;
        }

        /**
         *   新建一张竖向指定麻将牌
         */
        public static createLandscapeCard(params) {
            let singleCard: View;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                break;
            case this.Theme.YELLOW:
                singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                break;
            case this.Theme.BLUE:
                singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                break;
            default:
                singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                break;
            }
            let cardImage = singleCard.getChildByName("card") as Image;
            cardImage.skin = "mahjong/card/self_group_" + params.card + ".png";
            cardImage.visible = true;

            if(params.jiaoRightTopSkin) {
                let jiaoRightTop = singleCard.getChildByName("jiao_right_top") as Image;
                jiaoRightTop.skin = params.jiaoRightTopSkin;
                jiaoRightTop.visible = true;
            }

            return singleCard;
        }

        /**
         *   新建一张对家手牌麻将Image
         */
        public static createOppositeHand() {
            let path: string;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                path = "mahjong/card/landscape_hand_green.png";
                break;
            case this.Theme.YELLOW:
                path = "mahjong/card/landscape_hand_yellow.png";
                break;
            case this.Theme.BLUE:
                path = "mahjong/card/landscape_hand_blue.png";
                break;
            default:
                path = "mahjong/card/landscape_hand_green.png";
                break;
            }
            return new Image(path);
        }

        /**
         *   新建一张对家明牌中的隐藏麻将Image
         */
        public static createOppositeHidden() {
            let path: string;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                path = "mahjong/card/self_group_hidden_green.png";
                break;
            case this.Theme.YELLOW:
                path = "mahjong/card/self_group_hidden_yellow.png";
                break;
            case this.Theme.BLUE:
                path = "mahjong/card/self_group_hidden_blue.png";
                break;
            default:
                path = "mahjong/card/self_group_hidden_green.png";
                break;
            }
            let image = new Image(path);
            image.width = 38;
            image.height = 54;
            return image;
        }

        /**
         *   新建一张下家指定麻将牌
         */
        public static createNextCard(card) {
            let singleCard: View;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                singleCard = new ui.mahjong.SingleCardNextGreenUI();
                break;
            case this.Theme.YELLOW:
                singleCard = new ui.mahjong.SingleCardNextGreenUI();
                break;
            case this.Theme.BLUE:
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
         *   新建一张下家手牌麻将Image
         */
        public static createNextHand() {
            let path: string;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                path = "mahjong/card/next_hand_green.png";
                break;
            case this.Theme.YELLOW:
                path = "mahjong/card/next_hand_yellow.png";
                break;
            case this.Theme.BLUE:
                path = "mahjong/card/next_hand_blue.png";
                break;
            default:
                path = "mahjong/card/next_hand_green.png";
                break;
            }
            return new Image(path);
        }

        /**
         *   新建一张下家隐藏麻将Image
         */
        public static createNextHidden() {
            let path: string;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                path = "mahjong/card/next_hidden_green.png";
                break;
            case this.Theme.YELLOW:
                path = "mahjong/card/next_hidden_yellow.png";
                break;
            case this.Theme.BLUE:
                path = "mahjong/card/next_hidden_blue.png";
                break;
            default:
                path = "mahjong/card/next_hidden_green.png";
                break;
            }
            let image = new Image(path);
            image.width = 45;
            image.height = 38;
            return image;
        }

        /**
         *   新建一张上家指定麻将牌
         */
        public static createPreCard(card) {
            let singleCard: View;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                singleCard = new ui.mahjong.SingleCardPreGreenUI();
                break;
            case this.Theme.YELLOW:
                singleCard = new ui.mahjong.SingleCardPreGreenUI();
                break;
            case this.Theme.BLUE:
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
         *   新建一张上家手牌麻将Image
         */
        public static createPreHand() {
            let path: string;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                path = "mahjong/card/pre_hand_green.png";
                break;
            case this.Theme.YELLOW:
                path = "mahjong/card/pre_hand_yellow.png";
                break;
            case this.Theme.BLUE:
                path = "mahjong/card/pre_hand_blue.png";
                break;
            default:
                path = "mahjong/card/pre_hand_green.png";
                break;
            }
            return new Image(path);
        }

        /**
         *   新建一张上家隐藏麻将Image
         */
        public static createPreHidden() {
            let path: string;
            switch(GlobalSetting.get("mahjongTheme")) {
            case this.Theme.GREEN:
                path = "mahjong/card/pre_hidden_green.png";
                break;
            case this.Theme.YELLOW:
                path = "mahjong/card/pre_hidden_yellow.png";
                break;
            case this.Theme.BLUE:
                path = "mahjong/card/pre_hidden_blue.png";
                break;
            default:
                path = "mahjong/card/pre_hidden_green.png";
                break;
            }
            let image = new Image(path);
            image.width = 45;
            image.height = 38;
            return image;
        }

    }
}
