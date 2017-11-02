# Purpose 
This is the Vue@2.x plugin wrapped functions of [Alertifyjs](https://github.com/MohammadYounes/AlertifyJS) which is maintained by MohammadYounes 
AlertifyJS provides beautiful popup alert / confirm / prompt / messaging views, so you can simply call the function and no need to handle views anymore.  

# Installation
```
npm install vue-alertify
```
vue-alertify would import the stylesheet of Alertify automatically, so you don't need to import by yourself.

# Demo  
[jsfiddle](https://jsfiddle.net/sj82516/vv9v9crt/)

# How to use
```javascript
import Vue from "vue"
import VueAlertify from "vue-alertify"

Vue.use(VueAlertify)

var vm = new Vue({
  el: "#main",
  methods:{
  	success:function(){
    	this.$alertify.success("success")
    },
    alert:function(){
    	this.$alertify.alert("This is alert", () =>
        this.$alertify.warning("alert is closed"))
    },
    confirm:function(){
    	this.$alertify.confirm("This is comfirm", ()=>
        	this.$alertify.success("ok")
        ,() =>this.$alertify.error("cancel")
        )
    },
    prompt:function(){
    	this.$alertify.prompt("This is prompt", "default value", (evt, value)=>
        	this.$alertify.success("ok: " + value)
        , () => this.$alertify.error("cancel")
        )
    },
  },
  mounted: function(){
  	setTimeout(()=>{
    	this.$alertify.success("Hell Alertify")
    }, 500)
  }
})
```
Other usage please checkout [Alertifyjs documentation](http://alertifyjs.com/guide.html)

# Resource
1. Alertifyjs: https://github.com/MohammadYounes/AlertifyJS
2. How to build commonjs/es/UMD module: http://dev.topheman.com/package-a-module-for-npm-in-commonjs-es2015-umd-with-babel-and-rollup/
3. Load Css by js: https://stackoverflow.com/questions/4724606/how-to-use-javascript-to-check-and-load-css-if-not-loaded