var common;
(function (common) {
    var view;
    (function (view) {
        /**
         * 组件显示基类
         */
        var ComponentView = (function () {
            function ComponentView() {
            }
            // 按坐标显示组件
            ComponentView.prototype.showComponent = function (component, attrs) {
                // 设置坐标
                if (attrs) {
                    //console.log("ComponentView.showComponent", attrs);
                    Object.keys(attrs).forEach(function (key) {
                        //console.log("ComponentView.showComponent", key);
                        component[key] = attrs[key];
                    });
                }
                //添加到stage
                Laya.stage.addChild(component);
            };
            return ComponentView;
        }());
        view.ComponentView = ComponentView;
    })(view = common.view || (common.view = {}));
})(common || (common = {}));
//# sourceMappingURL=ComponentView.js.map