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
  level: null
};
var CSS = new String("html,body,#__next,.board{height:100%;font-family:Roboto,sans-serif;}body{background:black;margin:0;}.game{position:absolute;left:0;right:0;bottom:0;top:5vh;}.waiting-to-start{margin:auto;top:50%;}.emoji{display:block;-webkit-transition:opacity 0.2s linear,-webkit-transform 0.2s linear;-webkit-transition:opacity 0.2s linear,transform 0.2s linear;transition:opacity 0.2s linear,transform 0.2s linear;}::selection{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmUsQUFHZSxBQUtLLEFBS0MsQUFRTixBQUtFLEFBS1csWUEzQk0sQUFrQnZCLEVBSzhDLEdBbEI3QyxDQUtGLEVBU1QsR0FTQSxFQWpCVSxDQUxWLE9BTVcsU0FYWCxBQVlVLFFBQ1YsbUpBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVBcmVhJ1xuaW1wb3J0IERlYnVnQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZWJ1Z0NvbnRyb2xzJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgTGV2ZWxQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCwgU2NlbmVXYWl0aW5nVG9TdGFydCwgU2NlbmVMZXZlbCwgU2NlbmVGaW5pc2hlZCwgR0FNRV9MRU5HVEhfSU5fU0VDT05EUyB9IGZyb20gJy4uL2dhbWUnXG5pbXBvcnQgU2NvcmVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmVEaXNwbGF5JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmNvbnN0IE1PREVfV0FJVElOR19UT19TVEFSVCA9ICdXQUlUSU5HX1RPX1NUQVJUJ1xuY29uc3QgTU9ERV9QTEFZSU5HX0xFVkVMID0gJ1BMQVlJTkdfTEVWRUwnXG5jb25zdCBNT0RFX0ZJTklTSEVEID0gJ0ZJTklTSEVEJ1xuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlQsXG4gIGxldmVsOiBudWxsLFxufVxuXG5jb25zdCBDU1MgPSBjc3NgXG5odG1sLCBib2R5LCAjX19uZXh0LCAuYm9hcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgbWFyZ2luOiAwO1xufVxuXG4uZ2FtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiA1dmg7XG59XG5cbi53YWl0aW5nLXRvLXN0YXJ0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDUwJTtcbn1cblxuLmVtb2ppIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXIsIHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuYFxuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0gX0RlZmF1bHRTdGF0ZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVHYW1lVGljaygpXG4gICAgfSwgMjAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gRXZlbnQgaGFuZGxlcnNcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIGhhbmRsZUdhbWVUaWNrKCkge1xuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vZGUpIHtcbiAgICAgICAgY2FzZSBNT0RFX1dBSVRJTkdfVE9fU1RBUlQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgXG4gICAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICAgIGNvbnN0IHNlY29uZHNMZWZ0T2ZMZXZlbCA9IHRoaXMuc3RhdGUubGV2ZWwuc2Vjb25kc0xlZnRPZkxldmVsIC0gMC4yXG4gICAgICAgICAgaWYgKHNlY29uZHNMZWZ0T2ZMZXZlbCA8IDApIHtcbiAgICAgICAgICAgIC8vIEZpbmlzaCBnYW1lXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbW9kZTogTU9ERV9GSU5JU0hFRCxcbiAgICAgICAgICAgICAgbGV2ZWw6IG51bGwsXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBSZXNldCBnYW1lIGFmdGVyIDVzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kZTogTU9ERV9XQUlUSU5HX1RPX1NUQVJUXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4xKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5zdGF0ZS5wb2ludHMgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGxldmVsOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5sZXZlbCxcbiAgICAgICAgICAgICAgICBzZWNvbmRzTGVmdE9mTGV2ZWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIE1PREVfRklOSVNIRUQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0RW1vdGlvbihlbW90aW9uKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vZGUpIHtcbiAgICAgIGNhc2UgTU9ERV9XQUlUSU5HX1RPX1NUQVJUOlxuICAgICAgICBpZiAoZW1vdGlvbiA9PSBFTU9USU9OX0hBUFBZKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBNT0RFX1BMQVlJTkdfTEVWRUwsXG4gICAgICAgICAgICBwb2ludHM6IDAsXG4gICAgICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgICBzdGFydGVkQXQ6IERhdGVUaW1lLmxvY2FsKCksXG4gICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbDogR0FNRV9MRU5HVEhfSU5fU0VDT05EU1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUmVuZGVyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21vZGUsIGxldmVsLCBwb2ludHN9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IG1haW4gPSBudWxsXG4gICAgbGV0IGJhY2tncm91bmRFZmZlY3QgPSBudWxsXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZVdhaXRpbmdUb1N0YXJ0IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICBtYWluID0gPFNjZW5lTGV2ZWwgbGV2ZWw9ezF9IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9GSU5JU0hFRDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZUZpbmlzaGVkIHBvaW50cz17dGhpcy5zdGF0ZS5wb2ludHN9IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnZmlyZXdvcmtzJ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57Q1NTfTwvc3R5bGU+XG4gICAgICAgIFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+Q29tcHV0YXMgRW1vamkgR2FtZSE8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMCw5MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvbGliL3Byb3Rvbi5taW4uanNcIi8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8TGV2ZWxQcm9ncmVzc0JhciBzZWNvbmRzTGVmdD17bGV2ZWwgPyBsZXZlbC5zZWNvbmRzTGVmdE9mTGV2ZWwgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzVG90YWw9e0dBTUVfTEVOR1RIX0lOX1NFQ09ORFN9Lz5cblxuICAgICAgICB7bGV2ZWwgPyA8U2NvcmVEaXNwbGF5IHNjb3JlPXtwb2ludHN9Lz4gOiBudWxsfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuICAgICAgICAgIDxQYXJ0aWNsZUFyZWEgZWZmZWN0PXtiYWNrZ3JvdW5kRWZmZWN0fSAvPlxuXG4gICAgICAgICAge21haW59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxEZWJ1Z0NvbnRyb2xzIG9uSW5wdXRFbW90aW9uPXt0aGlzLmhhbmRsZUlucHV0RW1vdGlvbi5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdfQ== */\n/*@ sourceURL=pages/index.jsx */");
CSS.__hash = "1249369210";
CSS.__scoped = "html.jsx-1974858171,body.jsx-1974858171,#__next.jsx-1974858171,.board.jsx-1974858171{height:100%;font-family:Roboto,sans-serif;}body.jsx-1974858171{background:black;margin:0;}.game.jsx-1974858171{position:absolute;left:0;right:0;bottom:0;top:5vh;}.waiting-to-start.jsx-1974858171{margin:auto;top:50%;}.emoji.jsx-1974858171{display:block;-webkit-transition:opacity 0.2s linear,-webkit-transform 0.2s linear;-webkit-transition:opacity 0.2s linear,transform 0.2s linear;transition:opacity 0.2s linear,transform 0.2s linear;}.jsx-1974858171::selection{background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmUsQUFHZSxBQUtLLEFBS0MsQUFRTixBQUtFLEFBS1csWUEzQk0sQUFrQnZCLEVBSzhDLEdBbEI3QyxDQUtGLEVBU1QsR0FTQSxFQWpCVSxDQUxWLE9BTVcsU0FYWCxBQVlVLFFBQ1YsbUpBVUEiLCJmaWxlIjoicGFnZXMvaW5kZXguanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW4vUHJvamVjdHMvZmFjZWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvUGFydGljbGVBcmVhJ1xuaW1wb3J0IERlYnVnQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZWJ1Z0NvbnRyb2xzJ1xuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgTGV2ZWxQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsUHJvZ3Jlc3NCYXInXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCwgU2NlbmVXYWl0aW5nVG9TdGFydCwgU2NlbmVMZXZlbCwgU2NlbmVGaW5pc2hlZCwgR0FNRV9MRU5HVEhfSU5fU0VDT05EUyB9IGZyb20gJy4uL2dhbWUnXG5pbXBvcnQgU2NvcmVEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2NvcmVEaXNwbGF5JztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmNvbnN0IE1PREVfV0FJVElOR19UT19TVEFSVCA9ICdXQUlUSU5HX1RPX1NUQVJUJ1xuY29uc3QgTU9ERV9QTEFZSU5HX0xFVkVMID0gJ1BMQVlJTkdfTEVWRUwnXG5jb25zdCBNT0RFX0ZJTklTSEVEID0gJ0ZJTklTSEVEJ1xuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBNT0RFX1dBSVRJTkdfVE9fU1RBUlQsXG4gIGxldmVsOiBudWxsLFxufVxuXG5jb25zdCBDU1MgPSBjc3NgXG5odG1sLCBib2R5LCAjX19uZXh0LCAuYm9hcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgbWFyZ2luOiAwO1xufVxuXG4uZ2FtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiA1dmg7XG59XG5cbi53YWl0aW5nLXRvLXN0YXJ0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDUwJTtcbn1cblxuLmVtb2ppIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXIsIHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuYFxuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0gX0RlZmF1bHRTdGF0ZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVHYW1lVGljaygpXG4gICAgfSwgMjAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gRXZlbnQgaGFuZGxlcnNcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIGhhbmRsZUdhbWVUaWNrKCkge1xuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vZGUpIHtcbiAgICAgICAgY2FzZSBNT0RFX1dBSVRJTkdfVE9fU1RBUlQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgXG4gICAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICAgIGNvbnN0IHNlY29uZHNMZWZ0T2ZMZXZlbCA9IHRoaXMuc3RhdGUubGV2ZWwuc2Vjb25kc0xlZnRPZkxldmVsIC0gMC4yXG4gICAgICAgICAgaWYgKHNlY29uZHNMZWZ0T2ZMZXZlbCA8IDApIHtcbiAgICAgICAgICAgIC8vIEZpbmlzaCBnYW1lXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbW9kZTogTU9ERV9GSU5JU0hFRCxcbiAgICAgICAgICAgICAgbGV2ZWw6IG51bGwsXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBSZXNldCBnYW1lIGFmdGVyIDVzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kZTogTU9ERV9XQUlUSU5HX1RPX1NUQVJUXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4xKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBvaW50czogdGhpcy5zdGF0ZS5wb2ludHMgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGxldmVsOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5sZXZlbCxcbiAgICAgICAgICAgICAgICBzZWNvbmRzTGVmdE9mTGV2ZWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIE1PREVfRklOSVNIRUQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0RW1vdGlvbihlbW90aW9uKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vZGUpIHtcbiAgICAgIGNhc2UgTU9ERV9XQUlUSU5HX1RPX1NUQVJUOlxuICAgICAgICBpZiAoZW1vdGlvbiA9PSBFTU9USU9OX0hBUFBZKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBNT0RFX1BMQVlJTkdfTEVWRUwsXG4gICAgICAgICAgICBwb2ludHM6IDAsXG4gICAgICAgICAgICBsZXZlbDoge1xuICAgICAgICAgICAgICBzdGFydGVkQXQ6IERhdGVUaW1lLmxvY2FsKCksXG4gICAgICAgICAgICAgIHNlY29uZHNMZWZ0T2ZMZXZlbDogR0FNRV9MRU5HVEhfSU5fU0VDT05EU1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUmVuZGVyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21vZGUsIGxldmVsLCBwb2ludHN9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IG1haW4gPSBudWxsXG4gICAgbGV0IGJhY2tncm91bmRFZmZlY3QgPSBudWxsXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIE1PREVfV0FJVElOR19UT19TVEFSVDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZVdhaXRpbmdUb1N0YXJ0IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9QTEFZSU5HX0xFVkVMOlxuICAgICAgICBtYWluID0gPFNjZW5lTGV2ZWwgbGV2ZWw9ezF9IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnYnViYmxlcydcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTU9ERV9GSU5JU0hFRDpcbiAgICAgICAgbWFpbiA9IDxTY2VuZUZpbmlzaGVkIHBvaW50cz17dGhpcy5zdGF0ZS5wb2ludHN9IC8+XG4gICAgICAgIGJhY2tncm91bmRFZmZlY3QgPSAnZmlyZXdvcmtzJ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57Q1NTfTwvc3R5bGU+XG4gICAgICAgIFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+Q29tcHV0YXMgRW1vamkgR2FtZSE8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMCw5MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvbGliL3Byb3Rvbi5taW4uanNcIi8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8TGV2ZWxQcm9ncmVzc0JhciBzZWNvbmRzTGVmdD17bGV2ZWwgPyBsZXZlbC5zZWNvbmRzTGVmdE9mTGV2ZWwgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzVG90YWw9e0dBTUVfTEVOR1RIX0lOX1NFQ09ORFN9Lz5cblxuICAgICAgICB7bGV2ZWwgPyA8U2NvcmVEaXNwbGF5IHNjb3JlPXtwb2ludHN9Lz4gOiBudWxsfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuICAgICAgICAgIDxQYXJ0aWNsZUFyZWEgZWZmZWN0PXtiYWNrZ3JvdW5kRWZmZWN0fSAvPlxuXG4gICAgICAgICAge21haW59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxEZWJ1Z0NvbnRyb2xzIG9uSW5wdXRFbW90aW9uPXt0aGlzLmhhbmRsZUlucHV0RW1vdGlvbi5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdfQ== */\n/*@ sourceURL=pages/index.jsx */";
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
            level: 1,
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
//# sourceMappingURL=4.8b229256f73496b9fa3b.hot-update.js.map