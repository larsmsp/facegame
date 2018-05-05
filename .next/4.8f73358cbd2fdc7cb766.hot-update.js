webpackHotUpdate(4,{

/***/ "./components/DebugControls.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__("./game/index.js");
var _jsxFileName = "/Users/han/Projects/facegame/components/DebugControls.jsx";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DebugControls =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DebugControls, _React$Component);

  function DebugControls() {
    _classCallCheck(this, DebugControls);

    return _possibleConstructorReturn(this, (DebugControls.__proto__ || Object.getPrototypeOf(DebugControls)).apply(this, arguments));
  }

  _createClass(DebugControls, [{
    key: "handleClick",
    value: function handleClick(emotion) {
      this.props.onInputEmotion(emotion);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-2813052045" + " " + "panel"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2813052045",
        css: ".panel.jsx-2813052045{height:50px;position:absolute;z-order:1;bottom:30px;left:0;right:0;}.button-group.jsx-2813052045{margin:auto;width:250px;}button.jsx-2813052045{font-size:30px;display:inline-block;background-color:grey;width:50px;height:40px;}button.jsx-2813052045:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGVidWdDb250cm9scy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZTRCLEFBR2lDLEFBU0EsQUFLRyxBQVFGLFlBckJLLEFBU04sQ0FhaEIsRUFSeUIsU0FKekIsTUFUYyxNQWNZLElBYlYsWUFDTCxNQWFJLENBWkgsUUFDWixFQVlnQixZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzL0RlYnVnQ29udHJvbHMuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBFTU9USU9OX0NPTlRFTlQsIEVNT1RJT05fQU5HUlksIEVNT1RJT05fU0FELCBFTU9USU9OX0hBUFBZLCBFTU9USU9OX1NVUFJJU0VEIH0gZnJvbSAnLi4vZ2FtZSdcblxuY2xhc3MgRGVidWdDb250cm9scyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICAgIGhhbmRsZUNsaWNrKGVtb3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0RW1vdGlvbihlbW90aW9uKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB6LW9yZGVyOiAxO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5idXR0b24tZ3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKEVNT1RJT05fQ09OVEVOVCl9PvCfmJA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKEVNT1RJT05fSEFQUFkpfT7wn5iBPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhFTU9USU9OX1NBRCl9PvCfmKk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKEVNT1RJT05fU1VQUklTRUQpfT7wn5iyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhFTU9USU9OX0FOR1JZKX0+8J+YoTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlYnVnQ29udHJvbHMiXX0= */\n/*@ sourceURL=components/DebugControls.jsx */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-2813052045" + " " + "button-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.handleClick(__WEBPACK_IMPORTED_MODULE_2__game__["c" /* EMOTION_CONTENT */]);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-2813052045"
      }, "\uD83D\uDE10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.handleClick(__WEBPACK_IMPORTED_MODULE_2__game__["d" /* EMOTION_HAPPY */]);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-2813052045"
      }, "\uD83D\uDE01"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.handleClick(__WEBPACK_IMPORTED_MODULE_2__game__["e" /* EMOTION_SAD */]);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-2813052045"
      }, "\uD83D\uDE29"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.handleClick(__WEBPACK_IMPORTED_MODULE_2__game__["f" /* EMOTION_SUPRISED */]);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-2813052045"
      }, "\uD83D\uDE32"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.handleClick(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* EMOTION_ANGRY */]);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-2813052045"
      }, "\uD83D\uDE21")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return DebugControls;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = DebugControls;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DebugControls, "DebugControls", "/Users/han/Projects/facegame/components/DebugControls.jsx");
  reactHotLoader.register(_default, "default", "/Users/han/Projects/facegame/components/DebugControls.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
          otherProps = _objectWithoutProperties(_props, ["emotion"]);

      switch (emotion) {
        case __WEBPACK_IMPORTED_MODULE_1__game__["c" /* EMOTION_CONTENT */]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          }), "\uD83D\uDE10");

        case __WEBPACK_IMPORTED_MODULE_1__game__["d" /* EMOTION_HAPPY */]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          }), "\uD83D\uDE01");

        case __WEBPACK_IMPORTED_MODULE_1__game__["e" /* EMOTION_SAD */]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          }), "\uD83D\uDE29");

        case __WEBPACK_IMPORTED_MODULE_1__game__["f" /* EMOTION_SUPRISED */]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          }), "\uD83D\uDE32");

        case __WEBPACK_IMPORTED_MODULE_1__game__["b" /* EMOTION_ANGRY */]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          }), "\uD83D\uDE20");

        default:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", _extends({
            className: "emoji"
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
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

/***/ }),

/***/ "./game/SceneLevel.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Emoji__ = __webpack_require__("./components/Emoji.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game__ = __webpack_require__("./game/index.js");
var _jsxFileName = "/Users/han/Projects/facegame/game/SceneLevel.jsx";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CSS = new String(".level{margin-top:25vh;font-size:150px;text-align:center;}.level .emoji{position:absolute;left:50vh;top:50vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHcUIsQUFNRSxnQkFMRixFQU1OLFVBQ0QsSUFOUyxLQU90QixhQU5BIiwiZmlsZSI6ImdhbWUvU2NlbmVMZXZlbC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgQUxMX0VNT1RJT05TLCBFTU9USU9OX0NPTlRFTlQsIEVNT1RJT05fQU5HUlksIEVNT1RJT05fU0FELCBFTU9USU9OX0hBUFBZLCBFTU9USU9OX1NVUFJJU0VEIH0gZnJvbSAnLi4vZ2FtZSdcblxuY29uc3QgQ1NTID0gY3NzYFxuLmxldmVsIHtcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGV2ZWwgLmVtb2ppIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTB2aDtcbiAgICB0b3A6IDUwdmg7XG59XG5gXG5cbmNvbnN0IF9EZWZhdWx0U3RhdGUgPSB7XG4gICAgZW1vamlzOiBbXVxufVxuXG5jbGFzcyBTY2VuZUxldmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMubGV2ZWwgIT0gdGhpcy5wcm9wcy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckVtb2ppKGUpIHtcbiAgICAgICAgcmV0dXJuIDxFbW9qaSBlbW90aW9uPXtlLmVtb3Rpb259IHN0eWxlPXt7XG4gICAgICAgICAgICBsZWZ0OiAnJ1xuICAgICAgICB9fSAvPlxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e0NTU308L3N0eWxlPlxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZW1vamlzLm1hcCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyRW1vamkoZSlcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgaWYgKGxldmVsTm8gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDEwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG4gICAgICAgIGxldCBlbW9qaXMgPSBbLi4udGhpcy5zdGF0ZS5lbW9qaXNdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZW1vamkucHVzaCh0aGlzLl9uZXdFbW9qaSgpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX25ld0Vtb2ppKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1vdGlvbjogRU1PVElPTl9IQVBQWSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9raWxsRW1vamkoZW1vamkpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgX3JhbmRvbUVtb3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBBTExfRU1PVElPTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQUxMX0VNT1RJT05TLmxlbmd0aCldXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZUxldmVsIl19 */\n/*@ sourceURL=game/SceneLevel.jsx */");
CSS.__hash = "2817502941";
CSS.__scoped = ".level.jsx-2665110108{margin-top:25vh;font-size:150px;text-align:center;}.level.jsx-2665110108 .emoji.jsx-2665110108{position:absolute;left:50vh;top:50vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHcUIsQUFNRSxnQkFMRixFQU1OLFVBQ0QsSUFOUyxLQU90QixhQU5BIiwiZmlsZSI6ImdhbWUvU2NlbmVMZXZlbC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgQUxMX0VNT1RJT05TLCBFTU9USU9OX0NPTlRFTlQsIEVNT1RJT05fQU5HUlksIEVNT1RJT05fU0FELCBFTU9USU9OX0hBUFBZLCBFTU9USU9OX1NVUFJJU0VEIH0gZnJvbSAnLi4vZ2FtZSdcblxuY29uc3QgQ1NTID0gY3NzYFxuLmxldmVsIHtcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGV2ZWwgLmVtb2ppIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTB2aDtcbiAgICB0b3A6IDUwdmg7XG59XG5gXG5cbmNvbnN0IF9EZWZhdWx0U3RhdGUgPSB7XG4gICAgZW1vamlzOiBbXVxufVxuXG5jbGFzcyBTY2VuZUxldmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMubGV2ZWwgIT0gdGhpcy5wcm9wcy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckVtb2ppKGUpIHtcbiAgICAgICAgcmV0dXJuIDxFbW9qaSBlbW90aW9uPXtlLmVtb3Rpb259IHN0eWxlPXt7XG4gICAgICAgICAgICBsZWZ0OiAnJ1xuICAgICAgICB9fSAvPlxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e0NTU308L3N0eWxlPlxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZW1vamlzLm1hcCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyRW1vamkoZSlcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgaWYgKGxldmVsTm8gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDEwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG4gICAgICAgIGxldCBlbW9qaXMgPSBbLi4udGhpcy5zdGF0ZS5lbW9qaXNdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZW1vamkucHVzaCh0aGlzLl9uZXdFbW9qaSgpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX25ld0Vtb2ppKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1vdGlvbjogRU1PVElPTl9IQVBQWSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9raWxsRW1vamkoZW1vamkpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgX3JhbmRvbUVtb3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBBTExfRU1PVElPTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQUxMX0VNT1RJT05TLmxlbmd0aCldXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZUxldmVsIl19 */\n/*@ sourceURL=game/SceneLevel.jsx */";
CSS.__scopedHash = "2665110108";
var _DefaultState = {
  emojis: []
};

var SceneLevel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SceneLevel, _React$Component);

  function SceneLevel() {
    _classCallCheck(this, SceneLevel);

    return _possibleConstructorReturn(this, (SceneLevel.__proto__ || Object.getPrototypeOf(SceneLevel)).apply(this, arguments));
  }

  _createClass(SceneLevel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setLevel(this.props.level);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.level != this.props.level) {
        this._setLevel(this.props.level);
      }
    }
  }, {
    key: "renderEmoji",
    value: function renderEmoji(e) {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Emoji__["a" /* default */], {
        emotion: e.emotion,
        style: {
          left: ''
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "level",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__hash,
        css: CSS
      }), this.state.emojis.map(function (e) {
        return renderEmoji(e);
      }));
    }
  }, {
    key: "_setLevel",
    value: function _setLevel(levelNo) {
      if (levelNo === 1) {
        this._generateEmojis(10);
      }
    }
  }, {
    key: "_generateEmojis",
    value: function _generateEmojis(count) {
      var emojis = _toConsumableArray(this.state.emojis);

      for (var i = 0; i < count; ++i) {
        emoji.push(this._newEmoji());
      }
    }
  }, {
    key: "_newEmoji",
    value: function _newEmoji() {
      return {
        emotion: __WEBPACK_IMPORTED_MODULE_3__game__["d" /* EMOTION_HAPPY */]
      };
    }
  }, {
    key: "_killEmoji",
    value: function _killEmoji(emoji) {}
  }, {
    key: "_randomEmotion",
    value: function _randomEmotion() {
      return __WEBPACK_IMPORTED_MODULE_3__game__["a" /* ALL_EMOTIONS */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_3__game__["a" /* ALL_EMOTIONS */].length)];
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SceneLevel;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var _default = SceneLevel;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CSS, "CSS", "/Users/han/Projects/facegame/game/SceneLevel.jsx");
  reactHotLoader.register(_DefaultState, "_DefaultState", "/Users/han/Projects/facegame/game/SceneLevel.jsx");
  reactHotLoader.register(SceneLevel, "SceneLevel", "/Users/han/Projects/facegame/game/SceneLevel.jsx");
  reactHotLoader.register(_default, "default", "/Users/han/Projects/facegame/game/SceneLevel.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./game/SceneWaitingToStart.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Emoji__ = __webpack_require__("./components/Emoji.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game__ = __webpack_require__("./game/index.js");
var _jsxFileName = "/Users/han/Projects/facegame/game/SceneWaitingToStart.jsx";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CSS = new String(".waiting-to-start{margin-top:25vh;font-size:150px;text-align:center;}p{font-size:40px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVXYWl0aW5nVG9TdGFydC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHcUIsQUFNRCxlQUNILENBTkksV0FPcEIsS0FOc0Isa0JBQ3RCIiwiZmlsZSI6ImdhbWUvU2NlbmVXYWl0aW5nVG9TdGFydC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCB9IGZyb20gJy4uL2dhbWUnXG5cbmNvbnN0IENTUyA9IGNzc2Bcbi53YWl0aW5nLXRvLXN0YXJ0IHtcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuYFxuXG5jbGFzcyBTY2VuZVdhaXRpbmdUb1N0YXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhaXRpbmctdG8tc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIDxFbW9qaSBlbW90aW9uPXtFTU9USU9OX0hBUFBZfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0b3A6ICc0MHB4J1xuICAgICAgICAgICAgICAgIH19Lz5cblxuICAgICAgICAgICAgICAgIDxwPlNtaWxlIHRvIHN0YXJ0IHRoZSBnYW1lITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZVdhaXRpbmdUb1N0YXJ0Il19 */\n/*@ sourceURL=game/SceneWaitingToStart.jsx */");
CSS.__hash = "1791289764";
CSS.__scoped = ".waiting-to-start.jsx-403855749{margin-top:25vh;font-size:150px;text-align:center;}p.jsx-403855749{font-size:40px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVXYWl0aW5nVG9TdGFydC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHcUIsQUFNRCxlQUNILENBTkksV0FPcEIsS0FOc0Isa0JBQ3RCIiwiZmlsZSI6ImdhbWUvU2NlbmVXYWl0aW5nVG9TdGFydC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCB9IGZyb20gJy4uL2dhbWUnXG5cbmNvbnN0IENTUyA9IGNzc2Bcbi53YWl0aW5nLXRvLXN0YXJ0IHtcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuYFxuXG5jbGFzcyBTY2VuZVdhaXRpbmdUb1N0YXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhaXRpbmctdG8tc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIDxFbW9qaSBlbW90aW9uPXtFTU9USU9OX0hBUFBZfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0b3A6ICc0MHB4J1xuICAgICAgICAgICAgICAgIH19Lz5cblxuICAgICAgICAgICAgICAgIDxwPlNtaWxlIHRvIHN0YXJ0IHRoZSBnYW1lITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZVdhaXRpbmdUb1N0YXJ0Il19 */\n/*@ sourceURL=game/SceneWaitingToStart.jsx */";
CSS.__scopedHash = "403855749";

var SceneWaitingToStart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SceneWaitingToStart, _React$Component);

  function SceneWaitingToStart() {
    _classCallCheck(this, SceneWaitingToStart);

    return _possibleConstructorReturn(this, (SceneWaitingToStart.__proto__ || Object.getPrototypeOf(SceneWaitingToStart)).apply(this, arguments));
  }

  _createClass(SceneWaitingToStart, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-".concat(CSS.__scopedHash) + " " + "waiting-to-start"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__scopedHash,
        css: CSS.__scoped
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Emoji__["a" /* default */], {
        emotion: __WEBPACK_IMPORTED_MODULE_3__game__["d" /* EMOTION_HAPPY */],
        style: {
          top: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-".concat(CSS.__scopedHash)
      }, "Smile to start the game!"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SceneWaitingToStart;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var _default = SceneWaitingToStart;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CSS, "CSS", "/Users/han/Projects/facegame/game/SceneWaitingToStart.jsx");
  reactHotLoader.register(SceneWaitingToStart, "SceneWaitingToStart", "/Users/han/Projects/facegame/game/SceneWaitingToStart.jsx");
  reactHotLoader.register(_default, "default", "/Users/han/Projects/facegame/game/SceneWaitingToStart.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./game/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EMOTION_HAPPY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EMOTION_SAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMOTION_ANGRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EMOTION_SUPRISED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EMOTION_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL_EMOTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GAME_LENGTH_IN_SECONDS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SceneWaitingToStart__ = __webpack_require__("./game/SceneWaitingToStart.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__SceneWaitingToStart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SceneLevel__ = __webpack_require__("./game/SceneLevel.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__SceneLevel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SceneFinished__ = __webpack_require__("./game/SceneFinished.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__SceneFinished__["a"]; });
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var EMOTION_HAPPY = 'Happy';
var EMOTION_SAD = 'Sad';
var EMOTION_ANGRY = 'Angry';
var EMOTION_SUPRISED = 'Suprised';
var EMOTION_CONTENT = 'Content';
var ALL_EMOTIONS = [EMOTION_HAPPY, EMOTION_SAD, EMOTION_ANGRY, EMOTION_SUPRISED, EMOTION_CONTENT];
var GAME_LENGTH_IN_SECONDS = 20;



;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EMOTION_HAPPY, "EMOTION_HAPPY", "/Users/han/Projects/facegame/game/index.js");
  reactHotLoader.register(EMOTION_SAD, "EMOTION_SAD", "/Users/han/Projects/facegame/game/index.js");
  reactHotLoader.register(EMOTION_ANGRY, "EMOTION_ANGRY", "/Users/han/Projects/facegame/game/index.js");
  reactHotLoader.register(EMOTION_SUPRISED, "EMOTION_SUPRISED", "/Users/han/Projects/facegame/game/index.js");
  reactHotLoader.register(EMOTION_CONTENT, "EMOTION_CONTENT", "/Users/han/Projects/facegame/game/index.js");
  reactHotLoader.register(ALL_EMOTIONS, "ALL_EMOTIONS", "/Users/han/Projects/facegame/game/index.js");
  reactHotLoader.register(GAME_LENGTH_IN_SECONDS, "GAME_LENGTH_IN_SECONDS", "/Users/han/Projects/facegame/game/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ParticleArea__ = __webpack_require__("./components/ParticleArea.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DebugControls__ = __webpack_require__("./components/DebugControls.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Emoji__ = __webpack_require__("./components/Emoji.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_LevelProgressBar__ = __webpack_require__("./components/LevelProgressBar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game__ = __webpack_require__("./game/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ScoreDisplay__ = __webpack_require__("./components/ScoreDisplay.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_luxon__ = __webpack_require__("./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_luxon__);
var _jsxFileName = "/Users/han/Projects/facegame/pages/index.jsx";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var MODE_WAITING_TO_START = 'WAITING_TO_START';
var MODE_PLAYING_LEVEL = 'PLAYING_LEVEL';
var MODE_FINISHED = 'FINISHED';
var _DefaultState = {
  mode: MODE_WAITING_TO_START,
  level: null
};
var CSS = new String("html,body,#__next,.board{height:100%;font-family:Roboto,sans-serif;}body{background:black;margin:0;}.game{position:absolute;left:0;right:0;bottom:0;top:5vh;}.waiting-to-start{margin:auto;top:50%;}.emoji{display:block;-webkit-transition:opacity 0.2s linear,-webkit-transform 0.2s linear;-webkit-transition:opacity 0.2s linear,transform 0.2s linear;transition:opacity 0.2s linear,transform 0.2s linear;}::selection{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmUsQUFHZSxBQUtLLEFBS0MsQUFRTixBQUtFLEFBS1csWUEzQk0sQUFrQnZCLEVBSzhDLEdBbEI3QyxDQUtGLEVBU1QsR0FTQSxFQWpCVSxDQUxWLE9BTVcsU0FYWCxBQVlVLFFBQ1YsbUpBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVBcmVhJ1xuaW1wb3J0IERlYnVnQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZWJ1Z0NvbnRyb2xzJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgTGV2ZWxQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCwgU2NlbmVXYWl0aW5nVG9TdGFydCwgU2NlbmVMZXZlbCwgU2NlbmVGaW5pc2hlZCwgR0FNRV9MRU5HVEhfSU5fU0VDT05EUyB9IGZyb20gJy4uL2dhbWUnXG5pbXBvcnQgU2NvcmVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmVEaXNwbGF5JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmNvbnN0IE1PREVfV0FJVElOR19UT19TVEFSVCA9ICdXQUlUSU5HX1RPX1NUQVJUJ1xuY29uc3QgTU9ERV9QTEFZSU5HX0xFVkVMID0gJ1BMQVlJTkdfTEVWRUwnXG5jb25zdCBNT0RFX0ZJTklTSEVEID0gJ0ZJTklTSEVEJ1xuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlQsXG4gIGxldmVsOiBudWxsLFxufVxuXG5jb25zdCBDU1MgPSBjc3NgXG5odG1sLCBib2R5LCAjX19uZXh0LCAuYm9hcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgbWFyZ2luOiAwO1xufVxuXG4uZ2FtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiA1dmg7XG59XG5cbi53YWl0aW5nLXRvLXN0YXJ0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDUwJTtcbn1cblxuLmVtb2ppIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXIsIHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuYFxuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0gX0RlZmF1bHRTdGF0ZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVHYW1lVGljaygpXG4gICAgfSwgMjAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gRXZlbnQgaGFuZGxlcnNcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIGhhbmRsZUdhbWVUaWNrKCkge1xuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vZGUpIHtcbiAgICAgICAgY2FzZSBNT0RFX1dBSVRJTkdfVE9fU1RBUlQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgXG4gICAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICAgIGNvbnN0IHNlY29uZHNMZWZ0T2ZMZXZlbCA9IHRoaXMuc3RhdGUubGV2ZWwuc2Vjb25kc0xlZnRPZkxldmVsIC0gMC4yXG4gICAgICAgICAgaWYgKHNlY29uZHNMZWZ0T2ZMZXZlbCA8IDApIHtcbiAgICAgICAgICAgIC8vIEZpbmlzaCBnYW1lXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbW9kZTogTU9ERV9GSU5JU0hFRCxcbiAgICAgICAgICAgICAgbGV2ZWw6IG51bGwsXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBSZXNldCBnYW1lIGFmdGVyIDVzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kZTogTU9ERV9XQUlUSU5HX1RPX1NUQVJUXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4xKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5zdGF0ZS5wb2ludHMgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGxldmVsOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5sZXZlbCxcbiAgICAgICAgICAgICAgICBzZWNvbmRzTGVmdE9mTGV2ZWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIE1PREVfRklOSVNIRUQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0RW1vdGlvbihlbW90aW9uKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vZGUpIHtcbiAgICAgIGNhc2UgTU9ERV9XQUlUSU5HX1RPX1NUQVJUOlxuICAgICAgICBpZiAoZW1vdGlvbiA9PSBFTU9USU9OX0hBUFBZKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBNT0RFX1BMQVlJTkdfTEVWRUwsXG4gICAgICAgICAgICBwb2ludHM6IDAsXG4gICAgICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgICBzdGFydGVkQXQ6IERhdGVUaW1lLmxvY2FsKCksXG4gICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbDogR0FNRV9MRU5HVEhfSU5fU0VDT05EU1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUmVuZGVyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21vZGUsIGxldmVsLCBwb2ludHN9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IG1haW4gPSBudWxsXG4gICAgbGV0IGJhY2tncm91bmRFZmZlY3QgPSBudWxsXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZVdhaXRpbmdUb1N0YXJ0IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICBtYWluID0gPFNjZW5lTGV2ZWwgbGV2ZWw9ezB9IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9GSU5JU0hFRDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZUZpbmlzaGVkIHBvaW50cz17dGhpcy5zdGF0ZS5wb2ludHN9IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnZmlyZXdvcmtzJ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57Q1NTfTwvc3R5bGU+XG4gICAgICAgIFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+Q29tcHV0YXMgRW1vamkgR2FtZSE8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMCw5MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvbGliL3Byb3Rvbi5taW4uanNcIi8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8TGV2ZWxQcm9ncmVzc0JhciBzZWNvbmRzTGVmdD17bGV2ZWwgPyBsZXZlbC5zZWNvbmRzTGVmdE9mTGV2ZWwgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzVG90YWw9e0dBTUVfTEVOR1RIX0lOX1NFQ09ORFN9Lz5cblxuICAgICAgICB7bGV2ZWwgPyA8U2NvcmVEaXNwbGF5IHNjb3JlPXtwb2ludHN9Lz4gOiBudWxsfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuICAgICAgICAgIDxQYXJ0aWNsZUFyZWEgZWZmZWN0PXtiYWNrZ3JvdW5kRWZmZWN0fSAvPlxuXG4gICAgICAgICAge21haW59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxEZWJ1Z0NvbnRyb2xzIG9uSW5wdXRFbW90aW9uPXt0aGlzLmhhbmRsZUlucHV0RW1vdGlvbi5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdfQ== */\n/*@ sourceURL=pages/index.jsx */");
CSS.__hash = "1249369210";
CSS.__scoped = "html.jsx-1974858171,body.jsx-1974858171,#__next.jsx-1974858171,.board.jsx-1974858171{height:100%;font-family:Roboto,sans-serif;}body.jsx-1974858171{background:black;margin:0;}.game.jsx-1974858171{position:absolute;left:0;right:0;bottom:0;top:5vh;}.waiting-to-start.jsx-1974858171{margin:auto;top:50%;}.emoji.jsx-1974858171{display:block;-webkit-transition:opacity 0.2s linear,-webkit-transform 0.2s linear;-webkit-transition:opacity 0.2s linear,transform 0.2s linear;transition:opacity 0.2s linear,transform 0.2s linear;}.jsx-1974858171::selection{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmUsQUFHZSxBQUtLLEFBS0MsQUFRTixBQUtFLEFBS1csWUEzQk0sQUFrQnZCLEVBSzhDLEdBbEI3QyxDQUtGLEVBU1QsR0FTQSxFQWpCVSxDQUxWLE9BTVcsU0FYWCxBQVlVLFFBQ1YsbUpBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVBcmVhJ1xuaW1wb3J0IERlYnVnQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZWJ1Z0NvbnRyb2xzJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgTGV2ZWxQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCwgU2NlbmVXYWl0aW5nVG9TdGFydCwgU2NlbmVMZXZlbCwgU2NlbmVGaW5pc2hlZCwgR0FNRV9MRU5HVEhfSU5fU0VDT05EUyB9IGZyb20gJy4uL2dhbWUnXG5pbXBvcnQgU2NvcmVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmVEaXNwbGF5JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmNvbnN0IE1PREVfV0FJVElOR19UT19TVEFSVCA9ICdXQUlUSU5HX1RPX1NUQVJUJ1xuY29uc3QgTU9ERV9QTEFZSU5HX0xFVkVMID0gJ1BMQVlJTkdfTEVWRUwnXG5jb25zdCBNT0RFX0ZJTklTSEVEID0gJ0ZJTklTSEVEJ1xuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlQsXG4gIGxldmVsOiBudWxsLFxufVxuXG5jb25zdCBDU1MgPSBjc3NgXG5odG1sLCBib2R5LCAjX19uZXh0LCAuYm9hcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgbWFyZ2luOiAwO1xufVxuXG4uZ2FtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiA1dmg7XG59XG5cbi53YWl0aW5nLXRvLXN0YXJ0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDUwJTtcbn1cblxuLmVtb2ppIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXIsIHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuYFxuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0gX0RlZmF1bHRTdGF0ZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVHYW1lVGljaygpXG4gICAgfSwgMjAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gRXZlbnQgaGFuZGxlcnNcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIGhhbmRsZUdhbWVUaWNrKCkge1xuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vZGUpIHtcbiAgICAgICAgY2FzZSBNT0RFX1dBSVRJTkdfVE9fU1RBUlQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgXG4gICAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICAgIGNvbnN0IHNlY29uZHNMZWZ0T2ZMZXZlbCA9IHRoaXMuc3RhdGUubGV2ZWwuc2Vjb25kc0xlZnRPZkxldmVsIC0gMC4yXG4gICAgICAgICAgaWYgKHNlY29uZHNMZWZ0T2ZMZXZlbCA8IDApIHtcbiAgICAgICAgICAgIC8vIEZpbmlzaCBnYW1lXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbW9kZTogTU9ERV9GSU5JU0hFRCxcbiAgICAgICAgICAgICAgbGV2ZWw6IG51bGwsXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBSZXNldCBnYW1lIGFmdGVyIDVzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kZTogTU9ERV9XQUlUSU5HX1RPX1NUQVJUXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4xKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5zdGF0ZS5wb2ludHMgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGxldmVsOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5sZXZlbCxcbiAgICAgICAgICAgICAgICBzZWNvbmRzTGVmdE9mTGV2ZWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIE1PREVfRklOSVNIRUQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0RW1vdGlvbihlbW90aW9uKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vZGUpIHtcbiAgICAgIGNhc2UgTU9ERV9XQUlUSU5HX1RPX1NUQVJUOlxuICAgICAgICBpZiAoZW1vdGlvbiA9PSBFTU9USU9OX0hBUFBZKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBNT0RFX1BMQVlJTkdfTEVWRUwsXG4gICAgICAgICAgICBwb2ludHM6IDAsXG4gICAgICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgICBzdGFydGVkQXQ6IERhdGVUaW1lLmxvY2FsKCksXG4gICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbDogR0FNRV9MRU5HVEhfSU5fU0VDT05EU1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUmVuZGVyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21vZGUsIGxldmVsLCBwb2ludHN9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IG1haW4gPSBudWxsXG4gICAgbGV0IGJhY2tncm91bmRFZmZlY3QgPSBudWxsXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZVdhaXRpbmdUb1N0YXJ0IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICBtYWluID0gPFNjZW5lTGV2ZWwgbGV2ZWw9ezB9IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9GSU5JU0hFRDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZUZpbmlzaGVkIHBvaW50cz17dGhpcy5zdGF0ZS5wb2ludHN9IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnZmlyZXdvcmtzJ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57Q1NTfTwvc3R5bGU+XG4gICAgICAgIFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+Q29tcHV0YXMgRW1vamkgR2FtZSE8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMCw5MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvbGliL3Byb3Rvbi5taW4uanNcIi8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8TGV2ZWxQcm9ncmVzc0JhciBzZWNvbmRzTGVmdD17bGV2ZWwgPyBsZXZlbC5zZWNvbmRzTGVmdE9mTGV2ZWwgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzVG90YWw9e0dBTUVfTEVOR1RIX0lOX1NFQ09ORFN9Lz5cblxuICAgICAgICB7bGV2ZWwgPyA8U2NvcmVEaXNwbGF5IHNjb3JlPXtwb2ludHN9Lz4gOiBudWxsfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuICAgICAgICAgIDxQYXJ0aWNsZUFyZWEgZWZmZWN0PXtiYWNrZ3JvdW5kRWZmZWN0fSAvPlxuXG4gICAgICAgICAge21haW59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxEZWJ1Z0NvbnRyb2xzIG9uSW5wdXRFbW90aW9uPXt0aGlzLmhhbmRsZUlucHV0RW1vdGlvbi5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdfQ== */\n/*@ sourceURL=pages/index.jsx */";
CSS.__scopedHash = "1974858171";

var Game =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game() {
    var _this;

    _classCallCheck(this, Game);

    _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));
    _this.state = _DefaultState;
    return _this;
  }

  _createClass(Game, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this._interval = setInterval(function () {
        _this2.handleGameTick();
      }, 200);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this._interval);
    } ////////////////////////////////////////////////////////////////////////////
    // Event handlers
    ////////////////////////////////////////////////////////////////////////////

  }, {
    key: "handleGameTick",
    value: function handleGameTick() {
      var _this3 = this;

      switch (this.state.mode) {
        case MODE_WAITING_TO_START:
          break;

        case MODE_PLAYING_LEVEL:
          var secondsLeftOfLevel = this.state.level.secondsLeftOfLevel - 0.2;

          if (secondsLeftOfLevel < 0) {
            // Finish game
            this.setState({
              mode: MODE_FINISHED,
              level: null
            }); // Reset game after 5s

            setTimeout(function () {
              _this3.setState({
                mode: MODE_WAITING_TO_START
              });
            }, 5000);
          } else {
            if (Math.random() < 0.1) {
              this.setState({
                points: this.state.points + Math.floor(Math.random() * 10)
              });
            }

            this.setState({
              level: _objectSpread({}, this.state.level, {
                secondsLeftOfLevel: secondsLeftOfLevel
              })
            });
          }

          break;

        case MODE_FINISHED:
          break;

        default:
          break;
      }
    }
  }, {
    key: "handleInputEmotion",
    value: function handleInputEmotion(emotion) {
      switch (this.state.mode) {
        case MODE_WAITING_TO_START:
          if (emotion == __WEBPACK_IMPORTED_MODULE_7__game__["d" /* EMOTION_HAPPY */]) {
            this.setState({
              mode: MODE_PLAYING_LEVEL,
              points: 0,
              level: {
                startedAt: __WEBPACK_IMPORTED_MODULE_9_luxon__["DateTime"].local(),
                secondsLeftOfLevel: __WEBPACK_IMPORTED_MODULE_7__game__["g" /* GAME_LENGTH_IN_SECONDS */]
              }
            });
          }

          break;

        default:
          break;
      }
    } ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          mode = _state.mode,
          level = _state.level,
          points = _state.points;
      var main = null;
      var backgroundEffect = null;

      switch (mode) {
        case MODE_WAITING_TO_START:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["j" /* SceneWaitingToStart */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            }
          });
          backgroundEffect = 'bubbles';
          break;

        case MODE_PLAYING_LEVEL:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["i" /* SceneLevel */], {
            level: 0,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            }
          });
          backgroundEffect = 'bubbles';
          break;

        case MODE_FINISHED:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["h" /* SceneFinished */], {
            points: this.state.points,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            }
          });
          backgroundEffect = 'fireworks';
          break;

        default:
          break;
      }

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "board",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__hash,
        css: CSS
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, "Computas Emoji Game!"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:400,500,700,900",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("script", {
        src: "/static/lib/proton.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_LevelProgressBar__["a" /* default */], {
        secondsLeft: level ? level.secondsLeftOfLevel : null,
        secondsTotal: __WEBPACK_IMPORTED_MODULE_7__game__["g" /* GAME_LENGTH_IN_SECONDS */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }), level ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ScoreDisplay__["a" /* default */], {
        score: points,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }) : null, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "game",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_ParticleArea__["a" /* default */], {
        effect: backgroundEffect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }), main), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_DebugControls__["a" /* default */], {
        onInputEmotion: this.handleInputEmotion.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Game;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

var _default = Game;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MODE_WAITING_TO_START, "MODE_WAITING_TO_START", "/Users/han/Projects/facegame/pages/index.jsx");
  reactHotLoader.register(MODE_PLAYING_LEVEL, "MODE_PLAYING_LEVEL", "/Users/han/Projects/facegame/pages/index.jsx");
  reactHotLoader.register(MODE_FINISHED, "MODE_FINISHED", "/Users/han/Projects/facegame/pages/index.jsx");
  reactHotLoader.register(_DefaultState, "_DefaultState", "/Users/han/Projects/facegame/pages/index.jsx");
  reactHotLoader.register(CSS, "CSS", "/Users/han/Projects/facegame/pages/index.jsx");
  reactHotLoader.register(Game, "Game", "/Users/han/Projects/facegame/pages/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/han/Projects/facegame/pages/index.jsx");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.8f73358cbd2fdc7cb766.hot-update.js.map