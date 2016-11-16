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

	module.exports = __webpack_require__(35);


/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _checkbox = __webpack_require__(36);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_checkbox2.default.install = function (Vue) {
	  Vue.component(_checkbox2.default.name, _checkbox2.default);
	};

	exports.default = _checkbox2.default;

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(37)

	/* template */
	var __vue_template__ = __webpack_require__(39)
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

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(38);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCheckbox',

	  mixins: [_emitter2.default],

	  props: {
	    value: {},
	    label: String,
	    indeterminate: Boolean,
	    disabled: Boolean,
	    checked: Boolean,
	    name: String,
	    trueLabel: [String, Number],
	    falseLabel: [String, Number]
	  },

	  computed: {
	    _value: {
	      get: function get() {
	        return !this.wrapInGroup ? this.value : this.$parent.value;
	      },
	      set: function set(newValue) {
	        if (!this.wrapInGroup) {
	          this.$emit('input', newValue);
	        } else {
	          this.$parent.$emit('input', newValue);
	        }
	      }
	    },
	    isChecked: function isChecked() {
	      var type = Object.prototype.toString.call(this._value);

	      if (type === '[object Boolean]') {
	        return this._value;
	      } else if (type === '[object Array]') {
	        return this._value.indexOf(this.label) > -1;
	      } else if (type === '[object String]' || type === '[object Number]') {
	        return this._value === this.trueLabel;
	      }
	    }
	  },

	  data: function data() {
	    return {
	      focus: false,
	      wrapInGroup: this.$parent.$options.componentName === 'ElCheckboxGroup'
	    };
	  },


	  watch: {
	    checked: {
	      immediate: true,
	      handler: function handler(value) {
	        if (value) {
	          var type = Object.prototype.toString.call(this._value);
	          if (type !== '[object Array]') {
	            this._value = this.trueLabel || true;
	          } else {
	            this._value.push(this.label);
	          }
	        }
	      }
	    }
	  },

	  methods: {
	    handleChange: function handleChange(ev) {
	      this.$emit('change', ev);
	    }
	  }
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
	//
	//
	//

/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ },

/***/ 39:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('label', {
	    staticClass: "el-checkbox"
	  }, [_vm._h('span', {
	    staticClass: "el-checkbox__input"
	  }, [_vm._h('span', {
	    staticClass: "el-checkbox__inner",
	    class: {
	      'is-disabled': _vm.disabled,
	      'is-checked': _vm.isChecked,
	      'is-indeterminate': _vm.indeterminate,
	      'is-focus': _vm.focus
	    }
	  }), (_vm.trueLabel || _vm.falseLabel) ? _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm._value),
	      expression: "_value"
	    }],
	    ref: "checkbox",
	    staticClass: "el-checkbox__original",
	    attrs: {
	      "type": "checkbox",
	      "name": _vm.name,
	      "disabled": _vm.disabled,
	      "true-value": _vm.trueLabel,
	      "false-value": _vm.falseLabel
	    },
	    domProps: {
	      "checked": Array.isArray(_vm._value) ? _vm._i(_vm._value, null) > -1 : _vm._q(_vm._value, _vm.trueLabel)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.focus = true
	      },
	      "blur": function($event) {
	        _vm.focus = false
	      },
	      "change": [function($event) {
	        var $$a = _vm._value,
	          $$el = $event.target,
	          $$c = $$el.checked ? (_vm.trueLabel) : (_vm.falseLabel);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm._value = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm._value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm._value = $$c
	        }
	      }, _vm.handleChange]
	    }
	  }) : _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm._value),
	      expression: "_value"
	    }],
	    staticClass: "el-checkbox__original",
	    attrs: {
	      "type": "checkbox",
	      "disabled": _vm.disabled,
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.label,
	      "checked": Array.isArray(_vm._value) ? _vm._i(_vm._value, _vm.label) > -1 : _vm._q(_vm._value, true)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.focus = true
	      },
	      "blur": function($event) {
	        _vm.focus = false
	      },
	      "change": [function($event) {
	        var $$a = _vm._value,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = _vm.label,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm._value = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm._value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm._value = $$c
	        }
	      }, _vm.handleChange]
	    }
	  })]), (_vm.$slots.default || _vm.label) ? _vm._h('span', {
	    staticClass: "el-checkbox__label"
	  }, [_vm._t("default"), (!_vm.$slots.default) ? [_vm._s(_vm.label)] : _vm._e()]) : _vm._e()])
	},staticRenderFns: []}

/***/ }

/******/ });