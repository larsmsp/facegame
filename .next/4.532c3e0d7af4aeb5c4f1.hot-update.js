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




var CSS = new String(".level{position:relative;}.level .emoji{position:absolute;left:50vh;top:50vh;font-size:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHdUIsQUFJQSxrQkFIdEIsQUFJYyxVQUNELFNBQ00sZUFDbkIiLCJmaWxlIjoiZ2FtZS9TY2VuZUxldmVsLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuL1Byb2plY3RzL2ZhY2VnYW1lIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRW1vamkgZnJvbSAnLi4vY29tcG9uZW50cy9FbW9qaSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgeyBBTExfRU1PVElPTlMsIEVNT1RJT05fQ09OVEVOVCwgRU1PVElPTl9BTkdSWSwgRU1PVElPTl9TQUQsIEVNT1RJT05fSEFQUFksIEVNT1RJT05fU1VQUklTRUQgfSBmcm9tICcuLi9nYW1lJ1xuXG5jb25zdCBDU1MgPSBjc3NgXG4ubGV2ZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxldmVsIC5lbW9qaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwdmg7XG4gICAgdG9wOiA1MHZoO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cbmBcblxuY29uc3QgX0RlZmF1bHRTdGF0ZSA9IHtcbiAgICBlbW9qaXM6IFtdXG59XG5cbmNsYXNzIFNjZW5lTGV2ZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9EZWZhdWx0U3RhdGVcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMubGV2ZWwgIT0gdGhpcy5wcm9wcy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckVtb2ppKGUsIGkpIHtcbiAgICAgICAgcmV0dXJuIDxFbW9qaSBrZXk9e2l9IGVtb3Rpb249e2UuZW1vdGlvbn0gc3R5bGU9e3tcbiAgICAgICAgICAgIGxlZnQ6IGUueCArICd2dycsXG4gICAgICAgICAgICB0b3A6IGUueSArICd2aCcsXG4gICAgICAgIH19IC8+XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj5cbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57Q1NTfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbW9qaXMubWFwKHRoaXMucmVuZGVyRW1vamkuYmluZCh0aGlzKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIF9zZXRMZXZlbChsZXZlbE5vKSB7XG4gICAgICAgIGlmIChsZXZlbE5vID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUVtb2ppcygxMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZW5lcmF0ZUVtb2ppcyhjb3VudCkge1xuICAgICAgICBsZXQgZW1vamlzID0gWy4uLnRoaXMuc3RhdGUuZW1vamlzXVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGVtb2ppcy5wdXNoKHRoaXMuX25ld0Vtb2ppKCkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbW9qaXM6IGVtb2ppc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9uZXdFbW9qaSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtb3Rpb246IHRoaXMuX3JhbmRvbUVtb3Rpb24oKSxcbiAgICAgICAgICAgIHg6IC0yMCArIE1hdGgucmFuZG9tKCkgKiA0MCxcbiAgICAgICAgICAgIHk6IC0yMCArIE1hdGgucmFuZG9tKCkgKiA0MCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9raWxsRW1vamkoZW1vamkpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgX3JhbmRvbUVtb3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBBTExfRU1PVElPTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQUxMX0VNT1RJT05TLmxlbmd0aCldXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZUxldmVsIl19 */\n/*@ sourceURL=game/SceneLevel.jsx */");
CSS.__hash = "3151176699";
CSS.__scoped = ".level.jsx-1672484794{position:relative;}.level.jsx-1672484794 .emoji.jsx-1672484794{position:absolute;left:50vh;top:50vh;font-size:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHdUIsQUFJQSxrQkFIdEIsQUFJYyxVQUNELFNBQ00sZUFDbkIiLCJmaWxlIjoiZ2FtZS9TY2VuZUxldmVsLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuL1Byb2plY3RzL2ZhY2VnYW1lIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRW1vamkgZnJvbSAnLi4vY29tcG9uZW50cy9FbW9qaSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgeyBBTExfRU1PVElPTlMsIEVNT1RJT05fQ09OVEVOVCwgRU1PVElPTl9BTkdSWSwgRU1PVElPTl9TQUQsIEVNT1RJT05fSEFQUFksIEVNT1RJT05fU1VQUklTRUQgfSBmcm9tICcuLi9nYW1lJ1xuXG5jb25zdCBDU1MgPSBjc3NgXG4ubGV2ZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxldmVsIC5lbW9qaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwdmg7XG4gICAgdG9wOiA1MHZoO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cbmBcblxuY29uc3QgX0RlZmF1bHRTdGF0ZSA9IHtcbiAgICBlbW9qaXM6IFtdXG59XG5cbmNsYXNzIFNjZW5lTGV2ZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9EZWZhdWx0U3RhdGVcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMubGV2ZWwgIT0gdGhpcy5wcm9wcy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGV2ZWwodGhpcy5wcm9wcy5sZXZlbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckVtb2ppKGUsIGkpIHtcbiAgICAgICAgcmV0dXJuIDxFbW9qaSBrZXk9e2l9IGVtb3Rpb249e2UuZW1vdGlvbn0gc3R5bGU9e3tcbiAgICAgICAgICAgIGxlZnQ6IGUueCArICd2dycsXG4gICAgICAgICAgICB0b3A6IGUueSArICd2aCcsXG4gICAgICAgIH19IC8+XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj5cbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57Q1NTfTwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbW9qaXMubWFwKHRoaXMucmVuZGVyRW1vamkuYmluZCh0aGlzKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIF9zZXRMZXZlbChsZXZlbE5vKSB7XG4gICAgICAgIGlmIChsZXZlbE5vID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZUVtb2ppcygxMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZW5lcmF0ZUVtb2ppcyhjb3VudCkge1xuICAgICAgICBsZXQgZW1vamlzID0gWy4uLnRoaXMuc3RhdGUuZW1vamlzXVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGVtb2ppcy5wdXNoKHRoaXMuX25ld0Vtb2ppKCkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbW9qaXM6IGVtb2ppc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9uZXdFbW9qaSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtb3Rpb246IHRoaXMuX3JhbmRvbUVtb3Rpb24oKSxcbiAgICAgICAgICAgIHg6IC0yMCArIE1hdGgucmFuZG9tKCkgKiA0MCxcbiAgICAgICAgICAgIHk6IC0yMCArIE1hdGgucmFuZG9tKCkgKiA0MCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9raWxsRW1vamkoZW1vamkpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgX3JhbmRvbUVtb3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBBTExfRU1PVElPTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQUxMX0VNT1RJT05TLmxlbmd0aCldXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZUxldmVsIl19 */\n/*@ sourceURL=game/SceneLevel.jsx */";
CSS.__scopedHash = "1672484794";
var _DefaultState = {
  emojis: []
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
      if (prevProps.level != this.props.level) {
        this._setLevel(this.props.level);
      }
    }
  }, {
    key: "renderEmoji",
    value: function renderEmoji(e, i) {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Emoji__["a" /* default */], {
        key: i,
        emotion: e.emotion,
        style: {
          left: e.x + 'vw',
          top: e.y + 'vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__hash,
        css: CSS
      }), this.state.emojis.map(this.renderEmoji.bind(this)));
    }
  }, {
    key: "_setLevel",
    value: function _setLevel(levelNo) {
      if (levelNo === 1) {
        this._generateEmojis(10);
      }
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
        x: -20 + Math.random() * 40,
        y: -20 + Math.random() * 40
      };
    }
  }, {
    key: "_killEmoji",
    value: function _killEmoji(emoji) {}
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
//# sourceMappingURL=4.532c3e0d7af4aeb5c4f1.hot-update.js.map