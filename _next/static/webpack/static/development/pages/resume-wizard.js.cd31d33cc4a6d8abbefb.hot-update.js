webpackHotUpdate("static/development/pages/resume-wizard.js",{

/***/ "./components/atoms/upload-photo-field/index.js":
/*!******************************************************!*\
  !*** ./components/atoms/upload-photo-field/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _atoms_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _atoms/spinner */ "./components/atoms/spinner/index.js");
/* harmony import */ var _utils_image_reader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! _utils/image-reader */ "./utils/image-reader.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.css */ "./components/atoms/upload-photo-field/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/atoms/upload-photo-field/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var UploadPhotoField = function UploadPhotoField(_ref) {
  var photoSrc = _ref.photoSrc,
      onPhotoLoad = _ref.onPhotoLoad;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      fileName = _useState[0],
      setFileName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["createRef"])();

  var handleClick = function handleClick() {
    inputRef.current.click();
  };

  var handleChange =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var _event$target$files, file, imageReader, imageSrc;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _event$target$files = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(event.target.files, 1), file = _event$target$files[0];
              setIsLoading(true);
              imageReader = new _utils_image_reader__WEBPACK_IMPORTED_MODULE_7__["default"](file);
              _context.next = 5;
              return imageReader.getBase64();

            case 5:
              imageSrc = _context.sent;
              setIsLoading(false);
              onPhotoLoad(imageSrc);
              setFileName(file.name);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (isLoading) {
    return __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_css__WEBPACK_IMPORTED_MODULE_8___default.a.field, _styles_css__WEBPACK_IMPORTED_MODULE_8___default.a.fieldCenter),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(_atoms_spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: _atoms_spinner__WEBPACK_IMPORTED_MODULE_6__["default"].sizes.small,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  }

  return isLoading ? __jsx(_atoms_spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }) : __jsx("button", {
    onClick: handleClick,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_8___default.a.field,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_8___default.a.photoBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, photoSrc ? __jsx("img", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_8___default.a.photo,
    src: photoSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }) : __jsx("svg", {
    width: "40px",
    height: "40px",
    viewBox: "0 0 40 40",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("path", {
    d: "M7,35 L33,35 L33,30 L24.9627594,26.8044586 C24.5698041,26.6156354 24.3340309,26.2379889 24.3340309,25.8225778 L24.3340309,24.6518737 C24.3340309,24.3875212 24.412622,24.1231687 24.6090996,23.9343454 C25.9058522,22.5370535 26.770354,20.4599979 27.0061272,19.8557636 C27.0454227,19.7424697 27.1240138,19.6291757 27.2026048,19.5536464 C27.438378,19.3648232 27.8313333,18.8738828 28.1064021,17.7031787 C28.3421753,16.5702393 27.9099244,15.9282403 27.6348557,15.6261232 C27.4776736,15.4750646 27.3990825,15.2862413 27.3990825,15.0974181 L27.3990825,10.2257787 C26.8882406,7.43119483 25.1592371,6.1094322 23.4302337,5.50519785 C21.5833436,4.82543421 18.2825188,4.82543421 16.3963333,5.5429625 C14.7459209,6.18496149 13.056213,7.46895948 12.5846666,10.2257787 L12.5846666,15.0974181 C12.5846666,15.2862413 12.5060755,15.4750646 12.3488934,15.6261232 C12.0738246,15.9282403 11.6415738,16.5702393 11.877347,17.7031787 C12.1131202,18.8738828 12.545371,19.3648232 12.7811442,19.5536464 C12.8597353,19.6291757 12.9383264,19.7424697 12.9776219,19.8557636 C13.2133951,20.4977626 14.0778968,22.4992889 15.3353539,23.8965808 C15.5318315,24.1231687 15.6497181,24.4252858 15.6497181,24.727403 L15.6497181,25.7470485 C15.6497181,26.2379889 15.3746494,26.6534 14.903103,26.8799879 L7,30 L7,35 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, fileName ? fileName : 'Upload photo'), __jsx("input", {
    ref: inputRef,
    onChange: handleChange,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
    type: "file",
    accept: "image/x-png,image/gif,image/jpeg, .jpg, .jpeg, .gif, .png, .tiff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};

UploadPhotoField.propTypes = {
  photoSrc: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
UploadPhotoField.defaultProps = {
  photoSrc: ''
};
/* harmony default export */ __webpack_exports__["default"] = (UploadPhotoField);

/***/ }),

/***/ "./components/molecules/accordion/index.js":
/*!*************************************************!*\
  !*** ./components/molecules/accordion/index.js ***!
  \*************************************************/
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./components/molecules/accordion/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/molecules/accordion/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Accordion = function Accordion(_ref) {
  var isOpen = _ref.isOpen,
      onToggle = _ref.onToggle,
      children = _ref.children,
      header = _ref.header;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      height = _useState[0],
      setHeight = _useState[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setHeight(ref.current.scrollHeight);
  });
  return __jsx("div", {
    ref: ref,
    style: {
      height: isOpen ? "".concat(height, "px") : "77px"
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.wizard, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.open, isOpen)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    onClick: onToggle,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    tabIndex: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, header), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children));
};

Accordion.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Accordion.defaultProps = {
  isOpen: false,
  onToggle: function onToggle() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./components/molecules/wizard-accordion/index.js":
/*!********************************************************!*\
  !*** ./components/molecules/wizard-accordion/index.js ***!
  \********************************************************/
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
/* harmony import */ var _molecules_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _molecules/accordion */ "./components/molecules/accordion/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./components/molecules/wizard-accordion/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/molecules/wizard-accordion/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var WizardAccordion = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (_ref, ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      onRemove = _ref.onRemove,
      children = _ref.children,
      accordionProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["title", "subtitle", "onRemove", "children"]);

  var handleRemove = function handleRemove(event) {
    event.stopPropagation();
    onRemove();
  };

  return __jsx(_molecules_accordion__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, accordionProps, {
    header: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      ref: ref,
      className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.titleGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, title), __jsx("div", {
      className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, subtitle)), __jsx("button", {
      onClick: handleRemove,
      className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.removeButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
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
        lineNumber: 24
      },
      __self: this
    }, __jsx("path", {
      d: "M8,19 L16,19 L16,13 L8,13 L8,19 Z M16,7 L20,7 L20,9 L4,9 L4,7 L8,7 L8,3 L16,3 L16,7 Z M14,7 L14,5 L10,5 L10,7 L14,7 Z M6,11 L18,11 L18,21 L6,21 L6,11 Z",
      fillRule: "nonzero",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }))), __jsx("div", {
      className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.arrowIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
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
        lineNumber: 27
      },
      __self: this
    }, __jsx("path", {
      d: "M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children);
});
/* harmony default export */ __webpack_exports__["default"] = (WizardAccordion);

/***/ }),

/***/ "./components/organisms/footer/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/footer/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _atoms/container */ "./components/atoms/container/index.js");
/* harmony import */ var _atoms_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _atoms/brand */ "./components/atoms/brand/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./components/organisms/footer/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/organisms/footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Footer = function Footer() {
  return __jsx("footer", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_atoms_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_atoms_brand__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("p", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.greetings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Say hi,", ' ', __jsx("a", {
    href: "mailto:kaluanbentes@gmail.com",
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "kaluanbentes@gmail.com")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/kaluabentes",
    target: "_blank",
    rel: "nooponer noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("svg", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("path", {
    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.linkedin.com/in/kalu%C3%A3-bentes-5a5245103/",
    target: "_blank",
    rel: "nooponer noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("svg", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("path", {
    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))), __jsx("p", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.copyright,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Copyright \xA9 ", new Date().getFullYear(), " Kalu\xE3 Bentes, Inc. All rights reserved."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/templates/page/index.js":
/*!********************************************!*\
  !*** ./components/templates/page/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "../node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _templates/base */ "./components/templates/base/index.js");
/* harmony import */ var _organisms_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _organisms/header */ "./components/organisms/header/index.js");
/* harmony import */ var _organisms_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _organisms/body */ "./components/organisms/body/index.js");
/* harmony import */ var _organisms_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! _organisms/footer */ "./components/organisms/footer/index.js");
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! _config/routes */ "./config/routes.js");
var _jsxFileName = "/home/kalu/Projects/kaluabentes.github.io/src/components/templates/page/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Page = function Page(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return __jsx(_templates_base__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Kalu\xE3 Bentes - ", title)), __jsx(_organisms_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isFixed: true,
    routes: _config_routes__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_organisms_body__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children), __jsx(_organisms_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

Page.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Page.defaultProps = {
  title: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=resume-wizard.js.cd31d33cc4a6d8abbefb.hot-update.js.map