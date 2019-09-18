webpackHotUpdate("styles",{

/***/ "./components/organisms/latest-articles/styles.css":
/*!*********************************************************!*\
  !*** ./components/organisms/latest-articles/styles.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"article":"_3IkJz94q1kOevsKLu1qWty","articleImage":"_1nslWOg6XHUHbVH3tVAe3m","grid":"_1MeO1k39uy8KR11lKyzcb4","articleContent":"ve7NwUGtfJa3yJ_cRKMvz","articleTitle":"_1aZuRPmFWzWm5LYeD8ctcs","articleExcerpt":"wMmUQooWvM0cHXNsWYEZa"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1568770058980");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.d4d33164ce5bcfc1a411.hot-update.js.map