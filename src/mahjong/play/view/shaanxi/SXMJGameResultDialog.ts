module mahjong.play.view {

    import Handler = Laya.Handler;
    import Label = Laya.Label;
    import Component = Laya.Component;
    import Sprite = Laya.Sprite;
    import Image = Laya.Image;
    import JieSuan = mahjong.data.JieSuan;

    /**
     * 陕西麻将整场牌局结果显示
     */
    export class SXMJGameResultDialog extends mahjong.play.view.GameResultDialog {

        constructor(deskController, sGameResult) {
            super(deskController, sGameResult);
        }

        protected showPlayerStats(playerGameResult, playerUI) {
            this.mapPlayerStats(playerGameResult);

            let PlayerStatType = Protocol.getEnum("mahjong.PlayerStatType");
            let statTypes = [
                PlayerStatType.ZI_MO,
                PlayerStatType.JIE_PAO,
                PlayerStatType.DIAN_PAO,
                PlayerStatType.MING_GANG,
                PlayerStatType.AN_GANG
            ];

            statTypes.forEach((statType, index) => {
                let labelStatType = playerUI.getChildByName("stat_" + index);
                labelStatType.changeText(this.getStatTypeDisplayName(statType));
                labelStatType.visible = true;

                let labelStatVal = playerUI.getChildByName("stat_val_" + index);
                let stat = playerGameResult.stats[statType];
                labelStatVal.changeText(stat?stat.val:0);
                labelStatVal.visible = true;
            });
        }

    }
}