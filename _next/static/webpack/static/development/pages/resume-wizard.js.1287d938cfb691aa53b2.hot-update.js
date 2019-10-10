webpackHotUpdate("static/development/pages/resume-wizard.js",{

/***/ "./components/organisms/employment-wizard/index.js":
/*!*********************************************************!*\
  !*** ./components/organisms/employment-wizard/index.js ***!
  \*********************************************************/
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
/* harmony import */ var _molecules_wizard_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _molecules/wizard-accordion */ "./components/molecules/wizard-accordion/index.js");
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _atoms/input */ "./components/atoms/input/index.js");
/* harmony import */ var _atoms_text_area__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! _atoms/text-area */ "./components/atoms/text-area/index.js");
/* harmony import */ var _hooks_use_input_focus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! _hooks/use-input-focus */ "./hooks/use-input-focus.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.css */ "./components/organisms/employment-wizard/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/organisms/employment-wizard/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var EmploymentWizard = function EmploymentWizard(_ref) {
  var hasFocus = _ref.hasFocus,
      employment = _ref.employment,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      wizardAccordionProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["hasFocus", "employment", "onChange", "onFocus"]);

  var firstInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
  Object(_hooks_use_input_focus__WEBPACK_IMPORTED_MODULE_8__["default"])(firstInputRef, hasFocus, onFocus);

  var handleChange = function handleChange(event) {
    onChange(event.target.name, event.target.value);
  };

  return __jsx(_molecules_wizard_accordion__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "".concat(employment.jobTitle, " at ").concat(employment.employer),
    subtitle: "".concat(employment.startDate, " - ").concat(employment.endDate)
  }, wizardAccordionProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "jobTitle",
    name: "jobTitle",
    label: "Job Title",
    value: employment.jobTitle,
    onChange: handleChange,
    ref: firstInputRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "employer",
    name: "employer",
    label: "Employer",
    value: employment.employer,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "city",
    name: "city",
    label: "City",
    value: employment.city,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_9___default.a.periodDateGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "startDate",
    name: "startDate",
    label: "Start Date",
    value: employment.startDate,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "endDate",
    name: "endDate",
    label: "End Date",
    value: employment.endDate,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx(_atoms_text_area__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "description",
    name: "description",
    label: "Description",
    onChange: handleChange,
    value: employment.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }));
};

EmploymentWizard.propTypes = {
  employment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    jobTitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    employer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    city: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    startDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    endDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.description
  }),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
EmploymentWizard.defaultProps = {
  employment: {
    jobTitle: 'Frontend Develoer',
    employer: 'Cheesecake Labs',
    city: 'Florianópolis',
    startDate: 'Oct, 2018',
    endDate: 'Oct, 2019',
    description: ''
  },
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (EmploymentWizard);

/***/ })

})
//# sourceMappingURL=resume-wizard.js.1287d938cfb691aa53b2.hot-update.js.map