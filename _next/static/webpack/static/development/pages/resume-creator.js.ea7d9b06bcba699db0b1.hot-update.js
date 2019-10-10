webpackHotUpdate("static/development/pages/resume-creator.js",{

/***/ "./pages/resume-creator.js":
/*!*********************************!*\
  !*** ./pages/resume-creator.js ***!
  \*********************************/
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
/* harmony import */ var _organisms_education_wizard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! _organisms/education-wizard */ "./components/organisms/education-wizard/index.js");
/* harmony import */ var _atoms_add_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! _atoms/add-button */ "./components/atoms/add-button/index.js");
/* harmony import */ var _atoms_upload_photo_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! _atoms/upload-photo-field */ "./components/atoms/upload-photo-field/index.js");










var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/pages/resume-creator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;













var ResumeCreator =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ResumeCreator, _Component);

  function ResumeCreator(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ResumeCreator);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ResumeCreator).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "WIZARD_DEFAULT_VALUES", {
      employments: {
        jobTitle: '',
        employer: ''
      },
      educations: {
        school: '',
        degree: ''
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      firstName: '',
      lastName: '',
      photo: '',
      jobTitle: '',
      email: '',
      phone: '',
      address: '',
      professionalSummary: '',
      employments: [],
      educations: []
    });

    _this.handleEmploymentAdd = _this.handleEmploymentAdd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleEmploymentRemove = _this.handleEmploymentRemove.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleEmploymentChange = _this.handleEmploymentChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handlePhotoLoad = _this.handlePhotoLoad.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ResumeCreator, [{
    key: "handleWizardToggle",
    value: function handleWizardToggle(collection, index) {
      this.setState(function (prevState) {
        return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, collection, prevState[collection].map(function (item, currentIndex) {
          if (index === currentIndex) {
            item.isOpen = !item.isOpen;
          }

          return item;
        }));
      });
    }
  }, {
    key: "handleWizardAdd",
    value: function handleWizardAdd(collection) {
      var _this2 = this;

      this.setState(function (prevState) {
        var collection = prevState[collection].map(function (item) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item, {
            isOpen: false
          });
        });
        return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, collection, [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(collection), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this2.WIZARD_DEFAULT_VALUES[collection], {
          startDate: '',
          endDate: '',
          description: '',
          isOpen: true,
          hasFocus: true
        })]));
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
      var _this3 = this;

      var _this$state = this.state,
          employments = _this$state.employments,
          educations = _this$state.educations,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          photo = _this$state.photo,
          jobTitle = _this$state.jobTitle,
          email = _this$state.email,
          phone = _this$state.phone,
          address = _this$state.address,
          professionalSummary = _this$state.professionalSummary;
      return __jsx(_templates_page__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Resume Creator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx(_atoms_container__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx(_atoms_page_title__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Resume Creator"), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Personal Details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
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
          lineNumber: 146
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
          lineNumber: 153
        },
        __self: this
      }), __jsx(_atoms_upload_photo_field__WEBPACK_IMPORTED_MODULE_21__["default"], {
        photoSrc: photo,
        onPhotoLoad: this.handlePhotoLoad,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
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
          lineNumber: 161
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
          lineNumber: 168
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
          lineNumber: 176
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
          lineNumber: 184
        },
        __self: this
      })), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Professional Summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
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
          lineNumber: 194
        },
        __self: this
      })), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Employment History",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx(_atoms_form_description__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Include your last 10 years of relevant experience and dates in this section. List your most recent position first."), employments.map(function (_ref3, index) {
        var isOpen = _ref3.isOpen,
            hasFocus = _ref3.hasFocus,
            employment = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["isOpen", "hasFocus"]);

        return __jsx(_organisms_employment_wizard__WEBPACK_IMPORTED_MODULE_18__["default"], {
          key: index,
          isOpen: isOpen,
          hasFocus: hasFocus,
          employment: employment,
          onToggle: function onToggle() {
            return _this3.handleWizardToggle('employments', index);
          },
          onChange: function onChange(name, value) {
            return _this3.handleEmploymentChange(index, name, value);
          },
          onRemove: function onRemove() {
            return _this3.handleEmploymentRemove(index);
          },
          onFocus: function onFocus() {
            return _this3.handleEmploymentFocus(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        });
      }), __jsx(_atoms_add_button__WEBPACK_IMPORTED_MODULE_20__["default"], {
        onClick: this.handleEmploymentAdd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Add employment")), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Education",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, __jsx(_atoms_form_description__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "If relevant, include your most recent educational achievements and the dates here"), educations.map(function (_ref4, index) {
        var isOpen = _ref4.isOpen,
            hasFocus = _ref4.hasFocus,
            education = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, ["isOpen", "hasFocus"]);

        return __jsx(_organisms_education_wizard__WEBPACK_IMPORTED_MODULE_19__["default"], {
          key: index,
          isOpen: isOpen,
          hasFocus: hasFocus,
          education: education,
          onToggle: function onToggle() {
            return _this3.handleWizardToggle('educations', index);
          },
          onChange: function onChange(name, value) {
            return _this3.handleEducationChange(index, name, value);
          },
          onRemove: function onRemove() {
            return _this3.handleEducationRemove(index);
          },
          onFocus: function onFocus() {
            return _this3.handleEducationFocus(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        });
      }), __jsx(_atoms_add_button__WEBPACK_IMPORTED_MODULE_20__["default"], {
        onClick: this.handleEducationAdd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Add employment"))));
    }
  }]);

  return ResumeCreator;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ResumeCreator);

/***/ })

})
//# sourceMappingURL=resume-creator.js.ea7d9b06bcba699db0b1.hot-update.js.map