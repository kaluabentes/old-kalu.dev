webpackHotUpdate("static/development/pages/resume-wizard.js",{

/***/ "./components/molecules/employment-wizard/index.js":
/*!*********************************************************!*\
  !*** ./components/molecules/employment-wizard/index.js ***!
  \*********************************************************/
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
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _atoms/input */ "./components/atoms/input/index.js");
/* harmony import */ var _atoms_text_area__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _atoms/text-area */ "./components/atoms/text-area/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./components/molecules/employment-wizard/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/molecules/employment-wizard/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var EmploymentWizard = function EmploymentWizard(_ref) {
  var isOpen = _ref.isOpen,
      employment = _ref.employment,
      onChange = _ref.onChange,
      onToggle = _ref.onToggle;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.wizard, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.open, isOpen)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("button", {
    onClick: onToggle,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.titleGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, employment.jobTitle, " at ", employment.employer), __jsx("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.periodDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, employment.startDate, " - ", employment.endDate)), __jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("path", {
    d: "M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "jobTitle",
    name: "jobTitle",
    label: "Job Title",
    value: employment.jobTitle,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "employer",
    name: "employer",
    label: "Employer",
    value: employment.employer,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "city",
    name: "city",
    label: "City",
    value: employment.city,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.periodDateGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "startDate",
    name: "startDate",
    label: "Start Date",
    value: employment.startDate,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "endDate",
    name: "endDate",
    label: "End Date",
    value: employment.endDate,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), __jsx(_atoms_text_area__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "description",
    name: "description",
    label: "Description",
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, employment.description)));
};

EmploymentWizard.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  employment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    jobTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    employer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    city: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    startDate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    endDate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.description
  }),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
EmploymentWizard.defaultProps = {
  isOpen: false,
  employment: {
    jobTitle: '',
    employer: '',
    city: '',
    startDate: '',
    endDate: '',
    description: ''
  },
  onChange: function onChange() {},
  onToggle: function onToggle() {}
};
/* harmony default export */ __webpack_exports__["default"] = (EmploymentWizard);

/***/ }),

/***/ "./pages/resume-wizard.js":
/*!********************************!*\
  !*** ./pages/resume-wizard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _templates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _templates/page */ "./components/templates/page/index.js");
/* harmony import */ var _atoms_page_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! _atoms/page-title */ "./components/atoms/page-title/index.js");
/* harmony import */ var _atoms_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! _atoms/container */ "./components/atoms/container/index.js");
/* harmony import */ var _molecules_form_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! _molecules/form-section */ "./components/molecules/form-section/index.js");
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! _atoms/input */ "./components/atoms/input/index.js");
/* harmony import */ var _atoms_text_area__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! _atoms/text-area */ "./components/atoms/text-area/index.js");
/* harmony import */ var _atoms_form_description__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! _atoms/form-description */ "./components/atoms/form-description/index.js");
/* harmony import */ var _molecules_employment_wizard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! _molecules/employment-wizard */ "./components/molecules/employment-wizard/index.js");





var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/pages/resume-wizard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;










var ResumeWizard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ResumeWizard, _Component);

  function ResumeWizard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResumeWizard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ResumeWizard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ResumeWizard, [{
    key: "render",
    value: function render() {
      return __jsx(_templates_page__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Resume Wizard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx(_atoms_container__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx(_atoms_page_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Resume Wizard"), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Personal Details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "firstName",
        name: "firstName",
        label: "First Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "lastName",
        name: "lastName",
        label: "Last Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "photo",
        name: "photo",
        label: "Photo",
        type: "file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "jobTitle",
        name: "jobTitle",
        label: "Job Title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "email",
        name: "email",
        label: "Email",
        type: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "phone",
        name: "phone",
        label: "Phone",
        type: "tel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Professional Summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(_atoms_text_area__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Include 2-3 clear sentences about your overall exerience",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Employment History",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(_atoms_form_description__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Include your last 10 years of relevant experience and dates in this section. List your most recent position first."))));
    }
  }]);

  return ResumeWizard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ResumeWizard);

/***/ })

})
//# sourceMappingURL=resume-wizard.js.04c4e5de8a75c3e796f2.hot-update.js.map