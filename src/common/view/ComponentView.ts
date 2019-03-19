module common.view {

    /**
     * 组件显示基类
     */
    export abstract class ComponentView {

        // 按坐标显示组件
        public showComponent(component, attrs): void {
            // 设置坐标
            if(attrs) {
                //console.log("ComponentView.showComponent", attrs);
                Object.keys(attrs).forEach(key => {
                    //console.log("ComponentView.showComponent", key);
                    component[key] = attrs[key];
                });
            }
            //添加到stage
            Laya.stage.addChild(component);
        }

        public removeComponent(component) {
            Laya.stage.removeChild(component);
        }

    }
}