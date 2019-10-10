webpackHotUpdate("static/development/pages/resume-creator.js",{

/***/ "./components/organisms/skill-wizard/index.js":
/*!****************************************************!*\
  !*** ./components/organisms/skill-wizard/index.js ***!
  \****************************************************/
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
/* harmony import */ var _atoms_skill_level_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _atoms/skill-level-field */ "./components/atoms/skill-level-field/index.js");
/* harmony import */ var _hooks_use_input_focus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! _hooks/use-input-focus */ "./hooks/use-input-focus.js");


var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/organisms/skill-wizard/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var SkillWizard = function SkillWizard(_ref) {
  var hasFocus = _ref.hasFocus,
      skill = _ref.skill,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      wizardAccordionProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["hasFocus", "skill", "onChange", "onFocus"]);

  var firstInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
  Object(_hooks_use_input_focus__WEBPACK_IMPORTED_MODULE_7__["default"])(firstInputRef, hasFocus, onFocus);

  var handleChange = function handleChange(event) {
    onChange(event.target.name, event.target.value);
  };

  var handleSkillChange = function handleSkillChange(value) {
    onChange('level', value);
  };

  return __jsx(_molecules_wizard_accordion__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: skill.name,
    subtitle: skill.level.label
  }, wizardAccordionProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_atoms_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "skillName",
    name: "name",
    label: "Skill",
    value: skill.name,
    onChange: handleChange,
    ref: firstInputRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_atoms_skill_level_field__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "skillLevel",
    name: "level",
    label: "Level",
    value: skill.level,
    onChange: handleSkillChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
};

SkillWizard.propTypes = {
  hasFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  skill: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    degree: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    city: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    startDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    endDate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.description
  }),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
SkillWizard.defaultProps = {
  hasFocus: false,
  skill: {
    name: '',
    level: ''
  },
  onChange: function onChange() {},
  onFocus: function onFocus() {}
};
/* harmony default export */ __webpack_exports__["default"] = (SkillWizard);

/***/ })

})
//# sourceMappingURL=resume-creator.js.37343cbe8f4447b47659.hot-update.js.map