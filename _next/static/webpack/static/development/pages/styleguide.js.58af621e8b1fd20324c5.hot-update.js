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
  }, placeholder && __jsx("label", {
    htmlFor: id,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, placeholder), __jsx("input", {
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

/***/ }),

/***/ "./pages/styleguide.js":
/*!*****************************!*\
  !*** ./pages/styleguide.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _templates/page */ "./components/templates/page/index.js");
/* harmony import */ var _molecules_cover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _molecules/cover */ "./components/molecules/cover/index.js");
/* harmony import */ var _atoms_cover_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _atoms/cover-title */ "./components/atoms/cover-title/index.js");
/* harmony import */ var _atoms_cover_subtitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _atoms/cover-subtitle */ "./components/atoms/cover-subtitle/index.js");
/* harmony import */ var _molecules_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _molecules/section */ "./components/molecules/section/index.js");
/* harmony import */ var _atoms_section_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! _atoms/section-title */ "./components/atoms/section-title/index.js");
/* harmony import */ var _atoms_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! _atoms/container */ "./components/atoms/container/index.js");
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! _config/routes */ "./config/routes.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! _atoms/button */ "./components/atoms/button/index.js");
/* harmony import */ var _organisms_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! _organisms/header */ "./components/organisms/header/index.js");
/* harmony import */ var _organisms_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! _organisms/footer */ "./components/organisms/footer/index.js");
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! _atoms/input */ "./components/atoms/input/index.js");
var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/pages/styleguide.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var Home = function Home() {
  return __jsx(_templates_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Kalu\xE3 Bentes - Styleguide")), __jsx(_molecules_cover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_atoms_cover_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Styleguide"), __jsx(_atoms_cover_subtitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Welcome to my websites's styleguide, here you will find every component that assemble this website")), __jsx(_atoms_container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_atoms_section_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Header"), __jsx(_organisms_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    routes: _config_routes__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_atoms_section_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Cover"), __jsx(_molecules_cover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_atoms_cover_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Styleguide"), __jsx(_atoms_cover_subtitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Welcome to my websites's styleguide, here you will find every component that assemble this website"))), __jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_atoms_section_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Footer"), __jsx(_organisms_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx(_molecules_section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_atoms_section_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Button"), __jsx(_atoms_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Action"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=styleguide.js.58af621e8b1fd20324c5.hot-update.js.map