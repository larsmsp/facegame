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

/***/ })

})
//# sourceMappingURL=4.3195abe0b75b2275a30e.hot-update.js.map