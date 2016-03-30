webpackJsonp([5],{

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(160);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*globals COURSES:true */
	
	
	var AnnouncementsSidebar = function (_React$Component) {
	  _inherits(AnnouncementsSidebar, _React$Component);
	
	  function AnnouncementsSidebar() {
	    _classCallCheck(this, AnnouncementsSidebar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AnnouncementsSidebar).apply(this, arguments));
	  }
	
	  _createClass(AnnouncementsSidebar, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var announcements = COURSES[this.props.params.courseId].announcements;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Sidebar Assignments'
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          announcements.map(function (announcement) {
	            return _react2.default.createElement(
	              'li',
	              { key: announcement.id },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/course/' + _this2.props.params.courseId + '/announcements/' + announcement.id },
	                announcement.title
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return AnnouncementsSidebar;
	}(_react2.default.Component);
	
	module.exports = AnnouncementsSidebar;

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Announcements = function (_React$Component) {
	  _inherits(Announcements, _React$Component);
	
	  function Announcements() {
	    _classCallCheck(this, Announcements);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Announcements).apply(this, arguments));
	  }
	
	  _createClass(Announcements, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Announcements'
	        ),
	        this.props.children || _react2.default.createElement(
	          'p',
	          null,
	          'Choose an announcement from the sidebar.'
	        )
	      );
	    }
	  }]);
	
	  return Announcements;
	}(_react2.default.Component);
	
	module.exports = Announcements;

/***/ }

});
//# sourceMappingURL=5.bundle.js.map