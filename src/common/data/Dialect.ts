module common.data {

	export class Dialect {

		/**
		 * 返回玩法名称
		 * @param dialect 
		 */
        public static getDisplayName(dialect) {
            let Dialect = Protocol.getEnum("common.Dialect");

            switch(dialect) {
            case Dialect.PU_TONG: 
                return "普通话";
            case Dialect.XIA_PU: 
                return "霞浦话";
            case Dialect.YU_LIN: 
                return "榆林话";
            case Dialect.YAN_AN: 
                return "延安话";
            }
            return "未知方言";
        }

	}

}