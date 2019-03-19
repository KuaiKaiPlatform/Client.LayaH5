var mahjong;
(function (mahjong) {
    var play;
    (function (play) {
        var model;
        (function (model) {
            /*
             *   自身可执行的操作
             */
            var SelfOperations = (function () {
                function SelfOperations(canOperDetails) {
                    this.canOperDetails = []; // 当前可执行的操作
                    this.canOperDetails = canOperDetails;
                }
                /**
                 * 是否有可执行的操作
                 */
                SelfOperations.prototype.hasOperation = function () {
                    return this.canOperDetails && this.canOperDetails.length > 0;
                };
                /**
                 * 是否有可打的操作
                 */
                SelfOperations.prototype.hasDaOperation = function () {
                    var OperType = Protocol.getEnum("mahjong.OperType");
                    for (var i = 0; i < this.canOperDetails.length; i++) {
                        if (this.canOperDetails[i].operType === OperType.DA)
                            return true;
                    }
                    return false;
                };
                /**
                 * 设置可执行的操作
                 */
                SelfOperations.prototype.setCanOperDetails = function (canOperDetails) {
                    this.canOperDetails = canOperDetails;
                };
                /**
                 * 返回所有可执行操作
                 */
                SelfOperations.prototype.getCanOperDetails = function () {
                    return this.canOperDetails;
                };
                /**
                 * 清空可执行的操作
                 */
                SelfOperations.prototype.clear = function () {
                    this.canOperDetails = [];
                };
                return SelfOperations;
            }());
            model.SelfOperations = SelfOperations;
        })(model = play.model || (play.model = {}));
    })(play = mahjong.play || (mahjong.play = {}));
})(mahjong || (mahjong = {}));
//# sourceMappingURL=SelfOperations.js.map