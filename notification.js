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

	module.exports = __webpack_require__(232);


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

/***/ 60:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 149:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/popup");

/***/ },

/***/ 223:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/vdom");

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(233);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _main2.default;

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(60);

	var _vue2 = _interopRequireDefault(_vue);

	var _popup = __webpack_require__(149);

	var _vdom = __webpack_require__(223);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotificationConstructor = _vue2.default.extend(__webpack_require__(234));

	var instance = void 0;
	var instances = [];
	var seed = 1;

	var Notification = function Notification(options) {
	  if (_vue2.default.prototype.$isServer) return;
	  options = options || {};
	  var userOnClose = options.onClose;
	  var id = 'notification_' + seed++;
	  var position = options.position || 'top-right';

	  options.onClose = function () {
	    Notification.close(id, userOnClose);
	  };

	  instance = new NotificationConstructor({
	    data: options
	  });

	  if ((0, _vdom.isVNode)(options.message)) {
	    instance.$slots.default = [options.message];
	    options.message = '';
	  }
	  instance.id = id;
	  instance.vm = instance.$mount();
	  document.body.appendChild(instance.vm.$el);
	  instance.vm.visible = true;
	  instance.dom = instance.vm.$el;
	  instance.dom.style.zIndex = _popup.PopupManager.nextZIndex();

	  var verticalOffset = options.offset || 0;
	  instances.filter(function (item) {
	    return item.position === position;
	  }).forEach(function (item) {
	    verticalOffset += item.$el.offsetHeight + 16;
	  });
	  verticalOffset += 16;
	  instance.verticalOffset = verticalOffset;
	  instances.push(instance);
	  return instance.vm;
	};

	['success', 'warning', 'info', 'error'].forEach(function (type) {
	  Notification[type] = function (options) {
	    if (typeof options === 'string' || (0, _vdom.isVNode)(options)) {
	      options = {
	        message: options
	      };
	    }
	    options.type = type;
	    return Notification(options);
	  };
	});

	Notification.close = function (id, userOnClose) {
	  var index = -1;
	  var len = instances.length;
	  var instance = instances.filter(function (instance, i) {
	    if (instance.id === id) {
	      index = i;
	      return true;
	    }
	    return false;
	  })[0];
	  if (!instance) return;

	  if (typeof userOnClose === 'function') {
	    userOnClose(instance);
	  }
	  instances.splice(index, 1);

	  if (len <= 1) return;
	  var position = instance.position;
	  var removedHeight = instance.dom.offsetHeight;
	  for (var i = index; i < len - 1; i++) {
	    if (instances[i].position === position) {
	      instances[i].dom.style[instance.verticalProperty] = parseInt(instances[i].dom.style[instance.verticalProperty], 10) - removedHeight - 16 + 'px';
	    }
	  }
	};

	exports.default = Notification;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(235),
	  /* template */
	  __webpack_require__(236),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 235:
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

	var typeMap = {
	  success: 'circle-check',
	  info: 'information',
	  warning: 'warning',
	  error: 'circle-cross'
	};

	exports.default = {
	  data: function data() {
	    return {
	      visible: false,
	      title: '',
	      message: '',
	      duration: 4500,
	      type: '',
	      showClose: true,
	      customClass: '',
	      iconClass: '',
	      onClose: null,
	      onClick: null,
	      closed: false,
	      verticalOffset: 0,
	      timer: null,
	      dangerouslyUseHTMLString: false,
	      position: 'top-right'
	    };
	  },


	  computed: {
	    typeClass: function typeClass() {
	      return this.type && typeMap[this.type] ? 'el-icon-' + typeMap[this.type] : '';
	    },
	    horizontalClass: function horizontalClass() {
	      return this.position.indexOf('right') > -1 ? 'right' : 'left';
	    },
	    verticalProperty: function verticalProperty() {
	      return (/^top-/.test(this.position) ? 'top' : 'bottom'
	      );
	    },
	    positionStyle: function positionStyle() {
	      var _ref;

	      return _ref = {}, _ref[this.verticalProperty] = this.verticalOffset + 'px', _ref;
	    }
	  },

	  watch: {
	    closed: function closed(newVal) {
	      if (newVal) {
	        this.visible = false;
	        this.$el.addEventListener('transitionend', this.destroyElement);
	      }
	    }
	  },

	  methods: {
	    destroyElement: function destroyElement() {
	      this.$el.removeEventListener('transitionend', this.destroyElement);
	      this.$destroy(true);
	      this.$el.parentNode.removeChild(this.$el);
	    },
	    click: function click() {
	      if (typeof this.onClick === 'function') {
	        this.onClick();
	      }
	    },
	    close: function close() {
	      this.closed = true;
	      if (typeof this.onClose === 'function') {
	        this.onClose();
	      }
	    },
	    clearTimer: function clearTimer() {
	      clearTimeout(this.timer);
	    },
	    startTimer: function startTimer() {
	      var _this = this;

	      if (this.duration > 0) {
	        this.timer = setTimeout(function () {
	          if (!_this.closed) {
	            _this.close();
	          }
	        }, this.duration);
	      }
	    }
	  },

	  mounted: function mounted() {
	    var _this2 = this;

	    if (this.duration > 0) {
	      this.timer = setTimeout(function () {
	        if (!_this2.closed) {
	          _this2.close();
	        }
	      }, this.duration);
	    }
	  }
	};

/***/ },

/***/ 236:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "el-notification-fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    class: ['el-notification', _vm.customClass, _vm.horizontalClass],
	    style: (_vm.positionStyle),
	    on: {
	      "mouseenter": function($event) {
	        _vm.clearTimer()
	      },
	      "mouseleave": function($event) {
	        _vm.startTimer()
	      },
	      "click": _vm.click
	    }
	  }, [(_vm.type || _vm.iconClass) ? _c('i', {
	    staticClass: "el-notification__icon",
	    class: [_vm.typeClass, _vm.iconClass]
	  }) : _vm._e(), _c('div', {
	    staticClass: "el-notification__group",
	    class: {
	      'is-with-icon': _vm.typeClass || _vm.iconClass
	    }
	  }, [_c('h2', {
	    staticClass: "el-notification__title",
	    domProps: {
	      "textContent": _vm._s(_vm.title)
	    }
	  }), _c('div', {
	    staticClass: "el-notification__content"
	  }, [_vm._t("default", [(!_vm.dangerouslyUseHTMLString) ? _c('p', [_vm._v(_vm._s(_vm.message))]) : _c('p', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.message)
	    }
	  })])], 2), (_vm.showClose) ? _c('div', {
	    staticClass: "el-notification__closeBtn el-icon-close",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.close($event)
	      }
	    }
	  }) : _vm._e()])])])
	},staticRenderFns: []}

/***/ }

/******/ });