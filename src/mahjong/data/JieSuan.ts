module mahjong.data {
    
    /**
     * 结算
     */
    export class JieSuan {

        /**
         * 返回指定结算项的显示名称
         */
        public static getDisplay(scoreType) {
            let JieSuan = Protocol.getEnum("mahjong.JieSuan");
            switch(scoreType) {
            case JieSuan.HUN_YI_SE :
                return "混一色";
            case JieSuan.DAN_DIAO_JIANG :
                return "单钓将";
            case JieSuan.SHI_SAN_YAO :
                return "十三幺";
            case JieSuan.SHI_SAN_BU_KAO :
                return "十三不靠";
            case JieSuan.QI_DUI :
                return "七对";
            case JieSuan.PENG_PENG_HU :
                return "碰碰胡";
            case JieSuan.BIAO_ZHUN_HU :
                return "胡牌";
            case JieSuan.QING_YI_SE :
                return "清一色";
            case JieSuan.QI_DUI :
                return "七对";
            case JieSuan.ZI_MO :
                return "自摸";
            case JieSuan.GANG_SHANG_HUA :
                return "杠上花";
            case JieSuan.QIANG_GANG_HU :
                return "抢杠胡";
            case JieSuan.DI_FEN :
                return "底分";
            case JieSuan.HU_PAI :
                return "胡牌";
            case JieSuan.MING_GANG_ :
                return "明杠";
            case JieSuan.AN_GANG_ :
                return "暗杠";
            case JieSuan.DIAN_GANG_ :
                return "点杠";
            case JieSuan.BU_GANG_ :
                return "补杠";
            case JieSuan.HAI_DI_LAO :
                return "海底捞";
            case JieSuan.PAO_ZI :
                return "炮子";
            }
            return "未知结算项";
        }

    }
}