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
//# sourceMappingURL=4.35082f46d523ca9815e7.hot-update.js.map