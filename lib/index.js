"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alertifyjs = require("alertifyjs");

var _alertifyjs2 = _interopRequireDefault(_alertifyjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VueAlertify = {};

VueAlertify.install = function (Vue, options) {
    Object.defineProperty(Vue.prototype, '$alertify', {
        get: function get() {
            return {
                success: function success(text) {
                    "use strict";

                    _alertifyjs2.default.success(text);
                },
                error: function error(text) {
                    "use strict";

                    _alertifyjs2.default.error(text);
                },
                warning: function warning(text) {
                    _alertifyjs2.default.warning(text);
                },
                message: function message(text) {
                    _alertifyjs2.default.message(text);
                },
                alert: function alert(text, cb) {
                    _alertifyjs2.default.alert(text, cb);
                },
                confirm: function confirm(text, ok, cancel) {
                    _alertifyjs2.default.confirm(text, ok, cancel);
                },
                prompt: function prompt(text, defaultValue, ok, cancel) {
                    _alertifyjs2.default.prompt(text, defaultValue, ok, cancel);
                }
            };
        }
    });
};

// if in browser , bind VueAlertify to window and load Alertify.css
if (window && document) {
    window.VueAlertify = VueAlertify;

    loadCSSIfNotAlreadyLoaded(document, "//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/css/alertify.min.css");
    loadCSSIfNotAlreadyLoaded(document, "//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/css/themes/default.min.css");
}

function loadCSSIfNotAlreadyLoaded(document, href) {
    var ss = document.styleSheets;
    for (var i = 0, max = ss.length; i < max; i++) {
        if (ss[i].href == href) return;
    }
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;

    document.getElementsByTagName("head")[0].appendChild(link);
}

exports.default = VueAlertify;