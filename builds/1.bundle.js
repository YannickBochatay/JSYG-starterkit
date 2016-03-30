webpackJsonp([1],{

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Calendar = function (_React$Component) {
	  _inherits(Calendar, _React$Component);
	
	  function Calendar() {
	    _classCallCheck(this, Calendar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Calendar).apply(this, arguments));
	  }
	
	  _createClass(Calendar, [{
	    key: 'render',
	    value: function render() {
	
	      var events = [{ id: 0, title: 'essay due' }];
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Calendar'
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          events.map(function (event) {
	            return _react2.default.createElement(
	              'li',
	              { key: event.id },
	              event.title
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Calendar;
	}(_react2.default.Component);
	
	module.exports = Calendar;

/***/ }

});
//# sourceMappingURL=1.bundle.js.map