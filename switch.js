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

	module.exports = __webpack_require__(237);


/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	var ElSwitch = __webpack_require__(238);

	/* istanbul ignore next */
	ElSwitch.install = function (Vue) {
	  Vue.component(ElSwitch.name, ElSwitch);
	};

	module.exports = ElSwitch;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(239)

	/* template */
	var __vue_template__ = __webpack_require__(240)
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

/***/ 239:
/***/ function(module, exports) {

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

	exports.default = {
	  name: 'el-switch',
	  props: {
	    value: {
	      type: Boolean,
	      default: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: Number,
	      default: 0
	    },
	    onIconClass: {
	      type: String,
	      default: ''
	    },
	    offIconClass: {
	      type: String,
	      default: ''
	    },
	    onText: {
	      type: String,
	      default: 'ON'
	    },
	    offText: {
	      type: String,
	      default: 'OFF'
	    },
	    onColor: {
	      type: String,
	      default: ''
	    },
	    offColor: {
	      type: String,
	      default: ''
	    },
	    name: {
	      type: String,
	      default: ''
	    }
	  },
	  data: function data() {
	    return {
	      coreWidth: this.width,
	      buttonStyle: {}
	    };
	  },

	  computed: {
	    hasText: function hasText() {
	      /* istanbul ignore next */
	      return this.onText || this.offText;
	    }
	  },
	  watch: {
	    value: function value(val) {
	      if (this.onColor || this.offColor) {
	        this.handleCoreColor();
	      }
	      this.handleButtonTransform();
	      this.$emit('change', val);
	    }
	  },
	  methods: {
	    handleMiscClick: function handleMiscClick() {
	      if (!this.disabled) {
	        this.$emit('input', !this.value);
	      }
	    },
	    handleButtonTransform: function handleButtonTransform() {
	      this.buttonStyle.transform = this.value ? 'translate(' + (this.coreWidth - 20) + 'px, 2px)' : 'translate(2px, 2px)';
	    },
	    handleCoreColor: function handleCoreColor() {
	      this.$refs.core.style.borderColor = this.value ? this.onColor : this.offColor;
	      this.$refs.core.style.backgroundColor = this.value ? this.onColor : this.offColor;
	    }
	  },
	  mounted: function mounted() {
	    /* istanbul ignore if */
	    if (this.width === 0) {
	      this.coreWidth = this.hasText ? 58 : 46;
	    }
	    this.handleButtonTransform();
	    if ((this.onColor || this.offColor) && !this.disabled) {
	      this.handleCoreColor();
	    }
	  }
	};

/***/ },

/***/ 240:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-switch",
	    class: {
	      'is-disabled': disabled, 'el-switch--wide': hasText
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (disabled),
	      expression: "disabled"
	    }],
	    staticClass: "el-switch__mask"
	  }), _h('input', {
	    staticClass: "el-switch__input",
	    attrs: {
	      "type": "checkbox",
	      "name": name,
	      "disabled": disabled,
	      "style": "display: none;"
	    },
	    domProps: {
	      "checked": value
	    }
	  }), _h('span', {
	    ref: "core",
	    staticClass: "el-switch__core",
	    style: ({
	      'width': coreWidth + 'px'
	    }),
	    on: {
	      "click": handleMiscClick
	    }
	  }, [_h('span', {
	    staticClass: "el-switch__button",
	    style: (buttonStyle)
	  })]), _h('transition', {
	    attrs: {
	      "name": "label-fade"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (value),
	      expression: "value"
	    }],
	    staticClass: "el-switch__label el-switch__label--left",
	    style: ({
	      'width': coreWidth + 'px'
	    }),
	    on: {
	      "click": handleMiscClick
	    }
	  }, [(onIconClass) ? _h('i', {
	    class: [onIconClass]
	  }) : _e(), (!onIconClass && onText) ? _h('span', [_s(onText)]) : _e()])]), _h('transition', {
	    attrs: {
	      "name": "label-fade"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!value),
	      expression: "!value"
	    }],
	    staticClass: "el-switch__label el-switch__label--right",
	    style: ({
	      'width': coreWidth + 'px'
	    }),
	    on: {
	      "click": handleMiscClick
	    }
	  }, [(offIconClass) ? _h('i', {
	    class: [offIconClass]
	  }) : _e(), (!offIconClass && offText) ? _h('span', [_s(offText)]) : _e()])])])
	}},staticRenderFns: []}

/***/ }

/******/ });