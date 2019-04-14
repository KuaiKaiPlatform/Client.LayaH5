/**
* protobuf
*/
var common;
(function (common) {
    var pb;
    (function (pb) {
        var Protocol = (function () {
            function Protocol() {
            }
            //private static root;
            Protocol.init = function () {
                var _this = this;
                console.log("Protocol.init", Laya.Browser.window.mahjong.CBet);
                return this.loadMeta().then(function () {
                    return _this.process("", _this.meta);
                }).then(function () {
                    _this.initPbMessages();
                    console.log("Protocol.init@finish");
                    return Promise.resolve();
                });
            };
            Protocol.loadMeta = function () {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    Laya.loader.load("res/pb/meta.json", Laya.Handler.create(_this, function () {
                        Protocol.meta = Laya.loader.getRes("res/pb/meta.json");
                        console.log("Protocol.loadMeta@finish");
                        resolve();
                    }), null, Laya.Loader.JSON);
                });
            };
            Protocol.process = function (pkgName, obj) {
                for (var key in obj) {
                    //console.log("Protocol.process", typeof obj[key]);
                    switch (typeof obj[key]) {
                        case "number":
                            Protocol.processProto(pkgName, key, obj[key]);
                            break;
                        case "object":
                            var subPkgName = (pkgName == "") ? key : pkgName + "." + key;
                            Protocol.process(subPkgName, obj[key]);
                            break;
                    }
                }
            };
            Protocol.processProto = function (pkgName, msgName, msgId) {
                var msgType = (pkgName == "") ? msgName : pkgName + "." + msgName;
                try {
                    //const pbMsg = this.root.lookupType(msgType);
                    //this.pbMessaages[msgId] = pbMsg;
                    this.msgTypes[msgId] = msgType;
                    console.log("Protocol.processProto@finish", msgType, msgId);
                }
                catch (e) {
                    console.error("Protocol.processProto@lookupType", msgType, msgId, e);
                }
            };
            Protocol.initPbMessages = function () {
                this.pbMessaages = {
                    1: Laya.Browser.window.account.CLogin,
                    2: Laya.Browser.window.account.SLogin,
                    3: Laya.Browser.window.account.SKickOff,
                    4: Laya.Browser.window.account.CLogout,
                    5: Laya.Browser.window.account.SLogout,
                    101: Laya.Browser.window.hall.CJoinDesk,
                    102: Laya.Browser.window.hall.SJoinDesk,
                    103: Laya.Browser.window.hall.SDeskInfo,
                    104: Laya.Browser.window.hall.CQuitDesk,
                    105: Laya.Browser.window.hall.SQuitDesk,
                    106: Laya.Browser.window.hall.SPlayerJoin,
                    107: Laya.Browser.window.hall.SPlayerQuit,
                    111: Laya.Browser.window.hall.CGlobalSetting,
                    112: Laya.Browser.window.hall.SGlobalSetting,
                    113: Laya.Browser.window.hall.CRuleDialects,
                    114: Laya.Browser.window.hall.SRuleDialects,
                    115: Laya.Browser.window.hall.COffline,
                    116: Laya.Browser.window.hall.SOffline,
                    1001: Laya.Browser.window.mahjong.SSetInit,
                    1002: Laya.Browser.window.mahjong.COperCard,
                    1003: Laya.Browser.window.mahjong.SOperCard,
                    1004: Laya.Browser.window.mahjong.CPassCard,
                    1005: Laya.Browser.window.mahjong.SCanOper,
                    1006: Laya.Browser.window.mahjong.SSetResult,
                    1007: Laya.Browser.window.mahjong.SGameResult,
                    1008: Laya.Browser.window.mahjong.CBet,
                    1009: Laya.Browser.window.mahjong.SBet,
                    1010: Laya.Browser.window.mahjong.CChair,
                    1011: Laya.Browser.window.mahjong.SChair,
                    1012: Laya.Browser.window.mahjong.CReady,
                    1013: Laya.Browser.window.mahjong.SReady
                };
            };
            Protocol.getMsgType = function (msgId) {
                return this.msgTypes[msgId];
            };
            Protocol.getEnum = function (enumName) {
                switch (enumName) {
                    case "common.ChairMode":
                        return Laya.Browser.window.common.ChairMode;
                    case "common.ClubOwner":
                        return Laya.Browser.window.common.ClubOwner;
                    case "common.Dialect":
                        return Laya.Browser.window.common.Dialect;
                    case "common.GameRule":
                        return Laya.Browser.window.common.GameRule;
                    case "common.GameStatus":
                        return Laya.Browser.window.common.GameStatus;
                    case "common.MahjongTheme":
                        return Laya.Browser.window.common.MahjongTheme;
                    case "mahjong.Direction":
                        return Laya.Browser.window.mahjong.Direction;
                    case "mahjong.JieSuan":
                        return Laya.Browser.window.mahjong.JieSuan;
                    case "mahjong.OperType":
                        return Laya.Browser.window.mahjong.OperType;
                    case "mahjong.PlayerStatType":
                        return Laya.Browser.window.mahjong.PlayerStatType;
                    case "mahjong.SetStage":
                        return Laya.Browser.window.mahjong.SetStage;
                }
                //return this.root.lookupEnum(enumName);
                return null;
            };
            /**
             * 将 JS 消息对象用 Protobuf 编码
             *
             * @param msgId
             * @param properties
             *
             * @return 1 不支持的消息ID；2 消息内容不正确
             *
             */
            Protocol.encodeMessage = function (msgId, properties) {
                var PbMessage = this.pbMessaages[msgId];
                if (PbMessage === undefined || PbMessage === null) {
                    console.error("Protocol.encodeMessage@unsupported message ID", msgId);
                    return 1;
                }
                var err = PbMessage.verify(properties);
                if (err) {
                    console.error("Protocol.encodeMessage@invalid properties", err, msgId, properties);
                    return 2;
                }
                return PbMessage.encode(properties).finish();
            };
            /**
             * 将 Protobuf 编码的消息内容解码
             *
             * @param msgId
             * @param content
             *
             * @return 1 不支持的消息ID；2 消息内容不正确
             */
            Protocol.decodeMessage = function (msgId, content) {
                var PbMessage = this.pbMessaages[msgId];
                if (PbMessage === undefined || PbMessage === null) {
                    console.error("Protocol.decodeMessage@unsupported message ID", msgId);
                    return 1;
                }
                // 转换二进制数据
                try {
                    return PbMessage.decode(content);
                }
                catch (e) {
                    if (e instanceof Laya.Browser.window.protobuf.util.ProtocolError) {
                        // e.instance holds the so far decoded message with missing required fields
                        console.error("Protocol.decodeMessage@invalid message content, missing required fields", e.instance);
                    }
                    else {
                        // wire format is invalid
                        console.error("Protocol.decodeMessage@invalid message content, decode error");
                    }
                    return 2;
                }
            };
            return Protocol;
        }());
        Protocol.pbMessaages = {}; // 根据 msgId 找到 ProtoBuf Message 类型
        Protocol.msgTypes = {}; // 根据 msgId 找到 Message 类型全名
        pb.Protocol = Protocol;
    })(pb = common.pb || (common.pb = {}));
})(common || (common = {}));
//# sourceMappingURL=Protocol.js.map