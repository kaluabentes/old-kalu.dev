webpackHotUpdate("static/development/pages/resume-wizard.js",{

/***/ "./components/atoms/text-area/index.js":
/*!*********************************************!*\
  !*** ./components/atoms/text-area/index.js ***!
  \*********************************************/
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
/* harmony import */ var _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _atoms/input/styles.css */ "./components/atoms/input/styles.css");
/* harmony import */ var _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/atoms/text-area/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var TextArea = function TextArea(_ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      errorMessage = _ref.errorMessage,
      label = _ref.label,
      onChange = _ref.onChange,
      isDisabled = _ref.isDisabled,
      hasError = _ref.hasError;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, label && __jsx("label", {
    htmlFor: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, label), __jsx("textarea", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.input, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.error, hasError)),
    id: id,
    name: name,
    onChange: onChange,
    disabled: isDisabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, value), hasError && __jsx("div", {
    className: _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, errorMessage));
};

TextArea.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  hasError: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
TextArea.defaultProps = {
  className: undefined,
  id: undefined,
  name: undefined,
  value: '',
  errorMessage: undefined,
  label: undefined,
  onChange: function onChange() {},
  isDisabled: false,
  hasError: false
};
/* harmony default export */ __webpack_exports__["default"] = (TextArea);

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
          lineNumber: 13
        },
        __self: this
      }, __jsx(_atoms_container__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx(_atoms_page_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Resume Wizard"), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Personal Details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "firstName",
        name: "firstName",
        label: "First Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "lastName",
        name: "lastName",
        label: "Last Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "photo",
        name: "photo",
        label: "Photo",
        type: "file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "jobTitle",
        name: "jobTitle",
        label: "Job Title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "email",
        name: "email",
        label: "Email",
        type: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "phone",
        name: "phone",
        label: "Phone",
        type: "tel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), __jsx(_molecules_form_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Professional Summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })));
    }
  }]);

  return ResumeWizard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ResumeWizard);

/***/ })

})
//# sourceMappingURL=resume-wizard.js.5241b8b19787a26f8049.hot-update.js.map