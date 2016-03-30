webpackJsonp([8],{

/***/ 438:
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
	
	
	var Sidebar = function (_React$Component) {
	  _inherits(Sidebar, _React$Component);
	
	  function Sidebar() {
	    _classCallCheck(this, Sidebar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).apply(this, arguments));
	  }
	
	  _createClass(Sidebar, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var assignments = COURSES[this.props.params.courseId].assignments;
	
	
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
	          assignments.map(function (assignment) {
	            return _react2.default.createElement(
	              'li',
	              { key: assignment.id },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/course/' + _this2.props.params.courseId + '/assignments/' + assignment.id },
	                assignment.title
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Sidebar;
	}(_react2.default.Component);
	
	module.exports = Sidebar;

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Assignments = function (_React$Component) {
	  _inherits(Assignments, _React$Component);
	
	  function Assignments() {
	    _classCallCheck(this, Assignments);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Assignments).apply(this, arguments));
	  }
	
	  _createClass(Assignments, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Assignments'
	        ),
	        this.props.children || _react2.default.createElement(
	          'p',
	          null,
	          'Choose an assignment from the sidebar.'
	        )
	      );
	    }
	  }]);
	
	  return Assignments;
	}(_react2.default.Component);
	
	module.exports = Assignments;

/***/ }

});
//# sourceMappingURL=8.bundle.js.map