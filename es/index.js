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
                confirm: function confirm(text, ok, cancel) {
                    Alertify.confirm(text, ok, cancel);
                },
                prompt: function prompt(text, defaultValue, ok, cancel) {
                    Alertify.prompt(text, defaultValue, ok, cancel);
                }
            };
        }
    });
};

// if in browser , bind VueAlertify to window and load Alertify.css
if (window && document) {
    window.VueAlertify = VueAlertify;

    importCss(document, "//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/css/alertify.min.css");
    importCss(document, "//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/css/themes/default.min.css");
}

function importCss(document, href) {
    "use strict";

    var link = document.createElement("link");
    link.href = href;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName("head")[0].appendChild(link);
}

export default VueAlertify;