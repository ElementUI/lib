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

	module.exports = __webpack_require__(214);


/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	var Slider = __webpack_require__(215);

	/* istanbul ignore next */
	Slider.install = function (Vue) {
	  Vue.component(Slider.name, Slider);
	};

	module.exports = Slider;

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(216)

	/* template */
	var __vue_template__ = __webpack_require__(220)
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

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _inputNumber = __webpack_require__(217);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _tooltip = __webpack_require__(218);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _style = __webpack_require__(219);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSlider',

	  props: {
	    min: {
	      type: Number,
	      default: 0
	    },
	    max: {
	      type: Number,
	      default: 100
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    defaultValue: {
	      type: Number,
	      default: 0
	    },
	    value: {
	      type: Number,
	      default: 0
	    },
	    showInput: {
	      type: Boolean,
	      default: false
	    },
	    showStops: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },

	  components: {
	    ElInputNumber: _inputNumber2.default,
	    ElTooltip: _tooltip2.default
	  },

	  data: function data() {
	    return {
	      inputValue: null,
	      timeout: null,
	      hovering: false,
	      dragging: false,
	      startX: 0,
	      currentX: 0,
	      startPos: 0,
	      newPos: null,
	      oldValue: this.value,
	      currentPosition: (this.value - this.min) / (this.max - this.min) * 100 + '%'
	    };
	  },


	  watch: {
	    inputValue: function inputValue(val) {
	      this.$emit('input', Number(val));
	    },
	    value: function value(val) {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.updatePopper();
	      });
	      if (val < this.min) {
	        this.$emit('input', this.min);
	        return;
	      }
	      if (val > this.max) {
	        this.$emit('input', this.max);
	        return;
	      }
	      this.inputValue = val;
	      this.setPosition((val - this.min) * 100 / (this.max - this.min));
	    }
	  },

	  methods: {
	    handleMouseEnter: function handleMouseEnter() {
	      this.hovering = true;
	      this.$refs.tooltip.showPopper = true;
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.hovering = false;
	      this.$refs.tooltip.showPopper = false;
	    },
	    updatePopper: function updatePopper() {
	      this.$refs.tooltip.updatePopper();
	    },
	    setPosition: function setPosition(newPos) {
	      if (newPos >= 0 && newPos <= 100) {
	        var lengthPerStep = 100 / ((this.max - this.min) / this.step);
	        var steps = Math.round(newPos / lengthPerStep);
	        this.$emit('input', Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min));
	        this.currentPosition = (this.value - this.min) / (this.max - this.min) * 100 + '%';
	        if (!this.dragging) {
	          if (this.value !== this.oldValue) {
	            this.$emit('change', this.value);
	            this.oldValue = this.value;
	          }
	        }
	      }
	    },
	    onSliderClick: function onSliderClick(event) {
	      if (this.disabled) return;
	      var currentX = event.clientX;
	      var sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
	      var newPos = (currentX - sliderOffsetLeft) / this.$sliderWidth * 100;
	      this.setPosition(newPos);
	    },
	    onInputChange: function onInputChange() {
	      if (this.value === '') {
	        return;
	      }
	      if (!isNaN(this.value)) {
	        this.setPosition((this.value - this.min) * 100 / (this.max - this.min));
	      }
	    },
	    onDragStart: function onDragStart(event) {
	      this.dragging = true;
	      this.startX = event.clientX;
	      this.startPos = parseInt(this.currentPosition, 10);
	    },
	    onDragging: function onDragging(event) {
	      if (this.dragging) {
	        this.$refs.tooltip.showPopper = true;
	        this.currentX = event.clientX;
	        var diff = (this.currentX - this.startX) / this.$sliderWidth * 100;
	        this.newPos = this.startPos + diff;
	        this.setPosition(this.newPos);
	      }
	    },
	    onDragEnd: function onDragEnd() {
	      if (this.dragging) {
	        this.dragging = false;
	        this.$refs.tooltip.showPopper = false;
	        this.setPosition(this.newPos);
	        window.removeEventListener('mousemove', this.onDragging);
	        window.removeEventListener('mouseup', this.onDragEnd);
	      }
	    },
	    onButtonDown: function onButtonDown(event) {
	      if (this.disabled) return;
	      this.onDragStart(event);
	      window.addEventListener('mousemove', this.onDragging);
	      window.addEventListener('mouseup', this.onDragEnd);
	    }
	  },

	  computed: {
	    $sliderWidth: function $sliderWidth() {
	      return parseInt((0, _style.getStyle)(this.$refs.slider, 'width'), 10);
	    },
	    stops: function stops() {
	      var stopCount = (this.max - this.value) / this.step;
	      var result = [];
	      var currentLeft = parseFloat(this.currentPosition);
	      var stepWidth = 100 * this.step / (this.max - this.min);
	      for (var i = 1; i < stopCount; i++) {
	        result.push(currentLeft + i * stepWidth);
	      }
	      return result;
	    }
	  },

	  created: function created() {
	    if (typeof this.value !== 'number' || this.value < this.min) {
	      this.$emit('input', this.min);
	    } else if (this.value > this.max) {
	      this.$emit('input', this.max);
	    }
	    this.inputValue = this.inputValue || this.value;
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

/***/ },

/***/ 217:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/input-number");

/***/ },

/***/ 218:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/tooltip");

/***/ },

/***/ 219:
/***/ function(module, exports) {

	var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	var MOZ_HACK_REGEXP = /^moz([A-Z])/;

	function camelCase(name) {
	  return name.
	    replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
	      return offset ? letter.toUpperCase() : letter;
	    }).
	    replace(MOZ_HACK_REGEXP, 'Moz$1');
	}

	var ieVersion = Number(document.documentMode);
	var getStyle = ieVersion < 9 ? function(element, styleName) {
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'styleFloat';
	  }
	  try {
	    switch (styleName) {
	      case 'opacity':
	        try {
	          return element.filters.item('alpha').opacity / 100;
	        }
	        catch (e) {
	          return 1.0;
	        }
	        break;
	      default:
	        return ( element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null );
	    }
	  } catch(e) {
	    return element.style[styleName];
	  }
	} : function(element, styleName) {
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'cssFloat';
	  }
	  try {
	    var computed = document.defaultView.getComputedStyle(element, '');
	    return element.style[styleName] || computed ? computed[styleName] : null;
	  } catch(e) {
	    return element.style[styleName];
	  }
	};

	var setStyle = function(element, styleName, value) {
	  if (!element || !styleName) return;

	  if (typeof styleName === 'object') {
	    for (var prop in styleName) {
	      if (styleName.hasOwnProperty(prop)) {
	        setStyle(element, prop, styleName[prop]);
	      }
	    }
	  } else {
	    styleName = camelCase(styleName);
	    if (styleName === 'opacity' && ieVersion < 9) {
	      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
	    } else {
	      element.style[styleName] = value;
	    }
	  }
	};

	module.exports = {
	  getStyle: getStyle,
	  setStyle: setStyle
	};

/***/ },

/***/ 220:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-slider"
	  }, [(showInput) ? _h('el-input-number', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (inputValue),
	      expression: "inputValue"
	    }],
	    ref: "input",
	    staticClass: "el-slider__input",
	    attrs: {
	      "step": step,
	      "disabled": disabled,
	      "min": min,
	      "max": max,
	      "size": "small"
	    },
	    domProps: {
	      "value": (inputValue)
	    },
	    on: {
	      "input": function($event) {
	        inputValue = $event
	      }
	    },
	    nativeOn: {
	      "keyup": function($event) {
	        onInputChange($event)
	      }
	    }
	  }) : _e(), _h('div', {
	    ref: "slider",
	    staticClass: "el-slider__runway",
	    class: {
	      'show-input': showInput, 'disabled': disabled
	    },
	    on: {
	      "click": onSliderClick
	    }
	  }, [_h('div', {
	    staticClass: "el-slider__bar",
	    style: ({
	      width: currentPosition
	    })
	  }), _h('div', {
	    ref: "button",
	    staticClass: "el-slider__button-wrapper",
	    class: {
	      'hover': hovering, 'dragging': dragging
	    },
	    style: ({
	      left: currentPosition
	    }),
	    on: {
	      "mouseenter": handleMouseEnter,
	      "mouseleave": handleMouseLeave,
	      "mousedown": onButtonDown
	    }
	  }, [_h('el-tooltip', {
	    ref: "tooltip",
	    attrs: {
	      "placement": "top"
	    }
	  }, [_h('span', {
	    slot: "content"
	  }, [_s(value)]), _h('div', {
	    staticClass: "el-slider__button",
	    class: {
	      'hover': hovering, 'dragging': dragging
	    }
	  })])]), _l((stops), function(item) {
	    return (showStops) ? _h('div', {
	      staticClass: "el-slider__stop",
	      style: ({
	        'left': item + '%'
	      })
	    }) : _e()
	  })])])
	}},staticRenderFns: []}

/***/ }

/******/ });