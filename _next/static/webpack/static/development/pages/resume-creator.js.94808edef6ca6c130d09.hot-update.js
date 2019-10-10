webpackHotUpdate("static/development/pages/resume-creator.js",{

/***/ "./components/organisms/link-wizard/index.js":
/*!***************************************************!*\
  !*** ./components/organisms/link-wizard/index.js ***!
  \***************************************************/
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
/* harmony import */ var _molecules_wizard_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _molecules/wizard-accordion */ "./components/molecules/wizard-accordion/index.js");
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _atoms/input */ "./components/atoms/input/index.js");
/* harmony import */ var _hooks_use_input_focus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _hooks/use-input-focus */ "./hooks/use-input-focus.js");


var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/organisms/link-wizard/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var LinkWizard = function LinkWizard(_ref) {
  var link = _ref.link,
      onChange = _ref.onChange,
      wizardAccordionProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["link", "onChange"]);

  var firstInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
  Object(_hooks_use_input_focus__WEBPACK_IMPORTED_MODULE_6__["default"])(firstInputRef);

  var handleChange = function handleChange(event) {
    onChange(event.target.name, event.target.value);
  };

  return __jsx(_molecules_wizard_accordion__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: link.label,
    subtitle: link.url
  }, wizardAccordionProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "linkLabel",
    name: "label",
    label: "Label",
    value: link.label,
    onChange: handleChange,
    ref: firstInputRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "linkUrl",
    name: "url",
    label: "Link",
    value: link.url,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

LinkWizard.propTypes = {
  link: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  }),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
LinkWizard.defaultProps = {
  link: {
    label: '',
    url: ''
  },
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (LinkWizard);

/***/ })

})
//# sourceMappingURL=resume-creator.js.94808edef6ca6c130d09.hot-update.js.map