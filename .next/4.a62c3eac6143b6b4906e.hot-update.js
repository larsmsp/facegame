webpackHotUpdate(4,{

/***/ "./components/LevelProgressBar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/han/Projects/facegame/components/LevelProgressBar.jsx";


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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return LevelProgressBar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = LevelProgressBar;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CSS, "CSS", "/Users/han/Projects/facegame/components/LevelProgressBar.jsx");
  reactHotLoader.register(LevelProgressBar, "LevelProgressBar", "/Users/han/Projects/facegame/components/LevelProgressBar.jsx");
  reactHotLoader.register(_default, "default", "/Users/han/Projects/facegame/components/LevelProgressBar.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.a62c3eac6143b6b4906e.hot-update.js.map