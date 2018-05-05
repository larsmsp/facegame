webpackHotUpdate(4,{

/***/ "./components/ParticleArea.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/han/Projects/facegame/components/ParticleArea.jsx";


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
      debugger;

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
          lineNumber: 55
        },
        className: "jsx-3815973924" + " " + "background"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3815973924",
        css: "div.jsx-3815973924{position:absolute;left:0;right:0;bottom:0;top:0;z-index:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFydGljbGVBcmVhLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RDRCLEFBR3VDLGtCQUNYLE9BQ0MsUUFDQyxTQUNILE1BQ0ssV0FDZiIsImZpbGUiOiJjb21wb25lbnRzL1BhcnRpY2xlQXJlYS5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgUGFydGljbGVBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIE9ubHkgaW5jbHVkZSBjbGllbnQgc2lkZVxuICAgICAgICBpbml0aWFsaXplUHJvdG9uKHRoaXMucmVmcy5jb250YWluZXIsIHRoaXMucmVmcy5wYXJ0aWNsZXMpO1xuXG4gICAgICAgIHRoaXMuX2VuYWJsZUVtaXR0ZXIoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5lZmZlY3QgPT09IHRoaXMucHJvcHMuZWZmZWN0KVxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgc3dpdGNoIChwcmV2UHJvcHMuZWZmZWN0KSB7XG4gICAgICAgICAgICBjYXNlICdidWJibGVzJzpcbiAgICAgICAgICAgICAgICBkaXNhYmxlRW1pdHRlcihCVUJCTEVTKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdmaXJld29ya3MnOlxuICAgICAgICAgICAgICAgIGRpc2FibGVFbWl0dGVyKEZJUkVXT1JLUylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW5hYmxlRW1pdHRlcigpXG4gICAgfVxuXG4gICAgX2VuYWJsZUVtaXR0ZXIoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5lZmZlY3QpIHtcbiAgICAgICAgICAgIGNhc2UgJ2J1YmJsZXMnOlxuICAgICAgICAgICAgICAgIGVuYWJsZUVtaXR0ZXIoQlVCQkxFUylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZmlyZXdvcmtzJzpcbiAgICAgICAgICAgICAgICBlbmFibGVFbWl0dGVyKEZJUkVXT1JLUylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlRXhwbG9zaW9uKHgsIHkpIHtcbiAgICAgICAgLy8gVHJhbnNmb3JtIGNvb3JkaW5hdGUgc3lzdGVtXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIF9jcmVhdGVFeHBsb3Npb24oeCwgeSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgZGVzdHJveSh0aGlzLnJlZnMucGFydGljbGVzKVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9XCJwYXJ0aWNsZXNcIj48L2NhbnZhcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBCVUJCTEVTID0gJ0JVQkJMRVMnXG5jb25zdCBGSVJFV09SS1MgPSAnRklSRVdPUktTJ1xuXG52YXIgX2FsbEVtaXR0ZXJzID0ge307XG52YXIgX3Byb3RvbiA9IG51bGw7XG5jb25zdCBidWJibGVDb2xvcnMgPSBbJyM1MjlCODgnLCAnI0NERDE4MCcsICcjRkZGQTMyJywgJyNGQjYyNTUnLCAnI0ZCNEE1MycsICcjRkY0RTUwJywgJyNGOUQ0MjMnXTtcblxudmFyIGluaXRpYWxpemVQcm90b24gPSBudWxsO1xudmFyIGVuYWJsZUVtaXR0ZXIgPSBudWxsO1xudmFyIGRpc2FibGVFbWl0dGVyID0gbnVsbDtcbnZhciBfY3JlYXRlRXhwbG9zaW9uID0gbnVsbDsgXG5cbmlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBjbGFzcyBQcm90b25UYWcgZXh0ZW5kcyBQcm90b24uSW5pdGlhbGl6ZSB7XG5cbiAgICAgICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgICAgIHRoaXMudGFnID0gdGFnXG4gICAgICAgIH1cblxuICAgICAgICBpbml0aWFsaXplKHBhcnRpY2xlKSB7XG4gICAgICAgICAgICBwYXJ0aWNsZS50YWcgPSB0aGlzLnRhZ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZVByb3RvbiA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgY2FudmFzKSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCB7IGFudGlhbGlhczogdHJ1ZSwgc3RlbmNpbDogZmFsc2UsIGRlcHRoOiBmYWxzZSwgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlIH0pO1xuICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkYXJrZXJcIjtcblxuICAgICAgICBjcmVhdGVQcm90b24oY2FudmFzKTtcbiAgICAgICAgdGljaygpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBfcHJvdG9uLmRlc3Ryb3koKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVCdWJibGVFbWl0dGVyKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgUHJvdG9uLkVtaXR0ZXIoKTtcbiAgICAgICAgZW1pdHRlci5yYXRlID0gbmV3IFByb3Rvbi5SYXRlKG5ldyBQcm90b24uU3BhbigyLCA4KSwgbmV3IFByb3Rvbi5TcGFuKC4wNSwgLjIpKTtcbiAgICBcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uTWFzcygxKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLlJhZGl1cygyMCwgMjAwKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLkxpZmUoMiwgNCkpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5Qb3NpdGlvbihuZXcgUHJvdG9uLlJlY3Rab25lKDAsIDAsIHdpZHRoLCBoZWlnaHQpKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLkJvZHkoWycvc3RhdGljL2ltYWdlL2xvZ28ucG5nJ10sIDEyOCkpO1xuICAgIFxuICAgICAgICBlbWl0dGVyLmFkZEJlaGF2aW91cihuZXcgUHJvdG9uLkFscGhhKDAuMiwgMC44LCBJbmZpbml0eSwgUHJvdG9uLmVhc2VPdXRDdWJpYykpO1xuICAgICAgICBlbWl0dGVyLmFkZEJlaGF2aW91cihuZXcgUHJvdG9uLlNjYWxlKDEsIDAsIEluZmluaXR5LCBQcm90b24uZWFzZU91dEN1YmljKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkQmVoYXZpb3VyKG5ldyBQcm90b24uUm90YXRlKDAsIG5ldyBQcm90b24uU3BhbigtNCwgNCksICd0bycsIEluZmluaXR5LCBQcm90b24uZWFzZU91dEN1YmljKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkQmVoYXZpb3VyKG5ldyBQcm90b24uQ29sb3IoYnViYmxlQ29sb3JzLCAncmFuZG9tJykpO1xuICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1pdHRlcjogZW1pdHRlclxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpcmV3b3Jrc0V4cGxvc2lvbkVtaXR0ZXIoeCwgeSkge1xuICAgICAgICBsZXQgZW1pdHRlciA9IG5ldyBQcm90b24uRW1pdHRlcigpO1xuICAgICAgICBlbWl0dGVyLnJhdGUgPSBuZXcgUHJvdG9uLlJhdGUobmV3IFByb3Rvbi5TcGFuKDI1MCwgMzAwKSwgMSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLk1hc3MoMSkpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5SYWRpdXMoMywgNykpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5MaWZlKDEsIDMpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uVihuZXcgUHJvdG9uLlNwYW4oNSwgOCksIG5ldyBQcm90b24uU3BhbigwLCAzNjApLCAncG9sYXInKSk7XG4gICAgICAgIFxuICAgICAgICBlbWl0dGVyLmFkZEJlaGF2aW91cihuZXcgUHJvdG9uLlJhbmRvbURyaWZ0KDEwLCAxMCwgLjA1KSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkQmVoYXZpb3VyKG5ldyBQcm90b24uQWxwaGEoMSwgMCkpO1xuICAgICAgICBlbWl0dGVyLmFkZEJlaGF2aW91cihuZXcgUHJvdG9uLkdyYXZpdHkoMykpO1xuICAgICAgICB2YXIgY29sb3IgPSBNYXRoLnJhbmRvbSgpID4gLjMgPyBQcm90b24uTWF0aFV0aWxzLnJhbmRvbUNvbG9yKCkgOiAncmFuZG9tJztcbiAgICAgICAgZW1pdHRlci5hZGRCZWhhdmlvdXIobmV3IFByb3Rvbi5Db2xvcihjb2xvcikpO1xuICAgICAgICBcbiAgICAgICAgZW1pdHRlci5wLnggPSB4O1xuICAgICAgICBlbWl0dGVyLnAueSA9IHk7XG4gICAgICAgIGVtaXR0ZXIuZW1pdCgnb25jZScsIHRydWUpO1xuICAgIFxuICAgICAgICByZXR1cm4gZW1pdHRlclxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBvblBhcnRpY2xlRGVhZE1ha2VGaXJld29ya3MocGFydGljbGUpIHtcbiAgICAgICAgaWYgKHBhcnRpY2xlLnRhZyA9PT0gJ2ZpcmV3b3JrJykge1xuICAgICAgICAgICAgX3Byb3Rvbi5hZGRFbWl0dGVyKGNyZWF0ZUZpcmV3b3Jrc0V4cGxvc2lvbkVtaXR0ZXIocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRmlyZXdvcmtzRW1pdHRlcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGxldCBlbWl0dGVyID0gbmV3IFByb3Rvbi5FbWl0dGVyKCk7XG4gICAgICAgIGVtaXR0ZXIucmF0ZSA9IG5ldyBQcm90b24uUmF0ZShuZXcgUHJvdG9uLlNwYW4oMiwgMyksIDAuNSk7XG4gICAgICAgIFxuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5NYXNzKDEpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uUmFkaXVzKDMsIDcpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uUChuZXcgUHJvdG9uLkxpbmVab25lKDEwLCBoZWlnaHQsIHdpZHRoIC0gMTAsIGhlaWdodCkpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uTGlmZSgwLjc1LCAxLjIpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uVihuZXcgUHJvdG9uLlNwYW4oNCwgMTUpLCBuZXcgUHJvdG9uLlNwYW4oMiwgNSwgdHJ1ZSksICdwb2xhcicpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b25UYWcoJ2ZpcmV3b3JrJykpXG4gICAgXG4gICAgICAgIGVtaXR0ZXIuYWRkQmVoYXZpb3VyKG5ldyBQcm90b24uR3Jhdml0eSgxKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkQmVoYXZpb3VyKG5ldyBQcm90b24uQ29sb3IoJyNmZjAwMDAnLCAncmFuZG9tJykpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtaXR0ZXI6IGVtaXR0ZXIsXG4gICAgICAgICAgICBvbkVuYWJsZTogKHByb3RvbikgPT4ge1xuICAgICAgICAgICAgICAgIHByb3Rvbi5hZGRFdmVudExpc3RlbmVyKFByb3Rvbi5QQVJUSUNMRV9ERUFELCBvblBhcnRpY2xlRGVhZE1ha2VGaXJld29ya3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRGlzYWJsZTogKHByb3RvbikgPT4ge1xuICAgICAgICAgICAgICAgIHByb3Rvbi5yZW1vdmVFdmVudExpc3RlbmVyKFByb3Rvbi5QQVJUSUNMRV9ERUFELCBvblBhcnRpY2xlRGVhZE1ha2VGaXJld29ya3MpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3RvbihjYW52YXMpIHtcbiAgICAgICAgX3Byb3RvbiA9IG5ldyBQcm90b247XG4gICAgICAgIFxuICAgICAgICBfYWxsRW1pdHRlcnNbQlVCQkxFU10gPSBjcmVhdGVCdWJibGVFbWl0dGVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgICAgX2FsbEVtaXR0ZXJzW0ZJUkVXT1JLU10gPSBjcmVhdGVGaXJld29ya3NFbWl0dGVyKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICBcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbmV3IFByb3Rvbi5XZWJHTFJlbmRlcmVyKGNhbnZhcyk7XG4gICAgICAgIHJlbmRlcmVyLm9uUHJvdG9uVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMC4yKVxuICAgICAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQgfCB0aGlzLmdsLkRFUFRIX0JVRkZFUl9CSVQpXG4gICAgICAgIH07XG4gICAgICAgIF9wcm90b24uYWRkUmVuZGVyZXIocmVuZGVyZXIpO1xuICAgIH1cbiAgICBcbiAgICBlbmFibGVFbWl0dGVyID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCBlbWl0dGVyID0gX2FsbEVtaXR0ZXJzW25hbWVdXG4gICAgICAgIFxuICAgICAgICBpZiAoZW1pdHRlci5vbkVuYWJsZSlcbiAgICAgICAgICAgIGVtaXR0ZXIub25FbmFibGUoX3Byb3RvbilcblxuICAgICAgICBlbWl0dGVyLmVtaXR0ZXIuZW1pdCgpXG4gICAgICAgIF9wcm90b24uYWRkRW1pdHRlcihlbWl0dGVyLmVtaXR0ZXIpO1xuICAgIH1cbiAgICBcbiAgICBkaXNhYmxlRW1pdHRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgY29uc3QgZW1pdHRlciA9IF9hbGxFbWl0dGVyc1tuYW1lXVxuICAgICAgICBlbWl0dGVyLmVtaXR0ZXIuc3RvcCgpXG4gICAgICAgIF9wcm90b24ucmVtb3ZlRW1pdHRlcihlbWl0dGVyLmVtaXR0ZXIpXG5cbiAgICAgICAgaWYgKGVtaXR0ZXIub25EaXNhYmxlKVxuICAgICAgICAgICAgZW1pdHRlci5vbkRpc2FibGUoX3Byb3RvbilcbiAgICB9XG5cbiAgICBfY3JlYXRlRXhwbG9zaW9uID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICBfcHJvdG9uLmFkZEVtaXR0ZXIoY3JlYXRlRmlyZXdvcmtzRXhwbG9zaW9uRW1pdHRlcih4LCB5KSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgX3Byb3Rvbi51cGRhdGUoKVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFydGljbGVBcmVhIl19 */\n/*@ sourceURL=components/ParticleArea.jsx */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        ref: "particles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-3815973924"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
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

  var createFireworksExplosionEmitter = function createFireworksExplosionEmitter(x, y) {
    var emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(new Proton.Span(250, 300), 1);
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
      _proton.addEmitter(createFireworksExplosionEmitter(particle.p.x, particle.p.y));
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
    }, {
      key: "__reactstandin__regenerateByEval",
      value: function __reactstandin__regenerateByEval(key, code) {
        this[key] = eval(code);
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
    _proton.addEmitter(createFireworksExplosionEmitter(x, y));
  };
}

var _default = ParticleArea;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ParticleArea, "ParticleArea", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(BUBBLES, "BUBBLES", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(FIREWORKS, "FIREWORKS", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(_allEmitters, "_allEmitters", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(_proton, "_proton", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(bubbleColors, "bubbleColors", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(initializeProton, "initializeProton", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(enableEmitter, "enableEmitter", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(disableEmitter, "disableEmitter", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(_createExplosion, "_createExplosion", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(_default, "default", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=4.1d5c8a616448365fb666.hot-update.js.map