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
    key: "createParticleEffect",
    value: function createParticleEffect() {}
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
          lineNumber: 53
        },
        className: "jsx-3815973924" + " " + "background"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3815973924",
        css: "div.jsx-3815973924{position:absolute;left:0;right:0;bottom:0;top:0;z-index:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFydGljbGVBcmVhLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRDRCLEFBR3VDLGtCQUNYLE9BQ0MsUUFDQyxTQUNILE1BQ0ssV0FDZiIsImZpbGUiOiJjb21wb25lbnRzL1BhcnRpY2xlQXJlYS5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgUGFydGljbGVBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIE9ubHkgaW5jbHVkZSBjbGllbnQgc2lkZVxuICAgICAgICBpbml0aWFsaXplUHJvdG9uKHRoaXMucmVmcy5jb250YWluZXIsIHRoaXMucmVmcy5wYXJ0aWNsZXMpO1xuXG4gICAgICAgIHRoaXMuX2VuYWJsZUVtaXR0ZXIoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5lZmZlY3QgPT09IHRoaXMucHJvcHMuZWZmZWN0KVxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgc3dpdGNoIChwcmV2UHJvcHMuZWZmZWN0KSB7XG4gICAgICAgICAgICBjYXNlICdidWJibGVzJzpcbiAgICAgICAgICAgICAgICBkaXNhYmxlRW1pdHRlcihCVUJCTEVTKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdmaXJld29ya3MnOlxuICAgICAgICAgICAgICAgIGRpc2FibGVFbWl0dGVyKEZJUkVXT1JLUylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW5hYmxlRW1pdHRlcigpXG4gICAgfVxuXG4gICAgX2VuYWJsZUVtaXR0ZXIoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5lZmZlY3QpIHtcbiAgICAgICAgICAgIGNhc2UgJ2J1YmJsZXMnOlxuICAgICAgICAgICAgICAgIGVuYWJsZUVtaXR0ZXIoQlVCQkxFUylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZmlyZXdvcmtzJzpcbiAgICAgICAgICAgICAgICBlbmFibGVFbWl0dGVyKEZJUkVXT1JLUylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlUGFydGljbGVFZmZlY3QoKSB7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgZGVzdHJveSh0aGlzLnJlZnMucGFydGljbGVzKVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9XCJwYXJ0aWNsZXNcIj48L2NhbnZhcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBCVUJCTEVTID0gJ0JVQkJMRVMnXG5jb25zdCBGSVJFV09SS1MgPSAnRklSRVdPUktTJ1xuXG52YXIgX2FsbEVtaXR0ZXJzID0ge307XG52YXIgX3Byb3RvbiA9IG51bGw7XG5jb25zdCBidWJibGVDb2xvcnMgPSBbJyM1MjlCODgnLCAnI0NERDE4MCcsICcjRkZGQTMyJywgJyNGQjYyNTUnLCAnI0ZCNEE1MycsICcjRkY0RTUwJywgJyNGOUQ0MjMnXTtcblxudmFyIGluaXRpYWxpemVQcm90b24gPSBudWxsO1xudmFyIGVuYWJsZUVtaXR0ZXIgPSBudWxsO1xudmFyIGRpc2FibGVFbWl0dGVyID0gbnVsbDtcbnZhciBjcmVhdGVFeHBsb3Npb24gPSBudWxsOyBcblxuaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGNsYXNzIFByb3RvblRhZyBleHRlbmRzIFByb3Rvbi5Jbml0aWFsaXplIHtcblxuICAgICAgICBjb25zdHJ1Y3Rvcih0YWcpIHtcbiAgICAgICAgICAgIHN1cGVyKClcblxuICAgICAgICAgICAgdGhpcy50YWcgPSB0YWdcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRpYWxpemUocGFydGljbGUpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnRhZyA9IHRoaXMudGFnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplUHJvdG9uID0gZnVuY3Rpb24oY29udGFpbmVyLCBjYW52YXMpIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcsIHsgYW50aWFsaWFzOiB0cnVlLCBzdGVuY2lsOiBmYWxzZSwgZGVwdGg6IGZhbHNlLCBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUgfSk7XG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRhcmtlclwiO1xuXG4gICAgICAgIGNyZWF0ZVByb3RvbihjYW52YXMpO1xuICAgICAgICB0aWNrKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIF9wcm90b24uZGVzdHJveSgpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1YmJsZUVtaXR0ZXIod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBsZXQgZW1pdHRlciA9IG5ldyBQcm90b24uRW1pdHRlcigpO1xuICAgICAgICBlbWl0dGVyLnJhdGUgPSBuZXcgUHJvdG9uLlJhdGUobmV3IFByb3Rvbi5TcGFuKDIsIDgpLCBuZXcgUHJvdG9uLlNwYW4oLjA1LCAuMikpO1xuICAgIFxuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5NYXNzKDEpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uUmFkaXVzKDIwLCAyMDApKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uTGlmZSgyLCA0KSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLlBvc2l0aW9uKG5ldyBQcm90b24uUmVjdFpvbmUoMCwgMCwgd2lkdGgsIGhlaWdodCkpKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uQm9keShbJy9zdGF0aWMvaW1hZ2UvbG9nby5wbmcnXSwgMTI4KSk7XG4gICAgXG4gICAgICAgIGVtaXR0ZXIuYWRkQmVoYXZpb3VyKG5ldyBQcm90b24uQWxwaGEoMC4yLCAwLjgsIEluZmluaXR5LCBQcm90b24uZWFzZU91dEN1YmljKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkQmVoYXZpb3VyKG5ldyBQcm90b24uU2NhbGUoMSwgMCwgSW5maW5pdHksIFByb3Rvbi5lYXNlT3V0Q3ViaWMpKTtcbiAgICAgICAgZW1pdHRlci5hZGRCZWhhdmlvdXIobmV3IFByb3Rvbi5Sb3RhdGUoMCwgbmV3IFByb3Rvbi5TcGFuKC00LCA0KSwgJ3RvJywgSW5maW5pdHksIFByb3Rvbi5lYXNlT3V0Q3ViaWMpKTtcbiAgICAgICAgZW1pdHRlci5hZGRCZWhhdmlvdXIobmV3IFByb3Rvbi5Db2xvcihidWJibGVDb2xvcnMsICdyYW5kb20nKSk7XG4gICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbWl0dGVyOiBlbWl0dGVyXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlRmlyZXdvcmtzRXhwbG9zaW9uRW1pdHRlcih4LCB5KSB7XG4gICAgICAgIGxldCBlbWl0dGVyID0gbmV3IFByb3Rvbi5FbWl0dGVyKCk7XG4gICAgICAgIGVtaXR0ZXIucmF0ZSA9IG5ldyBQcm90b24uUmF0ZShuZXcgUHJvdG9uLlNwYW4oMjUwLCAzMDApLCAxKTtcbiAgICAgICAgZW1pdHRlci5hZGRJbml0aWFsaXplKG5ldyBQcm90b24uTWFzcygxKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLlJhZGl1cygzLCA3KSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLkxpZmUoMSwgMykpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5WKG5ldyBQcm90b24uU3Bhbig1LCA4KSwgbmV3IFByb3Rvbi5TcGFuKDAsIDM2MCksICdwb2xhcicpKTtcbiAgICAgICAgXG4gICAgICAgIGVtaXR0ZXIuYWRkQmVoYXZpb3VyKG5ldyBQcm90b24uUmFuZG9tRHJpZnQoMTAsIDEwLCAuMDUpKTtcbiAgICAgICAgZW1pdHRlci5hZGRCZWhhdmlvdXIobmV3IFByb3Rvbi5BbHBoYSgxLCAwKSk7XG4gICAgICAgIGVtaXR0ZXIuYWRkQmVoYXZpb3VyKG5ldyBQcm90b24uR3Jhdml0eSgzKSk7XG4gICAgICAgIHZhciBjb2xvciA9IE1hdGgucmFuZG9tKCkgPiAuMyA/IFByb3Rvbi5NYXRoVXRpbHMucmFuZG9tQ29sb3IoKSA6ICdyYW5kb20nO1xuICAgICAgICBlbWl0dGVyLmFkZEJlaGF2aW91cihuZXcgUHJvdG9uLkNvbG9yKGNvbG9yKSk7XG4gICAgICAgIFxuICAgICAgICBlbWl0dGVyLnAueCA9IHg7XG4gICAgICAgIGVtaXR0ZXIucC55ID0geTtcbiAgICAgICAgZW1pdHRlci5lbWl0KCdvbmNlJywgdHJ1ZSk7XG4gICAgXG4gICAgICAgIHJldHVybiBlbWl0dGVyXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIG9uUGFydGljbGVEZWFkTWFrZUZpcmV3b3JrcyhwYXJ0aWNsZSkge1xuICAgICAgICBpZiAocGFydGljbGUudGFnID09PSAnZmlyZXdvcmsnKSB7XG4gICAgICAgICAgICBfcHJvdG9uLmFkZEVtaXR0ZXIoY3JlYXRlRmlyZXdvcmtzRXhwbG9zaW9uRW1pdHRlcihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGaXJld29ya3NFbWl0dGVyKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgbGV0IGVtaXR0ZXIgPSBuZXcgUHJvdG9uLkVtaXR0ZXIoKTtcbiAgICAgICAgZW1pdHRlci5yYXRlID0gbmV3IFByb3Rvbi5SYXRlKG5ldyBQcm90b24uU3BhbigyLCAzKSwgMC41KTtcbiAgICAgICAgXG4gICAgICAgIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShuZXcgUHJvdG9uLk1hc3MoMSkpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5SYWRpdXMoMywgNykpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5QKG5ldyBQcm90b24uTGluZVpvbmUoMTAsIGhlaWdodCwgd2lkdGggLSAxMCwgaGVpZ2h0KSkpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5MaWZlKDAuNzUsIDEuMikpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3Rvbi5WKG5ldyBQcm90b24uU3Bhbig0LCAxNSksIG5ldyBQcm90b24uU3BhbigyLCA1LCB0cnVlKSwgJ3BvbGFyJykpO1xuICAgICAgICBlbWl0dGVyLmFkZEluaXRpYWxpemUobmV3IFByb3RvblRhZygnZmlyZXdvcmsnKSlcbiAgICBcbiAgICAgICAgZW1pdHRlci5hZGRCZWhhdmlvdXIobmV3IFByb3Rvbi5HcmF2aXR5KDEpKTtcbiAgICAgICAgZW1pdHRlci5hZGRCZWhhdmlvdXIobmV3IFByb3Rvbi5Db2xvcignI2ZmMDAwMCcsICdyYW5kb20nKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1pdHRlcjogZW1pdHRlcixcbiAgICAgICAgICAgIG9uRW5hYmxlOiAocHJvdG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvdG9uLmFkZEV2ZW50TGlzdGVuZXIoUHJvdG9uLlBBUlRJQ0xFX0RFQUQsIG9uUGFydGljbGVEZWFkTWFrZUZpcmV3b3Jrcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25EaXNhYmxlOiAocHJvdG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvdG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoUHJvdG9uLlBBUlRJQ0xFX0RFQUQsIG9uUGFydGljbGVEZWFkTWFrZUZpcmV3b3JrcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvdG9uKGNhbnZhcykge1xuICAgICAgICBfcHJvdG9uID0gbmV3IFByb3RvbjtcbiAgICAgICAgXG4gICAgICAgIF9hbGxFbWl0dGVyc1tCVUJCTEVTXSA9IGNyZWF0ZUJ1YmJsZUVtaXR0ZXIoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgICAgICBfYWxsRW1pdHRlcnNbRklSRVdPUktTXSA9IGNyZWF0ZUZpcmV3b3Jrc0VtaXR0ZXIoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIFxuICAgICAgICBsZXQgcmVuZGVyZXIgPSBuZXcgUHJvdG9uLldlYkdMUmVuZGVyZXIoY2FudmFzKTtcbiAgICAgICAgcmVuZGVyZXIub25Qcm90b25VcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwLjIpXG4gICAgICAgICAgICB0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuZ2wuREVQVEhfQlVGRkVSX0JJVClcbiAgICAgICAgfTtcbiAgICAgICAgX3Byb3Rvbi5hZGRSZW5kZXJlcihyZW5kZXJlcik7XG4gICAgfVxuICAgIFxuICAgIGVuYWJsZUVtaXR0ZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBfYWxsRW1pdHRlcnNbbmFtZV1cbiAgICAgICAgXG4gICAgICAgIGlmIChlbWl0dGVyLm9uRW5hYmxlKVxuICAgICAgICAgICAgZW1pdHRlci5vbkVuYWJsZShfcHJvdG9uKVxuXG4gICAgICAgIGVtaXR0ZXIuZW1pdHRlci5lbWl0KClcbiAgICAgICAgX3Byb3Rvbi5hZGRFbWl0dGVyKGVtaXR0ZXIuZW1pdHRlcik7XG4gICAgfVxuICAgIFxuICAgIGRpc2FibGVFbWl0dGVyID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCBlbWl0dGVyID0gX2FsbEVtaXR0ZXJzW25hbWVdXG4gICAgICAgIGVtaXR0ZXIuZW1pdHRlci5zdG9wKClcbiAgICAgICAgX3Byb3Rvbi5yZW1vdmVFbWl0dGVyKGVtaXR0ZXIuZW1pdHRlcilcblxuICAgICAgICBpZiAoZW1pdHRlci5vbkRpc2FibGUpXG4gICAgICAgICAgICBlbWl0dGVyLm9uRGlzYWJsZShfcHJvdG9uKVxuICAgIH1cblxuICAgIGNyZWF0ZUV4cGxvc2lvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUZpcmV3b3Jrc0V4cGxvc2lvbkVtaXR0ZXIoeCwgeSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgX3Byb3Rvbi51cGRhdGUoKVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFydGljbGVBcmVhIl19 */\n/*@ sourceURL=components/ParticleArea.jsx */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        ref: "particles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
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
var createExplosion = null;

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

  createExplosion = function createExplosion(x, y) {
    return createFireworksExplosionEmitter(x, y);
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
  reactHotLoader.register(createExplosion, "createExplosion", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  reactHotLoader.register(_default, "default", "/Users/han/Projects/facegame/components/ParticleArea.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=4.86300ef0dd55a57b950e.hot-update.js.map