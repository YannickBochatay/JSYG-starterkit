webpackJsonp([2],{

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Footer = __webpack_require__(330);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _AddTodo = __webpack_require__(334);
	
	var _AddTodo2 = _interopRequireDefault(_AddTodo);
	
	var _VisibleTodoList = __webpack_require__(336);
	
	var _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);
	
	var _Article = __webpack_require__(303);
	
	var _Article2 = _interopRequireDefault(_Article);
	
	var _Header = __webpack_require__(261);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Section = __webpack_require__(307);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	var _reactIntl = __webpack_require__(227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Todo = function (_React$Component) {
	  _inherits(Todo, _React$Component);
	
	  function Todo() {
	    _classCallCheck(this, Todo);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Todo).apply(this, arguments));
	  }
	
	  _createClass(Todo, [{
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        _Article2.default,
	        { pad: 'medium' },
	        _react2.default.createElement(
	          _Header2.default,
	          null,
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'Todo List' })
	        ),
	        _react2.default.createElement(
	          _Section2.default,
	          null,
	          _react2.default.createElement(_VisibleTodoList2.default, null),
	          _react2.default.createElement(_AddTodo2.default, null),
	          _react2.default.createElement(_Footer2.default, null)
	        )
	      );
	    }
	  }]);
	
	  return Todo;
	}(_react2.default.Component);
	
	exports.default = Todo;
	
	
	module.exports = Todo;

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FilterLink = __webpack_require__(331);
	
	var _FilterLink2 = _interopRequireDefault(_FilterLink);
	
	var _reactIntl = __webpack_require__(227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Footer = function (_React$Component) {
	  _inherits(Footer, _React$Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'Show' }),
	        ' : ',
	        _react2.default.createElement(
	          _FilterLink2.default,
	          { filter: 'SHOW_ALL' },
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'TodoAll' })
	        ),
	        ' ',
	        _react2.default.createElement(
	          _FilterLink2.default,
	          { filter: 'SHOW_ACTIVE' },
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'TodoActive' })
	        ),
	        ' ',
	        _react2.default.createElement(
	          _FilterLink2.default,
	          { filter: 'SHOW_COMPLETED' },
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'TodoCompleted' })
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	}(_react2.default.Component);
	
	exports.default = Footer;

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(266);
	
	var _actions = __webpack_require__(332);
	
	var _Link = __webpack_require__(333);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    active: ownProps.filter === state.todo.visibilityFilter
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    onClick: function onClick() {
	      dispatch((0, _actions.setVisibilityFilter)(ownProps.filter));
	    }
	  };
	};
	
	var FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Link2.default);
	
	exports.default = FilterLink;

/***/ },

/***/ 332:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var nextTodoId = 0;
	
	var addTodo = exports.addTodo = function addTodo(text) {
	  return {
	    type: 'ADD_TODO',
	    id: nextTodoId++,
	    text: text
	  };
	};
	
	var setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {
	  return {
	    type: 'SET_VISIBILITY_FILTER',
	    filter: filter
	  };
	};
	
	var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
	  return {
	    type: 'TOGGLE_TODO',
	    id: id
	  };
	};

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Anchor = __webpack_require__(262);
	
	var _Anchor2 = _interopRequireDefault(_Anchor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Link = function (_React$Component) {
	  _inherits(Link, _React$Component);
	
	  function Link() {
	    _classCallCheck(this, Link);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Link).apply(this, arguments));
	  }
	
	  _createClass(Link, [{
	    key: "render",
	    value: function render() {
	
	      var that = this;
	
	      if (this.props.active) return _react2.default.createElement(
	        "span",
	        null,
	        this.props.children
	      );
	
	      return _react2.default.createElement(
	        _Anchor2.default,
	        { href: "",
	          onClick: function onClick(e) {
	            e.preventDefault();
	            that.props.onClick();
	          }
	        },
	        this.props.children
	      );
	    }
	  }]);
	
	  return Link;
	}(_react2.default.Component);
	
	Link.propTypes = {
	  active: _react2.default.PropTypes.bool.isRequired,
	  children: _react2.default.PropTypes.node.isRequired,
	  onClick: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = Link;

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(266);
	
	var _actions = __webpack_require__(332);
	
	var _Form = __webpack_require__(326);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormField = __webpack_require__(327);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	var _Footer = __webpack_require__(335);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Button = __webpack_require__(251);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _reactIntl = __webpack_require__(227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AddTodo = function AddTodo(_ref) {
	  var dispatch = _ref.dispatch;
	
	
	  var input = void 0;
	
	  return _react2.default.createElement(
	    _Form2.default,
	    { pad: { horizontal: "none", vertical: "large" }, onSubmit: function onSubmit(e) {
	        e.preventDefault();
	        if (!input.value.trim()) {
	          return;
	        }
	        dispatch((0, _actions.addTodo)(input.value));
	        input.value = '';
	      } },
	    _react2.default.createElement(
	      _FormField2.default,
	      { htmlFor: 'addTodo' },
	      _react2.default.createElement('input', { type: 'text', id: 'addTodo', ref: function ref(node) {
	          input = node;
	        } })
	    ),
	    _react2.default.createElement(
	      _Footer2.default,
	      { pad: { vertical: "large" } },
	      _react2.default.createElement(
	        _reactIntl.FormattedMessage,
	        { id: 'Submit' },
	        function (label) {
	          return _react2.default.createElement(_Button2.default, { type: 'submit', label: label, onClick: function onClick() {
	              return 1;
	            } });
	        }
	      )
	    )
	  );
	};
	AddTodo = (0, _reactRedux.connect)()(AddTodo);
	
	exports.default = AddTodo;

/***/ },

/***/ 335:
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
	
	var _classnames3 = __webpack_require__(224);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	var _Box = __webpack_require__(257);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _SkipLinkAnchor = __webpack_require__(258);
	
	var _SkipLinkAnchor2 = _interopRequireDefault(_SkipLinkAnchor);
	
	var _Props = __webpack_require__(255);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
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
	
	var CLASS_ROOT = 'footer';
	
	var Footer = function (_Component) {
	  _inherits(Footer, _Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var classes = (0, _classnames4.default)(CLASS_ROOT, this.props.className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + this.props.size, this.props.size), _defineProperty(_classnames, CLASS_ROOT + '--float', this.props.float), _classnames));
	
	      var containerClasses = (0, _classnames4.default)(CLASS_ROOT + '__container', _defineProperty({}, CLASS_ROOT + '__container--float', this.props.float));
	
	      var footerSkipLink = void 0;
	      if (this.props.primary) {
	        footerSkipLink = _react2.default.createElement(_SkipLinkAnchor2.default, { label: 'Footer' });
	      }
	
	      var boxProps = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
	
	      return _react2.default.createElement(_Box2.default, _extends({}, boxProps, { tag: 'footer', className: classes,
	        containerClassName: containerClasses,
	        primary: false }), footerSkipLink, this.props.children);
	    }
	  }]);
	
	  return Footer;
	}(_react.Component);
	
	exports.default = Footer;
	;
	
	Footer.propTypes = _extends({
	  float: _react.PropTypes.bool,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  primary: _react.PropTypes.bool
	}, _Box2.default.propTypes);
	
	Footer.defaultProps = {
	  direction: 'row',
	  responsive: false
	};
	module.exports = exports['default'];

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(266);
	
	var _actions = __webpack_require__(332);
	
	var _TodoList = __webpack_require__(337);
	
	var _TodoList2 = _interopRequireDefault(_TodoList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getVisibleTodos = function getVisibleTodos(todos, filter) {
	  switch (filter) {
	    case 'SHOW_ALL':
	      return todos;
	    case 'SHOW_COMPLETED':
	      return todos.filter(function (t) {
	        return t.completed;
	      });
	    case 'SHOW_ACTIVE':
	      return todos.filter(function (t) {
	        return !t.completed;
	      });
	  }
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    todos: getVisibleTodos(state.todo.todos, state.todo.visibilityFilter)
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onTodoClick: function onTodoClick(id) {
	      dispatch((0, _actions.toggleTodo)(id));
	    }
	  };
	};
	
	var VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TodoList2.default);
	
	exports.default = VisibleTodoList;

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Todo = __webpack_require__(338);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	var _List = __webpack_require__(341);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoList = function (_React$Component) {
	  _inherits(TodoList, _React$Component);
	
	  function TodoList() {
	    _classCallCheck(this, TodoList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoList).apply(this, arguments));
	  }
	
	  _createClass(TodoList, [{
	    key: 'render',
	    value: function render() {
	
	      var onTodoClick = this.props.onTodoClick.bind(this);
	
	      return _react2.default.createElement(
	        _List2.default,
	        { selectable: false },
	        this.props.todos.map(function (todo) {
	          return _react2.default.createElement(_Todo2.default, _extends({
	            key: todo.id
	          }, todo, {
	            onClick: function onClick() {
	              return onTodoClick(todo.id);
	            }
	          }));
	        })
	      );
	    }
	  }]);
	
	  return TodoList;
	}(_react2.default.Component);
	
	TodoList.propTypes = {
	
	  todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    id: _react.PropTypes.number.isRequired,
	    completed: _react.PropTypes.bool.isRequired,
	    text: _react.PropTypes.string.isRequired
	  }).isRequired).isRequired,
	
	  onTodoClick: _react.PropTypes.func.isRequired
	};
	
	exports.default = TodoList;

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ListItem = __webpack_require__(339);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	var _CheckBox = __webpack_require__(340);
	
	var _CheckBox2 = _interopRequireDefault(_CheckBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Todo = function (_React$Component) {
	  _inherits(Todo, _React$Component);
	
	  function Todo() {
	    _classCallCheck(this, Todo);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Todo).apply(this, arguments));
	  }
	
	  _createClass(Todo, [{
	    key: "render",
	    value: function render() {
	
	      return _react2.default.createElement(
	        _ListItem2.default,
	        null,
	        _react2.default.createElement(_CheckBox2.default, {
	          onChange: this.props.onClick,
	          checked: this.props.completed,
	          label: this.props.text,
	          id: "checkbox" + this.props.key })
	      );
	    }
	  }]);
	
	  return Todo;
	}(_react2.default.Component);
	
	Todo.propTypes = {
	  onClick: _react2.default.PropTypes.func.isRequired,
	  completed: _react2.default.PropTypes.bool.isRequired,
	  text: _react2.default.PropTypes.string.isRequired
	};
	
	exports.default = Todo;

/***/ },

/***/ 339:
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
	
	var _classnames2 = __webpack_require__(224);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _Box = __webpack_require__(257);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _Props = __webpack_require__(255);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
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
	
	var CLASS_ROOT = 'list-item';
	
	var ListItem = function (_Component) {
	  _inherits(ListItem, _Component);
	
	  function ListItem() {
	    _classCallCheck(this, ListItem);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
	  }
	
	  _createClass(ListItem, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, this.props.className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--selected', this.props.selected), _defineProperty(_classnames, CLASS_ROOT + '--selectable', this.props.onClick), _classnames));
	
	      var boxProps = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
	
	      return _react2.default.createElement(_Box2.default, _extends({}, boxProps, { tag: 'li', className: classes }), this.props.children);
	    }
	  }]);
	
	  return ListItem;
	}(_react.Component);
	
	exports.default = ListItem;
	;
	
	ListItem.propTypes = _extends({
	  selected: _react.PropTypes.bool
	}, _Box2.default.propTypes);
	
	ListItem.defaultProps = {
	  align: 'center',
	  direction: 'row',
	  pad: { horizontal: 'medium', vertical: 'small' },
	  separator: 'bottom'
	};
	module.exports = exports['default'];

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	var CLASS_ROOT = "check-box";
	
	var CheckBox = function (_Component) {
	  _inherits(CheckBox, _Component);
	
	  function CheckBox() {
	    _classCallCheck(this, CheckBox);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckBox).apply(this, arguments));
	  }
	
	  _createClass(CheckBox, [{
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	
	      var label = void 0;
	      var labelId = CLASS_ROOT + '-label';
	      if (this.props.label) {
	        label = _react2.default.createElement('span', { key: 'label', role: 'label', id: labelId,
	          className: CLASS_ROOT + '__label' }, this.props.label);
	      }
	
	      if (this.props.toggle) {
	        classes.push(CLASS_ROOT + '--toggle');
	      }
	
	      var hidden = void 0;
	      if (this.props.disabled) {
	        classes.push(CLASS_ROOT + '--disabled');
	        if (this.props.checked) {
	          hidden = _react2.default.createElement('input', { name: this.props.name, type: 'hidden', value: 'true' });
	        }
	      }
	
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	
	      var children = [_react2.default.createElement('span', { key: 'checkbox' }, _react2.default.createElement('input', { tabIndex: '0', className: CLASS_ROOT + '__input',
	        id: this.props.id, name: this.props.name, type: 'checkbox',
	        disabled: this.props.disabled,
	        checked: this.props.checked,
	        defaultChecked: this.props.defaultChecked,
	        onChange: this.props.onChange,
	        ref: 'input' }), _react2.default.createElement('span', { className: CLASS_ROOT + '__control' }, _react2.default.createElement('svg', { className: CLASS_ROOT + '__control-check', viewBox: '0 0 24 24',
	        preserveAspectRatio: 'xMidYMid meet' }, _react2.default.createElement('path', { fill: 'none', d: 'M6,11.3 L10.3,16 L18,6.2' })))), label];
	
	      return _react2.default.createElement('label', { className: classes.join(' '),
	        'aria-labelledby': labelId }, this.props.reverse ? children.reverse() : children, hidden);
	    }
	  }, {
	    key: 'checked',
	    set: function set(value) {
	      if ('refs' in this) {
	        this.refs.input.checked = !!value;
	      }
	    },
	    get: function get() {
	      return 'refs' in this ? this.refs.input.checked : null;
	    }
	  }]);
	
	  return CheckBox;
	}(_react.Component);
	
	exports.default = CheckBox;
	
	CheckBox.propTypes = {
	  checked: _react.PropTypes.bool,
	  defaultChecked: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  id: _react.PropTypes.string.isRequired,
	  label: _react.PropTypes.node,
	  name: _react.PropTypes.string,
	  onChange: _react.PropTypes.func,
	  reverse: _react.PropTypes.bool,
	  toggle: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	var _Spinning = __webpack_require__(321);
	
	var _Spinning2 = _interopRequireDefault(_Spinning);
	
	var _InfiniteScroll = __webpack_require__(322);
	
	var _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);
	
	var _Selection = __webpack_require__(323);
	
	var _Selection2 = _interopRequireDefault(_Selection);
	
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
	
	var CLASS_ROOT = "list";
	var SELECTED_CLASS = CLASS_ROOT + "-item--selected";
	
	var List = function (_Component) {
	  _inherits(List, _Component);
	
	  function List(props) {
	    _classCallCheck(this, List);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));
	
	    _this._onClick = _this._onClick.bind(_this);
	
	    _this.state = {
	      selected: _Selection2.default.normalizeIndexes(props.selected)
	    };
	    return _this;
	  }
	
	  _createClass(List, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._setSelection();
	      if (this.props.onMore) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.refs.more, this.props.onMore);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	        this._scroll = null;
	      }
	      if (nextProps.hasOwnProperty('selected')) {
	        this.setState({
	          selected: _Selection2.default.normalizeIndexes(nextProps.selected)
	        });
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
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	      }
	    }
	  }, {
	    key: '_setSelection',
	    value: function _setSelection() {
	      _Selection2.default.setClassFromIndexes({
	        containerElement: this.refs.list,
	        childSelector: '.list-item',
	        selectedClass: SELECTED_CLASS,
	        selectedIndexes: this.state.selected
	      });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(event) {
	      if (!this.props.selectable) {
	        return;
	      }
	
	      var selected = _Selection2.default.onClick(event, {
	        containerElement: this.refs.list,
	        childSelector: '.list-item',
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
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.selectable) {
	        classes.push(CLASS_ROOT + "--selectable");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	
	      var empty = void 0;
	      if (this.props.emptyIndicator) {
	        empty = _react2.default.createElement('li', { className: CLASS_ROOT + "__empty" }, this.props.emptyIndicator);
	      }
	
	      var more;
	      if (this.props.onMore) {
	        classes.push(CLASS_ROOT + "--moreable");
	        more = _react2.default.createElement('li', { ref: 'more', className: CLASS_ROOT + "__more" }, _react2.default.createElement(_Spinning2.default, null));
	      }
	
	      return _react2.default.createElement('ul', { ref: 'list', className: classes.join(' '), onClick: this._onClick }, empty, this.props.children, more);
	    }
	  }]);
	
	  return List;
	}(_react.Component);
	
	exports.default = List;
	
	List.propTypes = {
	  emptyIndicator: _react.PropTypes.node,
	  onMore: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  selectable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['multiple'])]),
	  selected: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)])
	};
	module.exports = exports['default'];

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(272);
	
	var _todos = __webpack_require__(343);
	
	var _todos2 = _interopRequireDefault(_todos);
	
	var _visibilityFilter = __webpack_require__(344);
	
	var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var todoApp = (0, _redux.combineReducers)({
	  todos: _todos2.default,
	  visibilityFilter: _visibilityFilter2.default
	});
	
	exports.default = todoApp;
	
	
	module.exports = todoApp;

/***/ },

/***/ 343:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var todo = function todo(state, action) {
	  switch (action.type) {
	    case 'ADD_TODO':
	      return {
	        id: action.id,
	        text: action.text,
	        completed: false
	      };
	    case 'TOGGLE_TODO':
	      if (state.id !== action.id) {
	        return state;
	      }
	
	      return Object.assign({}, state, {
	        completed: !state.completed
	      });
	
	    default:
	      return state;
	  }
	};
	
	var todos = function todos() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'ADD_TODO':
	      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
	    case 'TOGGLE_TODO':
	      return state.map(function (t) {
	        return todo(t, action);
	      });
	    default:
	      return state;
	  }
	};
	
	exports.default = todos;

/***/ },

/***/ 344:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var visibilityFilter = function visibilityFilter() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];
	  var action = arguments[1];
	
	
	  switch (action.type) {
	    case 'SET_VISIBILITY_FILTER':
	      return action.filter;
	    default:
	      return state;
	  }
	};
	
	exports.default = visibilityFilter;

/***/ }

});
//# sourceMappingURL=2.bundle.js.map