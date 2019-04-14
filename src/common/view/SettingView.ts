module common.view {

    import Texture = Laya.Texture;
    import Sprite = Laya.Sprite;
    import Image = Laya.Image;
    import Event = Laya.Event;

    /*
     *  游戏玩家设置界面
     */
    export class SettingView extends ComponentView {

        protected settingDialog;                // 设置对话框
        protected imgBg: Laya.Image;            // 牌桌背景蒙版
        protected volumeTexture: Texture;       // slider 原始纹理
        protected volumeSprites = [];           // slider 实际内容
        protected currentIndex = 0;             // 当前操作的 slider
        protected currentVolume = 1;            // 当前操作的 slider 值

        protected static BG_IMG_DEFAULT = "mahjong/desk/bg.png";    // 默认的蒙版，麻将牌桌背景

        protected static VOLUME_X = 120;        // slider 在 setting dialog 的 x 坐标
        protected static VOLUME_STAGE_X = 509;  // slider 在 stage 的x坐标
        protected static VOLUME_TOTAL = 397.5;  // slider 总长度

        protected currentRule;                  // 当前设置语言的玩法

        protected getImgBg(bgImg) {
            if(this.imgBg) return this.imgBg;

            this.imgBg = new Laya.Image();
            this.imgBg.skin = bgImg?bgImg:SettingView.BG_IMG_DEFAULT;
            this.imgBg.on(Laya.Event.CLICK, this, e => {
                console.log("common.view.SettingView@bg click, do nothing.");
            });
            return this.imgBg;
        }

        public showBg(bgImg) {
            let imgBg = this.getImgBg(bgImg);

            this.showComponent(imgBg, {
                alpha: 0.5,
                zOrder: 1100
            });
        }

        protected getDialog() {
            if(this.settingDialog) return this.settingDialog;

            this.settingDialog = new ui.common.SettingUI();
            this.settingDialog.getChildByName("close").on(Laya.Event.CLICK, this, e => {
                console.log("common.view.SettingView@close");
                this.removeComponent(this.settingDialog);
                this.removeComponent(this.imgBg);
            });

            this.regVolumeEvent();
            return this.settingDialog;
        }

        /**
         * 注册 slider 相关事件
         */
        protected regVolumeEvent() {
            let volumeBg0 = this.settingDialog.getChildByName("volume_bg_0");
            let saiZi0 = this.settingDialog.getChildByName("volume_point_0");
            volumeBg0.on(Event.CLICK, this, this.onVolumeClicked);
            volumeBg0.on(Event.MOUSE_DOWN, this, this.onMouseDown);
            saiZi0.on(Event.MOUSE_DOWN, this, this.onMouseDown);
            
            let volumeBg1 = this.settingDialog.getChildByName("volume_bg_1");
            let saiZi1 = this.settingDialog.getChildByName("volume_point_1");
            volumeBg1.on(Event.CLICK, this, this.onVolumeClicked);
            volumeBg1.on(Event.MOUSE_DOWN, this, this.onMouseDown);
            saiZi1.on(Event.MOUSE_DOWN, this, this.onMouseDown);
        }

        protected getIndex(name) {
            this.currentIndex = name.charAt(name.length-1);
            return this.currentIndex;
        }

        /**
         * 点击 slider
         */
        protected onVolumeClicked(e: Event) {
            let index = this.getIndex(e.target.name);
            let volume = (e.stageX - SettingView.VOLUME_STAGE_X)/SettingView.VOLUME_TOTAL;
            console.log("common.view.SettingView@volume " + index + " clicked", e.stageX, volume);
            this.showVolume(volume, index);
            this.onVolumeChanged(volume, index);
        }

        /**拖拽处理*/
        protected onMouseDown(e: Event): void {
            let index = this.getIndex(e.target.name);
            console.log("common.view.SettingView@volume " + index + " mouse down");
            let saiZi = this.settingDialog.getChildByName("volume_point_" + index) as Image;
            let dragRegion = new Laya.Rectangle(150, index==0?75:146, SettingView.VOLUME_TOTAL-10, 0);
            //添加鼠标事件
            Laya.stage.on(Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.stage.on(Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.on(Event.MOUSE_OUT, this, this.onMouseUp);

            saiZi.startDrag(dragRegion);
        }

        /**移动事件处理*/
        protected onMouseMove(e: Event): void {
            let index = this.currentIndex;
            let volume = (e.stageX - SettingView.VOLUME_STAGE_X)/SettingView.VOLUME_TOTAL;
            volume = Math.max(0, volume);
            volume = Math.min(1, volume);
            console.log("common.view.SettingView@volume " + index + " move", e.stageX, volume);
            this.showVolume(volume, index);
        }

        /**抬起事件处理*/
        protected onMouseUp(e: Event): void {
            let index = this.currentIndex;
            console.log("common.view.SettingView@volume " + index + " mouse up");

            Laya.stage.off(Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.stage.off(Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.off(Event.MOUSE_OUT, this, this.onMouseUp);

            this.onVolumeChanged(this.currentVolume, index);
        }

        protected showVolume(volume, index) {
            console.log("common.view.SettingView.showVolume", index, volume);
            this.currentVolume = volume;
            if(!this.volumeSprites[index]) {
                this.volumeSprites[index] = new Sprite();
                this.volumeSprites[index].x = 164;
                this.volumeSprites[index].y = index==0?93:164;
                this.volumeSprites[index].scaleX = 1.5;
            }

            this.volumeSprites[index].graphics.clear();
            let texture = Texture.create(this.volumeTexture, 0, 0, 259*volume, 26);
            this.volumeSprites[index].graphics.drawTexture(texture, 0, 0);
            this.settingDialog.addChild(this.volumeSprites[index]);

            let saiZi = this.settingDialog.getChildByName("volume_point_" + index);
            saiZi.x = SettingView.VOLUME_TOTAL*volume + SettingView.VOLUME_X;
            this.settingDialog.addChild(saiZi);
        }

        protected onVolumeChanged(volume, index) {
            console.log("common.view.SettingView.onVolumeChanged", index, volume);
            // 发送 CGlobalSetting
            MessageSender.send(Login.getServerId(), Protocol.meta.hall.CGlobalSetting, {
                key: index == 0?"volumeBg":"volumePlay",
                val: new String(volume)
            });

            // 设置音量
            if(index == 0) {
                Laya.SoundManager.setMusicVolume(volume);
                common.data.GlobalSetting.set("volumeBg", volume);
            } else {
                Laya.SoundManager.setSoundVolume(volume);
                common.data.GlobalSetting.set("volumePlay", volume);
            }
        }

        /**
         * 玩法相关方言返回
         */
        public onRuleDialects(sRuleDialects): void {
            console.log("common.view.SettingView.onRuleDialects", sRuleDialects);
            this.showDialects(sRuleDialects.rule);
        }

        /**
         * 显示语言设置
         * @param rule 
         */
        protected showDialects(rule) {
            this.currentRule = rule;
            let dialects = common.data.GameRule.getDialects(rule);
            if(!dialects || dialects.length == 0) {
                console.warn("common.view.SettingView.showDialects@dialects empty");
                return;
            }
            if(!this.settingDialog) {
                console.warn("common.view.SettingView.showDialects@dialog not created.");
                return;
            }

            // 当前玩家设置
            let Dialect = Protocol.getEnum("common.Dialect");
            let selected = common.data.GlobalSetting.getDialect(rule);
            selected = selected?selected:Dialect.PU_TONG;

            console.info("common.view.SettingView.showDialects@showing", rule, JSON.stringify(dialects), selected);
            this.resetDialects();

            // 加入普通话显示
            [Dialect.PU_TONG].concat(dialects).forEach((dialect, index) => {
                if(index > 2) return;   // 最多显示2种方言
                let radio = this.settingDialog.getChildByName("radio_dialect_" + index);
                radio.dialect = dialect;
                radio.visible = true;
                radio.on(Event.CLICK, this, this.selectDialect);

                radio.getChildByName("checked").visible = (selected == dialect);

                let label = radio.getChildByName("dialect");
                label.dialect = dialect;
                label.changeText(common.data.Dialect.getDisplayName(dialect));
                label.on(Event.CLICK, this, this.selectDialect);
                
            });
        }

        /**
         * 选择一种语言
         */
        protected selectDialect(e: Event) {
            let dialect = e.target["dialect"];
            let selected = common.data.GlobalSetting.getDialect(this.currentRule);
            if(dialect != selected) {
                MessageSender.send(Login.getServerId(), Protocol.meta.hall.CGlobalSetting, {
                    key: "rule.dialect." + this.currentRule,
                    val: new String(dialect)
                });
                common.data.GlobalSetting.setDialect(this.currentRule, dialect);
            }

            // 选中状态
            for(let i=0; i<3; i++) {
                let radio = this.settingDialog.getChildByName("radio_dialect_" + i);
                radio.getChildByName("checked").visible = (dialect == radio.dialect);
            }
        }

        /**
         * 只显示普通话，隐藏其他方言
         */
        protected resetDialects() {
            // 显示普通话
            let radio = this.settingDialog.getChildByName("radio_dialect_0");
            radio.visible = true;
            radio.getChildByName("checked").visible = true;
            // 隐藏其他方言
            for(let i=1; i<3; i++) {
                this.settingDialog.getChildByName("radio_dialect_" + i).visible = false;
            }
        }

        protected showDialog(rule) {
            let dialog = this.getDialog();
            this.showVolume(common.data.GlobalSetting.get("volumeBg"), 0);
            this.showVolume(common.data.GlobalSetting.get("volumePlay"), 1);
            this.showDialects(rule);

            this.showComponent(dialog, {
                centerX: 0,
                centerY: 0,
                zOrder: 1100
            });

            console.log("common.view.SettingView.showDialog@finished", dialog);
        }

        /**
         * 显示设置对话框
         */
        public showAll(params): void {
            let urls = [
                "res/atlas/common/setting.atlas",
                "common/setting/bg.png"
            ];
            if(params.bgImg) urls.push(params.bgImg);
            Laya.loader.load(urls, Laya.Handler.create(this, () => {
                this.showBg(params.bgImg);
                if(!this.volumeTexture) this.volumeTexture = Laya.loader.getRes("common/setting/volume.png");
                this.showDialog(params.rule);
                
            }));
        }

    }
}