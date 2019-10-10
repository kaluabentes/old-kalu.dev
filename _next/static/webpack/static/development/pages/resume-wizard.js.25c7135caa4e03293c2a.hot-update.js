webpackHotUpdate("static/development/pages/resume-wizard.js",{

/***/ "./components/molecules/wizard-accordion/index.js":
/*!********************************************************!*\
  !*** ./components/molecules/wizard-accordion/index.js ***!
  \********************************************************/
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
/* harmony import */ var _molecules_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _molecules/accordion */ "./components/molecules/accordion/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./components/molecules/wizard-accordion/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/molecules/wizard-accordion/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var WizardAccordion = function WizardAccordion(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      onRemove = _ref.onRemove,
      children = _ref.children,
      accordionProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["title", "subtitle", "onRemove", "children"]);

  var handleRemove = function handleRemove(event) {
    event.stopPropagation();
    onRemove();
  };

  return __jsx(_molecules_accordion__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, accordionProps, {
    header: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      ref: ref,
      className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.titleGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, title), __jsx("div", {
      className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, subtitle)), __jsx("button", {
      onClick: handleRemove,
      className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.removeButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("path", {
      d: "M8,19 L16,19 L16,13 L8,13 L8,19 Z M16,7 L20,7 L20,9 L4,9 L4,7 L8,7 L8,3 L16,3 L16,7 Z M14,7 L14,5 L10,5 L10,7 L14,7 Z M6,11 L18,11 L18,21 L6,21 L6,11 Z",
      fillRule: "nonzero",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }))), __jsx("div", {
      className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.arrowIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("path", {
      d: "M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), children);
};

WizardAccordion.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WizardAccordion);

/***/ })

})
//# sourceMappingURL=resume-wizard.js.25c7135caa4e03293c2a.hot-update.js.map