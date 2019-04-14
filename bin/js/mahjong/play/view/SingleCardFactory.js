var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var view;
        (function (view) {
            var Image = Laya.Image;
            /**
             *   单张麻将显示工厂类
             */
            var SingleCardFactory = (function () {
                function SingleCardFactory() {
                }
                SingleCardFactory.init = function () {
                    this.MahjongTheme = Protocol.getEnum("common.MahjongTheme");
                };
                /**
                 *   新建一张自己的指定手牌
                 */
                SingleCardFactory.createSelfHand = function (params) {
                    var singleCard;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            singleCard = new ui.mahjong.SingleCardSelfHandGreenUI();
                            break;
                        case this.MahjongTheme.YELLOW:
                            singleCard = new ui.mahjong.SingleCardSelfHandGreenUI();
                            break;
                        case this.MahjongTheme.BLUE:
                            singleCard = new ui.mahjong.SingleCardSelfHandGreenUI();
                            break;
                        default:
                            singleCard = new ui.mahjong.SingleCardSelfHandGreenUI();
                            break;
                    }
                    var cardImage = singleCard.getChildByName("card");
                    cardImage.skin = "mahjong/card/self_hand_" + params.card + ".png";
                    cardImage.visible = true;
                    if (params.jiaoRightTopSkin) {
                        var jiaoRightTop = singleCard.getChildByName("jiao_right_top");
                        jiaoRightTop.skin = params.jiaoRightTopSkin;
                        jiaoRightTop.visible = true;
                    }
                    return singleCard;
                };
                /**
                 *   新建一张自己的指定明牌（吃、碰、杠）
                 */
                SingleCardFactory.createSelfGroupCard = function (card) {
                    var singleCard;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            singleCard = new ui.mahjong.SingleCardSelfGroupGreenUI();
                            break;
                        case this.MahjongTheme.YELLOW:
                            singleCard = new ui.mahjong.SingleCardSelfGroupGreenUI();
                            break;
                        case this.MahjongTheme.BLUE:
                            singleCard = new ui.mahjong.SingleCardSelfGroupGreenUI();
                            break;
                        default:
                            singleCard = new ui.mahjong.SingleCardSelfGroupGreenUI();
                            break;
                    }
                    var cardImage = singleCard.getChildByName("card");
                    cardImage.skin = "mahjong/card/self_group_" + card + ".png";
                    cardImage.visible = true;
                    return singleCard;
                };
                /**
                 *   新建一张自己明牌中隐藏麻将Image
                 */
                SingleCardFactory.createSelfGroupHidden = function () {
                    var path;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            path = "mahjong/card/self_group_hidden_green.png";
                            break;
                        case this.MahjongTheme.YELLOW:
                            path = "mahjong/card/self_group_hidden_yellow.png";
                            break;
                        case this.MahjongTheme.BLUE:
                            path = "mahjong/card/self_group_hidden_blue.png";
                            break;
                        default:
                            path = "mahjong/card/self_group_hidden_green.png";
                            break;
                    }
                    var image = new Image(path);
                    image.width = 60;
                    image.height = 84;
                    return image;
                };
                /**
                 *   新建一张竖向指定麻将牌
                 */
                SingleCardFactory.createLandscapeCard = function (params) {
                    var singleCard;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                            break;
                        case this.MahjongTheme.YELLOW:
                            singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                            break;
                        case this.MahjongTheme.BLUE:
                            singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                            break;
                        default:
                            singleCard = new ui.mahjong.SingleCardLandscapeGreenUI();
                            break;
                    }
                    var cardImage = singleCard.getChildByName("card");
                    cardImage.skin = "mahjong/card/self_group_" + params.card + ".png";
                    cardImage.visible = true;
                    if (params.jiaoRightTopSkin) {
                        var jiaoRightTop = singleCard.getChildByName("jiao_right_top");
                        jiaoRightTop.skin = params.jiaoRightTopSkin;
                        jiaoRightTop.visible = true;
                    }
                    return singleCard;
                };
                /**
                 *   新建一张对家手牌麻将Image
                 */
                SingleCardFactory.createOppositeHand = function () {
                    var path;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            path = "mahjong/card/landscape_hand_green.png";
                            break;
                        case this.MahjongTheme.YELLOW:
                            path = "mahjong/card/landscape_hand_yellow.png";
                            break;
                        case this.MahjongTheme.BLUE:
                            path = "mahjong/card/landscape_hand_blue.png";
                            break;
                        default:
                            path = "mahjong/card/landscape_hand_green.png";
                            break;
                    }
                    return new Image(path);
                };
                /**
                 *   新建一张对家明牌中的隐藏麻将Image
                 */
                SingleCardFactory.createOppositeHidden = function () {
                    var path;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            path = "mahjong/card/self_group_hidden_green.png";
                            break;
                        case this.MahjongTheme.YELLOW:
                            path = "mahjong/card/self_group_hidden_yellow.png";
                            break;
                        case this.MahjongTheme.BLUE:
                            path = "mahjong/card/self_group_hidden_blue.png";
                            break;
                        default:
                            path = "mahjong/card/self_group_hidden_green.png";
                            break;
                    }
                    var image = new Image(path);
                    image.width = 38;
                    image.height = 54;
                    return image;
                };
                /**
                 *   新建一张下家指定麻将牌
                 */
                SingleCardFactory.createNextCard = function (card) {
                    var singleCard;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            singleCard = new ui.mahjong.SingleCardNextGreenUI();
                            break;
                        case this.MahjongTheme.YELLOW:
                            singleCard = new ui.mahjong.SingleCardNextGreenUI();
                            break;
                        case this.MahjongTheme.BLUE:
                            singleCard = new ui.mahjong.SingleCardNextGreenUI();
                            break;
                        default:
                            singleCard = new ui.mahjong.SingleCardNextGreenUI();
                            break;
                    }
                    var cardImage = singleCard.getChildByName("card");
                    cardImage.skin = "mahjong/card/next_" + card + ".png";
                    cardImage.visible = true;
                    return singleCard;
                };
                /**
                 *   新建一张下家手牌麻将Image
                 */
                SingleCardFactory.createNextHand = function () {
                    var path;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            path = "mahjong/card/next_hand_green.png";
                            break;
                        case this.MahjongTheme.YELLOW:
                            path = "mahjong/card/next_hand_yellow.png";
                            break;
                        case this.MahjongTheme.BLUE:
                            path = "mahjong/card/next_hand_blue.png";
                            break;
                        default:
                            path = "mahjong/card/next_hand_green.png";
                            break;
                    }
                    return new Image(path);
                };
                /**
                 *   新建一张下家隐藏麻将Image
                 */
                SingleCardFactory.createNextHidden = function () {
                    var path;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            path = "mahjong/card/next_hidden_green.png";
                            break;
                        case this.MahjongTheme.YELLOW:
                            path = "mahjong/card/next_hidden_yellow.png";
                            break;
                        case this.MahjongTheme.BLUE:
                            path = "mahjong/card/next_hidden_blue.png";
                            break;
                        default:
                            path = "mahjong/card/next_hidden_green.png";
                            break;
                    }
                    var image = new Image(path);
                    image.width = 45;
                    image.height = 38;
                    return image;
                };
                /**
                 *   新建一张上家指定麻将牌
                 */
                SingleCardFactory.createPreCard = function (card) {
                    var singleCard;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            singleCard = new ui.mahjong.SingleCardPreGreenUI();
                            break;
                        case this.MahjongTheme.YELLOW:
                            singleCard = new ui.mahjong.SingleCardPreGreenUI();
                            break;
                        case this.MahjongTheme.BLUE:
                            singleCard = new ui.mahjong.SingleCardPreGreenUI();
                            break;
                        default:
                            singleCard = new ui.mahjong.SingleCardPreGreenUI();
                            break;
                    }
                    var cardImage = singleCard.getChildByName("card");
                    cardImage.skin = "mahjong/card/pre_" + card + ".png";
                    cardImage.visible = true;
                    return singleCard;
                };
                /**
                 *   新建一张上家手牌麻将Image
                 */
                SingleCardFactory.createPreHand = function () {
                    var path;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            path = "mahjong/card/pre_hand_green.png";
                            break;
                        case this.MahjongTheme.YELLOW:
                            path = "mahjong/card/pre_hand_yellow.png";
                            break;
                        case this.MahjongTheme.BLUE:
                            path = "mahjong/card/pre_hand_blue.png";
                            break;
                        default:
                            path = "mahjong/card/pre_hand_green.png";
                            break;
                    }
                    return new Image(path);
                };
                /**
                 *   新建一张上家隐藏麻将Image
                 */
                SingleCardFactory.createPreHidden = function () {
                    var path;
                    switch (common.data.GlobalSetting.get("mahjongTheme")) {
                        case this.MahjongTheme.GREEN:
                            path = "mahjong/card/pre_hidden_green.png";
                            break;
                        case this.MahjongTheme.YELLOW:
                            path = "mahjong/card/pre_hidden_yellow.png";
                            break;
                        case this.MahjongTheme.BLUE:
                            path = "mahjong/card/pre_hidden_blue.png";
                            break;
                        default:
                            path = "mahjong/card/pre_hidden_green.png";
                            break;
                    }
                    var image = new Image(path);
                    image.width = 45;
                    image.height = 38;
                    return image;
                };
                return SingleCardFactory;
            }());
            view.SingleCardFactory = SingleCardFactory;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=SingleCardFactory.js.map