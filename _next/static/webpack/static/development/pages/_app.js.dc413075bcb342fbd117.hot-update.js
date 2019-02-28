webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/VideoBg.js":
/*!*******************************!*\
  !*** ./components/VideoBg.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/ebennet/Projects/BronyCon/Muffyn/muffyn-next/components/VideoBg.js";


var StyledVideo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].video.withConfig({
  displayName: "VideoBg__StyledVideo",
  componentId: "sc-4cnk6g-0"
})(["height:100%;left:0;object-fit:cover;position:fixed;top:0;width:100%;z-index:1;@media (max-aspect-ratio:16/9){width:300%;left:-100%;}"]);

var VideoBg = function VideoBg(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledVideo, {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    webkitPlaysInline: true,
    poster: "/static/muffyn-videobg-cover.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    src: "/static/muffyn-videobg.webm",
    type: "video/webm;codecs=\"vp8, vorbis\"",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    src: "/static/muffyn-videobg-low.mp4",
    type: "video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\"",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (VideoBg);

/***/ })

})
//# sourceMappingURL=_app.js.dc413075bcb342fbd117.hot-update.js.map