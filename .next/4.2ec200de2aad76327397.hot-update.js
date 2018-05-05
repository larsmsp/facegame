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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CSS = new String(".level{margin-top:25vh;font-size:150px;text-align:center;}.level .emoji{position:absolute;left:50vh;top:50vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHcUIsQUFNRSxnQkFMRixFQU1OLFVBQ0QsSUFOUyxLQU90QixhQU5BIiwiZmlsZSI6ImdhbWUvU2NlbmVMZXZlbC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCB9IGZyb20gJy4uL2dhbWUnXG5cbmNvbnN0IENTUyA9IGNzc2Bcbi5sZXZlbCB7XG4gICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICBmb250LXNpemU6IDE1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxldmVsIC5lbW9qaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwdmg7XG4gICAgdG9wOiA1MHZoO1xufVxuYFxuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICAgIGVtb2ppczogW11cbn1cblxuY2xhc3MgU2NlbmVMZXZlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldExldmVsKHRoaXMucHJvcHMubGV2ZWwpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAocHJldlByb3BzLmxldmVsICE9IHRoaXMucHJvcHMubGV2ZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldExldmVsKHRoaXMucHJvcHMubGV2ZWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIDxFbW9qaSBlbW90aW9uPXtFTU9USU9OX0hBUFBZfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0b3A6ICc0MHB4J1xuICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICA8RW1vamkgZW1vdGlvbj17RU1PVElPTl9BTkdSWX0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnNDBweCdcbiAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgPEVtb2ppIGVtb3Rpb249e0VNT1RJT05fU0FEfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0b3A6ICc0MHB4J1xuICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgaWYgKGxldmVsTm8gPT09IDEpIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG5cbiAgICB9XG5cbiAgICBfbmV3RW1vamkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbW90aW9uOiBFTU9USU9OX0hBUFBZLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2tpbGxFbW9qaShlbW9qaSkge1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZUxldmVsIl19 */\n/*@ sourceURL=game/SceneLevel.jsx */");
CSS.__hash = "2817502941";
CSS.__scoped = ".level.jsx-2665110108{margin-top:25vh;font-size:150px;text-align:center;}.level.jsx-2665110108 .emoji.jsx-2665110108{position:absolute;left:50vh;top:50vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvU2NlbmVMZXZlbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWUsQUFHcUIsQUFNRSxnQkFMRixFQU1OLFVBQ0QsSUFOUyxLQU90QixhQU5BIiwiZmlsZSI6ImdhbWUvU2NlbmVMZXZlbC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbi9Qcm9qZWN0cy9mYWNlZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVtb2ppIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IHsgRU1PVElPTl9DT05URU5ULCBFTU9USU9OX0FOR1JZLCBFTU9USU9OX1NBRCwgRU1PVElPTl9IQVBQWSwgRU1PVElPTl9TVVBSSVNFRCB9IGZyb20gJy4uL2dhbWUnXG5cbmNvbnN0IENTUyA9IGNzc2Bcbi5sZXZlbCB7XG4gICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICBmb250LXNpemU6IDE1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxldmVsIC5lbW9qaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwdmg7XG4gICAgdG9wOiA1MHZoO1xufVxuYFxuXG5jb25zdCBfRGVmYXVsdFN0YXRlID0ge1xuICAgIGVtb2ppczogW11cbn1cblxuY2xhc3MgU2NlbmVMZXZlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldExldmVsKHRoaXMucHJvcHMubGV2ZWwpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAocHJldlByb3BzLmxldmVsICE9IHRoaXMucHJvcHMubGV2ZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldExldmVsKHRoaXMucHJvcHMubGV2ZWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntDU1N9PC9zdHlsZT5cblxuICAgICAgICAgICAgICAgIDxFbW9qaSBlbW90aW9uPXtFTU9USU9OX0hBUFBZfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0b3A6ICc0MHB4J1xuICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICA8RW1vamkgZW1vdGlvbj17RU1PVElPTl9BTkdSWX0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnNDBweCdcbiAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgPEVtb2ppIGVtb3Rpb249e0VNT1RJT05fU0FEfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0b3A6ICc0MHB4J1xuICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgX3NldExldmVsKGxldmVsTm8pIHtcbiAgICAgICAgaWYgKGxldmVsTm8gPT09IDEpIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dlbmVyYXRlRW1vamlzKGNvdW50KSB7XG5cbiAgICB9XG5cbiAgICBfbmV3RW1vamkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbW90aW9uOiBFTU9USU9OX0hBUFBZLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2tpbGxFbW9qaShlbW9qaSkge1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZUxldmVsIl19 */\n/*@ sourceURL=game/SceneLevel.jsx */";
CSS.__scopedHash = "2665110108";
var _DefaultState = {
  emojis: []
};

var SceneLevel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SceneLevel, _React$Component);

  function SceneLevel() {
    _classCallCheck(this, SceneLevel);

    return _possibleConstructorReturn(this, (SceneLevel.__proto__ || Object.getPrototypeOf(SceneLevel)).apply(this, arguments));
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
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "level",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: CSS.__hash,
        css: CSS
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Emoji__["a" /* default */], {
        emotion: __WEBPACK_IMPORTED_MODULE_3__game__["c" /* EMOTION_HAPPY */],
        style: {
          top: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Emoji__["a" /* default */], {
        emotion: __WEBPACK_IMPORTED_MODULE_3__game__["a" /* EMOTION_ANGRY */],
        style: {
          top: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Emoji__["a" /* default */], {
        emotion: __WEBPACK_IMPORTED_MODULE_3__game__["d" /* EMOTION_SAD */],
        style: {
          top: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }));
    }
  }, {
    key: "_setLevel",
    value: function _setLevel(levelNo) {
      if (levelNo === 1) {}
    }
  }, {
    key: "_generateEmojis",
    value: function _generateEmojis(count) {}
  }, {
    key: "_newEmoji",
    value: function _newEmoji() {
      return {
        emotion: __WEBPACK_IMPORTED_MODULE_3__game__["c" /* EMOTION_HAPPY */]
      };
    }
  }, {
    key: "_killEmoji",
    value: function _killEmoji(emoji) {}
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
//# sourceMappingURL=4.2ec200de2aad76327397.hot-update.js.map