/**
* protobuf 
*/
module common.pb.reflect {

	export class Protocol {
		
		private static pbMessaages = {};	// 根据 msgId 找到 ProtoBuf Message 类型
		private static msgTypes = {};		// 根据 msgId 找到 Message 类型全名
		public static meta;
		private static root;

		public static init() {
			return this.loadMeta().then(() => {
				return this.loadAll();
			}).then(() => {
				return this.process("", this.meta);
			}).then(() => {
				console.log("Protocol.init@finish");
				return Promise.resolve();
			});
		}

		private static loadMeta() {
			return new Promise((resolve, reject) => {
				Laya.loader.load("res/pb/meta.json", Laya.Handler.create(this, () => {
					Protocol.meta = Laya.loader.getRes("res/pb/meta.json");
					console.log("Protocol.loadMeta@finish");
					resolve();
				}), null, Laya.Loader.JSON);
			});
		}

		private static loadAll() {
			return new Promise((resolve, reject) => {
				// 浏览器加载时，保证import路径正确
				// Search include paths when resolving imports
				// https://github.com/dcodeIO/protobuf.js/blob/master/src/root.js#L54
				// https://github.com/dcodeIO/protobuf.js/issues/368
				//var PbRoot = new this.ProtoBuf.Root();
				var PbRoot = new Laya.Browser.window.protobuf.Root();
				PbRoot.resolvePath = (origin, target) => {
					//console.log("Protocol.loadAll", origin, "-", target);
					//let path = target.indexOf("res/pb/") > -1?target:"res/pb/" + target;
					//return Laya.Browser.onWeiXin?"game/" + path:path;
					return target.indexOf("res/pb/") > -1?target:"res/pb/" + target;
				};
				console.log("Protocol.loadAll@start");
				PbRoot.load(this.meta.fileNames, (err, root) => {
					if (err) {
						console.error("Protocol.loadAll@err", err);
						reject();
						return;
					}
					Protocol.root = root;
					resolve();
				});
			});
		}

		private static process(pkgName, obj) {
			for(let key in obj) {
				//console.log("Protocol.process", typeof obj[key]);
				switch(typeof obj[key]) {
				case "number":
					Protocol.processProto(pkgName, key, obj[key]);
					break;
				case "object":
					let subPkgName = (pkgName=="")?key:pkgName+"."+key;
					Protocol.process(subPkgName, obj[key]);
					break;
				}
			}
		}

		private static processProto(pkgName, msgName, msgId) {
			let msgType = (pkgName=="")?msgName:pkgName+"."+msgName;
			try {
				const pbMsg = this.root.lookupType(msgType);
				this.pbMessaages[msgId] = pbMsg;
				this.msgTypes[msgId] = msgType;
				console.log("Protocol.processProto@finish", msgType, msgId);
			} catch(e) {
				console.error("Protocol.processProto@lookupType", msgType, msgId, e);
			}
		}

		public static getMsgType(msgId) {
			return this.msgTypes[msgId];
		}

		public static getEnum(enumName) {
			return this.root.lookupEnum(enumName);
		}

		/**
		 * 将 JS 消息对象用 Protobuf 编码
		 * 
		 * @param msgId 
		 * @param properties 
		 * 
		 * @return 1 不支持的消息ID；2 消息内容不正确
		 * 
		 */
		public static encodeMessage(msgId, properties) {
			let PbMessage = this.pbMessaages[msgId];
			if(PbMessage === undefined || PbMessage === null) {
				console.error("Protocol.encodeMessage@unsupported message ID", msgId);
				return 1;
			}

			var err = PbMessage.verify(properties);
			if(err) {
				console.error("Protocol.encodeMessage@invalid properties", err, msgId, properties);
				return 2;
			}

			return PbMessage.encode(properties).finish();
		}

		/**
		 * 将 Protobuf 编码的消息内容解码
		 * 
		 * @param msgId 
		 * @param content 
		 * 
		 * @return 1 不支持的消息ID；2 消息内容不正确
		 */
		public static decodeMessage(msgId, content) {
			var PbMessage = this.pbMessaages[msgId];
			if(PbMessage === undefined || PbMessage === null) {
				console.error("Protocol.decodeMessage@unsupported message ID", msgId);
				return 1;
			}

			// 转换二进制数据
			try {
				return PbMessage.decode(content);
			} catch (e) {
				if (e instanceof Laya.Browser.window.protobuf.util.ProtocolError) {
					// e.instance holds the so far decoded message with missing required fields
					console.error("Protocol.decodeMessage@invalid message content, missing required fields", e.instance);
				} else {
					// wire format is invalid
					console.error("Protocol.decodeMessage@invalid message content, decode error");
				}
				return 2;
			}
		}

	}
}