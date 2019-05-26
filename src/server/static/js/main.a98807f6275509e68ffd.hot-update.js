webpackHotUpdate("main",{

/***/ "./src/client/components/GridItem/index.tsx":
/*!**************************************************!*\
  !*** ./src/client/components/GridItem/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss-hmr/lib/index.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();



var styles = {
  gridItem: {
    border: '2px solid #576574',
    backgroundColor: '#8395a7',
    height: '50px',
    width: '50px',
    margin: '5px',
    display: 'flex',
    fontSize: '1.5em',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    transition: 'all 1s'
  },
  gridItemPrime: {
    border: '2px solid #2e86de',
    backgroundColor: '#54a0ff',
    boxShadow: '0px 0px 15px rgba(84,160,255, 0.5)'
  },
  gridItemMedian: {
    border: '2px solid #10ac84',
    backgroundColor: '#1dd1a1',
    borderRadius: '25px',
    boxShadow: '0px 0px 25px rgba(29,209,161, 0.5)'
  }
};

var GridItem = function GridItem(_ref) {
  var classes = _ref.classes,
      isPrime = _ref.isPrime,
      isMedian = _ref.isMedian,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "".concat(classes.gridItem, " ").concat(isPrime ? classes.gridItemPrime : '', " ").concat(isMedian ? classes.gridItemMedian : '')
  }, children);
};

var _default = react_jss__WEBPACK_IMPORTED_MODULE_1___default()(styles)(GridItem);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/components/GridItem/index.tsx");
  reactHotLoader.register(GridItem, "GridItem", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/components/GridItem/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/components/GridItem/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/containers/grid/index.tsx":
/*!**********************************************!*\
  !*** ./src/client/containers/grid/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _app_client_components_GridItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/client/components/GridItem */ "./src/client/components/GridItem/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss-hmr/lib/index.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_7__);






(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();




var styles = {
  grids: {
    display: 'flex',
    width: '630px',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    lineHeight: '30px',
    padding: 0,
    margin: 0
  }
};

var Grid =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Grid, _React$PureComponent);

  function Grid() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Grid);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Grid).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Grid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          grids = _this$props.grids,
          classes = _this$props.classes,
          primes = _this$props.primes,
          medians = _this$props.medians;
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: classes.grids
      }, grids.length > 0 ? grids.map(function (num, index) {
        return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_app_client_components_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: "grid-".concat(index),
          isPrime: primes.includes(num),
          isMedian: medians.includes(num)
        }, num);
      }) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

var _default = react_jss__WEBPACK_IMPORTED_MODULE_7___default()(styles)(Grid);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/containers/grid/index.tsx");
  reactHotLoader.register(Grid, "Grid", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/containers/grid/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/containers/grid/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.a98807f6275509e68ffd.hot-update.js.map