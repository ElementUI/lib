module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(88);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	/* globals __VUE_SSR_CONTEXT__ */

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  injectStyles,
	  scopeId,
	  moduleIdentifier /* server only */
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  var hook
	  if (moduleIdentifier) { // server build
	    hook = function (context) {
	      // 2.3 injection
	      context = context || (this.$vnode && this.$vnode.ssrContext)
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
	    hook = injectStyles
	  }

	  if (hook) {
	    // inject component registration as beforeCreate hook
	    var existing = options.beforeCreate
	    options.beforeCreate = existing
	      ? [].concat(existing, hook)
	      : [hook]
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ },

/***/ 21:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/util");

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _collapseItem = __webpack_require__(89);

	var _collapseItem2 = _interopRequireDefault(_collapseItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_collapseItem2.default.install = function (Vue) {
	  Vue.component(_collapseItem2.default.name, _collapseItem2.default);
	};

	exports.default = _collapseItem2.default;

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(90),
	  /* template */
	  __webpack_require__(92),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _collapseTransition = __webpack_require__(91);

	var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

	var _emitter = __webpack_require__(18);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _util = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCollapseItem',

	  componentName: 'ElCollapseItem',

	  mixins: [_emitter2.default],

	  components: { ElCollapseTransition: _collapseTransition2.default },

	  data: function data() {
	    return {
	      contentWrapStyle: {
	        height: 'auto',
	        display: 'block'
	      },
	      contentHeight: 0,
	      focusing: false
	    };
	  },


	  props: {
	    title: String,
	    name: {
	      type: [String, Number],
	      default: function _default() {
	        return this._uid;
	      }
	    }
	  },

	  computed: {
	    isActive: function isActive() {
	      return this.$parent.activeNames.indexOf(this.name) > -1;
	    },
	    id: function id() {
	      return (0, _util.generateId)();
	    }
	  },

	  watch: {
	    'isActive': function isActive(value) {}
	  },

	  methods: {
	    handleHeaderClick: function handleHeaderClick() {
	      this.dispatch('ElCollapse', 'item-click', this);
	      this.focusing = false;
	    },
	    handleEnterClick: function handleEnterClick() {
	      this.dispatch('ElCollapse', 'item-click', this);
	    }
	  },

	  mounted: function mounted() {}
	}; //
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

/***/ },

/***/ 91:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/transitions/collapse-transition");

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-collapse-item",
	    class: {
	      'is-active': _vm.isActive
	    }
	  }, [_c('div', {
	    attrs: {
	      "role": "tab",
	      "aria-expanded": _vm.isActive,
	      "aria-controls": ("el-collapse-content-" + _vm.id),
	      "aria-describedby": ("el-collapse-content-" + _vm.id)
	    }
	  }, [_c('div', {
	    staticClass: "el-collapse-item__header",
	    class: {
	      'focusing': _vm.focusing
	    },
	    attrs: {
	      "role": "button",
	      "id": ("el-collapse-head-" + _vm.id),
	      "tabindex": "0"
	    },
	    on: {
	      "click": _vm.handleHeaderClick,
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        $event.stopPropagation();
	        _vm.handleEnterClick($event)
	      },
	      "focus": function($event) {
	        _vm.focusing = true
	      },
	      "blur": function($event) {
	        _vm.focusing = false
	      }
	    }
	  }, [_c('i', {
	    staticClass: "el-collapse-item__arrow el-icon-arrow-right"
	  }), _vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2)]), _c('el-collapse-transition', [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isActive),
	      expression: "isActive"
	    }],
	    staticClass: "el-collapse-item__wrap",
	    attrs: {
	      "role": "tabpanel",
	      "aria-hidden": !_vm.isActive,
	      "aria-labelledby": ("el-collapse-head-" + _vm.id),
	      "id": ("el-collapse-content-" + _vm.id)
	    }
	  }, [_c('div', {
	    staticClass: "el-collapse-item__content"
	  }, [_vm._t("default")], 2)])])], 1)
	},staticRenderFns: []}

/***/ }

/******/ });