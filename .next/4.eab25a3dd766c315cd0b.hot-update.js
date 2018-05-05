webpackHotUpdate(4,{

/***/ "./components/Emoji.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__("./game/index.js");
var _jsxFileName = "/Users/han/Projects/facegame/components/Emoji.jsx";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Emoji =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Emoji, _React$Component);

  function Emoji() {
    _classCallCheck(this, Emoji);

    return _possibleConstructorReturn(this, (Emoji.__proto__ || Object.getPrototypeOf(Emoji)).apply(this, arguments));
  }

  _createClass(Emoji, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          emotion = _props.emotion,
          dead = _props.dead,
          otherProps = _objectWithoutProperties(_props, ["emotion", "dead"]);

      if (dead) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
          className: "emoji dead"
        }, otherProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }), "\uD83D\uDE35");
      }

      switch (emotion) {
        case __WEBPACK_IMPORTED_MODULE_1__game__["c" /* EMOTION_CONTENT */]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          }), "\uD83D\uDE10");

        case __WEBPACK_IMPORTED_MODULE_1__game__["d" /* EMOTION_HAPPY */]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          }), "\uD83D\uDE01");

        case __WEBPACK_IMPORTED_MODULE_1__game__["e" /* EMOTION_SAD */]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          }), "\uD83D\uDE29");

        case __WEBPACK_IMPORTED_MODULE_1__game__["f" /* EMOTION_SUPRISED */]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          }), "\uD83D\uDE32");

        case __WEBPACK_IMPORTED_MODULE_1__game__["b" /* EMOTION_ANGRY */]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          }), "\uD83D\uDE20");

        default:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }), "\uD83D\uDE08");
      }
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Emoji;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Emoji;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Emoji, "Emoji", "/Users/han/Projects/facegame/components/Emoji.jsx");
  reactHotLoader.register(_default, "default", "/Users/han/Projects/facegame/components/Emoji.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.eab25a3dd766c315cd0b.hot-update.js.map