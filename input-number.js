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

	module.exports = __webpack_require__(114);


/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/input");

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	var ElInputNumber = __webpack_require__(115);

	/* istanbul ignore next */
	ElInputNumber.install = function (Vue) {
	  Vue.component(ElInputNumber.name, ElInputNumber);
	};

	module.exports = ElInputNumber;

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(116)

	/* template */
	var __vue_template__ = __webpack_require__(118)
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

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _input = __webpack_require__(8);

	var _input2 = _interopRequireDefault(_input);

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
	  name: 'ElInputNumber',
	  props: {
	    step: {
	      type: Number,
	      default: 1
	    },
	    max: {
	      type: Number,
	      default: Infinity
	    },
	    min: {
	      type: Number,
	      default: 0
	    },
	    value: {
	      default: 0
	    },
	    disabled: Boolean,
	    size: String
	  },
	  directives: {
	    repeatClick: {
	      bind: function bind(el, binding, vnode) {
	        var interval = null;
	        var startTime = void 0;

	        var handler = function handler() {
	          vnode.context[binding.expression]();
	        };

	        var clear = function clear() {
	          if (new Date() - startTime < 100) {
	            handler();
	          }
	          clearInterval(interval);
	          interval = null;
	        };

	        (0, _event.on)(el, 'mousedown', function () {
	          startTime = new Date();
	          (0, _event.once)(document, 'mouseup', clear);
	          interval = setInterval(function () {
	            handler();
	          }, 100);
	        });
	      }
	    }
	  },
	  components: {
	    ElInput: _input2.default
	  },
	  data: function data() {
	    // correct the init value
	    var value = this.value;
	    if (value < this.min) {
	      this.$emit('input', this.min);
	      value = this.min;
	    }
	    if (value > this.max) {
	      this.$emit('input', this.max);
	      value = this.max;
	    }
	    return {
	      currentValue: value,
	      inputActive: false
	    };
	  },

	  watch: {
	    value: function value(val) {
	      this.currentValue = val;
	    },
	    currentValue: function currentValue(newVal, oldVal) {
	      var value = Number(newVal);
	      if (value <= this.max && value >= this.min) {
	        this.$emit('change', value);
	        this.$emit('input', value);
	      }
	    }
	  },
	  computed: {
	    minDisabled: function minDisabled() {
	      return this.value - this.step < this.min;
	    },
	    maxDisabled: function maxDisabled() {
	      return this.value + this.step > this.max;
	    }
	  },
	  methods: {
	    accSub: function accSub(arg1, arg2) {
	      var r1, r2, m, n;
	      try {
	        r1 = arg1.toString().split('.')[1].length;
	      } catch (e) {
	        r1 = 0;
	      }
	      try {
	        r2 = arg2.toString().split('.')[1].length;
	      } catch (e) {
	        r2 = 0;
	      }
	      m = Math.pow(10, Math.max(r1, r2));
	      n = r1 >= r2 ? r1 : r2;
	      return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
	    },
	    accAdd: function accAdd(arg1, arg2) {
	      var r1, r2, m, c;
	      try {
	        r1 = arg1.toString().split('.')[1].length;
	      } catch (e) {
	        r1 = 0;
	      }
	      try {
	        r2 = arg2.toString().split('.')[1].length;
	      } catch (e) {
	        r2 = 0;
	      }
	      c = Math.abs(r1 - r2);
	      m = Math.pow(10, Math.max(r1, r2));
	      if (c > 0) {
	        var cm = Math.pow(10, c);
	        if (r1 > r2) {
	          arg1 = Number(arg1.toString().replace('.', ''));
	          arg2 = Number(arg2.toString().replace('.', '')) * cm;
	        } else {
	          arg1 = Number(arg1.toString().replace('.', '')) * cm;
	          arg2 = Number(arg2.toString().replace('.', ''));
	        }
	      } else {
	        arg1 = Number(arg1.toString().replace('.', ''));
	        arg2 = Number(arg2.toString().replace('.', ''));
	      }
	      return (arg1 + arg2) / m;
	    },
	    increase: function increase() {
	      if (this.value + this.step > this.max || this.disabled) return;
	      this.currentValue = this.accAdd(this.step, this.value);
	      if (this.maxDisabled) {
	        this.inputActive = false;
	      }
	    },
	    decrease: function decrease() {
	      if (this.value - this.step < this.min || this.disabled) return;
	      this.currentValue = this.accSub(this.value, this.step);
	      if (this.minDisabled) {
	        this.inputActive = false;
	      }
	    },
	    activeInput: function activeInput(disabled) {
	      if (!this.disabled && !disabled) {
	        this.inputActive = true;
	      }
	    },
	    inactiveInput: function inactiveInput(disabled) {
	      if (!this.disabled && !disabled) {
	        this.inputActive = false;
	      }
	    },
	    handleBlur: function handleBlur(event) {
	      var value = Number(this.currentValue);
	      if (isNaN(value) || value > this.max || value < this.min) {
	        this.currentValue = this.value;
	      } else {
	        this.currentValue = value;
	      }
	    },
	    handleInput: function handleInput(value) {
	      this.currentValue = value;
	    }
	  }
	};

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

/***/ 118:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-input-number",
	    class: [
	      size ? 'el-input-number--' + size : '', {
	        'is-disabled': disabled
	      }
	    ]
	  }, [_h('el-input', {
	    class: {
	      'is-active': inputActive
	    },
	    attrs: {
	      "disabled": disabled,
	      "size": size
	    },
	    domProps: {
	      "value": currentValue
	    },
	    on: {
	      "blur": handleBlur,
	      "input": handleInput
	    },
	    nativeOn: {
	      "keydown": [function($event) {
	        if ($event.keyCode !== 38) return;
	        increase($event)
	      }, function($event) {
	        if ($event.keyCode !== 40) return;
	        decrease($event)
	      }]
	    }
	  }), _h('span', {
	    directives: [{
	      name: "repeat-click",
	      rawName: "v-repeat-click",
	      value: (decrease),
	      expression: "decrease"
	    }],
	    staticClass: "el-input-number__decrease el-icon-minus",
	    class: {
	      'is-disabled': minDisabled
	    },
	    on: {
	      "mouseenter": function($event) {
	        activeInput(minDisabled)
	      },
	      "mouseleave": function($event) {
	        inactiveInput(minDisabled)
	      }
	    }
	  }), _h('span', {
	    directives: [{
	      name: "repeat-click",
	      rawName: "v-repeat-click",
	      value: (increase),
	      expression: "increase"
	    }],
	    staticClass: "el-input-number__increase el-icon-plus",
	    class: {
	      'is-disabled': maxDisabled
	    },
	    on: {
	      "mouseenter": function($event) {
	        activeInput(maxDisabled)
	      },
	      "mouseleave": function($event) {
	        inactiveInput(maxDisabled)
	      }
	    }
	  })])
	}},staticRenderFns: []}

/***/ }

/******/ });