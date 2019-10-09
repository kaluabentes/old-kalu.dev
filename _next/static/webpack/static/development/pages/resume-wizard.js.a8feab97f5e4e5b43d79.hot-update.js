webpackHotUpdate("static/development/pages/resume-wizard.js",{

/***/ "./components/atoms/text-area/index.js":
/*!*********************************************!*\
  !*** ./components/atoms/text-area/index.js ***!
  \*********************************************/
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
/* harmony import */ var _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _atoms/input/styles.css */ "./components/atoms/input/styles.css");
/* harmony import */ var _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/atoms/text-area/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var TextArea = function TextArea(_ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      errorMessage = _ref.errorMessage,
      label = _ref.label,
      onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      hasError = _ref.hasError;
  return __jsx("div", {
    className: _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, label && __jsx("label", {
    className: _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.label,
    htmlFor: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, label), __jsx("textarea", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.input, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.error, hasError)),
    id: id,
    name: name,
    onChange: onChange,
    disabled: isDisabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, value), hasError && __jsx("div", {
    className: _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, errorMessage));
};

TextArea.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  hasError: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
TextArea.defaultProps = {
  className: undefined,
  id: undefined,
  name: undefined,
  value: '',
  errorMessage: undefined,
  label: undefined,
  onChange: function onChange() {},
  isDisabled: false,
  hasError: false
};
/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ })

})
//# sourceMappingURL=resume-wizard.js.a8feab97f5e4e5b43d79.hot-update.js.map