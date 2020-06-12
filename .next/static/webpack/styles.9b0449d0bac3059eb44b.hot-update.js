webpackHotUpdate("styles",{

/***/ "./node_modules/extracted-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./pages/Index.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extracted-loader!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--6-2!./node_modules/sass-loader/lib/loader.js??ref--6-3!./pages/Index.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"Index-container-1kqg1","main":"Index-main-1O58W","gradient":"Index-gradient-251s9","info":"Index-info-3dRFz","content":"Index-content-T_TIg","logo":"Index-logo-nGWz0","buy-button":"Index-buy-button-2py0_","social-buttons":"Index-social-buttons-3sJYS","subcontent":"Index-subcontent-SfUwl","line":"Index-line-1peNx","label":"Index-label-2V9Gi","description":"Index-description-3gzw7","info-line":"Index-info-line-4FCL_"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1591980010577");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.9b0449d0bac3059eb44b.hot-update.js.map