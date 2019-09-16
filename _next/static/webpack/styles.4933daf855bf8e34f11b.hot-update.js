webpackHotUpdate("styles",{

/***/ "./components/atoms/brand/styles.css":
/*!*******************************************!*\
  !*** ./components/atoms/brand/styles.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"brand":"Wcw3XFPKVnnsdCxEOEyhE","sizeSmall":"_37YKmWNIg3YtAmEG-eXep2","sizeMedium":"_2VFUmaYgDH5OXYjqVPZ8N6","themeLight":"_2K4xx2AnpiFRkhx-DZjf8N","themeDark":"_33g27lU0K7_rNllAwhWfgl"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1568596424409");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.4933daf855bf8e34f11b.hot-update.js.map