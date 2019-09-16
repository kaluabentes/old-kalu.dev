webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/organisms/footer/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/footer/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _atoms/container */ "./components/atoms/container/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./components/organisms/footer/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kalu/Projects/kaluabentes.github.io/src/components/organisms/footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Footer = function Footer() {
  return __jsx("footer", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_atoms_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(Brand, {
    isTitle: false,
    size: Brand.sizes.medium,
    theme: Brand.themes.dark,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/templates/page/index.js":
/*!********************************************!*\
  !*** ./components/templates/page/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _templates/base */ "./components/templates/base/index.js");
/* harmony import */ var _organisms_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _organisms/header */ "./components/organisms/header/index.js");
/* harmony import */ var _organisms_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _organisms/body */ "./components/organisms/body/index.js");
/* harmony import */ var _organisms_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _organisms/footer */ "./components/organisms/footer/index.js");
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _config/routes */ "./config/routes.js");
var _jsxFileName = "/Users/kalu/Projects/kaluabentes.github.io/src/components/templates/page/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Page = function Page(_ref) {
  var children = _ref.children;
  return __jsx(_templates_base__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_organisms_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    routes: _config_routes__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_organisms_body__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, children));
};

Page.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.aae11bd28291e422b375.hot-update.js.map