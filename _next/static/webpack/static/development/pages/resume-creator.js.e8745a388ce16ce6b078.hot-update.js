webpackHotUpdate("static/development/pages/resume-creator.js",{

/***/ "./components/atoms/skill-level-field/index.js":
/*!*****************************************************!*\
  !*** ./components/atoms/skill-level-field/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./components/atoms/skill-level-field/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _atoms/input/styles.css */ "./components/atoms/input/styles.css");
/* harmony import */ var _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/atoms/skill-level-field/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var LEVELS = [{
  value: 1,
  label: 'Novice',
  style: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.levelNovice
}, {
  value: 2,
  label: 'Beginner',
  style: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.levelBeginner
}, {
  value: 3,
  label: 'Skillful',
  style: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.levelSkillful
}, {
  value: 4,
  label: 'Experienced',
  style: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.levelExperienced
}, {
  value: 5,
  label: 'Expert',
  style: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.levelExpert
}];

var SkillLevelField = function SkillLevelField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange;
  return __jsx("div", {
    className: _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, label && __jsx("label", {
    className: _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
    htmlFor: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, label), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.input, _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.field),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, LEVELS.map(function (level, index) {
    var isLevelActive = Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.activeLevel, value === level.value);

    return __jsx("button", {
      key: index,
      type: "button",
      onClick: function onClick() {
        return onChange(level.value);
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.level, level.style, isLevelActive),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    });
  })));
};

SkillLevelField.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
SkillLevelField.propTypes = {
  id: '',
  name: '',
  label: '',
  value: '',
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (SkillLevelField);

/***/ })

})
//# sourceMappingURL=resume-creator.js.e8745a388ce16ce6b078.hot-update.js.map