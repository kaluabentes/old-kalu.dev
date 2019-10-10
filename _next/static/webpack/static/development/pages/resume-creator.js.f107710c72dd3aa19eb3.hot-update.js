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

/* harmony default export */ __webpack_exports__["default"] = (function (inputRef) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    inputRef.current.focus();
    setTimeout(function () {
      if (inputRef.current) {
        console.log(inputRef.current);
        window.scrollTo(0, inputRef.current.offsetTop - 100);
      }
    }, 300);
  }, []);
}); // export default (inputRef, hasFocus, onFocus) => {
//   let alreadyScrolled = false
//   let timeout
//   useEffect(() => {
//     if (!alreadyScrolled) {
//       timeout = setTimeout(() => {
//         if (inputRef.current) {
//           console.dir(inputRef.current)
//           window.scrollTo(0, inputRef.current.offsetTop - 100)
//           alreadyScrolled = true
//         }
//       }, 300)
//     }
//     if (hasFocus) {
//       inputRef.current.focus()
//       onFocus()
//     }
//   })
// }

/***/ })

})
//# sourceMappingURL=resume-creator.js.f107710c72dd3aa19eb3.hot-update.js.map