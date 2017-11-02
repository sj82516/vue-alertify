import Alertify from "alertifyjs"

let VueAlertify = {}


VueAlertify.install = function (Vue, options) {
    Object.defineProperty(Vue.prototype, '$alertify', {
        get () {
            return {
                success: function (text) {
                    "use strict";
                    Alertify.success(text)
                },
                error: function (text) {
                    "use strict";
                    Alertify.error(text)
                },
                warning: function (text) {
                    Alertify.warning(text)
                },
                message: function (text) {
                    Alertify.message(text)
                },
                alert: function (text, cb) {
                    Alertify.alert(text, cb)
                },
                confirm: function (text, ok, cancel) {
                    Alertify.confirm(text, ok, cancel)
                },
                prompt: function (text, defaultValue, ok, cancel) {
                    Alertify.prompt(text, defaultValue, ok, cancel)
                }
            }
        }
    })
}

// if in browser , bind VueAlertify to window and load Alertify.css
if (window && document) {
    window.VueAlertify = VueAlertify

    loadCSSIfNotAlreadyLoaded(document, "//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/css/alertify.min.css")
    loadCSSIfNotAlreadyLoaded(document, "//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/css/themes/default.min.css")
}

function loadCSSIfNotAlreadyLoaded (document, href) {
    var ss = document.styleSheets;
    for (var i = 0, max = ss.length; i < max; i++) {
        if (ss[i].href == href)
            return;
    }
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;

    document.getElementsByTagName("head")[0].appendChild(link);
}

export default VueAlertify