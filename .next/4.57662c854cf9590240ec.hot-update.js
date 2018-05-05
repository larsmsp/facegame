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




var CSS = new String(".level{position:absolute;left:50%;top:50%;width:100%;height:100%;}.level .emoji{position:absolute;font-size:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHdUIsQUFRQSxrQkFQVCxBQVFNLFNBUFAsTUFRWixFQVBlLFdBQ0MsWUFDaEIiLCJmaWxlIjoiZ2FtZS9TY2VuZUxldmVsLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuL1Byb2plY3RzL2ZhY2VnYW1lIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRW1vamkgZnJvbSAnLi4vY29tcG9uZW50cy9FbW9qaSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgeyBBTExfRU1PVElPTlMsIEVNT1RJT05fQ09OVEVOVCwgRU1PVElPTl9BTkdSWSwgRU1PVElPTl9TQUQsIEVNT1RJT05fSEFQUFksIEVNT1RJT05fU1VQUklTRUQgfSBmcm9tICcuLi9nYW1lJ1xuXG5jb25zdCBDU1MgPSBjc3NgXG4ubGV2ZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGV2ZWwgLmVtb2ppIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuYFxuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICAgIGVtb2ppczogW11cbn1cblxuY2xhc3MgU2NlbmVMZXZlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcblxuICAgICAgICB0aGlzLnN0YXRlID0gX0RlZmF1bHRTdGF0ZVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXRMZXZlbCh0aGlzLnByb3BzLmxldmVsKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5sZXZlbCAhPSB0aGlzLnByb3BzLmxldmVsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRMZXZlbCh0aGlzLnByb3BzLmxldmVsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRW1vamkoZSwgaSkge1xuICAgICAgICByZXR1cm4gPEVtb2ppIGtleT17aX0gZW1vdGlvbj17ZS5lbW90aW9ufSBzdHlsZT17e1xuICAgICAgICAgICAgbGVmdDogZS54ICsgJ3Z3JyxcbiAgICAgICAgICAgIHRvcDogZS55ICsgJ3ZoJyxcbiAgICAgICAgfX0gLz5cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtb2ppcy5tYXAodGhpcy5yZW5kZXJFbW9qaS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgaWYgKGxldmVsTm8gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDEwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG4gICAgICAgIGxldCBlbW9qaXMgPSBbLi4udGhpcy5zdGF0ZS5lbW9qaXNdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZW1vamlzLnB1c2godGhpcy5fbmV3RW1vamkoKSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtb2ppczogZW1vamlzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX25ld0Vtb2ppKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1vdGlvbjogdGhpcy5fcmFuZG9tRW1vdGlvbigpLFxuICAgICAgICAgICAgeDogLTIwICsgTWF0aC5yYW5kb20oKSAqIDQwLFxuICAgICAgICAgICAgeTogLTIwICsgTWF0aC5yYW5kb20oKSAqIDQwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2tpbGxFbW9qaShlbW9qaSkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBfcmFuZG9tRW1vdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEFMTF9FTU9USU9OU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBBTExfRU1PVElPTlMubGVuZ3RoKV1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lTGV2ZWwiXX0= */\n/*@ sourceURL=game/SceneLevel.jsx */");
CSS.__hash = "3723197714";
CSS.__scoped = ".level.jsx-2655613203{position:absolute;left:50%;top:50%;width:100%;height:100%;}.level.jsx-2655613203 .emoji.jsx-2655613203{position:absolute;font-size:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHdUIsQUFRQSxrQkFQVCxBQVFNLFNBUFAsTUFRWixFQVBlLFdBQ0MsWUFDaEIiLCJmaWxlIjoiZ2FtZS9TY2VuZUxldmVsLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuL1Byb2plY3RzL2ZhY2VnYW1lIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRW1vamkgZnJvbSAnLi4vY29tcG9uZW50cy9FbW9qaSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgeyBBTExfRU1PVElPTlMsIEVNT1RJT05fQ09OVEVOVCwgRU1PVElPTl9BTkdSWSwgRU1PVElPTl9TQUQsIEVNT1RJT05fSEFQUFksIEVNT1RJT05fU1VQUklTRUQgfSBmcm9tICcuLi9nYW1lJ1xuXG5jb25zdCBDU1MgPSBjc3NgXG4ubGV2ZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGV2ZWwgLmVtb2ppIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuYFxuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICAgIGVtb2ppczogW11cbn1cblxuY2xhc3MgU2NlbmVMZXZlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcblxuICAgICAgICB0aGlzLnN0YXRlID0gX0RlZmF1bHRTdGF0ZVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXRMZXZlbCh0aGlzLnByb3BzLmxldmVsKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5sZXZlbCAhPSB0aGlzLnByb3BzLmxldmVsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRMZXZlbCh0aGlzLnByb3BzLmxldmVsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRW1vamkoZSwgaSkge1xuICAgICAgICByZXR1cm4gPEVtb2ppIGtleT17aX0gZW1vdGlvbj17ZS5lbW90aW9ufSBzdHlsZT17e1xuICAgICAgICAgICAgbGVmdDogZS54ICsgJ3Z3JyxcbiAgICAgICAgICAgIHRvcDogZS55ICsgJ3ZoJyxcbiAgICAgICAgfX0gLz5cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtb2ppcy5tYXAodGhpcy5yZW5kZXJFbW9qaS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgaWYgKGxldmVsTm8gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDEwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG4gICAgICAgIGxldCBlbW9qaXMgPSBbLi4udGhpcy5zdGF0ZS5lbW9qaXNdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZW1vamlzLnB1c2godGhpcy5fbmV3RW1vamkoKSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtb2ppczogZW1vamlzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX25ld0Vtb2ppKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1vdGlvbjogdGhpcy5fcmFuZG9tRW1vdGlvbigpLFxuICAgICAgICAgICAgeDogLTIwICsgTWF0aC5yYW5kb20oKSAqIDQwLFxuICAgICAgICAgICAgeTogLTIwICsgTWF0aC5yYW5kb20oKSAqIDQwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2tpbGxFbW9qaShlbW9qaSkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBfcmFuZG9tRW1vdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEFMTF9FTU9USU9OU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBBTExfRU1PVElPTlMubGVuZ3RoKV1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lTGV2ZWwiXX0= */\n/*@ sourceURL=game/SceneLevel.jsx */";
CSS.__scopedHash = "2655613203";
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
          lineNumber: 44
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
          lineNumber: 52
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
//# sourceMappingURL=4.57662c854cf9590240ec.hot-update.js.map