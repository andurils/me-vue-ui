(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["me-vue"] = factory();
	else
		root["me-vue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1a0f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("803d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "803d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8e09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_picker_vue_vue_type_style_index_0_id_9abc818c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ef25");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_picker_vue_vue_type_style_index_0_id_9abc818c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_picker_vue_vue_type_style_index_0_id_9abc818c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_color_picker_vue_vue_type_style_index_0_id_9abc818c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ef25":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15d32bd8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/test/src/test.vue?vue&type=template&id=10d0dcde&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"zm-test",style:({backgroundColor: _vm.bgColor})})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/test/src/test.vue?vue&type=template&id=10d0dcde&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/test/src/test.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var testvue_type_script_lang_js_ = ({
    name: 'ZmTest',
    props: {
        bgColor: {
            type: String,
            default: "#ccc"
        }
    }
});

// CONCATENATED MODULE: ./packages/test/src/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/test/src/test.vue?vue&type=style&index=0&lang=scss&
var testvue_type_style_index_0_lang_scss_ = __webpack_require__("1a0f");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/test/src/test.vue






/* normalize component */

var component = normalizeComponent(
  src_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var test = (component.exports);
// CONCATENATED MODULE: ./packages/test/index.js


// 支持按需引用
test.install = function (Vue) {
  Vue.component(test.name, test);
};

/* harmony default export */ var packages_test = (test);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15d32bd8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/color-picker.vue?vue&type=template&id=9abc818c&scoped=true&lang=html&
var color_pickervue_type_template_id_9abc818c_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"colorPicker",staticClass:"m-colorPicker",on:{"click":function (event) { event.stopPropagation() }}},[_c('div',{staticClass:"colorBtn",class:{ disabled: _vm.disabled },style:(("background-color: " + _vm.showColor)),on:{"click":function($event){_vm.openStatus = !_vm.disabled}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.html5Color),expression:"html5Color"}],ref:"html5Color",attrs:{"type":"color"},domProps:{"value":(_vm.html5Color)},on:{"change":function($event){return _vm.updataValue(_vm.html5Color)},"input":function($event){if($event.target.composing){ return; }_vm.html5Color=$event.target.value}}}),_c('div',{staticClass:"box",class:{ open: _vm.openStatus }},[_c('div',{staticClass:"hd"},[_c('div',{staticClass:"colorView",style:(("background-color: " + _vm.showPanelColor))}),_c('div',{staticClass:"defaultColor",on:{"click":_vm.handleDefaultColor,"mouseover":function($event){_vm.hoveColor = _vm.defaultColor},"mouseout":function($event){_vm.hoveColor = null}}},[_vm._v("默认颜色")])]),_c('div',{staticClass:"bd"},[_c('h3',[_vm._v("主题颜色")]),_c('ul',{staticClass:"tColor"},_vm._l((_vm.tColor),function(color,index){return _c('li',{key:index,style:({ backgroundColor: color }),on:{"mouseover":function($event){_vm.hoveColor = color},"mouseout":function($event){_vm.hoveColor = null},"click":function($event){return _vm.updataValue(color)}}})}),0),_c('ul',{staticClass:"bColor"},_vm._l((_vm.colorPanel),function(item,index){return _c('li',{key:index},[_c('ul',_vm._l((item),function(color,cindex){return _c('li',{key:cindex,style:({ backgroundColor: color }),on:{"mouseover":function($event){_vm.hoveColor = color},"mouseout":function($event){_vm.hoveColor = null},"click":function($event){return _vm.updataValue(color)}}})}),0)])}),0),_c('h3',[_vm._v("标准颜色")]),_c('ul',{staticClass:"tColor"},_vm._l((_vm.bColor),function(color,index){return _c('li',{key:index,style:({ backgroundColor: color }),on:{"mouseover":function($event){_vm.hoveColor = color},"mouseout":function($event){_vm.hoveColor = null},"click":function($event){return _vm.updataValue(color)}}})}),0),_c('h3',{on:{"click":_vm.triggerHtml5Color}},[_vm._v("更多颜色...")])])])])}
var color_pickervue_type_template_id_9abc818c_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./packages/color-picker/src/color-picker.vue?vue&type=template&id=9abc818c&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/color-picker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var color_pickervue_type_script_lang_js_ = ({
  name: "colorPicker",
  props: {
    // 当前颜色值
    value: {
      type: String,
      required: true
    },
    // 默认颜色
    defaultColor: {
      type: String,
      default: "#000000"
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 面板打开状态
      openStatus: false,
      // 鼠标经过的颜色块
      hoveColor: null,
      // 主题颜色
      tColor: [
        "#000000",
        "#ffffff",
        "#eeece1",
        "#1e497b",
        "#4e81bb",
        "#e2534d",
        "#9aba60",
        "#8165a0",
        "#47acc5",
        "#f9974c"
      ],
      // 颜色面板
      colorConfig: [
        ["#7f7f7f", "#f2f2f2"],
        ["#0d0d0d", "#808080"],
        ["#1c1a10", "#ddd8c3"],
        ["#0e243d", "#c6d9f0"],
        ["#233f5e", "#dae5f0"],
        ["#632623", "#f2dbdb"],
        ["#4d602c", "#eaf1de"],
        ["#3f3150", "#e6e0ec"],
        ["#1e5867", "#d9eef3"],
        ["#99490f", "#fee9da"]
      ],
      // 标准颜色
      bColor: [
        "#c21401",
        "#ff1e02",
        "#ffc12a",
        "#ffff3a",
        "#90cf5b",
        "#00af57",
        "#00afee",
        "#0071be",
        "#00215f",
        "#72349d"
      ],
      html5Color: this.value
    };
  },
  computed: {
    // 显示面板颜色
    showPanelColor() {
      if (this.hoveColor) {
        return this.hoveColor;
      } else {
        return this.showColor;
      }
    },
    // 显示颜色
    showColor() {
      if (this.value) {
        return this.value;
      } else {
        return this.defaultColor;
      }
    },
    // 颜色面板
    colorPanel() {
      let colorArr = [];
      for (let color of this.colorConfig) {
        colorArr.push(this.gradient(color[1], color[0], 5));
      }
      return colorArr;
    }
  },
  methods: {
    triggerHtml5Color() {
      this.$refs.html5Color.click();
    },
    // 更新组件的值 value
    updataValue(value) {
      this.$emit("input", value);
      this.$emit("change", value);
      this.openStatus = false;
    },
    // 设置默认颜色
    handleDefaultColor() {
      this.updataValue(this.defaultColor);
    },
    // 格式化 hex 颜色值
    parseColor(hexStr) {
      if (hexStr.length === 4) {
        hexStr =
          "#" +
          hexStr[1] +
          hexStr[1] +
          hexStr[2] +
          hexStr[2] +
          hexStr[3] +
          hexStr[3];
      } else {
        return hexStr;
      }
    },
    // RGB 颜色 转 HEX 颜色
    rgbToHex(r, g, b) {
      let hex = ((r << 16) | (g << 8) | b).toString(16);
      return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
    },
    // HEX 转 RGB 颜色
    hexToRgb(hex) {
      hex = this.parseColor(hex);
      let rgb = [];
      for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
      }
      return rgb;
    },
    // 计算渐变过渡颜色
    gradient(startColor, endColor, step) {
      // 讲 hex 转换为 rgb
      let sColor = this.hexToRgb(startColor);
      let eColor = this.hexToRgb(endColor);

      // 计算R\G\B每一步的差值
      let rStep = (eColor[0] - sColor[0]) / step;
      let gStep = (eColor[1] - sColor[1]) / step;
      let bStep = (eColor[2] - sColor[2]) / step;

      let gradientColorArr = [];
      // 计算每一步的hex值
      for (let i = 0; i < step; i++) {
        gradientColorArr.push(
          this.rgbToHex(
            parseInt(rStep * i + sColor[0]),
            parseInt(gStep * i + sColor[1]),
            parseInt(bStep * i + sColor[2])
          )
        );
      }
      return gradientColorArr;
    }
  },
  mounted() {
    // 点击页面上其他地方，关闭弹窗
    document.onclick = () => {
      this.openStatus = false;
    };
  }
});

// CONCATENATED MODULE: ./packages/color-picker/src/color-picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_color_pickervue_type_script_lang_js_ = (color_pickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/color-picker/src/color-picker.vue?vue&type=style&index=0&id=9abc818c&lang=scss&scoped=true&
var color_pickervue_type_style_index_0_id_9abc818c_lang_scss_scoped_true_ = __webpack_require__("8e09");

// CONCATENATED MODULE: ./packages/color-picker/src/color-picker.vue






/* normalize component */

var color_picker_component = normalizeComponent(
  src_color_pickervue_type_script_lang_js_,
  color_pickervue_type_template_id_9abc818c_scoped_true_lang_html_render,
  color_pickervue_type_template_id_9abc818c_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "9abc818c",
  null
  
)

/* harmony default export */ var color_picker = (color_picker_component.exports);
// CONCATENATED MODULE: ./packages/color-picker/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
color_picker.install = function (Vue) {
  Vue.component(color_picker.name, color_picker)
}

// 默认导出组件
/* harmony default export */ var packages_color_picker = (color_picker);

// CONCATENATED MODULE: ./packages/index.js



// 存储组件列表
const components = [
  packages_test,
  packages_color_picker
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window.Vue !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ZmTest: packages_test,
  colorPicker: packages_color_picker
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=me-vue.umd.js.map