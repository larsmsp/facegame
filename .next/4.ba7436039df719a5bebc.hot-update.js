webpackHotUpdate(4,{

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
  level: null,
  lastInputEmotion: __WEBPACK_IMPORTED_MODULE_7__game__["c" /* EMOTION_CONTENT */]
};
var CSS = new String("html,body,#__next,.board{height:100%;font-family:Roboto,sans-serif;}body{background:black;margin:0;}.game{position:absolute;left:0;right:0;bottom:0;top:5vh;}.waiting-to-start{margin:auto;top:50%;}.emoji{display:block;-webkit-transition:opacity 0.2s linear,-webkit-transform 0.2s linear;-webkit-transition:opacity 0.2s linear,transform 0.2s linear;transition:opacity 0.2s linear,transform 0.2s linear;}::selection{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmUsQUFHZSxBQUtLLEFBS0MsQUFRTixBQUtFLEFBS1csWUEzQk0sQUFrQnZCLEVBSzhDLEdBbEI3QyxDQUtGLEVBU1QsR0FTQSxFQWpCVSxDQUxWLE9BTVcsU0FYWCxBQVlVLFFBQ1YsbUpBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVBcmVhJ1xuaW1wb3J0IERlYnVnQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZWJ1Z0NvbnRyb2xzJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgTGV2ZWxQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCwgU2NlbmVXYWl0aW5nVG9TdGFydCwgU2NlbmVMZXZlbCwgU2NlbmVGaW5pc2hlZCwgR0FNRV9MRU5HVEhfSU5fU0VDT05EUyB9IGZyb20gJy4uL2dhbWUnXG5pbXBvcnQgU2NvcmVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmVEaXNwbGF5JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmNvbnN0IE1PREVfV0FJVElOR19UT19TVEFSVCA9ICdXQUlUSU5HX1RPX1NUQVJUJ1xuY29uc3QgTU9ERV9QTEFZSU5HX0xFVkVMID0gJ1BMQVlJTkdfTEVWRUwnXG5jb25zdCBNT0RFX0ZJTklTSEVEID0gJ0ZJTklTSEVEJ1xuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlQsXG4gIGxldmVsOiBudWxsLFxuICBsYXN0SW5wdXRFbW90aW9uOiBFTU9USU9OX0NPTlRFTlQsXG59XG5cbmNvbnN0IENTUyA9IGNzc2Bcbmh0bWwsIGJvZHksICNfX25leHQsIC5ib2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBtYXJnaW46IDA7XG59XG5cbi5nYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDV2aDtcbn1cblxuLndhaXRpbmctdG8tc3RhcnQge1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogNTAlO1xufVxuXG4uZW1vamkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhciwgdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5gXG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuc3RhdGUgPSBfRGVmYXVsdFN0YXRlXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUdhbWVUaWNrKClcbiAgICB9LCAyMDApXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBFdmVudCBoYW5kbGVyc1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgaGFuZGxlR2FtZVRpY2soKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUubW9kZSkge1xuICAgICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgICBicmVha1xuICAgICAgICBcbiAgICAgICAgY2FzZSBNT0RFX1BMQVlJTkdfTEVWRUw6XG4gICAgICAgICAgY29uc3Qgc2Vjb25kc0xlZnRPZkxldmVsID0gdGhpcy5zdGF0ZS5sZXZlbC5zZWNvbmRzTGVmdE9mTGV2ZWwgLSAwLjJcbiAgICAgICAgICBpZiAoc2Vjb25kc0xlZnRPZkxldmVsIDwgMCkge1xuICAgICAgICAgICAgLy8gRmluaXNoIGdhbWVcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBtb2RlOiBNT0RFX0ZJTklTSEVELFxuICAgICAgICAgICAgICBsZXZlbDogbnVsbCxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIFJlc2V0IGdhbWUgYWZ0ZXIgNXNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjEpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnN0YXRlLnBvaW50cyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbGV2ZWw6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmxldmVsLFxuICAgICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgTU9ERV9GSU5JU0hFRDpcbiAgICAgICAgICBicmVha1xuICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRFbW90aW9uKGVtb3Rpb24pIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUubW9kZSkge1xuICAgICAgY2FzZSBNT0RFX1dBSVRJTkdfVE9fU1RBUlQ6XG4gICAgICAgIGlmIChlbW90aW9uID09PSBFTU9USU9OX0hBUFBZKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBNT0RFX1BMQVlJTkdfTEVWRUwsXG4gICAgICAgICAgICBwb2ludHM6IDAsXG4gICAgICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgICBzdGFydGVkQXQ6IERhdGVUaW1lLmxvY2FsKCksXG4gICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbDogR0FNRV9MRU5HVEhfSU5fU0VDT05EU1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIFxuICAgICAgY2FzZSBNT0RFX1BMQVlJTkdfTEVWRUw6XG4gICAgICBkZWJ1Z2dlclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0SW5wdXRFbW90aW9uICE9PSBlbW90aW9uKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsYXN0SW5wdXRFbW90aW9uOiBlbW90aW9uXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUmVuZGVyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21vZGUsIGxldmVsLCBsYXN0SW5wdXRFbW90aW9uLCBwb2ludHN9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IG1haW4gPSBudWxsXG4gICAgbGV0IGJhY2tncm91bmRFZmZlY3QgPSBudWxsXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZVdhaXRpbmdUb1N0YXJ0IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICBtYWluID0gPFNjZW5lTGV2ZWwgbGV2ZWw9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5wdXRFbW90aW9uPXtsYXN0SW5wdXRFbW90aW9ufSAvPlxuICAgICAgICBiYWNrZ3JvdW5kRWZmZWN0ID0gJ2J1YmJsZXMnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1PREVfRklOSVNIRUQ6XG4gICAgICAgIG1haW4gPSA8U2NlbmVGaW5pc2hlZCBwb2ludHM9e3RoaXMuc3RhdGUucG9pbnRzfSAvPlxuICAgICAgICBiYWNrZ3JvdW5kRWZmZWN0ID0gJ2ZpcmV3b3JrcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e0NTU308L3N0eWxlPlxuICAgICAgICBcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkNvbXB1dGFzIEVtb2ppIEdhbWUhPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDAsOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2xpYi9wcm90b24ubWluLmpzXCIvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPExldmVsUHJvZ3Jlc3NCYXIgc2Vjb25kc0xlZnQ9e2xldmVsID8gbGV2ZWwuc2Vjb25kc0xlZnRPZkxldmVsIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kc1RvdGFsPXtHQU1FX0xFTkdUSF9JTl9TRUNPTkRTfS8+XG5cbiAgICAgICAge2xldmVsID8gPFNjb3JlRGlzcGxheSBzY29yZT17cG9pbnRzfS8+IDogbnVsbH1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgICAgICA8UGFydGljbGVBcmVhIGVmZmVjdD17YmFja2dyb3VuZEVmZmVjdH0gLz5cblxuICAgICAgICAgIHttYWlufVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8RGVidWdDb250cm9scyBvbklucHV0RW1vdGlvbj17dGhpcy5oYW5kbGVJbnB1dEVtb3Rpb24uYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiXX0= */\n/*@ sourceURL=pages/index.jsx */");
CSS.__hash = "1249369210";
CSS.__scoped = "html.jsx-1974858171,body.jsx-1974858171,#__next.jsx-1974858171,.board.jsx-1974858171{height:100%;font-family:Roboto,sans-serif;}body.jsx-1974858171{background:black;margin:0;}.game.jsx-1974858171{position:absolute;left:0;right:0;bottom:0;top:5vh;}.waiting-to-start.jsx-1974858171{margin:auto;top:50%;}.emoji.jsx-1974858171{display:block;-webkit-transition:opacity 0.2s linear,-webkit-transform 0.2s linear;-webkit-transition:opacity 0.2s linear,transform 0.2s linear;transition:opacity 0.2s linear,transform 0.2s linear;}.jsx-1974858171::selection{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmUsQUFHZSxBQUtLLEFBS0MsQUFRTixBQUtFLEFBS1csWUEzQk0sQUFrQnZCLEVBSzhDLEdBbEI3QyxDQUtGLEVBU1QsR0FTQSxFQWpCVSxDQUxWLE9BTVcsU0FYWCxBQVlVLFFBQ1YsbUpBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVBcmVhJ1xuaW1wb3J0IERlYnVnQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZWJ1Z0NvbnRyb2xzJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgTGV2ZWxQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCwgU2NlbmVXYWl0aW5nVG9TdGFydCwgU2NlbmVMZXZlbCwgU2NlbmVGaW5pc2hlZCwgR0FNRV9MRU5HVEhfSU5fU0VDT05EUyB9IGZyb20gJy4uL2dhbWUnXG5pbXBvcnQgU2NvcmVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmVEaXNwbGF5JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmNvbnN0IE1PREVfV0FJVElOR19UT19TVEFSVCA9ICdXQUlUSU5HX1RPX1NUQVJUJ1xuY29uc3QgTU9ERV9QTEFZSU5HX0xFVkVMID0gJ1BMQVlJTkdfTEVWRUwnXG5jb25zdCBNT0RFX0ZJTklTSEVEID0gJ0ZJTklTSEVEJ1xuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlQsXG4gIGxldmVsOiBudWxsLFxuICBsYXN0SW5wdXRFbW90aW9uOiBFTU9USU9OX0NPTlRFTlQsXG59XG5cbmNvbnN0IENTUyA9IGNzc2Bcbmh0bWwsIGJvZHksICNfX25leHQsIC5ib2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBtYXJnaW46IDA7XG59XG5cbi5nYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDV2aDtcbn1cblxuLndhaXRpbmctdG8tc3RhcnQge1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogNTAlO1xufVxuXG4uZW1vamkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhciwgdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5gXG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuc3RhdGUgPSBfRGVmYXVsdFN0YXRlXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUdhbWVUaWNrKClcbiAgICB9LCAyMDApXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBFdmVudCBoYW5kbGVyc1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgaGFuZGxlR2FtZVRpY2soKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUubW9kZSkge1xuICAgICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgICBicmVha1xuICAgICAgICBcbiAgICAgICAgY2FzZSBNT0RFX1BMQVlJTkdfTEVWRUw6XG4gICAgICAgICAgY29uc3Qgc2Vjb25kc0xlZnRPZkxldmVsID0gdGhpcy5zdGF0ZS5sZXZlbC5zZWNvbmRzTGVmdE9mTGV2ZWwgLSAwLjJcbiAgICAgICAgICBpZiAoc2Vjb25kc0xlZnRPZkxldmVsIDwgMCkge1xuICAgICAgICAgICAgLy8gRmluaXNoIGdhbWVcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBtb2RlOiBNT0RFX0ZJTklTSEVELFxuICAgICAgICAgICAgICBsZXZlbDogbnVsbCxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIFJlc2V0IGdhbWUgYWZ0ZXIgNXNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjEpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcG9pbnRzOiB0aGlzLnN0YXRlLnBvaW50cyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbGV2ZWw6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmxldmVsLFxuICAgICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgTU9ERV9GSU5JU0hFRDpcbiAgICAgICAgICBicmVha1xuICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRFbW90aW9uKGVtb3Rpb24pIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUubW9kZSkge1xuICAgICAgY2FzZSBNT0RFX1dBSVRJTkdfVE9fU1RBUlQ6XG4gICAgICAgIGlmIChlbW90aW9uID09PSBFTU9USU9OX0hBUFBZKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBNT0RFX1BMQVlJTkdfTEVWRUwsXG4gICAgICAgICAgICBwb2ludHM6IDAsXG4gICAgICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgICBzdGFydGVkQXQ6IERhdGVUaW1lLmxvY2FsKCksXG4gICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbDogR0FNRV9MRU5HVEhfSU5fU0VDT05EU1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIFxuICAgICAgY2FzZSBNT0RFX1BMQVlJTkdfTEVWRUw6XG4gICAgICBkZWJ1Z2dlclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYXN0SW5wdXRFbW90aW9uICE9PSBlbW90aW9uKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsYXN0SW5wdXRFbW90aW9uOiBlbW90aW9uXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUmVuZGVyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21vZGUsIGxldmVsLCBsYXN0SW5wdXRFbW90aW9uLCBwb2ludHN9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IG1haW4gPSBudWxsXG4gICAgbGV0IGJhY2tncm91bmRFZmZlY3QgPSBudWxsXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZVdhaXRpbmdUb1N0YXJ0IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICBtYWluID0gPFNjZW5lTGV2ZWwgbGV2ZWw9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5wdXRFbW90aW9uPXtsYXN0SW5wdXRFbW90aW9ufSAvPlxuICAgICAgICBiYWNrZ3JvdW5kRWZmZWN0ID0gJ2J1YmJsZXMnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1PREVfRklOSVNIRUQ6XG4gICAgICAgIG1haW4gPSA8U2NlbmVGaW5pc2hlZCBwb2ludHM9e3RoaXMuc3RhdGUucG9pbnRzfSAvPlxuICAgICAgICBiYWNrZ3JvdW5kRWZmZWN0ID0gJ2ZpcmV3b3JrcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e0NTU308L3N0eWxlPlxuICAgICAgICBcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkNvbXB1dGFzIEVtb2ppIEdhbWUhPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCw3MDAsOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2xpYi9wcm90b24ubWluLmpzXCIvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPExldmVsUHJvZ3Jlc3NCYXIgc2Vjb25kc0xlZnQ9e2xldmVsID8gbGV2ZWwuc2Vjb25kc0xlZnRPZkxldmVsIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kc1RvdGFsPXtHQU1FX0xFTkdUSF9JTl9TRUNPTkRTfS8+XG5cbiAgICAgICAge2xldmVsID8gPFNjb3JlRGlzcGxheSBzY29yZT17cG9pbnRzfS8+IDogbnVsbH1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgICAgICA8UGFydGljbGVBcmVhIGVmZmVjdD17YmFja2dyb3VuZEVmZmVjdH0gLz5cblxuICAgICAgICAgIHttYWlufVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8RGVidWdDb250cm9scyBvbklucHV0RW1vdGlvbj17dGhpcy5oYW5kbGVJbnB1dEVtb3Rpb24uYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWUiXX0= */\n/*@ sourceURL=pages/index.jsx */";
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
          if (emotion === __WEBPACK_IMPORTED_MODULE_7__game__["d" /* EMOTION_HAPPY */]) {
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

        case MODE_PLAYING_LEVEL:
          debugger;

          if (this.state.lastInputEmotion !== emotion) {
            this.setState({
              lastInputEmotion: emotion
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
          lastInputEmotion = _state.lastInputEmotion,
          points = _state.points;
      var main = null;
      var backgroundEffect = null;

      switch (mode) {
        case MODE_WAITING_TO_START:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["j" /* SceneWaitingToStart */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            }
          });
          backgroundEffect = 'bubbles';
          break;

        case MODE_PLAYING_LEVEL:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["i" /* SceneLevel */], {
            level: 1,
            lastInputEmotion: lastInputEmotion,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            }
          });
          backgroundEffect = 'bubbles';
          break;

        case MODE_FINISHED:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["h" /* SceneFinished */], {
            points: this.state.points,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
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
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__hash,
        css: CSS
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "Computas Emoji Game!"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:400,500,700,900",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("script", {
        src: "/static/lib/proton.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_LevelProgressBar__["a" /* default */], {
        secondsLeft: level ? level.secondsLeftOfLevel : null,
        secondsTotal: __WEBPACK_IMPORTED_MODULE_7__game__["g" /* GAME_LENGTH_IN_SECONDS */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }), level ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ScoreDisplay__["a" /* default */], {
        score: points,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }) : null, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "game",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_ParticleArea__["a" /* default */], {
        effect: backgroundEffect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), main), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_DebugControls__["a" /* default */], {
        onInputEmotion: this.handleInputEmotion.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
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
//# sourceMappingURL=4.ba7436039df719a5bebc.hot-update.js.map