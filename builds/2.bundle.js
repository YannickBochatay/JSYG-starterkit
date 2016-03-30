webpackJsonp([2],{

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  path: 'announcements',
	
	  getChildRoutes: function getChildRoutes(location, cb) {
	    __webpack_require__.e/* nsure */(3, function (require) {
	      cb(null, [__webpack_require__(431)]);
	    });
	  },
	  getComponents: function getComponents(location, cb) {
	    __webpack_require__.e/* nsure */(5, function (require) {
	      cb(null, {
	        sidebar: __webpack_require__(433),
	        main: __webpack_require__(434)
	      });
	    });
	  }
	};

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  path: 'assignments',
	
	  getChildRoutes: function getChildRoutes(location, cb) {
	    __webpack_require__.e/* nsure */(6, function (require) {
	      cb(null, [__webpack_require__(436)]);
	    });
	  },
	  getComponents: function getComponents(location, cb) {
	    __webpack_require__.e/* nsure */(8, function (require) {
	      cb(null, {
	        sidebar: __webpack_require__(438),
	        main: __webpack_require__(439)
	      });
	    });
	  }
	};

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  path: 'grades',
	  getComponent: function getComponent(location, cb) {
	    __webpack_require__.e/* nsure */(9, function (require) {
	      cb(null, __webpack_require__(441));
	    });
	  }
	};

/***/ }

});
//# sourceMappingURL=2.bundle.js.map