/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8888/test";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _server = __webpack_require__(2);

	var _server2 = _interopRequireDefault(_server);

	var _store = __webpack_require__(3);

	var _store2 = _interopRequireDefault(_store);

	var _reducers = __webpack_require__(15);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _store = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(5);

	var _utils = __webpack_require__(6);

	var _reducers = __webpack_require__(10);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reduxSaga = __webpack_require__(14);

	var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sagas = (0, _reduxSaga2.default)();

	function configureStore(initialState) {
	  var createStoreWithMiddleware = void 0;
	  if (_utils.isNode || _utils.PROD_ENV) {
	    createStoreWithMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(sagas))(_redux.createStore);
	  } else {
	    createStoreWithMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(sagas), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	      return f;
	    })(_redux.createStore);
	  }

	  var store = createStoreWithMiddleware(_reducers2.default, initialState);

	  if (false) {
	    module.hot.accept('./reducers', function () {
	      var nextRootReducer = require('./reducers');
	      store.replaceReducer(nextRootReducer);
	    });
	  }

	  return { store: store, sagas: sagas };
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var snabH = __webpack_require__(7);

	var isNode = typeof window === 'undefined' ? 1 : 0;
	var PROD_ENV = process.env.NODE_ENV === 'production' ? 1 : 0;

	var capitalizeFirst = function capitalizeFirst(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	};

	var links = function links(routes) {
	  return Object.keys(routes).filter(function (key) {
	    if (routes[key].isMenuItem) {
	      return key;
	    }
	    return false;
	  }).map(function (key) {
	    return [key, capitalizeFirst(routes[key].name)];
	  });
	};

	module.exports = {
	  PROD_ENV: PROD_ENV,
	  isNode: isNode,
	  capitalizeFirst: capitalizeFirst,
	  links: links,
	  h: snabH
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var VNode = __webpack_require__(8);
	var is = __webpack_require__(9);

	function addNS(data, children) {
	  data.ns = 'http://www.w3.org/2000/svg';
	  if (children !== undefined) {
	    for (var i = 0; i < children.length; ++i) {
	      addNS(children[i].data, children[i].children);
	    }
	  }
	}

	module.exports = function h(sel, b, c) {
	  var data = {}, children, text, i;
	  if (c !== undefined) {
	    data = b;
	    if (is.array(c)) { children = c; }
	    else if (is.primitive(c)) { text = c; }
	  } else if (b !== undefined) {
	    if (is.array(b)) { children = b; }
	    else if (is.primitive(b)) { text = b; }
	    else { data = b; }
	  }
	  if (is.array(children)) {
	    for (i = 0; i < children.length; ++i) {
	      if (is.primitive(children[i])) children[i] = VNode(undefined, undefined, undefined, children[i]);
	    }
	  }
	  if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g') {
	    addNS(data, children);
	  }
	  return VNode(sel, data, children, text, undefined);
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(sel, data, children, text, elm) {
	  var key = data === undefined ? undefined : data.key;
	  return {sel: sel, data: data, children: children,
	          text: text, elm: elm, key: key};
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  array: Array.isArray,
	  primitive: function(s) { return typeof s === 'string' || typeof s === 'number'; },
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(5);

	var _routes = __webpack_require__(11);

	var _routes2 = _interopRequireDefault(_routes);

	var _path = __webpack_require__(13);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  routes: _routes2.default,
	  path: _path2.default
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routes;

	var _icepick = __webpack_require__(12);

	var _icepick2 = _interopRequireDefault(_icepick);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function routes() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'ADD_ROUTE':
	      return _icepick2.default.assoc(state, action.path, { name: action.name, isMenuItem: action.isMenuItem });
	    case 'DEL_ROUTE':
	      return _icepick2.default.dissoc(state, action.path);
	    default:
	      return state;
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("icepick");

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = path;
	function path() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'CHANGE_PATH':
				return action.path;
			default:
				return state;
		}
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("redux-saga");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(16);

	__webpack_require__(19);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _path = __webpack_require__(13);

	var _path2 = _interopRequireDefault(_path);

	var _chai = __webpack_require__(17);

	var _actionCreators = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Path Reducer', function () {
		it('can change path value in state atom', function () {
			var stateBefore = '/';
			var action = (0, _actionCreators.changePath)('/test');
			var stateAfter = '/test';

			(0, _chai.expect)((0, _path2.default)(stateBefore, action)).to.deep.equal(stateAfter);
		});
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("chai");

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.changePath = changePath;
	exports.addRoute = addRoute;
	exports.delRoute = delRoute;
	function changePath(path) {
	  return { type: 'CHANGE_PATH', path: path };
	}

	function addRoute(path, name, isMenuItem) {
	  return { type: 'ADD_ROUTE', path: path, name: name, isMenuItem: isMenuItem };
	}

	function delRoute(path) {
	  return { type: 'DEL_ROUTE', path: path };
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(11);

	var _routes2 = _interopRequireDefault(_routes);

	var _chai = __webpack_require__(17);

	var _actionCreators = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Routes Reducer', function () {
		it('can add route', function () {
			var stateBefore = {};
			var action = (0, _actionCreators.addRoute)('/test', 'test', true);
			var stateAfter = {
				'/test': { name: 'test', isMenuItem: true }
			};

			(0, _chai.expect)((0, _routes2.default)(stateBefore, action)).to.deep.equal(stateAfter);
		});

		it('can delete route', function () {
			var stateBefore = {
				'/test': { name: 'test', isMenuItem: true }
			};
			var action = (0, _actionCreators.delRoute)('/test');
			var stateAfter = {};

			(0, _chai.expect)((0, _routes2.default)(stateBefore, action)).to.deep.equal(stateAfter);
		});
	});

/***/ }
/******/ ]);