module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DebugControls.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__("./game/index.js");
var _jsxFileName = "/Users/han/Projects/facegame/components/DebugControls.jsx";


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
        css: ".panel.jsx-2813052045{height:50px;position:absolute;z-order:1;bottom:30px;left:0;right:0;}.button-group.jsx-2813052045{margin:auto;width:250px;}button.jsx-2813052045{font-size:30px;display:inline-block;background-color:grey;width:50px;height:40px;}button.jsx-2813052045:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGVidWdDb250cm9scy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZTRCLEFBR2lDLEFBU0EsQUFLRyxBQVFGLFlBckJLLEFBU04sQ0FhaEIsRUFSeUIsU0FKekIsTUFUYyxNQWNZLElBYlYsWUFDTCxNQWFJLENBWkgsUUFDWixFQVlnQixZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzL0RlYnVnQ29udHJvbHMuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBFTU9USU9OX0NPTlRFTlQsIEVNT1RJT05fQU5HUlksIEVNT1RJT05fU0FELCBFTU9USU9OX0hBUFBZLCBFTU9USU9OX1NVUFJJU0VEIH0gZnJvbSAnLi4vZ2FtZSdcblxuY2xhc3MgRGVidWdDb250cm9scyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICAgIGhhbmRsZUNsaWNrKGVtb3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0RW1vdGlvbihlbW90aW9uKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB6LW9yZGVyOiAxO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5idXR0b24tZ3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKEVNT1RJT05fQ09OVEVOVCl9PvCfmJA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKEVNT1RJT05fSEFQUFkpfT7wn5iBPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhFTU9USU9OX1NBRCl9PvCfmKk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKEVNT1RJT05fU1VQUklTRUQpfT7wn5iyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhFTU9USU9OX0FOR1JZKX0+8J+YoDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlYnVnQ29udHJvbHMiXX0= */\n/*@ sourceURL=components/DebugControls.jsx */"
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
      }, "\uD83D\uDE20")));
    }
  }]);

  return DebugControls;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (DebugControls);

/***/ }),

/***/ "./components/Emoji.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__("./game/index.js");
var _jsxFileName = "/Users/han/Projects/facegame/components/Emoji.jsx";

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
  }]);

  return Emoji;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Emoji);

/***/ }),

/***/ "./components/LevelProgressBar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/han/Projects/facegame/components/LevelProgressBar.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var CSS = new String(".level-progress-bar{position:relative;width:100vw;height:5vh;background:linear-gradient(to right,#CDD180,#529B88);}.meter{position:absolute;left:0;top:0;height:5vh;width:100vw;background:linear-gradient(to right,yellow,red);-webkit-transition:left 0.2s linear,opacity 0.4s ease-in-out;transition:left 0.2s linear,opacity 0.4s ease-in-out;}.meter.hidden{opacity:0;}p{position:absolute;left:2vh;top:0;line-height:5vh;margin-top:0;font-size:2vh;font-weight:400;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGV2ZWxQcm9ncmVzc0Jhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2UsQUFHdUIsQUFPQSxBQVVSLEFBSVEsVUFIdEIsUUFqQmdCLEFBT0wsQUFjRSxPQWJILEVBY0EsR0FyQkssQ0FRQSxFQWNLLFFBckJ1QyxDQVEzQyxPQWNDLEtBYnFDLFFBY3BDLGNBQ0UsZ0JBQ0osRUF4QmhCLFFBUzBELEVBZ0IxRCxnSEFmQSIsImZpbGUiOiJjb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXIuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDU1MgPSBjc3NgXG4ubGV2ZWwtcHJvZ3Jlc3MtYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNXZoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0NERDE4MCwgIzUyOUI4OCk7XG59XG5cbi5tZXRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogNXZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHllbGxvdywgcmVkKTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnMgbGluZWFyLCBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZXRlci5oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbnAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAydmg7XG4gICAgdG9wOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiA1dmg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmBcblxuXG5jbGFzcyBMZXZlbFByb2dyZXNzQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7c2Vjb25kc0xlZnQsIHNlY29uZHNUb3RhbH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBzZWNvbmRzTGVmdCAvIHNlY29uZHNUb3RhbCAqIDEwMFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLXByb2dyZXNzLWJhclwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e0NTU308L3N0eWxlPlxuXG4gICAgICAgICAgICAgICAge3NlY29uZHNMZWZ0ICE9PSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9ezF9IGNsYXNzTmFtZT1cIm1ldGVyXCIgc3R5bGU9e3tsZWZ0OiAnLScgKyBwcm9ncmVzcyArICd2dyd9fS8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXsyfT57c2Vjb25kc0xlZnQudG9GaXhlZCgwKX0gc2Vjb25kcyByZW1haW5pbmc8L3A+LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExldmVsUHJvZ3Jlc3NCYXIiXX0= */\n/*@ sourceURL=components/LevelProgressBar.jsx */");
CSS.__hash = "1146130547";
CSS.__scoped = ".level-progress-bar.jsx-2942962994{position:relative;width:100vw;height:5vh;background:linear-gradient(to right,#CDD180,#529B88);}.meter.jsx-2942962994{position:absolute;left:0;top:0;height:5vh;width:100vw;background:linear-gradient(to right,yellow,red);-webkit-transition:left 0.2s linear,opacity 0.4s ease-in-out;transition:left 0.2s linear,opacity 0.4s ease-in-out;}.meter.hidden.jsx-2942962994{opacity:0;}p.jsx-2942962994{position:absolute;left:2vh;top:0;line-height:5vh;margin-top:0;font-size:2vh;font-weight:400;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGV2ZWxQcm9ncmVzc0Jhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2UsQUFHdUIsQUFPQSxBQVVSLEFBSVEsVUFIdEIsUUFqQmdCLEFBT0wsQUFjRSxPQWJILEVBY0EsR0FyQkssQ0FRQSxFQWNLLFFBckJ1QyxDQVEzQyxPQWNDLEtBYnFDLFFBY3BDLGNBQ0UsZ0JBQ0osRUF4QmhCLFFBUzBELEVBZ0IxRCxnSEFmQSIsImZpbGUiOiJjb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXIuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDU1MgPSBjc3NgXG4ubGV2ZWwtcHJvZ3Jlc3MtYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNXZoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0NERDE4MCwgIzUyOUI4OCk7XG59XG5cbi5tZXRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogNXZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHllbGxvdywgcmVkKTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnMgbGluZWFyLCBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZXRlci5oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbnAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAydmg7XG4gICAgdG9wOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiA1dmg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmBcblxuXG5jbGFzcyBMZXZlbFByb2dyZXNzQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7c2Vjb25kc0xlZnQsIHNlY29uZHNUb3RhbH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBzZWNvbmRzTGVmdCAvIHNlY29uZHNUb3RhbCAqIDEwMFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLXByb2dyZXNzLWJhclwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e0NTU308L3N0eWxlPlxuXG4gICAgICAgICAgICAgICAge3NlY29uZHNMZWZ0ICE9PSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9ezF9IGNsYXNzTmFtZT1cIm1ldGVyXCIgc3R5bGU9e3tsZWZ0OiAnLScgKyBwcm9ncmVzcyArICd2dyd9fS8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXsyfT57c2Vjb25kc0xlZnQudG9GaXhlZCgwKX0gc2Vjb25kcyByZW1haW5pbmc8L3A+LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExldmVsUHJvZ3Jlc3NCYXIiXX0= */\n/*@ sourceURL=components/LevelProgressBar.jsx */";
CSS.__scopedHash = "2942962994";

var LevelProgressBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LevelProgressBar, _React$Component);

  function LevelProgressBar() {
    _classCallCheck(this, LevelProgressBar);

    return _possibleConstructorReturn(this, (LevelProgressBar.__proto__ || Object.getPrototypeOf(LevelProgressBar)).apply(this, arguments));
  }

  _createClass(LevelProgressBar, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          secondsLeft = _props.secondsLeft,
          secondsTotal = _props.secondsTotal;
      var progress = secondsLeft / secondsTotal * 100;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-".concat(CSS.__scopedHash) + " " + "level-progress-bar"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__scopedHash,
        css: CSS.__scoped
      }), secondsLeft !== null ? [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        key: 1,
        style: {
          left: '-' + progress + 'vw'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-".concat(CSS.__scopedHash) + " " + "meter"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        key: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-".concat(CSS.__scopedHash)
      }, secondsLeft.toFixed(0), " seconds remaining")] : null);
    }
  }]);

  return LevelProgressBar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LevelProgressBar);

/***/ }),

/***/ "./components/ParticleArea.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/han/Projects/facegame/components/ParticleArea.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ParticleArea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ParticleArea, _React$Component);

  function ParticleArea() {
    _classCallCheck(this, ParticleArea);

    return _possibleConstructorReturn(this, (ParticleArea.__proto__ || Object.getPrototypeOf(ParticleArea)).apply(this, arguments));
  }

  _createClass(ParticleArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Only include client side
      initializeProton(this.refs.container, this.refs.particles);

      this._enableEmitter();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.effect === this.props.effect) return;

      switch (prevProps.effect) {
        case 'bubbles':
          disableEmitter(BUBBLES);
          break;

        case 'fireworks':
          disableEmitter(FIREWORKS);
          break;

        default:
          break;
      }

      this._enableEmitter();
    }
  }, {
    key: "_enableEmitter",
    value: function _enableEmitter() {
      switch (this.props.effect) {
        case 'bubbles':
          enableEmitter(BUBBLES);
          break;

        case 'fireworks':
          enableEmitter(FIREWORKS);
          break;

        default:
          break;
      }
    }
  }, {
    key: "createExplosion",
    value: function createExplosion(x, y) {
      // Transform coordinate system
      x = (x / 100 + 0.5) * this.refs.container.clientWidth;
      y = (y / 100 + 0.5) * this.refs.container.clientHeight;

      _createExplosion(x, y);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      destroy(this.refs.particles);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        ref: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-3815973924" + " " + "background"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3815973924",
        css: "div.jsx-3815973924{position:absolute;left:0;right:0;bottom:0;top:0;z-index:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFydGljbGVBcmVhLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RDRCLEFBR3VDLGtCQUNYLE9BQ0MsUUFDQyxTQUNILE1BQ0ssV0FDZiIsImZpbGUiOiJjb21wb25lbnRzL1BhcnRpY2xlQXJlYS5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgUGFydGljbGVBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIE9ubHkgaW5jbHVkZSBjbGllbnQgc2lkZVxuICAgICAgICBpbml0aWFsaXplUHJvdG9uKHRoaXMucmVmcy5jb250YWluZXIsIHRoaXMucmVmcy5wYXJ0aWNsZXMpO1xuXG4gICAgICAgIHRoaXMuX2VuYWJsZUVtaXR0ZXIoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5lZmZlY3QgPT09IHRoaXMucHJvcHMuZWZmZWN0KVxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgc3dpdGNoIChwcmV2UHJvcHMuZWZmZWN0KSB7XG4gICAgICAgICAgICBjYXNlICdidWJibGVzJzpcbiAgICAgICAgICAgICAgICBkaXNhYmxlRW1pdHRlcihCVUJCTEVTKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdmaXJld29ya3MnOlxuICAgICAgICAgICAgICAgIGRpc2FibGVFbWl0dGVyKEZJUkVXT1JLUylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW5hYmxlRW1pdHRlcigpXG4gICAgfVxuXG4gICAgX2VuYWJsZUVtaXR0ZXIoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5lZmZlY3QpIHtcbiAgICAgICAgICAgIGNhc2UgJ2J1YmJsZXMnOlxuICAgICAgICAgICAgICAgIGVuYWJsZUVtaXR0ZXIoQlVCQkxFUylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZmlyZXdvcmtzJzpcbiAgICAgICAgICAgICAgICBlbmFibGVFbWl0dGVyKEZJUkVXT1JLUylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlRXhwbG9zaW9uKHgsIHkpIHtcbiAgICAgICAgLy8gVHJhbnNmb3JtIGNvb3JkaW5hdGUgc3lzdGVtXG4gICAgICAgIHggPSAoeCAvIDEwMCArIDAuNSkgKiB0aGlzLnJlZnMuY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICAgIHkgPSAoeSAvIDEwMCArIDAuNSkgKiB0aGlzLnJlZnMuY29udGFpbmVyLmNsaWVudEhlaWdodFxuICAgICAgICBfY3JlYXRlRXhwbG9zaW9uKHgsIHkpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGRlc3Ryb3kodGhpcy5yZWZzLnBhcnRpY2xlcylcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9XCJjb250YWluZXJcIiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPVwicGFydGljbGVzXCI+PC9jYW52YXM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgQlVCQkxFUyA9ICdCVUJCTEVTJ1xuY29uc3QgRklSRVdPUktTID0gJ0ZJUkVXT1JLUydcblxudmFyIF9hbGxFbWl0dGVycyA9IHt9O1xudmFyIF9wcm90b24gPSBudWxsO1xuY29uc3QgYnViYmxlQ29sb3JzID0gWycjNTI5Qjg4JywgJyNDREQxODAnLCAnI0ZGRkEzMicsICcjRkI2MjU1JywgJyNGQjRBNTMnLCAnI0ZGNEU1MCcsICcjRjlENDIzJ107XG5cbnZhciBpbml0aWFsaXplUHJvdG9uID0gbnVsbDtcbnZhciBlbmFibGVFbWl0dGVyID0gbnVsbDtcbnZhciBkaXNhYmxlRW1pdHRlciA9IG51bGw7XG52YXIgX2NyZWF0ZUV4cGxvc2lvbiA9IG51bGw7IFxuXG5pZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgY2xhc3MgUHJvdG9uVGFnIGV4dGVuZHMgUHJvdG9uLkluaXRpYWxpemUge1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHRhZykge1xuICAgICAgICAgICAgc3VwZXIoKVxuXG4gICAgICAgICAgICB0aGlzLnRhZyA9IHRhZ1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xuICAgICAgICAgICAgcGFydGljbGUudGFnID0gdGhpcy50YWdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRpYWxpemVQcm90b24gPSBmdW5jdGlvbihjb250YWluZXIsIGNhbnZhcykge1xuICAgICAgICBjYW52YXMud2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJywgeyBhbnRpYWxpYXM6IHRydWUsIHN0ZW5jaWw6IGZhbHNlLCBkZXB0aDogZmFsc2UsIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSB9KTtcbiAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGFya2VyXCI7XG5cbiAgICAgICAgY3JlYXRlUHJvdG9uKGNhbnZhcyk7XG4gICAgICAgIHRpY2soKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgX3Byb3Rvbi5kZXN0cm95KClcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlQnViYmxlRW1pdHRlcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBlbWl0dGVyID0gbmV3IFByb3Rvbi5FbWl0dGVyKCk7XG4gICAgICAgIGVtaXR0ZXIucmF0ZSA9IG5ldyBQcm90b24uUmF0ZShuZXcgUHJvdG9uLlNwYW4oMiwgOCksIG5ldyBQcm90b24uU3BhbiguMDUsIC4yKSk7XG4gICAgXG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLk1hc3MoMSkpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5SYWRpdXMoMjAsIDIwMCkpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5MaWZlKDIsIDQpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uUG9zaXRpb24obmV3IFByb3Rvbi5SZWN0Wm9uZSgwLCAwLCB3aWR0aCwgaGVpZ2h0KSkpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5Cb2R5KFsnL3N0YXRpYy9pbWFnZS9sb2dvLnBuZyddLCAxMjgpKTtcbiAgICBcbiAgICAgICAgZW1pdHRlci5hZGRCZWhhdmlvdXIobmV3IFByb3Rvbi5BbHBoYSgwLjIsIDAuOCwgSW5maW5pdHksIFByb3Rvbi5lYXNlT3V0Q3ViaWMpKTtcbiAgICAgICAgZW1pdHRlci5hZGRCZWhhdmlvdXIobmV3IFByb3Rvbi5TY2FsZSgxLCAwLCBJbmZpbml0eSwgUHJvdG9uLmVhc2VPdXRDdWJpYykpO1xuICAgICAgICBlbWl0dGVyLmFkZEJlaGF2aW91cihuZXcgUHJvdG9uLlJvdGF0ZSgwLCBuZXcgUHJvdG9uLlNwYW4oLTQsIDQpLCAndG8nLCBJbmZpbml0eSwgUHJvdG9uLmVhc2VPdXRDdWJpYykpO1xuICAgICAgICBlbWl0dGVyLmFkZEJlaGF2aW91cihuZXcgUHJvdG9uLkNvbG9yKGJ1YmJsZUNvbG9ycywgJ3JhbmRvbScpKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtaXR0ZXI6IGVtaXR0ZXJcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVGaXJld29ya3NFeHBsb3Npb25FbWl0dGVyKHgsIHksIHBhcnRpY2xlQ291bnQpIHtcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgUHJvdG9uLkVtaXR0ZXIoKTtcbiAgICAgICAgZW1pdHRlci5yYXRlID0gbmV3IFByb3Rvbi5SYXRlKHBhcnRpY2xlQ291bnQsIDEpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5NYXNzKDEpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uUmFkaXVzKDMsIDcpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uTGlmZSgxLCAzKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLlYobmV3IFByb3Rvbi5TcGFuKDUsIDgpLCBuZXcgUHJvdG9uLlNwYW4oMCwgMzYwKSwgJ3BvbGFyJykpO1xuICAgICAgICBcbiAgICAgICAgZW1pdHRlci5hZGRCZWhhdmlvdXIobmV3IFByb3Rvbi5SYW5kb21EcmlmdCgxMCwgMTAsIC4wNSkpO1xuICAgICAgICBlbWl0dGVyLmFkZEJlaGF2aW91cihuZXcgUHJvdG9uLkFscGhhKDEsIDApKTtcbiAgICAgICAgZW1pdHRlci5hZGRCZWhhdmlvdXIobmV3IFByb3Rvbi5HcmF2aXR5KDMpKTtcbiAgICAgICAgdmFyIGNvbG9yID0gTWF0aC5yYW5kb20oKSA+IC4zID8gUHJvdG9uLk1hdGhVdGlscy5yYW5kb21Db2xvcigpIDogJ3JhbmRvbSc7XG4gICAgICAgIGVtaXR0ZXIuYWRkQmVoYXZpb3VyKG5ldyBQcm90b24uQ29sb3IoY29sb3IpKTtcbiAgICAgICAgXG4gICAgICAgIGVtaXR0ZXIucC54ID0geDtcbiAgICAgICAgZW1pdHRlci5wLnkgPSB5O1xuICAgICAgICBlbWl0dGVyLmVtaXQoJ29uY2UnLCB0cnVlKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXJcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gb25QYXJ0aWNsZURlYWRNYWtlRmlyZXdvcmtzKHBhcnRpY2xlKSB7XG4gICAgICAgIGlmIChwYXJ0aWNsZS50YWcgPT09ICdmaXJld29yaycpIHtcbiAgICAgICAgICAgIF9wcm90b24uYWRkRW1pdHRlcihjcmVhdGVGaXJld29ya3NFeHBsb3Npb25FbWl0dGVyKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55LCBuZXcgUHJvdG9uLlNwYW4oMjUwLCAzMDApKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpcmV3b3Jrc0VtaXR0ZXIod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBsZXQgZW1pdHRlciA9IG5ldyBQcm90b24uRW1pdHRlcigpO1xuICAgICAgICBlbWl0dGVyLnJhdGUgPSBuZXcgUHJvdG9uLlJhdGUobmV3IFByb3Rvbi5TcGFuKDIsIDMpLCAwLjUpO1xuICAgICAgICBcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uTWFzcygxKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLlJhZGl1cygzLCA3KSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLlAobmV3IFByb3Rvbi5MaW5lWm9uZSgxMCwgaGVpZ2h0LCB3aWR0aCAtIDEwLCBoZWlnaHQpKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLkxpZmUoMC43NSwgMS4yKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLlYobmV3IFByb3Rvbi5TcGFuKDQsIDE1KSwgbmV3IFByb3Rvbi5TcGFuKDIsIDUsIHRydWUpLCAncG9sYXInKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uVGFnKCdmaXJld29yaycpKVxuICAgIFxuICAgICAgICBlbWl0dGVyLmFkZEJlaGF2aW91cihuZXcgUHJvdG9uLkdyYXZpdHkoMSkpO1xuICAgICAgICBlbWl0dGVyLmFkZEJlaGF2aW91cihuZXcgUHJvdG9uLkNvbG9yKCcjZmYwMDAwJywgJ3JhbmRvbScpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbWl0dGVyOiBlbWl0dGVyLFxuICAgICAgICAgICAgb25FbmFibGU6IChwcm90b24pID0+IHtcbiAgICAgICAgICAgICAgICBwcm90b24uYWRkRXZlbnRMaXN0ZW5lcihQcm90b24uUEFSVElDTEVfREVBRCwgb25QYXJ0aWNsZURlYWRNYWtlRmlyZXdvcmtzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRpc2FibGU6IChwcm90b24pID0+IHtcbiAgICAgICAgICAgICAgICBwcm90b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihQcm90b24uUEFSVElDTEVfREVBRCwgb25QYXJ0aWNsZURlYWRNYWtlRmlyZXdvcmtzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm90b24oY2FudmFzKSB7XG4gICAgICAgIF9wcm90b24gPSBuZXcgUHJvdG9uO1xuICAgICAgICBcbiAgICAgICAgX2FsbEVtaXR0ZXJzW0JVQkJMRVNdID0gY3JlYXRlQnViYmxlRW1pdHRlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgICAgIF9hbGxFbWl0dGVyc1tGSVJFV09SS1NdID0gY3JlYXRlRmlyZXdvcmtzRW1pdHRlcihjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgXG4gICAgICAgIGxldCByZW5kZXJlciA9IG5ldyBQcm90b24uV2ViR0xSZW5kZXJlcihjYW52YXMpO1xuICAgICAgICByZW5kZXJlci5vblByb3RvblVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDAsIDAsIDAsIDAuMilcbiAgICAgICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUIHwgdGhpcy5nbC5ERVBUSF9CVUZGRVJfQklUKVxuICAgICAgICB9O1xuICAgICAgICBfcHJvdG9uLmFkZFJlbmRlcmVyKHJlbmRlcmVyKTtcbiAgICB9XG4gICAgXG4gICAgZW5hYmxlRW1pdHRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgY29uc3QgZW1pdHRlciA9IF9hbGxFbWl0dGVyc1tuYW1lXVxuICAgICAgICBcbiAgICAgICAgaWYgKGVtaXR0ZXIub25FbmFibGUpXG4gICAgICAgICAgICBlbWl0dGVyLm9uRW5hYmxlKF9wcm90b24pXG5cbiAgICAgICAgZW1pdHRlci5lbWl0dGVyLmVtaXQoKVxuICAgICAgICBfcHJvdG9uLmFkZEVtaXR0ZXIoZW1pdHRlci5lbWl0dGVyKTtcbiAgICB9XG4gICAgXG4gICAgZGlzYWJsZUVtaXR0ZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBfYWxsRW1pdHRlcnNbbmFtZV1cbiAgICAgICAgZW1pdHRlci5lbWl0dGVyLnN0b3AoKVxuICAgICAgICBfcHJvdG9uLnJlbW92ZUVtaXR0ZXIoZW1pdHRlci5lbWl0dGVyKVxuXG4gICAgICAgIGlmIChlbWl0dGVyLm9uRGlzYWJsZSlcbiAgICAgICAgICAgIGVtaXR0ZXIub25EaXNhYmxlKF9wcm90b24pXG4gICAgfVxuXG4gICAgX2NyZWF0ZUV4cGxvc2lvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgX3Byb3Rvbi5hZGRFbWl0dGVyKGNyZWF0ZUZpcmV3b3Jrc0V4cGxvc2lvbkVtaXR0ZXIoeCwgeSwgbmV3IFByb3Rvbi5TcGFuKDEwMCwgMTIwKSkpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIF9wcm90b24udXBkYXRlKClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlQXJlYSJdfQ== */\n/*@ sourceURL=components/ParticleArea.jsx */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        ref: "particles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-3815973924"
      }));
    }
  }]);

  return ParticleArea;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var BUBBLES = 'BUBBLES';
var FIREWORKS = 'FIREWORKS';
var _allEmitters = {};
var _proton = null;
var bubbleColors = ['#529B88', '#CDD180', '#FFFA32', '#FB6255', '#FB4A53', '#FF4E50', '#F9D423'];
var initializeProton = null;
var enableEmitter = null;
var disableEmitter = null;
var _createExplosion = null;

if (process.browser) {
  var _destroy = function _destroy() {
    _proton.destroy();
  };

  var createBubbleEmitter = function createBubbleEmitter(width, height) {
    var emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(new Proton.Span(2, 8), new Proton.Span(.05, .2));
    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Radius(20, 200));
    emitter.addInitialize(new Proton.Life(2, 4));
    emitter.addInitialize(new Proton.Position(new Proton.RectZone(0, 0, width, height)));
    emitter.addInitialize(new Proton.Body(['/static/image/logo.png'], 128));
    emitter.addBehaviour(new Proton.Alpha(0.2, 0.8, Infinity, Proton.easeOutCubic));
    emitter.addBehaviour(new Proton.Scale(1, 0, Infinity, Proton.easeOutCubic));
    emitter.addBehaviour(new Proton.Rotate(0, new Proton.Span(-4, 4), 'to', Infinity, Proton.easeOutCubic));
    emitter.addBehaviour(new Proton.Color(bubbleColors, 'random'));
    return {
      emitter: emitter
    };
  };

  var createFireworksExplosionEmitter = function createFireworksExplosionEmitter(x, y, particleCount) {
    var emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(particleCount, 1);
    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Radius(3, 7));
    emitter.addInitialize(new Proton.Life(1, 3));
    emitter.addInitialize(new Proton.V(new Proton.Span(5, 8), new Proton.Span(0, 360), 'polar'));
    emitter.addBehaviour(new Proton.RandomDrift(10, 10, .05));
    emitter.addBehaviour(new Proton.Alpha(1, 0));
    emitter.addBehaviour(new Proton.Gravity(3));
    var color = Math.random() > .3 ? Proton.MathUtils.randomColor() : 'random';
    emitter.addBehaviour(new Proton.Color(color));
    emitter.p.x = x;
    emitter.p.y = y;
    emitter.emit('once', true);
    return emitter;
  };

  var onParticleDeadMakeFireworks = function onParticleDeadMakeFireworks(particle) {
    if (particle.tag === 'firework') {
      _proton.addEmitter(createFireworksExplosionEmitter(particle.p.x, particle.p.y, new Proton.Span(250, 300)));
    }
  };

  var createFireworksEmitter = function createFireworksEmitter(width, height) {
    var emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(new Proton.Span(2, 3), 0.5);
    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Radius(3, 7));
    emitter.addInitialize(new Proton.P(new Proton.LineZone(10, height, width - 10, height)));
    emitter.addInitialize(new Proton.Life(0.75, 1.2));
    emitter.addInitialize(new Proton.V(new Proton.Span(4, 15), new Proton.Span(2, 5, true), 'polar'));
    emitter.addInitialize(new ProtonTag('firework'));
    emitter.addBehaviour(new Proton.Gravity(1));
    emitter.addBehaviour(new Proton.Color('#ff0000', 'random'));
    return {
      emitter: emitter,
      onEnable: function onEnable(proton) {
        proton.addEventListener(Proton.PARTICLE_DEAD, onParticleDeadMakeFireworks);
      },
      onDisable: function onDisable(proton) {
        proton.removeEventListener(Proton.PARTICLE_DEAD, onParticleDeadMakeFireworks);
      }
    };
  };

  var createProton = function createProton(canvas) {
    _proton = new Proton();
    _allEmitters[BUBBLES] = createBubbleEmitter(canvas.width, canvas.height);
    _allEmitters[FIREWORKS] = createFireworksEmitter(canvas.width, canvas.height);
    var renderer = new Proton.WebGLRenderer(canvas);

    renderer.onProtonUpdate = function () {
      this.gl.clearColor(0, 0, 0, 0.2);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    };

    _proton.addRenderer(renderer);
  };

  var tick = function tick() {
    requestAnimationFrame(tick);

    _proton.update();
  };

  var ProtonTag =
  /*#__PURE__*/
  function (_Proton$Initialize) {
    _inherits(ProtonTag, _Proton$Initialize);

    function ProtonTag(tag) {
      var _this;

      _classCallCheck(this, ProtonTag);

      _this = _possibleConstructorReturn(this, (ProtonTag.__proto__ || Object.getPrototypeOf(ProtonTag)).call(this));
      _this.tag = tag;
      return _this;
    }

    _createClass(ProtonTag, [{
      key: "initialize",
      value: function initialize(particle) {
        particle.tag = this.tag;
      }
    }]);

    return ProtonTag;
  }(Proton.Initialize);

  initializeProton = function initializeProton(container, canvas) {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    var ctx = canvas.getContext('webgl', {
      antialias: true,
      stencil: false,
      depth: false,
      preserveDrawingBuffer: true
    });
    ctx.globalCompositeOperation = "darker";
    createProton(canvas);
    tick();
  };

  enableEmitter = function enableEmitter(name) {
    var emitter = _allEmitters[name];
    if (emitter.onEnable) emitter.onEnable(_proton);
    emitter.emitter.emit();

    _proton.addEmitter(emitter.emitter);
  };

  disableEmitter = function disableEmitter(name) {
    var emitter = _allEmitters[name];
    emitter.emitter.stop();

    _proton.removeEmitter(emitter.emitter);

    if (emitter.onDisable) emitter.onDisable(_proton);
  };

  _createExplosion = function _createExplosion(x, y) {
    _proton.addEmitter(createFireworksExplosionEmitter(x, y, new Proton.Span(100, 120)));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (ParticleArea);

/***/ }),

/***/ "./components/ScoreDisplay.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/han/Projects/facegame/components/ScoreDisplay.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var CSS = new String(".score-display{position:absolute;top:2vh;left:2vh;font-size:5vh;color:white;}strong{font-weight:800;}small{margin-left:0.5em;font-size:1vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2NvcmVEaXNwbGF5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZSxBQUd1QixBQVFGLEFBSUUsZ0JBSHRCLEVBUlksQUFZTSxRQVhMLE1BWWIsR0FYa0IsY0FDRixZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzL1Njb3JlRGlzcGxheS5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IENTUyA9IGNzc2Bcbi5zY29yZS1kaXNwbGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAydmg7XG4gICAgbGVmdDogMnZoO1xuICAgIGZvbnQtc2l6ZTogNXZoO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG5zbWFsbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMXZoO1xufVxuYFxuXG5cbmNsYXNzIFNjb3JlRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3Njb3JlfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57Q1NTfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57c2NvcmV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5wb2ludHM8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZURpc3BsYXkiXX0= */\n/*@ sourceURL=components/ScoreDisplay.jsx */");
CSS.__hash = "3882420741";
CSS.__scoped = ".score-display.jsx-552956580{position:absolute;top:2vh;left:2vh;font-size:5vh;color:white;}strong.jsx-552956580{font-weight:800;}small.jsx-552956580{margin-left:0.5em;font-size:1vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2NvcmVEaXNwbGF5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZSxBQUd1QixBQVFGLEFBSUUsZ0JBSHRCLEVBUlksQUFZTSxRQVhMLE1BWWIsR0FYa0IsY0FDRixZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzL1Njb3JlRGlzcGxheS5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IENTUyA9IGNzc2Bcbi5zY29yZS1kaXNwbGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAydmg7XG4gICAgbGVmdDogMnZoO1xuICAgIGZvbnQtc2l6ZTogNXZoO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG5zbWFsbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMXZoO1xufVxuYFxuXG5cbmNsYXNzIFNjb3JlRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3Njb3JlfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57Q1NTfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57c2NvcmV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5wb2ludHM8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZURpc3BsYXkiXX0= */\n/*@ sourceURL=components/ScoreDisplay.jsx */";
CSS.__scopedHash = "552956580";

var ScoreDisplay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScoreDisplay, _React$Component);

  function ScoreDisplay() {
    _classCallCheck(this, ScoreDisplay);

    return _possibleConstructorReturn(this, (ScoreDisplay.__proto__ || Object.getPrototypeOf(ScoreDisplay)).apply(this, arguments));
  }

  _createClass(ScoreDisplay, [{
    key: "render",
    value: function render() {
      var score = this.props.score;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-".concat(CSS.__scopedHash) + " " + "score-display"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__scopedHash,
        css: CSS.__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-".concat(CSS.__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-".concat(CSS.__scopedHash)
      }, score), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-".concat(CSS.__scopedHash)
      }, "points")));
    }
  }]);

  return ScoreDisplay;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ScoreDisplay);

/***/ }),

/***/ "./game/SceneFinished.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Emoji__ = __webpack_require__("./components/Emoji.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game__ = __webpack_require__("./game/index.js");
var _jsxFileName = "/Users/han/Projects/facegame/game/SceneFinished.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CSS = new String(".finished{margin-top:25vh;font-size:4vh;text-align:center;color:white;}small{font-size:2vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVGaW5pc2hlZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHcUIsQUFPRixjQUNsQixFQVBrQixjQUNJLGtCQUNOLFlBQ2hCIiwiZmlsZSI6ImdhbWUvU2NlbmVGaW5pc2hlZC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCB9IGZyb20gJy4uL2dhbWUnXG5cbmNvbnN0IENTUyA9IGNzc2Bcbi5maW5pc2hlZCB7XG4gICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICBmb250LXNpemU6IDR2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAydmg7XG59XG5gXG5cbmNsYXNzIFNjZW5lRmluaXNoZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3Qge3BvaW50c30gPSB0aGlzLnByb3BzXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbmlzaGVkXCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57Q1NTfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgICA8aDE+Q29uZ3JhdHMhPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5Zb3Ugc2NvcmVkIDxzdHJvbmc+e3BvaW50c308L3N0cm9uZz4gcG9pbnRzITwvcD5cbiAgICAgICAgICAgICAgICA8cD48c21hbGw+R2FtZSB3aWxsIHJlc2V0IGluIGEgZmV3IHNlY29uZHMgLi4uPC9zbWFsbD48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVGaW5pc2hlZCJdfQ== */\n/*@ sourceURL=game/SceneFinished.jsx */");
CSS.__hash = "2779306813";
CSS.__scoped = ".finished.jsx-3440635772{margin-top:25vh;font-size:4vh;text-align:center;color:white;}small.jsx-3440635772{font-size:2vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVGaW5pc2hlZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHcUIsQUFPRixjQUNsQixFQVBrQixjQUNJLGtCQUNOLFlBQ2hCIiwiZmlsZSI6ImdhbWUvU2NlbmVGaW5pc2hlZC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCB9IGZyb20gJy4uL2dhbWUnXG5cbmNvbnN0IENTUyA9IGNzc2Bcbi5maW5pc2hlZCB7XG4gICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICBmb250LXNpemU6IDR2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAydmg7XG59XG5gXG5cbmNsYXNzIFNjZW5lRmluaXNoZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3Qge3BvaW50c30gPSB0aGlzLnByb3BzXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbmlzaGVkXCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57Q1NTfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgICA8aDE+Q29uZ3JhdHMhPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5Zb3Ugc2NvcmVkIDxzdHJvbmc+e3BvaW50c308L3N0cm9uZz4gcG9pbnRzITwvcD5cbiAgICAgICAgICAgICAgICA8cD48c21hbGw+R2FtZSB3aWxsIHJlc2V0IGluIGEgZmV3IHNlY29uZHMgLi4uPC9zbWFsbD48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVGaW5pc2hlZCJdfQ== */\n/*@ sourceURL=game/SceneFinished.jsx */";
CSS.__scopedHash = "3440635772";

var SceneFinished =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SceneFinished, _React$Component);

  function SceneFinished() {
    _classCallCheck(this, SceneFinished);

    return _possibleConstructorReturn(this, (SceneFinished.__proto__ || Object.getPrototypeOf(SceneFinished)).apply(this, arguments));
  }

  _createClass(SceneFinished, [{
    key: "render",
    value: function render() {
      var points = this.props.points;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-".concat(CSS.__scopedHash) + " " + "finished"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__scopedHash,
        css: CSS.__scoped
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-".concat(CSS.__scopedHash)
      }, "Congrats!"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-".concat(CSS.__scopedHash)
      }, "You scored ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-".concat(CSS.__scopedHash)
      }, points), " points!"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-".concat(CSS.__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-".concat(CSS.__scopedHash)
      }, "Game will reset in a few seconds ...")));
    }
  }]);

  return SceneFinished;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SceneFinished);

/***/ }),

/***/ "./game/SceneLevel.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Emoji__ = __webpack_require__("./components/Emoji.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game__ = __webpack_require__("./game/index.js");
var _jsxFileName = "/Users/han/Projects/facegame/game/SceneLevel.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




var CSS = new String(".level{position:absolute;left:50%;top:50%;width:100%;height:100%;}.level .emoji{position:absolute;font-size:60px;}.level .emoji.dead{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHdUIsQUFRQSxBQUtSLFVBQ2QsUUFiYSxBQVFNLFNBUFAsTUFRWixFQVBlLFdBQ0MsWUFDaEIiLCJmaWxlIjoiZ2FtZS9TY2VuZUxldmVsLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuL1Byb2plY3RzL2ZhY2VnYW1lIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRW1vamkgZnJvbSAnLi4vY29tcG9uZW50cy9FbW9qaSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgeyBBTExfRU1PVElPTlMsIEVNT1RJT05fQ09OVEVOVCwgRU1PVElPTl9BTkdSWSwgRU1PVElPTl9TQUQsIEVNT1RJT05fSEFQUFksIEVNT1RJT05fU1VQUklTRUQgfSBmcm9tICcuLi9nYW1lJ1xuXG5jb25zdCBDU1MgPSBjc3NgXG4ubGV2ZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGV2ZWwgLmVtb2ppIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4ubGV2ZWwgLmVtb2ppLmRlYWQge1xuICAgIG9wYWNpdHk6IDA7XG59XG5gXG5cbmNvbnN0IF9EZWZhdWx0U3RhdGUgPSB7XG4gICAgZW1vamlzOiBbXSxcbiAgICBlbmRpbmc6IGZhbHNlXG59XG5cbmNsYXNzIFNjZW5lTGV2ZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9EZWZhdWx0U3RhdGVcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKCdsZXZlbCAnICsgcHJldlByb3BzLmxldmVsICsgJyAhPSAnICsgdGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgaWYgKHByZXZQcm9wcy5sZXZlbCAhPT0gdGhpcy5wcm9wcy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhc3RJbnB1dEVtb3Rpb24gIT09IHByZXZQcm9wcy5sYXN0SW5wdXRFbW90aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBraWxsQ291bnQgPSB0aGlzLl9raWxsQWxsRW1vamlzKHRoaXMucHJvcHMubGFzdElucHV0RW1vdGlvbilcbiAgICAgICAgICAgIGlmIChraWxsQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNjb3JlUG9pbnRzKGtpbGxDb3VudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVtb2ppcy5maWx0ZXIoZSA9PiAhZS5kZWFkKS5sZW5ndGggPT09IDAgJiYgIXRoaXMuc3RhdGUuZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlbmRpbmc6IHRydWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMub25MZXZlbENvbXBsZXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckVtb2ppKGUsIGkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxFbW9qaSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgZW1vdGlvbj17ZS5lbW90aW9ufVxuICAgICAgICAgICAgICAgICAgIGRlYWQ9e2UuZGVhZH1cbiAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogZS54ICsgJ3Z3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogZS55ICsgJ3ZoJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtb2ppcy5tYXAodGhpcy5yZW5kZXJFbW9qaS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgdGhpcy5fa2lsbEFsbEVtb2ppcygpXG4gICAgICAgIGlmIChsZXZlbE5vID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUVtb2ppcyg1KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDEwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDIwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDMwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDUpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDQwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZ2VuZXJhdGVFbW9qaXMoNTApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbmRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG4gICAgICAgIGxldCBlbW9qaXMgPSBbLi4udGhpcy5zdGF0ZS5lbW9qaXNdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZW1vamlzLnB1c2godGhpcy5fbmV3RW1vamkoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1vamlzOiBlbW9qaXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfbmV3RW1vamkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbW90aW9uOiB0aGlzLl9yYW5kb21FbW90aW9uKCksXG4gICAgICAgICAgICB4OiAtMzAgKyBNYXRoLnJhbmRvbSgpICogNjAsXG4gICAgICAgICAgICB5OiAtMzAgKyBNYXRoLnJhbmRvbSgpICogNjAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfa2lsbEFsbEVtb2ppcyhlbW90aW9uVG9LaWxsID0gJycpIHtcbiAgICAgICAgbGV0IGVtb2ppcyA9IFsuLi50aGlzLnN0YXRlLmVtb2ppc11cbiAgICAgICAgbGV0IGtpbGxDb3VudCA9IDBcbiAgICAgICAgaWYgKGVtb3Rpb25Ub0tpbGwgPT09ICcnKSB7XG4gICAgICAgICAgICBraWxsQ291bnQgPSBlbW9qaXMuZmlsdGVyKGUgPT4gIWUuZGVhZCkubGVuZ3RoXG4gICAgICAgICAgICBlbW9qaXMgPSBlbW9qaXMubWFwKHRoaXMuX2tpbGxFbW9qaS5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gS2lsbCBzcGVjaWZpYyB0eXBlXG4gICAgICAgICAgICBlbW9qaXMgPSBlbW9qaXMubWFwKGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmVtb3Rpb24gPT09IGVtb3Rpb25Ub0tpbGwgJiYgIWUuZGVhZCkge1xuICAgICAgICAgICAgICAgICAgICBraWxsQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2lsbEVtb2ppKGUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtb2ppczogZW1vamlzXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGtpbGxDb3VudFxuICAgIH1cblxuICAgIF9raWxsRW1vamkoZW1vamkpIHtcbiAgICAgICAgaWYgKCFlbW9qaS5kZWFkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUGFydGljbGVFZmZlY3QoZW1vamkueCwgZW1vamkueSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5lbW9qaSxcbiAgICAgICAgICAgIGRlYWQ6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yYW5kb21FbW90aW9uKCkge1xuICAgICAgICByZXR1cm4gQUxMX0VNT1RJT05TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEFMTF9FTU9USU9OUy5sZW5ndGgpXVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVMZXZlbCJdfQ== */\n/*@ sourceURL=game/SceneLevel.jsx */");
CSS.__hash = "701349969";
CSS.__scoped = ".level.jsx-3928734800{position:absolute;left:50%;top:50%;width:100%;height:100%;}.level.jsx-3928734800 .emoji.jsx-3928734800{position:absolute;font-size:60px;}.level.jsx-3928734800 .emoji.dead.jsx-3928734800{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHdUIsQUFRQSxBQUtSLFVBQ2QsUUFiYSxBQVFNLFNBUFAsTUFRWixFQVBlLFdBQ0MsWUFDaEIiLCJmaWxlIjoiZ2FtZS9TY2VuZUxldmVsLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuL1Byb2plY3RzL2ZhY2VnYW1lIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRW1vamkgZnJvbSAnLi4vY29tcG9uZW50cy9FbW9qaSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgeyBBTExfRU1PVElPTlMsIEVNT1RJT05fQ09OVEVOVCwgRU1PVElPTl9BTkdSWSwgRU1PVElPTl9TQUQsIEVNT1RJT05fSEFQUFksIEVNT1RJT05fU1VQUklTRUQgfSBmcm9tICcuLi9nYW1lJ1xuXG5jb25zdCBDU1MgPSBjc3NgXG4ubGV2ZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGV2ZWwgLmVtb2ppIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4ubGV2ZWwgLmVtb2ppLmRlYWQge1xuICAgIG9wYWNpdHk6IDA7XG59XG5gXG5cbmNvbnN0IF9EZWZhdWx0U3RhdGUgPSB7XG4gICAgZW1vamlzOiBbXSxcbiAgICBlbmRpbmc6IGZhbHNlXG59XG5cbmNsYXNzIFNjZW5lTGV2ZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9EZWZhdWx0U3RhdGVcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKCdsZXZlbCAnICsgcHJldlByb3BzLmxldmVsICsgJyAhPSAnICsgdGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgaWYgKHByZXZQcm9wcy5sZXZlbCAhPT0gdGhpcy5wcm9wcy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhc3RJbnB1dEVtb3Rpb24gIT09IHByZXZQcm9wcy5sYXN0SW5wdXRFbW90aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBraWxsQ291bnQgPSB0aGlzLl9raWxsQWxsRW1vamlzKHRoaXMucHJvcHMubGFzdElucHV0RW1vdGlvbilcbiAgICAgICAgICAgIGlmIChraWxsQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNjb3JlUG9pbnRzKGtpbGxDb3VudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVtb2ppcy5maWx0ZXIoZSA9PiAhZS5kZWFkKS5sZW5ndGggPT09IDAgJiYgIXRoaXMuc3RhdGUuZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlbmRpbmc6IHRydWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMub25MZXZlbENvbXBsZXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckVtb2ppKGUsIGkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxFbW9qaSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgZW1vdGlvbj17ZS5lbW90aW9ufVxuICAgICAgICAgICAgICAgICAgIGRlYWQ9e2UuZGVhZH1cbiAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogZS54ICsgJ3Z3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogZS55ICsgJ3ZoJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtb2ppcy5tYXAodGhpcy5yZW5kZXJFbW9qaS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgdGhpcy5fa2lsbEFsbEVtb2ppcygpXG4gICAgICAgIGlmIChsZXZlbE5vID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUVtb2ppcyg1KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDEwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDIwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDMwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDUpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDQwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZ2VuZXJhdGVFbW9qaXMoNTApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbmRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG4gICAgICAgIGxldCBlbW9qaXMgPSBbLi4udGhpcy5zdGF0ZS5lbW9qaXNdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZW1vamlzLnB1c2godGhpcy5fbmV3RW1vamkoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1vamlzOiBlbW9qaXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfbmV3RW1vamkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbW90aW9uOiB0aGlzLl9yYW5kb21FbW90aW9uKCksXG4gICAgICAgICAgICB4OiAtMzAgKyBNYXRoLnJhbmRvbSgpICogNjAsXG4gICAgICAgICAgICB5OiAtMzAgKyBNYXRoLnJhbmRvbSgpICogNjAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfa2lsbEFsbEVtb2ppcyhlbW90aW9uVG9LaWxsID0gJycpIHtcbiAgICAgICAgbGV0IGVtb2ppcyA9IFsuLi50aGlzLnN0YXRlLmVtb2ppc11cbiAgICAgICAgbGV0IGtpbGxDb3VudCA9IDBcbiAgICAgICAgaWYgKGVtb3Rpb25Ub0tpbGwgPT09ICcnKSB7XG4gICAgICAgICAgICBraWxsQ291bnQgPSBlbW9qaXMuZmlsdGVyKGUgPT4gIWUuZGVhZCkubGVuZ3RoXG4gICAgICAgICAgICBlbW9qaXMgPSBlbW9qaXMubWFwKHRoaXMuX2tpbGxFbW9qaS5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gS2lsbCBzcGVjaWZpYyB0eXBlXG4gICAgICAgICAgICBlbW9qaXMgPSBlbW9qaXMubWFwKGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmVtb3Rpb24gPT09IGVtb3Rpb25Ub0tpbGwgJiYgIWUuZGVhZCkge1xuICAgICAgICAgICAgICAgICAgICBraWxsQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2lsbEVtb2ppKGUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtb2ppczogZW1vamlzXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGtpbGxDb3VudFxuICAgIH1cblxuICAgIF9raWxsRW1vamkoZW1vamkpIHtcbiAgICAgICAgaWYgKCFlbW9qaS5kZWFkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUGFydGljbGVFZmZlY3QoZW1vamkueCwgZW1vamkueSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5lbW9qaSxcbiAgICAgICAgICAgIGRlYWQ6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yYW5kb21FbW90aW9uKCkge1xuICAgICAgICByZXR1cm4gQUxMX0VNT1RJT05TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEFMTF9FTU9USU9OUy5sZW5ndGgpXVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVMZXZlbCJdfQ== */\n/*@ sourceURL=game/SceneLevel.jsx */";
CSS.__scopedHash = "3928734800";
var _DefaultState = {
  emojis: [],
  ending: false
};

var SceneLevel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SceneLevel, _React$Component);

  function SceneLevel() {
    var _this;

    _classCallCheck(this, SceneLevel);

    _this = _possibleConstructorReturn(this, (SceneLevel.__proto__ || Object.getPrototypeOf(SceneLevel)).call(this));
    _this.state = _DefaultState;
    return _this;
  }

  _createClass(SceneLevel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setLevel(this.props.level);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.dir('level ' + prevProps.level + ' != ' + this.props.level);

      if (prevProps.level !== this.props.level) {
        this._setLevel(this.props.level);
      }

      if (this.props.lastInputEmotion !== prevProps.lastInputEmotion) {
        var killCount = this._killAllEmojis(this.props.lastInputEmotion);

        if (killCount > 0) {
          this.props.onScorePoints(killCount);
        }
      }

      if (this.state.emojis.filter(function (e) {
        return !e.dead;
      }).length === 0 && !this.state.ending) {
        this.setState({
          ending: true
        });
        this.props.onLevelComplete();
      }
    }
  }, {
    key: "renderEmoji",
    value: function renderEmoji(e, i) {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Emoji__["a" /* default */], {
        key: i,
        emotion: e.emotion,
        dead: e.dead,
        style: {
          left: e.x + 'vw',
          top: e.y + 'vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
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
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__hash,
        css: CSS
      }), this.state.emojis.map(this.renderEmoji.bind(this)));
    }
  }, {
    key: "_setLevel",
    value: function _setLevel(levelNo) {
      this._killAllEmojis();

      if (levelNo === 1) {
        this._generateEmojis(5);
      } else if (levelNo === 2) {
        this._generateEmojis(10);
      } else if (levelNo === 3) {
        this._generateEmojis(20);
      } else if (levelNo === 4) {
        this._generateEmojis(30);
      } else if (levelNo === 5) {
        this._generateEmojis(40);
      } else {
        this._generateEmojis(50);
      }

      this.setState({
        ending: false
      });
    }
  }, {
    key: "_generateEmojis",
    value: function _generateEmojis(count) {
      var emojis = _toConsumableArray(this.state.emojis);

      for (var i = 0; i < count; ++i) {
        emojis.push(this._newEmoji());
      }

      this.setState({
        emojis: emojis
      });
    }
  }, {
    key: "_newEmoji",
    value: function _newEmoji() {
      return {
        emotion: this._randomEmotion(),
        x: -30 + Math.random() * 60,
        y: -30 + Math.random() * 60
      };
    }
  }, {
    key: "_killAllEmojis",
    value: function _killAllEmojis() {
      var _this2 = this;

      var emotionToKill = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var emojis = _toConsumableArray(this.state.emojis);

      var killCount = 0;

      if (emotionToKill === '') {
        killCount = emojis.filter(function (e) {
          return !e.dead;
        }).length;
        emojis = emojis.map(this._killEmoji.bind(this));
      } else {
        // Kill specific type
        emojis = emojis.map(function (e) {
          if (e.emotion === emotionToKill && !e.dead) {
            killCount++;
            return _this2._killEmoji(e);
          }

          return e;
        });
      }

      this.setState({
        emojis: emojis
      });
      return killCount;
    }
  }, {
    key: "_killEmoji",
    value: function _killEmoji(emoji) {
      if (!emoji.dead) {
        this.props.onParticleEffect(emoji.x, emoji.y);
      }

      return _objectSpread({}, emoji, {
        dead: true
      });
    }
  }, {
    key: "_randomEmotion",
    value: function _randomEmotion() {
      return __WEBPACK_IMPORTED_MODULE_3__game__["a" /* ALL_EMOTIONS */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_3__game__["a" /* ALL_EMOTIONS */].length)];
    }
  }]);

  return SceneLevel;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SceneLevel);

/***/ }),

/***/ "./game/SceneWaitingToStart.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Emoji__ = __webpack_require__("./components/Emoji.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game__ = __webpack_require__("./game/index.js");
var _jsxFileName = "/Users/han/Projects/facegame/game/SceneWaitingToStart.jsx";


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
  }]);

  return SceneWaitingToStart;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SceneWaitingToStart);

/***/ }),

/***/ "./game/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EMOTION_HAPPY; });
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
var EMOTION_HAPPY = 'Happy';
var EMOTION_SAD = 'Sad';
var EMOTION_ANGRY = 'Angry';
var EMOTION_SUPRISED = 'Suprised';
var EMOTION_CONTENT = 'Content';
var ALL_EMOTIONS = [EMOTION_HAPPY, EMOTION_SAD, EMOTION_ANGRY, EMOTION_SUPRISED, EMOTION_CONTENT];
var GAME_LENGTH_IN_SECONDS = 20;




/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ParticleArea__ = __webpack_require__("./components/ParticleArea.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DebugControls__ = __webpack_require__("./components/DebugControls.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Emoji__ = __webpack_require__("./components/Emoji.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_LevelProgressBar__ = __webpack_require__("./components/LevelProgressBar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game__ = __webpack_require__("./game/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ScoreDisplay__ = __webpack_require__("./components/ScoreDisplay.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_luxon__ = __webpack_require__("luxon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_luxon__);
var _jsxFileName = "/Users/han/Projects/facegame/pages/index.jsx";


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
  level: null,
  points: 0,
  lastInputEmotion: __WEBPACK_IMPORTED_MODULE_7__game__["c" /* EMOTION_CONTENT */]
};
var CSS = new String("html,body,#__next,.board{height:100%;font-family:Roboto,sans-serif;}body{background:black;margin:0;}.game{position:absolute;left:0;right:0;bottom:0;top:5vh;}.waiting-to-start{margin:auto;top:50%;}.emoji{display:block;-webkit-transition:opacity 0.2s linear,-webkit-transform 0.2s linear;-webkit-transition:opacity 0.2s linear,transform 0.2s linear;transition:opacity 0.2s linear,transform 0.2s linear;}::selection{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmUsQUFHZSxBQUtLLEFBS0MsQUFRTixBQUtFLEFBS1csWUEzQk0sQUFrQnZCLEVBSzhDLEdBbEI3QyxDQUtGLEVBU1QsR0FTQSxFQWpCVSxDQUxWLE9BTVcsU0FYWCxBQVlVLFFBQ1YsbUpBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVBcmVhJ1xuaW1wb3J0IERlYnVnQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZWJ1Z0NvbnRyb2xzJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgTGV2ZWxQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCwgU2NlbmVXYWl0aW5nVG9TdGFydCwgU2NlbmVMZXZlbCwgU2NlbmVGaW5pc2hlZCwgR0FNRV9MRU5HVEhfSU5fU0VDT05EUyB9IGZyb20gJy4uL2dhbWUnXG5pbXBvcnQgU2NvcmVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmVEaXNwbGF5JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmNvbnN0IE1PREVfV0FJVElOR19UT19TVEFSVCA9ICdXQUlUSU5HX1RPX1NUQVJUJ1xuY29uc3QgTU9ERV9QTEFZSU5HX0xFVkVMID0gJ1BMQVlJTkdfTEVWRUwnXG5jb25zdCBNT0RFX0ZJTklTSEVEID0gJ0ZJTklTSEVEJ1xuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlQsXG4gIGxldmVsOiBudWxsLFxuICBwb2ludHM6IDAsXG4gIGxhc3RJbnB1dEVtb3Rpb246IEVNT1RJT05fQ09OVEVOVCxcbn1cblxuY29uc3QgQ1NTID0gY3NzYFxuaHRtbCwgYm9keSwgI19fbmV4dCwgLmJvYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG1hcmdpbjogMDtcbn1cblxuLmdhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogNXZoO1xufVxuXG4ud2FpdGluZy10by1zdGFydCB7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiA1MCU7XG59XG5cbi5lbW9qaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyLCB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmBcblxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IF9EZWZhdWx0U3RhdGVcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZVRpY2soKVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEV2ZW50IGhhbmRsZXJzXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBoYW5kbGVHYW1lVGljaygpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5tb2RlKSB7XG4gICAgICAgIGNhc2UgTU9ERV9XQUlUSU5HX1RPX1NUQVJUOlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIFxuICAgICAgICBjYXNlIE1PREVfUExBWUlOR19MRVZFTDpcbiAgICAgICAgICBjb25zdCBzZWNvbmRzTGVmdE9mTGV2ZWwgPSB0aGlzLnN0YXRlLmxldmVsLnNlY29uZHNMZWZ0T2ZMZXZlbCAtIDAuMlxuICAgICAgICAgIGlmIChzZWNvbmRzTGVmdE9mTGV2ZWwgPCAwKSB7XG4gICAgICAgICAgICAvLyBGaW5pc2ggZ2FtZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1vZGU6IE1PREVfRklOSVNIRUQsXG4gICAgICAgICAgICAgIGxldmVsOiBudWxsLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gUmVzZXQgZ2FtZSBhZnRlciA1c1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1vZGU6IE1PREVfV0FJVElOR19UT19TVEFSVFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbGV2ZWw6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmxldmVsLFxuICAgICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgTU9ERV9GSU5JU0hFRDpcbiAgICAgICAgICBicmVha1xuICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRFbW90aW9uKGVtb3Rpb24pIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUubW9kZSkge1xuICAgICAgY2FzZSBNT0RFX1dBSVRJTkdfVE9fU1RBUlQ6XG4gICAgICAgIGlmIChlbW90aW9uID09PSBFTU9USU9OX0hBUFBZKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBNT0RFX1BMQVlJTkdfTEVWRUwsXG4gICAgICAgICAgICBwb2ludHM6IDAsXG4gICAgICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgICBzdGFydGVkQXQ6IERhdGVUaW1lLmxvY2FsKCksXG4gICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbDogR0FNRV9MRU5HVEhfSU5fU0VDT05EUyxcbiAgICAgICAgICAgICAgbm86IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBcbiAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0SW5wdXRFbW90aW9uICE9PSBlbW90aW9uKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsYXN0SW5wdXRFbW90aW9uOiBlbW90aW9uXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQYXJ0aWNsZUVmZmVjdCh4LCB5KSB7XG4gICAgbGV0IHBhcnRpY2xlQWNjZWxlcmF0b3IgPSB0aGlzLnJlZnMucGFydGljbGVBcmVhXG4gICAgcGFydGljbGVBY2NlbGVyYXRvci5jcmVhdGVFeHBsb3Npb24oeCwgeSlcbiAgfVxuXG4gIGhhbmRsZUxldmVsQ29tcGxldGUoKSB7XG4gICAgY29uc3QgbmV4dExldmVsID0gdGhpcy5zdGF0ZS5sZXZlbC5ubyArIDFcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsZXZlbDoge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUubGV2ZWwsXG4gICAgICAgICAgbm86IG5leHRMZXZlbFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBoYW5kbGVTY29yZVBvaW50cyhob3dNYW55KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwb2ludHM6IHRoaXMuc3RhdGUucG9pbnRzICsgaG93TWFueVxuICAgIH0pXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFJlbmRlclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHttb2RlLCBsZXZlbCwgbGFzdElucHV0RW1vdGlvbiwgcG9pbnRzfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBtYWluID0gbnVsbFxuICAgIGxldCBiYWNrZ3JvdW5kRWZmZWN0ID0gbnVsbFxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSBNT0RFX1dBSVRJTkdfVE9fU1RBUlQ6XG4gICAgICAgIG1haW4gPSA8U2NlbmVXYWl0aW5nVG9TdGFydCAvPlxuICAgICAgICBiYWNrZ3JvdW5kRWZmZWN0ID0gJ2J1YmJsZXMnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1PREVfUExBWUlOR19MRVZFTDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZUxldmVsIGxldmVsPXtsZXZlbC5ub31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJbnB1dEVtb3Rpb249e2xhc3RJbnB1dEVtb3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvblNjb3JlUG9pbnRzPXt0aGlzLmhhbmRsZVNjb3JlUG9pbnRzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxldmVsQ29tcGxldGU9e3RoaXMuaGFuZGxlTGV2ZWxDb21wbGV0ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYXJ0aWNsZUVmZmVjdD17dGhpcy5oYW5kbGVQYXJ0aWNsZUVmZmVjdC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICBiYWNrZ3JvdW5kRWZmZWN0ID0gJ2J1YmJsZXMnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1PREVfRklOSVNIRUQ6XG4gICAgICAgIG1haW4gPSA8U2NlbmVGaW5pc2hlZCBwb2ludHM9e3RoaXMuc3RhdGUucG9pbnRzfSAvPlxuICAgICAgICBiYWNrZ3JvdW5kRWZmZWN0ID0gJ2ZpcmV3b3JrcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e0NTU308L3N0eWxlPlxuICAgICAgICBcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkNvbXB1dGFzIEVtb2ppIEdhbWUhPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDAsOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2xpYi9wcm90b24ubWluLmpzXCIvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPExldmVsUHJvZ3Jlc3NCYXIgc2Vjb25kc0xlZnQ9e2xldmVsID8gbGV2ZWwuc2Vjb25kc0xlZnRPZkxldmVsIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kc1RvdGFsPXtHQU1FX0xFTkdUSF9JTl9TRUNPTkRTfS8+XG5cbiAgICAgICAge2xldmVsID8gPFNjb3JlRGlzcGxheSBzY29yZT17cG9pbnRzfS8+IDogbnVsbH1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgICAgICA8UGFydGljbGVBcmVhIHJlZj1cInBhcnRpY2xlQXJlYVwiIGVmZmVjdD17YmFja2dyb3VuZEVmZmVjdH0gLz5cblxuICAgICAgICAgIHttYWlufVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8RGVidWdDb250cm9scyBvbklucHV0RW1vdGlvbj17dGhpcy5oYW5kbGVJbnB1dEVtb3Rpb24uYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiXX0= */\n/*@ sourceURL=pages/index.jsx */");
CSS.__hash = "1249369210";
CSS.__scoped = "html.jsx-1974858171,body.jsx-1974858171,#__next.jsx-1974858171,.board.jsx-1974858171{height:100%;font-family:Roboto,sans-serif;}body.jsx-1974858171{background:black;margin:0;}.game.jsx-1974858171{position:absolute;left:0;right:0;bottom:0;top:5vh;}.waiting-to-start.jsx-1974858171{margin:auto;top:50%;}.emoji.jsx-1974858171{display:block;-webkit-transition:opacity 0.2s linear,-webkit-transform 0.2s linear;-webkit-transition:opacity 0.2s linear,transform 0.2s linear;transition:opacity 0.2s linear,transform 0.2s linear;}.jsx-1974858171::selection{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmUsQUFHZSxBQUtLLEFBS0MsQUFRTixBQUtFLEFBS1csWUEzQk0sQUFrQnZCLEVBSzhDLEdBbEI3QyxDQUtGLEVBU1QsR0FTQSxFQWpCVSxDQUxWLE9BTVcsU0FYWCxBQVlVLFFBQ1YsbUpBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVBcmVhJ1xuaW1wb3J0IERlYnVnQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZWJ1Z0NvbnRyb2xzJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgTGV2ZWxQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCwgU2NlbmVXYWl0aW5nVG9TdGFydCwgU2NlbmVMZXZlbCwgU2NlbmVGaW5pc2hlZCwgR0FNRV9MRU5HVEhfSU5fU0VDT05EUyB9IGZyb20gJy4uL2dhbWUnXG5pbXBvcnQgU2NvcmVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmVEaXNwbGF5JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmNvbnN0IE1PREVfV0FJVElOR19UT19TVEFSVCA9ICdXQUlUSU5HX1RPX1NUQVJUJ1xuY29uc3QgTU9ERV9QTEFZSU5HX0xFVkVMID0gJ1BMQVlJTkdfTEVWRUwnXG5jb25zdCBNT0RFX0ZJTklTSEVEID0gJ0ZJTklTSEVEJ1xuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlQsXG4gIGxldmVsOiBudWxsLFxuICBwb2ludHM6IDAsXG4gIGxhc3RJbnB1dEVtb3Rpb246IEVNT1RJT05fQ09OVEVOVCxcbn1cblxuY29uc3QgQ1NTID0gY3NzYFxuaHRtbCwgYm9keSwgI19fbmV4dCwgLmJvYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG1hcmdpbjogMDtcbn1cblxuLmdhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogNXZoO1xufVxuXG4ud2FpdGluZy10by1zdGFydCB7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiA1MCU7XG59XG5cbi5lbW9qaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyLCB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmBcblxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IF9EZWZhdWx0U3RhdGVcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZVRpY2soKVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEV2ZW50IGhhbmRsZXJzXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBoYW5kbGVHYW1lVGljaygpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5tb2RlKSB7XG4gICAgICAgIGNhc2UgTU9ERV9XQUlUSU5HX1RPX1NUQVJUOlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIFxuICAgICAgICBjYXNlIE1PREVfUExBWUlOR19MRVZFTDpcbiAgICAgICAgICBjb25zdCBzZWNvbmRzTGVmdE9mTGV2ZWwgPSB0aGlzLnN0YXRlLmxldmVsLnNlY29uZHNMZWZ0T2ZMZXZlbCAtIDAuMlxuICAgICAgICAgIGlmIChzZWNvbmRzTGVmdE9mTGV2ZWwgPCAwKSB7XG4gICAgICAgICAgICAvLyBGaW5pc2ggZ2FtZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1vZGU6IE1PREVfRklOSVNIRUQsXG4gICAgICAgICAgICAgIGxldmVsOiBudWxsLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gUmVzZXQgZ2FtZSBhZnRlciA1c1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1vZGU6IE1PREVfV0FJVElOR19UT19TVEFSVFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbGV2ZWw6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmxldmVsLFxuICAgICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgTU9ERV9GSU5JU0hFRDpcbiAgICAgICAgICBicmVha1xuICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRFbW90aW9uKGVtb3Rpb24pIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUubW9kZSkge1xuICAgICAgY2FzZSBNT0RFX1dBSVRJTkdfVE9fU1RBUlQ6XG4gICAgICAgIGlmIChlbW90aW9uID09PSBFTU9USU9OX0hBUFBZKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBNT0RFX1BMQVlJTkdfTEVWRUwsXG4gICAgICAgICAgICBwb2ludHM6IDAsXG4gICAgICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgICBzdGFydGVkQXQ6IERhdGVUaW1lLmxvY2FsKCksXG4gICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbDogR0FNRV9MRU5HVEhfSU5fU0VDT05EUyxcbiAgICAgICAgICAgICAgbm86IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBcbiAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0SW5wdXRFbW90aW9uICE9PSBlbW90aW9uKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsYXN0SW5wdXRFbW90aW9uOiBlbW90aW9uXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQYXJ0aWNsZUVmZmVjdCh4LCB5KSB7XG4gICAgbGV0IHBhcnRpY2xlQWNjZWxlcmF0b3IgPSB0aGlzLnJlZnMucGFydGljbGVBcmVhXG4gICAgcGFydGljbGVBY2NlbGVyYXRvci5jcmVhdGVFeHBsb3Npb24oeCwgeSlcbiAgfVxuXG4gIGhhbmRsZUxldmVsQ29tcGxldGUoKSB7XG4gICAgY29uc3QgbmV4dExldmVsID0gdGhpcy5zdGF0ZS5sZXZlbC5ubyArIDFcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsZXZlbDoge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUubGV2ZWwsXG4gICAgICAgICAgbm86IG5leHRMZXZlbFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBoYW5kbGVTY29yZVBvaW50cyhob3dNYW55KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwb2ludHM6IHRoaXMuc3RhdGUucG9pbnRzICsgaG93TWFueVxuICAgIH0pXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFJlbmRlclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHttb2RlLCBsZXZlbCwgbGFzdElucHV0RW1vdGlvbiwgcG9pbnRzfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBtYWluID0gbnVsbFxuICAgIGxldCBiYWNrZ3JvdW5kRWZmZWN0ID0gbnVsbFxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSBNT0RFX1dBSVRJTkdfVE9fU1RBUlQ6XG4gICAgICAgIG1haW4gPSA8U2NlbmVXYWl0aW5nVG9TdGFydCAvPlxuICAgICAgICBiYWNrZ3JvdW5kRWZmZWN0ID0gJ2J1YmJsZXMnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1PREVfUExBWUlOR19MRVZFTDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZUxldmVsIGxldmVsPXtsZXZlbC5ub31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJbnB1dEVtb3Rpb249e2xhc3RJbnB1dEVtb3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvblNjb3JlUG9pbnRzPXt0aGlzLmhhbmRsZVNjb3JlUG9pbnRzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxldmVsQ29tcGxldGU9e3RoaXMuaGFuZGxlTGV2ZWxDb21wbGV0ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYXJ0aWNsZUVmZmVjdD17dGhpcy5oYW5kbGVQYXJ0aWNsZUVmZmVjdC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICBiYWNrZ3JvdW5kRWZmZWN0ID0gJ2J1YmJsZXMnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1PREVfRklOSVNIRUQ6XG4gICAgICAgIG1haW4gPSA8U2NlbmVGaW5pc2hlZCBwb2ludHM9e3RoaXMuc3RhdGUucG9pbnRzfSAvPlxuICAgICAgICBiYWNrZ3JvdW5kRWZmZWN0ID0gJ2ZpcmV3b3JrcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e0NTU308L3N0eWxlPlxuICAgICAgICBcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkNvbXB1dGFzIEVtb2ppIEdhbWUhPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDAsOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2xpYi9wcm90b24ubWluLmpzXCIvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPExldmVsUHJvZ3Jlc3NCYXIgc2Vjb25kc0xlZnQ9e2xldmVsID8gbGV2ZWwuc2Vjb25kc0xlZnRPZkxldmVsIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kc1RvdGFsPXtHQU1FX0xFTkdUSF9JTl9TRUNPTkRTfS8+XG5cbiAgICAgICAge2xldmVsID8gPFNjb3JlRGlzcGxheSBzY29yZT17cG9pbnRzfS8+IDogbnVsbH1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgICAgICA8UGFydGljbGVBcmVhIHJlZj1cInBhcnRpY2xlQXJlYVwiIGVmZmVjdD17YmFja2dyb3VuZEVmZmVjdH0gLz5cblxuICAgICAgICAgIHttYWlufVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8RGVidWdDb250cm9scyBvbklucHV0RW1vdGlvbj17dGhpcy5oYW5kbGVJbnB1dEVtb3Rpb24uYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiXX0= */\n/*@ sourceURL=pages/index.jsx */";
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
          if (emotion === __WEBPACK_IMPORTED_MODULE_7__game__["d" /* EMOTION_HAPPY */]) {
            this.setState({
              mode: MODE_PLAYING_LEVEL,
              points: 0,
              level: {
                startedAt: __WEBPACK_IMPORTED_MODULE_9_luxon__["DateTime"].local(),
                secondsLeftOfLevel: __WEBPACK_IMPORTED_MODULE_7__game__["g" /* GAME_LENGTH_IN_SECONDS */],
                no: 1
              }
            });
          }

          break;

        case MODE_PLAYING_LEVEL:
          if (this.state.lastInputEmotion !== emotion) {
            this.setState({
              lastInputEmotion: emotion
            });
          }

          break;

        default:
          break;
      }
    }
  }, {
    key: "handleParticleEffect",
    value: function handleParticleEffect(x, y) {
      var particleAccelerator = this.refs.particleArea;
      particleAccelerator.createExplosion(x, y);
    }
  }, {
    key: "handleLevelComplete",
    value: function handleLevelComplete() {
      var _this4 = this;

      var nextLevel = this.state.level.no + 1;
      setTimeout(function () {
        _this4.setState({
          level: _objectSpread({}, _this4.state.level, {
            no: nextLevel
          })
        });
      }, 1000);
    }
  }, {
    key: "handleScorePoints",
    value: function handleScorePoints(howMany) {
      this.setState({
        points: this.state.points + howMany
      });
    } ////////////////////////////////////////////////////////////////////////////
    // Render
    ////////////////////////////////////////////////////////////////////////////

  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          mode = _state.mode,
          level = _state.level,
          lastInputEmotion = _state.lastInputEmotion,
          points = _state.points;
      var main = null;
      var backgroundEffect = null;

      switch (mode) {
        case MODE_WAITING_TO_START:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["j" /* SceneWaitingToStart */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            }
          });
          backgroundEffect = 'bubbles';
          break;

        case MODE_PLAYING_LEVEL:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["i" /* SceneLevel */], {
            level: level.no,
            lastInputEmotion: lastInputEmotion,
            onScorePoints: this.handleScorePoints.bind(this),
            onLevelComplete: this.handleLevelComplete.bind(this),
            onParticleEffect: this.handleParticleEffect.bind(this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            }
          });
          backgroundEffect = 'bubbles';
          break;

        case MODE_FINISHED:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["h" /* SceneFinished */], {
            points: this.state.points,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
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
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__hash,
        css: CSS
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, "Computas Emoji Game!"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:400,500,700,900",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("script", {
        src: "/static/lib/proton.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_LevelProgressBar__["a" /* default */], {
        secondsLeft: level ? level.secondsLeftOfLevel : null,
        secondsTotal: __WEBPACK_IMPORTED_MODULE_7__game__["g" /* GAME_LENGTH_IN_SECONDS */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), level ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ScoreDisplay__["a" /* default */], {
        score: points,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }) : null, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "game",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_ParticleArea__["a" /* default */], {
        ref: "particleArea",
        effect: backgroundEffect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }), main), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_DebugControls__["a" /* default */], {
        onInputEmotion: this.handleInputEmotion.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }));
    }
  }]);

  return Game;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "luxon":
/***/ (function(module, exports) {

module.exports = require("luxon");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map