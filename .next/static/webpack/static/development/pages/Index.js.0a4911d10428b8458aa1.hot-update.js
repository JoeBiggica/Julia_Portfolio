webpackHotUpdate("static/development/pages/Index.js",{

/***/ "./components/portfolio/Portfolio.jsx":
/*!********************************************!*\
  !*** ./components/portfolio/Portfolio.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portfolio; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _poster__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./poster */ "./components/portfolio/poster/index.js");
/* harmony import */ var _Portfolio_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Portfolio.scss */ "./components/portfolio/Portfolio.scss");
/* harmony import */ var _Portfolio_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Portfolio_scss__WEBPACK_IMPORTED_MODULE_12__);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default()(Date, [], function () {})); return true; } catch (e) { return false; } }






var Portfolio = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Portfolio, _Component);

  var _super = _createSuper(Portfolio);

  function Portfolio(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Portfolio);

    _this = _super.call(this, props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      active_project_index: null,
      active_project: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderPoster", function (p, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _Portfolio_scss__WEBPACK_IMPORTED_MODULE_12___default()('item')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_poster__WEBPACK_IMPORTED_MODULE_11__["default"], p));
    });

    _this.projects = [{
      name: 'skullcandy',
      poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/555499d4e4b0565df9f23a1d/555499e7e4b0565df9f23a5e/1431607784781/LoneWolf2_sm.jpg?format=750w',
      title: 'Skullcandy',
      opened: false,
      hidden: false,
      id: 1,
      assets: [{
        title: 'Title Goes Here',
        url: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/555499d4e4b0565df9f23a1d/555499e7e4b0565df9f23a5e/1431607784781/LoneWolf2_sm.jpg?format=750w',
        description: 'Description for the asset.'
      }, {
        title: 'Title Goes Here',
        url: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/555499d4e4b0565df9f23a1d/555499e7e4b0b9618acd2d70/1431607784463/DarkHorse2_sm.jpg?format=750w',
        description: 'Description for the asset.'
      }, {
        title: 'Title Goes Here',
        url: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/555499d4e4b0565df9f23a1d/555499e7e4b0565df9f23a60/1431607784172/BlackSheep2_sm.jpg?format=750w',
        description: 'Description for the asset.'
      }]
    }, {
      name: 'tesla',
      poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/547f3e8ce4b04d33120eeb57/54b99732e4b06e38ad6034c7/1421449017883/tesla_v5_2.jpg?format=750w',
      title: 'Tesla',
      opened: false,
      hidden: false,
      id: 2
    }, {
      name: 'barkbox',
      poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/549903d8e4b098bb33b87e9e/54990c02e4b0787a0cc14957/1419316236777/BarkBox_Print_-06.jpg?format=750w',
      title: 'Barkbox',
      opened: false,
      hidden: false,
      id: 3
    }, {
      name: 'nike',
      poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/549907bbe4b07bc577886c39/549907e9e4b0bff459301cfa/1419315183649/nike_billboard_v1.jpg?format=750w',
      title: 'Nike',
      opened: false,
      hidden: false,
      id: 4
    }, {
      name: 'roomba',
      poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/54991ce9e4b0bc65ffac1462/549a2492e4b0a7e35c9a2be6/1419388057416/NYC+copy+copy.jpg?format=750w',
      title: 'Roomba',
      opened: false,
      hidden: false,
      id: 5
    }, {
      name: 'greygoose',
      poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/558c1bb3e4b03447dc04bba9/558c2a99e4b00dea8bca5bd7/1435249321448/?format=750w',
      title: 'Grey Goose',
      opened: false,
      hidden: false,
      id: 6
    }, {
      name: 'skullcandy',
      poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/555499d4e4b0565df9f23a1d/555499e7e4b0565df9f23a5e/1431607784781/LoneWolf2_sm.jpg?format=750w',
      title: 'Skullcandy',
      opened: false,
      hidden: false,
      id: 7
    }, {
      name: 'tesla',
      poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/547f3e8ce4b04d33120eeb57/54b99732e4b06e38ad6034c7/1421449017883/tesla_v5_2.jpg?format=750w',
      title: 'Tesla',
      opened: false,
      hidden: false,
      id: 8
    }, {
      name: 'barkbox',
      poster_image: 'https://static1.squarespace.com/static/534b388de4b0d9388241e656/549903d8e4b098bb33b87e9e/54990c02e4b0787a0cc14957/1419316236777/BarkBox_Print_-06.jpg?format=750w',
      title: 'Barkbox',
      opened: false,
      hidden: false,
      id: 9
    }];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Portfolio, [{
    key: "render",
    value: function render() {
      var active_project = this.projects[this.state.active_project_index];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _Portfolio_scss__WEBPACK_IMPORTED_MODULE_12___default()('container')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _Portfolio_scss__WEBPACK_IMPORTED_MODULE_12___default()('items-wrapper')
      }, this.projects.map(this.renderPoster.bind(this))));
    }
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/modules/es6.function.name.js":
false

})
//# sourceMappingURL=Index.js.0a4911d10428b8458aa1.hot-update.js.map