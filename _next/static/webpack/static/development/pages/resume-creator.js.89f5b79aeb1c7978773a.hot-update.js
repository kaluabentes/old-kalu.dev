webpackHotUpdate("static/development/pages/resume-creator.js",{

/***/ "./components/organisms/header/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/header/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _atoms_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! _atoms/container */ "./components/atoms/container/index.js");
/* harmony import */ var _atoms_brand__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! _atoms/brand */ "./components/atoms/brand/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles.css */ "./components/organisms/header/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/organisms/header/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isNavOpen: false,
      currentPath: '',
      navHeight: undefined
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "navRef", Object(react__WEBPACK_IMPORTED_MODULE_7__["createRef"])());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleNavToggle", function () {
      _this.setState(function (prevState) {
        return {
          isNavOpen: !prevState.isNavOpen
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var router = this.props.router;
      this.setState({
        currentPath: router.asPath,
        navHeight: this.navRef.current.scrollHeight
      });
    }
  }, {
    key: "isCurrentNavItem",
    value: function isCurrentNavItem(path) {
      var currentPath = this.state.currentPath;
      return currentPath == path;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          routes = _this$props.routes,
          isFixed = _this$props.isFixed,
          navHeight = _this$props.navHeight;
      var isNavOpen = this.state.isNavOpen;
      return __jsx("header", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_css__WEBPACK_IMPORTED_MODULE_14___default.a.header, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, _styles_css__WEBPACK_IMPORTED_MODULE_14___default.a.fixed, isFixed)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(_atoms_container__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("div", {
        className: _styles_css__WEBPACK_IMPORTED_MODULE_14___default.a.headerInner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(_atoms_brand__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("button", {
        onClick: this.handleNavToggle,
        className: _styles_css__WEBPACK_IMPORTED_MODULE_14___default.a.navToggler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), __jsx("nav", {
        ref: this.navRef,
        style: {
          height: isNavOpen ? "".concat(navHeight, "px") : '0'
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_css__WEBPACK_IMPORTED_MODULE_14___default.a.nav, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, _styles_css__WEBPACK_IMPORTED_MODULE_14___default.a.navOpen, isNavOpen)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, routes.map(function (route) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: route.path,
          key: route.path,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, __jsx("a", {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_css__WEBPACK_IMPORTED_MODULE_14___default.a.navItem, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, _styles_css__WEBPACK_IMPORTED_MODULE_14___default.a.navItemCurrent, _this2.isCurrentNavItem(route.path))),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, route.text));
      })))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Header, "propTypes", {
  routes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    path: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
  })),
  isFixed: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Header, "defaultProps", {
  isFixed: false
});

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Header));

/***/ })

})
//# sourceMappingURL=resume-creator.js.89f5b79aeb1c7978773a.hot-update.js.map