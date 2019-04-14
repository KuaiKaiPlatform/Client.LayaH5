/**
* protobuf
*/
var common;
(function (common) {
    var pb;
    (function (pb) {
        var reflect;
        (function (reflect) {
            var Protocol = (function () {
                function Protocol() {
                }
                Protocol.init = function () {
                    var _this = this;
                    return this.loadMeta().then(function () {
                        return _this.loadAll();
                    }).then(function () {
                        return _this.process("", _this.meta);
                    }).then(function () {
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
                Protocol.loadAll = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        // 浏览器加载时，保证import路径正确
                        // Search include paths when resolving imports
                        // https://github.com/dcodeIO/protobuf.js/blob/master/src/root.js#L54
                        // https://github.com/dcodeIO/protobuf.js/issues/368
                        //var PbRoot = new this.ProtoBuf.Root();
                        var PbRoot = new Laya.Browser.window.protobuf.Root();
                        PbRoot.resolvePath = function (origin, target) {
                            //console.log("Protocol.loadAll", origin, "-", target);
                            //let path = target.indexOf("res/pb/") > -1?target:"res/pb/" + target;
                            //return Laya.Browser.onWeiXin?"game/" + path:path;
                            return target.indexOf("res/pb/") > -1 ? target : "res/pb/" + target;
                        };
                        console.log("Protocol.loadAll@start");
                        PbRoot.load(_this.meta.fileNames, function (err, root) {
                            if (err) {
                                console.error("Protocol.loadAll@err", err);
                                reject();
                                return;
                            }
                            Protocol.root = root;
                            resolve();
                        });
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
                        var pbMsg = this.root.lookupType(msgType);
                        this.pbMessaages[msgId] = pbMsg;
                        this.msgTypes[msgId] = msgType;
                        console.log("Protocol.processProto@finish", msgType, msgId);
                    }
                    catch (e) {
                        console.error("Protocol.processProto@lookupType", msgType, msgId, e);
                    }
                };
                Protocol.getMsgType = function (msgId) {
                    return this.msgTypes[msgId];
                };
                Protocol.getEnum = function (enumName) {
                    return this.root.lookupEnum(enumName);
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
            reflect.Protocol = Protocol;
        })(reflect = pb.reflect || (pb.reflect = {}));
    })(pb = common.pb || (common.pb = {}));
})(common || (common = {}));
//# sourceMappingURL=Protocol.reflect.js.map