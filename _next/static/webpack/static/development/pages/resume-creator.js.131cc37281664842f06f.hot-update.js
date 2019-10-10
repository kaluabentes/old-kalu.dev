webpackHotUpdate("static/development/pages/resume-creator.js",{

/***/ "./components/atoms/skill-level-field/index.js":
/*!*****************************************************!*\
  !*** ./components/atoms/skill-level-field/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./components/atoms/skill-level-field/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _atoms/input/styles.css */ "./components/atoms/input/styles.css");
/* harmony import */ var _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/atoms/skill-level-field/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var LEVELS = [{
  value: 1,
  label: 'Novice',
  needleStyle: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.needleNovice,
  fieldStyle: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.levelNovice
}, {
  value: 2,
  label: 'Beginner',
  needleStyle: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.needleBeginner,
  fieldStyle: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.levelBeginner
}, {
  value: 3,
  label: 'Skillful',
  needleStyle: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.needleSkillful,
  fieldStyle: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.levelSkillful
}, {
  value: 4,
  label: 'Experienced',
  needleStyle: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.needleExperienced,
  fieldStyle: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.levelExperienced
}, {
  value: 5,
  label: 'Expert',
  needleStyle: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.needleExpert,
  fieldStyle: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.levelExpert
}];

var SkillLevelField = function SkillLevelField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange;
  var currentLevel = LEVELS[value - 1];

  var moveNeedle = function moveNeedle(level) {
    return {
      transform: "translateX(".concat((level - 1) * 100, "%)")
    };
  };

  return __jsx("div", {
    className: _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, label && __jsx("label", {
    className: _atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.label,
    htmlFor: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, label), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_atoms_input_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.input, _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.field, currentLevel.fieldStyle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.needle, currentLevel.needleStyle),
    style: moveNeedle(value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), LEVELS.map(function (level, index) {
    return __jsx("button", {
      key: index,
      type: "button",
      onClick: function onClick() {
        return onChange(level.value);
      },
      className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.level,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    });
  })));
};

SkillLevelField.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
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
//# sourceMappingURL=resume-creator.js.131cc37281664842f06f.hot-update.js.map