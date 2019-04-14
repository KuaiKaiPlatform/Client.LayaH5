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
        public static createSelfGroup(cardGroup) {
            let result = new View();
            result.width = 180;
            result.height = 100;

            //let OperType = Protocol.getEnum("mahjong.OperType");
            let OperType = Laya.Browser.window.mahjong.OperType;

            // 用于操作的牌
            cardGroup.cards.forEach((card, index) => {
                let singleCard = (cardGroup.operType == OperType.AN_GANG)?SingleCardFactory.createSelfGroupHidden():
                    SingleCardFactory.createSelfGroupCard(card);
                singleCard.left = 60 * index;
                singleCard.bottom = 0;
                result.addChild(singleCard);
            });

            // 目标牌
            let singleCard = (cardGroup.operType == OperType.BU_GANG)?SingleCardFactory.createSelfGroupHidden():
                SingleCardFactory.createSelfGroupCard(cardGroup.target);
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
        public static createOppositeGroup(cardGroup) {
            let result = new View();
            result.width = 114;
            result.height = 64;

            //let OperType = Protocol.getEnum("mahjong.OperType");
            let OperType = Laya.Browser.window.mahjong.OperType;

            // 用于操作的牌
            cardGroup.cards.forEach((card, index) => {
                let singleCard = (cardGroup.operType == OperType.AN_GANG)?SingleCardFactory.createOppositeHidden():
                    mahjong.play.controller.DeskController.instance.createLandscapeCard(card);
                singleCard.left = 38 * index;
                singleCard.bottom = 0;
                result.addChild(singleCard);
            });

            // 目标牌
            let singleCard = (cardGroup.operType == OperType.BU_GANG || cardGroup.operType == OperType.AN_GANG)?
            SingleCardFactory.createOppositeHidden():mahjong.play.controller.DeskController.instance.createLandscapeCard(cardGroup.target);
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
        public static createNextGroup(cardGroup) {
            let result = new View();
            result.width = 45;
            result.height = 92;

            //let OperType = Protocol.getEnum("mahjong.OperType");
            let OperType = Laya.Browser.window.mahjong.OperType;

            // 用于操作的牌
            cardGroup.cards.forEach((card, index) => {
                let singleCard = (cardGroup.operType == OperType.AN_GANG)?SingleCardFactory.createNextHidden():
                    SingleCardFactory.createNextCard(card);
                singleCard.top = 27 * index;
                result.addChild(singleCard);
            });

            // 目标牌
            let singleCard = (cardGroup.operType == OperType.BU_GANG || cardGroup.operType == OperType.AN_GANG)?
            SingleCardFactory.createNextHidden():SingleCardFactory.createNextCard(cardGroup.target);
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
        public static createPreGroup(cardGroup) {
            let result = new View();
            result.width = 45;
            result.height = 92;

            //let OperType = Protocol.getEnum("mahjong.OperType");
            let OperType = Laya.Browser.window.mahjong.OperType;

            // 用于操作的牌
            cardGroup.cards.forEach((card, index) => {
                let singleCard = (cardGroup.operType == OperType.AN_GANG)?SingleCardFactory.createPreHidden():
                    SingleCardFactory.createPreCard(card);
                singleCard.top = 27 * index;
                result.addChild(singleCard);
            });

            // 目标牌
            let singleCard = (cardGroup.operType == OperType.BU_GANG || cardGroup.operType == OperType.AN_GANG)?
            SingleCardFactory.createPreHidden():SingleCardFactory.createPreCard(cardGroup.target);
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
