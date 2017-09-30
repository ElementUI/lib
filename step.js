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

	module.exports = __webpack_require__(306);


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

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _step = __webpack_require__(307);

	var _step2 = _interopRequireDefault(_step);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_step2.default.install = function (Vue) {
	  Vue.component(_step2.default.name, _step2.default);
	};

	exports.default = _step2.default;

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(308),
	  /* template */
	  __webpack_require__(309),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 308:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
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

	exports.default = {
	  name: 'ElStep',

	  props: {
	    title: String,
	    icon: String,
	    description: String,
	    status: String
	  },

	  data: function data() {
	    return {
	      index: -1,
	      lineStyle: {},
	      internalStatus: ''
	    };
	  },
	  beforeCreate: function beforeCreate() {
	    this.$parent.steps.push(this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    var steps = this.$parent.steps;
	    var index = steps.indexOf(this);
	    if (index >= 0) {
	      steps.splice(index, 1);
	    }
	  },


	  computed: {
	    currentStatus: function currentStatus() {
	      return this.status || this.internalStatus;
	    },
	    prevStatus: function prevStatus() {
	      var prevStep = this.$parent.steps[this.index - 1];
	      return prevStep ? prevStep.currentStatus : 'wait';
	    },
	    isCenter: function isCenter() {
	      return this.$parent.alignCenter;
	    },
	    isVertical: function isVertical() {
	      return this.$parent.direction === 'vertical';
	    },
	    isSimple: function isSimple() {
	      return this.$parent.simple;
	    },
	    isLast: function isLast() {
	      var parent = this.$parent;
	      return parent.steps[parent.steps.length - 1] === this;
	    },
	    stepsCount: function stepsCount() {
	      return this.$parent.steps.length;
	    },
	    space: function space() {
	      var isSimple = this.isSimple,
	          space = this.$parent.space;

	      return isSimple ? '' : space;
	    },

	    style: function style() {
	      var parent = this.$parent;
	      var len = parent.steps.length;

	      var space = typeof this.space === 'number' ? this.space + 'px' : this.space ? this.space : 100 / (len - 1) + '%';

	      return { flexBasis: space };
	    }
	  },

	  methods: {
	    updateStatus: function updateStatus(val) {
	      var prevChild = this.$parent.$children[this.index - 1];

	      if (val > this.index) {
	        this.internalStatus = this.$parent.finishStatus;
	      } else if (val === this.index && this.prevStatus !== 'error') {
	        this.internalStatus = this.$parent.processStatus;
	      } else {
	        this.internalStatus = 'wait';
	      }

	      if (prevChild) prevChild.calcProgress(this.internalStatus);
	    },
	    calcProgress: function calcProgress(status) {
	      var step = 100;
	      var style = {};

	      style.transitionDelay = 150 * this.index + 'ms';
	      if (status === this.$parent.processStatus) {
	        step = this.currentStatus !== 'error' ? 0 : 0;
	      } else if (status === 'wait') {
	        step = 0;
	        style.transitionDelay = -150 * this.index + 'ms';
	      }

	      style.borderWidth = step ? '1px' : 0;
	      this.$parent.direction === 'vertical' ? style.height = step + '%' : style.width = step + '%';

	      this.lineStyle = style;
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    var unwatch = this.$watch('index', function (val) {
	      _this.$watch('$parent.active', _this.updateStatus, { immediate: true });
	      unwatch();
	    });
	  }
	};

/***/ },

/***/ 309:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-step",
	    class: [!_vm.isSimple && ("is-" + (_vm.$parent.direction)),
	      _vm.isSimple && 'is-simple',
	      _vm.isLast && !_vm.space && !_vm.isCenter && 'is-flex',
	      _vm.isCenter && !_vm.isVertical && !_vm.isSimple && 'is-center'
	    ],
	    style: ([_vm.style, _vm.isLast ? {
	      maxWidth: 100 / _vm.stepsCount + '%'
	    } : {
	      marginRight: -_vm.$parent.stepOffset + 'px'
	    }])
	  }, [_c('div', {
	    staticClass: "el-step__head",
	    class: ("is-" + _vm.currentStatus)
	  }, [_c('div', {
	    staticClass: "el-step__line",
	    style: (_vm.isLast ? '' : {
	      marginRight: _vm.$parent.stepOffset + 'px'
	    })
	  }, [_c('i', {
	    staticClass: "el-step__line-inner",
	    style: (_vm.lineStyle)
	  })]), _c('div', {
	    staticClass: "el-step__icon",
	    class: ("is-" + (_vm.icon ? 'icon' : 'text'))
	  }, [(_vm.currentStatus !== 'success' && _vm.currentStatus !== 'error') ? _vm._t("icon", [(_vm.icon) ? _c('i', {
	    staticClass: "el-step__icon-inner",
	    class: [_vm.icon]
	  }) : _vm._e(), (!_vm.icon && !_vm.isSimple) ? _c('div', {
	    staticClass: "el-step__icon-inner"
	  }, [_vm._v(_vm._s(_vm.index + 1))]) : _vm._e()]) : _c('i', {
	    staticClass: "el-step__icon-inner is-status",
	    class: ['el-icon-' + (_vm.currentStatus === 'success' ? 'check' : 'close')]
	  })], 2)]), _c('div', {
	    staticClass: "el-step__main"
	  }, [_c('div', {
	    ref: "title",
	    staticClass: "el-step__title",
	    class: ['is-' + _vm.currentStatus]
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), (_vm.isSimple) ? _c('div', {
	    staticClass: "el-step__arrow"
	  }) : _c('div', {
	    staticClass: "el-step__description",
	    class: ['is-' + _vm.currentStatus]
	  }, [_vm._t("description", [_vm._v(_vm._s(_vm.description))])], 2)])])
	},staticRenderFns: []}

/***/ }

/******/ });