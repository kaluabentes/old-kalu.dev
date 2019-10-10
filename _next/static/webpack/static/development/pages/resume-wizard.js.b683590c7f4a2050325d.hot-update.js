webpackHotUpdate("static/development/pages/resume-wizard.js",{

/***/ "./components/molecules/accordion/index.js":
/*!*************************************************!*\
  !*** ./components/molecules/accordion/index.js ***!
  \*************************************************/
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./components/molecules/accordion/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/molecules/accordion/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Accordion = function Accordion(_ref) {
  var isOpen = _ref.isOpen,
      onToggle = _ref.onToggle,
      children = _ref.children,
      header = _ref.header;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      height = _useState[0],
      setHeight = _useState[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setHeight(ref.current.scrollHeight);
  });
  return __jsx("div", {
    ref: ref,
    style: {
      height: isOpen ? "".concat(height, "px") : "77px"
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.wizard, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.open, isOpen)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    onClick: onToggle,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    tabIndex: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, header), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children));
};

Accordion.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Accordion.defaultProps = {
  isOpen: false,
  onToggle: function onToggle() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ })

})
//# sourceMappingURL=resume-wizard.js.b683590c7f4a2050325d.hot-update.js.map