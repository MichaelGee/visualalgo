webpackHotUpdate("main",{

/***/ "./src/client/app.tsx":
/*!****************************!*\
  !*** ./src/client/app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _app_client_containers_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/client/containers/grid */ "./src/client/containers/grid/index.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss-hmr/lib/index.js");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_12__);









(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};






var styles = {
  container: {
    width: '80%',
    padding: '20px',
    maxWidth: '630px'
  },
  controlContainer: {
    padding: '10px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '30px 0px',
    borderTop: '1px solid rgba(0,0,0, 0.2);',
    borderBottom: '1px solid rgba(0,0,0, 0.2);'
  },
  numberInput: {
    width: '300px',
    height: '38px',
    paddingLeft: '10px',
    borderRadius: '10px',
    fontSize: '1.2em',
    border: '2px solid #f1f1f1;'
  },
  primeTag: {
    width: '80px',
    height: '25px',
    backgroundColor: '#54a0ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '0.8em',
    fontWeight: 'bold',
    borderRadius: '15px'
  },
  medianTag: {
    width: '80px',
    height: '25px',
    backgroundColor: '#10ac84',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '0.8em',
    fontWeight: 'bold',
    borderRadius: '15px'
  },
  numberInputLabel: {
    fontSize: '0.8em',
    display: 'block'
  },
  numbersDisplay: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0px'
  }
};

var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(App, _React$Component);

  function App() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App).apply(this, arguments));
    _this.state = {
      limitNumber: 0,
      grids: [],
      primes: [],
      medians: []
    };

    _this.fetchPrimeAndMedian = function (limitNumber) {
      return __awaiter(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), void 0, void 0,
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _ref, _ref$data, median, primes;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/prime/".concat(limitNumber, "/median"));

              case 2:
                _ref = _context.sent;
                _ref$data = _ref.data;
                median = _ref$data.median;
                primes = _ref$data.primes;
                return _context.abrupt("return", [median, primes]);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    };

    _this.handleNumberChange = function (e) {
      return __awaiter(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), void 0, void 0,
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var limitNumber, grids, i, _ref2, _ref3, median, primes;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                limitNumber = Number(e.currentTarget.value);
                grids = [];

                for (i = 0; i < limitNumber; i++) {
                  grids.push(i + 1);
                }

                if (!(limitNumber < 3)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", this.setState({
                  limitNumber: limitNumber,
                  grids: [],
                  primes: [],
                  medians: []
                }));

              case 5:
                _context2.next = 7;
                return this.fetchPrimeAndMedian(limitNumber);

              case 7:
                _ref2 = _context2.sent;
                _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2);
                median = _ref3[0];
                primes = _ref3[1];
                this.setState({
                  limitNumber: limitNumber,
                  grids: grids,
                  primes: primes,
                  medians: median
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          grids = _this$state.grids,
          limitNumber = _this$state.limitNumber,
          medians = _this$state.medians,
          primes = _this$state.primes;
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_10__["createElement"](react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
        className: classes.container
      }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("h2", null, "Sieve of Eratosthenes"), react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("p", null, "In mathematics, the Sieve of Eratosthenes is a simple, ancient algorithm for ", react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("br", null), " finding all prime numbers up to any given limit."), react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
        className: classes.controlContainer
      }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("form", null, react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("label", {
        htmlFor: "limitNumber",
        className: classes.numberInputLabel
      }, "Enter a number"), react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("input", {
        type: "number",
        id: "limitNumber",
        name: "limitNumber",
        value: limitNumber,
        min: 0,
        className: classes.numberInput,
        onChange: this.handleNumberChange
      })), react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
        className: classes.primeTag
      }, "Prime"), react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
        className: classes.medianTag
      }, "Median")), react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
        className: classes.numbersDisplay
      }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("pre", null, "Primes: ", JSON.stringify(primes)), react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("pre", null, "Medians: ", JSON.stringify(medians))), react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_app_client_containers_grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
        grids: grids,
        medians: medians,
        primes: primes
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_11__["hot"])(module)(react_jss__WEBPACK_IMPORTED_MODULE_12___default()(styles)(App));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__awaiter, "__awaiter", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/app.tsx");
  reactHotLoader.register(styles, "styles", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/app.tsx");
  reactHotLoader.register(App, "App", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/app.tsx");
  reactHotLoader.register(_default, "default", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/app.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/index.tsx":
/*!******************************!*\
  !*** ./src/client/index.tsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/client/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





var render = function render(Component) {
  react_dom__WEBPACK_IMPORTED_MODULE_2__["hydrate"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, null), document.getElementById('app'));
};

if (true) {
  module.hot.accept(/*! ./app */ "./src/client/app.tsx", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/client/app.tsx");
(function () {
    render(__webpack_require__(/*! ./app */ "./src/client/app.tsx")["default"]);
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}

if (window) {
  window.onload = function () {
    var ssStyles = document.getElementById('server-side-styles');
    ssStyles.parentNode.removeChild(ssStyles);
    render(_app__WEBPACK_IMPORTED_MODULE_0__["default"]);
  };
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(render, "render", "/Users/Sleekvick/Projects/touch_bistro_challenge/src/client/index.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.e7ab4b1fa637215202ba.hot-update.js.map