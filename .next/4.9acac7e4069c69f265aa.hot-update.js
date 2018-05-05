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
var CSS = new String("html,body,#__next,.board{height:100%;font-family:Roboto,sans-serif;}body{background:black;margin:0;}.game{position:absolute;left:0;right:0;bottom:0;top:5vh;}.waiting-to-start{margin:auto;top:50%;}.emoji{display:block;-webkit-transition:opacity 0.2s linear,-webkit-transform 0.2s linear;-webkit-transition:opacity 0.2s linear,transform 0.2s linear;transition:opacity 0.2s linear,transform 0.2s linear;}::selection{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmUsQUFHZSxBQUtLLEFBS0MsQUFRTixBQUtFLEFBS1csWUEzQk0sQUFrQnZCLEVBSzhDLEdBbEI3QyxDQUtGLEVBU1QsR0FTQSxFQWpCVSxDQUxWLE9BTVcsU0FYWCxBQVlVLFFBQ1YsbUpBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVBcmVhJ1xuaW1wb3J0IERlYnVnQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZWJ1Z0NvbnRyb2xzJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgTGV2ZWxQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCwgU2NlbmVXYWl0aW5nVG9TdGFydCwgU2NlbmVMZXZlbCwgU2NlbmVGaW5pc2hlZCwgR0FNRV9MRU5HVEhfSU5fU0VDT05EUyB9IGZyb20gJy4uL2dhbWUnXG5pbXBvcnQgU2NvcmVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmVEaXNwbGF5JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmNvbnN0IE1PREVfV0FJVElOR19UT19TVEFSVCA9ICdXQUlUSU5HX1RPX1NUQVJUJ1xuY29uc3QgTU9ERV9QTEFZSU5HX0xFVkVMID0gJ1BMQVlJTkdfTEVWRUwnXG5jb25zdCBNT0RFX0ZJTklTSEVEID0gJ0ZJTklTSEVEJ1xuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlQsXG4gIGxldmVsOiBudWxsLFxuICBwb2ludHM6IDAsXG4gIGxhc3RJbnB1dEVtb3Rpb246IEVNT1RJT05fQ09OVEVOVCxcbn1cblxuY29uc3QgQ1NTID0gY3NzYFxuaHRtbCwgYm9keSwgI19fbmV4dCwgLmJvYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG1hcmdpbjogMDtcbn1cblxuLmdhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogNXZoO1xufVxuXG4ud2FpdGluZy10by1zdGFydCB7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiA1MCU7XG59XG5cbi5lbW9qaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyLCB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmBcblxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IF9EZWZhdWx0U3RhdGVcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZVRpY2soKVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEV2ZW50IGhhbmRsZXJzXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBoYW5kbGVHYW1lVGljaygpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5tb2RlKSB7XG4gICAgICAgIGNhc2UgTU9ERV9XQUlUSU5HX1RPX1NUQVJUOlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIFxuICAgICAgICBjYXNlIE1PREVfUExBWUlOR19MRVZFTDpcbiAgICAgICAgICBjb25zdCBzZWNvbmRzTGVmdE9mTGV2ZWwgPSB0aGlzLnN0YXRlLmxldmVsLnNlY29uZHNMZWZ0T2ZMZXZlbCAtIDAuMlxuICAgICAgICAgIGlmIChzZWNvbmRzTGVmdE9mTGV2ZWwgPCAwKSB7XG4gICAgICAgICAgICAvLyBGaW5pc2ggZ2FtZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1vZGU6IE1PREVfRklOSVNIRUQsXG4gICAgICAgICAgICAgIGxldmVsOiBudWxsLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gUmVzZXQgZ2FtZSBhZnRlciA1c1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1vZGU6IE1PREVfV0FJVElOR19UT19TVEFSVFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMSkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMuc3RhdGUucG9pbnRzICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUubGV2ZWwsXG4gICAgICAgICAgICAgICAgc2Vjb25kc0xlZnRPZkxldmVsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBNT0RFX0ZJTklTSEVEOlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dEVtb3Rpb24oZW1vdGlvbikge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5tb2RlKSB7XG4gICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgaWYgKGVtb3Rpb24gPT09IEVNT1RJT05fSEFQUFkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vZGU6IE1PREVfUExBWUlOR19MRVZFTCxcbiAgICAgICAgICAgIHBvaW50czogMCxcbiAgICAgICAgICAgIGxldmVsOiB7XG4gICAgICAgICAgICAgIHN0YXJ0ZWRBdDogRGF0ZVRpbWUubG9jYWwoKSxcbiAgICAgICAgICAgICAgc2Vjb25kc0xlZnRPZkxldmVsOiBHQU1FX0xFTkdUSF9JTl9TRUNPTkRTXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgXG4gICAgICBjYXNlIE1PREVfUExBWUlOR19MRVZFTDpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdElucHV0RW1vdGlvbiAhPT0gZW1vdGlvbikge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGFzdElucHV0RW1vdGlvbjogZW1vdGlvblxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGFydGljbGVFZmZlY3QoeCwgeSkge1xuICAgIGxldCBwYXJ0aWNsZUFjY2VsZXJhdG9yID0gdGhpcy5yZWZzLnBhcnRpY2xlQXJlYVxuICAgIHBhcnRpY2xlQWNjZWxlcmF0b3IuY3JlYXRlRXhwbG9zaW9uKHgsIHkpXG4gIH1cblxuICBoYW5kbGVMZXZlbENvbXBsZXRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGV2ZWw6IHRoaXMuc3RhdGUubGV2ZWwgKyAxXG4gICAgfSlcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUmVuZGVyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21vZGUsIGxldmVsLCBsYXN0SW5wdXRFbW90aW9uLCBwb2ludHN9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IG1haW4gPSBudWxsXG4gICAgbGV0IGJhY2tncm91bmRFZmZlY3QgPSBudWxsXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZVdhaXRpbmdUb1N0YXJ0IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICBtYWluID0gPFNjZW5lTGV2ZWwgbGV2ZWw9e3RoaXMuc3RhdGUubGV2ZWwubGV2ZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5wdXRFbW90aW9uPXtsYXN0SW5wdXRFbW90aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25MZXZlbENvbXBsZXRlPXt0aGlzLmhhbmRsZUxldmVsQ29tcGxldGUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFydGljbGVFZmZlY3Q9e3RoaXMuaGFuZGxlUGFydGljbGVFZmZlY3QuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgYmFja2dyb3VuZEVmZmVjdCA9ICdidWJibGVzJ1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSBNT0RFX0ZJTklTSEVEOlxuICAgICAgICBtYWluID0gPFNjZW5lRmluaXNoZWQgcG9pbnRzPXt0aGlzLnN0YXRlLnBvaW50c30gLz5cbiAgICAgICAgYmFja2dyb3VuZEVmZmVjdCA9ICdmaXJld29ya3MnXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OiBicmVha1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cbiAgICAgICAgXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Db21wdXRhcyBFbW9qaSBHYW1lITwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsNzAwLDkwMFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9saWIvcHJvdG9uLm1pbi5qc1wiLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxMZXZlbFByb2dyZXNzQmFyIHNlY29uZHNMZWZ0PXtsZXZlbCA/IGxldmVsLnNlY29uZHNMZWZ0T2ZMZXZlbCA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHNUb3RhbD17R0FNRV9MRU5HVEhfSU5fU0VDT05EU30vPlxuXG4gICAgICAgIHtsZXZlbCA/IDxTY29yZURpc3BsYXkgc2NvcmU9e3BvaW50c30vPiA6IG51bGx9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICAgICAgPFBhcnRpY2xlQXJlYSByZWY9XCJwYXJ0aWNsZUFyZWFcIiBlZmZlY3Q9e2JhY2tncm91bmRFZmZlY3R9IC8+XG5cbiAgICAgICAgICB7bWFpbn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPERlYnVnQ29udHJvbHMgb25JbnB1dEVtb3Rpb249e3RoaXMuaGFuZGxlSW5wdXRFbW90aW9uLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lIl19 */\n/*@ sourceURL=pages/index.jsx */");
CSS.__hash = "1249369210";
CSS.__scoped = "html.jsx-1974858171,body.jsx-1974858171,#__next.jsx-1974858171,.board.jsx-1974858171{height:100%;font-family:Roboto,sans-serif;}body.jsx-1974858171{background:black;margin:0;}.game.jsx-1974858171{position:absolute;left:0;right:0;bottom:0;top:5vh;}.waiting-to-start.jsx-1974858171{margin:auto;top:50%;}.emoji.jsx-1974858171{display:block;-webkit-transition:opacity 0.2s linear,-webkit-transform 0.2s linear;-webkit-transition:opacity 0.2s linear,transform 0.2s linear;transition:opacity 0.2s linear,transform 0.2s linear;}.jsx-1974858171::selection{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmUsQUFHZSxBQUtLLEFBS0MsQUFRTixBQUtFLEFBS1csWUEzQk0sQUFrQnZCLEVBSzhDLEdBbEI3QyxDQUtGLEVBU1QsR0FTQSxFQWpCVSxDQUxWLE9BTVcsU0FYWCxBQVlVLFFBQ1YsbUpBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVBcmVhJ1xuaW1wb3J0IERlYnVnQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZWJ1Z0NvbnRyb2xzJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgTGV2ZWxQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCwgU2NlbmVXYWl0aW5nVG9TdGFydCwgU2NlbmVMZXZlbCwgU2NlbmVGaW5pc2hlZCwgR0FNRV9MRU5HVEhfSU5fU0VDT05EUyB9IGZyb20gJy4uL2dhbWUnXG5pbXBvcnQgU2NvcmVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmVEaXNwbGF5JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmNvbnN0IE1PREVfV0FJVElOR19UT19TVEFSVCA9ICdXQUlUSU5HX1RPX1NUQVJUJ1xuY29uc3QgTU9ERV9QTEFZSU5HX0xFVkVMID0gJ1BMQVlJTkdfTEVWRUwnXG5jb25zdCBNT0RFX0ZJTklTSEVEID0gJ0ZJTklTSEVEJ1xuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlQsXG4gIGxldmVsOiBudWxsLFxuICBwb2ludHM6IDAsXG4gIGxhc3RJbnB1dEVtb3Rpb246IEVNT1RJT05fQ09OVEVOVCxcbn1cblxuY29uc3QgQ1NTID0gY3NzYFxuaHRtbCwgYm9keSwgI19fbmV4dCwgLmJvYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG1hcmdpbjogMDtcbn1cblxuLmdhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogNXZoO1xufVxuXG4ud2FpdGluZy10by1zdGFydCB7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiA1MCU7XG59XG5cbi5lbW9qaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyLCB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmBcblxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IF9EZWZhdWx0U3RhdGVcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZVRpY2soKVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEV2ZW50IGhhbmRsZXJzXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBoYW5kbGVHYW1lVGljaygpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5tb2RlKSB7XG4gICAgICAgIGNhc2UgTU9ERV9XQUlUSU5HX1RPX1NUQVJUOlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIFxuICAgICAgICBjYXNlIE1PREVfUExBWUlOR19MRVZFTDpcbiAgICAgICAgICBjb25zdCBzZWNvbmRzTGVmdE9mTGV2ZWwgPSB0aGlzLnN0YXRlLmxldmVsLnNlY29uZHNMZWZ0T2ZMZXZlbCAtIDAuMlxuICAgICAgICAgIGlmIChzZWNvbmRzTGVmdE9mTGV2ZWwgPCAwKSB7XG4gICAgICAgICAgICAvLyBGaW5pc2ggZ2FtZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1vZGU6IE1PREVfRklOSVNIRUQsXG4gICAgICAgICAgICAgIGxldmVsOiBudWxsLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gUmVzZXQgZ2FtZSBhZnRlciA1c1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1vZGU6IE1PREVfV0FJVElOR19UT19TVEFSVFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMSkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwb2ludHM6IHRoaXMuc3RhdGUucG9pbnRzICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUubGV2ZWwsXG4gICAgICAgICAgICAgICAgc2Vjb25kc0xlZnRPZkxldmVsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBNT0RFX0ZJTklTSEVEOlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dEVtb3Rpb24oZW1vdGlvbikge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5tb2RlKSB7XG4gICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgaWYgKGVtb3Rpb24gPT09IEVNT1RJT05fSEFQUFkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vZGU6IE1PREVfUExBWUlOR19MRVZFTCxcbiAgICAgICAgICAgIHBvaW50czogMCxcbiAgICAgICAgICAgIGxldmVsOiB7XG4gICAgICAgICAgICAgIHN0YXJ0ZWRBdDogRGF0ZVRpbWUubG9jYWwoKSxcbiAgICAgICAgICAgICAgc2Vjb25kc0xlZnRPZkxldmVsOiBHQU1FX0xFTkdUSF9JTl9TRUNPTkRTXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgXG4gICAgICBjYXNlIE1PREVfUExBWUlOR19MRVZFTDpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdElucHV0RW1vdGlvbiAhPT0gZW1vdGlvbikge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGFzdElucHV0RW1vdGlvbjogZW1vdGlvblxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGFydGljbGVFZmZlY3QoeCwgeSkge1xuICAgIGxldCBwYXJ0aWNsZUFjY2VsZXJhdG9yID0gdGhpcy5yZWZzLnBhcnRpY2xlQXJlYVxuICAgIHBhcnRpY2xlQWNjZWxlcmF0b3IuY3JlYXRlRXhwbG9zaW9uKHgsIHkpXG4gIH1cblxuICBoYW5kbGVMZXZlbENvbXBsZXRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGV2ZWw6IHRoaXMuc3RhdGUubGV2ZWwgKyAxXG4gICAgfSlcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUmVuZGVyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21vZGUsIGxldmVsLCBsYXN0SW5wdXRFbW90aW9uLCBwb2ludHN9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IG1haW4gPSBudWxsXG4gICAgbGV0IGJhY2tncm91bmRFZmZlY3QgPSBudWxsXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZVdhaXRpbmdUb1N0YXJ0IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICBtYWluID0gPFNjZW5lTGV2ZWwgbGV2ZWw9e3RoaXMuc3RhdGUubGV2ZWwubGV2ZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5wdXRFbW90aW9uPXtsYXN0SW5wdXRFbW90aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25MZXZlbENvbXBsZXRlPXt0aGlzLmhhbmRsZUxldmVsQ29tcGxldGUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFydGljbGVFZmZlY3Q9e3RoaXMuaGFuZGxlUGFydGljbGVFZmZlY3QuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgYmFja2dyb3VuZEVmZmVjdCA9ICdidWJibGVzJ1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSBNT0RFX0ZJTklTSEVEOlxuICAgICAgICBtYWluID0gPFNjZW5lRmluaXNoZWQgcG9pbnRzPXt0aGlzLnN0YXRlLnBvaW50c30gLz5cbiAgICAgICAgYmFja2dyb3VuZEVmZmVjdCA9ICdmaXJld29ya3MnXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OiBicmVha1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cbiAgICAgICAgXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Db21wdXRhcyBFbW9qaSBHYW1lITwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsNzAwLDkwMFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9saWIvcHJvdG9uLm1pbi5qc1wiLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxMZXZlbFByb2dyZXNzQmFyIHNlY29uZHNMZWZ0PXtsZXZlbCA/IGxldmVsLnNlY29uZHNMZWZ0T2ZMZXZlbCA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHNUb3RhbD17R0FNRV9MRU5HVEhfSU5fU0VDT05EU30vPlxuXG4gICAgICAgIHtsZXZlbCA/IDxTY29yZURpc3BsYXkgc2NvcmU9e3BvaW50c30vPiA6IG51bGx9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICAgICAgPFBhcnRpY2xlQXJlYSByZWY9XCJwYXJ0aWNsZUFyZWFcIiBlZmZlY3Q9e2JhY2tncm91bmRFZmZlY3R9IC8+XG5cbiAgICAgICAgICB7bWFpbn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPERlYnVnQ29udHJvbHMgb25JbnB1dEVtb3Rpb249e3RoaXMuaGFuZGxlSW5wdXRFbW90aW9uLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lIl19 */\n/*@ sourceURL=pages/index.jsx */";
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
      this.setState({
        level: this.state.level + 1
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
              lineNumber: 172
            }
          });
          backgroundEffect = 'bubbles';
          break;

        case MODE_PLAYING_LEVEL:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["i" /* SceneLevel */], {
            level: this.state.level.level,
            lastInputEmotion: lastInputEmotion,
            onLevelComplete: this.handleLevelComplete.bind(this),
            onParticleEffect: this.handleParticleEffect.bind(this),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            }
          });
          backgroundEffect = 'bubbles';
          break;

        case MODE_FINISHED:
          main = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__game__["h" /* SceneFinished */], {
            points: this.state.points,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
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
          lineNumber: 190
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__hash,
        css: CSS
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, "Computas Emoji Game!"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:400,500,700,900",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("script", {
        src: "/static/lib/proton.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_LevelProgressBar__["a" /* default */], {
        secondsLeft: level ? level.secondsLeftOfLevel : null,
        secondsTotal: __WEBPACK_IMPORTED_MODULE_7__game__["g" /* GAME_LENGTH_IN_SECONDS */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), level ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ScoreDisplay__["a" /* default */], {
        score: points,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }) : null, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "game",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_ParticleArea__["a" /* default */], {
        ref: "particleArea",
        effect: backgroundEffect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), main), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_DebugControls__["a" /* default */], {
        onInputEmotion: this.handleInputEmotion.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
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
//# sourceMappingURL=4.9acac7e4069c69f265aa.hot-update.js.map