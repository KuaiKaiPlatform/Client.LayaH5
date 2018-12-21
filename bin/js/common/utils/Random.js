/**
* 通用工具类
*/
var common;
(function (common) {
    var utils;
    (function (utils) {
        var Random = (function () {
            function Random() {
            }
            /**
             * 返回 start 到 end（不包含）之间的随机整数
             * @param start
             * @param end
             */
            Random.getInt = function (start, end) {
                var delta = Math.abs(end - start);
                return Math.floor(Math.random() * delta) + Math.min(start, end);
            };
            return Random;
        }());
        utils.Random = Random;
    })(utils = common.utils || (common.utils = {}));
})(common || (common = {}));
//# sourceMappingURL=Random.js.map