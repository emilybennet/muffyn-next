webpackHotUpdate("static/development/pages/avatar.js",{

/***/ "./pages/avatar.js":
/*!*************************!*\
  !*** ./pages/avatar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_MuffynLogoSvg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MuffynLogoSvg */ "./components/MuffynLogoSvg.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_LittlePoint__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/LittlePoint */ "./components/LittlePoint.js");









var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Muffyn/muffyn-next/pages/avatar.js";







var Container = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "avatar__Container",
  componentId: "sc-6we1w0-0"
})(["align-items:center;display:flex;flex-direction:column;justify-content:flex-start;text-align:center;"]);
var StyledP = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p.withConfig({
  displayName: "avatar__StyledP",
  componentId: "sc-6we1w0-1"
})(["line-height:1.4em;margin-bottom:3em;max-width:300px;"]);
var FileInput = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].input.withConfig({
  displayName: "avatar__FileInput",
  componentId: "sc-6we1w0-2"
})(["height:0;overflow:hidden;width:0;"]);
var FileInputLabel = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].label.withConfig({
  displayName: "avatar__FileInputLabel",
  componentId: "sc-6we1w0-3"
})(["border:2px solid white;border-radius:2px;color:white;cursor:pointer;display:inline-block;font-size:0.8em;letter-spacing:0.09em;outline:none;padding:1em 1.4em 1em 1.6em;text-decoration:none;text-transform:uppercase;transition:all 0.2s;&:hover{box-shadow:inset 0 0 0 3px white;}"]);

var UploadForm = function UploadForm(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(e) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(FileInput, {
    type: "file",
    id: "file",
    name: "file",
    required: true,
    onChange: props.processAvatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(FileInputLabel, {
    for: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Select A Photo ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_LittlePoint__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })));
};

var CtaFooter = function CtaFooter(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    text: "Create Another Avatar",
    url: "#",
    onClick: function onClick(ev) {
      return props.clearUpload;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    text: "Festival Home",
    url: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
};

var CreateAvatarPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CreateAvatarPage, _React$Component);

  function CreateAvatarPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateAvatarPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CreateAvatarPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      image: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "processAvatar",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(e) {
        var files, data, res, file;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                files = e.target.files;
                data = new FormData();
                data.append("file", files[0]);
                data.append("upload_preset", "muffyn-avatar-overlay");
                _context2.next = 6;
                return fetch("https://api.cloudinary.com/v1_1/bronycon/image/upload", {
                  method: "POST",
                  body: data
                });

              case 6:
                res = _context2.sent;
                _context2.next = 9;
                return res.json();

              case 9:
                file = _context2.sent;

                _this.setState({
                  image: file.secure_url
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "clearAvatar", function () {
      _this.setState({
        image: null
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateAvatarPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Avatar Creater"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(StyledP, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Spread the muffin by adding one to your social media avatar."), !this.state.image && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(UploadForm, {
        processAvatar: this.processAvatar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), this.state.image && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: this.state.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(CtaFooter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }));
    }
  }]);

  return CreateAvatarPage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CreateAvatarPage);

/***/ })

})
//# sourceMappingURL=avatar.js.dadd13c792b72784411d.hot-update.js.map