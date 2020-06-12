webpackHotUpdate("static/development/pages/Index.js",{

/***/ "./components/springimage/SpringImage.jsx":
/*!************************************************!*\
  !*** ./components/springimage/SpringImage.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _SpringImage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpringImage.scss */ "./components/springimage/SpringImage.scss");
/* harmony import */ var _SpringImage_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SpringImage_scss__WEBPACK_IMPORTED_MODULE_6__);








var calc = function calc(x, y) {
  return [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
};

var trans = function trans(x, y, s) {
  return "perspective(600px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");
};

function SpringImage(props) {
  var className = props.className,
      image_url = props.image_url;
  var ref = useRef();

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isHovered = _useState2[0],
      setHovered = _useState2[1];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])(function () {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: {
        mass: 10,
        tension: 400,
        friction: 40,
        precision: 0.00001
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSpring, 2),
      animatedProps = _useSpring2[0],
      setAnimatedProps = _useSpring2[1];

  var image_styles = {
    backgroundImage: "url(".concat(image_url, ")"),
    transform: dimensions.xys.interpolate(trans)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_SpringImage_scss__WEBPACK_IMPORTED_MODULE_6___default()('container'), props.className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, {
    ref: ref,
    className: _SpringImage_scss__WEBPACK_IMPORTED_MODULE_6___default()('card'),
    onMouseEnter: function onMouseEnter() {
      return setHovered(true);
    },
    onMouseMove: function onMouseMove(_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY;
      // Get mouse x position within card
      var x = clientX - (ref.current.offsetLeft - (window.scrollX || window.pageXOffset || document.body.scrollLeft)); // Get mouse y position within card

      var y = clientY - (ref.current.offsetTop - (window.scrollY || window.pageYOffset || document.body.scrollTop)); // Set animated values based on mouse position and card dimensions

      var dampen = 50; // Lower the number the less rotation

      var xys = [-(y - ref.current.clientHeight / 2) / dampen, // rotateX
      (x - ref.current.clientWidth / 2) / dampen, // rotateY
      1.07 // Scale
      ]; // Update values to animate to

      setAnimatedProps({
        xys: xys
      });
    },
    onMouseLeave: function onMouseLeave() {
      setHovered(false); // Set xys back to original

      setAnimatedProps({
        xys: [0, 0, 1]
      });
    },
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // If hovered we want it to overlap other cards when it scales up
      zIndex: isHovered ? 2 : 1,
      // Interpolate function to handle css changes
      transform: animatedProps.xys.interpolate(function (x, y, s) {
        return "perspective(600px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");
      })
    }, image_styles)
  }));
}

SpringImage.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  image_url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SpringImage);

/***/ })

})
//# sourceMappingURL=Index.js.f084193c45745b1a3c25.hot-update.js.map