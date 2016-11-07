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

	module.exports = __webpack_require__(174);


/***/ },

/***/ 52:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/vue-popper");

/***/ },

/***/ 117:
/***/ function(module, exports) {

	var bindEvent = (function() {
	  if(document.addEventListener) {
	    return function(element, event, handler) {
	      if (element && event && handler) {
	        element.addEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function(element, event, handler) {
	      if (element && event && handler) {
	        element.attachEvent('on' + event, handler);
	      }
	    };
	  }
	})();

	var unbindEvent = (function() {
	  if(document.removeEventListener) {
	    return function(element, event, handler) {
	      if (element && event) {
	        element.removeEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function(element, event, handler) {
	      if (element && event) {
	        element.detachEvent('on' + event, handler);
	      }
	    };
	  }
	})();

	var bindOnce = function(el, event, fn) {
	  var listener = function() {
	    if (fn) {
	      fn.apply(this, arguments);
	    }
	    unbindEvent(el, event, listener);
	  };
	  bindEvent(el, event, listener);
	};

	module.exports = {
	  on: bindEvent,
	  off: unbindEvent,
	  once: bindOnce
	};

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	var Popover = __webpack_require__(175);
	var directive = __webpack_require__(178).default;
	var Vue = __webpack_require__(52);

	Vue.directive('popover', directive);

	/* istanbul ignore next */
	Popover.install = function (Vue) {
	  Vue.directive('popover', directive);
	  Vue.component(Popover.name, Popover);
	};
	Popover.directive = directive;

	module.exports = Popover;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(176)

	/* template */
	var __vue_template__ = __webpack_require__(177)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _vuePopper = __webpack_require__(55);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	var _event = __webpack_require__(117);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	  name: 'el-popover',

	  mixins: [_vuePopper2.default],

	  props: {
	    trigger: {
	      type: String,
	      default: 'click',
	      validator: function validator(value) {
	        return ['click', 'focus', 'hover'].indexOf(value) > -1;
	      }
	    },
	    title: String,
	    content: String,
	    reference: {},
	    popperClass: String,
	    width: {},
	    visibleArrow: {
	      default: true
	    },
	    transition: {
	      type: String,
	      default: 'fade-in-linear'
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    var reference = this.reference || this.$refs.reference;
	    var popper = this.popper || this.$refs.popper;

	    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
	      reference = this.referenceElm = this.$slots.reference[0].elm;
	    }
	    if (this.trigger === 'click') {
	      (0, _event.on)(reference, 'click', function () {
	        _this.showPopper = !_this.showPopper;
	      });
	      (0, _event.on)(document, 'click', function (e) {
	        if (!_this.$el || !reference || _this.$el.contains(e.target) || reference.contains(e.target) || !popper || popper.contains(e.target)) return;
	        _this.showPopper = false;
	      });
	    } else if (this.trigger === 'hover') {
	      (0, _event.on)(reference, 'mouseenter', this.handleMouseEnter);
	      (0, _event.on)(popper, 'mouseenter', this.handleMouseEnter);
	      (0, _event.on)(reference, 'mouseleave', this.handleMouseLeave);
	      (0, _event.on)(popper, 'mouseleave', this.handleMouseLeave);
	    } else {
	      var found = false;

	      if ([].slice.call(reference.children).length) {
	        var children = reference.childNodes;
	        var len = children.length;
	        for (var i = 0; i < len; i++) {
	          if (children[i].nodeName === 'INPUT' || children[i].nodeName === 'TEXTAREA') {
	            (0, _event.on)(children[i], 'focus', function () {
	              _this.showPopper = true;
	            });
	            (0, _event.on)(children[i], 'blur', function () {
	              _this.showPopper = false;
	            });
	            found = true;
	            break;
	          }
	        }
	      }
	      if (found) return;
	      if (reference.nodeName === 'INPUT' || reference.nodeName === 'TEXTAREA') {
	        (0, _event.on)(reference, 'focus', function () {
	          _this.showPopper = true;
	        });
	        (0, _event.on)(reference, 'blur', function () {
	          _this.showPopper = false;
	        });
	      } else {
	        (0, _event.on)(reference, 'mousedown', function () {
	          _this.showPopper = true;
	        });
	        (0, _event.on)(reference, 'mouseup', function () {
	          _this.showPopper = false;
	        });
	      }
	    }
	  },


	  methods: {
	    handleMouseEnter: function handleMouseEnter() {
	      this.showPopper = true;
	      clearTimeout(this._timer);
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      var _this2 = this;

	      this._timer = setTimeout(function () {
	        _this2.showPopper = false;
	      }, 200);
	    }
	  },

	  destroyed: function destroyed() {
	    var reference = this.reference;

	    (0, _event.off)(reference, 'mouseup');
	    (0, _event.off)(reference, 'mousedown');
	    (0, _event.off)(reference, 'focus');
	    (0, _event.off)(reference, 'blur');
	    (0, _event.off)(reference, 'mouseleave');
	    (0, _event.off)(reference, 'mouseenter');
	  }
	};

/***/ },

/***/ 177:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('span', [_h('transition', {
	    attrs: {
	      "name": transition
	    },
	    on: {
	      "after-leave": doDestroy
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (showPopper),
	      expression: "showPopper"
	    }],
	    ref: "popper",
	    staticClass: "el-popover",
	    class: [popperClass],
	    style: ({
	      width: width + 'px'
	    })
	  }, [(title) ? _h('div', {
	    staticClass: "el-popover__title",
	    domProps: {
	      "textContent": _s(title)
	    }
	  }) : _e(), _t("default", [_s(content)])])]), _t("reference")])
	}},staticRenderFns: []}

/***/ },

/***/ 178:
/***/ function(module, exports) {

	exports.__esModule = true;
	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    vnode.context.$refs[binding.arg].$refs.reference = el;
	  }
	};

/***/ }

/******/ });