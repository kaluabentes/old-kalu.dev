webpackHotUpdate("styles",{

/***/ "./components/organisms/footer/styles.css":
/*!************************************************!*\
  !*** ./components/organisms/footer/styles.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"footer":"_3s-XvoxgSOckumTKpt0sw9","copyright":"_1DdOGrv5u5oK3hxmpeAqjk","icon":"_1o7sEu0zhHdtwbnLtmAneY"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1568597525394");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.99e69cd06990c9812f15.hot-update.js.map