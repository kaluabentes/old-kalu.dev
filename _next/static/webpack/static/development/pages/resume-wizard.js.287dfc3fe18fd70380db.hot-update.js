webpackHotUpdate("static/development/pages/resume-wizard.js",{

/***/ "./components/molecules/employment-wizard/index.js":
/*!*********************************************************!*\
  !*** ./components/molecules/employment-wizard/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _atoms/input */ "./components/atoms/input/index.js");
/* harmony import */ var _atoms_text_area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _atoms/text-area */ "./components/atoms/text-area/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./components/molecules/employment-wizard/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/molecules/employment-wizard/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var EmploymentWizard = function EmploymentWizard(_ref) {
  var isOpen = _ref.isOpen,
      employment = _ref.employment,
      onChange = _ref.onChange,
      onToggle = _ref.onToggle;
  var wizardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  var wizardHeight;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.dir(wizardRef.current);
  });
  return __jsx("div", {
    ref: wizardRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.wizard),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("button", {
    onClick: onToggle,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.titleGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, employment.jobTitle, " at ", employment.employer), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.periodDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, employment.startDate, " - ", employment.endDate)), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.arrowIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
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
      lineNumber: 26
    },
    __self: this
  }, __jsx("path", {
    d: "M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })))), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "jobTitle",
    name: "jobTitle",
    label: "Job Title",
    value: employment.jobTitle,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "employer",
    name: "employer",
    label: "Employer",
    value: employment.employer,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "city",
    name: "city",
    label: "City",
    value: employment.city,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.periodDateGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "startDate",
    name: "startDate",
    label: "Start Date",
    value: employment.startDate,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "endDate",
    name: "endDate",
    label: "End Date",
    value: employment.endDate,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx(_atoms_text_area__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "description",
    name: "description",
    label: "Description",
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, employment.description)));
};

EmploymentWizard.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  employment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    jobTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    employer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    city: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.description
  }),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
EmploymentWizard.defaultProps = {
  isOpen: false,
  employment: {
    jobTitle: 'Frontend Develoer',
    employer: 'Cheesecake Labs',
    city: 'Florianópolis',
    startDate: 'Oct, 2018',
    endDate: 'Oct, 2019',
    description: ''
  },
  onChange: function onChange() {},
  onToggle: function onToggle() {}
};
/* harmony default export */ __webpack_exports__["default"] = (EmploymentWizard);

/***/ })

})
//# sourceMappingURL=resume-wizard.js.287dfc3fe18fd70380db.hot-update.js.map