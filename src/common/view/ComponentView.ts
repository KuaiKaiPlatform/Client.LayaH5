module common.view {

    /**
     * 组件显示基类
     */
    export abstract class ComponentView {

        // 按坐标显示组件
        public showComponent(component, attrs): void {
            // 设置坐标
            if(attrs) {
                Object.keys(attrs).forEach(key => {
                    component[key] = attrs[key];
                });
            }

            //添加到stage
            Laya.stage.addChild(component);
        }

    }
}