import Alertify from "alertifyjs";

var VueAlertify = {};

VueAlertify.install = function (Vue, options) {
    Object.defineProperty(Vue.prototype, '$alertify', {
        get: function get() {
            return {
                success: function success(text) {
                    "use strict";

                    Alertify.success(text);
                },
                error: function error(text) {
                    "use strict";

                    Alertify.error(text);
                },
                warning: function warning(text) {
                    Alertify.warning(text);
                },
                message: function message(text) {
                    Alertify.message(text);
                },
                alert: function alert(text, cb) {
                    Alertify.alert(text, cb);
                },
                alertWithTitle: function alertWithTitle(title, text, cb) {
                    Alertify.alert(title, text, cb);
                },
                confirm: function confirm(text, ok, cancel) {
                    Alertify.confirm(text, ok, cancel);
                },
                confirmWithTitle: function confirmWithTitle(title, text, ok, cancel) {
                    Alertify.confirm(title, text, ok, cancel);
                },
                prompt: function prompt(text, defaultValue, ok, cancel) {
                    Alertify.prompt(text, defaultValue, ok, cancel);
                },
                promptWithTitle: function promptWithTitle(title, text, defaultValue, ok, cancel) {
                    Alertify.prompt(title, text, defaultValue, ok, cancel);
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

export default VueAlertify;