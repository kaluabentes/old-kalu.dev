webpackHotUpdate("static/development/pages/styleguide.js",{

/***/ "./components/atoms/input/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/input/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./components/atoms/input/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/atoms/input/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Input = function Input(_ref) {
  var id = _ref.id,
      name = _ref.name,
      type = _ref.type,
      value = _ref.value,
      errorMessage = _ref.errorMessage,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      hasError = _ref.hasError;
  return __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, label && __jsx("label", {
    htmlFor: id,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, label), __jsx("input", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.input, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.error, hasError)),
    id: id,
    name: name,
    type: type,
    value: value,
    onChange: onChange,
    disabled: isDisabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), errorMessage && __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, errorMessage));
};

Input.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  hasError: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
Input.defaultProps = {
  className: undefined,
  id: undefined,
  name: undefined,
  type: undefined,
  value: '',
  errorMessage: undefined,
  placeholder: undefined,
  onChange: function onChange() {},
  isDisabled: false,
  hasError: false
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=styleguide.js.ef6d3c5c608fa80ba981.hot-update.js.map