webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/atoms/brand/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/brand/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./components/atoms/brand/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/kalu/Projects/kaluabentes.github.io/src/components/atoms/brand/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var SIZES = {
  small: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.sizeSmall,
  medium: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.sizeMedium
};
var THEMES = {
  light: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.themeLight,
  dark: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.themeDark
};

var getClassName = function getClassName(props) {
  return {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.brand, props.size, props.theme)
  };
};

var Brand = function Brand(_ref) {
  var isTitle = _ref.isTitle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["isTitle"]);

  return isTitle ? __jsx("h1", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getClassName(props), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "KALUX") : __jsx("h4", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getClassName(props), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "KALUX");
};

Brand.propTypes = {
  isTitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Brand.defaultProps = {
  isTitle: true,
  size: SIZES.small,
  theme: THEMES.light
};
Brand.sizes = SIZES;
Brand.themes = THEMES;
/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ })

})
//# sourceMappingURL=about.js.a2ee7d502d948c102b42.hot-update.js.map