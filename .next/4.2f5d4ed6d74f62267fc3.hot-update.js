webpackHotUpdate(4,{

/***/ "./game/SceneLevel.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Emoji__ = __webpack_require__("./components/Emoji.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game__ = __webpack_require__("./game/index.js");
var _jsxFileName = "/Users/han/Projects/facegame/game/SceneLevel.jsx";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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




var CSS = new String(".level{position:absolute;left:50%;top:50%;width:100%;height:100%;}.level .emoji{position:absolute;font-size:60px;}.level .emoji.dead{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHdUIsQUFRQSxBQUtSLFVBQ2QsUUFiYSxBQVFNLFNBUFAsTUFRWixFQVBlLFdBQ0MsWUFDaEIiLCJmaWxlIjoiZ2FtZS9TY2VuZUxldmVsLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuL1Byb2plY3RzL2ZhY2VnYW1lIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRW1vamkgZnJvbSAnLi4vY29tcG9uZW50cy9FbW9qaSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgeyBBTExfRU1PVElPTlMsIEVNT1RJT05fQ09OVEVOVCwgRU1PVElPTl9BTkdSWSwgRU1PVElPTl9TQUQsIEVNT1RJT05fSEFQUFksIEVNT1RJT05fU1VQUklTRUQgfSBmcm9tICcuLi9nYW1lJ1xuXG5jb25zdCBDU1MgPSBjc3NgXG4ubGV2ZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGV2ZWwgLmVtb2ppIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4ubGV2ZWwgLmVtb2ppLmRlYWQge1xuICAgIG9wYWNpdHk6IDA7XG59XG5gXG5cbmNvbnN0IF9EZWZhdWx0U3RhdGUgPSB7XG4gICAgZW1vamlzOiBbXSxcbiAgICBlbmRpbmc6IGZhbHNlXG59XG5cbmNsYXNzIFNjZW5lTGV2ZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9EZWZhdWx0U3RhdGVcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKCdsZXZlbCAnICsgcHJldlByb3BzLmxldmVsICsgJyAhPSAnICsgdGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgaWYgKHByZXZQcm9wcy5sZXZlbCAhPT0gdGhpcy5wcm9wcy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhc3RJbnB1dEVtb3Rpb24gIT09IHByZXZQcm9wcy5sYXN0SW5wdXRFbW90aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9raWxsQWxsRW1vamlzKHRoaXMucHJvcHMubGFzdElucHV0RW1vdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVtb2ppcy5maWx0ZXIoZSA9PiAhZS5kZWFkKS5sZW5ndGggPT09IDAgJiYgIXRoaXMuc3RhdGUuZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlbmRpbmc6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25MZXZlbENvbXBsZXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckVtb2ppKGUsIGkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxFbW9qaSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgZW1vdGlvbj17ZS5lbW90aW9ufVxuICAgICAgICAgICAgICAgICAgIGRlYWQ9e2UuZGVhZH1cbiAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogZS54ICsgJ3Z3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogZS55ICsgJ3ZoJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtb2ppcy5tYXAodGhpcy5yZW5kZXJFbW9qaS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgdGhpcy5fa2lsbEFsbEVtb2ppcygpXG4gICAgICAgIGlmIChsZXZlbE5vID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUVtb2ppcyg1KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDEwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDIwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDMwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDUpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDQwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZ2VuZXJhdGVFbW9qaXMoNTApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbmRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG4gICAgICAgIGxldCBlbW9qaXMgPSBbLi4udGhpcy5zdGF0ZS5lbW9qaXNdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZW1vamlzLnB1c2godGhpcy5fbmV3RW1vamkoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1vamlzOiBlbW9qaXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfbmV3RW1vamkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbW90aW9uOiB0aGlzLl9yYW5kb21FbW90aW9uKCksXG4gICAgICAgICAgICB4OiAtMzAgKyBNYXRoLnJhbmRvbSgpICogNjAsXG4gICAgICAgICAgICB5OiAtMzAgKyBNYXRoLnJhbmRvbSgpICogNjAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfa2lsbEFsbEVtb2ppcyhlbW90aW9uVG9LaWxsID0gJycpIHtcbiAgICAgICAgbGV0IGVtb2ppcyA9IFsuLi50aGlzLnN0YXRlLmVtb2ppc11cbiAgICAgICAgaWYgKGVtb3Rpb25Ub0tpbGwgPT09ICcnKSB7XG4gICAgICAgICAgICBlbW9qaXMgPSBlbW9qaXMubWFwKHRoaXMuX2tpbGxFbW9qaS5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gS2lsbCBzcGVjaWZpYyB0eXBlXG4gICAgICAgICAgICBlbW9qaXMgPSBlbW9qaXMubWFwKGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmVtb3Rpb24gPT09IGVtb3Rpb25Ub0tpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tpbGxFbW9qaShlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbW9qaXM6IGVtb2ppc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9raWxsRW1vamkoZW1vamkpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvcHMub25QYXJ0aWNsZUVmZmVjdChlbW9qaS54LCBlbW9qaS55KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5lbW9qaSxcbiAgICAgICAgICAgIGRlYWQ6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yYW5kb21FbW90aW9uKCkge1xuICAgICAgICByZXR1cm4gQUxMX0VNT1RJT05TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEFMTF9FTU9USU9OUy5sZW5ndGgpXVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVMZXZlbCJdfQ== */\n/*@ sourceURL=game/SceneLevel.jsx */");
CSS.__hash = "701349969";
CSS.__scoped = ".level.jsx-3928734800{position:absolute;left:50%;top:50%;width:100%;height:100%;}.level.jsx-3928734800 .emoji.jsx-3928734800{position:absolute;font-size:60px;}.level.jsx-3928734800 .emoji.dead.jsx-3928734800{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHdUIsQUFRQSxBQUtSLFVBQ2QsUUFiYSxBQVFNLFNBUFAsTUFRWixFQVBlLFdBQ0MsWUFDaEIiLCJmaWxlIjoiZ2FtZS9TY2VuZUxldmVsLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuL1Byb2plY3RzL2ZhY2VnYW1lIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRW1vamkgZnJvbSAnLi4vY29tcG9uZW50cy9FbW9qaSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgeyBBTExfRU1PVElPTlMsIEVNT1RJT05fQ09OVEVOVCwgRU1PVElPTl9BTkdSWSwgRU1PVElPTl9TQUQsIEVNT1RJT05fSEFQUFksIEVNT1RJT05fU1VQUklTRUQgfSBmcm9tICcuLi9nYW1lJ1xuXG5jb25zdCBDU1MgPSBjc3NgXG4ubGV2ZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGV2ZWwgLmVtb2ppIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4ubGV2ZWwgLmVtb2ppLmRlYWQge1xuICAgIG9wYWNpdHk6IDA7XG59XG5gXG5cbmNvbnN0IF9EZWZhdWx0U3RhdGUgPSB7XG4gICAgZW1vamlzOiBbXSxcbiAgICBlbmRpbmc6IGZhbHNlXG59XG5cbmNsYXNzIFNjZW5lTGV2ZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9EZWZhdWx0U3RhdGVcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKCdsZXZlbCAnICsgcHJldlByb3BzLmxldmVsICsgJyAhPSAnICsgdGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgaWYgKHByZXZQcm9wcy5sZXZlbCAhPT0gdGhpcy5wcm9wcy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhc3RJbnB1dEVtb3Rpb24gIT09IHByZXZQcm9wcy5sYXN0SW5wdXRFbW90aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9raWxsQWxsRW1vamlzKHRoaXMucHJvcHMubGFzdElucHV0RW1vdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVtb2ppcy5maWx0ZXIoZSA9PiAhZS5kZWFkKS5sZW5ndGggPT09IDAgJiYgIXRoaXMuc3RhdGUuZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlbmRpbmc6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25MZXZlbENvbXBsZXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckVtb2ppKGUsIGkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxFbW9qaSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgZW1vdGlvbj17ZS5lbW90aW9ufVxuICAgICAgICAgICAgICAgICAgIGRlYWQ9e2UuZGVhZH1cbiAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogZS54ICsgJ3Z3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogZS55ICsgJ3ZoJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtb2ppcy5tYXAodGhpcy5yZW5kZXJFbW9qaS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgdGhpcy5fa2lsbEFsbEVtb2ppcygpXG4gICAgICAgIGlmIChsZXZlbE5vID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUVtb2ppcyg1KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDEwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDIwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDMwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxldmVsTm8gPT09IDUpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDQwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZ2VuZXJhdGVFbW9qaXMoNTApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbmRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG4gICAgICAgIGxldCBlbW9qaXMgPSBbLi4udGhpcy5zdGF0ZS5lbW9qaXNdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZW1vamlzLnB1c2godGhpcy5fbmV3RW1vamkoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1vamlzOiBlbW9qaXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfbmV3RW1vamkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbW90aW9uOiB0aGlzLl9yYW5kb21FbW90aW9uKCksXG4gICAgICAgICAgICB4OiAtMzAgKyBNYXRoLnJhbmRvbSgpICogNjAsXG4gICAgICAgICAgICB5OiAtMzAgKyBNYXRoLnJhbmRvbSgpICogNjAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfa2lsbEFsbEVtb2ppcyhlbW90aW9uVG9LaWxsID0gJycpIHtcbiAgICAgICAgbGV0IGVtb2ppcyA9IFsuLi50aGlzLnN0YXRlLmVtb2ppc11cbiAgICAgICAgaWYgKGVtb3Rpb25Ub0tpbGwgPT09ICcnKSB7XG4gICAgICAgICAgICBlbW9qaXMgPSBlbW9qaXMubWFwKHRoaXMuX2tpbGxFbW9qaS5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gS2lsbCBzcGVjaWZpYyB0eXBlXG4gICAgICAgICAgICBlbW9qaXMgPSBlbW9qaXMubWFwKGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmVtb3Rpb24gPT09IGVtb3Rpb25Ub0tpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tpbGxFbW9qaShlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbW9qaXM6IGVtb2ppc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9raWxsRW1vamkoZW1vamkpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvcHMub25QYXJ0aWNsZUVmZmVjdChlbW9qaS54LCBlbW9qaS55KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5lbW9qaSxcbiAgICAgICAgICAgIGRlYWQ6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yYW5kb21FbW90aW9uKCkge1xuICAgICAgICByZXR1cm4gQUxMX0VNT1RJT05TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEFMTF9FTU9USU9OUy5sZW5ndGgpXVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVMZXZlbCJdfQ== */\n/*@ sourceURL=game/SceneLevel.jsx */";
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
        this._killAllEmojis(this.props.lastInputEmotion);
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
          lineNumber: 63
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
          lineNumber: 76
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

      if (emotionToKill === '') {
        emojis = emojis.map(this._killEmoji.bind(this));
      } else {
        // Kill specific type
        emojis = emojis.map(function (e) {
          if (e.emotion === emotionToKill) {
            return _this2._killEmoji(e);
          }

          return e;
        });
      }

      this.setState({
        emojis: emojis
      });
    }
  }, {
    key: "_killEmoji",
    value: function _killEmoji(emoji) {
      this.props.onParticleEffect(emoji.x, emoji.y);
      return _objectSpread({}, emoji, {
        dead: true
      });
    }
  }, {
    key: "_randomEmotion",
    value: function _randomEmotion() {
      return __WEBPACK_IMPORTED_MODULE_3__game__["a" /* ALL_EMOTIONS */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_3__game__["a" /* ALL_EMOTIONS */].length)];
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SceneLevel;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var _default = SceneLevel;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CSS, "CSS", "/Users/han/Projects/facegame/game/SceneLevel.jsx");
  reactHotLoader.register(_DefaultState, "_DefaultState", "/Users/han/Projects/facegame/game/SceneLevel.jsx");
  reactHotLoader.register(SceneLevel, "SceneLevel", "/Users/han/Projects/facegame/game/SceneLevel.jsx");
  reactHotLoader.register(_default, "default", "/Users/han/Projects/facegame/game/SceneLevel.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.2f5d4ed6d74f62267fc3.hot-update.js.map