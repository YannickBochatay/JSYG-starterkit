webpackJsonp([10],{

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dashboard = __webpack_require__(443);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	var _Nav = __webpack_require__(444);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*globals COURSES:true */
	
	
	var styles = {};
	
	styles.sidebar = {
	  float: 'left',
	  width: 200,
	  padding: 20,
	  borderRight: '1px solid #aaa',
	  marginRight: 20
	};
	
	var Course = function (_React$Component) {
	  _inherits(Course, _React$Component);
	
	  function Course() {
	    _classCallCheck(this, Course);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Course).apply(this, arguments));
	  }
	
	  _createClass(Course, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var sidebar = _props.sidebar;
	      var main = _props.main;
	      var children = _props.children;
	      var params = _props.params;
	
	
	      var course = COURSES[params.courseId];
	
	      var content = void 0;
	
	      if (sidebar && main) {
	        content = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'Sidebar', style: styles.sidebar },
	            sidebar
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'Main', style: { padding: 20 } },
	            main
	          )
	        );
	      } else if (children) {
	        content = children;
	      } else {
	        content = _react2.default.createElement(_Dashboard2.default, null);
	      }
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          course.name
	        ),
	        _react2.default.createElement(_Nav2.default, { course: course }),
	        content
	      );
	    }
	  }]);
	
	  return Course;
	}(_react2.default.Component);
	
	module.exports = Course;

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dashboard = function (_React$Component) {
	  _inherits(Dashboard, _React$Component);
	
	  function Dashboard() {
	    _classCallCheck(this, Dashboard);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).apply(this, arguments));
	  }
	
	  _createClass(Dashboard, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Course Dashboard'
	        )
	      );
	    }
	  }]);
	
	  return Dashboard;
	}(_react2.default.Component);
	
	exports.default = Dashboard;

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(160);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {};
	
	styles.nav = {
	  borderBottom: '1px solid #aaa'
	};
	
	styles.link = {
	  display: 'inline-block',
	  padding: 10,
	  textDecoration: 'none'
	};
	
	styles.activeLink = Object.assign({
	  color: 'red'
	}, styles.link);
	
	var Nav = function (_React$Component) {
	  _inherits(Nav, _React$Component);
	
	  function Nav() {
	    _classCallCheck(this, Nav);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).apply(this, arguments));
	  }
	
	  _createClass(Nav, [{
	    key: 'render',
	    value: function render() {
	      var course = this.props.course;
	
	
	      var pages = [['announcements', 'Announcements'], ['assignments', 'Assignments'], ['grades', 'Grades']];
	
	      if (course) {
	        "toto";
	      }
	      if (_reactRouter.Link) {
	        "toto";
	      }
	      if (pages) {
	        "toto";
	      }
	
	      return _react2.default.createElement(
	        'nav',
	        { style: styles.nav },
	        pages.map(function (page, index) {
	          return _react2.default.createElement(
	            _reactRouter.Link,
	            {
	              key: page[0],
	              activeStyle: index === 0 ? Object.assign({ paddingLeft: 0 }, styles.activeLink) : styles.activeLink,
	              style: index === 0 ? Object.assign({ paddingLeft: 0 }, styles.link) : styles.link,
	              to: '/course/' + course.id + '/' + page[0]
	            },
	            page[1]
	          );
	        })
	      );
	    }
	  }]);
	
	  return Nav;
	}(_react2.default.Component);
	
	exports.default = Nav;

/***/ }

});
//# sourceMappingURL=10.bundle.js.map