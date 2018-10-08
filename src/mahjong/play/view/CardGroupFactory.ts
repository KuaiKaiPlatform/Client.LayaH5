module mahjong.play.view {

    import View = Laya.View;
    import Image = Laya.Image;

    /**
     *   明牌显示工厂类
     */
    export class CardGroupFactory {

        /**
         *   新建一组自己的明牌
         */
        public static createSelfGroup(theme, cardGroup) {
            let result = new View();
            result.width = 180;
            result.height = 100;

            let OperType = Protocol.getEnum("mahjong.OperType");

            // 用于操作的牌
            cardGroup.cards.forEach((card, index) => {
                let singleCard = (cardGroup.operType == OperType.AN_GANG)?SingleCardFactory.createSelfGroupHidden(theme):SingleCardFactory.createSelfGroupCard(theme, card);
                singleCard.left = 60 * index;
                singleCard.bottom = 0;
                result.addChild(singleCard);
            });

            // 目标牌
            let singleCard = (cardGroup.operType == OperType.BU_GANG)?SingleCardFactory.createSelfGroupHidden(theme):SingleCardFactory.createSelfGroupCard(theme, cardGroup.target);
            switch(cardGroup.operType) {
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
        }

        /**
         *   新建一组对家的明牌
         */
        public static createOppositeGroup(theme, cardGroup) {
            let result = new View();
            result.width = 114;
            result.height = 64;

            let OperType = Protocol.getEnum("mahjong.OperType");

            // 用于操作的牌
            cardGroup.cards.forEach((card, index) => {
                let singleCard = (cardGroup.operType == OperType.AN_GANG)?SingleCardFactory.createOppositeHidden(theme):SingleCardFactory.createLandscapeDiscard(theme, card);
                singleCard.left = 38 * index;
                singleCard.bottom = 0;
                result.addChild(singleCard);
            });

            // 目标牌
            let singleCard = (cardGroup.operType == OperType.BU_GANG || cardGroup.operType == OperType.AN_GANG)?
            SingleCardFactory.createOppositeHidden(theme):SingleCardFactory.createLandscapeDiscard(theme, cardGroup.target);
            switch(cardGroup.operType) {
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
        }

        /**
         *   新建一组下家的明牌
         */
        public static createNextGroup(theme, cardGroup) {
            let result = new View();
            result.width = 45;
            result.height = 92;

            let OperType = Protocol.getEnum("mahjong.OperType");

            // 用于操作的牌
            cardGroup.cards.forEach((card, index) => {
                let singleCard = (cardGroup.operType == OperType.AN_GANG)?SingleCardFactory.createNextHidden(theme):SingleCardFactory.createNextCard(theme, card);
                singleCard.top = 27 * index;
                result.addChild(singleCard);
            });

            // 目标牌
            let singleCard = (cardGroup.operType == OperType.BU_GANG || cardGroup.operType == OperType.AN_GANG)?
            SingleCardFactory.createNextHidden(theme):SingleCardFactory.createNextCard(theme, cardGroup.target);
            switch(cardGroup.operType) {
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
        }

        /**
         *   新建一组上家的明牌
         */
        public static createPreGroup(theme, cardGroup) {
            let result = new View();
            result.width = 45;
            result.height = 92;

            let OperType = Protocol.getEnum("mahjong.OperType");

            // 用于操作的牌
            cardGroup.cards.forEach((card, index) => {
                let singleCard = (cardGroup.operType == OperType.AN_GANG)?SingleCardFactory.createPreHidden(theme):SingleCardFactory.createPreCard(theme, card);
                singleCard.top = 27 * index;
                result.addChild(singleCard);
            });

            // 目标牌
            let singleCard = (cardGroup.operType == OperType.BU_GANG || cardGroup.operType == OperType.AN_GANG)?
            SingleCardFactory.createPreHidden(theme):SingleCardFactory.createPreCard(theme, cardGroup.target);
            switch(cardGroup.operType) {
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
        }

    }
}
