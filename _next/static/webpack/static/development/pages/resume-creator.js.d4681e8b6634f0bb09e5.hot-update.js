webpackHotUpdate("static/development/pages/resume-creator.js",{

/***/ "./hooks/use-input-focus.js":
/*!**********************************!*\
  !*** ./hooks/use-input-focus.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (inputRef, hasFocus, onFocus) {
  var alreadyScrolled = false;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!alreadyScrolled) {
      setTimeout(function () {
        if (inputRef.current) {
          window.scrollTo(0, inputRef.current.offsetTop - 100);
          alreadyScrolled = true;
        }
      }, 300);
    }

    if (hasFocus) {
      inputRef.current.focus();
      onFocus();
    }
  });
});

/***/ })

})
//# sourceMappingURL=resume-creator.js.d4681e8b6634f0bb09e5.hot-update.js.map