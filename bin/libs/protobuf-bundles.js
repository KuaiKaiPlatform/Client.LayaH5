var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.mahjong = (function() {

    /**
     * Namespace mahjong.
     * @exports mahjong
     * @namespace
     */
    var mahjong = {};

    mahjong.CBet = (function() {

        /**
         * Properties of a CBet.
         * @memberof mahjong
         * @interface ICBet
         * @property {number} bet CBet bet
         */

        /**
         * Constructs a new CBet.
         * @memberof mahjong
         * @classdesc Represents a CBet.
         * @implements ICBet
         * @constructor
         * @param {mahjong.ICBet=} [properties] Properties to set
         */
        function CBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CBet bet.
         * @member {number} bet
         * @memberof mahjong.CBet
         * @instance
         */
        CBet.prototype.bet = 0;

        /**
         * Creates a new CBet instance using the specified properties.
         * @function create
         * @memberof mahjong.CBet
         * @static
         * @param {mahjong.ICBet=} [properties] Properties to set
         * @returns {mahjong.CBet} CBet instance
         */
        CBet.create = function create(properties) {
            return new CBet(properties);
        };

        /**
         * Encodes the specified CBet message. Does not implicitly {@link mahjong.CBet.verify|verify} messages.
         * @function encode
         * @memberof mahjong.CBet
         * @static
         * @param {mahjong.ICBet} message CBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bet);
            return writer;
        };

        /**
         * Encodes the specified CBet message, length delimited. Does not implicitly {@link mahjong.CBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.CBet
         * @static
         * @param {mahjong.ICBet} message CBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CBet message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.CBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.CBet} CBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.CBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bet = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("bet"))
                throw $util.ProtocolError("missing required 'bet'", { instance: message });
            return message;
        };

        /**
         * Decodes a CBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.CBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.CBet} CBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CBet message.
         * @function verify
         * @memberof mahjong.CBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.bet))
                return "bet: integer expected";
            return null;
        };

        return CBet;
    })();

    mahjong.CChair = (function() {

        /**
         * Properties of a CChair.
         * @memberof mahjong
         * @interface ICChair
         * @property {number} seat CChair seat
         */

        /**
         * Constructs a new CChair.
         * @memberof mahjong
         * @classdesc Represents a CChair.
         * @implements ICChair
         * @constructor
         * @param {mahjong.ICChair=} [properties] Properties to set
         */
        function CChair(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CChair seat.
         * @member {number} seat
         * @memberof mahjong.CChair
         * @instance
         */
        CChair.prototype.seat = 0;

        /**
         * Creates a new CChair instance using the specified properties.
         * @function create
         * @memberof mahjong.CChair
         * @static
         * @param {mahjong.ICChair=} [properties] Properties to set
         * @returns {mahjong.CChair} CChair instance
         */
        CChair.create = function create(properties) {
            return new CChair(properties);
        };

        /**
         * Encodes the specified CChair message. Does not implicitly {@link mahjong.CChair.verify|verify} messages.
         * @function encode
         * @memberof mahjong.CChair
         * @static
         * @param {mahjong.ICChair} message CChair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CChair.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
            return writer;
        };

        /**
         * Encodes the specified CChair message, length delimited. Does not implicitly {@link mahjong.CChair.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.CChair
         * @static
         * @param {mahjong.ICChair} message CChair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CChair.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CChair message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.CChair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.CChair} CChair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CChair.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.CChair();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seat = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seat"))
                throw $util.ProtocolError("missing required 'seat'", { instance: message });
            return message;
        };

        /**
         * Decodes a CChair message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.CChair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.CChair} CChair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CChair.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CChair message.
         * @function verify
         * @memberof mahjong.CChair
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CChair.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seat))
                return "seat: integer expected";
            return null;
        };

        return CChair;
    })();

    mahjong.COperCard = (function() {

        /**
         * Properties of a COperCard.
         * @memberof mahjong
         * @interface ICOperCard
         * @property {mahjong.IOperDetail} operDetail COperCard operDetail
         */

        /**
         * Constructs a new COperCard.
         * @memberof mahjong
         * @classdesc Represents a COperCard.
         * @implements ICOperCard
         * @constructor
         * @param {mahjong.ICOperCard=} [properties] Properties to set
         */
        function COperCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * COperCard operDetail.
         * @member {mahjong.IOperDetail} operDetail
         * @memberof mahjong.COperCard
         * @instance
         */
        COperCard.prototype.operDetail = null;

        /**
         * Creates a new COperCard instance using the specified properties.
         * @function create
         * @memberof mahjong.COperCard
         * @static
         * @param {mahjong.ICOperCard=} [properties] Properties to set
         * @returns {mahjong.COperCard} COperCard instance
         */
        COperCard.create = function create(properties) {
            return new COperCard(properties);
        };

        /**
         * Encodes the specified COperCard message. Does not implicitly {@link mahjong.COperCard.verify|verify} messages.
         * @function encode
         * @memberof mahjong.COperCard
         * @static
         * @param {mahjong.ICOperCard} message COperCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        COperCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.mahjong.OperDetail.encode(message.operDetail, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified COperCard message, length delimited. Does not implicitly {@link mahjong.COperCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.COperCard
         * @static
         * @param {mahjong.ICOperCard} message COperCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        COperCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a COperCard message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.COperCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.COperCard} COperCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        COperCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.COperCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.operDetail = $root.mahjong.OperDetail.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("operDetail"))
                throw $util.ProtocolError("missing required 'operDetail'", { instance: message });
            return message;
        };

        /**
         * Decodes a COperCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.COperCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.COperCard} COperCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        COperCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a COperCard message.
         * @function verify
         * @memberof mahjong.COperCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        COperCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.mahjong.OperDetail.verify(message.operDetail);
                if (error)
                    return "operDetail." + error;
            }
            return null;
        };

        return COperCard;
    })();

    mahjong.CPassCard = (function() {

        /**
         * Properties of a CPassCard.
         * @memberof mahjong
         * @interface ICPassCard
         */

        /**
         * Constructs a new CPassCard.
         * @memberof mahjong
         * @classdesc Represents a CPassCard.
         * @implements ICPassCard
         * @constructor
         * @param {mahjong.ICPassCard=} [properties] Properties to set
         */
        function CPassCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CPassCard instance using the specified properties.
         * @function create
         * @memberof mahjong.CPassCard
         * @static
         * @param {mahjong.ICPassCard=} [properties] Properties to set
         * @returns {mahjong.CPassCard} CPassCard instance
         */
        CPassCard.create = function create(properties) {
            return new CPassCard(properties);
        };

        /**
         * Encodes the specified CPassCard message. Does not implicitly {@link mahjong.CPassCard.verify|verify} messages.
         * @function encode
         * @memberof mahjong.CPassCard
         * @static
         * @param {mahjong.ICPassCard} message CPassCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPassCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CPassCard message, length delimited. Does not implicitly {@link mahjong.CPassCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.CPassCard
         * @static
         * @param {mahjong.ICPassCard} message CPassCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPassCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CPassCard message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.CPassCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.CPassCard} CPassCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPassCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.CPassCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CPassCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.CPassCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.CPassCard} CPassCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPassCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CPassCard message.
         * @function verify
         * @memberof mahjong.CPassCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPassCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return CPassCard;
    })();

    mahjong.CReady = (function() {

        /**
         * Properties of a CReady.
         * @memberof mahjong
         * @interface ICReady
         */

        /**
         * Constructs a new CReady.
         * @memberof mahjong
         * @classdesc Represents a CReady.
         * @implements ICReady
         * @constructor
         * @param {mahjong.ICReady=} [properties] Properties to set
         */
        function CReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CReady instance using the specified properties.
         * @function create
         * @memberof mahjong.CReady
         * @static
         * @param {mahjong.ICReady=} [properties] Properties to set
         * @returns {mahjong.CReady} CReady instance
         */
        CReady.create = function create(properties) {
            return new CReady(properties);
        };

        /**
         * Encodes the specified CReady message. Does not implicitly {@link mahjong.CReady.verify|verify} messages.
         * @function encode
         * @memberof mahjong.CReady
         * @static
         * @param {mahjong.ICReady} message CReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CReady message, length delimited. Does not implicitly {@link mahjong.CReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.CReady
         * @static
         * @param {mahjong.ICReady} message CReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CReady message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.CReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.CReady} CReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.CReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.CReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.CReady} CReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CReady message.
         * @function verify
         * @memberof mahjong.CReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return CReady;
    })();

    mahjong.CardGroup = (function() {

        /**
         * Properties of a CardGroup.
         * @memberof mahjong
         * @interface ICardGroup
         * @property {mahjong.OperType} operType CardGroup operType
         * @property {Array.<number>|null} [cards] CardGroup cards
         * @property {number} target CardGroup target
         */

        /**
         * Constructs a new CardGroup.
         * @memberof mahjong
         * @classdesc Represents a CardGroup.
         * @implements ICardGroup
         * @constructor
         * @param {mahjong.ICardGroup=} [properties] Properties to set
         */
        function CardGroup(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardGroup operType.
         * @member {mahjong.OperType} operType
         * @memberof mahjong.CardGroup
         * @instance
         */
        CardGroup.prototype.operType = 10;

        /**
         * CardGroup cards.
         * @member {Array.<number>} cards
         * @memberof mahjong.CardGroup
         * @instance
         */
        CardGroup.prototype.cards = $util.emptyArray;

        /**
         * CardGroup target.
         * @member {number} target
         * @memberof mahjong.CardGroup
         * @instance
         */
        CardGroup.prototype.target = 0;

        /**
         * Creates a new CardGroup instance using the specified properties.
         * @function create
         * @memberof mahjong.CardGroup
         * @static
         * @param {mahjong.ICardGroup=} [properties] Properties to set
         * @returns {mahjong.CardGroup} CardGroup instance
         */
        CardGroup.create = function create(properties) {
            return new CardGroup(properties);
        };

        /**
         * Encodes the specified CardGroup message. Does not implicitly {@link mahjong.CardGroup.verify|verify} messages.
         * @function encode
         * @memberof mahjong.CardGroup
         * @static
         * @param {mahjong.ICardGroup} message CardGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operType);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cards[i]);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.target);
            return writer;
        };

        /**
         * Encodes the specified CardGroup message, length delimited. Does not implicitly {@link mahjong.CardGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.CardGroup
         * @static
         * @param {mahjong.ICardGroup} message CardGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardGroup message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.CardGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.CardGroup} CardGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.CardGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.operType = reader.int32();
                    break;
                case 2:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                case 3:
                    message.target = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("operType"))
                throw $util.ProtocolError("missing required 'operType'", { instance: message });
            if (!message.hasOwnProperty("target"))
                throw $util.ProtocolError("missing required 'target'", { instance: message });
            return message;
        };

        /**
         * Decodes a CardGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.CardGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.CardGroup} CardGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardGroup message.
         * @function verify
         * @memberof mahjong.CardGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.operType) {
            default:
                return "operType: enum value expected";
            case 10:
            case 20:
            case 30:
            case 40:
            case 50:
            case 60:
            case 70:
            case 80:
            case 90:
                break;
            }
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            if (!$util.isInteger(message.target))
                return "target: integer expected";
            return null;
        };

        return CardGroup;
    })();

    /**
     * CardType enum.
     * @name mahjong.CardType
     * @enum {string}
     * @property {number} NA=0 NA value
     * @property {number} WAN=10 WAN value
     * @property {number} TIAO=20 TIAO value
     * @property {number} TONG=30 TONG value
     * @property {number} ZI=40 ZI value
     * @property {number} HUA=50 HUA value
     * @property {number} ALMIGHTY=100 ALMIGHTY value
     */
    mahjong.CardType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NA"] = 0;
        values[valuesById[10] = "WAN"] = 10;
        values[valuesById[20] = "TIAO"] = 20;
        values[valuesById[30] = "TONG"] = 30;
        values[valuesById[40] = "ZI"] = 40;
        values[valuesById[50] = "HUA"] = 50;
        values[valuesById[100] = "ALMIGHTY"] = 100;
        return values;
    })();

    /**
     * Direction enum.
     * @name mahjong.Direction
     * @enum {string}
     * @property {number} DONG=1 DONG value
     * @property {number} NAN=2 NAN value
     * @property {number} XI=3 XI value
     * @property {number} BEI=4 BEI value
     */
    mahjong.Direction = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "DONG"] = 1;
        values[valuesById[2] = "NAN"] = 2;
        values[valuesById[3] = "XI"] = 3;
        values[valuesById[4] = "BEI"] = 4;
        return values;
    })();

    mahjong.DiscardTingCards = (function() {

        /**
         * Properties of a DiscardTingCards.
         * @memberof mahjong
         * @interface IDiscardTingCards
         * @property {number} discard DiscardTingCards discard
         * @property {Array.<number>|null} [tingCards] DiscardTingCards tingCards
         */

        /**
         * Constructs a new DiscardTingCards.
         * @memberof mahjong
         * @classdesc Represents a DiscardTingCards.
         * @implements IDiscardTingCards
         * @constructor
         * @param {mahjong.IDiscardTingCards=} [properties] Properties to set
         */
        function DiscardTingCards(properties) {
            this.tingCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiscardTingCards discard.
         * @member {number} discard
         * @memberof mahjong.DiscardTingCards
         * @instance
         */
        DiscardTingCards.prototype.discard = 0;

        /**
         * DiscardTingCards tingCards.
         * @member {Array.<number>} tingCards
         * @memberof mahjong.DiscardTingCards
         * @instance
         */
        DiscardTingCards.prototype.tingCards = $util.emptyArray;

        /**
         * Creates a new DiscardTingCards instance using the specified properties.
         * @function create
         * @memberof mahjong.DiscardTingCards
         * @static
         * @param {mahjong.IDiscardTingCards=} [properties] Properties to set
         * @returns {mahjong.DiscardTingCards} DiscardTingCards instance
         */
        DiscardTingCards.create = function create(properties) {
            return new DiscardTingCards(properties);
        };

        /**
         * Encodes the specified DiscardTingCards message. Does not implicitly {@link mahjong.DiscardTingCards.verify|verify} messages.
         * @function encode
         * @memberof mahjong.DiscardTingCards
         * @static
         * @param {mahjong.IDiscardTingCards} message DiscardTingCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscardTingCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.discard);
            if (message.tingCards != null && message.tingCards.length)
                for (var i = 0; i < message.tingCards.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tingCards[i]);
            return writer;
        };

        /**
         * Encodes the specified DiscardTingCards message, length delimited. Does not implicitly {@link mahjong.DiscardTingCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.DiscardTingCards
         * @static
         * @param {mahjong.IDiscardTingCards} message DiscardTingCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscardTingCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiscardTingCards message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.DiscardTingCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.DiscardTingCards} DiscardTingCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscardTingCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.DiscardTingCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.discard = reader.int32();
                    break;
                case 2:
                    if (!(message.tingCards && message.tingCards.length))
                        message.tingCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tingCards.push(reader.int32());
                    } else
                        message.tingCards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("discard"))
                throw $util.ProtocolError("missing required 'discard'", { instance: message });
            return message;
        };

        /**
         * Decodes a DiscardTingCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.DiscardTingCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.DiscardTingCards} DiscardTingCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscardTingCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiscardTingCards message.
         * @function verify
         * @memberof mahjong.DiscardTingCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiscardTingCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.discard))
                return "discard: integer expected";
            if (message.tingCards != null && message.hasOwnProperty("tingCards")) {
                if (!Array.isArray(message.tingCards))
                    return "tingCards: array expected";
                for (var i = 0; i < message.tingCards.length; ++i)
                    if (!$util.isInteger(message.tingCards[i]))
                        return "tingCards: integer[] expected";
            }
            return null;
        };

        return DiscardTingCards;
    })();

    /**
     * JieSuan enum.
     * @name mahjong.JieSuan
     * @enum {string}
     * @property {number} HUN_YI_SE=1001 HUN_YI_SE value
     * @property {number} DAN_DIAO_JIANG=1002 DAN_DIAO_JIANG value
     * @property {number} BIAN_ZHANG=1003 BIAN_ZHANG value
     * @property {number} KAN_ZHANG=1004 KAN_ZHANG value
     * @property {number} MEN_QIAN_QING=1005 MEN_QIAN_QING value
     * @property {number} QUE_YI_MEN=1006 QUE_YI_MEN value
     * @property {number} DUAN_YAO_JIU=1007 DUAN_YAO_JIU value
     * @property {number} JUE_ZHANG=1008 JUE_ZHANG value
     * @property {number} QI_XING_BU_KAO=1009 QI_XING_BU_KAO value
     * @property {number} WU_XING_BU_KAO=1010 WU_XING_BU_KAO value
     * @property {number} QUAN_QIU_REN=1011 QUAN_QIU_REN value
     * @property {number} YI_SE_YAO_JIU_KE=1012 YI_SE_YAO_JIU_KE value
     * @property {number} YI_SE_SAN_LIAN_DUI=1013 YI_SE_SAN_LIAN_DUI value
     * @property {number} YI_SE_YAO_JIU_KE_SHUANG=1014 YI_SE_YAO_JIU_KE_SHUANG value
     * @property {number} YI_SE_SAN_LIAN_DUI_SHUANG=1015 YI_SE_SAN_LIAN_DUI_SHUANG value
     * @property {number} LIAN_LIU=1016 LIAN_LIU value
     * @property {number} SHUANG_LIAN_LIU=1017 SHUANG_LIAN_LIU value
     * @property {number} DA_SAN_YUAN=1018 DA_SAN_YUAN value
     * @property {number} DA_SI_XI=1019 DA_SI_XI value
     * @property {number} YI_SE_SI_LIAN_KE=1020 YI_SE_SI_LIAN_KE value
     * @property {number} YI_SE_SAN_LIAN_KE_FU_JIANG=1021 YI_SE_SAN_LIAN_KE_FU_JIANG value
     * @property {number} YI_SE_SAN_LIAN_KE=1022 YI_SE_SAN_LIAN_KE value
     * @property {number} SI_ZI_KE=1023 SI_ZI_KE value
     * @property {number} SAN_ZI_KE_FU_JIANG=1024 SAN_ZI_KE_FU_JIANG value
     * @property {number} SAN_ZI_KE=1025 SAN_ZI_KE value
     * @property {number} HUN_YAO_JIU=1026 HUN_YAO_JIU value
     * @property {number} SHI_SAN_LUAN_KAO=1027 SHI_SAN_LUAN_KAO value
     * @property {number} QI_XING_LUAN_KAO=1028 QI_XING_LUAN_KAO value
     * @property {number} WU_XING_LUAN_KAO=1029 WU_XING_LUAN_KAO value
     * @property {number} LUAN_ZI=1030 LUAN_ZI value
     * @property {number} ZI_YI_SE=1031 ZI_YI_SE value
     * @property {number} WU_ZI=1032 WU_ZI value
     * @property {number} SHI_SAN_YAO=1033 SHI_SAN_YAO value
     * @property {number} SHI_SAN_BU_KAO=1034 SHI_SAN_BU_KAO value
     * @property {number} ZUI_HAO_QI_DUI=1035 ZUI_HAO_QI_DUI value
     * @property {number} CHAO_HAO_QI_DUI=1036 CHAO_HAO_QI_DUI value
     * @property {number} HAO_QI_DUI=1037 HAO_QI_DUI value
     * @property {number} QI_DUI=1038 QI_DUI value
     * @property {number} PENG_PENG_HU=1039 PENG_PENG_HU value
     * @property {number} YI_TIAO_LONG=1040 YI_TIAO_LONG value
     * @property {number} BIAO_ZHUN_HU=1041 BIAO_ZHUN_HU value
     * @property {number} QING_YI_SE=1042 QING_YI_SE value
     * @property {number} ALMIGHTY_4=1043 ALMIGHTY_4 value
     * @property {number} LIAN_DUI=1044 LIAN_DUI value
     * @property {number} MING_KE=1045 MING_KE value
     * @property {number} AN_KE=1046 AN_KE value
     * @property {number} GANG_PAI=1047 GANG_PAI value
     * @property {number} ZHI_SHU=1048 ZHI_SHU value
     * @property {number} TONG_SHU=1049 TONG_SHU value
     * @property {number} SI_HE=1050 SI_HE value
     * @property {number} TIAN_HU=5001 TIAN_HU value
     * @property {number} DI_HU=5002 DI_HU value
     * @property {number} ZI_MO=5003 ZI_MO value
     * @property {number} GANG_SHANG_HUA=5004 GANG_SHANG_HUA value
     * @property {number} QIANG_GANG_HU=5005 QIANG_GANG_HU value
     * @property {number} DI_FEN=5006 DI_FEN value
     * @property {number} MING_GANG_=5009 MING_GANG_ value
     * @property {number} AN_GANG_=5010 AN_GANG_ value
     * @property {number} DIAN_GANG_=5011 DIAN_GANG_ value
     * @property {number} BU_GANG_=5012 BU_GANG_ value
     * @property {number} SI_GANG=5013 SI_GANG value
     * @property {number} SAN_GANG=5014 SAN_GANG value
     * @property {number} SHUANG_GANG=5015 SHUANG_GANG value
     * @property {number} GANG_=5016 GANG_ value
     * @property {number} PENG_=5017 PENG_ value
     * @property {number} HU_PAI=5018 HU_PAI value
     * @property {number} ZHI_FEN=5019 ZHI_FEN value
     * @property {number} QI_SHOU_BAO_TING=5020 QI_SHOU_BAO_TING value
     * @property {number} HAI_DI_LAO=5021 HAI_DI_LAO value
     * @property {number} BET_SCORE=5022 BET_SCORE value
     * @property {number} GANG_HOU_PAO=5023 GANG_HOU_PAO value
     * @property {number} HUANG_ZHUANG_DOUBLE=5024 HUANG_ZHUANG_DOUBLE value
     * @property {number} GEN_ZHUANG=5025 GEN_ZHUANG value
     * @property {number} GEN_HU=610001 GEN_HU value
     * @property {number} DA_DUI_ZI=610002 DA_DUI_ZI value
     * @property {number} JIN_GOU_DIAO=610003 JIN_GOU_DIAO value
     * @property {number} PAO_ZI=615001 PAO_ZI value
     * @property {number} HUA_SHUI_YU=615002 HUA_SHUI_YU value
     * @property {number} DIAN_ZI=615003 DIAN_ZI value
     * @property {number} SHUANG_BA_ZHI=340001 SHUANG_BA_ZHI value
     * @property {number} BA_ZHI=340002 BA_ZHI value
     * @property {number} SHUANG_SI_HE=340003 SHUANG_SI_HE value
     * @property {number} TONG_TIAN=340005 TONG_TIAN value
     * @property {number} DUI_DUI_HU=340006 DUI_DUI_HU value
     * @property {number} YA_DANG=340007 YA_DANG value
     * @property {number} SHUANG_TONG=340011 SHUANG_TONG value
     * @property {number} QI_TONG=340012 QI_TONG value
     * @property {number} WU_TONG=340013 WU_TONG value
     * @property {number} QUAN_LAO=340014 QUAN_LAO value
     * @property {number} QUAN_XIAO=340015 QUAN_XIAO value
     * @property {number} SHI_LAO=340016 SHI_LAO value
     * @property {number} SHI_XIAO=340017 SHI_XIAO value
     * @property {number} SHI_YI_ZHI=340018 SHI_YI_ZHI value
     * @property {number} BA_TONG=340020 BA_TONG value
     * @property {number} JIAO=345001 JIAO value
     * @property {number} ZUI=345002 ZUI value
     * @property {number} JIAO_ZUI=345003 JIAO_ZUI value
     * @property {number} WUHU_DI=345004 WUHU_DI value
     * @property {number} WUHU_ZHI=345005 WUHU_ZHI value
     * @property {number} ZHUANG_FEN=345006 ZHUANG_FEN value
     * @property {number} BU_DONG_SHOU=345007 BU_DONG_SHOU value
     * @property {number} GANG_KAI_HU=345008 GANG_KAI_HU value
     * @property {number} GANG_KAI_HU_YA_DANG=345009 GANG_KAI_HU_YA_DANG value
     * @property {number} DI_SI_GE_TOU_KA=345010 DI_SI_GE_TOU_KA value
     * @property {number} HONG_ZHONG_MING_GANG=345011 HONG_ZHONG_MING_GANG value
     * @property {number} HONG_ZHONG_AN_GANG=345012 HONG_ZHONG_AN_GANG value
     * @property {number} DA_CAI=345013 DA_CAI value
     * @property {number} WU_CAI=345014 WU_CAI value
     * @property {number} PENG_CAI=345015 PENG_CAI value
     * @property {number} GANG_CAI=345016 GANG_CAI value
     * @property {number} SHUN_FAN_BAO=345017 SHUN_FAN_BAO value
     * @property {number} LAO_XIAO_DUI=345018 LAO_XIAO_DUI value
     * @property {number} BANG_BANG=345019 BANG_BANG value
     * @property {number} QUAN_YAO_DUI_DUI_HU=345020 QUAN_YAO_DUI_DUI_HU value
     * @property {number} SI_DA_KAN=345021 SI_DA_KAN value
     * @property {number} SAN_DA_KAN=345022 SAN_DA_KAN value
     * @property {number} SHUANG_LIAN_HAO=345023 SHUANG_LIAN_HAO value
     * @property {number} XIAO_LIAN_HAO=345024 XIAO_LIAN_HAO value
     * @property {number} KAN_KAN_HU=345025 KAN_KAN_HU value
     * @property {number} SHUANG_BANG_BANG=345026 SHUANG_BANG_BANG value
     * @property {number} ZHONG_FA_BAI_SAN_DA_KAN=345027 ZHONG_FA_BAI_SAN_DA_KAN value
     * @property {number} DA_DIAO_CHE=345028 DA_DIAO_CHE value
     * @property {number} DA_NA=345029 DA_NA value
     * @property {number} QING_NA=345030 QING_NA value
     * @property {number} PING_NA=345031 PING_NA value
     * @property {number} MO_FEN=345032 MO_FEN value
     * @property {number} DU_YA=345033 DU_YA value
     * @property {number} KU_ZHI_YA=345034 KU_ZHI_YA value
     * @property {number} ZHI=345035 ZHI value
     * @property {number} TONG_=345036 TONG_ value
     * @property {number} KAN_ZI=345037 KAN_ZI value
     * @property {number} SAN_DA_KAN_DAI_TOU=345038 SAN_DA_KAN_DAI_TOU value
     * @property {number} BAO_PAI=345039 BAO_PAI value
     * @property {number} MO_ZI=345040 MO_ZI value
     * @property {number} LUAN_FENG=345041 LUAN_FENG value
     * @property {number} DU_YI=345042 DU_YI value
     * @property {number} SHUANG_QING=345043 SHUANG_QING value
     * @property {number} SI_PEI_ZI=345044 SI_PEI_ZI value
     * @property {number} PEI_ZI_CHI=345045 PEI_ZI_CHI value
     * @property {number} PEI_ZI_CHI_PEI_ZI=345046 PEI_ZI_CHI_PEI_ZI value
     * @property {number} DU_PEI_ZI=345047 DU_PEI_ZI value
     * @property {number} KAN_JIANG=345048 KAN_JIANG value
     * @property {number} FENG_JIANG=345049 FENG_JIANG value
     * @property {number} YING_QUE=345050 YING_QUE value
     * @property {number} RUAN_QUE=345051 RUAN_QUE value
     */
    mahjong.JieSuan = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1001] = "HUN_YI_SE"] = 1001;
        values[valuesById[1002] = "DAN_DIAO_JIANG"] = 1002;
        values[valuesById[1003] = "BIAN_ZHANG"] = 1003;
        values[valuesById[1004] = "KAN_ZHANG"] = 1004;
        values[valuesById[1005] = "MEN_QIAN_QING"] = 1005;
        values[valuesById[1006] = "QUE_YI_MEN"] = 1006;
        values[valuesById[1007] = "DUAN_YAO_JIU"] = 1007;
        values[valuesById[1008] = "JUE_ZHANG"] = 1008;
        values[valuesById[1009] = "QI_XING_BU_KAO"] = 1009;
        values[valuesById[1010] = "WU_XING_BU_KAO"] = 1010;
        values[valuesById[1011] = "QUAN_QIU_REN"] = 1011;
        values[valuesById[1012] = "YI_SE_YAO_JIU_KE"] = 1012;
        values[valuesById[1013] = "YI_SE_SAN_LIAN_DUI"] = 1013;
        values[valuesById[1014] = "YI_SE_YAO_JIU_KE_SHUANG"] = 1014;
        values[valuesById[1015] = "YI_SE_SAN_LIAN_DUI_SHUANG"] = 1015;
        values[valuesById[1016] = "LIAN_LIU"] = 1016;
        values[valuesById[1017] = "SHUANG_LIAN_LIU"] = 1017;
        values[valuesById[1018] = "DA_SAN_YUAN"] = 1018;
        values[valuesById[1019] = "DA_SI_XI"] = 1019;
        values[valuesById[1020] = "YI_SE_SI_LIAN_KE"] = 1020;
        values[valuesById[1021] = "YI_SE_SAN_LIAN_KE_FU_JIANG"] = 1021;
        values[valuesById[1022] = "YI_SE_SAN_LIAN_KE"] = 1022;
        values[valuesById[1023] = "SI_ZI_KE"] = 1023;
        values[valuesById[1024] = "SAN_ZI_KE_FU_JIANG"] = 1024;
        values[valuesById[1025] = "SAN_ZI_KE"] = 1025;
        values[valuesById[1026] = "HUN_YAO_JIU"] = 1026;
        values[valuesById[1027] = "SHI_SAN_LUAN_KAO"] = 1027;
        values[valuesById[1028] = "QI_XING_LUAN_KAO"] = 1028;
        values[valuesById[1029] = "WU_XING_LUAN_KAO"] = 1029;
        values[valuesById[1030] = "LUAN_ZI"] = 1030;
        values[valuesById[1031] = "ZI_YI_SE"] = 1031;
        values[valuesById[1032] = "WU_ZI"] = 1032;
        values[valuesById[1033] = "SHI_SAN_YAO"] = 1033;
        values[valuesById[1034] = "SHI_SAN_BU_KAO"] = 1034;
        values[valuesById[1035] = "ZUI_HAO_QI_DUI"] = 1035;
        values[valuesById[1036] = "CHAO_HAO_QI_DUI"] = 1036;
        values[valuesById[1037] = "HAO_QI_DUI"] = 1037;
        values[valuesById[1038] = "QI_DUI"] = 1038;
        values[valuesById[1039] = "PENG_PENG_HU"] = 1039;
        values[valuesById[1040] = "YI_TIAO_LONG"] = 1040;
        values[valuesById[1041] = "BIAO_ZHUN_HU"] = 1041;
        values[valuesById[1042] = "QING_YI_SE"] = 1042;
        values[valuesById[1043] = "ALMIGHTY_4"] = 1043;
        values[valuesById[1044] = "LIAN_DUI"] = 1044;
        values[valuesById[1045] = "MING_KE"] = 1045;
        values[valuesById[1046] = "AN_KE"] = 1046;
        values[valuesById[1047] = "GANG_PAI"] = 1047;
        values[valuesById[1048] = "ZHI_SHU"] = 1048;
        values[valuesById[1049] = "TONG_SHU"] = 1049;
        values[valuesById[1050] = "SI_HE"] = 1050;
        values[valuesById[5001] = "TIAN_HU"] = 5001;
        values[valuesById[5002] = "DI_HU"] = 5002;
        values[valuesById[5003] = "ZI_MO"] = 5003;
        values[valuesById[5004] = "GANG_SHANG_HUA"] = 5004;
        values[valuesById[5005] = "QIANG_GANG_HU"] = 5005;
        values[valuesById[5006] = "DI_FEN"] = 5006;
        values[valuesById[5009] = "MING_GANG_"] = 5009;
        values[valuesById[5010] = "AN_GANG_"] = 5010;
        values[valuesById[5011] = "DIAN_GANG_"] = 5011;
        values[valuesById[5012] = "BU_GANG_"] = 5012;
        values[valuesById[5013] = "SI_GANG"] = 5013;
        values[valuesById[5014] = "SAN_GANG"] = 5014;
        values[valuesById[5015] = "SHUANG_GANG"] = 5015;
        values[valuesById[5016] = "GANG_"] = 5016;
        values[valuesById[5017] = "PENG_"] = 5017;
        values[valuesById[5018] = "HU_PAI"] = 5018;
        values[valuesById[5019] = "ZHI_FEN"] = 5019;
        values[valuesById[5020] = "QI_SHOU_BAO_TING"] = 5020;
        values[valuesById[5021] = "HAI_DI_LAO"] = 5021;
        values[valuesById[5022] = "BET_SCORE"] = 5022;
        values[valuesById[5023] = "GANG_HOU_PAO"] = 5023;
        values[valuesById[5024] = "HUANG_ZHUANG_DOUBLE"] = 5024;
        values[valuesById[5025] = "GEN_ZHUANG"] = 5025;
        values[valuesById[610001] = "GEN_HU"] = 610001;
        values[valuesById[610002] = "DA_DUI_ZI"] = 610002;
        values[valuesById[610003] = "JIN_GOU_DIAO"] = 610003;
        values[valuesById[615001] = "PAO_ZI"] = 615001;
        values[valuesById[615002] = "HUA_SHUI_YU"] = 615002;
        values[valuesById[615003] = "DIAN_ZI"] = 615003;
        values[valuesById[340001] = "SHUANG_BA_ZHI"] = 340001;
        values[valuesById[340002] = "BA_ZHI"] = 340002;
        values[valuesById[340003] = "SHUANG_SI_HE"] = 340003;
        values[valuesById[340005] = "TONG_TIAN"] = 340005;
        values[valuesById[340006] = "DUI_DUI_HU"] = 340006;
        values[valuesById[340007] = "YA_DANG"] = 340007;
        values[valuesById[340011] = "SHUANG_TONG"] = 340011;
        values[valuesById[340012] = "QI_TONG"] = 340012;
        values[valuesById[340013] = "WU_TONG"] = 340013;
        values[valuesById[340014] = "QUAN_LAO"] = 340014;
        values[valuesById[340015] = "QUAN_XIAO"] = 340015;
        values[valuesById[340016] = "SHI_LAO"] = 340016;
        values[valuesById[340017] = "SHI_XIAO"] = 340017;
        values[valuesById[340018] = "SHI_YI_ZHI"] = 340018;
        values[valuesById[340020] = "BA_TONG"] = 340020;
        values[valuesById[345001] = "JIAO"] = 345001;
        values[valuesById[345002] = "ZUI"] = 345002;
        values[valuesById[345003] = "JIAO_ZUI"] = 345003;
        values[valuesById[345004] = "WUHU_DI"] = 345004;
        values[valuesById[345005] = "WUHU_ZHI"] = 345005;
        values[valuesById[345006] = "ZHUANG_FEN"] = 345006;
        values[valuesById[345007] = "BU_DONG_SHOU"] = 345007;
        values[valuesById[345008] = "GANG_KAI_HU"] = 345008;
        values[valuesById[345009] = "GANG_KAI_HU_YA_DANG"] = 345009;
        values[valuesById[345010] = "DI_SI_GE_TOU_KA"] = 345010;
        values[valuesById[345011] = "HONG_ZHONG_MING_GANG"] = 345011;
        values[valuesById[345012] = "HONG_ZHONG_AN_GANG"] = 345012;
        values[valuesById[345013] = "DA_CAI"] = 345013;
        values[valuesById[345014] = "WU_CAI"] = 345014;
        values[valuesById[345015] = "PENG_CAI"] = 345015;
        values[valuesById[345016] = "GANG_CAI"] = 345016;
        values[valuesById[345017] = "SHUN_FAN_BAO"] = 345017;
        values[valuesById[345018] = "LAO_XIAO_DUI"] = 345018;
        values[valuesById[345019] = "BANG_BANG"] = 345019;
        values[valuesById[345020] = "QUAN_YAO_DUI_DUI_HU"] = 345020;
        values[valuesById[345021] = "SI_DA_KAN"] = 345021;
        values[valuesById[345022] = "SAN_DA_KAN"] = 345022;
        values[valuesById[345023] = "SHUANG_LIAN_HAO"] = 345023;
        values[valuesById[345024] = "XIAO_LIAN_HAO"] = 345024;
        values[valuesById[345025] = "KAN_KAN_HU"] = 345025;
        values[valuesById[345026] = "SHUANG_BANG_BANG"] = 345026;
        values[valuesById[345027] = "ZHONG_FA_BAI_SAN_DA_KAN"] = 345027;
        values[valuesById[345028] = "DA_DIAO_CHE"] = 345028;
        values[valuesById[345029] = "DA_NA"] = 345029;
        values[valuesById[345030] = "QING_NA"] = 345030;
        values[valuesById[345031] = "PING_NA"] = 345031;
        values[valuesById[345032] = "MO_FEN"] = 345032;
        values[valuesById[345033] = "DU_YA"] = 345033;
        values[valuesById[345034] = "KU_ZHI_YA"] = 345034;
        values[valuesById[345035] = "ZHI"] = 345035;
        values[valuesById[345036] = "TONG_"] = 345036;
        values[valuesById[345037] = "KAN_ZI"] = 345037;
        values[valuesById[345038] = "SAN_DA_KAN_DAI_TOU"] = 345038;
        values[valuesById[345039] = "BAO_PAI"] = 345039;
        values[valuesById[345040] = "MO_ZI"] = 345040;
        values[valuesById[345041] = "LUAN_FENG"] = 345041;
        values[valuesById[345042] = "DU_YI"] = 345042;
        values[valuesById[345043] = "SHUANG_QING"] = 345043;
        values[valuesById[345044] = "SI_PEI_ZI"] = 345044;
        values[valuesById[345045] = "PEI_ZI_CHI"] = 345045;
        values[valuesById[345046] = "PEI_ZI_CHI_PEI_ZI"] = 345046;
        values[valuesById[345047] = "DU_PEI_ZI"] = 345047;
        values[valuesById[345048] = "KAN_JIANG"] = 345048;
        values[valuesById[345049] = "FENG_JIANG"] = 345049;
        values[valuesById[345050] = "YING_QUE"] = 345050;
        values[valuesById[345051] = "RUAN_QUE"] = 345051;
        return values;
    })();

    mahjong.OperDetail = (function() {

        /**
         * Properties of an OperDetail.
         * @memberof mahjong
         * @interface IOperDetail
         * @property {mahjong.OperType} operType OperDetail operType
         * @property {number|null} [uid] OperDetail uid
         * @property {Array.<number>|null} [cards] OperDetail cards
         * @property {number|null} [target] OperDetail target
         * @property {number|null} [remainCards] OperDetail remainCards
         */

        /**
         * Constructs a new OperDetail.
         * @memberof mahjong
         * @classdesc Represents an OperDetail.
         * @implements IOperDetail
         * @constructor
         * @param {mahjong.IOperDetail=} [properties] Properties to set
         */
        function OperDetail(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperDetail operType.
         * @member {mahjong.OperType} operType
         * @memberof mahjong.OperDetail
         * @instance
         */
        OperDetail.prototype.operType = 10;

        /**
         * OperDetail uid.
         * @member {number} uid
         * @memberof mahjong.OperDetail
         * @instance
         */
        OperDetail.prototype.uid = 0;

        /**
         * OperDetail cards.
         * @member {Array.<number>} cards
         * @memberof mahjong.OperDetail
         * @instance
         */
        OperDetail.prototype.cards = $util.emptyArray;

        /**
         * OperDetail target.
         * @member {number} target
         * @memberof mahjong.OperDetail
         * @instance
         */
        OperDetail.prototype.target = 0;

        /**
         * OperDetail remainCards.
         * @member {number} remainCards
         * @memberof mahjong.OperDetail
         * @instance
         */
        OperDetail.prototype.remainCards = 0;

        /**
         * Creates a new OperDetail instance using the specified properties.
         * @function create
         * @memberof mahjong.OperDetail
         * @static
         * @param {mahjong.IOperDetail=} [properties] Properties to set
         * @returns {mahjong.OperDetail} OperDetail instance
         */
        OperDetail.create = function create(properties) {
            return new OperDetail(properties);
        };

        /**
         * Encodes the specified OperDetail message. Does not implicitly {@link mahjong.OperDetail.verify|verify} messages.
         * @function encode
         * @memberof mahjong.OperDetail
         * @static
         * @param {mahjong.IOperDetail} message OperDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operType);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cards[i]);
            if (message.target != null && message.hasOwnProperty("target"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.target);
            if (message.remainCards != null && message.hasOwnProperty("remainCards"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.remainCards);
            return writer;
        };

        /**
         * Encodes the specified OperDetail message, length delimited. Does not implicitly {@link mahjong.OperDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.OperDetail
         * @static
         * @param {mahjong.IOperDetail} message OperDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperDetail message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.OperDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.OperDetail} OperDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.OperDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.operType = reader.int32();
                    break;
                case 2:
                    message.uid = reader.int32();
                    break;
                case 3:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                case 4:
                    message.target = reader.int32();
                    break;
                case 5:
                    message.remainCards = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("operType"))
                throw $util.ProtocolError("missing required 'operType'", { instance: message });
            return message;
        };

        /**
         * Decodes an OperDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.OperDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.OperDetail} OperDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperDetail message.
         * @function verify
         * @memberof mahjong.OperDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.operType) {
            default:
                return "operType: enum value expected";
            case 10:
            case 20:
            case 30:
            case 40:
            case 50:
            case 60:
            case 70:
            case 80:
            case 90:
                break;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            if (message.target != null && message.hasOwnProperty("target"))
                if (!$util.isInteger(message.target))
                    return "target: integer expected";
            if (message.remainCards != null && message.hasOwnProperty("remainCards"))
                if (!$util.isInteger(message.remainCards))
                    return "remainCards: integer expected";
            return null;
        };

        return OperDetail;
    })();

    /**
     * OperType enum.
     * @name mahjong.OperType
     * @enum {string}
     * @property {number} MO=10 MO value
     * @property {number} DA=20 DA value
     * @property {number} CHI=30 CHI value
     * @property {number} PENG=40 PENG value
     * @property {number} BU_GANG=50 BU_GANG value
     * @property {number} AN_GANG=60 AN_GANG value
     * @property {number} DIAN_GANG=70 DIAN_GANG value
     * @property {number} TING=80 TING value
     * @property {number} HU=90 HU value
     */
    mahjong.OperType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[10] = "MO"] = 10;
        values[valuesById[20] = "DA"] = 20;
        values[valuesById[30] = "CHI"] = 30;
        values[valuesById[40] = "PENG"] = 40;
        values[valuesById[50] = "BU_GANG"] = 50;
        values[valuesById[60] = "AN_GANG"] = 60;
        values[valuesById[70] = "DIAN_GANG"] = 70;
        values[valuesById[80] = "TING"] = 80;
        values[valuesById[90] = "HU"] = 90;
        return values;
    })();

    mahjong.PlayerGameResult = (function() {

        /**
         * Properties of a PlayerGameResult.
         * @memberof mahjong
         * @interface IPlayerGameResult
         * @property {number} uid PlayerGameResult uid
         * @property {Array.<number>|null} [points] PlayerGameResult points
         * @property {Array.<mahjong.IPlayerStat>|null} [playerStats] PlayerGameResult playerStats
         */

        /**
         * Constructs a new PlayerGameResult.
         * @memberof mahjong
         * @classdesc Represents a PlayerGameResult.
         * @implements IPlayerGameResult
         * @constructor
         * @param {mahjong.IPlayerGameResult=} [properties] Properties to set
         */
        function PlayerGameResult(properties) {
            this.points = [];
            this.playerStats = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerGameResult uid.
         * @member {number} uid
         * @memberof mahjong.PlayerGameResult
         * @instance
         */
        PlayerGameResult.prototype.uid = 0;

        /**
         * PlayerGameResult points.
         * @member {Array.<number>} points
         * @memberof mahjong.PlayerGameResult
         * @instance
         */
        PlayerGameResult.prototype.points = $util.emptyArray;

        /**
         * PlayerGameResult playerStats.
         * @member {Array.<mahjong.IPlayerStat>} playerStats
         * @memberof mahjong.PlayerGameResult
         * @instance
         */
        PlayerGameResult.prototype.playerStats = $util.emptyArray;

        /**
         * Creates a new PlayerGameResult instance using the specified properties.
         * @function create
         * @memberof mahjong.PlayerGameResult
         * @static
         * @param {mahjong.IPlayerGameResult=} [properties] Properties to set
         * @returns {mahjong.PlayerGameResult} PlayerGameResult instance
         */
        PlayerGameResult.create = function create(properties) {
            return new PlayerGameResult(properties);
        };

        /**
         * Encodes the specified PlayerGameResult message. Does not implicitly {@link mahjong.PlayerGameResult.verify|verify} messages.
         * @function encode
         * @memberof mahjong.PlayerGameResult
         * @static
         * @param {mahjong.IPlayerGameResult} message PlayerGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerGameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.points != null && message.points.length)
                for (var i = 0; i < message.points.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.points[i]);
            if (message.playerStats != null && message.playerStats.length)
                for (var i = 0; i < message.playerStats.length; ++i)
                    $root.mahjong.PlayerStat.encode(message.playerStats[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerGameResult message, length delimited. Does not implicitly {@link mahjong.PlayerGameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.PlayerGameResult
         * @static
         * @param {mahjong.IPlayerGameResult} message PlayerGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerGameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.PlayerGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.PlayerGameResult} PlayerGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerGameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.PlayerGameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.points.push(reader.int32());
                    } else
                        message.points.push(reader.int32());
                    break;
                case 3:
                    if (!(message.playerStats && message.playerStats.length))
                        message.playerStats = [];
                    message.playerStats.push($root.mahjong.PlayerStat.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerGameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.PlayerGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.PlayerGameResult} PlayerGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerGameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerGameResult message.
         * @function verify
         * @memberof mahjong.PlayerGameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerGameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (var i = 0; i < message.points.length; ++i)
                    if (!$util.isInteger(message.points[i]))
                        return "points: integer[] expected";
            }
            if (message.playerStats != null && message.hasOwnProperty("playerStats")) {
                if (!Array.isArray(message.playerStats))
                    return "playerStats: array expected";
                for (var i = 0; i < message.playerStats.length; ++i) {
                    var error = $root.mahjong.PlayerStat.verify(message.playerStats[i]);
                    if (error)
                        return "playerStats." + error;
                }
            }
            return null;
        };

        return PlayerGameResult;
    })();

    mahjong.PlayerSetInfo = (function() {

        /**
         * Properties of a PlayerSetInfo.
         * @memberof mahjong
         * @interface IPlayerSetInfo
         * @property {number} uid PlayerSetInfo uid
         * @property {number} handCardNum PlayerSetInfo handCardNum
         * @property {Array.<number>|null} [handcards] PlayerSetInfo handcards
         * @property {Array.<number>|null} [discards] PlayerSetInfo discards
         * @property {Array.<mahjong.ICardGroup>|null} [cardGroups] PlayerSetInfo cardGroups
         * @property {Array.<number>|null} [points] PlayerSetInfo points
         * @property {mahjong.Direction|null} [direction] PlayerSetInfo direction
         * @property {number|null} [bet] PlayerSetInfo bet
         * @property {mahjong.CardType|null} [queMen] PlayerSetInfo queMen
         * @property {boolean|null} [baoTing] PlayerSetInfo baoTing
         * @property {number|null} [tingDiscardIndex] PlayerSetInfo tingDiscardIndex
         */

        /**
         * Constructs a new PlayerSetInfo.
         * @memberof mahjong
         * @classdesc Represents a PlayerSetInfo.
         * @implements IPlayerSetInfo
         * @constructor
         * @param {mahjong.IPlayerSetInfo=} [properties] Properties to set
         */
        function PlayerSetInfo(properties) {
            this.handcards = [];
            this.discards = [];
            this.cardGroups = [];
            this.points = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerSetInfo uid.
         * @member {number} uid
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.uid = 0;

        /**
         * PlayerSetInfo handCardNum.
         * @member {number} handCardNum
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.handCardNum = 0;

        /**
         * PlayerSetInfo handcards.
         * @member {Array.<number>} handcards
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.handcards = $util.emptyArray;

        /**
         * PlayerSetInfo discards.
         * @member {Array.<number>} discards
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.discards = $util.emptyArray;

        /**
         * PlayerSetInfo cardGroups.
         * @member {Array.<mahjong.ICardGroup>} cardGroups
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.cardGroups = $util.emptyArray;

        /**
         * PlayerSetInfo points.
         * @member {Array.<number>} points
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.points = $util.emptyArray;

        /**
         * PlayerSetInfo direction.
         * @member {mahjong.Direction} direction
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.direction = 1;

        /**
         * PlayerSetInfo bet.
         * @member {number} bet
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.bet = 0;

        /**
         * PlayerSetInfo queMen.
         * @member {mahjong.CardType} queMen
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.queMen = 0;

        /**
         * PlayerSetInfo baoTing.
         * @member {boolean} baoTing
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.baoTing = false;

        /**
         * PlayerSetInfo tingDiscardIndex.
         * @member {number} tingDiscardIndex
         * @memberof mahjong.PlayerSetInfo
         * @instance
         */
        PlayerSetInfo.prototype.tingDiscardIndex = 0;

        /**
         * Creates a new PlayerSetInfo instance using the specified properties.
         * @function create
         * @memberof mahjong.PlayerSetInfo
         * @static
         * @param {mahjong.IPlayerSetInfo=} [properties] Properties to set
         * @returns {mahjong.PlayerSetInfo} PlayerSetInfo instance
         */
        PlayerSetInfo.create = function create(properties) {
            return new PlayerSetInfo(properties);
        };

        /**
         * Encodes the specified PlayerSetInfo message. Does not implicitly {@link mahjong.PlayerSetInfo.verify|verify} messages.
         * @function encode
         * @memberof mahjong.PlayerSetInfo
         * @static
         * @param {mahjong.IPlayerSetInfo} message PlayerSetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSetInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.handCardNum);
            if (message.handcards != null && message.handcards.length)
                for (var i = 0; i < message.handcards.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.handcards[i]);
            if (message.discards != null && message.discards.length)
                for (var i = 0; i < message.discards.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.discards[i]);
            if (message.cardGroups != null && message.cardGroups.length)
                for (var i = 0; i < message.cardGroups.length; ++i)
                    $root.mahjong.CardGroup.encode(message.cardGroups[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.points != null && message.points.length)
                for (var i = 0; i < message.points.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.points[i]);
            if (message.direction != null && message.hasOwnProperty("direction"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.direction);
            if (message.bet != null && message.hasOwnProperty("bet"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.bet);
            if (message.queMen != null && message.hasOwnProperty("queMen"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.queMen);
            if (message.baoTing != null && message.hasOwnProperty("baoTing"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.baoTing);
            if (message.tingDiscardIndex != null && message.hasOwnProperty("tingDiscardIndex"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.tingDiscardIndex);
            return writer;
        };

        /**
         * Encodes the specified PlayerSetInfo message, length delimited. Does not implicitly {@link mahjong.PlayerSetInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.PlayerSetInfo
         * @static
         * @param {mahjong.IPlayerSetInfo} message PlayerSetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSetInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerSetInfo message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.PlayerSetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.PlayerSetInfo} PlayerSetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSetInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.PlayerSetInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.handCardNum = reader.int32();
                    break;
                case 3:
                    if (!(message.handcards && message.handcards.length))
                        message.handcards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.handcards.push(reader.int32());
                    } else
                        message.handcards.push(reader.int32());
                    break;
                case 4:
                    if (!(message.discards && message.discards.length))
                        message.discards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.discards.push(reader.int32());
                    } else
                        message.discards.push(reader.int32());
                    break;
                case 5:
                    if (!(message.cardGroups && message.cardGroups.length))
                        message.cardGroups = [];
                    message.cardGroups.push($root.mahjong.CardGroup.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.points.push(reader.int32());
                    } else
                        message.points.push(reader.int32());
                    break;
                case 7:
                    message.direction = reader.int32();
                    break;
                case 8:
                    message.bet = reader.int32();
                    break;
                case 9:
                    message.queMen = reader.int32();
                    break;
                case 10:
                    message.baoTing = reader.bool();
                    break;
                case 11:
                    message.tingDiscardIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            if (!message.hasOwnProperty("handCardNum"))
                throw $util.ProtocolError("missing required 'handCardNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerSetInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.PlayerSetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.PlayerSetInfo} PlayerSetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSetInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerSetInfo message.
         * @function verify
         * @memberof mahjong.PlayerSetInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerSetInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            if (!$util.isInteger(message.handCardNum))
                return "handCardNum: integer expected";
            if (message.handcards != null && message.hasOwnProperty("handcards")) {
                if (!Array.isArray(message.handcards))
                    return "handcards: array expected";
                for (var i = 0; i < message.handcards.length; ++i)
                    if (!$util.isInteger(message.handcards[i]))
                        return "handcards: integer[] expected";
            }
            if (message.discards != null && message.hasOwnProperty("discards")) {
                if (!Array.isArray(message.discards))
                    return "discards: array expected";
                for (var i = 0; i < message.discards.length; ++i)
                    if (!$util.isInteger(message.discards[i]))
                        return "discards: integer[] expected";
            }
            if (message.cardGroups != null && message.hasOwnProperty("cardGroups")) {
                if (!Array.isArray(message.cardGroups))
                    return "cardGroups: array expected";
                for (var i = 0; i < message.cardGroups.length; ++i) {
                    var error = $root.mahjong.CardGroup.verify(message.cardGroups[i]);
                    if (error)
                        return "cardGroups." + error;
                }
            }
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (var i = 0; i < message.points.length; ++i)
                    if (!$util.isInteger(message.points[i]))
                        return "points: integer[] expected";
            }
            if (message.direction != null && message.hasOwnProperty("direction"))
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.bet != null && message.hasOwnProperty("bet"))
                if (!$util.isInteger(message.bet))
                    return "bet: integer expected";
            if (message.queMen != null && message.hasOwnProperty("queMen"))
                switch (message.queMen) {
                default:
                    return "queMen: enum value expected";
                case 0:
                case 10:
                case 20:
                case 30:
                case 40:
                case 50:
                case 100:
                    break;
                }
            if (message.baoTing != null && message.hasOwnProperty("baoTing"))
                if (typeof message.baoTing !== "boolean")
                    return "baoTing: boolean expected";
            if (message.tingDiscardIndex != null && message.hasOwnProperty("tingDiscardIndex"))
                if (!$util.isInteger(message.tingDiscardIndex))
                    return "tingDiscardIndex: integer expected";
            return null;
        };

        return PlayerSetInfo;
    })();

    mahjong.PlayerSetResult = (function() {

        /**
         * Properties of a PlayerSetResult.
         * @memberof mahjong
         * @interface IPlayerSetResult
         * @property {mahjong.IPlayerSetInfo} playerSetInfo PlayerSetResult playerSetInfo
         * @property {Array.<number>|null} [points] PlayerSetResult points
         * @property {Array.<mahjong.IScoreDetail>|null} [scoreDetails] PlayerSetResult scoreDetails
         * @property {boolean|null} [zimo] PlayerSetResult zimo
         * @property {boolean|null} [jiePao] PlayerSetResult jiePao
         * @property {boolean|null} [dianPao] PlayerSetResult dianPao
         * @property {boolean|null} [baoTing] PlayerSetResult baoTing
         */

        /**
         * Constructs a new PlayerSetResult.
         * @memberof mahjong
         * @classdesc Represents a PlayerSetResult.
         * @implements IPlayerSetResult
         * @constructor
         * @param {mahjong.IPlayerSetResult=} [properties] Properties to set
         */
        function PlayerSetResult(properties) {
            this.points = [];
            this.scoreDetails = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerSetResult playerSetInfo.
         * @member {mahjong.IPlayerSetInfo} playerSetInfo
         * @memberof mahjong.PlayerSetResult
         * @instance
         */
        PlayerSetResult.prototype.playerSetInfo = null;

        /**
         * PlayerSetResult points.
         * @member {Array.<number>} points
         * @memberof mahjong.PlayerSetResult
         * @instance
         */
        PlayerSetResult.prototype.points = $util.emptyArray;

        /**
         * PlayerSetResult scoreDetails.
         * @member {Array.<mahjong.IScoreDetail>} scoreDetails
         * @memberof mahjong.PlayerSetResult
         * @instance
         */
        PlayerSetResult.prototype.scoreDetails = $util.emptyArray;

        /**
         * PlayerSetResult zimo.
         * @member {boolean} zimo
         * @memberof mahjong.PlayerSetResult
         * @instance
         */
        PlayerSetResult.prototype.zimo = false;

        /**
         * PlayerSetResult jiePao.
         * @member {boolean} jiePao
         * @memberof mahjong.PlayerSetResult
         * @instance
         */
        PlayerSetResult.prototype.jiePao = false;

        /**
         * PlayerSetResult dianPao.
         * @member {boolean} dianPao
         * @memberof mahjong.PlayerSetResult
         * @instance
         */
        PlayerSetResult.prototype.dianPao = false;

        /**
         * PlayerSetResult baoTing.
         * @member {boolean} baoTing
         * @memberof mahjong.PlayerSetResult
         * @instance
         */
        PlayerSetResult.prototype.baoTing = false;

        /**
         * Creates a new PlayerSetResult instance using the specified properties.
         * @function create
         * @memberof mahjong.PlayerSetResult
         * @static
         * @param {mahjong.IPlayerSetResult=} [properties] Properties to set
         * @returns {mahjong.PlayerSetResult} PlayerSetResult instance
         */
        PlayerSetResult.create = function create(properties) {
            return new PlayerSetResult(properties);
        };

        /**
         * Encodes the specified PlayerSetResult message. Does not implicitly {@link mahjong.PlayerSetResult.verify|verify} messages.
         * @function encode
         * @memberof mahjong.PlayerSetResult
         * @static
         * @param {mahjong.IPlayerSetResult} message PlayerSetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSetResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.mahjong.PlayerSetInfo.encode(message.playerSetInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.points != null && message.points.length)
                for (var i = 0; i < message.points.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.points[i]);
            if (message.scoreDetails != null && message.scoreDetails.length)
                for (var i = 0; i < message.scoreDetails.length; ++i)
                    $root.mahjong.ScoreDetail.encode(message.scoreDetails[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.zimo != null && message.hasOwnProperty("zimo"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.zimo);
            if (message.jiePao != null && message.hasOwnProperty("jiePao"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.jiePao);
            if (message.dianPao != null && message.hasOwnProperty("dianPao"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.dianPao);
            if (message.baoTing != null && message.hasOwnProperty("baoTing"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.baoTing);
            return writer;
        };

        /**
         * Encodes the specified PlayerSetResult message, length delimited. Does not implicitly {@link mahjong.PlayerSetResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.PlayerSetResult
         * @static
         * @param {mahjong.IPlayerSetResult} message PlayerSetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSetResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerSetResult message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.PlayerSetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.PlayerSetResult} PlayerSetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSetResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.PlayerSetResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerSetInfo = $root.mahjong.PlayerSetInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.points.push(reader.int32());
                    } else
                        message.points.push(reader.int32());
                    break;
                case 3:
                    if (!(message.scoreDetails && message.scoreDetails.length))
                        message.scoreDetails = [];
                    message.scoreDetails.push($root.mahjong.ScoreDetail.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.zimo = reader.bool();
                    break;
                case 5:
                    message.jiePao = reader.bool();
                    break;
                case 6:
                    message.dianPao = reader.bool();
                    break;
                case 7:
                    message.baoTing = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerSetInfo"))
                throw $util.ProtocolError("missing required 'playerSetInfo'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerSetResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.PlayerSetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.PlayerSetResult} PlayerSetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSetResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerSetResult message.
         * @function verify
         * @memberof mahjong.PlayerSetResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerSetResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.mahjong.PlayerSetInfo.verify(message.playerSetInfo);
                if (error)
                    return "playerSetInfo." + error;
            }
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (var i = 0; i < message.points.length; ++i)
                    if (!$util.isInteger(message.points[i]))
                        return "points: integer[] expected";
            }
            if (message.scoreDetails != null && message.hasOwnProperty("scoreDetails")) {
                if (!Array.isArray(message.scoreDetails))
                    return "scoreDetails: array expected";
                for (var i = 0; i < message.scoreDetails.length; ++i) {
                    var error = $root.mahjong.ScoreDetail.verify(message.scoreDetails[i]);
                    if (error)
                        return "scoreDetails." + error;
                }
            }
            if (message.zimo != null && message.hasOwnProperty("zimo"))
                if (typeof message.zimo !== "boolean")
                    return "zimo: boolean expected";
            if (message.jiePao != null && message.hasOwnProperty("jiePao"))
                if (typeof message.jiePao !== "boolean")
                    return "jiePao: boolean expected";
            if (message.dianPao != null && message.hasOwnProperty("dianPao"))
                if (typeof message.dianPao !== "boolean")
                    return "dianPao: boolean expected";
            if (message.baoTing != null && message.hasOwnProperty("baoTing"))
                if (typeof message.baoTing !== "boolean")
                    return "baoTing: boolean expected";
            return null;
        };

        return PlayerSetResult;
    })();

    mahjong.PlayerStat = (function() {

        /**
         * Properties of a PlayerStat.
         * @memberof mahjong
         * @interface IPlayerStat
         * @property {mahjong.PlayerStatType} statType PlayerStat statType
         * @property {number|null} [val] PlayerStat val
         */

        /**
         * Constructs a new PlayerStat.
         * @memberof mahjong
         * @classdesc Represents a PlayerStat.
         * @implements IPlayerStat
         * @constructor
         * @param {mahjong.IPlayerStat=} [properties] Properties to set
         */
        function PlayerStat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerStat statType.
         * @member {mahjong.PlayerStatType} statType
         * @memberof mahjong.PlayerStat
         * @instance
         */
        PlayerStat.prototype.statType = 1;

        /**
         * PlayerStat val.
         * @member {number} val
         * @memberof mahjong.PlayerStat
         * @instance
         */
        PlayerStat.prototype.val = 0;

        /**
         * Creates a new PlayerStat instance using the specified properties.
         * @function create
         * @memberof mahjong.PlayerStat
         * @static
         * @param {mahjong.IPlayerStat=} [properties] Properties to set
         * @returns {mahjong.PlayerStat} PlayerStat instance
         */
        PlayerStat.create = function create(properties) {
            return new PlayerStat(properties);
        };

        /**
         * Encodes the specified PlayerStat message. Does not implicitly {@link mahjong.PlayerStat.verify|verify} messages.
         * @function encode
         * @memberof mahjong.PlayerStat
         * @static
         * @param {mahjong.IPlayerStat} message PlayerStat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerStat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.statType);
            if (message.val != null && message.hasOwnProperty("val"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.val);
            return writer;
        };

        /**
         * Encodes the specified PlayerStat message, length delimited. Does not implicitly {@link mahjong.PlayerStat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.PlayerStat
         * @static
         * @param {mahjong.IPlayerStat} message PlayerStat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerStat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerStat message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.PlayerStat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.PlayerStat} PlayerStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerStat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.PlayerStat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.statType = reader.int32();
                    break;
                case 2:
                    message.val = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("statType"))
                throw $util.ProtocolError("missing required 'statType'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerStat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.PlayerStat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.PlayerStat} PlayerStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerStat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerStat message.
         * @function verify
         * @memberof mahjong.PlayerStat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerStat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.statType) {
            default:
                return "statType: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val))
                    return "val: integer expected";
            return null;
        };

        return PlayerStat;
    })();

    /**
     * PlayerStatType enum.
     * @name mahjong.PlayerStatType
     * @enum {string}
     * @property {number} ZI_MO=1 ZI_MO value
     * @property {number} JIE_PAO=2 JIE_PAO value
     * @property {number} DIAN_PAO=3 DIAN_PAO value
     * @property {number} MING_GANG=4 MING_GANG value
     * @property {number} AN_GANG=5 AN_GANG value
     */
    mahjong.PlayerStatType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ZI_MO"] = 1;
        values[valuesById[2] = "JIE_PAO"] = 2;
        values[valuesById[3] = "DIAN_PAO"] = 3;
        values[valuesById[4] = "MING_GANG"] = 4;
        values[valuesById[5] = "AN_GANG"] = 5;
        return values;
    })();

    mahjong.SBet = (function() {

        /**
         * Properties of a SBet.
         * @memberof mahjong
         * @interface ISBet
         * @property {number} uid SBet uid
         * @property {number} bet SBet bet
         */

        /**
         * Constructs a new SBet.
         * @memberof mahjong
         * @classdesc Represents a SBet.
         * @implements ISBet
         * @constructor
         * @param {mahjong.ISBet=} [properties] Properties to set
         */
        function SBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SBet uid.
         * @member {number} uid
         * @memberof mahjong.SBet
         * @instance
         */
        SBet.prototype.uid = 0;

        /**
         * SBet bet.
         * @member {number} bet
         * @memberof mahjong.SBet
         * @instance
         */
        SBet.prototype.bet = 0;

        /**
         * Creates a new SBet instance using the specified properties.
         * @function create
         * @memberof mahjong.SBet
         * @static
         * @param {mahjong.ISBet=} [properties] Properties to set
         * @returns {mahjong.SBet} SBet instance
         */
        SBet.create = function create(properties) {
            return new SBet(properties);
        };

        /**
         * Encodes the specified SBet message. Does not implicitly {@link mahjong.SBet.verify|verify} messages.
         * @function encode
         * @memberof mahjong.SBet
         * @static
         * @param {mahjong.ISBet} message SBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bet);
            return writer;
        };

        /**
         * Encodes the specified SBet message, length delimited. Does not implicitly {@link mahjong.SBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.SBet
         * @static
         * @param {mahjong.ISBet} message SBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SBet message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.SBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.SBet} SBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.SBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.bet = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            if (!message.hasOwnProperty("bet"))
                throw $util.ProtocolError("missing required 'bet'", { instance: message });
            return message;
        };

        /**
         * Decodes a SBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.SBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.SBet} SBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SBet message.
         * @function verify
         * @memberof mahjong.SBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            if (!$util.isInteger(message.bet))
                return "bet: integer expected";
            return null;
        };

        return SBet;
    })();

    mahjong.SCanOper = (function() {

        /**
         * Properties of a SCanOper.
         * @memberof mahjong
         * @interface ISCanOper
         * @property {Array.<mahjong.IOperDetail>|null} [canOperDetails] SCanOper canOperDetails
         */

        /**
         * Constructs a new SCanOper.
         * @memberof mahjong
         * @classdesc Represents a SCanOper.
         * @implements ISCanOper
         * @constructor
         * @param {mahjong.ISCanOper=} [properties] Properties to set
         */
        function SCanOper(properties) {
            this.canOperDetails = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SCanOper canOperDetails.
         * @member {Array.<mahjong.IOperDetail>} canOperDetails
         * @memberof mahjong.SCanOper
         * @instance
         */
        SCanOper.prototype.canOperDetails = $util.emptyArray;

        /**
         * Creates a new SCanOper instance using the specified properties.
         * @function create
         * @memberof mahjong.SCanOper
         * @static
         * @param {mahjong.ISCanOper=} [properties] Properties to set
         * @returns {mahjong.SCanOper} SCanOper instance
         */
        SCanOper.create = function create(properties) {
            return new SCanOper(properties);
        };

        /**
         * Encodes the specified SCanOper message. Does not implicitly {@link mahjong.SCanOper.verify|verify} messages.
         * @function encode
         * @memberof mahjong.SCanOper
         * @static
         * @param {mahjong.ISCanOper} message SCanOper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCanOper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.canOperDetails != null && message.canOperDetails.length)
                for (var i = 0; i < message.canOperDetails.length; ++i)
                    $root.mahjong.OperDetail.encode(message.canOperDetails[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SCanOper message, length delimited. Does not implicitly {@link mahjong.SCanOper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.SCanOper
         * @static
         * @param {mahjong.ISCanOper} message SCanOper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCanOper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SCanOper message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.SCanOper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.SCanOper} SCanOper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCanOper.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.SCanOper();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.canOperDetails && message.canOperDetails.length))
                        message.canOperDetails = [];
                    message.canOperDetails.push($root.mahjong.OperDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SCanOper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.SCanOper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.SCanOper} SCanOper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCanOper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SCanOper message.
         * @function verify
         * @memberof mahjong.SCanOper
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SCanOper.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.canOperDetails != null && message.hasOwnProperty("canOperDetails")) {
                if (!Array.isArray(message.canOperDetails))
                    return "canOperDetails: array expected";
                for (var i = 0; i < message.canOperDetails.length; ++i) {
                    var error = $root.mahjong.OperDetail.verify(message.canOperDetails[i]);
                    if (error)
                        return "canOperDetails." + error;
                }
            }
            return null;
        };

        return SCanOper;
    })();

    mahjong.SChair = (function() {

        /**
         * Properties of a SChair.
         * @memberof mahjong
         * @interface ISChair
         * @property {number} uid SChair uid
         * @property {number} seat SChair seat
         */

        /**
         * Constructs a new SChair.
         * @memberof mahjong
         * @classdesc Represents a SChair.
         * @implements ISChair
         * @constructor
         * @param {mahjong.ISChair=} [properties] Properties to set
         */
        function SChair(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SChair uid.
         * @member {number} uid
         * @memberof mahjong.SChair
         * @instance
         */
        SChair.prototype.uid = 0;

        /**
         * SChair seat.
         * @member {number} seat
         * @memberof mahjong.SChair
         * @instance
         */
        SChair.prototype.seat = 0;

        /**
         * Creates a new SChair instance using the specified properties.
         * @function create
         * @memberof mahjong.SChair
         * @static
         * @param {mahjong.ISChair=} [properties] Properties to set
         * @returns {mahjong.SChair} SChair instance
         */
        SChair.create = function create(properties) {
            return new SChair(properties);
        };

        /**
         * Encodes the specified SChair message. Does not implicitly {@link mahjong.SChair.verify|verify} messages.
         * @function encode
         * @memberof mahjong.SChair
         * @static
         * @param {mahjong.ISChair} message SChair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SChair.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seat);
            return writer;
        };

        /**
         * Encodes the specified SChair message, length delimited. Does not implicitly {@link mahjong.SChair.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.SChair
         * @static
         * @param {mahjong.ISChair} message SChair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SChair.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SChair message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.SChair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.SChair} SChair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SChair.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.SChair();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.seat = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            if (!message.hasOwnProperty("seat"))
                throw $util.ProtocolError("missing required 'seat'", { instance: message });
            return message;
        };

        /**
         * Decodes a SChair message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.SChair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.SChair} SChair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SChair.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SChair message.
         * @function verify
         * @memberof mahjong.SChair
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SChair.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            if (!$util.isInteger(message.seat))
                return "seat: integer expected";
            return null;
        };

        return SChair;
    })();

    mahjong.SGameResult = (function() {

        /**
         * Properties of a SGameResult.
         * @memberof mahjong
         * @interface ISGameResult
         * @property {Array.<mahjong.IPlayerGameResult>|null} [playerGameResults] SGameResult playerGameResults
         * @property {number|null} [finalSet] SGameResult finalSet
         * @property {number|Long|null} [endTime] SGameResult endTime
         * @property {boolean|null} [dismiss] SGameResult dismiss
         */

        /**
         * Constructs a new SGameResult.
         * @memberof mahjong
         * @classdesc Represents a SGameResult.
         * @implements ISGameResult
         * @constructor
         * @param {mahjong.ISGameResult=} [properties] Properties to set
         */
        function SGameResult(properties) {
            this.playerGameResults = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SGameResult playerGameResults.
         * @member {Array.<mahjong.IPlayerGameResult>} playerGameResults
         * @memberof mahjong.SGameResult
         * @instance
         */
        SGameResult.prototype.playerGameResults = $util.emptyArray;

        /**
         * SGameResult finalSet.
         * @member {number} finalSet
         * @memberof mahjong.SGameResult
         * @instance
         */
        SGameResult.prototype.finalSet = 0;

        /**
         * SGameResult endTime.
         * @member {number|Long} endTime
         * @memberof mahjong.SGameResult
         * @instance
         */
        SGameResult.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SGameResult dismiss.
         * @member {boolean} dismiss
         * @memberof mahjong.SGameResult
         * @instance
         */
        SGameResult.prototype.dismiss = false;

        /**
         * Creates a new SGameResult instance using the specified properties.
         * @function create
         * @memberof mahjong.SGameResult
         * @static
         * @param {mahjong.ISGameResult=} [properties] Properties to set
         * @returns {mahjong.SGameResult} SGameResult instance
         */
        SGameResult.create = function create(properties) {
            return new SGameResult(properties);
        };

        /**
         * Encodes the specified SGameResult message. Does not implicitly {@link mahjong.SGameResult.verify|verify} messages.
         * @function encode
         * @memberof mahjong.SGameResult
         * @static
         * @param {mahjong.ISGameResult} message SGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerGameResults != null && message.playerGameResults.length)
                for (var i = 0; i < message.playerGameResults.length; ++i)
                    $root.mahjong.PlayerGameResult.encode(message.playerGameResults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.finalSet != null && message.hasOwnProperty("finalSet"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.finalSet);
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.endTime);
            if (message.dismiss != null && message.hasOwnProperty("dismiss"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.dismiss);
            return writer;
        };

        /**
         * Encodes the specified SGameResult message, length delimited. Does not implicitly {@link mahjong.SGameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.SGameResult
         * @static
         * @param {mahjong.ISGameResult} message SGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.SGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.SGameResult} SGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.SGameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.playerGameResults && message.playerGameResults.length))
                        message.playerGameResults = [];
                    message.playerGameResults.push($root.mahjong.PlayerGameResult.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.finalSet = reader.int32();
                    break;
                case 3:
                    message.endTime = reader.int64();
                    break;
                case 4:
                    message.dismiss = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SGameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.SGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.SGameResult} SGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SGameResult message.
         * @function verify
         * @memberof mahjong.SGameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SGameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerGameResults != null && message.hasOwnProperty("playerGameResults")) {
                if (!Array.isArray(message.playerGameResults))
                    return "playerGameResults: array expected";
                for (var i = 0; i < message.playerGameResults.length; ++i) {
                    var error = $root.mahjong.PlayerGameResult.verify(message.playerGameResults[i]);
                    if (error)
                        return "playerGameResults." + error;
                }
            }
            if (message.finalSet != null && message.hasOwnProperty("finalSet"))
                if (!$util.isInteger(message.finalSet))
                    return "finalSet: integer expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                    return "endTime: integer|Long expected";
            if (message.dismiss != null && message.hasOwnProperty("dismiss"))
                if (typeof message.dismiss !== "boolean")
                    return "dismiss: boolean expected";
            return null;
        };

        return SGameResult;
    })();

    mahjong.SOperCard = (function() {

        /**
         * Properties of a SOperCard.
         * @memberof mahjong
         * @interface ISOperCard
         * @property {Array.<mahjong.IOperDetail>|null} [operDetails] SOperCard operDetails
         * @property {Array.<mahjong.IOperDetail>|null} [canOperDetails] SOperCard canOperDetails
         * @property {Array.<mahjong.IDiscardTingCards>|null} [discardTingCards] SOperCard discardTingCards
         */

        /**
         * Constructs a new SOperCard.
         * @memberof mahjong
         * @classdesc Represents a SOperCard.
         * @implements ISOperCard
         * @constructor
         * @param {mahjong.ISOperCard=} [properties] Properties to set
         */
        function SOperCard(properties) {
            this.operDetails = [];
            this.canOperDetails = [];
            this.discardTingCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SOperCard operDetails.
         * @member {Array.<mahjong.IOperDetail>} operDetails
         * @memberof mahjong.SOperCard
         * @instance
         */
        SOperCard.prototype.operDetails = $util.emptyArray;

        /**
         * SOperCard canOperDetails.
         * @member {Array.<mahjong.IOperDetail>} canOperDetails
         * @memberof mahjong.SOperCard
         * @instance
         */
        SOperCard.prototype.canOperDetails = $util.emptyArray;

        /**
         * SOperCard discardTingCards.
         * @member {Array.<mahjong.IDiscardTingCards>} discardTingCards
         * @memberof mahjong.SOperCard
         * @instance
         */
        SOperCard.prototype.discardTingCards = $util.emptyArray;

        /**
         * Creates a new SOperCard instance using the specified properties.
         * @function create
         * @memberof mahjong.SOperCard
         * @static
         * @param {mahjong.ISOperCard=} [properties] Properties to set
         * @returns {mahjong.SOperCard} SOperCard instance
         */
        SOperCard.create = function create(properties) {
            return new SOperCard(properties);
        };

        /**
         * Encodes the specified SOperCard message. Does not implicitly {@link mahjong.SOperCard.verify|verify} messages.
         * @function encode
         * @memberof mahjong.SOperCard
         * @static
         * @param {mahjong.ISOperCard} message SOperCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SOperCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.operDetails != null && message.operDetails.length)
                for (var i = 0; i < message.operDetails.length; ++i)
                    $root.mahjong.OperDetail.encode(message.operDetails[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.canOperDetails != null && message.canOperDetails.length)
                for (var i = 0; i < message.canOperDetails.length; ++i)
                    $root.mahjong.OperDetail.encode(message.canOperDetails[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.discardTingCards != null && message.discardTingCards.length)
                for (var i = 0; i < message.discardTingCards.length; ++i)
                    $root.mahjong.DiscardTingCards.encode(message.discardTingCards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SOperCard message, length delimited. Does not implicitly {@link mahjong.SOperCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.SOperCard
         * @static
         * @param {mahjong.ISOperCard} message SOperCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SOperCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SOperCard message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.SOperCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.SOperCard} SOperCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SOperCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.SOperCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.operDetails && message.operDetails.length))
                        message.operDetails = [];
                    message.operDetails.push($root.mahjong.OperDetail.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.canOperDetails && message.canOperDetails.length))
                        message.canOperDetails = [];
                    message.canOperDetails.push($root.mahjong.OperDetail.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.discardTingCards && message.discardTingCards.length))
                        message.discardTingCards = [];
                    message.discardTingCards.push($root.mahjong.DiscardTingCards.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SOperCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.SOperCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.SOperCard} SOperCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SOperCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SOperCard message.
         * @function verify
         * @memberof mahjong.SOperCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SOperCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.operDetails != null && message.hasOwnProperty("operDetails")) {
                if (!Array.isArray(message.operDetails))
                    return "operDetails: array expected";
                for (var i = 0; i < message.operDetails.length; ++i) {
                    var error = $root.mahjong.OperDetail.verify(message.operDetails[i]);
                    if (error)
                        return "operDetails." + error;
                }
            }
            if (message.canOperDetails != null && message.hasOwnProperty("canOperDetails")) {
                if (!Array.isArray(message.canOperDetails))
                    return "canOperDetails: array expected";
                for (var i = 0; i < message.canOperDetails.length; ++i) {
                    var error = $root.mahjong.OperDetail.verify(message.canOperDetails[i]);
                    if (error)
                        return "canOperDetails." + error;
                }
            }
            if (message.discardTingCards != null && message.hasOwnProperty("discardTingCards")) {
                if (!Array.isArray(message.discardTingCards))
                    return "discardTingCards: array expected";
                for (var i = 0; i < message.discardTingCards.length; ++i) {
                    var error = $root.mahjong.DiscardTingCards.verify(message.discardTingCards[i]);
                    if (error)
                        return "discardTingCards." + error;
                }
            }
            return null;
        };

        return SOperCard;
    })();

    mahjong.SReady = (function() {

        /**
         * Properties of a SReady.
         * @memberof mahjong
         * @interface ISReady
         * @property {number} uid SReady uid
         */

        /**
         * Constructs a new SReady.
         * @memberof mahjong
         * @classdesc Represents a SReady.
         * @implements ISReady
         * @constructor
         * @param {mahjong.ISReady=} [properties] Properties to set
         */
        function SReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SReady uid.
         * @member {number} uid
         * @memberof mahjong.SReady
         * @instance
         */
        SReady.prototype.uid = 0;

        /**
         * Creates a new SReady instance using the specified properties.
         * @function create
         * @memberof mahjong.SReady
         * @static
         * @param {mahjong.ISReady=} [properties] Properties to set
         * @returns {mahjong.SReady} SReady instance
         */
        SReady.create = function create(properties) {
            return new SReady(properties);
        };

        /**
         * Encodes the specified SReady message. Does not implicitly {@link mahjong.SReady.verify|verify} messages.
         * @function encode
         * @memberof mahjong.SReady
         * @static
         * @param {mahjong.ISReady} message SReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified SReady message, length delimited. Does not implicitly {@link mahjong.SReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.SReady
         * @static
         * @param {mahjong.ISReady} message SReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SReady message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.SReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.SReady} SReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.SReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            return message;
        };

        /**
         * Decodes a SReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.SReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.SReady} SReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SReady message.
         * @function verify
         * @memberof mahjong.SReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            return null;
        };

        return SReady;
    })();

    mahjong.SSetInit = (function() {

        /**
         * Properties of a SSetInit.
         * @memberof mahjong
         * @interface ISSetInit
         * @property {Array.<mahjong.IPlayerSetInfo>|null} [playerSetInfos] SSetInit playerSetInfos
         * @property {number} curSet SSetInit curSet
         * @property {number} remainCards SSetInit remainCards
         * @property {number} bankerId SSetInit bankerId
         * @property {mahjong.SetStage} stage SSetInit stage
         * @property {mahjong.IOperDetail|null} [lastOperDetail] SSetInit lastOperDetail
         * @property {Array.<mahjong.IOperDetail>|null} [canOperDetails] SSetInit canOperDetails
         * @property {Array.<mahjong.IDiscardTingCards>|null} [discardTingCards] SSetInit discardTingCards
         * @property {number|null} [almighty] SSetInit almighty
         * @property {number|null} [curDi] SSetInit curDi
         * @property {number|null} [curQuan] SSetInit curQuan
         */

        /**
         * Constructs a new SSetInit.
         * @memberof mahjong
         * @classdesc Represents a SSetInit.
         * @implements ISSetInit
         * @constructor
         * @param {mahjong.ISSetInit=} [properties] Properties to set
         */
        function SSetInit(properties) {
            this.playerSetInfos = [];
            this.canOperDetails = [];
            this.discardTingCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SSetInit playerSetInfos.
         * @member {Array.<mahjong.IPlayerSetInfo>} playerSetInfos
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.playerSetInfos = $util.emptyArray;

        /**
         * SSetInit curSet.
         * @member {number} curSet
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.curSet = 0;

        /**
         * SSetInit remainCards.
         * @member {number} remainCards
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.remainCards = 0;

        /**
         * SSetInit bankerId.
         * @member {number} bankerId
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.bankerId = 0;

        /**
         * SSetInit stage.
         * @member {mahjong.SetStage} stage
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.stage = 0;

        /**
         * SSetInit lastOperDetail.
         * @member {mahjong.IOperDetail|null|undefined} lastOperDetail
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.lastOperDetail = null;

        /**
         * SSetInit canOperDetails.
         * @member {Array.<mahjong.IOperDetail>} canOperDetails
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.canOperDetails = $util.emptyArray;

        /**
         * SSetInit discardTingCards.
         * @member {Array.<mahjong.IDiscardTingCards>} discardTingCards
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.discardTingCards = $util.emptyArray;

        /**
         * SSetInit almighty.
         * @member {number} almighty
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.almighty = 0;

        /**
         * SSetInit curDi.
         * @member {number} curDi
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.curDi = 0;

        /**
         * SSetInit curQuan.
         * @member {number} curQuan
         * @memberof mahjong.SSetInit
         * @instance
         */
        SSetInit.prototype.curQuan = 0;

        /**
         * Creates a new SSetInit instance using the specified properties.
         * @function create
         * @memberof mahjong.SSetInit
         * @static
         * @param {mahjong.ISSetInit=} [properties] Properties to set
         * @returns {mahjong.SSetInit} SSetInit instance
         */
        SSetInit.create = function create(properties) {
            return new SSetInit(properties);
        };

        /**
         * Encodes the specified SSetInit message. Does not implicitly {@link mahjong.SSetInit.verify|verify} messages.
         * @function encode
         * @memberof mahjong.SSetInit
         * @static
         * @param {mahjong.ISSetInit} message SSetInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SSetInit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerSetInfos != null && message.playerSetInfos.length)
                for (var i = 0; i < message.playerSetInfos.length; ++i)
                    $root.mahjong.PlayerSetInfo.encode(message.playerSetInfos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.curSet);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.remainCards);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.bankerId);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.stage);
            if (message.lastOperDetail != null && message.hasOwnProperty("lastOperDetail"))
                $root.mahjong.OperDetail.encode(message.lastOperDetail, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.canOperDetails != null && message.canOperDetails.length)
                for (var i = 0; i < message.canOperDetails.length; ++i)
                    $root.mahjong.OperDetail.encode(message.canOperDetails[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.discardTingCards != null && message.discardTingCards.length)
                for (var i = 0; i < message.discardTingCards.length; ++i)
                    $root.mahjong.DiscardTingCards.encode(message.discardTingCards[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.almighty != null && message.hasOwnProperty("almighty"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.almighty);
            if (message.curDi != null && message.hasOwnProperty("curDi"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.curDi);
            if (message.curQuan != null && message.hasOwnProperty("curQuan"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.curQuan);
            return writer;
        };

        /**
         * Encodes the specified SSetInit message, length delimited. Does not implicitly {@link mahjong.SSetInit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.SSetInit
         * @static
         * @param {mahjong.ISSetInit} message SSetInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SSetInit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SSetInit message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.SSetInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.SSetInit} SSetInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SSetInit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.SSetInit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.playerSetInfos && message.playerSetInfos.length))
                        message.playerSetInfos = [];
                    message.playerSetInfos.push($root.mahjong.PlayerSetInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.curSet = reader.int32();
                    break;
                case 3:
                    message.remainCards = reader.int32();
                    break;
                case 4:
                    message.bankerId = reader.int32();
                    break;
                case 5:
                    message.stage = reader.int32();
                    break;
                case 6:
                    message.lastOperDetail = $root.mahjong.OperDetail.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.canOperDetails && message.canOperDetails.length))
                        message.canOperDetails = [];
                    message.canOperDetails.push($root.mahjong.OperDetail.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.discardTingCards && message.discardTingCards.length))
                        message.discardTingCards = [];
                    message.discardTingCards.push($root.mahjong.DiscardTingCards.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.almighty = reader.int32();
                    break;
                case 10:
                    message.curDi = reader.int32();
                    break;
                case 11:
                    message.curQuan = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("curSet"))
                throw $util.ProtocolError("missing required 'curSet'", { instance: message });
            if (!message.hasOwnProperty("remainCards"))
                throw $util.ProtocolError("missing required 'remainCards'", { instance: message });
            if (!message.hasOwnProperty("bankerId"))
                throw $util.ProtocolError("missing required 'bankerId'", { instance: message });
            if (!message.hasOwnProperty("stage"))
                throw $util.ProtocolError("missing required 'stage'", { instance: message });
            return message;
        };

        /**
         * Decodes a SSetInit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.SSetInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.SSetInit} SSetInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SSetInit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SSetInit message.
         * @function verify
         * @memberof mahjong.SSetInit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SSetInit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerSetInfos != null && message.hasOwnProperty("playerSetInfos")) {
                if (!Array.isArray(message.playerSetInfos))
                    return "playerSetInfos: array expected";
                for (var i = 0; i < message.playerSetInfos.length; ++i) {
                    var error = $root.mahjong.PlayerSetInfo.verify(message.playerSetInfos[i]);
                    if (error)
                        return "playerSetInfos." + error;
                }
            }
            if (!$util.isInteger(message.curSet))
                return "curSet: integer expected";
            if (!$util.isInteger(message.remainCards))
                return "remainCards: integer expected";
            if (!$util.isInteger(message.bankerId))
                return "bankerId: integer expected";
            switch (message.stage) {
            default:
                return "stage: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            if (message.lastOperDetail != null && message.hasOwnProperty("lastOperDetail")) {
                var error = $root.mahjong.OperDetail.verify(message.lastOperDetail);
                if (error)
                    return "lastOperDetail." + error;
            }
            if (message.canOperDetails != null && message.hasOwnProperty("canOperDetails")) {
                if (!Array.isArray(message.canOperDetails))
                    return "canOperDetails: array expected";
                for (var i = 0; i < message.canOperDetails.length; ++i) {
                    var error = $root.mahjong.OperDetail.verify(message.canOperDetails[i]);
                    if (error)
                        return "canOperDetails." + error;
                }
            }
            if (message.discardTingCards != null && message.hasOwnProperty("discardTingCards")) {
                if (!Array.isArray(message.discardTingCards))
                    return "discardTingCards: array expected";
                for (var i = 0; i < message.discardTingCards.length; ++i) {
                    var error = $root.mahjong.DiscardTingCards.verify(message.discardTingCards[i]);
                    if (error)
                        return "discardTingCards." + error;
                }
            }
            if (message.almighty != null && message.hasOwnProperty("almighty"))
                if (!$util.isInteger(message.almighty))
                    return "almighty: integer expected";
            if (message.curDi != null && message.hasOwnProperty("curDi"))
                if (!$util.isInteger(message.curDi))
                    return "curDi: integer expected";
            if (message.curQuan != null && message.hasOwnProperty("curQuan"))
                if (!$util.isInteger(message.curQuan))
                    return "curQuan: integer expected";
            return null;
        };

        return SSetInit;
    })();

    mahjong.SSetResult = (function() {

        /**
         * Properties of a SSetResult.
         * @memberof mahjong
         * @interface ISSetResult
         * @property {Array.<mahjong.IPlayerSetResult>|null} [playerSetResults] SSetResult playerSetResults
         * @property {number} curSet SSetResult curSet
         * @property {boolean} huang SSetResult huang
         * @property {boolean} over SSetResult over
         * @property {number|Long|null} [endTime] SSetResult endTime
         * @property {number|null} [huCard] SSetResult huCard
         * @property {number|null} [nextBankerId] SSetResult nextBankerId
         */

        /**
         * Constructs a new SSetResult.
         * @memberof mahjong
         * @classdesc Represents a SSetResult.
         * @implements ISSetResult
         * @constructor
         * @param {mahjong.ISSetResult=} [properties] Properties to set
         */
        function SSetResult(properties) {
            this.playerSetResults = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SSetResult playerSetResults.
         * @member {Array.<mahjong.IPlayerSetResult>} playerSetResults
         * @memberof mahjong.SSetResult
         * @instance
         */
        SSetResult.prototype.playerSetResults = $util.emptyArray;

        /**
         * SSetResult curSet.
         * @member {number} curSet
         * @memberof mahjong.SSetResult
         * @instance
         */
        SSetResult.prototype.curSet = 0;

        /**
         * SSetResult huang.
         * @member {boolean} huang
         * @memberof mahjong.SSetResult
         * @instance
         */
        SSetResult.prototype.huang = false;

        /**
         * SSetResult over.
         * @member {boolean} over
         * @memberof mahjong.SSetResult
         * @instance
         */
        SSetResult.prototype.over = false;

        /**
         * SSetResult endTime.
         * @member {number|Long} endTime
         * @memberof mahjong.SSetResult
         * @instance
         */
        SSetResult.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SSetResult huCard.
         * @member {number} huCard
         * @memberof mahjong.SSetResult
         * @instance
         */
        SSetResult.prototype.huCard = 0;

        /**
         * SSetResult nextBankerId.
         * @member {number} nextBankerId
         * @memberof mahjong.SSetResult
         * @instance
         */
        SSetResult.prototype.nextBankerId = 0;

        /**
         * Creates a new SSetResult instance using the specified properties.
         * @function create
         * @memberof mahjong.SSetResult
         * @static
         * @param {mahjong.ISSetResult=} [properties] Properties to set
         * @returns {mahjong.SSetResult} SSetResult instance
         */
        SSetResult.create = function create(properties) {
            return new SSetResult(properties);
        };

        /**
         * Encodes the specified SSetResult message. Does not implicitly {@link mahjong.SSetResult.verify|verify} messages.
         * @function encode
         * @memberof mahjong.SSetResult
         * @static
         * @param {mahjong.ISSetResult} message SSetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SSetResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerSetResults != null && message.playerSetResults.length)
                for (var i = 0; i < message.playerSetResults.length; ++i)
                    $root.mahjong.PlayerSetResult.encode(message.playerSetResults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.curSet);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.huang);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.over);
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.endTime);
            if (message.huCard != null && message.hasOwnProperty("huCard"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.huCard);
            if (message.nextBankerId != null && message.hasOwnProperty("nextBankerId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.nextBankerId);
            return writer;
        };

        /**
         * Encodes the specified SSetResult message, length delimited. Does not implicitly {@link mahjong.SSetResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.SSetResult
         * @static
         * @param {mahjong.ISSetResult} message SSetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SSetResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SSetResult message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.SSetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.SSetResult} SSetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SSetResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.SSetResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.playerSetResults && message.playerSetResults.length))
                        message.playerSetResults = [];
                    message.playerSetResults.push($root.mahjong.PlayerSetResult.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.curSet = reader.int32();
                    break;
                case 3:
                    message.huang = reader.bool();
                    break;
                case 4:
                    message.over = reader.bool();
                    break;
                case 5:
                    message.endTime = reader.int64();
                    break;
                case 6:
                    message.huCard = reader.int32();
                    break;
                case 7:
                    message.nextBankerId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("curSet"))
                throw $util.ProtocolError("missing required 'curSet'", { instance: message });
            if (!message.hasOwnProperty("huang"))
                throw $util.ProtocolError("missing required 'huang'", { instance: message });
            if (!message.hasOwnProperty("over"))
                throw $util.ProtocolError("missing required 'over'", { instance: message });
            return message;
        };

        /**
         * Decodes a SSetResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.SSetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.SSetResult} SSetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SSetResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SSetResult message.
         * @function verify
         * @memberof mahjong.SSetResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SSetResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerSetResults != null && message.hasOwnProperty("playerSetResults")) {
                if (!Array.isArray(message.playerSetResults))
                    return "playerSetResults: array expected";
                for (var i = 0; i < message.playerSetResults.length; ++i) {
                    var error = $root.mahjong.PlayerSetResult.verify(message.playerSetResults[i]);
                    if (error)
                        return "playerSetResults." + error;
                }
            }
            if (!$util.isInteger(message.curSet))
                return "curSet: integer expected";
            if (typeof message.huang !== "boolean")
                return "huang: boolean expected";
            if (typeof message.over !== "boolean")
                return "over: boolean expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                    return "endTime: integer|Long expected";
            if (message.huCard != null && message.hasOwnProperty("huCard"))
                if (!$util.isInteger(message.huCard))
                    return "huCard: integer expected";
            if (message.nextBankerId != null && message.hasOwnProperty("nextBankerId"))
                if (!$util.isInteger(message.nextBankerId))
                    return "nextBankerId: integer expected";
            return null;
        };

        return SSetResult;
    })();

    mahjong.ScoreDetail = (function() {

        /**
         * Properties of a ScoreDetail.
         * @memberof mahjong
         * @interface IScoreDetail
         * @property {mahjong.JieSuan} mainType ScoreDetail mainType
         * @property {Array.<mahjong.JieSuan>|null} [subTypes] ScoreDetail subTypes
         * @property {number|null} [score] ScoreDetail score
         */

        /**
         * Constructs a new ScoreDetail.
         * @memberof mahjong
         * @classdesc Represents a ScoreDetail.
         * @implements IScoreDetail
         * @constructor
         * @param {mahjong.IScoreDetail=} [properties] Properties to set
         */
        function ScoreDetail(properties) {
            this.subTypes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ScoreDetail mainType.
         * @member {mahjong.JieSuan} mainType
         * @memberof mahjong.ScoreDetail
         * @instance
         */
        ScoreDetail.prototype.mainType = 1001;

        /**
         * ScoreDetail subTypes.
         * @member {Array.<mahjong.JieSuan>} subTypes
         * @memberof mahjong.ScoreDetail
         * @instance
         */
        ScoreDetail.prototype.subTypes = $util.emptyArray;

        /**
         * ScoreDetail score.
         * @member {number} score
         * @memberof mahjong.ScoreDetail
         * @instance
         */
        ScoreDetail.prototype.score = 0;

        /**
         * Creates a new ScoreDetail instance using the specified properties.
         * @function create
         * @memberof mahjong.ScoreDetail
         * @static
         * @param {mahjong.IScoreDetail=} [properties] Properties to set
         * @returns {mahjong.ScoreDetail} ScoreDetail instance
         */
        ScoreDetail.create = function create(properties) {
            return new ScoreDetail(properties);
        };

        /**
         * Encodes the specified ScoreDetail message. Does not implicitly {@link mahjong.ScoreDetail.verify|verify} messages.
         * @function encode
         * @memberof mahjong.ScoreDetail
         * @static
         * @param {mahjong.IScoreDetail} message ScoreDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mainType);
            if (message.subTypes != null && message.subTypes.length)
                for (var i = 0; i < message.subTypes.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.subTypes[i]);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
            return writer;
        };

        /**
         * Encodes the specified ScoreDetail message, length delimited. Does not implicitly {@link mahjong.ScoreDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mahjong.ScoreDetail
         * @static
         * @param {mahjong.IScoreDetail} message ScoreDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScoreDetail message from the specified reader or buffer.
         * @function decode
         * @memberof mahjong.ScoreDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mahjong.ScoreDetail} ScoreDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong.ScoreDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mainType = reader.int32();
                    break;
                case 2:
                    if (!(message.subTypes && message.subTypes.length))
                        message.subTypes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.subTypes.push(reader.int32());
                    } else
                        message.subTypes.push(reader.int32());
                    break;
                case 3:
                    message.score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mainType"))
                throw $util.ProtocolError("missing required 'mainType'", { instance: message });
            return message;
        };

        /**
         * Decodes a ScoreDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mahjong.ScoreDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mahjong.ScoreDetail} ScoreDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScoreDetail message.
         * @function verify
         * @memberof mahjong.ScoreDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScoreDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.mainType) {
            default:
                return "mainType: enum value expected";
            case 1001:
            case 1002:
            case 1003:
            case 1004:
            case 1005:
            case 1006:
            case 1007:
            case 1008:
            case 1009:
            case 1010:
            case 1011:
            case 1012:
            case 1013:
            case 1014:
            case 1015:
            case 1016:
            case 1017:
            case 1018:
            case 1019:
            case 1020:
            case 1021:
            case 1022:
            case 1023:
            case 1024:
            case 1025:
            case 1026:
            case 1027:
            case 1028:
            case 1029:
            case 1030:
            case 1031:
            case 1032:
            case 1033:
            case 1034:
            case 1035:
            case 1036:
            case 1037:
            case 1038:
            case 1039:
            case 1040:
            case 1041:
            case 1042:
            case 1043:
            case 1044:
            case 1045:
            case 1046:
            case 1047:
            case 1048:
            case 1049:
            case 1050:
            case 5001:
            case 5002:
            case 5003:
            case 5004:
            case 5005:
            case 5006:
            case 5009:
            case 5010:
            case 5011:
            case 5012:
            case 5013:
            case 5014:
            case 5015:
            case 5016:
            case 5017:
            case 5018:
            case 5019:
            case 5020:
            case 5021:
            case 5022:
            case 5023:
            case 5024:
            case 5025:
            case 610001:
            case 610002:
            case 610003:
            case 615001:
            case 615002:
            case 615003:
            case 340001:
            case 340002:
            case 340003:
            case 340005:
            case 340006:
            case 340007:
            case 340011:
            case 340012:
            case 340013:
            case 340014:
            case 340015:
            case 340016:
            case 340017:
            case 340018:
            case 340020:
            case 345001:
            case 345002:
            case 345003:
            case 345004:
            case 345005:
            case 345006:
            case 345007:
            case 345008:
            case 345009:
            case 345010:
            case 345011:
            case 345012:
            case 345013:
            case 345014:
            case 345015:
            case 345016:
            case 345017:
            case 345018:
            case 345019:
            case 345020:
            case 345021:
            case 345022:
            case 345023:
            case 345024:
            case 345025:
            case 345026:
            case 345027:
            case 345028:
            case 345029:
            case 345030:
            case 345031:
            case 345032:
            case 345033:
            case 345034:
            case 345035:
            case 345036:
            case 345037:
            case 345038:
            case 345039:
            case 345040:
            case 345041:
            case 345042:
            case 345043:
            case 345044:
            case 345045:
            case 345046:
            case 345047:
            case 345048:
            case 345049:
            case 345050:
            case 345051:
                break;
            }
            if (message.subTypes != null && message.hasOwnProperty("subTypes")) {
                if (!Array.isArray(message.subTypes))
                    return "subTypes: array expected";
                for (var i = 0; i < message.subTypes.length; ++i)
                    switch (message.subTypes[i]) {
                    default:
                        return "subTypes: enum value[] expected";
                    case 1001:
                    case 1002:
                    case 1003:
                    case 1004:
                    case 1005:
                    case 1006:
                    case 1007:
                    case 1008:
                    case 1009:
                    case 1010:
                    case 1011:
                    case 1012:
                    case 1013:
                    case 1014:
                    case 1015:
                    case 1016:
                    case 1017:
                    case 1018:
                    case 1019:
                    case 1020:
                    case 1021:
                    case 1022:
                    case 1023:
                    case 1024:
                    case 1025:
                    case 1026:
                    case 1027:
                    case 1028:
                    case 1029:
                    case 1030:
                    case 1031:
                    case 1032:
                    case 1033:
                    case 1034:
                    case 1035:
                    case 1036:
                    case 1037:
                    case 1038:
                    case 1039:
                    case 1040:
                    case 1041:
                    case 1042:
                    case 1043:
                    case 1044:
                    case 1045:
                    case 1046:
                    case 1047:
                    case 1048:
                    case 1049:
                    case 1050:
                    case 5001:
                    case 5002:
                    case 5003:
                    case 5004:
                    case 5005:
                    case 5006:
                    case 5009:
                    case 5010:
                    case 5011:
                    case 5012:
                    case 5013:
                    case 5014:
                    case 5015:
                    case 5016:
                    case 5017:
                    case 5018:
                    case 5019:
                    case 5020:
                    case 5021:
                    case 5022:
                    case 5023:
                    case 5024:
                    case 5025:
                    case 610001:
                    case 610002:
                    case 610003:
                    case 615001:
                    case 615002:
                    case 615003:
                    case 340001:
                    case 340002:
                    case 340003:
                    case 340005:
                    case 340006:
                    case 340007:
                    case 340011:
                    case 340012:
                    case 340013:
                    case 340014:
                    case 340015:
                    case 340016:
                    case 340017:
                    case 340018:
                    case 340020:
                    case 345001:
                    case 345002:
                    case 345003:
                    case 345004:
                    case 345005:
                    case 345006:
                    case 345007:
                    case 345008:
                    case 345009:
                    case 345010:
                    case 345011:
                    case 345012:
                    case 345013:
                    case 345014:
                    case 345015:
                    case 345016:
                    case 345017:
                    case 345018:
                    case 345019:
                    case 345020:
                    case 345021:
                    case 345022:
                    case 345023:
                    case 345024:
                    case 345025:
                    case 345026:
                    case 345027:
                    case 345028:
                    case 345029:
                    case 345030:
                    case 345031:
                    case 345032:
                    case 345033:
                    case 345034:
                    case 345035:
                    case 345036:
                    case 345037:
                    case 345038:
                    case 345039:
                    case 345040:
                    case 345041:
                    case 345042:
                    case 345043:
                    case 345044:
                    case 345045:
                    case 345046:
                    case 345047:
                    case 345048:
                    case 345049:
                    case 345050:
                    case 345051:
                        break;
                    }
            }
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            return null;
        };

        return ScoreDetail;
    })();

    /**
     * SetStage enum.
     * @name mahjong.SetStage
     * @enum {string}
     * @property {number} GAMING=0 GAMING value
     * @property {number} XIA_ZHU=1 XIA_ZHU value
     * @property {number} DING_QUE=2 DING_QUE value
     * @property {number} JIE_SUAN=3 JIE_SUAN value
     */
    mahjong.SetStage = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GAMING"] = 0;
        values[valuesById[1] = "XIA_ZHU"] = 1;
        values[valuesById[2] = "DING_QUE"] = 2;
        values[valuesById[3] = "JIE_SUAN"] = 3;
        return values;
    })();

    return mahjong;
})();

$root.hall = (function() {

    /**
     * Namespace hall.
     * @exports hall
     * @namespace
     */
    var hall = {};

    hall.CGlobalSetting = (function() {

        /**
         * Properties of a CGlobalSetting.
         * @memberof hall
         * @interface ICGlobalSetting
         * @property {string} key CGlobalSetting key
         * @property {string} val CGlobalSetting val
         */

        /**
         * Constructs a new CGlobalSetting.
         * @memberof hall
         * @classdesc Represents a CGlobalSetting.
         * @implements ICGlobalSetting
         * @constructor
         * @param {hall.ICGlobalSetting=} [properties] Properties to set
         */
        function CGlobalSetting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CGlobalSetting key.
         * @member {string} key
         * @memberof hall.CGlobalSetting
         * @instance
         */
        CGlobalSetting.prototype.key = "";

        /**
         * CGlobalSetting val.
         * @member {string} val
         * @memberof hall.CGlobalSetting
         * @instance
         */
        CGlobalSetting.prototype.val = "";

        /**
         * Creates a new CGlobalSetting instance using the specified properties.
         * @function create
         * @memberof hall.CGlobalSetting
         * @static
         * @param {hall.ICGlobalSetting=} [properties] Properties to set
         * @returns {hall.CGlobalSetting} CGlobalSetting instance
         */
        CGlobalSetting.create = function create(properties) {
            return new CGlobalSetting(properties);
        };

        /**
         * Encodes the specified CGlobalSetting message. Does not implicitly {@link hall.CGlobalSetting.verify|verify} messages.
         * @function encode
         * @memberof hall.CGlobalSetting
         * @static
         * @param {hall.ICGlobalSetting} message CGlobalSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGlobalSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.val);
            return writer;
        };

        /**
         * Encodes the specified CGlobalSetting message, length delimited. Does not implicitly {@link hall.CGlobalSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.CGlobalSetting
         * @static
         * @param {hall.ICGlobalSetting} message CGlobalSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGlobalSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CGlobalSetting message from the specified reader or buffer.
         * @function decode
         * @memberof hall.CGlobalSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.CGlobalSetting} CGlobalSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGlobalSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.CGlobalSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.val = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("key"))
                throw $util.ProtocolError("missing required 'key'", { instance: message });
            if (!message.hasOwnProperty("val"))
                throw $util.ProtocolError("missing required 'val'", { instance: message });
            return message;
        };

        /**
         * Decodes a CGlobalSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.CGlobalSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.CGlobalSetting} CGlobalSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGlobalSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CGlobalSetting message.
         * @function verify
         * @memberof hall.CGlobalSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGlobalSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.key))
                return "key: string expected";
            if (!$util.isString(message.val))
                return "val: string expected";
            return null;
        };

        return CGlobalSetting;
    })();

    hall.CJoinDesk = (function() {

        /**
         * Properties of a CJoinDesk.
         * @memberof hall
         * @interface ICJoinDesk
         * @property {common.IDeskUniq} uniq CJoinDesk uniq
         */

        /**
         * Constructs a new CJoinDesk.
         * @memberof hall
         * @classdesc Represents a CJoinDesk.
         * @implements ICJoinDesk
         * @constructor
         * @param {hall.ICJoinDesk=} [properties] Properties to set
         */
        function CJoinDesk(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CJoinDesk uniq.
         * @member {common.IDeskUniq} uniq
         * @memberof hall.CJoinDesk
         * @instance
         */
        CJoinDesk.prototype.uniq = null;

        /**
         * Creates a new CJoinDesk instance using the specified properties.
         * @function create
         * @memberof hall.CJoinDesk
         * @static
         * @param {hall.ICJoinDesk=} [properties] Properties to set
         * @returns {hall.CJoinDesk} CJoinDesk instance
         */
        CJoinDesk.create = function create(properties) {
            return new CJoinDesk(properties);
        };

        /**
         * Encodes the specified CJoinDesk message. Does not implicitly {@link hall.CJoinDesk.verify|verify} messages.
         * @function encode
         * @memberof hall.CJoinDesk
         * @static
         * @param {hall.ICJoinDesk} message CJoinDesk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CJoinDesk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.common.DeskUniq.encode(message.uniq, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CJoinDesk message, length delimited. Does not implicitly {@link hall.CJoinDesk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.CJoinDesk
         * @static
         * @param {hall.ICJoinDesk} message CJoinDesk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CJoinDesk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CJoinDesk message from the specified reader or buffer.
         * @function decode
         * @memberof hall.CJoinDesk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.CJoinDesk} CJoinDesk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CJoinDesk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.CJoinDesk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uniq = $root.common.DeskUniq.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uniq"))
                throw $util.ProtocolError("missing required 'uniq'", { instance: message });
            return message;
        };

        /**
         * Decodes a CJoinDesk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.CJoinDesk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.CJoinDesk} CJoinDesk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CJoinDesk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CJoinDesk message.
         * @function verify
         * @memberof hall.CJoinDesk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CJoinDesk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.common.DeskUniq.verify(message.uniq);
                if (error)
                    return "uniq." + error;
            }
            return null;
        };

        return CJoinDesk;
    })();

    hall.COffline = (function() {

        /**
         * Properties of a COffline.
         * @memberof hall
         * @interface ICOffline
         * @property {boolean} offline COffline offline
         */

        /**
         * Constructs a new COffline.
         * @memberof hall
         * @classdesc Represents a COffline.
         * @implements ICOffline
         * @constructor
         * @param {hall.ICOffline=} [properties] Properties to set
         */
        function COffline(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * COffline offline.
         * @member {boolean} offline
         * @memberof hall.COffline
         * @instance
         */
        COffline.prototype.offline = false;

        /**
         * Creates a new COffline instance using the specified properties.
         * @function create
         * @memberof hall.COffline
         * @static
         * @param {hall.ICOffline=} [properties] Properties to set
         * @returns {hall.COffline} COffline instance
         */
        COffline.create = function create(properties) {
            return new COffline(properties);
        };

        /**
         * Encodes the specified COffline message. Does not implicitly {@link hall.COffline.verify|verify} messages.
         * @function encode
         * @memberof hall.COffline
         * @static
         * @param {hall.ICOffline} message COffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        COffline.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.offline);
            return writer;
        };

        /**
         * Encodes the specified COffline message, length delimited. Does not implicitly {@link hall.COffline.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.COffline
         * @static
         * @param {hall.ICOffline} message COffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        COffline.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a COffline message from the specified reader or buffer.
         * @function decode
         * @memberof hall.COffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.COffline} COffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        COffline.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.COffline();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.offline = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("offline"))
                throw $util.ProtocolError("missing required 'offline'", { instance: message });
            return message;
        };

        /**
         * Decodes a COffline message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.COffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.COffline} COffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        COffline.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a COffline message.
         * @function verify
         * @memberof hall.COffline
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        COffline.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.offline !== "boolean")
                return "offline: boolean expected";
            return null;
        };

        return COffline;
    })();

    hall.CQuitDesk = (function() {

        /**
         * Properties of a CQuitDesk.
         * @memberof hall
         * @interface ICQuitDesk
         */

        /**
         * Constructs a new CQuitDesk.
         * @memberof hall
         * @classdesc Represents a CQuitDesk.
         * @implements ICQuitDesk
         * @constructor
         * @param {hall.ICQuitDesk=} [properties] Properties to set
         */
        function CQuitDesk(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CQuitDesk instance using the specified properties.
         * @function create
         * @memberof hall.CQuitDesk
         * @static
         * @param {hall.ICQuitDesk=} [properties] Properties to set
         * @returns {hall.CQuitDesk} CQuitDesk instance
         */
        CQuitDesk.create = function create(properties) {
            return new CQuitDesk(properties);
        };

        /**
         * Encodes the specified CQuitDesk message. Does not implicitly {@link hall.CQuitDesk.verify|verify} messages.
         * @function encode
         * @memberof hall.CQuitDesk
         * @static
         * @param {hall.ICQuitDesk} message CQuitDesk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CQuitDesk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CQuitDesk message, length delimited. Does not implicitly {@link hall.CQuitDesk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.CQuitDesk
         * @static
         * @param {hall.ICQuitDesk} message CQuitDesk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CQuitDesk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CQuitDesk message from the specified reader or buffer.
         * @function decode
         * @memberof hall.CQuitDesk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.CQuitDesk} CQuitDesk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CQuitDesk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.CQuitDesk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CQuitDesk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.CQuitDesk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.CQuitDesk} CQuitDesk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CQuitDesk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CQuitDesk message.
         * @function verify
         * @memberof hall.CQuitDesk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CQuitDesk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return CQuitDesk;
    })();

    hall.CRuleDialects = (function() {

        /**
         * Properties of a CRuleDialects.
         * @memberof hall
         * @interface ICRuleDialects
         * @property {common.GameRule} rule CRuleDialects rule
         */

        /**
         * Constructs a new CRuleDialects.
         * @memberof hall
         * @classdesc Represents a CRuleDialects.
         * @implements ICRuleDialects
         * @constructor
         * @param {hall.ICRuleDialects=} [properties] Properties to set
         */
        function CRuleDialects(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CRuleDialects rule.
         * @member {common.GameRule} rule
         * @memberof hall.CRuleDialects
         * @instance
         */
        CRuleDialects.prototype.rule = 99001;

        /**
         * Creates a new CRuleDialects instance using the specified properties.
         * @function create
         * @memberof hall.CRuleDialects
         * @static
         * @param {hall.ICRuleDialects=} [properties] Properties to set
         * @returns {hall.CRuleDialects} CRuleDialects instance
         */
        CRuleDialects.create = function create(properties) {
            return new CRuleDialects(properties);
        };

        /**
         * Encodes the specified CRuleDialects message. Does not implicitly {@link hall.CRuleDialects.verify|verify} messages.
         * @function encode
         * @memberof hall.CRuleDialects
         * @static
         * @param {hall.ICRuleDialects} message CRuleDialects message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRuleDialects.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rule);
            return writer;
        };

        /**
         * Encodes the specified CRuleDialects message, length delimited. Does not implicitly {@link hall.CRuleDialects.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.CRuleDialects
         * @static
         * @param {hall.ICRuleDialects} message CRuleDialects message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRuleDialects.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CRuleDialects message from the specified reader or buffer.
         * @function decode
         * @memberof hall.CRuleDialects
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.CRuleDialects} CRuleDialects
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRuleDialects.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.CRuleDialects();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rule = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("rule"))
                throw $util.ProtocolError("missing required 'rule'", { instance: message });
            return message;
        };

        /**
         * Decodes a CRuleDialects message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.CRuleDialects
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.CRuleDialects} CRuleDialects
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRuleDialects.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CRuleDialects message.
         * @function verify
         * @memberof hall.CRuleDialects
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRuleDialects.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.rule) {
            default:
                return "rule: enum value expected";
            case 99001:
            case 99002:
            case 99003:
            case 99004:
            case 99005:
            case 99006:
            case 99007:
            case 99008:
            case 99009:
            case 61001:
            case 61002:
            case 61003:
            case 61004:
            case 61005:
            case 61006:
            case 61007:
            case 61008:
            case 34001:
            case 34002:
            case 34003:
            case 34004:
            case 34005:
            case 34006:
            case 34007:
            case 34008:
                break;
            }
            return null;
        };

        return CRuleDialects;
    })();

    hall.SDeskInfo = (function() {

        /**
         * Properties of a SDeskInfo.
         * @memberof hall
         * @interface ISDeskInfo
         * @property {common.IDeskInfo} desk SDeskInfo desk
         */

        /**
         * Constructs a new SDeskInfo.
         * @memberof hall
         * @classdesc Represents a SDeskInfo.
         * @implements ISDeskInfo
         * @constructor
         * @param {hall.ISDeskInfo=} [properties] Properties to set
         */
        function SDeskInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SDeskInfo desk.
         * @member {common.IDeskInfo} desk
         * @memberof hall.SDeskInfo
         * @instance
         */
        SDeskInfo.prototype.desk = null;

        /**
         * Creates a new SDeskInfo instance using the specified properties.
         * @function create
         * @memberof hall.SDeskInfo
         * @static
         * @param {hall.ISDeskInfo=} [properties] Properties to set
         * @returns {hall.SDeskInfo} SDeskInfo instance
         */
        SDeskInfo.create = function create(properties) {
            return new SDeskInfo(properties);
        };

        /**
         * Encodes the specified SDeskInfo message. Does not implicitly {@link hall.SDeskInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.SDeskInfo
         * @static
         * @param {hall.ISDeskInfo} message SDeskInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SDeskInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.common.DeskInfo.encode(message.desk, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SDeskInfo message, length delimited. Does not implicitly {@link hall.SDeskInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SDeskInfo
         * @static
         * @param {hall.ISDeskInfo} message SDeskInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SDeskInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SDeskInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SDeskInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SDeskInfo} SDeskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SDeskInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SDeskInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.desk = $root.common.DeskInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("desk"))
                throw $util.ProtocolError("missing required 'desk'", { instance: message });
            return message;
        };

        /**
         * Decodes a SDeskInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SDeskInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SDeskInfo} SDeskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SDeskInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SDeskInfo message.
         * @function verify
         * @memberof hall.SDeskInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SDeskInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.common.DeskInfo.verify(message.desk);
                if (error)
                    return "desk." + error;
            }
            return null;
        };

        return SDeskInfo;
    })();

    hall.SGlobalSetting = (function() {

        /**
         * Properties of a SGlobalSetting.
         * @memberof hall
         * @interface ISGlobalSetting
         * @property {common.IGlobalSetting} setting SGlobalSetting setting
         */

        /**
         * Constructs a new SGlobalSetting.
         * @memberof hall
         * @classdesc Represents a SGlobalSetting.
         * @implements ISGlobalSetting
         * @constructor
         * @param {hall.ISGlobalSetting=} [properties] Properties to set
         */
        function SGlobalSetting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SGlobalSetting setting.
         * @member {common.IGlobalSetting} setting
         * @memberof hall.SGlobalSetting
         * @instance
         */
        SGlobalSetting.prototype.setting = null;

        /**
         * Creates a new SGlobalSetting instance using the specified properties.
         * @function create
         * @memberof hall.SGlobalSetting
         * @static
         * @param {hall.ISGlobalSetting=} [properties] Properties to set
         * @returns {hall.SGlobalSetting} SGlobalSetting instance
         */
        SGlobalSetting.create = function create(properties) {
            return new SGlobalSetting(properties);
        };

        /**
         * Encodes the specified SGlobalSetting message. Does not implicitly {@link hall.SGlobalSetting.verify|verify} messages.
         * @function encode
         * @memberof hall.SGlobalSetting
         * @static
         * @param {hall.ISGlobalSetting} message SGlobalSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGlobalSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.common.GlobalSetting.encode(message.setting, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SGlobalSetting message, length delimited. Does not implicitly {@link hall.SGlobalSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SGlobalSetting
         * @static
         * @param {hall.ISGlobalSetting} message SGlobalSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SGlobalSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SGlobalSetting message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SGlobalSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SGlobalSetting} SGlobalSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGlobalSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SGlobalSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.setting = $root.common.GlobalSetting.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("setting"))
                throw $util.ProtocolError("missing required 'setting'", { instance: message });
            return message;
        };

        /**
         * Decodes a SGlobalSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SGlobalSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SGlobalSetting} SGlobalSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SGlobalSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SGlobalSetting message.
         * @function verify
         * @memberof hall.SGlobalSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SGlobalSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.common.GlobalSetting.verify(message.setting);
                if (error)
                    return "setting." + error;
            }
            return null;
        };

        return SGlobalSetting;
    })();

    hall.SJoinDesk = (function() {

        /**
         * Properties of a SJoinDesk.
         * @memberof hall
         * @interface ISJoinDesk
         * @property {common.IDeskUniq} uniq SJoinDesk uniq
         */

        /**
         * Constructs a new SJoinDesk.
         * @memberof hall
         * @classdesc Represents a SJoinDesk.
         * @implements ISJoinDesk
         * @constructor
         * @param {hall.ISJoinDesk=} [properties] Properties to set
         */
        function SJoinDesk(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SJoinDesk uniq.
         * @member {common.IDeskUniq} uniq
         * @memberof hall.SJoinDesk
         * @instance
         */
        SJoinDesk.prototype.uniq = null;

        /**
         * Creates a new SJoinDesk instance using the specified properties.
         * @function create
         * @memberof hall.SJoinDesk
         * @static
         * @param {hall.ISJoinDesk=} [properties] Properties to set
         * @returns {hall.SJoinDesk} SJoinDesk instance
         */
        SJoinDesk.create = function create(properties) {
            return new SJoinDesk(properties);
        };

        /**
         * Encodes the specified SJoinDesk message. Does not implicitly {@link hall.SJoinDesk.verify|verify} messages.
         * @function encode
         * @memberof hall.SJoinDesk
         * @static
         * @param {hall.ISJoinDesk} message SJoinDesk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SJoinDesk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.common.DeskUniq.encode(message.uniq, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SJoinDesk message, length delimited. Does not implicitly {@link hall.SJoinDesk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SJoinDesk
         * @static
         * @param {hall.ISJoinDesk} message SJoinDesk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SJoinDesk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SJoinDesk message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SJoinDesk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SJoinDesk} SJoinDesk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SJoinDesk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SJoinDesk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uniq = $root.common.DeskUniq.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uniq"))
                throw $util.ProtocolError("missing required 'uniq'", { instance: message });
            return message;
        };

        /**
         * Decodes a SJoinDesk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SJoinDesk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SJoinDesk} SJoinDesk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SJoinDesk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SJoinDesk message.
         * @function verify
         * @memberof hall.SJoinDesk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SJoinDesk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.common.DeskUniq.verify(message.uniq);
                if (error)
                    return "uniq." + error;
            }
            return null;
        };

        return SJoinDesk;
    })();

    hall.SOffline = (function() {

        /**
         * Properties of a SOffline.
         * @memberof hall
         * @interface ISOffline
         * @property {common.IDeskUniq} uniq SOffline uniq
         * @property {number} uid SOffline uid
         * @property {boolean} offline SOffline offline
         */

        /**
         * Constructs a new SOffline.
         * @memberof hall
         * @classdesc Represents a SOffline.
         * @implements ISOffline
         * @constructor
         * @param {hall.ISOffline=} [properties] Properties to set
         */
        function SOffline(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SOffline uniq.
         * @member {common.IDeskUniq} uniq
         * @memberof hall.SOffline
         * @instance
         */
        SOffline.prototype.uniq = null;

        /**
         * SOffline uid.
         * @member {number} uid
         * @memberof hall.SOffline
         * @instance
         */
        SOffline.prototype.uid = 0;

        /**
         * SOffline offline.
         * @member {boolean} offline
         * @memberof hall.SOffline
         * @instance
         */
        SOffline.prototype.offline = false;

        /**
         * Creates a new SOffline instance using the specified properties.
         * @function create
         * @memberof hall.SOffline
         * @static
         * @param {hall.ISOffline=} [properties] Properties to set
         * @returns {hall.SOffline} SOffline instance
         */
        SOffline.create = function create(properties) {
            return new SOffline(properties);
        };

        /**
         * Encodes the specified SOffline message. Does not implicitly {@link hall.SOffline.verify|verify} messages.
         * @function encode
         * @memberof hall.SOffline
         * @static
         * @param {hall.ISOffline} message SOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SOffline.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.common.DeskUniq.encode(message.uniq, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.offline);
            return writer;
        };

        /**
         * Encodes the specified SOffline message, length delimited. Does not implicitly {@link hall.SOffline.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SOffline
         * @static
         * @param {hall.ISOffline} message SOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SOffline.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SOffline message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SOffline} SOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SOffline.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SOffline();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uniq = $root.common.DeskUniq.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.uid = reader.int32();
                    break;
                case 3:
                    message.offline = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uniq"))
                throw $util.ProtocolError("missing required 'uniq'", { instance: message });
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            if (!message.hasOwnProperty("offline"))
                throw $util.ProtocolError("missing required 'offline'", { instance: message });
            return message;
        };

        /**
         * Decodes a SOffline message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SOffline} SOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SOffline.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SOffline message.
         * @function verify
         * @memberof hall.SOffline
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SOffline.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.common.DeskUniq.verify(message.uniq);
                if (error)
                    return "uniq." + error;
            }
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            if (typeof message.offline !== "boolean")
                return "offline: boolean expected";
            return null;
        };

        return SOffline;
    })();

    hall.SPlayerJoin = (function() {

        /**
         * Properties of a SPlayerJoin.
         * @memberof hall
         * @interface ISPlayerJoin
         * @property {common.IPlayerInfo} player SPlayerJoin player
         * @property {common.IDeskUniq} uniq SPlayerJoin uniq
         */

        /**
         * Constructs a new SPlayerJoin.
         * @memberof hall
         * @classdesc Represents a SPlayerJoin.
         * @implements ISPlayerJoin
         * @constructor
         * @param {hall.ISPlayerJoin=} [properties] Properties to set
         */
        function SPlayerJoin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SPlayerJoin player.
         * @member {common.IPlayerInfo} player
         * @memberof hall.SPlayerJoin
         * @instance
         */
        SPlayerJoin.prototype.player = null;

        /**
         * SPlayerJoin uniq.
         * @member {common.IDeskUniq} uniq
         * @memberof hall.SPlayerJoin
         * @instance
         */
        SPlayerJoin.prototype.uniq = null;

        /**
         * Creates a new SPlayerJoin instance using the specified properties.
         * @function create
         * @memberof hall.SPlayerJoin
         * @static
         * @param {hall.ISPlayerJoin=} [properties] Properties to set
         * @returns {hall.SPlayerJoin} SPlayerJoin instance
         */
        SPlayerJoin.create = function create(properties) {
            return new SPlayerJoin(properties);
        };

        /**
         * Encodes the specified SPlayerJoin message. Does not implicitly {@link hall.SPlayerJoin.verify|verify} messages.
         * @function encode
         * @memberof hall.SPlayerJoin
         * @static
         * @param {hall.ISPlayerJoin} message SPlayerJoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SPlayerJoin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.common.PlayerInfo.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.common.DeskUniq.encode(message.uniq, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SPlayerJoin message, length delimited. Does not implicitly {@link hall.SPlayerJoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SPlayerJoin
         * @static
         * @param {hall.ISPlayerJoin} message SPlayerJoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SPlayerJoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SPlayerJoin message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SPlayerJoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SPlayerJoin} SPlayerJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SPlayerJoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SPlayerJoin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.common.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.uniq = $root.common.DeskUniq.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("player"))
                throw $util.ProtocolError("missing required 'player'", { instance: message });
            if (!message.hasOwnProperty("uniq"))
                throw $util.ProtocolError("missing required 'uniq'", { instance: message });
            return message;
        };

        /**
         * Decodes a SPlayerJoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SPlayerJoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SPlayerJoin} SPlayerJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SPlayerJoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SPlayerJoin message.
         * @function verify
         * @memberof hall.SPlayerJoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SPlayerJoin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.common.PlayerInfo.verify(message.player);
                if (error)
                    return "player." + error;
            }
            {
                var error = $root.common.DeskUniq.verify(message.uniq);
                if (error)
                    return "uniq." + error;
            }
            return null;
        };

        return SPlayerJoin;
    })();

    hall.SPlayerQuit = (function() {

        /**
         * Properties of a SPlayerQuit.
         * @memberof hall
         * @interface ISPlayerQuit
         * @property {number} uid SPlayerQuit uid
         * @property {common.IDeskUniq} uniq SPlayerQuit uniq
         */

        /**
         * Constructs a new SPlayerQuit.
         * @memberof hall
         * @classdesc Represents a SPlayerQuit.
         * @implements ISPlayerQuit
         * @constructor
         * @param {hall.ISPlayerQuit=} [properties] Properties to set
         */
        function SPlayerQuit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SPlayerQuit uid.
         * @member {number} uid
         * @memberof hall.SPlayerQuit
         * @instance
         */
        SPlayerQuit.prototype.uid = 0;

        /**
         * SPlayerQuit uniq.
         * @member {common.IDeskUniq} uniq
         * @memberof hall.SPlayerQuit
         * @instance
         */
        SPlayerQuit.prototype.uniq = null;

        /**
         * Creates a new SPlayerQuit instance using the specified properties.
         * @function create
         * @memberof hall.SPlayerQuit
         * @static
         * @param {hall.ISPlayerQuit=} [properties] Properties to set
         * @returns {hall.SPlayerQuit} SPlayerQuit instance
         */
        SPlayerQuit.create = function create(properties) {
            return new SPlayerQuit(properties);
        };

        /**
         * Encodes the specified SPlayerQuit message. Does not implicitly {@link hall.SPlayerQuit.verify|verify} messages.
         * @function encode
         * @memberof hall.SPlayerQuit
         * @static
         * @param {hall.ISPlayerQuit} message SPlayerQuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SPlayerQuit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            $root.common.DeskUniq.encode(message.uniq, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SPlayerQuit message, length delimited. Does not implicitly {@link hall.SPlayerQuit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SPlayerQuit
         * @static
         * @param {hall.ISPlayerQuit} message SPlayerQuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SPlayerQuit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SPlayerQuit message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SPlayerQuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SPlayerQuit} SPlayerQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SPlayerQuit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SPlayerQuit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.uniq = $root.common.DeskUniq.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            if (!message.hasOwnProperty("uniq"))
                throw $util.ProtocolError("missing required 'uniq'", { instance: message });
            return message;
        };

        /**
         * Decodes a SPlayerQuit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SPlayerQuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SPlayerQuit} SPlayerQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SPlayerQuit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SPlayerQuit message.
         * @function verify
         * @memberof hall.SPlayerQuit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SPlayerQuit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            {
                var error = $root.common.DeskUniq.verify(message.uniq);
                if (error)
                    return "uniq." + error;
            }
            return null;
        };

        return SPlayerQuit;
    })();

    hall.SQuitDesk = (function() {

        /**
         * Properties of a SQuitDesk.
         * @memberof hall
         * @interface ISQuitDesk
         */

        /**
         * Constructs a new SQuitDesk.
         * @memberof hall
         * @classdesc Represents a SQuitDesk.
         * @implements ISQuitDesk
         * @constructor
         * @param {hall.ISQuitDesk=} [properties] Properties to set
         */
        function SQuitDesk(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SQuitDesk instance using the specified properties.
         * @function create
         * @memberof hall.SQuitDesk
         * @static
         * @param {hall.ISQuitDesk=} [properties] Properties to set
         * @returns {hall.SQuitDesk} SQuitDesk instance
         */
        SQuitDesk.create = function create(properties) {
            return new SQuitDesk(properties);
        };

        /**
         * Encodes the specified SQuitDesk message. Does not implicitly {@link hall.SQuitDesk.verify|verify} messages.
         * @function encode
         * @memberof hall.SQuitDesk
         * @static
         * @param {hall.ISQuitDesk} message SQuitDesk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SQuitDesk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SQuitDesk message, length delimited. Does not implicitly {@link hall.SQuitDesk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SQuitDesk
         * @static
         * @param {hall.ISQuitDesk} message SQuitDesk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SQuitDesk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SQuitDesk message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SQuitDesk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SQuitDesk} SQuitDesk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SQuitDesk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SQuitDesk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SQuitDesk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SQuitDesk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SQuitDesk} SQuitDesk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SQuitDesk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SQuitDesk message.
         * @function verify
         * @memberof hall.SQuitDesk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SQuitDesk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return SQuitDesk;
    })();

    hall.SRuleDialects = (function() {

        /**
         * Properties of a SRuleDialects.
         * @memberof hall
         * @interface ISRuleDialects
         * @property {common.GameRule} rule SRuleDialects rule
         * @property {Array.<common.Dialect>|null} [dialects] SRuleDialects dialects
         */

        /**
         * Constructs a new SRuleDialects.
         * @memberof hall
         * @classdesc Represents a SRuleDialects.
         * @implements ISRuleDialects
         * @constructor
         * @param {hall.ISRuleDialects=} [properties] Properties to set
         */
        function SRuleDialects(properties) {
            this.dialects = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SRuleDialects rule.
         * @member {common.GameRule} rule
         * @memberof hall.SRuleDialects
         * @instance
         */
        SRuleDialects.prototype.rule = 99001;

        /**
         * SRuleDialects dialects.
         * @member {Array.<common.Dialect>} dialects
         * @memberof hall.SRuleDialects
         * @instance
         */
        SRuleDialects.prototype.dialects = $util.emptyArray;

        /**
         * Creates a new SRuleDialects instance using the specified properties.
         * @function create
         * @memberof hall.SRuleDialects
         * @static
         * @param {hall.ISRuleDialects=} [properties] Properties to set
         * @returns {hall.SRuleDialects} SRuleDialects instance
         */
        SRuleDialects.create = function create(properties) {
            return new SRuleDialects(properties);
        };

        /**
         * Encodes the specified SRuleDialects message. Does not implicitly {@link hall.SRuleDialects.verify|verify} messages.
         * @function encode
         * @memberof hall.SRuleDialects
         * @static
         * @param {hall.ISRuleDialects} message SRuleDialects message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SRuleDialects.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rule);
            if (message.dialects != null && message.dialects.length)
                for (var i = 0; i < message.dialects.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dialects[i]);
            return writer;
        };

        /**
         * Encodes the specified SRuleDialects message, length delimited. Does not implicitly {@link hall.SRuleDialects.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SRuleDialects
         * @static
         * @param {hall.ISRuleDialects} message SRuleDialects message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SRuleDialects.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SRuleDialects message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SRuleDialects
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SRuleDialects} SRuleDialects
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SRuleDialects.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SRuleDialects();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rule = reader.int32();
                    break;
                case 2:
                    if (!(message.dialects && message.dialects.length))
                        message.dialects = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dialects.push(reader.int32());
                    } else
                        message.dialects.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("rule"))
                throw $util.ProtocolError("missing required 'rule'", { instance: message });
            return message;
        };

        /**
         * Decodes a SRuleDialects message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SRuleDialects
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SRuleDialects} SRuleDialects
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SRuleDialects.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SRuleDialects message.
         * @function verify
         * @memberof hall.SRuleDialects
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SRuleDialects.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.rule) {
            default:
                return "rule: enum value expected";
            case 99001:
            case 99002:
            case 99003:
            case 99004:
            case 99005:
            case 99006:
            case 99007:
            case 99008:
            case 99009:
            case 61001:
            case 61002:
            case 61003:
            case 61004:
            case 61005:
            case 61006:
            case 61007:
            case 61008:
            case 34001:
            case 34002:
            case 34003:
            case 34004:
            case 34005:
            case 34006:
            case 34007:
            case 34008:
                break;
            }
            if (message.dialects != null && message.hasOwnProperty("dialects")) {
                if (!Array.isArray(message.dialects))
                    return "dialects: array expected";
                for (var i = 0; i < message.dialects.length; ++i)
                    switch (message.dialects[i]) {
                    default:
                        return "dialects: enum value[] expected";
                    case 0:
                    case 350001:
                    case 610001:
                    case 610002:
                        break;
                    }
            }
            return null;
        };

        return SRuleDialects;
    })();

    return hall;
})();

$root.account = (function() {

    /**
     * Namespace account.
     * @exports account
     * @namespace
     */
    var account = {};

    account.CLogin = (function() {

        /**
         * Properties of a CLogin.
         * @memberof account
         * @interface ICLogin
         * @property {number} uid CLogin uid
         * @property {string} token CLogin token
         */

        /**
         * Constructs a new CLogin.
         * @memberof account
         * @classdesc Represents a CLogin.
         * @implements ICLogin
         * @constructor
         * @param {account.ICLogin=} [properties] Properties to set
         */
        function CLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CLogin uid.
         * @member {number} uid
         * @memberof account.CLogin
         * @instance
         */
        CLogin.prototype.uid = 0;

        /**
         * CLogin token.
         * @member {string} token
         * @memberof account.CLogin
         * @instance
         */
        CLogin.prototype.token = "";

        /**
         * Creates a new CLogin instance using the specified properties.
         * @function create
         * @memberof account.CLogin
         * @static
         * @param {account.ICLogin=} [properties] Properties to set
         * @returns {account.CLogin} CLogin instance
         */
        CLogin.create = function create(properties) {
            return new CLogin(properties);
        };

        /**
         * Encodes the specified CLogin message. Does not implicitly {@link account.CLogin.verify|verify} messages.
         * @function encode
         * @memberof account.CLogin
         * @static
         * @param {account.ICLogin} message CLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified CLogin message, length delimited. Does not implicitly {@link account.CLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.CLogin
         * @static
         * @param {account.ICLogin} message CLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CLogin message from the specified reader or buffer.
         * @function decode
         * @memberof account.CLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.CLogin} CLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.CLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            if (!message.hasOwnProperty("token"))
                throw $util.ProtocolError("missing required 'token'", { instance: message });
            return message;
        };

        /**
         * Decodes a CLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.CLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.CLogin} CLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CLogin message.
         * @function verify
         * @memberof account.CLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            if (!$util.isString(message.token))
                return "token: string expected";
            return null;
        };

        return CLogin;
    })();

    account.CLogout = (function() {

        /**
         * Properties of a CLogout.
         * @memberof account
         * @interface ICLogout
         * @property {number} reason CLogout reason
         */

        /**
         * Constructs a new CLogout.
         * @memberof account
         * @classdesc Represents a CLogout.
         * @implements ICLogout
         * @constructor
         * @param {account.ICLogout=} [properties] Properties to set
         */
        function CLogout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CLogout reason.
         * @member {number} reason
         * @memberof account.CLogout
         * @instance
         */
        CLogout.prototype.reason = 0;

        /**
         * Creates a new CLogout instance using the specified properties.
         * @function create
         * @memberof account.CLogout
         * @static
         * @param {account.ICLogout=} [properties] Properties to set
         * @returns {account.CLogout} CLogout instance
         */
        CLogout.create = function create(properties) {
            return new CLogout(properties);
        };

        /**
         * Encodes the specified CLogout message. Does not implicitly {@link account.CLogout.verify|verify} messages.
         * @function encode
         * @memberof account.CLogout
         * @static
         * @param {account.ICLogout} message CLogout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLogout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified CLogout message, length delimited. Does not implicitly {@link account.CLogout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.CLogout
         * @static
         * @param {account.ICLogout} message CLogout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLogout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CLogout message from the specified reader or buffer.
         * @function decode
         * @memberof account.CLogout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.CLogout} CLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLogout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.CLogout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("reason"))
                throw $util.ProtocolError("missing required 'reason'", { instance: message });
            return message;
        };

        /**
         * Decodes a CLogout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.CLogout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.CLogout} CLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLogout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CLogout message.
         * @function verify
         * @memberof account.CLogout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CLogout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.reason))
                return "reason: integer expected";
            return null;
        };

        return CLogout;
    })();

    account.SKickOff = (function() {

        /**
         * Properties of a SKickOff.
         * @memberof account
         * @interface ISKickOff
         * @property {account.SKickOff.Reason} code SKickOff code
         */

        /**
         * Constructs a new SKickOff.
         * @memberof account
         * @classdesc Represents a SKickOff.
         * @implements ISKickOff
         * @constructor
         * @param {account.ISKickOff=} [properties] Properties to set
         */
        function SKickOff(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SKickOff code.
         * @member {account.SKickOff.Reason} code
         * @memberof account.SKickOff
         * @instance
         */
        SKickOff.prototype.code = 1;

        /**
         * Creates a new SKickOff instance using the specified properties.
         * @function create
         * @memberof account.SKickOff
         * @static
         * @param {account.ISKickOff=} [properties] Properties to set
         * @returns {account.SKickOff} SKickOff instance
         */
        SKickOff.create = function create(properties) {
            return new SKickOff(properties);
        };

        /**
         * Encodes the specified SKickOff message. Does not implicitly {@link account.SKickOff.verify|verify} messages.
         * @function encode
         * @memberof account.SKickOff
         * @static
         * @param {account.ISKickOff} message SKickOff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SKickOff.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified SKickOff message, length delimited. Does not implicitly {@link account.SKickOff.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.SKickOff
         * @static
         * @param {account.ISKickOff} message SKickOff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SKickOff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SKickOff message from the specified reader or buffer.
         * @function decode
         * @memberof account.SKickOff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.SKickOff} SKickOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SKickOff.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.SKickOff();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a SKickOff message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.SKickOff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.SKickOff} SKickOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SKickOff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SKickOff message.
         * @function verify
         * @memberof account.SKickOff
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SKickOff.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 1:
                break;
            }
            return null;
        };

        /**
         * Reason enum.
         * @name account.SKickOff.Reason
         * @enum {string}
         * @property {number} LOGIN_IN_OTHER_PLACE=1 LOGIN_IN_OTHER_PLACE value
         */
        SKickOff.Reason = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "LOGIN_IN_OTHER_PLACE"] = 1;
            return values;
        })();

        return SKickOff;
    })();

    account.SLogin = (function() {

        /**
         * Properties of a SLogin.
         * @memberof account
         * @interface ISLogin
         * @property {account.SLogin.ReturnCode} returnCode SLogin returnCode
         */

        /**
         * Constructs a new SLogin.
         * @memberof account
         * @classdesc Represents a SLogin.
         * @implements ISLogin
         * @constructor
         * @param {account.ISLogin=} [properties] Properties to set
         */
        function SLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SLogin returnCode.
         * @member {account.SLogin.ReturnCode} returnCode
         * @memberof account.SLogin
         * @instance
         */
        SLogin.prototype.returnCode = 0;

        /**
         * Creates a new SLogin instance using the specified properties.
         * @function create
         * @memberof account.SLogin
         * @static
         * @param {account.ISLogin=} [properties] Properties to set
         * @returns {account.SLogin} SLogin instance
         */
        SLogin.create = function create(properties) {
            return new SLogin(properties);
        };

        /**
         * Encodes the specified SLogin message. Does not implicitly {@link account.SLogin.verify|verify} messages.
         * @function encode
         * @memberof account.SLogin
         * @static
         * @param {account.ISLogin} message SLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.returnCode);
            return writer;
        };

        /**
         * Encodes the specified SLogin message, length delimited. Does not implicitly {@link account.SLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.SLogin
         * @static
         * @param {account.ISLogin} message SLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SLogin message from the specified reader or buffer.
         * @function decode
         * @memberof account.SLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.SLogin} SLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.SLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.returnCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("returnCode"))
                throw $util.ProtocolError("missing required 'returnCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a SLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.SLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.SLogin} SLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SLogin message.
         * @function verify
         * @memberof account.SLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.returnCode) {
            default:
                return "returnCode: enum value expected";
            case 0:
            case 1:
                break;
            }
            return null;
        };

        /**
         * ReturnCode enum.
         * @name account.SLogin.ReturnCode
         * @enum {string}
         * @property {number} SUCCESS=0 SUCCESS value
         * @property {number} TOKEN_ERROR=1 TOKEN_ERROR value
         */
        SLogin.ReturnCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[1] = "TOKEN_ERROR"] = 1;
            return values;
        })();

        return SLogin;
    })();

    account.SLogout = (function() {

        /**
         * Properties of a SLogout.
         * @memberof account
         * @interface ISLogout
         * @property {account.SLogout.ReturnCode} returnCode SLogout returnCode
         */

        /**
         * Constructs a new SLogout.
         * @memberof account
         * @classdesc Represents a SLogout.
         * @implements ISLogout
         * @constructor
         * @param {account.ISLogout=} [properties] Properties to set
         */
        function SLogout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SLogout returnCode.
         * @member {account.SLogout.ReturnCode} returnCode
         * @memberof account.SLogout
         * @instance
         */
        SLogout.prototype.returnCode = 0;

        /**
         * Creates a new SLogout instance using the specified properties.
         * @function create
         * @memberof account.SLogout
         * @static
         * @param {account.ISLogout=} [properties] Properties to set
         * @returns {account.SLogout} SLogout instance
         */
        SLogout.create = function create(properties) {
            return new SLogout(properties);
        };

        /**
         * Encodes the specified SLogout message. Does not implicitly {@link account.SLogout.verify|verify} messages.
         * @function encode
         * @memberof account.SLogout
         * @static
         * @param {account.ISLogout} message SLogout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SLogout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.returnCode);
            return writer;
        };

        /**
         * Encodes the specified SLogout message, length delimited. Does not implicitly {@link account.SLogout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.SLogout
         * @static
         * @param {account.ISLogout} message SLogout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SLogout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SLogout message from the specified reader or buffer.
         * @function decode
         * @memberof account.SLogout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.SLogout} SLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SLogout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.SLogout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.returnCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("returnCode"))
                throw $util.ProtocolError("missing required 'returnCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a SLogout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.SLogout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.SLogout} SLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SLogout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SLogout message.
         * @function verify
         * @memberof account.SLogout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SLogout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.returnCode) {
            default:
                return "returnCode: enum value expected";
            case 0:
            case 1:
                break;
            }
            return null;
        };

        /**
         * ReturnCode enum.
         * @name account.SLogout.ReturnCode
         * @enum {string}
         * @property {number} SUCCESS=0 SUCCESS value
         * @property {number} ALREADY_LOGOUT=1 ALREADY_LOGOUT value
         */
        SLogout.ReturnCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[1] = "ALREADY_LOGOUT"] = 1;
            return values;
        })();

        return SLogout;
    })();

    account.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof account
         * @interface IUserInfo
         * @property {number} uid UserInfo uid
         * @property {string} nkn UserInfo nkn
         * @property {string|null} [head] UserInfo head
         * @property {number|null} [sex] UserInfo sex
         */

        /**
         * Constructs a new UserInfo.
         * @memberof account
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {account.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo uid.
         * @member {number} uid
         * @memberof account.UserInfo
         * @instance
         */
        UserInfo.prototype.uid = 0;

        /**
         * UserInfo nkn.
         * @member {string} nkn
         * @memberof account.UserInfo
         * @instance
         */
        UserInfo.prototype.nkn = "";

        /**
         * UserInfo head.
         * @member {string} head
         * @memberof account.UserInfo
         * @instance
         */
        UserInfo.prototype.head = "";

        /**
         * UserInfo sex.
         * @member {number} sex
         * @memberof account.UserInfo
         * @instance
         */
        UserInfo.prototype.sex = 0;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof account.UserInfo
         * @static
         * @param {account.IUserInfo=} [properties] Properties to set
         * @returns {account.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link account.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof account.UserInfo
         * @static
         * @param {account.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nkn);
            if (message.head != null && message.hasOwnProperty("head"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.head);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sex);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link account.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.UserInfo
         * @static
         * @param {account.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof account.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.nkn = reader.string();
                    break;
                case 3:
                    message.head = reader.string();
                    break;
                case 4:
                    message.sex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uid"))
                throw $util.ProtocolError("missing required 'uid'", { instance: message });
            if (!message.hasOwnProperty("nkn"))
                throw $util.ProtocolError("missing required 'nkn'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof account.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
            if (!$util.isString(message.nkn))
                return "nkn: string expected";
            if (message.head != null && message.hasOwnProperty("head"))
                if (!$util.isString(message.head))
                    return "head: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            return null;
        };

        return UserInfo;
    })();

    return account;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    /**
     * ChairMode enum.
     * @name common.ChairMode
     * @enum {string}
     * @property {number} SEQUENCE=0 SEQUENCE value
     * @property {number} PLAYER=1 PLAYER value
     * @property {number} RANDOM=2 RANDOM value
     */
    common.ChairMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SEQUENCE"] = 0;
        values[valuesById[1] = "PLAYER"] = 1;
        values[valuesById[2] = "RANDOM"] = 2;
        return values;
    })();

    /**
     * ClubOwner enum.
     * @name common.ClubOwner
     * @enum {string}
     * @property {number} PUB=0 PUB value
     * @property {number} MINE=1 MINE value
     * @property {number} OTHER=2 OTHER value
     */
    common.ClubOwner = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PUB"] = 0;
        values[valuesById[1] = "MINE"] = 1;
        values[valuesById[2] = "OTHER"] = 2;
        return values;
    })();

    common.DeskInfo = (function() {

        /**
         * Properties of a DeskInfo.
         * @memberof common
         * @interface IDeskInfo
         * @property {common.IDeskUniq} uniq DeskInfo uniq
         * @property {Array.<common.IPlayerInfo>|null} [players] DeskInfo players
         * @property {common.GameRule|null} [rule] DeskInfo rule
         * @property {common.IGameSetting|null} [setting] DeskInfo setting
         * @property {common.GameStatus|null} [status] DeskInfo status
         * @property {number|null} [bankerId] DeskInfo bankerId
         * @property {number|null} [curSet] DeskInfo curSet
         */

        /**
         * Constructs a new DeskInfo.
         * @memberof common
         * @classdesc Represents a DeskInfo.
         * @implements IDeskInfo
         * @constructor
         * @param {common.IDeskInfo=} [properties] Properties to set
         */
        function DeskInfo(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeskInfo uniq.
         * @member {common.IDeskUniq} uniq
         * @memberof common.DeskInfo
         * @instance
         */
        DeskInfo.prototype.uniq = null;

        /**
         * DeskInfo players.
         * @member {Array.<common.IPlayerInfo>} players
         * @memberof common.DeskInfo
         * @instance
         */
        DeskInfo.prototype.players = $util.emptyArray;

        /**
         * DeskInfo rule.
         * @member {common.GameRule} rule
         * @memberof common.DeskInfo
         * @instance
         */
        DeskInfo.prototype.rule = 99001;

        /**
         * DeskInfo setting.
         * @member {common.IGameSetting|null|undefined} setting
         * @memberof common.DeskInfo
         * @instance
         */
        DeskInfo.prototype.setting = null;

        /**
         * DeskInfo status.
         * @member {common.GameStatus} status
         * @memberof common.DeskInfo
         * @instance
         */
        DeskInfo.prototype.status = 0;

        /**
         * DeskInfo bankerId.
         * @member {number} bankerId
         * @memberof common.DeskInfo
         * @instance
         */
        DeskInfo.prototype.bankerId = 0;

        /**
         * DeskInfo curSet.
         * @member {number} curSet
         * @memberof common.DeskInfo
         * @instance
         */
        DeskInfo.prototype.curSet = 0;

        /**
         * Creates a new DeskInfo instance using the specified properties.
         * @function create
         * @memberof common.DeskInfo
         * @static
         * @param {common.IDeskInfo=} [properties] Properties to set
         * @returns {common.DeskInfo} DeskInfo instance
         */
        DeskInfo.create = function create(properties) {
            return new DeskInfo(properties);
        };

        /**
         * Encodes the specified DeskInfo message. Does not implicitly {@link common.DeskInfo.verify|verify} messages.
         * @function encode
         * @memberof common.DeskInfo
         * @static
         * @param {common.IDeskInfo} message DeskInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeskInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.common.DeskUniq.encode(message.uniq, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.common.PlayerInfo.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.rule != null && message.hasOwnProperty("rule"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rule);
            if (message.setting != null && message.hasOwnProperty("setting"))
                $root.common.GameSetting.encode(message.setting, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            if (message.bankerId != null && message.hasOwnProperty("bankerId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.bankerId);
            if (message.curSet != null && message.hasOwnProperty("curSet"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.curSet);
            return writer;
        };

        /**
         * Encodes the specified DeskInfo message, length delimited. Does not implicitly {@link common.DeskInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.DeskInfo
         * @static
         * @param {common.IDeskInfo} message DeskInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeskInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeskInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.DeskInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.DeskInfo} DeskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeskInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.DeskInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uniq = $root.common.DeskUniq.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.common.PlayerInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.rule = reader.int32();
                    break;
                case 4:
                    message.setting = $root.common.GameSetting.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.bankerId = reader.int32();
                    break;
                case 7:
                    message.curSet = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("uniq"))
                throw $util.ProtocolError("missing required 'uniq'", { instance: message });
            return message;
        };

        /**
         * Decodes a DeskInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.DeskInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.DeskInfo} DeskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeskInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeskInfo message.
         * @function verify
         * @memberof common.DeskInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeskInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.common.DeskUniq.verify(message.uniq);
                if (error)
                    return "uniq." + error;
            }
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.common.PlayerInfo.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.rule != null && message.hasOwnProperty("rule"))
                switch (message.rule) {
                default:
                    return "rule: enum value expected";
                case 99001:
                case 99002:
                case 99003:
                case 99004:
                case 99005:
                case 99006:
                case 99007:
                case 99008:
                case 99009:
                case 61001:
                case 61002:
                case 61003:
                case 61004:
                case 61005:
                case 61006:
                case 61007:
                case 61008:
                case 34001:
                case 34002:
                case 34003:
                case 34004:
                case 34005:
                case 34006:
                case 34007:
                case 34008:
                    break;
                }
            if (message.setting != null && message.hasOwnProperty("setting")) {
                var error = $root.common.GameSetting.verify(message.setting);
                if (error)
                    return "setting." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.bankerId != null && message.hasOwnProperty("bankerId"))
                if (!$util.isInteger(message.bankerId))
                    return "bankerId: integer expected";
            if (message.curSet != null && message.hasOwnProperty("curSet"))
                if (!$util.isInteger(message.curSet))
                    return "curSet: integer expected";
            return null;
        };

        return DeskInfo;
    })();

    common.DeskUniq = (function() {

        /**
         * Properties of a DeskUniq.
         * @memberof common
         * @interface IDeskUniq
         * @property {number|Long} deskId DeskUniq deskId
         * @property {number|null} [clubId] DeskUniq clubId
         */

        /**
         * Constructs a new DeskUniq.
         * @memberof common
         * @classdesc Represents a DeskUniq.
         * @implements IDeskUniq
         * @constructor
         * @param {common.IDeskUniq=} [properties] Properties to set
         */
        function DeskUniq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeskUniq deskId.
         * @member {number|Long} deskId
         * @memberof common.DeskUniq
         * @instance
         */
        DeskUniq.prototype.deskId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DeskUniq clubId.
         * @member {number} clubId
         * @memberof common.DeskUniq
         * @instance
         */
        DeskUniq.prototype.clubId = 0;

        /**
         * Creates a new DeskUniq instance using the specified properties.
         * @function create
         * @memberof common.DeskUniq
         * @static
         * @param {common.IDeskUniq=} [properties] Properties to set
         * @returns {common.DeskUniq} DeskUniq instance
         */
        DeskUniq.create = function create(properties) {
            return new DeskUniq(properties);
        };

        /**
         * Encodes the specified DeskUniq message. Does not implicitly {@link common.DeskUniq.verify|verify} messages.
         * @function encode
         * @memberof common.DeskUniq
         * @static
         * @param {common.IDeskUniq} message DeskUniq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeskUniq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.deskId);
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.clubId);
            return writer;
        };

        /**
         * Encodes the specified DeskUniq message, length delimited. Does not implicitly {@link common.DeskUniq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.DeskUniq
         * @static
         * @param {common.IDeskUniq} message DeskUniq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeskUniq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeskUniq message from the specified reader or buffer.
         * @function decode
         * @memberof common.DeskUniq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.DeskUniq} DeskUniq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeskUniq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.DeskUniq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deskId = reader.int64();
                    break;
                case 2:
                    message.clubId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("deskId"))
                throw $util.ProtocolError("missing required 'deskId'", { instance: message });
            return message;
        };

        /**
         * Decodes a DeskUniq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.DeskUniq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.DeskUniq} DeskUniq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeskUniq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeskUniq message.
         * @function verify
         * @memberof common.DeskUniq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeskUniq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.deskId) && !(message.deskId && $util.isInteger(message.deskId.low) && $util.isInteger(message.deskId.high)))
                return "deskId: integer|Long expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId))
                    return "clubId: integer expected";
            return null;
        };

        return DeskUniq;
    })();

    /**
     * Dialect enum.
     * @name common.Dialect
     * @enum {string}
     * @property {number} PU_TONG=0 PU_TONG value
     * @property {number} XIA_PU=350001 XIA_PU value
     * @property {number} YU_LIN=610001 YU_LIN value
     * @property {number} YAN_AN=610002 YAN_AN value
     */
    common.Dialect = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PU_TONG"] = 0;
        values[valuesById[350001] = "XIA_PU"] = 350001;
        values[valuesById[610001] = "YU_LIN"] = 610001;
        values[valuesById[610002] = "YAN_AN"] = 610002;
        return values;
    })();

    /**
     * GameRule enum.
     * @name common.GameRule
     * @enum {string}
     * @property {number} JIN_HUA=99001 JIN_HUA value
     * @property {number} NIU_NIU=99002 NIU_NIU value
     * @property {number} BI_JI=99003 BI_JI value
     * @property {number} WA_KENG=99004 WA_KENG value
     * @property {number} TUI_DUI_ZI=99005 TUI_DUI_ZI value
     * @property {number} ZHUO_LAO_MA_ZI=99006 ZHUO_LAO_MA_ZI value
     * @property {number} SAN_DAI=99007 SAN_DAI value
     * @property {number} GAN_DENG_YAN=99008 GAN_DENG_YAN value
     * @property {number} DOU_DI_ZHU=99009 DOU_DI_ZHU value
     * @property {number} LIANG=61001 LIANG value
     * @property {number} SXMJ=61002 SXMJ value
     * @property {number} HUA_SHUI=61003 HUA_SHUI value
     * @property {number} WEI_NAN=61004 WEI_NAN value
     * @property {number} BAO_JI=61005 BAO_JI value
     * @property {number} ONE_FIVE_NINE=61006 ONE_FIVE_NINE value
     * @property {number} GUO_ZI=61007 GUO_ZI value
     * @property {number} HAN_ZHONG=61008 HAN_ZHONG value
     * @property {number} WU_HU=34001 WU_HU value
     * @property {number} WU_WEI=34002 WU_WEI value
     * @property {number} SHE_XIAN=34003 SHE_XIAN value
     * @property {number} HE_XIAN=34004 HE_XIAN value
     * @property {number} FU_YANG=34005 FU_YANG value
     * @property {number} MING_GUANG=34006 MING_GUANG value
     * @property {number} LAI_AN_TUI_DAO_HU=34007 LAI_AN_TUI_DAO_HU value
     * @property {number} LAI_AN_LAO_SAN_FAN=34008 LAI_AN_LAO_SAN_FAN value
     */
    common.GameRule = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[99001] = "JIN_HUA"] = 99001;
        values[valuesById[99002] = "NIU_NIU"] = 99002;
        values[valuesById[99003] = "BI_JI"] = 99003;
        values[valuesById[99004] = "WA_KENG"] = 99004;
        values[valuesById[99005] = "TUI_DUI_ZI"] = 99005;
        values[valuesById[99006] = "ZHUO_LAO_MA_ZI"] = 99006;
        values[valuesById[99007] = "SAN_DAI"] = 99007;
        values[valuesById[99008] = "GAN_DENG_YAN"] = 99008;
        values[valuesById[99009] = "DOU_DI_ZHU"] = 99009;
        values[valuesById[61001] = "LIANG"] = 61001;
        values[valuesById[61002] = "SXMJ"] = 61002;
        values[valuesById[61003] = "HUA_SHUI"] = 61003;
        values[valuesById[61004] = "WEI_NAN"] = 61004;
        values[valuesById[61005] = "BAO_JI"] = 61005;
        values[valuesById[61006] = "ONE_FIVE_NINE"] = 61006;
        values[valuesById[61007] = "GUO_ZI"] = 61007;
        values[valuesById[61008] = "HAN_ZHONG"] = 61008;
        values[valuesById[34001] = "WU_HU"] = 34001;
        values[valuesById[34002] = "WU_WEI"] = 34002;
        values[valuesById[34003] = "SHE_XIAN"] = 34003;
        values[valuesById[34004] = "HE_XIAN"] = 34004;
        values[valuesById[34005] = "FU_YANG"] = 34005;
        values[valuesById[34006] = "MING_GUANG"] = 34006;
        values[valuesById[34007] = "LAI_AN_TUI_DAO_HU"] = 34007;
        values[valuesById[34008] = "LAI_AN_LAO_SAN_FAN"] = 34008;
        return values;
    })();

    common.GameSetting = (function() {

        /**
         * Properties of a GameSetting.
         * @memberof common
         * @interface IGameSetting
         * @property {string} json GameSetting json
         * @property {number|null} [totalSet] GameSetting totalSet
         * @property {number|null} [totalQuan] GameSetting totalQuan
         * @property {number|null} [totalDi] GameSetting totalDi
         * @property {number|null} [totalPlayer] GameSetting totalPlayer
         * @property {number|null} [chairMode] GameSetting chairMode
         * @property {boolean|null} [noJiaFanQiDui] GameSetting noJiaFanQiDui
         * @property {boolean|null} [noJiaFanQingYiSe] GameSetting noJiaFanQingYiSe
         * @property {boolean|null} [noJiaFanGangShangHua] GameSetting noJiaFanGangShangHua
         * @property {boolean|null} [noJiaFanHaiDiLao] GameSetting noJiaFanHaiDiLao
         * @property {boolean|null} [noJiaFanQiangGangHu] GameSetting noJiaFanQiangGangHu
         * @property {boolean|null} [paoZi] GameSetting paoZi
         * @property {number|null} [operDelaySeconds] GameSetting operDelaySeconds
         */

        /**
         * Constructs a new GameSetting.
         * @memberof common
         * @classdesc Represents a GameSetting.
         * @implements IGameSetting
         * @constructor
         * @param {common.IGameSetting=} [properties] Properties to set
         */
        function GameSetting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameSetting json.
         * @member {string} json
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.json = "";

        /**
         * GameSetting totalSet.
         * @member {number} totalSet
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.totalSet = 0;

        /**
         * GameSetting totalQuan.
         * @member {number} totalQuan
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.totalQuan = 0;

        /**
         * GameSetting totalDi.
         * @member {number} totalDi
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.totalDi = 0;

        /**
         * GameSetting totalPlayer.
         * @member {number} totalPlayer
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.totalPlayer = 0;

        /**
         * GameSetting chairMode.
         * @member {number} chairMode
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.chairMode = 0;

        /**
         * GameSetting noJiaFanQiDui.
         * @member {boolean} noJiaFanQiDui
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.noJiaFanQiDui = false;

        /**
         * GameSetting noJiaFanQingYiSe.
         * @member {boolean} noJiaFanQingYiSe
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.noJiaFanQingYiSe = false;

        /**
         * GameSetting noJiaFanGangShangHua.
         * @member {boolean} noJiaFanGangShangHua
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.noJiaFanGangShangHua = false;

        /**
         * GameSetting noJiaFanHaiDiLao.
         * @member {boolean} noJiaFanHaiDiLao
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.noJiaFanHaiDiLao = false;

        /**
         * GameSetting noJiaFanQiangGangHu.
         * @member {boolean} noJiaFanQiangGangHu
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.noJiaFanQiangGangHu = false;

        /**
         * GameSetting paoZi.
         * @member {boolean} paoZi
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.paoZi = false;

        /**
         * GameSetting operDelaySeconds.
         * @member {number} operDelaySeconds
         * @memberof common.GameSetting
         * @instance
         */
        GameSetting.prototype.operDelaySeconds = 0;

        /**
         * Creates a new GameSetting instance using the specified properties.
         * @function create
         * @memberof common.GameSetting
         * @static
         * @param {common.IGameSetting=} [properties] Properties to set
         * @returns {common.GameSetting} GameSetting instance
         */
        GameSetting.create = function create(properties) {
            return new GameSetting(properties);
        };

        /**
         * Encodes the specified GameSetting message. Does not implicitly {@link common.GameSetting.verify|verify} messages.
         * @function encode
         * @memberof common.GameSetting
         * @static
         * @param {common.IGameSetting} message GameSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.json);
            if (message.totalSet != null && message.hasOwnProperty("totalSet"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalSet);
            if (message.totalQuan != null && message.hasOwnProperty("totalQuan"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalQuan);
            if (message.totalDi != null && message.hasOwnProperty("totalDi"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalDi);
            if (message.totalPlayer != null && message.hasOwnProperty("totalPlayer"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.totalPlayer);
            if (message.chairMode != null && message.hasOwnProperty("chairMode"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.chairMode);
            if (message.noJiaFanQiDui != null && message.hasOwnProperty("noJiaFanQiDui"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.noJiaFanQiDui);
            if (message.noJiaFanQingYiSe != null && message.hasOwnProperty("noJiaFanQingYiSe"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.noJiaFanQingYiSe);
            if (message.noJiaFanGangShangHua != null && message.hasOwnProperty("noJiaFanGangShangHua"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.noJiaFanGangShangHua);
            if (message.noJiaFanHaiDiLao != null && message.hasOwnProperty("noJiaFanHaiDiLao"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.noJiaFanHaiDiLao);
            if (message.noJiaFanQiangGangHu != null && message.hasOwnProperty("noJiaFanQiangGangHu"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.noJiaFanQiangGangHu);
            if (message.paoZi != null && message.hasOwnProperty("paoZi"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.paoZi);
            if (message.operDelaySeconds != null && message.hasOwnProperty("operDelaySeconds"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.operDelaySeconds);
            return writer;
        };

        /**
         * Encodes the specified GameSetting message, length delimited. Does not implicitly {@link common.GameSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GameSetting
         * @static
         * @param {common.IGameSetting} message GameSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameSetting message from the specified reader or buffer.
         * @function decode
         * @memberof common.GameSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GameSetting} GameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GameSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.json = reader.string();
                    break;
                case 2:
                    message.totalSet = reader.int32();
                    break;
                case 3:
                    message.totalQuan = reader.int32();
                    break;
                case 4:
                    message.totalDi = reader.int32();
                    break;
                case 5:
                    message.totalPlayer = reader.int32();
                    break;
                case 6:
                    message.chairMode = reader.int32();
                    break;
                case 7:
                    message.noJiaFanQiDui = reader.bool();
                    break;
                case 8:
                    message.noJiaFanQingYiSe = reader.bool();
                    break;
                case 9:
                    message.noJiaFanGangShangHua = reader.bool();
                    break;
                case 10:
                    message.noJiaFanHaiDiLao = reader.bool();
                    break;
                case 11:
                    message.noJiaFanQiangGangHu = reader.bool();
                    break;
                case 12:
                    message.paoZi = reader.bool();
                    break;
                case 13:
                    message.operDelaySeconds = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("json"))
                throw $util.ProtocolError("missing required 'json'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GameSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GameSetting} GameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameSetting message.
         * @function verify
         * @memberof common.GameSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.json))
                return "json: string expected";
            if (message.totalSet != null && message.hasOwnProperty("totalSet"))
                if (!$util.isInteger(message.totalSet))
                    return "totalSet: integer expected";
            if (message.totalQuan != null && message.hasOwnProperty("totalQuan"))
                if (!$util.isInteger(message.totalQuan))
                    return "totalQuan: integer expected";
            if (message.totalDi != null && message.hasOwnProperty("totalDi"))
                if (!$util.isInteger(message.totalDi))
                    return "totalDi: integer expected";
            if (message.totalPlayer != null && message.hasOwnProperty("totalPlayer"))
                if (!$util.isInteger(message.totalPlayer))
                    return "totalPlayer: integer expected";
            if (message.chairMode != null && message.hasOwnProperty("chairMode"))
                if (!$util.isInteger(message.chairMode))
                    return "chairMode: integer expected";
            if (message.noJiaFanQiDui != null && message.hasOwnProperty("noJiaFanQiDui"))
                if (typeof message.noJiaFanQiDui !== "boolean")
                    return "noJiaFanQiDui: boolean expected";
            if (message.noJiaFanQingYiSe != null && message.hasOwnProperty("noJiaFanQingYiSe"))
                if (typeof message.noJiaFanQingYiSe !== "boolean")
                    return "noJiaFanQingYiSe: boolean expected";
            if (message.noJiaFanGangShangHua != null && message.hasOwnProperty("noJiaFanGangShangHua"))
                if (typeof message.noJiaFanGangShangHua !== "boolean")
                    return "noJiaFanGangShangHua: boolean expected";
            if (message.noJiaFanHaiDiLao != null && message.hasOwnProperty("noJiaFanHaiDiLao"))
                if (typeof message.noJiaFanHaiDiLao !== "boolean")
                    return "noJiaFanHaiDiLao: boolean expected";
            if (message.noJiaFanQiangGangHu != null && message.hasOwnProperty("noJiaFanQiangGangHu"))
                if (typeof message.noJiaFanQiangGangHu !== "boolean")
                    return "noJiaFanQiangGangHu: boolean expected";
            if (message.paoZi != null && message.hasOwnProperty("paoZi"))
                if (typeof message.paoZi !== "boolean")
                    return "paoZi: boolean expected";
            if (message.operDelaySeconds != null && message.hasOwnProperty("operDelaySeconds"))
                if (!$util.isInteger(message.operDelaySeconds))
                    return "operDelaySeconds: integer expected";
            return null;
        };

        return GameSetting;
    })();

    /**
     * GameStatus enum.
     * @name common.GameStatus
     * @enum {string}
     * @property {number} WAITING=0 WAITING value
     * @property {number} FULL=1 FULL value
     * @property {number} STARTING=2 STARTING value
     * @property {number} SET_ENDING=3 SET_ENDING value
     * @property {number} ENDING=4 ENDING value
     */
    common.GameStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WAITING"] = 0;
        values[valuesById[1] = "FULL"] = 1;
        values[valuesById[2] = "STARTING"] = 2;
        values[valuesById[3] = "SET_ENDING"] = 3;
        values[valuesById[4] = "ENDING"] = 4;
        return values;
    })();

    common.GlobalSetting = (function() {

        /**
         * Properties of a GlobalSetting.
         * @memberof common
         * @interface IGlobalSetting
         * @property {string} json GlobalSetting json
         * @property {number|null} [volumeBg] GlobalSetting volumeBg
         * @property {number|null} [volumePlay] GlobalSetting volumePlay
         * @property {common.Dialect|null} [dialect] GlobalSetting dialect
         * @property {common.MahjongTheme|null} [mahjongTheme] GlobalSetting mahjongTheme
         */

        /**
         * Constructs a new GlobalSetting.
         * @memberof common
         * @classdesc Represents a GlobalSetting.
         * @implements IGlobalSetting
         * @constructor
         * @param {common.IGlobalSetting=} [properties] Properties to set
         */
        function GlobalSetting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GlobalSetting json.
         * @member {string} json
         * @memberof common.GlobalSetting
         * @instance
         */
        GlobalSetting.prototype.json = "";

        /**
         * GlobalSetting volumeBg.
         * @member {number} volumeBg
         * @memberof common.GlobalSetting
         * @instance
         */
        GlobalSetting.prototype.volumeBg = 0;

        /**
         * GlobalSetting volumePlay.
         * @member {number} volumePlay
         * @memberof common.GlobalSetting
         * @instance
         */
        GlobalSetting.prototype.volumePlay = 0;

        /**
         * GlobalSetting dialect.
         * @member {common.Dialect} dialect
         * @memberof common.GlobalSetting
         * @instance
         */
        GlobalSetting.prototype.dialect = 0;

        /**
         * GlobalSetting mahjongTheme.
         * @member {common.MahjongTheme} mahjongTheme
         * @memberof common.GlobalSetting
         * @instance
         */
        GlobalSetting.prototype.mahjongTheme = 1;

        /**
         * Creates a new GlobalSetting instance using the specified properties.
         * @function create
         * @memberof common.GlobalSetting
         * @static
         * @param {common.IGlobalSetting=} [properties] Properties to set
         * @returns {common.GlobalSetting} GlobalSetting instance
         */
        GlobalSetting.create = function create(properties) {
            return new GlobalSetting(properties);
        };

        /**
         * Encodes the specified GlobalSetting message. Does not implicitly {@link common.GlobalSetting.verify|verify} messages.
         * @function encode
         * @memberof common.GlobalSetting
         * @static
         * @param {common.IGlobalSetting} message GlobalSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.json);
            if (message.volumeBg != null && message.hasOwnProperty("volumeBg"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.volumeBg);
            if (message.volumePlay != null && message.hasOwnProperty("volumePlay"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.volumePlay);
            if (message.dialect != null && message.hasOwnProperty("dialect"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dialect);
            if (message.mahjongTheme != null && message.hasOwnProperty("mahjongTheme"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.mahjongTheme);
            return writer;
        };

        /**
         * Encodes the specified GlobalSetting message, length delimited. Does not implicitly {@link common.GlobalSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GlobalSetting
         * @static
         * @param {common.IGlobalSetting} message GlobalSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GlobalSetting message from the specified reader or buffer.
         * @function decode
         * @memberof common.GlobalSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GlobalSetting} GlobalSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GlobalSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.json = reader.string();
                    break;
                case 2:
                    message.volumeBg = reader.int32();
                    break;
                case 3:
                    message.volumePlay = reader.int32();
                    break;
                case 4:
                    message.dialect = reader.int32();
                    break;
                case 5:
                    message.mahjongTheme = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("json"))
                throw $util.ProtocolError("missing required 'json'", { instance: message });
            return message;
        };

        /**
         * Decodes a GlobalSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GlobalSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GlobalSetting} GlobalSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GlobalSetting message.
         * @function verify
         * @memberof common.GlobalSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GlobalSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.json))
                return "json: string expected";
            if (message.volumeBg != null && message.hasOwnProperty("volumeBg"))
                if (!$util.isInteger(message.volumeBg))
                    return "volumeBg: integer expected";
            if (message.volumePlay != null && message.hasOwnProperty("volumePlay"))
                if (!$util.isInteger(message.volumePlay))
                    return "volumePlay: integer expected";
            if (message.dialect != null && message.hasOwnProperty("dialect"))
                switch (message.dialect) {
                default:
                    return "dialect: enum value expected";
                case 0:
                case 350001:
                case 610001:
                case 610002:
                    break;
                }
            if (message.mahjongTheme != null && message.hasOwnProperty("mahjongTheme"))
                switch (message.mahjongTheme) {
                default:
                    return "mahjongTheme: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        return GlobalSetting;
    })();

    /**
     * MahjongTheme enum.
     * @name common.MahjongTheme
     * @enum {string}
     * @property {number} GREEN=1 GREEN value
     * @property {number} YELLOW=2 YELLOW value
     * @property {number} BLUE=3 BLUE value
     */
    common.MahjongTheme = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "GREEN"] = 1;
        values[valuesById[2] = "YELLOW"] = 2;
        values[valuesById[3] = "BLUE"] = 3;
        return values;
    })();

    common.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof common
         * @interface IPlayerInfo
         * @property {account.IUserInfo} user PlayerInfo user
         * @property {number|null} [seat] PlayerInfo seat
         * @property {boolean|null} [prepared] PlayerInfo prepared
         * @property {boolean|null} [offline] PlayerInfo offline
         * @property {Array.<number>|null} [points] PlayerInfo points
         * @property {number|null} [bet] PlayerInfo bet
         * @property {string|null} [ip] PlayerInfo ip
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof common
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {common.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            this.points = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo user.
         * @member {account.IUserInfo} user
         * @memberof common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.user = null;

        /**
         * PlayerInfo seat.
         * @member {number} seat
         * @memberof common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.seat = 0;

        /**
         * PlayerInfo prepared.
         * @member {boolean} prepared
         * @memberof common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.prepared = false;

        /**
         * PlayerInfo offline.
         * @member {boolean} offline
         * @memberof common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.offline = false;

        /**
         * PlayerInfo points.
         * @member {Array.<number>} points
         * @memberof common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.points = $util.emptyArray;

        /**
         * PlayerInfo bet.
         * @member {number} bet
         * @memberof common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.bet = 0;

        /**
         * PlayerInfo ip.
         * @member {string} ip
         * @memberof common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.ip = "";

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof common.PlayerInfo
         * @static
         * @param {common.IPlayerInfo=} [properties] Properties to set
         * @returns {common.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link common.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof common.PlayerInfo
         * @static
         * @param {common.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.account.UserInfo.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.seat != null && message.hasOwnProperty("seat"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seat);
            if (message.prepared != null && message.hasOwnProperty("prepared"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.prepared);
            if (message.offline != null && message.hasOwnProperty("offline"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.offline);
            if (message.points != null && message.points.length)
                for (var i = 0; i < message.points.length; ++i)
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.points[i]);
            if (message.bet != null && message.hasOwnProperty("bet"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.bet);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ip);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link common.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.PlayerInfo
         * @static
         * @param {common.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.account.UserInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.seat = reader.int32();
                    break;
                case 3:
                    message.prepared = reader.bool();
                    break;
                case 4:
                    message.offline = reader.bool();
                    break;
                case 5:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.points.push(reader.int32());
                    } else
                        message.points.push(reader.int32());
                    break;
                case 6:
                    message.bet = reader.int32();
                    break;
                case 7:
                    message.ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("user"))
                throw $util.ProtocolError("missing required 'user'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof common.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.account.UserInfo.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.seat != null && message.hasOwnProperty("seat"))
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            if (message.prepared != null && message.hasOwnProperty("prepared"))
                if (typeof message.prepared !== "boolean")
                    return "prepared: boolean expected";
            if (message.offline != null && message.hasOwnProperty("offline"))
                if (typeof message.offline !== "boolean")
                    return "offline: boolean expected";
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (var i = 0; i < message.points.length; ++i)
                    if (!$util.isInteger(message.points[i]))
                        return "points: integer[] expected";
            }
            if (message.bet != null && message.hasOwnProperty("bet"))
                if (!$util.isInteger(message.bet))
                    return "bet: integer expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            return null;
        };

        return PlayerInfo;
    })();

    return common;
})();