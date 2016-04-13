webpackJsonp([1],{

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(315);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CommentList = __webpack_require__(316);
	
	var _CommentList2 = _interopRequireDefault(_CommentList);
	
	var _CommentForm = __webpack_require__(324);
	
	var _CommentForm2 = _interopRequireDefault(_CommentForm);
	
	var _reactIntl = __webpack_require__(227);
	
	var _Article = __webpack_require__(303);
	
	var _Article2 = _interopRequireDefault(_Article);
	
	var _Header = __webpack_require__(261);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Section = __webpack_require__(307);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Comments = function (_React$Component) {
	    _inherits(Comments, _React$Component);
	
	    function Comments() {
	        _classCallCheck(this, Comments);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Comments).apply(this, arguments));
	    }
	
	    _createClass(Comments, [{
	        key: "render",
	
	        /*
	            loadCommentsFromServer() {
	        
	                let that = this
	        
	                return fetch(this.url)
	                .then(function(response) {
	        
	                    return response.json()
	                })
	                .then(function(data) {
	        
	                    that.setState({data: data})
	                })
	                .catch(function(e) {
	        
	                    console.error(that.props.url,e)
	                });
	            }
	        
	            componentDidMount() {
	        
	                this.loadCommentsFromServer()
	            }
	        */
	        value: function render() {
	            return _react2.default.createElement(
	                _Article2.default,
	                { pad: "medium" },
	                _react2.default.createElement(
	                    _Header2.default,
	                    null,
	                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: "Comments" })
	                ),
	                _react2.default.createElement(
	                    _Section2.default,
	                    null,
	                    _react2.default.createElement(_CommentList2.default, null),
	                    _react2.default.createElement(_CommentForm2.default, null)
	                )
	            );
	        }
	    }]);
	
	    return Comments;
	}(_react2.default.Component);
	
	Comments.contextTypes = {
	    router: _react2.default.PropTypes.object
	};
	
	module.exports = Comments;
	
	exports.default = Comments;

/***/ },

/***/ 315:
/***/ function(module, exports) {

	'use strict';
	
	(function (self) {
	  'use strict';
	
	  if (self.fetch) {
	    return;
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }
	
	  function Headers(headers) {
	    this.map = {};
	
	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }
	
	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };
	
	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };
	
	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };
	
	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };
	
	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };
	
	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };
	
	  Headers.prototype.forEach = function (callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function (name) {
	      this.map[name].forEach(function (value) {
	        callback.call(thisArg, value, name, this);
	      }, this);
	    }, this);
	  };
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }
	
	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };
	
	  function Body() {
	    this.bodyUsed = false;
	
	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (!body) {
	        this._bodyText = '';
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	          throw new Error('unsupported BodyInit type');
	        }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        }
	      }
	    };
	
	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };
	
	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };
	
	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : Promise.resolve(this._bodyText);
	      };
	    }
	
	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }
	
	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };
	
	    return this;
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }
	
	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = input;
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }
	
	  Request.prototype.clone = function () {
	    return new Request(this);
	  };
	
	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }
	
	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }
	
	  Body.call(Request.prototype);
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }
	
	    this.type = 'default';
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }
	
	  Body.call(Response.prototype);
	
	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };
	
	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };
	
	  var redirectStatuses = [301, 302, 303, 307, 308];
	
	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }
	
	    return new Response(null, { status: status, headers: { location: url } });
	  };
	
	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;
	
	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request;
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input;
	      } else {
	        request = new Request(input, init);
	      }
	
	      var xhr = new XMLHttpRequest();
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }
	
	        return;
	      }
	
	      xhr.onload = function () {
	        var status = xhr.status === 1223 ? 204 : xhr.status;
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'));
	          return;
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };
	
	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };
	
	      xhr.open(request.method, request.url, true);
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }
	
	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(266);
	
	var _CommentList = __webpack_require__(317);
	
	var _CommentList2 = _interopRequireDefault(_CommentList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    comments: state.comments
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(_CommentList2.default);

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Comment = __webpack_require__(318);
	
	var _Comment2 = _interopRequireDefault(_Comment);
	
	var _Tiles = __webpack_require__(320);
	
	var _Tiles2 = _interopRequireDefault(_Tiles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommentList = function (_React$Component) {
	  _inherits(CommentList, _React$Component);
	
	  function CommentList() {
	    _classCallCheck(this, CommentList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentList).apply(this, arguments));
	  }
	
	  _createClass(CommentList, [{
	    key: "render",
	    value: function render() {
	
	      var commentNodes = this.props.comments.map(function (comment) {
	
	        return _react2.default.createElement(_Comment2.default, { author: comment.author, key: comment.id, text: comment.text });
	      });
	
	      return _react2.default.createElement(
	        _Tiles2.default,
	        { pad: "large" },
	        commentNodes
	      );
	    }
	  }]);
	
	  return CommentList;
	}(_react2.default.Component);
	
	exports.default = CommentList;

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Tile = __webpack_require__(319);
	
	var _Tile2 = _interopRequireDefault(_Tile);
	
	var _Header = __webpack_require__(261);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommentBox = function (_React$Component) {
	  _inherits(CommentBox, _React$Component);
	
	  function CommentBox() {
	    _classCallCheck(this, CommentBox);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).apply(this, arguments));
	  }
	
	  _createClass(CommentBox, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Tile2.default,
	        { wide: true, colorIndex: "light-2", align: "start" },
	        _react2.default.createElement(
	          _Header2.default,
	          null,
	          this.props.author
	        ),
	        this.props.text
	      );
	    }
	  }]);
	
	  return CommentBox;
	}(_react2.default.Component);
	
	exports.default = CommentBox;

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Props = __webpack_require__(255);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	var _Box = __webpack_require__(257);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = "tile";
	
	var Tile = function (_Component) {
	  _inherits(Tile, _Component);
	
	  function Tile() {
	    _classCallCheck(this, Tile);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tile).apply(this, arguments));
	  }
	
	  _createClass(Tile, [{
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      var boxProps = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
	      if (this.props.status) {
	        classes.push(CLASS_ROOT + "--status-" + this.props.status.toLowerCase());
	      }
	      if (this.props.wide) {
	        classes.push(CLASS_ROOT + "--wide");
	      }
	      if (this.props.onClick) {
	        classes.push(CLASS_ROOT + "--selectable");
	      }
	      if (this.props.selected) {
	        classes.push(CLASS_ROOT + "--selected");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	
	      return _react2.default.createElement(_Box2.default, _extends({}, boxProps, { className: classes.join(' ') }), this.props.children);
	    }
	  }]);
	
	  return Tile;
	}(_react.Component);
	
	exports.default = Tile;
	
	Tile.propTypes = _extends({
	  selected: _react.PropTypes.bool,
	  wide: _react.PropTypes.bool
	}, _Box2.default.propTypes);
	
	Tile.defaultProps = {
	  pad: 'none',
	  direction: 'column',
	  align: 'center'
	};
	module.exports = exports['default'];

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(162);
	
	var _Props = __webpack_require__(255);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	var _Box = __webpack_require__(257);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _Button = __webpack_require__(251);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Spinning = __webpack_require__(321);
	
	var _Spinning2 = _interopRequireDefault(_Spinning);
	
	var _Scroll = __webpack_require__(304);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	var _InfiniteScroll = __webpack_require__(322);
	
	var _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);
	
	var _Selection = __webpack_require__(323);
	
	var _Selection2 = _interopRequireDefault(_Selection);
	
	var _LinkPrevious = __webpack_require__(305);
	
	var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);
	
	var _LinkNext = __webpack_require__(263);
	
	var _LinkNext2 = _interopRequireDefault(_LinkNext);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = "tiles";
	var SELECTED_CLASS = "tile--selected";
	
	var Tiles = function (_Component) {
	  _inherits(Tiles, _Component);
	
	  function Tiles(props) {
	    _classCallCheck(this, Tiles);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tiles).call(this, props));
	
	    _this._onLeft = _this._onLeft.bind(_this);
	    _this._onRight = _this._onRight.bind(_this);
	    _this._onScrollHorizontal = _this._onScrollHorizontal.bind(_this);
	    _this._onWheel = _this._onWheel.bind(_this);
	    _this._onResize = _this._onResize.bind(_this);
	    _this._layout = _this._layout.bind(_this);
	    _this._onClick = _this._onClick.bind(_this);
	
	    _this.state = {
	      overflow: false,
	      selected: _Selection2.default.normalizeIndexes(props.selected)
	    };
	    return _this;
	  }
	
	  _createClass(Tiles, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._setSelection();
	      if (this.props.onMore) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.refs.more, this.props.onMore);
	      }
	      if ('row' === this.props.direction) {
	        window.addEventListener('resize', this._onResize);
	        document.addEventListener('wheel', this._onWheel);
	        this._trackHorizontalScroll();
	        // give browser a chance to stabilize
	        setTimeout(this._layout, 10);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.selected) {
	        this.setState({ selected: _Selection2.default.normalizeIndexes(nextProps.selected) });
	      }
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	        this._scroll = null;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (JSON.stringify(this.state.selected) !== JSON.stringify(prevState.selected)) {
	        this._setSelection();
	      }
	      if (this.props.onMore && !this._scroll) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.refs.more, this.props.onMore);
	      }
	      if ('row' === this.props.direction) {
	        this._trackHorizontalScroll();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	      }
	      if ('row' === this.props.direction) {
	        window.removeEventListener('resize', this._onResize);
	        document.removeEventListener('wheel', this._onWheel);
	        if (this._tracking) {
	          var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	          tiles.removeEventListener('scroll', this._onScrollHorizontal);
	        }
	      }
	    }
	  }, {
	    key: '_onLeft',
	    value: function _onLeft() {
	      var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	      _Scroll2.default.scrollBy(tiles, 'scrollLeft', -tiles.offsetWidth);
	    }
	  }, {
	    key: '_onRight',
	    value: function _onRight() {
	      var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	      _Scroll2.default.scrollBy(tiles, 'scrollLeft', tiles.offsetWidth);
	    }
	  }, {
	    key: '_onScrollHorizontal',
	    value: function _onScrollHorizontal() {
	      // debounce
	      clearTimeout(this._scrollTimer);
	      this._scrollTimer = setTimeout(this._layout, 50);
	    }
	  }, {
	    key: '_onWheel',
	    value: function _onWheel(event) {
	      if (Math.abs(event.deltaX) > 100) {
	        clearInterval(this._scrollTimer);
	      } else if (event.deltaX > 5) {
	        this._onRight();
	      } else if (event.deltaX < -5) {
	        this._onLeft();
	      }
	    }
	  }, {
	    key: '_layout',
	    value: function _layout() {
	      if ('row' === this.props.direction) {
	        // determine if we have more tiles than room to fit
	        var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	        // 20 is to allow some fuzziness as scrollbars come and go
	        this.setState({
	          overflow: tiles.scrollWidth > tiles.offsetWidth + 20,
	          overflowStart: tiles.scrollLeft <= 20,
	          overflowEnd: tiles.scrollLeft >= tiles.scrollWidth - tiles.offsetWidth
	        });
	
	        // mark any tiles that might be clipped
	        var rect = tiles.getBoundingClientRect();
	        var children = tiles.querySelectorAll('.tile');
	        for (var i = 0; i < children.length; i += 1) {
	          var child = children[i];
	          var childRect = child.getBoundingClientRect();
	          // 12 accounts for padding
	          if (childRect.left + 12 < rect.left || childRect.right - 12 > rect.right) {
	            child.classList.add('tile--eclipsed');
	          } else {
	            child.classList.remove('tile--eclipsed');
	          }
	        }
	      }
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      // debounce
	      clearTimeout(this._resizeTimer);
	      this._resizeTimer = setTimeout(this._layout, 50);
	    }
	  }, {
	    key: '_trackHorizontalScroll',
	    value: function _trackHorizontalScroll() {
	      if (this.state.overflow && !this._tracking) {
	        var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	        tiles.addEventListener('scroll', this._onScrollHorizontal);
	        this._tracking = true;
	      }
	    }
	  }, {
	    key: '_setSelection',
	    value: function _setSelection() {
	      _Selection2.default.setClassFromIndexes({
	        containerElement: (0, _reactDom.findDOMNode)(this.refs.tiles),
	        childSelector: '.tile',
	        selectedClass: SELECTED_CLASS,
	        selectedIndexes: this.state.selected
	      });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(event) {
	      var selected = _Selection2.default.onClick(event, {
	        containerElement: (0, _reactDom.findDOMNode)(this.refs.tiles),
	        childSelector: '.tile',
	        selectedClass: SELECTED_CLASS,
	        multiSelect: 'multiple' === this.props.selectable,
	        priorSelectedIndexes: this.state.selected
	      });
	      // only set the selected state and classes if the caller isn't managing it.
	      if (!this.props.selected) {
	        this.setState({ selected: selected }, this._setSelection);
	      }
	
	      if (this.props.onSelect) {
	        // notify caller that the selection has changed
	        if (selected.length === 1) {
	          selected = selected[0];
	        }
	        this.props.onSelect(selected);
	      }
	    }
	
	    // children should be an array of Tile
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.fill) {
	        classes.push(CLASS_ROOT + "--fill");
	      }
	      if (this.props.flush) {
	        classes.push(CLASS_ROOT + "--flush");
	      }
	      if (this.props.size) {
	        classes.push(CLASS_ROOT + "--" + this.props.size);
	      }
	      if (this.props.selectable) {
	        classes.push(CLASS_ROOT + "--selectable");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	
	      var other = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
	
	      var more = null;
	      if (this.props.onMore) {
	        classes.push(CLASS_ROOT + "--moreable");
	        more = _react2.default.createElement('div', { ref: 'more', className: CLASS_ROOT + "__more" }, _react2.default.createElement(_Spinning2.default, null));
	      }
	
	      var onClickHandler = void 0;
	      if (this.props.selectable) {
	        onClickHandler = this._onClick;
	      }
	
	      var contents = _react2.default.createElement(_Box2.default, _extends({ ref: 'tiles' }, other, {
	        wrap: this.props.direction ? false : true,
	        direction: this.props.direction ? this.props.direction : 'row',
	        className: classes.join(' '),
	        onClick: onClickHandler,
	        focusable: false }), this.props.children, more);
	
	      if (this.state.overflow) {
	        classes.push(CLASS_ROOT + "--overflowed");
	        if (!this.state.overflowStart) {
	          var left = _react2.default.createElement(_Button2.default, { className: CLASS_ROOT + "__left", icon: _react2.default.createElement(_LinkPrevious2.default, null),
	            onClick: this._onLeft });
	        }
	        if (!this.state.overflowEnd) {
	          var right = _react2.default.createElement(_Button2.default, { className: CLASS_ROOT + "__right", icon: _react2.default.createElement(_LinkNext2.default, null),
	            onClick: this._onRight });
	        }
	
	        contents = _react2.default.createElement('div', { className: CLASS_ROOT + "__container" }, left, contents, right);
	      }
	
	      return contents;
	    }
	  }]);
	
	  return Tiles;
	}(_react.Component);
	
	exports.default = Tiles;
	
	Tiles.propTypes = _extends({
	  fill: _react.PropTypes.bool,
	  flush: _react.PropTypes.bool,
	  onMore: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  selectable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['multiple'])]),
	  selected: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
	}, _Box2.default.propTypes);
	
	Tiles.defaultProps = {
	  flush: true,
	  justify: 'start'
	};
	module.exports = exports['default'];

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(266);
	
	var _actions = __webpack_require__(325);
	
	var _Form = __webpack_require__(326);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormField = __webpack_require__(327);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	var _Button = __webpack_require__(251);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _reactIntl = __webpack_require__(227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommentForm = function CommentForm(_ref) {
	  var dispatch = _ref.dispatch;
	
	
	  var inputAuthor = void 0;
	  var inputText = void 0;
	
	  function onSubmit(e) {
	
	    e.preventDefault();
	
	    var author = inputAuthor.value.trim();
	    var text = inputText.value.trim();
	
	    if (!text || !author) return;
	
	    dispatch((0, _actions.addComment)(author, text));
	
	    inputAuthor.value = "";
	    inputText.value = "";
	  }
	
	  return _react2.default.createElement(
	    _Form2.default,
	    { pad: { vertical: "large", horizontal: "none" }, onSubmit: onSubmit },
	    _react2.default.createElement(
	      'fieldset',
	      null,
	      _react2.default.createElement(
	        'legend',
	        null,
	        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'Leave a comment' })
	      ),
	      _react2.default.createElement(
	        _FormField2.default,
	        { label: 'Name', htmlFor: 'inputAuthor' },
	        _react2.default.createElement('input', { id: 'inputAuthor', type: 'text', ref: function ref(node) {
	            inputAuthor = node;
	          } })
	      ),
	      _react2.default.createElement(
	        _FormField2.default,
	        { label: 'Say something...', htmlFor: 'inputText' },
	        _react2.default.createElement('textarea', { id: 'inputText', ref: function ref(node) {
	            inputText = node;
	          } })
	      )
	    ),
	    _react2.default.createElement(
	      _reactIntl.FormattedMessage,
	      { id: 'Submit' },
	      function (label) {
	        return _react2.default.createElement(_Button2.default, { label: label, type: 'submit', onClick: function onClick() {
	            return 1;
	          } });
	      }
	    )
	  );
	};
	
	exports.default = (0, _reactRedux.connect)()(CommentForm);

/***/ },

/***/ 325:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var nextCommentId = 3;
	
	var addComment = exports.addComment = function addComment(author, text) {
	  return {
	    type: 'ADD_COMMENT',
	    author: author,
	    text: text,
	    id: nextCommentId++
	  };
	};

/***/ },

/***/ 328:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = [{ "id": 1, "author": "Yannick Bochatay", "text": "Bonjour tout le monde" }, { "id": 2, "author": "Yannick", "text": "Bonjour à nouveau" }];
	
	var comments = exports.comments = function comments() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];
	
	
	  switch (action.type) {
	
	    case 'ADD_COMMENT':
	
	      return [].concat(_toConsumableArray(state), [{
	        id: action.id,
	        author: action.author,
	        text: action.text
	      }]);
	
	    default:
	      return state;
	  }
	};
	
	module.exports = comments;

/***/ }

});
//# sourceMappingURL=1.bundle.js.map