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




var CSS = new String(".level{margin-top:25vh;font-size:150px;text-align:center;}.level .emoji{position:absolute;left:50vh;top:50vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHcUIsQUFNRSxnQkFMRixFQU1OLFVBQ0QsSUFOUyxLQU90QixhQU5BIiwiZmlsZSI6ImdhbWUvU2NlbmVMZXZlbC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgQUxMX0VNT1RJT05TLCBFTU9USU9OX0NPTlRFTlQsIEVNT1RJT05fQU5HUlksIEVNT1RJT05fU0FELCBFTU9USU9OX0hBUFBZLCBFTU9USU9OX1NVUFJJU0VEIH0gZnJvbSAnLi4vZ2FtZSdcblxuY29uc3QgQ1NTID0gY3NzYFxuLmxldmVsIHtcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGV2ZWwgLmVtb2ppIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTB2aDtcbiAgICB0b3A6IDUwdmg7XG59XG5gXG5cbmNvbnN0IF9EZWZhdWx0U3RhdGUgPSB7XG4gICAgZW1vamlzOiBbXVxufVxuXG5jbGFzcyBTY2VuZUxldmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBfRGVmYXVsdFN0YXRlXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldExldmVsKHRoaXMucHJvcHMubGV2ZWwpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAocHJldlByb3BzLmxldmVsICE9IHRoaXMucHJvcHMubGV2ZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldExldmVsKHRoaXMucHJvcHMubGV2ZWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJFbW9qaShlKSB7XG4gICAgICAgIHJldHVybiA8RW1vamkgZW1vdGlvbj17ZS5lbW90aW9ufSBzdHlsZT17e1xuICAgICAgICAgICAgbGVmdDogZS54ICsgJ3Z3JyxcbiAgICAgICAgICAgIHRvcDogZS55ICsgJ3ZoJyxcbiAgICAgICAgfX0gLz5cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtb2ppcy5tYXAodGhpcy5yZW5kZXJFbW9qaS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgaWYgKGxldmVsTm8gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDEwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG4gICAgICAgIGxldCBlbW9qaXMgPSBbLi4udGhpcy5zdGF0ZS5lbW9qaXNdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZW1vamkucHVzaCh0aGlzLl9uZXdFbW9qaSgpKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1vamlzOiBlbW9qaXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfbmV3RW1vamkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbW90aW9uOiB0aGlzLl9yYW5kb21FbW90aW9uKCksXG4gICAgICAgICAgICB4OiAtMjAgKyBNYXRoLnJhbmRvbSgpICogNDAsXG4gICAgICAgICAgICB5OiAtMjAgKyBNYXRoLnJhbmRvbSgpICogNDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfa2lsbEVtb2ppKGVtb2ppKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIF9yYW5kb21FbW90aW9uKCkge1xuICAgICAgICByZXR1cm4gQUxMX0VNT1RJT05TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEFMTF9FTU9USU9OUy5sZW5ndGgpXVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVMZXZlbCJdfQ== */\n/*@ sourceURL=game/SceneLevel.jsx */");
CSS.__hash = "2817502941";
CSS.__scoped = ".level.jsx-2665110108{margin-top:25vh;font-size:150px;text-align:center;}.level.jsx-2665110108 .emoji.jsx-2665110108{position:absolute;left:50vh;top:50vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHcUIsQUFNRSxnQkFMRixFQU1OLFVBQ0QsSUFOUyxLQU90QixhQU5BIiwiZmlsZSI6ImdhbWUvU2NlbmVMZXZlbC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgQUxMX0VNT1RJT05TLCBFTU9USU9OX0NPTlRFTlQsIEVNT1RJT05fQU5HUlksIEVNT1RJT05fU0FELCBFTU9USU9OX0hBUFBZLCBFTU9USU9OX1NVUFJJU0VEIH0gZnJvbSAnLi4vZ2FtZSdcblxuY29uc3QgQ1NTID0gY3NzYFxuLmxldmVsIHtcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGV2ZWwgLmVtb2ppIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTB2aDtcbiAgICB0b3A6IDUwdmg7XG59XG5gXG5cbmNvbnN0IF9EZWZhdWx0U3RhdGUgPSB7XG4gICAgZW1vamlzOiBbXVxufVxuXG5jbGFzcyBTY2VuZUxldmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBfRGVmYXVsdFN0YXRlXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldExldmVsKHRoaXMucHJvcHMubGV2ZWwpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAocHJldlByb3BzLmxldmVsICE9IHRoaXMucHJvcHMubGV2ZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldExldmVsKHRoaXMucHJvcHMubGV2ZWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJFbW9qaShlKSB7XG4gICAgICAgIHJldHVybiA8RW1vamkgZW1vdGlvbj17ZS5lbW90aW9ufSBzdHlsZT17e1xuICAgICAgICAgICAgbGVmdDogZS54ICsgJ3Z3JyxcbiAgICAgICAgICAgIHRvcDogZS55ICsgJ3ZoJyxcbiAgICAgICAgfX0gLz5cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtb2ppcy5tYXAodGhpcy5yZW5kZXJFbW9qaS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgaWYgKGxldmVsTm8gPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlRW1vamlzKDEwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG4gICAgICAgIGxldCBlbW9qaXMgPSBbLi4udGhpcy5zdGF0ZS5lbW9qaXNdXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZW1vamkucHVzaCh0aGlzLl9uZXdFbW9qaSgpKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW1vamlzOiBlbW9qaXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfbmV3RW1vamkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbW90aW9uOiB0aGlzLl9yYW5kb21FbW90aW9uKCksXG4gICAgICAgICAgICB4OiAtMjAgKyBNYXRoLnJhbmRvbSgpICogNDAsXG4gICAgICAgICAgICB5OiAtMjAgKyBNYXRoLnJhbmRvbSgpICogNDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfa2lsbEVtb2ppKGVtb2ppKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIF9yYW5kb21FbW90aW9uKCkge1xuICAgICAgICByZXR1cm4gQUxMX0VNT1RJT05TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEFMTF9FTU9USU9OUy5sZW5ndGgpXVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVMZXZlbCJdfQ== */\n/*@ sourceURL=game/SceneLevel.jsx */";
CSS.__scopedHash = "2665110108";
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
    debugger;
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
    value: function renderEmoji(e) {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Emoji__["a" /* default */], {
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
        emoji.push(this._newEmoji());
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
//# sourceMappingURL=4.f979c4e277f8ef0e4bbe.hot-update.js.map