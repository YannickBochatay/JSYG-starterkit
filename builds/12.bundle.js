webpackJsonp([12],{

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(449);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CommentList = __webpack_require__(450);
	
	var _CommentList2 = _interopRequireDefault(_CommentList);
	
	var _CommentForm = __webpack_require__(458);
	
	var _CommentForm2 = _interopRequireDefault(_CommentForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommentBox = function (_React$Component) {
	    _inherits(CommentBox, _React$Component);
	
	    function CommentBox(props) {
	        _classCallCheck(this, CommentBox);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).call(this, props));
	
	        _this.state = { data: [] };
	
	        _this.url = "/src/routes/Comments/data.json";
	
	        _this.routerWillLeave = _this.routerWillLeave.bind(_this);
	        return _this;
	    }
	
	    _createClass(CommentBox, [{
	        key: "loadCommentsFromServer",
	        value: function loadCommentsFromServer() {
	
	            var that = this;
	
	            return fetch(this.url).then(function (response) {
	
	                return response.json();
	            }).then(function (data) {
	
	                that.setState({ data: data });
	            }).catch(function (e) {
	
	                console.error(that.props.url, e);
	            });
	        }
	    }, {
	        key: "handleCommentSubmit",
	        value: function handleCommentSubmit(comment) {
	
	            var that = this;
	            var comments = this.state.data;
	
	            comment.id = Date.now();
	
	            this.setState({ data: comments.concat([comment]) });
	
	            return fetch(this.url, {
	                method: "post",
	                body: JSON.stringify(comment)
	            }).catch(function (e) {
	                console.error(that.props.url, e);
	            });
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	
	            if (this.context.router) this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	
	            this.loadCommentsFromServer();
	
	            if (this.props.pollInterval) {
	
	                window.setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
	            }
	        }
	    }, {
	        key: "routerWillLeave",
	        value: function routerWillLeave() {
	
	            return true;
	
	            //return 'Your work is not saved! Are you sure you want to leave?'
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "commentBox" },
	                _react2.default.createElement(
	                    "h1",
	                    null,
	                    "Comments"
	                ),
	                _react2.default.createElement(_CommentList2.default, { data: this.state.data }),
	                _react2.default.createElement(_CommentForm2.default, { onCommentSubmit: this.handleCommentSubmit.bind(this) })
	            );
	        }
	    }]);
	
	    return CommentBox;
	}(_react2.default.Component);
	
	CommentBox.contextTypes = {
	    router: _react2.default.PropTypes.object
	};
	
	module.exports = CommentBox;
	
	exports.default = CommentBox;

/***/ },

/***/ 449:
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

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Comment = __webpack_require__(451);
	
	var _Comment2 = _interopRequireDefault(_Comment);
	
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
	
	      var commentNodes = this.props.data.map(function (comment) {
	
	        return _react2.default.createElement(_Comment2.default, { author: comment.author, key: comment.id, text: comment.text });
	      });
	
	      return _react2.default.createElement(
	        "div",
	        { className: "commentList" },
	        commentNodes
	      );
	    }
	  }]);
	
	  return CommentList;
	}(_react2.default.Component);
	
	exports.default = CommentList;

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _card = __webpack_require__(452);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _cardTitle = __webpack_require__(456);
	
	var _cardTitle2 = _interopRequireDefault(_cardTitle);
	
	var _cardText = __webpack_require__(457);
	
	var _cardText2 = _interopRequireDefault(_cardText);
	
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
	                _card2.default,
	                { className: "comment" },
	                _react2.default.createElement(_cardTitle2.default, { title: this.props.author }),
	                _react2.default.createElement(
	                    _cardText2.default,
	                    null,
	                    this.props.text
	                )
	            );
	        }
	    }]);
	
	    return CommentBox;
	}(_react2.default.Component);
	
	exports.default = CommentBox;

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var _simpleAssign = __webpack_require__(221);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _paper = __webpack_require__(356);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	var _cardExpandable = __webpack_require__(453);
	
	var _cardExpandable2 = _interopRequireDefault(_cardExpandable);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	var Card = _react2.default.createClass({
	  displayName: 'Card',
	
	  propTypes: {
	    /**
	     * If true, a click on this card component expands the card. Can be set on any child of the `Card` component.
	     */
	    actAsExpander: _react2.default.PropTypes.bool,
	
	    /**
	     * Can be used to render elements inside the Card.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * If true, this card component is expandable. Can be set on any child of the `Card` component.
	     */
	    expandable: _react2.default.PropTypes.bool,
	
	    /**
	     * Whether this card is expanded.
	     * If `true` or `false` the component is controlled.
	     * if `null` the component is uncontrolled.
	     */
	    expanded: _react2.default.PropTypes.bool,
	
	    /**
	     * Whether this card is initially expanded.
	     */
	    initiallyExpanded: _react2.default.PropTypes.bool,
	
	    /**
	     * Callback function fired when the `expandable` state of the card has changed.
	     *
	     * @param {boolean} newExpandedState Represents the new `expanded` state of the card.
	     */
	    onExpandChange: _react2.default.PropTypes.func,
	
	    /**
	     * If true, this card component will include a button to expand the card. `CardTitle`,
	     * `CardHeader` and `CardActions` implement `showExpandableButton`. Any child component
	     * of `Card` can implements `showExpandableButton` or forwards the property to a child
	     * component supporting it.
	     */
	    showExpandableButton: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      expanded: null,
	      expandable: false,
	      initiallyExpanded: false,
	      actAsExpander: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      expanded: this.props.expanded === null ? this.props.initiallyExpanded === true : this.props.expanded
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    //update the state when the component is controlled.
	    if (nextProps.expanded !== null) this.setState({ expanded: nextProps.expanded });
	  },
	  _onExpandable: function _onExpandable(event) {
	    event.preventDefault();
	    var newExpandedState = !this.state.expanded;
	    //no automatic state update when the component is controlled
	    if (this.props.expanded === null) {
	      this.setState({ expanded: newExpandedState });
	    }
	    if (this.props.onExpandChange) this.props.onExpandChange(newExpandedState);
	  },
	  render: function render() {
	    var _this = this;
	
	    var lastElement = void 0;
	    var expanded = this.state.expanded;
	    var newChildren = _react2.default.Children.map(this.props.children, function (currentChild) {
	      var doClone = false;
	      var newChild = undefined;
	      var newProps = {};
	      var element = currentChild;
	      if (!currentChild || !currentChild.props) {
	        return null;
	      }
	      if (expanded === false && currentChild.props.expandable === true) return;
	      if (currentChild.props.actAsExpander === true) {
	        doClone = true;
	        newProps.onTouchTap = _this._onExpandable;
	        newProps.style = (0, _simpleAssign2.default)({ cursor: 'pointer' }, currentChild.props.style);
	      }
	      if (currentChild.props.showExpandableButton === true) {
	        doClone = true;
	        newChild = _react2.default.createElement(_cardExpandable2.default, { expanded: expanded, onExpanding: _this._onExpandable });
	      }
	      if (doClone) {
	        element = _react2.default.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
	      }
	      return element;
	    }, this);
	
	    // If the last element is text or a title we should add
	    // 8px padding to the bottom of the card
	    var addBottomPadding = lastElement && (lastElement.type.displayName === 'CardText' || lastElement.type.displayName === 'CardTitle');
	    var _props = this.props;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['style']);
	
	    var mergedStyles = (0, _simpleAssign2.default)({
	      zIndex: 1
	    }, style);
	
	    return _react2.default.createElement(_paper2.default, _extends({}, other, { style: mergedStyles }), _react2.default.createElement('div', { style: { paddingBottom: addBottomPadding ? 8 : 0 } }, newChildren));
	  }
	});
	
	exports.default = Card;

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(221);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _keyboardArrowUp = __webpack_require__(454);
	
	var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);
	
	var _keyboardArrowDown = __webpack_require__(455);
	
	var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);
	
	var _iconButton = __webpack_require__(222);
	
	var _iconButton2 = _interopRequireDefault(_iconButton);
	
	var _getMuiTheme = __webpack_require__(241);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function getStyles() {
	  return {
	    root: {
	      top: 0,
	      bottom: 0,
	      right: 4,
	      margin: 'auto',
	      position: 'absolute'
	    }
	  };
	}
	
	var CardExpandable = _react2.default.createClass({
	  displayName: 'CardExpandable',
	
	  propTypes: {
	    expanded: _react2.default.PropTypes.bool,
	    onExpanding: _react2.default.PropTypes.func.isRequired,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    this.setState({
	      muiTheme: nextContext.muiTheme || this.state.muiTheme
	    });
	  },
	  render: function render() {
	    var styles = getStyles(this.props, this.state);
	
	    return _react2.default.createElement(_iconButton2.default, {
	      style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	      onTouchTap: this.props.onExpanding
	    }, this.props.expanded ? _react2.default.createElement(_keyboardArrowUp2.default, null) : _react2.default.createElement(_keyboardArrowDown2.default, null));
	  }
	});
	
	exports.default = CardExpandable;

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(300);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _svgIcon = __webpack_require__(355);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var HardwareKeyboardArrowUp = function HardwareKeyboardArrowUp(props) {
	  return _react2.default.createElement(_svgIcon2.default, props, _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' }));
	};
	HardwareKeyboardArrowUp = (0, _pure2.default)(HardwareKeyboardArrowUp);
	HardwareKeyboardArrowUp.displayName = 'HardwareKeyboardArrowUp';
	
	exports.default = HardwareKeyboardArrowUp;

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(300);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _svgIcon = __webpack_require__(355);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var HardwareKeyboardArrowDown = function HardwareKeyboardArrowDown(props) {
	  return _react2.default.createElement(_svgIcon2.default, props, _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' }));
	};
	HardwareKeyboardArrowDown = (0, _pure2.default)(HardwareKeyboardArrowDown);
	HardwareKeyboardArrowDown.displayName = 'HardwareKeyboardArrowDown';
	
	exports.default = HardwareKeyboardArrowDown;

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var _simpleAssign = __webpack_require__(221);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getMuiTheme = __webpack_require__(241);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	function getStyles(props, state) {
	  var card = state.muiTheme.card;
	
	  return {
	    root: {
	      padding: 16,
	      position: 'relative'
	    },
	    title: {
	      fontSize: 24,
	      color: props.titleColor || card.titleColor,
	      display: 'block',
	      lineHeight: '36px'
	    },
	    subtitle: {
	      fontSize: 14,
	      color: props.subtitleColor || card.subtitleColor,
	      display: 'block'
	    }
	  };
	}
	
	var CardTitle = _react2.default.createClass({
	  displayName: 'CardTitle',
	
	  propTypes: {
	    /**
	     * If true, a click on this card component expands the card.
	     */
	    actAsExpander: _react2.default.PropTypes.bool,
	
	    /**
	     * Can be used to render elements inside the Card Title.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * If true, this card component is expandable.
	     */
	    expandable: _react2.default.PropTypes.bool,
	
	    /**
	     * If true, this card component will include a button to expand the card.
	     */
	    showExpandableButton: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * Can be used to render a subtitle in the Card Title.
	     */
	    subtitle: _react2.default.PropTypes.node,
	
	    /**
	     * Override the subtitle color.
	     */
	    subtitleColor: _react2.default.PropTypes.string,
	
	    /**
	     * Override the inline-styles of the subtitle.
	     */
	    subtitleStyle: _react2.default.PropTypes.object,
	
	    /**
	     * Can be used to render a title in the Card Title.
	     */
	    title: _react2.default.PropTypes.node,
	
	    /**
	     * Override the title color.
	     */
	    titleColor: _react2.default.PropTypes.string,
	
	    /**
	     * Override the inline-styles of the title.
	     */
	    titleStyle: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    this.setState({
	      muiTheme: nextContext.muiTheme || this.state.muiTheme
	    });
	  },
	  render: function render() {
	    var prepareStyles = this.state.muiTheme.prepareStyles;
	
	    var styles = getStyles(this.props, this.state);
	    var rootStyle = (0, _simpleAssign2.default)({}, styles.root, this.props.style);
	    var titleStyle = (0, _simpleAssign2.default)({}, styles.title, this.props.titleStyle);
	    var subtitleStyle = (0, _simpleAssign2.default)({}, styles.subtitle, this.props.subtitleStyle);
	
	    var _props = this.props;
	    var title = _props.title;
	    var subtitle = _props.subtitle;
	
	    var other = _objectWithoutProperties(_props, ['title', 'subtitle']);
	
	    return _react2.default.createElement('div', _extends({}, other, { style: prepareStyles(rootStyle) }), _react2.default.createElement('span', { style: prepareStyles(titleStyle) }, title), _react2.default.createElement('span', { style: prepareStyles(subtitleStyle) }, subtitle), this.props.children);
	  }
	});
	
	exports.default = CardTitle;

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var _simpleAssign = __webpack_require__(221);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getMuiTheme = __webpack_require__(241);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function getStyles(props, state) {
	  var cardText = state.muiTheme.cardText;
	
	  return {
	    root: {
	      padding: 16,
	      fontSize: 14,
	      color: props.color || cardText.textColor
	    }
	  };
	}
	
	var CardText = _react2.default.createClass({
	  displayName: 'CardText',
	
	  propTypes: {
	    /**
	     * If true, a click on this card component expands the card.
	     */
	    actAsExpander: _react2.default.PropTypes.bool,
	
	    /**
	     * Can be used to render elements inside the Card Text.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * Override the CardText color.
	     */
	    color: _react2.default.PropTypes.string,
	
	    /**
	     * If true, this card component is expandable.
	     */
	    expandable: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    this.setState({
	      muiTheme: nextContext.muiTheme || this.state.muiTheme
	    });
	  },
	  render: function render() {
	    var prepareStyles = this.state.muiTheme.prepareStyles;
	
	    var styles = getStyles(this.props, this.state);
	    var rootStyle = (0, _simpleAssign2.default)(styles.root, this.props.style);
	
	    return _react2.default.createElement('div', _extends({}, this.props, { style: prepareStyles(rootStyle) }), this.props.children);
	  }
	});
	
	exports.default = CardText;

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _textField = __webpack_require__(459);
	
	var _textField2 = _interopRequireDefault(_textField);
	
	var _fontIcon = __webpack_require__(297);
	
	var _fontIcon2 = _interopRequireDefault(_fontIcon);
	
	var _raisedButton = __webpack_require__(469);
	
	var _raisedButton2 = _interopRequireDefault(_raisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommentForm = function (_React$Component) {
	    _inherits(CommentForm, _React$Component);
	
	    function CommentForm(props) {
	        _classCallCheck(this, CommentForm);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentForm).call(this, props));
	
	        _this.state = { author: "", text: "" };
	
	        _this.handleAuthorChange = _this.handleAuthorChange.bind(_this);
	        _this.handleTextChange = _this.handleTextChange.bind(_this);
	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        return _this;
	    }
	
	    _createClass(CommentForm, [{
	        key: "handleAuthorChange",
	        value: function handleAuthorChange(value, e) {
	
	            this.setState({ author: e.target.value });
	        }
	    }, {
	        key: "handleTextChange",
	        value: function handleTextChange(value, e) {
	
	            this.setState({ text: e.target.value });
	        }
	    }, {
	        key: "handleSubmit",
	        value: function handleSubmit(e) {
	
	            e.preventDefault();
	
	            var author = this.state.author.trim();
	            var text = this.state.text.trim();
	
	            if (!text || !author) return;
	
	            this.props.onCommentSubmit({ author: author, text: text });
	
	            this.setState({ author: "", text: "" });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "form",
	                { className: "commentForm", onSubmit: this.handleSubmit },
	                _react2.default.createElement(
	                    "label",
	                    { htmlFor: "commentName" },
	                    "Nom"
	                ),
	                _react2.default.createElement(_textField2.default, {
	                    multiLine: true,
	                    id: "commentName",
	                    placeholder: "Your name",
	                    defaultValue: this.state.author,
	                    onChange: this.handleAuthorChange
	                }),
	                _react2.default.createElement(
	                    "label",
	                    { htmlFor: "commentText" },
	                    "Message"
	                ),
	                _react2.default.createElement(_textField2.default, {
	                    multiLine: true,
	                    rows: 2,
	                    rowsMax: 4,
	                    id: "commentText",
	                    placeholder: "Say something...",
	                    onChange: this.handleTextChange,
	                    defaultValue: this.state.text
	                }),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement(_raisedButton2.default, {
	                    label: "Valider",
	                    type: "submit",
	                    primary: true,
	                    icon: _react2.default.createElement(_fontIcon2.default, { className: "muidocs-icon-custom-github" })
	                })
	            );
	        }
	    }]);
	
	    return CommentForm;
	}(_react2.default.Component);
	
	exports.default = CommentForm;

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TextField = __webpack_require__(460);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = _TextField2.default;

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TextField = __webpack_require__(461);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = _TextField2.default;

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
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
	
	var _simpleAssign = __webpack_require__(221);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _keycode = __webpack_require__(233);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _shallowEqual = __webpack_require__(462);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _colorManipulator = __webpack_require__(249);
	
	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);
	
	var _transitions = __webpack_require__(223);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _deprecatedPropType = __webpack_require__(463);
	
	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);
	
	var _enhancedTextarea = __webpack_require__(464);
	
	var _enhancedTextarea2 = _interopRequireDefault(_enhancedTextarea);
	
	var _getMuiTheme = __webpack_require__(241);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _TextFieldHint = __webpack_require__(466);
	
	var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);
	
	var _TextFieldLabel = __webpack_require__(467);
	
	var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);
	
	var _TextFieldUnderline = __webpack_require__(468);
	
	var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);
	
	var _warning = __webpack_require__(163);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	var getStyles = function getStyles(props, state) {
	  var _state$muiTheme = state.muiTheme;
	  var baseTheme = _state$muiTheme.baseTheme;
	  var _state$muiTheme$textF = _state$muiTheme.textField;
	  var floatingLabelColor = _state$muiTheme$textF.floatingLabelColor;
	  var focusColor = _state$muiTheme$textF.focusColor;
	  var textColor = _state$muiTheme$textF.textColor;
	  var disabledTextColor = _state$muiTheme$textF.disabledTextColor;
	  var backgroundColor = _state$muiTheme$textF.backgroundColor;
	  var hintColor = _state$muiTheme$textF.hintColor;
	  var errorColor = _state$muiTheme$textF.errorColor;
	
	  var styles = {
	    root: {
	      fontSize: 16,
	      lineHeight: '24px',
	      width: props.fullWidth ? '100%' : 256,
	      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
	      display: 'inline-block',
	      position: 'relative',
	      backgroundColor: backgroundColor,
	      fontFamily: baseTheme.fontFamily,
	      transition: _transitions2.default.easeOut('200ms', 'height')
	    },
	    error: {
	      position: 'relative',
	      bottom: 2,
	      fontSize: 12,
	      lineHeight: '12px',
	      color: errorColor,
	      transition: _transitions2.default.easeOut()
	    },
	    floatingLabel: {
	      color: hintColor,
	      pointerEvents: 'none'
	    },
	    input: {
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      padding: 0,
	      position: 'relative',
	      width: '100%',
	      height: '100%',
	      border: 'none',
	      outline: 'none',
	      backgroundColor: 'rgba(0,0,0,0)',
	      color: props.disabled ? disabledTextColor : textColor,
	      font: 'inherit'
	    },
	    textarea: {}
	  };
	
	  (0, _simpleAssign2.default)(styles.error, props.errorStyle);
	
	  (0, _simpleAssign2.default)(styles.textarea, styles.input, {
	    marginTop: props.floatingLabelText ? 36 : 12,
	    marginBottom: props.floatingLabelText ? -36 : -12,
	    boxSizing: 'border-box',
	    font: 'inherit'
	  });
	
	  if (state.isFocused) {
	    styles.floatingLabel.color = focusColor;
	  }
	
	  if (state.hasValue) {
	    styles.floatingLabel.color = _colorManipulator2.default.fade(props.disabled ? disabledTextColor : floatingLabelColor, 0.5);
	  }
	
	  if (props.floatingLabelText) {
	    styles.input.boxSizing = 'border-box';
	
	    if (!props.multiLine) {
	      styles.input.marginTop = 14;
	    }
	
	    if (state.errorText) {
	      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
	    }
	  }
	
	  if (state.errorText) {
	    if (state.isFocused) {
	      styles.floatingLabel.color = styles.error.color;
	    }
	  }
	
	  return styles;
	};
	
	/**
	 * Check if a value is valid to be displayed inside an input.
	 *
	 * @param The value to check.
	 * @returns True if the string provided is valid, false otherwise.
	 */
	function isValid(value) {
	  return Boolean(value || value === 0);
	}
	
	var TextField = _react2.default.createClass({
	  displayName: 'TextField',
	
	  propTypes: {
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	
	    /**
	     * The text string to use for the default value.
	     */
	    defaultValue: _react2.default.PropTypes.any,
	
	    /**
	     * Disables the text field if set to true.
	     */
	    disabled: _react2.default.PropTypes.bool,
	
	    /**
	     * The style object to use to override error styles.
	     */
	    errorStyle: _react2.default.PropTypes.object,
	
	    /**
	     * The error content to display.
	     */
	    errorText: _react2.default.PropTypes.node,
	
	    /**
	     * If true, the floating label will float even when there is no value.
	     */
	    floatingLabelFixed: _react2.default.PropTypes.bool,
	
	    /**
	     * The style object to use to override floating label styles.
	     */
	    floatingLabelStyle: _react2.default.PropTypes.object,
	
	    /**
	     * The content to use for the floating label element.
	     */
	    floatingLabelText: _react2.default.PropTypes.node,
	
	    /**
	     * If true, the field receives the property width 100%.
	     */
	    fullWidth: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the TextField's hint text element.
	     */
	    hintStyle: _react2.default.PropTypes.object,
	
	    /**
	     * The hint content to display.
	     */
	    hintText: _react2.default.PropTypes.node,
	
	    /**
	     * The id prop for the text field.
	     */
	    id: _react2.default.PropTypes.string,
	
	    /**
	     * Override the inline-styles of the TextField's input element.
	     * When multiLine is false: define the style of the input element.
	     * When multiLine is true: define the style of the container of the textarea.
	     */
	    inputStyle: _react2.default.PropTypes.object,
	
	    /**
	     * If true, a textarea element will be rendered.
	     * The textarea also grows and shrinks according to the number of lines.
	     */
	    multiLine: _react2.default.PropTypes.bool,
	
	    /**
	     * Name applied to the input.
	     */
	    name: _react2.default.PropTypes.string,
	
	    /**
	     * Callback function that is fired when the textfield loses focus.
	     */
	    onBlur: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function that is fired when the textfield's value changes.
	     */
	    onChange: _react2.default.PropTypes.func,
	
	    /**
	     * The function to call when the user presses the Enter key.
	     */
	    onEnterKeyDown: (0, _deprecatedPropType2.default)(_react2.default.PropTypes.func, 'Use onKeyDown and check for keycode instead.'),
	
	    /**
	     * Callback function that is fired when the textfield gains focus.
	     */
	    onFocus: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function fired when key is pressed down.
	     */
	    onKeyDown: _react2.default.PropTypes.func,
	
	    /**
	     * Number of rows to display when multiLine option is set to true.
	     */
	    rows: _react2.default.PropTypes.number,
	
	    /**
	     * Maximum number of rows to display when
	     * multiLine option is set to true.
	     */
	    rowsMax: _react2.default.PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * Override the inline-styles of the TextField's textarea element.
	     * The TextField use either a textarea or an input,
	     * this property has effects only when multiLine is true.
	     */
	    textareaStyle: _react2.default.PropTypes.object,
	
	    /**
	     * Specifies the type of input to display
	     * such as "password" or "text".
	     */
	    type: _react2.default.PropTypes.string,
	
	    /**
	     * Override the inline-styles of the
	     * TextField's underline element when disabled.
	     */
	    underlineDisabledStyle: _react2.default.PropTypes.object,
	
	    /**
	     * Override the inline-styles of the TextField's
	     * underline element when focussed.
	     */
	    underlineFocusStyle: _react2.default.PropTypes.object,
	
	    /**
	     * If true, shows the underline for the text field.
	     */
	    underlineShow: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the TextField's underline element.
	     */
	    underlineStyle: _react2.default.PropTypes.object,
	
	    /**
	     * The value of the text field.
	     */
	    value: _react2.default.PropTypes.any
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      floatingLabelFixed: false,
	      multiLine: false,
	      fullWidth: false,
	      type: 'text',
	      underlineShow: true,
	      rows: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props.children ? this.props.children.props : this.props;
	
	    return {
	      isFocused: false,
	      errorText: this.props.errorText,
	      hasValue: isValid(props.value) || isValid(props.defaultValue),
	      isClean: true,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _props = this.props;
	    var name = _props.name;
	    var hintText = _props.hintText;
	    var floatingLabelText = _props.floatingLabelText;
	    var id = _props.id;
	
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;
	
	    var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
	    this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newState = {
	      errorText: nextProps.errorText,
	      muiTheme: nextContext.muiTheme || this.state.muiTheme
	    };
	
	    if (nextProps.children && nextProps.children.props) {
	      nextProps = nextProps.children.props;
	    }
	
	    if (nextProps.hasOwnProperty('value')) {
	      newState.hasValue = isValid(nextProps.value) || this.state.isClean && isValid(nextProps.defaultValue);
	    }
	
	    if (newState) this.setState(newState);
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	    return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	  },
	  blur: function blur() {
	    if (this.input) this._getInputNode().blur();
	  },
	  focus: function focus() {
	    if (this.input) this._getInputNode().focus();
	  },
	  select: function select() {
	    if (this.input) this._getInputNode().select();
	  },
	  getValue: function getValue() {
	    return this.input ? this._getInputNode().value : undefined;
	  },
	  _getInputNode: function _getInputNode() {
	    return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
	  },
	  _handleInputBlur: function _handleInputBlur(event) {
	    this.setState({ isFocused: false });
	    if (this.props.onBlur) this.props.onBlur(event);
	  },
	  _handleInputChange: function _handleInputChange(event) {
	    this.setState({ hasValue: isValid(event.target.value), isClean: false });
	    if (this.props.onChange) this.props.onChange(event, event.target.value);
	  },
	  _handleInputFocus: function _handleInputFocus(event) {
	    if (this.props.disabled) return;
	    this.setState({ isFocused: true });
	    if (this.props.onFocus) this.props.onFocus(event);
	  },
	  _handleInputKeyDown: function _handleInputKeyDown(event) {
	    if ((0, _keycode2.default)(event) === 'enter' && this.props.onEnterKeyDown) this.props.onEnterKeyDown(event);
	    if (this.props.onKeyDown) this.props.onKeyDown(event);
	  },
	  _handleTextAreaHeightChange: function _handleTextAreaHeightChange(event, height) {
	    var newHeight = height + 24;
	    if (this.props.floatingLabelText) newHeight += 24;
	    _reactDom2.default.findDOMNode(this).style.height = newHeight + 'px';
	  },
	  _isControlled: function _isControlled() {
	    return this.props.hasOwnProperty('value');
	  },
	  render: function render() {
	    var _this = this;
	
	    var _props2 = this.props;
	    var className = _props2.className;
	    var disabled = _props2.disabled;
	    var errorStyle = _props2.errorStyle;
	    var errorText = _props2.errorText;
	    var floatingLabelFixed = _props2.floatingLabelFixed;
	    var floatingLabelText = _props2.floatingLabelText;
	    var fullWidth = _props2.fullWidth;
	    var hintText = _props2.hintText;
	    var hintStyle = _props2.hintStyle;
	    var id = _props2.id;
	    var inputStyle = _props2.inputStyle;
	    var multiLine = _props2.multiLine;
	    var onBlur = _props2.onBlur;
	    var onChange = _props2.onChange;
	    var onFocus = _props2.onFocus;
	    var style = _props2.style;
	    var type = _props2.type;
	    var underlineDisabledStyle = _props2.underlineDisabledStyle;
	    var underlineFocusStyle = _props2.underlineFocusStyle;
	    var underlineShow = _props2.underlineShow;
	    var underlineStyle = _props2.underlineStyle;
	    var rows = _props2.rows;
	    var rowsMax = _props2.rowsMax;
	    var textareaStyle = _props2.textareaStyle;
	
	    var other = _objectWithoutProperties(_props2, ['className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
	
	    var prepareStyles = this.state.muiTheme.prepareStyles;
	
	    var styles = getStyles(this.props, this.state);
	
	    var inputId = id || this.uniqueId;
	
	    var errorTextElement = this.state.errorText && _react2.default.createElement('div', { style: prepareStyles(styles.error) }, this.state.errorText);
	
	    var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(_TextFieldLabel2.default, {
	      muiTheme: this.state.muiTheme,
	      style: (0, _simpleAssign2.default)(styles.floatingLabel, this.props.floatingLabelStyle),
	      htmlFor: inputId,
	      shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
	      disabled: disabled
	    }, floatingLabelText);
	
	    var inputProps = {
	      id: inputId,
	      ref: function ref(elem) {
	        return _this.input = elem;
	      },
	      disabled: this.props.disabled,
	      onBlur: this._handleInputBlur,
	      onChange: this._handleInputChange,
	      onFocus: this._handleInputFocus,
	      onKeyDown: this._handleInputKeyDown
	    };
	
	    var inputStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);
	
	    var inputElement = void 0;
	    if (this.props.children) {
	      inputElement = _react2.default.cloneElement(this.props.children, _extends({}, inputProps, this.props.children.props, {
	        style: (0, _simpleAssign2.default)(inputStyleMerged, this.props.children.props.style)
	      }));
	    } else {
	      inputElement = multiLine ? _react2.default.createElement(_enhancedTextarea2.default, _extends({}, other, inputProps, {
	        style: inputStyleMerged,
	        rows: rows,
	        rowsMax: rowsMax,
	        onHeightChange: this._handleTextAreaHeightChange,
	        textareaStyle: (0, _simpleAssign2.default)(styles.textarea, textareaStyle)
	      })) : _react2.default.createElement('input', _extends({}, other, inputProps, {
	        style: prepareStyles(inputStyleMerged),
	        type: type
	      }));
	    }
	
	    return _react2.default.createElement('div', { className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }, floatingLabelTextElement, hintText ? _react2.default.createElement(_TextFieldHint2.default, {
	      muiTheme: this.state.muiTheme,
	      show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
	      style: hintStyle,
	      text: hintText
	    }) : null, inputElement, underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
	      disabled: disabled,
	      disabledStyle: underlineDisabledStyle,
	      error: !!this.state.errorText,
	      errorStyle: errorStyle,
	      focus: this.state.isFocused,
	      focusStyle: underlineFocusStyle,
	      muiTheme: this.state.muiTheme,
	      style: underlineStyle
	    }) : null, errorTextElement);
	  }
	});
	
	exports.default = TextField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 462:
/***/ function(module, exports) {

	'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	exports.default = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deprecated;
	
	var _warning = __webpack_require__(163);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] != null) {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, '"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation) : void 0;
	    }
	
	    return propType(props, propName, componentName);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var _simpleAssign = __webpack_require__(221);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getMuiTheme = __webpack_require__(241);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _reactEventListener = __webpack_require__(465);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	var rowsHeight = 24;
	
	function getStyles(props, state) {
	  return {
	    root: {
	      position: 'relative' },
	    //because the shadow has position: 'absolute'
	    textarea: {
	      height: state.height,
	      width: '100%',
	      resize: 'none',
	      font: 'inherit',
	      padding: 0,
	      cursor: props.disabled ? 'default' : 'initial'
	    },
	    shadow: {
	      resize: 'none',
	      // Overflow also needed to here to remove the extra row
	      // added to textareas in Firefox.
	      overflow: 'hidden',
	      // Visibility needed to hide the extra text area on ipads
	      visibility: 'hidden',
	      position: 'absolute',
	      height: 'initial'
	    }
	  };
	}
	
	var EnhancedTextarea = _react2.default.createClass({
	  displayName: 'EnhancedTextarea',
	
	  propTypes: {
	    defaultValue: _react2.default.PropTypes.any,
	    disabled: _react2.default.PropTypes.bool,
	    onChange: _react2.default.PropTypes.func,
	    onHeightChange: _react2.default.PropTypes.func,
	    rows: _react2.default.PropTypes.number,
	    rowsMax: _react2.default.PropTypes.number,
	    shadowStyle: _react2.default.PropTypes.object,
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    textareaStyle: _react2.default.PropTypes.object,
	    value: _react2.default.PropTypes.string,
	    valueLink: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      rows: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      height: this.props.rows * rowsHeight,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._syncHeightWithShadow();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    if (nextProps.value !== this.props.value) {
	      this._syncHeightWithShadow(nextProps.value);
	    }
	
	    this.setState({
	      muiTheme: nextContext.muiTheme || this.state.muiTheme
	    });
	  },
	  handleResize: function handleResize(event) {
	    this._syncHeightWithShadow(undefined, event);
	  },
	  getInputNode: function getInputNode() {
	    return this.refs.input;
	  },
	  setValue: function setValue(value) {
	    this.getInputNode().value = value;
	    this._syncHeightWithShadow(value);
	  },
	  _syncHeightWithShadow: function _syncHeightWithShadow(newValue, event) {
	    var shadow = this.refs.shadow;
	
	    if (newValue !== undefined) {
	      shadow.value = newValue;
	    }
	
	    var newHeight = shadow.scrollHeight;
	
	    if (this.props.rowsMax >= this.props.rows) {
	      newHeight = Math.min(this.props.rowsMax * rowsHeight, newHeight);
	    }
	
	    newHeight = Math.max(newHeight, rowsHeight);
	
	    if (this.state.height !== newHeight) {
	      this.setState({
	        height: newHeight
	      });
	
	      if (this.props.onHeightChange) {
	        this.props.onHeightChange(event, newHeight);
	      }
	    }
	  },
	  _handleChange: function _handleChange(event) {
	    this._syncHeightWithShadow(event.target.value);
	
	    if (this.props.hasOwnProperty('valueLink')) {
	      this.props.valueLink.requestChange(event.target.value);
	    }
	
	    if (this.props.onChange) {
	      this.props.onChange(event);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var onChange = _props.onChange;
	    var onHeightChange = _props.onHeightChange;
	    var rows = _props.rows;
	    var shadowStyle = _props.shadowStyle;
	    var style = _props.style;
	    var textareaStyle = _props.textareaStyle;
	    var valueLink = _props.valueLink;
	
	    var other = _objectWithoutProperties(_props, ['onChange', 'onHeightChange', 'rows', 'shadowStyle', 'style', 'textareaStyle', 'valueLink']);
	
	    var prepareStyles = this.state.muiTheme.prepareStyles;
	
	    var styles = getStyles(this.props, this.state);
	    var rootStyles = (0, _simpleAssign2.default)({}, styles.root, style);
	    var textareaStyles = (0, _simpleAssign2.default)({}, styles.textarea, textareaStyle);
	    var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);
	
	    if (this.props.hasOwnProperty('valueLink')) {
	      other.value = this.props.valueLink.value;
	    }
	
	    return _react2.default.createElement('div', { style: prepareStyles(rootStyles) }, _react2.default.createElement(_reactEventListener2.default, { elementName: 'window', onResize: this.handleResize }), _react2.default.createElement('textarea', {
	      ref: 'shadow',
	      style: prepareStyles(shadowStyles),
	      tabIndex: '-1',
	      rows: this.props.rows,
	      defaultValue: this.props.defaultValue,
	      readOnly: true,
	      value: this.props.value,
	      valueLink: this.props.valueLink
	    }), _react2.default.createElement('textarea', _extends({}, other, {
	      ref: 'input',
	      rows: this.props.rows,
	      style: prepareStyles(textareaStyles),
	      onChange: this._handleChange
	    })));
	  }
	});
	
	exports.default = EnhancedTextarea;

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
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
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	function on(element, type, callback) {
	  if (element.addEventListener) {
	    element.addEventListener(type, callback);
	  } else {
	    // IE8+ Support
	    element.attachEvent('on' + type, function () {
	      callback.call(element);
	    });
	  }
	}
	
	function off(element, type, callback) {
	  if (element.removeEventListener) {
	    element.removeEventListener(type, callback);
	  } else {
	    // IE8+ Support
	    element.detachEvent('on' + type, callback);
	  }
	}
	
	function listenersForEach(props, callback) {
	  var elementName = props.elementName;
	
	  var other = _objectWithoutProperties(props, ['elementName']);
	
	  var element = window[elementName];
	
	  for (var eventIdentifier in other) {
	    var eventName = eventIdentifier.substring(2).toLowerCase();
	
	    callback(element, eventName, other[eventIdentifier]);
	  }
	}
	
	var EventListener = function (_React$Component) {
	  _inherits(EventListener, _React$Component);
	
	  function EventListener(props) {
	    _classCallCheck(this, EventListener);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EventListener).call(this, props));
	  }
	
	  _createClass(EventListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      listenersForEach(this.props, function (element, eventName, callback) {
	        on(element, eventName, callback);
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      listenersForEach(this.props, function (element, eventName, callback) {
	        off(element, eventName, callback);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return EventListener;
	}(_react2.default.Component);
	
	EventListener.propTypes = {
	  /**
	   * Name of the element that we will be listening to.
	   */
	  elementName: _react2.default.PropTypes.string
	};
	exports.default = EventListener;

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(221);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(223);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var propTypes = {
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,
	
	  /**
	   * True if the hint text should be visible.
	   */
	  show: _react2.default.PropTypes.bool,
	
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object,
	
	  /**
	   * The hint text displayed.
	   */
	  text: _react2.default.PropTypes.node
	};
	
	var defaultProps = {
	  show: true
	};
	
	var TextFieldHint = function TextFieldHint(props) {
	  var muiTheme = props.muiTheme;
	  var show = props.show;
	  var style = props.style;
	  var text = props.text;
	  var prepareStyles = muiTheme.prepareStyles;
	  var hintColor = muiTheme.textField.hintColor;
	
	  var styles = {
	    root: {
	      position: 'absolute',
	      opacity: show ? 1 : 0,
	      color: hintColor,
	      transition: _transitions2.default.easeOut(),
	      bottom: 12
	    }
	  };
	
	  return _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }, text);
	};
	
	TextFieldHint.propTypes = propTypes;
	TextFieldHint.defaultProps = defaultProps;
	
	exports.default = TextFieldHint;

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(221);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(223);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var propTypes = {
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,
	
	  /**
	   * The css class name of the root element.
	   */
	  className: _react2.default.PropTypes.string,
	
	  /**
	   * The label contents.
	   */
	  children: _react2.default.PropTypes.node,
	
	  /**
	   * Disables the label if set to true.
	   */
	  disabled: _react2.default.PropTypes.bool,
	
	  /**
	   * True if the floating label should shrink.
	   */
	  shrink: _react2.default.PropTypes.bool,
	
	  /**
	   * The id of the target element that this label should refer to.
	   */
	  htmlFor: _react2.default.PropTypes.string,
	
	  /**
	   * Callback function for when the label is selected via a touch tap.
	   */
	  onTouchTap: _react2.default.PropTypes.func,
	
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};
	
	var defaultProps = {
	  disabled: false,
	  shrink: false
	};
	
	var TextFieldLabel = function TextFieldLabel(props) {
	  var muiTheme = props.muiTheme;
	  var className = props.className;
	  var children = props.children;
	  var disabled = props.disabled;
	  var shrink = props.shrink;
	  var htmlFor = props.htmlFor;
	  var style = props.style;
	  var onTouchTap = props.onTouchTap;
	
	  var styles = {
	    root: {
	      position: 'absolute',
	      lineHeight: '22px',
	      top: 38,
	      transition: _transitions2.default.easeOut(),
	      zIndex: 1, // Needed to display label above Chrome's autocomplete field background
	      cursor: disabled ? 'default' : 'text',
	      transform: shrink ? 'perspective(1px) scale(0.75) translate3d(0, -28px, 0)' : 'scale(1) translate3d(0, 0, 0)',
	      transformOrigin: 'left top',
	      pointerEvents: shrink ? 'none' : 'auto',
	      userSelect: 'none'
	    }
	  };
	
	  var prepareStyles = muiTheme.prepareStyles;
	
	  return _react2.default.createElement('label', {
	    className: className,
	    style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)),
	    htmlFor: htmlFor,
	    onTouchTap: onTouchTap
	  }, children);
	};
	
	TextFieldLabel.propTypes = propTypes;
	TextFieldLabel.defaultProps = defaultProps;
	
	exports.default = TextFieldLabel;

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(221);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(223);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var propTypes = {
	  /**
	   * True if the parent `TextField` is disabled.
	   */
	  disabled: _react2.default.PropTypes.bool,
	
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is disabled.
	   */
	  disabledStyle: _react2.default.PropTypes.object,
	
	  /**
	   * True if the parent `TextField` has an error.
	   */
	  error: _react2.default.PropTypes.bool,
	
	  /**
	   * Override the inline-styles of the underline when parent `TextField` has an error.
	   */
	  errorStyle: _react2.default.PropTypes.object,
	
	  /**
	   * True if the parent `TextField` is focused.
	   */
	  focus: _react2.default.PropTypes.bool,
	
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is focused.
	   */
	  focusStyle: _react2.default.PropTypes.object,
	
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,
	
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};
	
	var defaultProps = {
	  disabled: false,
	  disabledStyle: {},
	  error: false,
	  errorStyle: {},
	  focus: false,
	  focusStyle: {},
	  style: {}
	};
	
	var TextFieldUnderline = function TextFieldUnderline(props) {
	  var disabled = props.disabled;
	  var disabledStyle = props.disabledStyle;
	  var error = props.error;
	  var errorStyle = props.errorStyle;
	  var focus = props.focus;
	  var focusStyle = props.focusStyle;
	  var muiTheme = props.muiTheme;
	  var style = props.style;
	  var errorStyleColor = errorStyle.color;
	  var prepareStyles = muiTheme.prepareStyles;
	  var _muiTheme$textField = muiTheme.textField;
	  var borderColor = _muiTheme$textField.borderColor;
	  var disabledTextColor = _muiTheme$textField.disabledTextColor;
	  var errorColor = _muiTheme$textField.errorColor;
	  var focusColor = _muiTheme$textField.focusColor;
	
	  var styles = {
	    root: {
	      border: 'none',
	      borderBottom: 'solid 1px',
	      borderColor: borderColor,
	      bottom: 8,
	      boxSizing: 'content-box',
	      margin: 0,
	      position: 'absolute',
	      width: '100%'
	    },
	    disabled: {
	      borderBottom: 'dotted 2px',
	      borderColor: disabledTextColor
	    },
	    focus: {
	      borderBottom: 'solid 2px',
	      borderColor: focusColor,
	      transform: 'scaleX(0)',
	      transition: _transitions2.default.easeOut()
	    },
	    error: {
	      borderColor: errorStyleColor ? errorStyleColor : errorColor,
	      transform: 'scaleX(1)'
	    }
	  };
	
	  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
	  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);
	
	  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
	  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
	  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);
	
	  return _react2.default.createElement('div', null, _react2.default.createElement('hr', { style: prepareStyles(underline) }), _react2.default.createElement('hr', { style: prepareStyles(focusedUnderline) }));
	};
	
	TextFieldUnderline.propTypes = propTypes;
	TextFieldUnderline.defaultProps = defaultProps;
	
	exports.default = TextFieldUnderline;

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	
	var _simpleAssign = __webpack_require__(221);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(223);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colorManipulator = __webpack_require__(249);
	
	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);
	
	var _children = __webpack_require__(229);
	
	var _children2 = _interopRequireDefault(_children);
	
	var _enhancedButton = __webpack_require__(225);
	
	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);
	
	var _paper = __webpack_require__(356);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	var _getMuiTheme = __webpack_require__(241);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	function validateLabel(props, propName, componentName) {
	  if (!props.children && !props.label && !props.icon) {
	    return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	  }
	}
	
	function getStyles(props, state) {
	  var _state$muiTheme = state.muiTheme;
	  var baseTheme = _state$muiTheme.baseTheme;
	  var button = _state$muiTheme.button;
	  var raisedButton = _state$muiTheme.raisedButton;
	  var disabled = props.disabled;
	  var disabledBackgroundColor = props.disabledBackgroundColor;
	  var disabledLabelColor = props.disabledLabelColor;
	  var fullWidth = props.fullWidth;
	  var icon = props.icon;
	  var label = props.label;
	  var labelPosition = props.labelPosition;
	  var primary = props.primary;
	  var secondary = props.secondary;
	  var style = props.style;
	
	  var amount = primary || secondary ? 0.4 : 0.08;
	
	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;
	
	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }
	
	  return {
	    root: {
	      display: 'inline-block',
	      minWidth: fullWidth ? '100%' : button.minWidth,
	      height: button.height,
	      transition: _transitions2.default.easeOut()
	    },
	    container: {
	      position: 'relative',
	      height: '100%',
	      width: '100%',
	      padding: 0,
	      overflow: 'hidden',
	      borderRadius: 2,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      verticalAlign: 'middle',
	      opacity: 1,
	      fontSize: '14px',
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      lineHeight: style && style.height || button.height + 'px',
	      color: labelColor
	    },
	    icon: {
	      lineHeight: style && style.height || button.height + 'px',
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      backgroundColor: state.hovered && !disabled && _colorManipulator2.default.fade(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    overlayWhenHovered: {},
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}
	
	var RaisedButton = _react2.default.createClass({
	  displayName: 'RaisedButton',
	
	  propTypes: {
	    /**
	     * Override the background color. Always takes precedence unless the button is disabled.
	     */
	    backgroundColor: _react2.default.PropTypes.string,
	
	    /**
	     * This is what will be displayed inside the button.
	     * If a label is specified, the text within the label prop will
	     * be displayed. Otherwise, the component will expect children
	     * which will then be displayed. (In our example,
	     * we are nesting an `<input type="file" />` and a `span`
	     * that acts as our label to be displayed.) This only
	     * applies to flat and raised buttons.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	
	    /**
	     * Disables the button if set to true.
	     */
	    disabled: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the background color if the button is disabled.
	     */
	    disabledBackgroundColor: _react2.default.PropTypes.string,
	
	    /**
	     * Color of the label if disabled is true.
	     */
	    disabledLabelColor: _react2.default.PropTypes.string,
	
	    /**
	     * If true, then the button will take up the full
	     * width of its container.
	     */
	    fullWidth: _react2.default.PropTypes.bool,
	
	    /**
	     * URL to link to when button clicked if `linkButton` is set to true.
	     */
	    href: _react2.default.PropTypes.string,
	
	    /**
	     * Use this property to display an icon.
	     */
	    icon: _react2.default.PropTypes.node,
	
	    /**
	     * The label for the button.
	     */
	    label: validateLabel,
	
	    /**
	     * The color of the label for the button.
	     */
	    labelColor: _react2.default.PropTypes.string,
	
	    /**
	     * Place label before or after the passed children.
	     */
	    labelPosition: _react2.default.PropTypes.oneOf(['before', 'after']),
	
	    /**
	     * Override the inline-styles of the button's label element.
	     */
	    labelStyle: _react2.default.PropTypes.object,
	
	    /**
	     * Enables use of `href` property to provide a URL to link to if set to true.
	     */
	    linkButton: _react2.default.PropTypes.bool,
	
	    /**
	     * Callback function for when the mouse is pressed down inside this element.
	     */
	    onMouseDown: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function for when the mouse enters this element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function for when the mouse leaves this element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function for when the mouse is realeased
	     * above this element.
	     */
	    onMouseUp: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function for when a touchTap event ends.
	     */
	    onTouchEnd: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function for when a touchTap event starts.
	     */
	    onTouchStart: _react2.default.PropTypes.func,
	
	    /**
	     * If true, colors button according to
	     * primaryTextColor from the Theme.
	     */
	    primary: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline style of ripple element.
	     */
	    rippleStyle: _react2.default.PropTypes.object,
	
	    /**
	     * If true, colors button according to secondaryTextColor from the theme.
	     * The primary prop has precendent if set to true.
	     */
	    secondary: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      labelPosition: 'after',
	      fullWidth: false,
	      primary: false,
	      secondary: false
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var zDepth = this.props.disabled ? 0 : 1;
	    return {
	      hovered: false,
	      touched: false,
	      initialZDepth: zDepth,
	      zDepth: zDepth,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var zDepth = nextProps.disabled ? 0 : 1;
	    this.setState({
	      zDepth: zDepth,
	      initialZDepth: zDepth,
	      muiTheme: nextContext.muiTheme || this.state.muiTheme
	    });
	  },
	  _handleMouseDown: function _handleMouseDown(event) {
	    //only listen to left clicks
	    if (event.button === 0) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	    }
	    if (this.props.onMouseDown) this.props.onMouseDown(event);
	  },
	  _handleMouseUp: function _handleMouseUp(event) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onMouseUp) this.props.onMouseUp(event);
	  },
	  _handleMouseLeave: function _handleMouseLeave(event) {
	    if (!this.refs.container.isKeyboardFocused()) this.setState({ zDepth: this.state.initialZDepth, hovered: false });
	    if (this.props.onMouseLeave) this.props.onMouseLeave(event);
	  },
	  _handleMouseEnter: function _handleMouseEnter(event) {
	    if (!this.refs.container.isKeyboardFocused() && !this.state.touch) {
	      this.setState({ hovered: true });
	    }
	    if (this.props.onMouseEnter) this.props.onMouseEnter(event);
	  },
	  _handleTouchStart: function _handleTouchStart(event) {
	    this.setState({
	      touch: true,
	      zDepth: this.state.initialZDepth + 1
	    });
	    if (this.props.onTouchStart) this.props.onTouchStart(event);
	  },
	  _handleTouchEnd: function _handleTouchEnd(event) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onTouchEnd) this.props.onTouchEnd(event);
	  },
	
	  _handleKeyboardFocus: function _handleKeyboardFocus(styles) {
	    return function (event, keyboardFocused) {
	      if (keyboardFocused && !undefined.props.disabled) {
	        undefined.setState({ zDepth: undefined.state.initialZDepth + 1 });
	        var amount = undefined.props.primary || undefined.props.secondary ? 0.4 : 0.08;
	        undefined.refs.overlay.style.backgroundColor = _colorManipulator2.default.fade((0, _simpleAssign2.default)({}, styles.label, undefined.props.labelStyle).color, amount);
	      } else if (!undefined.state.hovered) {
	        undefined.setState({ zDepth: undefined.state.initialZDepth });
	        undefined.refs.overlay.style.backgroundColor = 'transparent';
	      }
	    };
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;
	    var disabled = _props.disabled;
	    var icon = _props.icon;
	    var label = _props.label;
	    var labelPosition = _props.labelPosition;
	    var labelStyle = _props.labelStyle;
	    var primary = _props.primary;
	    var rippleStyle = _props.rippleStyle;
	    var secondary = _props.secondary;
	
	    var other = _objectWithoutProperties(_props, ['children', 'className', 'disabled', 'icon', 'label', 'labelPosition', 'labelStyle', 'primary', 'rippleStyle', 'secondary']);
	
	    var prepareStyles = this.state.muiTheme.prepareStyles;
	
	    var styles = getStyles(this.props, this.state);
	    var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);
	
	    var buttonEventHandlers = disabled && {
	      onMouseDown: this._handleMouseDown,
	      onMouseUp: this._handleMouseUp,
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      onTouchStart: this._handleTouchStart,
	      onTouchEnd: this._handleTouchEnd,
	      onKeyboardFocus: this._handleKeyboardFocus
	    };
	
	    var labelElement = label && _react2.default.createElement('span', { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) }, label);
	
	    var iconCloned = icon && _react2.default.cloneElement(icon, {
	      color: styles.label.color,
	      style: styles.icon
	    });
	
	    // Place label before or after children.
	    var childrenFragment = labelPosition === 'before' ? {
	      labelElement: labelElement,
	      iconCloned: iconCloned,
	      children: children
	    } : {
	      children: children,
	      iconCloned: iconCloned,
	      labelElement: labelElement
	    };
	    var enhancedButtonChildren = _children2.default.create(childrenFragment);
	
	    return _react2.default.createElement(_paper2.default, {
	      className: className,
	      style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	      zDepth: this.state.zDepth
	    }, _react2.default.createElement(_enhancedButton2.default, _extends({}, other, buttonEventHandlers, {
	      ref: 'container',
	      disabled: disabled,
	      style: styles.container,
	      focusRippleColor: mergedRippleStyles.color,
	      touchRippleColor: mergedRippleStyles.color,
	      focusRippleOpacity: mergedRippleStyles.opacity,
	      touchRippleOpacity: mergedRippleStyles.opacity
	    }), _react2.default.createElement('div', {
	      ref: 'overlay',
	      style: prepareStyles(styles.overlay)
	    }, enhancedButtonChildren)));
	  }
	});
	
	exports.default = RaisedButton;

/***/ }

});
//# sourceMappingURL=12.bundle.js.map