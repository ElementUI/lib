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

	module.exports = __webpack_require__(109);


/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	var ElInput = __webpack_require__(110);

	/* istanbul ignore next */
	ElInput.install = function (Vue) {
	  Vue.component(ElInput.name, ElInput);
	};

	module.exports = ElInput;

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(111)

	/* template */
	var __vue_template__ = __webpack_require__(113)
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

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _emitter = __webpack_require__(38);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _calcTextareaHeight = __webpack_require__(112);

	var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

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
	  name: 'ElInput',

	  mixins: [_emitter2.default],

	  props: {
	    value: [String, Number],
	    placeholder: String,
	    size: String,
	    readonly: Boolean,
	    autofocus: Boolean,
	    icon: String,
	    disabled: Boolean,
	    type: {
	      type: String,
	      default: 'text'
	    },
	    name: String,
	    autosize: {
	      type: [Boolean, Object],
	      default: false
	    },
	    rows: {
	      type: Number,
	      default: 2
	    },
	    autoComplete: {
	      type: String,
	      default: 'off'
	    },
	    form: String,
	    maxlength: Number,
	    minlength: Number
	  },

	  methods: {
	    handleBlur: function handleBlur(event) {
	      this.$emit('blur', this.currentValue);
	      this.dispatch('form-item', 'el.form.blur', [this.currentValue]);
	    },
	    inputSelect: function inputSelect() {
	      this.$refs.input.select();
	    },
	    resizeTextarea: function resizeTextarea() {
	      var autosize = this.autosize;
	      var type = this.type;

	      if (!autosize || type !== 'textarea') {
	        return;
	      }
	      var minRows = autosize.minRows;
	      var maxRows = autosize.maxRows;

	      this.textareaStyle = (0, _calcTextareaHeight2.default)(this.$refs.textarea, minRows, maxRows);
	    },
	    handleFocus: function handleFocus(ev) {
	      this.$emit('focus', ev);
	    },
	    handleInput: function handleInput(ev) {
	      this.currentValue = ev.target.value;
	    },
	    handleIconClick: function handleIconClick(ev) {
	      this.$emit('click', ev);
	    }
	  },

	  data: function data() {
	    return {
	      currentValue: this.value,
	      textareaStyle: {}
	    };
	  },
	  created: function created() {
	    this.$on('inputSelect', this.inputSelect);
	  },
	  mounted: function mounted() {
	    this.resizeTextarea();
	  },


	  computed: {
	    validating: function validating() {
	      return this.$parent.validating;
	    }
	  },

	  watch: {
	    'value': function value(val, oldValue) {
	      this.currentValue = val;
	    },
	    'currentValue': function currentValue(val) {
	      var _this = this;

	      this.$nextTick(function (_) {
	        _this.resizeTextarea();
	      });
	      this.$emit('input', val);
	      this.$emit('change', val);
	      this.dispatch('form-item', 'el.form.change', [val]);
	    }
	  }
	};

/***/ },

/***/ 112:
/***/ function(module, exports) {

	exports.__esModule = true;
	exports.default = calcTextareaHeight;
	var hiddenTextarea = void 0;

	var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

	var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

	function calculateNodeStyling(node) {
	  var style = window.getComputedStyle(node);

	  var boxSizing = style.getPropertyValue('box-sizing');

	  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

	  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

	  var contextStyle = CONTEXT_STYLE.map(function (name) {
	    return name + ':' + style.getPropertyValue(name);
	  }).join(';');

	  return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
	}

	function calcTextareaHeight(targetNode) {
	  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  if (!hiddenTextarea) {
	    hiddenTextarea = document.createElement('textarea');
	    document.body.appendChild(hiddenTextarea);
	  }

	  var _calculateNodeStyling = calculateNodeStyling(targetNode);

	  var paddingSize = _calculateNodeStyling.paddingSize;
	  var borderSize = _calculateNodeStyling.borderSize;
	  var boxSizing = _calculateNodeStyling.boxSizing;
	  var contextStyle = _calculateNodeStyling.contextStyle;


	  hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
	  hiddenTextarea.value = targetNode.value || targetNode.placeholder || '';

	  var height = hiddenTextarea.scrollHeight;

	  if (boxSizing === 'border-box') {
	    height = height + borderSize;
	  } else if (boxSizing === 'content-box') {
	    height = height - paddingSize;
	  }

	  hiddenTextarea.value = '';
	  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

	  if (minRows !== null) {
	    var minHeight = singleRowHeight * minRows;
	    if (boxSizing === 'border-box') {
	      minHeight = minHeight + paddingSize + borderSize;
	    }
	    height = Math.max(minHeight, height);
	  }
	  if (maxRows !== null) {
	    var maxHeight = singleRowHeight * maxRows;
	    if (boxSizing === 'border-box') {
	      maxHeight = maxHeight + paddingSize + borderSize;
	    }
	    height = Math.min(maxHeight, height);
	  }

	  return { height: height + 'px' };
	};

/***/ },

/***/ 113:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    class: [
	      type === 'textarea' ? 'el-textarea' : 'el-input',
	      size ? 'el-input--' + size : '', {
	        'is-disabled': disabled,
	        'el-input-group': $slots.prepend || $slots.append
	      }
	    ]
	  }, [(type !== 'textarea') ? [($slots.prepend) ? _h('div', {
	    staticClass: "el-input-group__prepend"
	  }, [_t("prepend")]) : _e(), (icon) ? _h('i', {
	    staticClass: "el-input__icon",
	    class: [icon ? 'el-icon-' + icon : ''],
	    on: {
	      "click": handleIconClick
	    }
	  }) : _e(), (type !== 'textarea') ? _h('input', {
	    ref: "input",
	    staticClass: "el-input__inner",
	    attrs: {
	      "type": type,
	      "name": name,
	      "placeholder": placeholder,
	      "disabled": disabled,
	      "readonly": readonly,
	      "maxlength": maxlength,
	      "minlength": minlength,
	      "autocomplete": autoComplete,
	      "autofocus": autofocus,
	      "form": form
	    },
	    domProps: {
	      "value": value
	    },
	    on: {
	      "input": handleInput,
	      "focus": handleFocus,
	      "blur": handleBlur
	    }
	  }) : _e(), (validating) ? _h('i', {
	    staticClass: "el-input__icon el-icon-loading"
	  }) : _e(), ($slots.append) ? _h('div', {
	    staticClass: "el-input-group__append"
	  }, [_t("append")]) : _e()] : _h('textarea', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (currentValue),
	      expression: "currentValue"
	    }],
	    ref: "textarea",
	    staticClass: "el-textarea__inner",
	    style: (textareaStyle),
	    attrs: {
	      "name": name,
	      "placeholder": placeholder,
	      "disabled": disabled,
	      "readonly": readonly,
	      "rows": rows,
	      "form": form,
	      "autofocus": autofocus,
	      "maxlength": maxlength,
	      "minlength": minlength
	    },
	    domProps: {
	      "value": _s(currentValue)
	    },
	    on: {
	      "focus": handleFocus,
	      "blur": handleBlur,
	      "input": function($event) {
	        if ($event.target.composing) return;
	        currentValue = $event.target.value
	      }
	    }
	  })])
	}},staticRenderFns: []}

/***/ }

/******/ });