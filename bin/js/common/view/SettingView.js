var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common;
(function (common) {
    var view;
    (function (view) {
        var Texture = Laya.Texture;
        var Sprite = Laya.Sprite;
        var Event = Laya.Event;
        /*
         *  游戏玩家设置界面
         */
        var SettingView = (function (_super) {
            __extends(SettingView, _super);
            function SettingView() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.volumeSprites = []; // slider 实际内容
                _this.currentIndex = 0; // 当前操作的 slider
                _this.currentVolume = 1; // 当前操作的 slider 值
                return _this;
            }
            SettingView.prototype.getImgBg = function (bgImg) {
                if (this.imgBg)
                    return this.imgBg;
                this.imgBg = new Laya.Image();
                this.imgBg.skin = bgImg ? bgImg : SettingView.BG_IMG_DEFAULT;
                this.imgBg.on(Laya.Event.CLICK, this, function (e) {
                    console.log("common.view.SettingView@bg click, do nothing.");
                });
                return this.imgBg;
            };
            SettingView.prototype.showBg = function (bgImg) {
                var imgBg = this.getImgBg(bgImg);
                this.showComponent(imgBg, {
                    alpha: 0.5,
                    zOrder: 1100
                });
            };
            SettingView.prototype.getDialog = function () {
                var _this = this;
                if (this.settingDialog)
                    return this.settingDialog;
                this.settingDialog = new ui.common.SettingUI();
                this.settingDialog.getChildByName("close").on(Laya.Event.CLICK, this, function (e) {
                    console.log("common.view.SettingView@close");
                    _this.removeComponent(_this.settingDialog);
                    _this.removeComponent(_this.imgBg);
                });
                this.regVolumeEvent();
                return this.settingDialog;
            };
            /**
             * 注册 slider 相关事件
             */
            SettingView.prototype.regVolumeEvent = function () {
                var volumeBg0 = this.settingDialog.getChildByName("volume_bg_0");
                var saiZi0 = this.settingDialog.getChildByName("volume_point_0");
                volumeBg0.on(Event.CLICK, this, this.onVolumeClicked);
                volumeBg0.on(Event.MOUSE_DOWN, this, this.onMouseDown);
                saiZi0.on(Event.MOUSE_DOWN, this, this.onMouseDown);
                var volumeBg1 = this.settingDialog.getChildByName("volume_bg_1");
                var saiZi1 = this.settingDialog.getChildByName("volume_point_1");
                volumeBg1.on(Event.CLICK, this, this.onVolumeClicked);
                volumeBg1.on(Event.MOUSE_DOWN, this, this.onMouseDown);
                saiZi1.on(Event.MOUSE_DOWN, this, this.onMouseDown);
            };
            SettingView.prototype.getIndex = function (name) {
                this.currentIndex = name.charAt(name.length - 1);
                return this.currentIndex;
            };
            /**
             * 点击 slider
             */
            SettingView.prototype.onVolumeClicked = function (e) {
                var index = this.getIndex(e.target.name);
                var volume = (e.stageX - SettingView.VOLUME_STAGE_X) / SettingView.VOLUME_TOTAL;
                console.log("common.view.SettingView@volume " + index + " clicked", e.stageX, volume);
                this.showVolume(volume, index);
                this.onVolumeChanged(volume, index);
            };
            /**拖拽处理*/
            SettingView.prototype.onMouseDown = function (e) {
                var index = this.getIndex(e.target.name);
                console.log("common.view.SettingView@volume " + index + " mouse down");
                var saiZi = this.settingDialog.getChildByName("volume_point_" + index);
                var dragRegion = new Laya.Rectangle(150, index == 0 ? 75 : 146, SettingView.VOLUME_TOTAL - 10, 0);
                //添加鼠标事件
                Laya.stage.on(Event.MOUSE_MOVE, this, this.onMouseMove);
                Laya.stage.on(Event.MOUSE_UP, this, this.onMouseUp);
                Laya.stage.on(Event.MOUSE_OUT, this, this.onMouseUp);
                saiZi.startDrag(dragRegion);
            };
            /**移动事件处理*/
            SettingView.prototype.onMouseMove = function (e) {
                var index = this.currentIndex;
                var volume = (e.stageX - SettingView.VOLUME_STAGE_X) / SettingView.VOLUME_TOTAL;
                volume = Math.max(0, volume);
                volume = Math.min(1, volume);
                console.log("common.view.SettingView@volume " + index + " move", e.stageX, volume);
                this.showVolume(volume, index);
            };
            /**抬起事件处理*/
            SettingView.prototype.onMouseUp = function (e) {
                var index = this.currentIndex;
                console.log("common.view.SettingView@volume " + index + " mouse up");
                Laya.stage.off(Event.MOUSE_MOVE, this, this.onMouseMove);
                Laya.stage.off(Event.MOUSE_UP, this, this.onMouseUp);
                Laya.stage.off(Event.MOUSE_OUT, this, this.onMouseUp);
                this.onVolumeChanged(this.currentVolume, index);
            };
            SettingView.prototype.showVolume = function (volume, index) {
                console.log("common.view.SettingView.showVolume", index, volume);
                this.currentVolume = volume;
                if (!this.volumeSprites[index]) {
                    this.volumeSprites[index] = new Sprite();
                    this.volumeSprites[index].x = 164;
                    this.volumeSprites[index].y = index == 0 ? 93 : 164;
                    this.volumeSprites[index].scaleX = 1.5;
                }
                this.volumeSprites[index].graphics.clear();
                var texture = Texture.create(this.volumeTexture, 0, 0, 259 * volume, 26);
                this.volumeSprites[index].graphics.drawTexture(texture, 0, 0);
                this.settingDialog.addChild(this.volumeSprites[index]);
                var saiZi = this.settingDialog.getChildByName("volume_point_" + index);
                saiZi.x = SettingView.VOLUME_TOTAL * volume + SettingView.VOLUME_X;
                this.settingDialog.addChild(saiZi);
            };
            SettingView.prototype.onVolumeChanged = function (volume, index) {
                console.log("common.view.SettingView.onVolumeChanged", index, volume);
                // 发送 CGlobalSetting
                MessageSender.send(Login.getServerId(), Protocol.meta.hall.CGlobalSetting, {
                    key: index == 0 ? "volumeBg" : "volumePlay",
                    val: new String(volume)
                });
                // 设置音量
                if (index == 0) {
                    Laya.SoundManager.setMusicVolume(volume);
                    common.data.GlobalSetting.set("volumeBg", volume);
                }
                else {
                    Laya.SoundManager.setSoundVolume(volume);
                    common.data.GlobalSetting.set("volumePlay", volume);
                }
            };
            /**
             * 玩法相关方言返回
             */
            SettingView.prototype.onRuleDialects = function (sRuleDialects) {
                console.log("common.view.SettingView.onRuleDialects", sRuleDialects);
                this.showDialects(sRuleDialects.rule);
            };
            /**
             * 显示语言设置
             * @param rule
             */
            SettingView.prototype.showDialects = function (rule) {
                var _this = this;
                this.currentRule = rule;
                var dialects = common.data.GameRule.getDialects(rule);
                if (!dialects || dialects.length == 0) {
                    console.warn("common.view.SettingView.showDialects@dialects empty");
                    return;
                }
                if (!this.settingDialog) {
                    console.warn("common.view.SettingView.showDialects@dialog not created.");
                    return;
                }
                // 当前玩家设置
                var Dialect = Protocol.getEnum("common.Dialect");
                var selected = common.data.GlobalSetting.getDialect(rule);
                selected = selected ? selected : Dialect.PU_TONG;
                console.info("common.view.SettingView.showDialects@showing", rule, JSON.stringify(dialects), selected);
                this.resetDialects();
                // 加入普通话显示
                [Dialect.PU_TONG].concat(dialects).forEach(function (dialect, index) {
                    if (index > 2)
                        return; // 最多显示2种方言
                    var radio = _this.settingDialog.getChildByName("radio_dialect_" + index);
                    radio.dialect = dialect;
                    radio.visible = true;
                    radio.on(Event.CLICK, _this, _this.selectDialect);
                    radio.getChildByName("checked").visible = (selected == dialect);
                    var label = radio.getChildByName("dialect");
                    label.dialect = dialect;
                    label.changeText(common.data.Dialect.getDisplayName(dialect));
                    label.on(Event.CLICK, _this, _this.selectDialect);
                });
            };
            /**
             * 选择一种语言
             */
            SettingView.prototype.selectDialect = function (e) {
                var dialect = e.target["dialect"];
                var selected = common.data.GlobalSetting.getDialect(this.currentRule);
                if (dialect != selected) {
                    MessageSender.send(Login.getServerId(), Protocol.meta.hall.CGlobalSetting, {
                        key: "rule.dialect." + this.currentRule,
                        val: new String(dialect)
                    });
                    common.data.GlobalSetting.setDialect(this.currentRule, dialect);
                }
                // 选中状态
                for (var i = 0; i < 3; i++) {
                    var radio = this.settingDialog.getChildByName("radio_dialect_" + i);
                    radio.getChildByName("checked").visible = (dialect == radio.dialect);
                }
            };
            /**
             * 只显示普通话，隐藏其他方言
             */
            SettingView.prototype.resetDialects = function () {
                // 显示普通话
                var radio = this.settingDialog.getChildByName("radio_dialect_0");
                radio.visible = true;
                radio.getChildByName("checked").visible = true;
                // 隐藏其他方言
                for (var i = 1; i < 3; i++) {
                    this.settingDialog.getChildByName("radio_dialect_" + i).visible = false;
                }
            };
            SettingView.prototype.showDialog = function (rule) {
                var dialog = this.getDialog();
                this.showVolume(common.data.GlobalSetting.get("volumeBg"), 0);
                this.showVolume(common.data.GlobalSetting.get("volumePlay"), 1);
                this.showDialects(rule);
                this.showComponent(dialog, {
                    centerX: 0,
                    centerY: 0,
                    zOrder: 1100
                });
                console.log("common.view.SettingView.showDialog@finished", dialog);
            };
            /**
             * 显示设置对话框
             */
            SettingView.prototype.showAll = function (params) {
                var _this = this;
                var urls = [
                    "res/atlas/common/setting.atlas",
                    "common/setting/bg.png"
                ];
                if (params.bgImg)
                    urls.push(params.bgImg);
                Laya.loader.load(urls, Laya.Handler.create(this, function () {
                    _this.showBg(params.bgImg);
                    if (!_this.volumeTexture)
                        _this.volumeTexture = Laya.loader.getRes("common/setting/volume.png");
                    _this.showDialog(params.rule);
                }));
            };
            return SettingView;
        }(view.ComponentView));
        SettingView.BG_IMG_DEFAULT = "mahjong/desk/bg.png"; // 默认的蒙版，麻将牌桌背景
        SettingView.VOLUME_X = 120; // slider 在 setting dialog 的 x 坐标
        SettingView.VOLUME_STAGE_X = 509; // slider 在 stage 的x坐标
        SettingView.VOLUME_TOTAL = 397.5; // slider 总长度
        view.SettingView = SettingView;
    })(view = common.view || (common.view = {}));
})(common || (common = {}));
//# sourceMappingURL=SettingView.js.map