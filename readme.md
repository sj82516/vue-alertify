# Purpose

This is the Vue@2.x plugin wrapped functions of [Alertifyjs](https://github.com/MohammadYounes/AlertifyJS) which is maintained by MohammadYounes
AlertifyJS provides beautiful popup alert / confirm / prompt / messaging views, so you can simply call the function and no need to handle views anymore.

Every method is just a wrapper and return alertify.js function.  
So you can use chain method like [alertify.prompt('Input (text):').set('type', 'text'); ](https://alertifyjs.com/prompt/type.html).  
Please check `promptWithTypeColor` methods.

# Installation

```
npm install vue-alertify
```

vue-alertify would import the stylesheet of Alertify automatically, so you don't need to import by yourself.

# Demo

[jsfiddle](https://jsfiddle.net/sj82516/vv9v9crt/)

# How to use

```javascript
import Vue from 'vue';
import VueAlertify from 'vue-alertify';

Vue.use(VueAlertify);

var vm = new Vue({
  el: '#main',
  methods: {
    success: function() {
      this.$alertify.success('success');
    },
    alert: function() {
      this.$alertify.alert('This is alert', () =>
        this.$alertify.warning('alert is closed')
      );
    },
    alertWithTitle: function() {
      this.$alertify.alert('alert title', 'This is alert', () =>
        this.$alertify.warning('alert is closed')
      );
    },
    confirm: function() {
      this.$alertify.confirm(
        'This is comfirm',
        () => this.$alertify.success('ok'),
        () => this.$alertify.error('cancel')
      );
    },
    confirmWithTitle: function() {
      this.$alertify.confirm(
        'confirm title',
        'This is comfirm',
        () => this.$alertify.success('ok'),
        () => this.$alertify.error('cancel')
      );
    },
    prompt: function() {
      this.$alertify.prompt(
        'This is prompt',
        'default value',
        (evt, value) => this.$alertify.success('ok: ' + value),
        () => this.$alertify.error('cancel')
      );
    },
    promptWithTitle: function() {
      this.$alertify.promptWithTitle(
        'prompt title',
        'This is prompt',
        'default value',
        (evt, value) => this.$alertify.success('ok: ' + value),
        () => this.$alertify.error('cancel')
      );
    },
    promptWithTypeColor: function() {
      this.$alertify
        .promptWithTitle(
          'prompt title',
          'This is prompt',
          'default value',
          (evt, value) => this.$alertify.success('ok: ' + value),
          () => this.$alertify.error('cancel')
        )
        .set('type', 'color');
    },
  },
  mounted: function() {
    setTimeout(() => {
      this.$alertify.success('Hell Alertify');
    }, 500);
  },
});
```

# Default options

The defaults of alertify can be changed via the `options` parameter of the `use` statement.

```javascript
Vue.use(VueAlertify, {
  // dialogs defaults
  autoReset: true,
  basic: false,
  closable: true,
  closableByDimmer: true,
  frameless: false,
  maintainFocus: true, // <== global default not per instance, applies to all dialogs
  maximizable: true,
  modal: true,
  movable: true,
  moveBounded: false,
  overflow: true,
  padding: true,
  pinnable: true,
  pinned: true,
  preventBodyShift: false, // <== global default not per instance, applies to all dialogs
  resizable: true,
  startMaximized: false,
  transition: 'pulse',

  // notifier defaults
  notifier: {
    // auto-dismiss wait time (in seconds)
    delay: 5,
    // default position
    position: 'top-right',
    // adds a close button to notifier messages
    closeButton: false,
  },

  // language resources
  glossary: {
    // dialogs default title
    title: 'AlertifyJS',
    // ok button text
    ok: 'OK',
    // cancel button text
    cancel: 'Cancel',
  },

  // theme settings
  theme: {
    // class name attached to prompt dialog input textbox.
    input: 'ajs-input',
    // class name attached to ok button
    ok: 'ajs-ok',
    // class name attached to cancel button
    cancel: 'ajs-cancel',
  },
});
```

Other usage please checkout [Alertifyjs documentation](http://alertifyjs.com/guide.html)

# Contributors

Thanks [Jonathan Andersson](https://github.com/ja1984) for adding methods with title setting.
Thanks [simonvomeyser](https://github.com/simonvomeyser) for adding Alertifyjs default override.

# Resource

1. Alertifyjs: https://github.com/MohammadYounes/AlertifyJS
2. How to build commonjs/es/UMD module: http://dev.topheman.com/package-a-module-for-npm-in-commonjs-es2015-umd-with-babel-and-rollup/
3. Load Css by js: https://stackoverflow.com/questions/4724606/how-to-use-javascript-to-check-and-load-css-if-not-loaded
