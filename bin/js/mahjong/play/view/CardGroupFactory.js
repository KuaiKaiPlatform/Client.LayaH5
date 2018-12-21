var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var view;
        (function (view) {
            var View = Laya.View;
            /**
             *   明牌显示工厂类
             */
            var CardGroupFactory = (function () {
                function CardGroupFactory() {
                }
                /**
                 *   新建一组自己的明牌
                 */
                CardGroupFactory.createSelfGroup = function (theme, cardGroup) {
                    var result = new View();
                    result.width = 180;
                    result.height = 100;
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    // 用于操作的牌
                    cardGroup.cards.forEach(function (card, index) {
                        var singleCard = (cardGroup.operType == OperType.AN_GANG) ? view.SingleCardFactory.createSelfGroupHidden(theme) : view.SingleCardFactory.createSelfGroupCard(theme, card);
                        singleCard.left = 60 * index;
                        singleCard.bottom = 0;
                        result.addChild(singleCard);
                    });
                    // 目标牌
                    var singleCard = (cardGroup.operType == OperType.BU_GANG) ? view.SingleCardFactory.createSelfGroupHidden(theme) : view.SingleCardFactory.createSelfGroupCard(theme, cardGroup.target);
                    switch (cardGroup.operType) {
                        case OperType.CHI:
                        case OperType.PENG:
                            singleCard.left = 60 * 2;
                            singleCard.bottom = 0;
                            result.addChild(singleCard);
                            break;
                        case OperType.AN_GANG:
                        case OperType.BU_GANG:
                        case OperType.DIAN_GANG:
                            singleCard.left = 60;
                            result.addChild(singleCard);
                            break;
                    }
                    return result;
                };
                /**
                 *   新建一组对家的明牌
                 */
                CardGroupFactory.createOppositeGroup = function (theme, cardGroup) {
                    var result = new View();
                    result.width = 114;
                    result.height = 64;
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    // 用于操作的牌
                    cardGroup.cards.forEach(function (card, index) {
                        var singleCard = (cardGroup.operType == OperType.AN_GANG) ? view.SingleCardFactory.createOppositeHidden(theme) : view.SingleCardFactory.createLandscapeDiscard(theme, card);
                        singleCard.left = 38 * index;
                        singleCard.bottom = 0;
                        result.addChild(singleCard);
                    });
                    // 目标牌
                    var singleCard = (cardGroup.operType == OperType.BU_GANG || cardGroup.operType == OperType.AN_GANG) ?
                        view.SingleCardFactory.createOppositeHidden(theme) : view.SingleCardFactory.createLandscapeDiscard(theme, cardGroup.target);
                    switch (cardGroup.operType) {
                        case OperType.CHI:
                        case OperType.PENG:
                            singleCard.left = 38 * 2;
                            singleCard.bottom = 0;
                            result.addChild(singleCard);
                            break;
                        case OperType.AN_GANG:
                        case OperType.BU_GANG:
                        case OperType.DIAN_GANG:
                            singleCard.left = 38;
                            result.addChild(singleCard);
                            break;
                    }
                    return result;
                };
                /**
                 *   新建一组下家的明牌
                 */
                CardGroupFactory.createNextGroup = function (theme, cardGroup) {
                    var result = new View();
                    result.width = 45;
                    result.height = 92;
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    // 用于操作的牌
                    cardGroup.cards.forEach(function (card, index) {
                        var singleCard = (cardGroup.operType == OperType.AN_GANG) ? view.SingleCardFactory.createNextHidden(theme) : view.SingleCardFactory.createNextCard(theme, card);
                        singleCard.top = 27 * index;
                        result.addChild(singleCard);
                    });
                    // 目标牌
                    var singleCard = (cardGroup.operType == OperType.BU_GANG || cardGroup.operType == OperType.AN_GANG) ?
                        view.SingleCardFactory.createNextHidden(theme) : view.SingleCardFactory.createNextCard(theme, cardGroup.target);
                    switch (cardGroup.operType) {
                        case OperType.CHI:
                        case OperType.PENG:
                            singleCard.top = 27 * 2;
                            result.addChild(singleCard);
                            break;
                        case OperType.AN_GANG:
                        case OperType.BU_GANG:
                        case OperType.DIAN_GANG:
                            singleCard.top = 22;
                            result.addChild(singleCard);
                            break;
                    }
                    return result;
                };
                /**
                 *   新建一组上家的明牌
                 */
                CardGroupFactory.createPreGroup = function (theme, cardGroup) {
                    var result = new View();
                    result.width = 45;
                    result.height = 92;
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    // 用于操作的牌
                    cardGroup.cards.forEach(function (card, index) {
                        var singleCard = (cardGroup.operType == OperType.AN_GANG) ? view.SingleCardFactory.createPreHidden(theme) : view.SingleCardFactory.createPreCard(theme, card);
                        singleCard.top = 27 * index;
                        result.addChild(singleCard);
                    });
                    // 目标牌
                    var singleCard = (cardGroup.operType == OperType.BU_GANG || cardGroup.operType == OperType.AN_GANG) ?
                        view.SingleCardFactory.createPreHidden(theme) : view.SingleCardFactory.createPreCard(theme, cardGroup.target);
                    switch (cardGroup.operType) {
                        case OperType.CHI:
                        case OperType.PENG:
                            singleCard.top = 27 * 2;
                            result.addChild(singleCard);
                            break;
                        case OperType.AN_GANG:
                        case OperType.BU_GANG:
                        case OperType.DIAN_GANG:
                            singleCard.top = 22;
                            result.addChild(singleCard);
                            break;
                    }
                    return result;
                };
                return CardGroupFactory;
            }());
            view.CardGroupFactory = CardGroupFactory;
        })(view = play.view || (play.view = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=CardGroupFactory.js.map