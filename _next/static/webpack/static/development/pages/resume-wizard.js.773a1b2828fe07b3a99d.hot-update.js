webpackHotUpdate("static/development/pages/resume-wizard.js",{

/***/ "./components/molecules/employment-wizard/index.js":
false,

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

/***/ }),

/***/ "./pages/resume-wizard.js":
/*!********************************!*\
  !*** ./pages/resume-wizard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _templates_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! _templates/page */ "./components/templates/page/index.js");
/* harmony import */ var _atoms_page_title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! _atoms/page-title */ "./components/atoms/page-title/index.js");
/* harmony import */ var _atoms_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! _atoms/container */ "./components/atoms/container/index.js");
/* harmony import */ var _molecules_form_section__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! _molecules/form-section */ "./components/molecules/form-section/index.js");
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! _atoms/input */ "./components/atoms/input/index.js");
/* harmony import */ var _atoms_text_area__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! _atoms/text-area */ "./components/atoms/text-area/index.js");
/* harmony import */ var _atoms_form_description__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! _atoms/form-description */ "./components/atoms/form-description/index.js");
/* harmony import */ var _organisms_employment_wizard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! _organisms/employment-wizard */ "./components/organisms/employment-wizard/index.js");
/* harmony import */ var _atoms_add_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! _atoms/add-button */ "./components/atoms/add-button/index.js");
/* harmony import */ var _atoms_upload_photo_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! _atoms/upload-photo-field */ "./components/atoms/upload-photo-field/index.js");










var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/pages/resume-wizard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;












var ResumeWizard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ResumeWizard, _Component);

  function ResumeWizard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ResumeWizard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ResumeWizard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      firstName: '',
      lastName: '',
      photo: '',
      jobTitle: '',
      email: '',
      phone: '',
      address: '',
      professionalSummary: '',
      employments: []
    });

    _this.handleEmploymentAdd = _this.handleEmploymentAdd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleEmploymentRemove = _this.handleEmploymentRemove.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleEmploymentChange = _this.handleEmploymentChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handlePhotoLoad = _this.handlePhotoLoad.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ResumeWizard, [{
    key: "handleEmploymentToggle",
    value: function handleEmploymentToggle(index) {
      this.setState(function (prevState) {
        return {
          employments: prevState.employments.map(function (employment, currentIndex) {
            if (index === currentIndex) {
              employment.isOpen = !employment.isOpen;
            }

            return employment;
          })
        };
      });
    }
  }, {
    key: "handleEmploymentAdd",
    value: function handleEmploymentAdd() {
      this.setState(function (prevState) {
        var employments = prevState.employments.map(function (employment) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, employment, {
            isOpen: false
          });
        });
        return {
          employments: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(employments), [{
            jobTitle: '',
            employer: '',
            city: '',
            startDate: '',
            endDate: '',
            description: '',
            isOpen: true,
            hasFocus: true
          }])
        };
      });
    }
  }, {
    key: "handleEmploymentRemove",
    value: function handleEmploymentRemove(index) {
      this.setState(function (prevState) {
        return {
          employments: prevState.employments.filter(function (employment, currentIndex) {
            return index !== currentIndex;
          })
        };
      });
    }
  }, {
    key: "handleEmploymentChange",
    value: function handleEmploymentChange(index, name, value) {
      this.setState(function (prevState) {
        return {
          employments: prevState.employments.map(function (employment, currentIndex) {
            if (index === currentIndex) {
              employment = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, employment, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, value));
            }

            return employment;
          })
        };
      });
    }
  }, {
    key: "handleEmploymentFocus",
    value: function handleEmploymentFocus(index) {
      this.setState(function (prevState) {
        return {
          employments: prevState.employments.map(function (employment, currentIndex) {
            if (index === currentIndex) {
              employment.hasFocus = false;
            }

            return employment;
          })
        };
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "handlePhotoLoad",
    value: function handlePhotoLoad(base64) {
      this.setState({
        photo: base64
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          employments = _this$state.employments,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          photo = _this$state.photo,
          jobTitle = _this$state.jobTitle,
          email = _this$state.email,
          phone = _this$state.phone,
          address = _this$state.address,
          professionalSummary = _this$state.professionalSummary;
      return __jsx(_templates_page__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Resume Wizard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx(_atoms_container__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx(_atoms_page_title__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Resume Wizard"), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Personal Details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "firstName",
        name: "firstName",
        label: "First Name",
        value: firstName,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "lastName",
        name: "lastName",
        label: "Last Name",
        value: lastName,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), __jsx(_atoms_upload_photo_field__WEBPACK_IMPORTED_MODULE_20__["default"], {
        photoSrc: photo,
        onPhotoLoad: this.handlePhotoLoad,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "jobTitle",
        name: "jobTitle",
        label: "Job Title",
        value: jobTitle,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "email",
        name: "email",
        label: "Email",
        type: "email",
        value: email,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "phone",
        name: "phone",
        label: "Phone",
        type: "tel",
        value: phone,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "address",
        name: "address",
        label: "address",
        type: "Address",
        value: address,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      })), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Professional Summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx(_atoms_text_area__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "professionalSummary",
        name: "professionalSummary",
        label: "Include 2-3 clear sentences about your overall exerience",
        onChange: this.handleInputChange,
        value: professionalSummary,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      })), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Employment History",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, __jsx(_atoms_form_description__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Include your last 10 years of relevant experience and dates in this section. List your most recent position first."), employments.map(function (_ref, index) {
        var isOpen = _ref.isOpen,
            hasFocus = _ref.hasFocus,
            employment = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["isOpen", "hasFocus"]);

        return __jsx(_organisms_employment_wizard__WEBPACK_IMPORTED_MODULE_18__["default"], {
          key: index,
          isOpen: isOpen,
          hasFocus: hasFocus,
          employment: employment,
          onToggle: function onToggle() {
            return _this2.handleEmploymentToggle(index);
          },
          onChange: function onChange(name, value) {
            return _this2.handleEmploymentChange(index, name, value);
          },
          onRemove: function onRemove() {
            return _this2.handleEmploymentRemove(index);
          },
          onFocus: function onFocus() {
            return _this2.handleEmploymentFocus(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        });
      }), __jsx(_atoms_add_button__WEBPACK_IMPORTED_MODULE_19__["default"], {
        onClick: this.handleEmploymentAdd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Add employment"))));
    }
  }]);

  return ResumeWizard;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ResumeWizard);

/***/ })

})
//# sourceMappingURL=resume-wizard.js.773a1b2828fe07b3a99d.hot-update.js.map