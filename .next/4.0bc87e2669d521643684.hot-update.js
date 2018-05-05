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
    _proton.addEmitter(createFireworksExplosionEmitter(x, y, new Proton.Span(100, 120)));
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
//# sourceMappingURL=4.0bc87e2669d521643684.hot-update.js.map