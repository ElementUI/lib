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

	module.exports = __webpack_require__(204);


/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/input");

/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/clickoutside");

/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/vue-popper");

/***/ },

/***/ 57:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/locale");

/***/ },

/***/ 66:
/***/ function(module, exports) {

	module.exports = require("wind-dom/src/class");

/***/ },

/***/ 152:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/locale");

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _select = __webpack_require__(205);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_select2.default.install = function (Vue) {
	  Vue.component(_select2.default.name, _select2.default);
	};

	exports.default = _select2.default;

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(206)

	/* template */
	var __vue_template__ = __webpack_require__(213)
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

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(38);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _locale = __webpack_require__(57);

	var _locale2 = _interopRequireDefault(_locale);

	var _input = __webpack_require__(8);

	var _input2 = _interopRequireDefault(_input);

	var _selectDropdown = __webpack_require__(207);

	var _selectDropdown2 = _interopRequireDefault(_selectDropdown);

	var _tag = __webpack_require__(210);

	var _tag2 = _interopRequireDefault(_tag);

	var _debounce = __webpack_require__(211);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _clickoutside = __webpack_require__(9);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _class = __webpack_require__(66);

	var _resizeEvent = __webpack_require__(212);

	var _locale3 = __webpack_require__(152);

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
	//
	//
	//
	//
	//
	//

	exports.default = {
	  mixins: [_emitter2.default, _locale2.default],

	  name: 'ElSelect',

	  componentName: 'ElSelect',

	  computed: {
	    iconClass: function iconClass() {
	      return this.showCloseIcon ? 'circle-close' : this.remote && this.filterable ? '' : 'caret-top';
	    },
	    debounce: function debounce() {
	      return this.remote ? 300 : 0;
	    },
	    showCloseIcon: function showCloseIcon() {
	      var _this = this;

	      var criteria = this.clearable && this.inputHovering && !this.multiple && this.options.indexOf(this.selected) > -1;
	      if (!this.$el) return false;

	      this.$nextTick(function () {
	        var icon = _this.$el.querySelector('.el-input__icon');
	        if (icon) {
	          if (criteria) {
	            icon.addEventListener('click', _this.deleteSelected);
	            (0, _class.addClass)(icon, 'is-show-close');
	          } else {
	            icon.removeEventListener('click', _this.deleteSelected);
	            (0, _class.removeClass)(icon, 'is-show-close');
	          }
	        }
	      });

	      return criteria;
	    },
	    emptyText: function emptyText() {
	      if (this.loading) {
	        return this.t('el.select.loading');
	      } else {
	        if (this.voidRemoteQuery) {
	          this.voidRemoteQuery = false;
	          return false;
	        }
	        if (this.filterable && this.filteredOptionsCount === 0) {
	          return this.t('el.select.noMatch');
	        }
	        if (this.options.length === 0) {
	          return this.t('el.select.noData');
	        }
	      }
	      return null;
	    }
	  },

	  components: {
	    ElInput: _input2.default,
	    ElSelectMenu: _selectDropdown2.default,
	    ElTag: _tag2.default
	  },

	  directives: { Clickoutside: _clickoutside2.default },

	  props: {
	    name: String,
	    value: {},
	    size: String,
	    disabled: Boolean,
	    clearable: Boolean,
	    filterable: Boolean,
	    loading: Boolean,
	    remote: Boolean,
	    remoteMethod: Function,
	    filterMethod: Function,
	    multiple: Boolean,
	    placeholder: {
	      type: String,
	      default: function _default() {
	        return (0, _locale3.t)('el.select.placeholder');
	      }
	    }
	  },

	  data: function data() {
	    return {
	      options: [],
	      selected: {},
	      isSelect: true,
	      inputLength: 20,
	      inputWidth: 0,
	      valueChangeBySelected: false,
	      cachedPlaceHolder: '',
	      optionsCount: 0,
	      filteredOptionsCount: 0,
	      dropdownUl: null,
	      visible: false,
	      selectedLabel: '',
	      selectInit: false,
	      hoverIndex: -1,
	      query: '',
	      voidRemoteQuery: false,
	      bottomOverflowBeforeHidden: 0,
	      optionsAllDisabled: false,
	      inputHovering: false,
	      currentPlaceholder: ''
	    };
	  },


	  watch: {
	    placeholder: function placeholder(val) {
	      this.currentPlaceholder = val;
	    },
	    value: function value(val) {
	      var _this2 = this;

	      if (this.valueChangeBySelected) {
	        this.valueChangeBySelected = false;
	        return;
	      }
	      this.$nextTick(function () {
	        if (_this2.multiple && Array.isArray(val)) {
	          _this2.$nextTick(function () {
	            _this2.resetInputHeight();
	          });
	          _this2.selectedInit = true;
	          _this2.selected = [];
	          _this2.currentPlaceholder = _this2.cachedPlaceHolder;
	          val.forEach(function (item) {
	            var option = _this2.options.filter(function (option) {
	              return option.value === item;
	            })[0];
	            if (option) {
	              _this2.$emit('addOptionToValue', option);
	            }
	          });
	        }
	        if (!_this2.multiple) {
	          var option = _this2.options.filter(function (option) {
	            return option.value === val;
	          })[0];
	          if (option) {
	            _this2.$emit('addOptionToValue', option);
	          } else {
	            _this2.selected = {};
	            _this2.selectedLabel = '';
	          }
	        }
	        _this2.resetHoverIndex();
	      });
	    },
	    selected: function selected(val, oldVal) {
	      var _this3 = this;

	      if (this.multiple) {
	        if (this.selected.length > 0) {
	          this.currentPlaceholder = '';
	        } else {
	          this.currentPlaceholder = this.cachedPlaceHolder;
	        }
	        this.$nextTick(function () {
	          _this3.resetInputHeight();
	        });
	        if (this.selectedInit) {
	          this.selectedInit = false;
	          return;
	        }
	        this.valueChangeBySelected = true;
	        var result = val.map(function (item) {
	          return item.value;
	        });

	        this.$emit('input', result);
	        this.$emit('change', result);
	        this.dispatch('ElFormItem', 'el.form.change', val);
	        if (this.filterable) {
	          this.query = '';
	          this.hoverIndex = -1;
	          this.$refs.input.focus();
	          this.inputLength = 20;
	        }
	      } else {
	        if (this.selectedInit) {
	          this.selectedInit = false;
	          return;
	        }
	        if (val.value === oldVal.value) return;
	        this.$emit('input', val.value);
	        this.$emit('change', val.value);
	      }
	    },
	    query: function query(val) {
	      var _this4 = this;

	      this.$nextTick(function () {
	        _this4.broadcast('ElSelectDropdown', 'updatePopper');
	      });
	      if (this.multiple && this.filterable) {
	        this.resetInputHeight();
	      }
	      if (this.remote && typeof this.remoteMethod === 'function') {
	        this.hoverIndex = -1;
	        this.remoteMethod(val);
	        this.voidRemoteQuery = val === '';
	        this.broadcast('ElOption', 'resetIndex');
	      } else if (typeof this.filterMethod === 'function') {
	        this.filterMethod(val);
	      } else {
	        this.filteredOptionsCount = this.optionsCount;
	        this.broadcast('ElOption', 'queryChange', val);
	      }
	    },
	    visible: function visible(val) {
	      if (!val) {
	        this.$refs.reference.$el.querySelector('input').blur();
	        if (this.$el.querySelector('.el-input__icon')) {
	          (0, _class.removeClass)(this.$el.querySelector('.el-input__icon'), 'is-reverse');
	        }
	        this.broadcast('ElSelectDropdown', 'destroyPopper');
	        if (this.$refs.input) {
	          this.$refs.input.blur();
	        }
	        this.resetHoverIndex();
	        if (!this.multiple) {
	          if (this.dropdownUl && this.selected.$el) {
	            this.bottomOverflowBeforeHidden = this.selected.$el.getBoundingClientRect().bottom - this.$refs.popper.$el.getBoundingClientRect().bottom;
	          }
	          if (this.selected && this.selected.value) {
	            this.selectedLabel = this.selected.currentLabel;
	          }
	        }
	      } else {
	        var icon = this.$el.querySelector('.el-input__icon');
	        if (icon && !(0, _class.hasClass)(icon, 'el-icon-circle-close')) {
	          (0, _class.addClass)(this.$el.querySelector('.el-input__icon'), 'is-reverse');
	        }
	        this.broadcast('ElSelectDropdown', 'updatePopper');
	        if (this.filterable) {
	          this.query = this.selectedLabel;
	          if (this.multiple) {
	            this.$refs.input.focus();
	          } else {
	            this.broadcast('ElInput', 'inputSelect');
	          }
	        }
	        if (!this.dropdownUl) {
	          var dropdownChildNodes = this.$refs.popper.$el.childNodes;
	          this.dropdownUl = [].filter.call(dropdownChildNodes, function (item) {
	            return item.tagName === 'UL';
	          })[0];
	        }
	        if (!this.multiple && this.dropdownUl) {
	          if (this.bottomOverflowBeforeHidden > 0) {
	            this.dropdownUl.scrollTop += this.bottomOverflowBeforeHidden;
	          }
	        }
	      }
	    },
	    options: function options(val) {
	      this.optionsAllDisabled = val.length === val.filter(function (item) {
	        return item.disabled === true;
	      }).length;
	    }
	  },

	  methods: {
	    handleMouseDown: function handleMouseDown(event) {
	      if (event.target.tagName !== 'INPUT') return;
	      if (this.visible) {
	        this.handleClose();
	        event.preventDefault();
	      }
	    },
	    doDestroy: function doDestroy() {
	      this.$refs.popper.doDestroy();
	    },
	    handleClose: function handleClose() {
	      this.visible = false;
	    },
	    toggleLastOptionHitState: function toggleLastOptionHitState(hit) {
	      if (!Array.isArray(this.selected)) return;
	      var option = this.selected[this.selected.length - 1];
	      if (!option) return;

	      if (hit === true || hit === false) {
	        option.hitState = hit;
	        return hit;
	      }

	      option.hitState = !option.hitState;
	      return option.hitState;
	    },
	    deletePrevTag: function deletePrevTag(e) {
	      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
	        this.selected.pop();
	      }
	    },
	    addOptionToValue: function addOptionToValue(option, init) {
	      if (this.multiple) {
	        if (this.selected.indexOf(option) === -1 && (this.remote ? this.value.indexOf(option.value) === -1 : true)) {
	          this.selectedInit = !!init;
	          this.selected.push(option);
	          this.resetHoverIndex();
	        }
	      } else {
	        this.selectedInit = !!init;
	        this.selected = option;
	        this.selectedLabel = option.currentLabel;
	        this.hoverIndex = option.index;
	      }
	    },
	    managePlaceholder: function managePlaceholder() {
	      if (this.currentPlaceholder !== '') {
	        this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
	      }
	    },
	    resetInputState: function resetInputState(e) {
	      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
	      this.inputLength = this.$refs.input.value.length * 15 + 20;
	    },
	    resetInputHeight: function resetInputHeight() {
	      var _this5 = this;

	      this.$nextTick(function () {
	        var inputChildNodes = _this5.$refs.reference.$el.childNodes;
	        var input = [].filter.call(inputChildNodes, function (item) {
	          return item.tagName === 'INPUT';
	        })[0];
	        input.style.height = Math.max(_this5.$refs.tags.clientHeight + 6, _this5.size === 'small' ? 28 : 36) + 'px';
	        _this5.broadcast('ElSelectDropdown', 'updatePopper');
	      });
	    },
	    resetHoverIndex: function resetHoverIndex() {
	      var _this6 = this;

	      setTimeout(function () {
	        if (!_this6.multiple) {
	          _this6.hoverIndex = _this6.options.indexOf(_this6.selected);
	        } else {
	          if (_this6.selected.length > 0) {
	            _this6.hoverIndex = Math.min.apply(null, _this6.selected.map(function (item) {
	              return _this6.options.indexOf(item);
	            }));
	          } else {
	            _this6.hoverIndex = -1;
	          }
	        }
	      }, 300);
	    },
	    handleOptionSelect: function handleOptionSelect(option) {
	      if (!this.multiple) {
	        this.selected = option;
	        this.selectedLabel = option.currentLabel;
	        this.visible = false;
	      } else {
	        var optionIndex = -1;
	        this.selected.forEach(function (item, index) {
	          if (item === option || item.currentValue === option.currentValue) {
	            optionIndex = index;
	          }
	        });
	        if (optionIndex > -1) {
	          this.selected.splice(optionIndex, 1);
	        } else {
	          this.selected.push(option);
	        }
	      }
	    },
	    toggleMenu: function toggleMenu() {
	      if (this.filterable && this.query === '' && this.visible) {
	        return;
	      }
	      if (!this.disabled) {
	        this.visible = !this.visible;
	      }
	    },
	    navigateOptions: function navigateOptions(direction) {
	      if (!this.visible) {
	        this.visible = true;
	        return;
	      }
	      if (!this.optionsAllDisabled) {
	        if (direction === 'next') {
	          this.hoverIndex++;
	          if (this.hoverIndex === this.options.length) {
	            this.hoverIndex = 0;
	          }
	          this.resetScrollTop();
	          if (this.options[this.hoverIndex].disabled === true || this.options[this.hoverIndex].groupDisabled === true || !this.options[this.hoverIndex].visible) {
	            this.navigateOptions('next');
	          }
	        }
	        if (direction === 'prev') {
	          this.hoverIndex--;
	          if (this.hoverIndex < 0) {
	            this.hoverIndex = this.options.length - 1;
	          }
	          this.resetScrollTop();
	          if (this.options[this.hoverIndex].disabled === true || this.options[this.hoverIndex].groupDisabled === true || !this.options[this.hoverIndex].visible) {
	            this.navigateOptions('prev');
	          }
	        }
	      }
	    },
	    resetScrollTop: function resetScrollTop() {
	      var bottomOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().bottom - this.$refs.popper.$el.getBoundingClientRect().bottom;
	      var topOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().top - this.$refs.popper.$el.getBoundingClientRect().top;
	      if (bottomOverflowDistance > 0) {
	        this.dropdownUl.scrollTop += bottomOverflowDistance;
	      }
	      if (topOverflowDistance < 0) {
	        this.dropdownUl.scrollTop += topOverflowDistance;
	      }
	    },
	    selectOption: function selectOption() {
	      if (this.options[this.hoverIndex]) {
	        this.handleOptionSelect(this.options[this.hoverIndex]);
	      }
	    },
	    deleteSelected: function deleteSelected(event) {
	      event.stopPropagation();
	      this.selected = {};
	      this.selectedLabel = '';
	      this.$emit('input', '');
	      this.$emit('change', '');
	      this.visible = false;
	    },
	    deleteTag: function deleteTag(event, tag) {
	      var index = this.selected.indexOf(tag);
	      if (index > -1) {
	        this.selected.splice(index, 1);
	      }
	      event.stopPropagation();
	    },
	    onInputChange: function onInputChange() {
	      if (this.filterable && this.selectedLabel !== this.value) {
	        this.query = this.selectedLabel;
	      }
	    },
	    onOptionDestroy: function onOptionDestroy(option) {
	      this.optionsCount--;
	      this.filteredOptionsCount--;
	      var index = this.options.indexOf(option);
	      if (index > -1) {
	        this.options.splice(index, 1);
	      }
	      this.broadcast('ElOption', 'resetIndex');
	    },
	    resetInputWidth: function resetInputWidth() {
	      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
	    }
	  },

	  created: function created() {
	    var _this7 = this;

	    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
	    if (this.multiple) {
	      this.selectedInit = true;
	      this.selected = [];
	    }
	    if (this.remote) {
	      this.voidRemoteQuery = true;
	    }

	    this.debouncedOnInputChange = (0, _debounce2.default)(this.debounce, function () {
	      _this7.onInputChange();
	    });

	    this.$on('addOptionToValue', this.addOptionToValue);
	    this.$on('handleOptionClick', this.handleOptionSelect);
	    this.$on('onOptionDestroy', this.onOptionDestroy);
	  },
	  mounted: function mounted() {
	    var _this8 = this;

	    (0, _resizeEvent.addResizeListener)(this.$el, this.resetInputWidth);
	    if (this.remote && this.multiple && Array.isArray(this.value)) {
	      this.selected = this.options.reduce(function (prev, curr) {
	        return _this8.value.indexOf(curr.value) > -1 ? prev.concat(curr) : prev;
	      }, []);
	      this.$nextTick(function () {
	        _this8.resetInputHeight();
	      });
	    }
	    this.$nextTick(function () {
	      if (_this8.$refs.reference.$el) {
	        _this8.inputWidth = _this8.$refs.reference.$el.getBoundingClientRect().width;
	      }
	    });
	  },
	  destroyed: function destroyed() {
	    if (this.resetInputWidth) (0, _resizeEvent.removeResizeListener)(this.$el, this.resetInputWidth);
	  }
	};

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(208)

	/* template */
	var __vue_template__ = __webpack_require__(209)
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

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vuePopper = __webpack_require__(53);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-select-dropdown',

	  componentName: 'ElSelectDropdown',

	  mixins: [_vuePopper2.default],

	  props: {
	    placement: {
	      default: 'bottom-start'
	    },

	    boundariesPadding: {
	      default: 0
	    },

	    options: {
	      default: function _default() {
	        return {
	          forceAbsolute: true,
	          gpuAcceleration: false
	        };
	      }
	    }
	  },

	  data: function data() {
	    return {
	      minWidth: ''
	    };
	  },


	  watch: {
	    '$parent.inputWidth': function $parentInputWidth() {
	      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
	    }
	  },

	  mounted: function mounted() {
	    this.referenceElm = this.$parent.$refs.reference.$el;
	    this.$parent.popperElm = this.popperElm = this.$el;
	    this.$on('updatePopper', this.updatePopper);
	    this.$on('destroyPopper', this.destroyPopper);
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

/***/ },

/***/ 209:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "el-select-dropdown",
	    class: {
	      'is-multiple': _vm.$parent.multiple
	    },
	    style: ({
	      minWidth: _vm.minWidth
	    })
	  }, [_vm._t("default")])
	},staticRenderFns: []}

/***/ },

/***/ 210:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/tag");

/***/ },

/***/ 211:
/***/ function(module, exports) {

	module.exports = require("throttle-debounce/debounce");

/***/ },

/***/ 212:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/resize-event");

/***/ },

/***/ 213:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.handleClose),
	      expression: "handleClose"
	    }],
	    staticClass: "el-select",
	    class: {
	      'is-multiple': _vm.multiple, 'is-small': _vm.size === 'small'
	    }
	  }, [(_vm.multiple) ? _vm._h('div', {
	    ref: "tags",
	    staticClass: "el-select__tags",
	    style: ({
	      'max-width': _vm.inputWidth - 32 + 'px'
	    }),
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.toggleMenu($event)
	      }
	    }
	  }, [_vm._h('transition-group', {
	    on: {
	      "after-leave": _vm.resetInputHeight
	    }
	  }, [_vm._l((_vm.selected), function(item) {
	    return _vm._h('el-tag', {
	      key: item,
	      attrs: {
	        "closable": "",
	        "hit": item.hitState,
	        "type": "primary",
	        "close-transition": ""
	      },
	      on: {
	        "close": function($event) {
	          _vm.deleteTag($event, item)
	        }
	      }
	    }, [_vm._s(item.currentLabel)])
	  })]), (_vm.filterable) ? _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.query),
	      expression: "query"
	    }],
	    ref: "input",
	    staticClass: "el-select__input",
	    style: ({
	      width: _vm.inputLength + 'px',
	      'max-width': _vm.inputWidth - 42 + 'px'
	    }),
	    attrs: {
	      "type": "text",
	      "debounce": _vm.remote ? 300 : 0
	    },
	    domProps: {
	      "value": _vm._s(_vm.query)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.visible = true
	      },
	      "keyup": _vm.managePlaceholder,
	      "keydown": [_vm.resetInputState, function($event) {
	        if ($event.keyCode !== 40) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('next')
	      }, function($event) {
	        if ($event.keyCode !== 38) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('prev')
	      }, function($event) {
	        if ($event.keyCode !== 13) { return; }
	        $event.preventDefault();
	        _vm.selectOption($event)
	      }, function($event) {
	        if ($event.keyCode !== 27) { return; }
	        $event.preventDefault();
	        _vm.visible = false
	      }, function($event) {
	        if ($event.keyCode !== 8 && $event.keyCode !== 46) { return; }
	        _vm.deletePrevTag($event)
	      }],
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.query = $event.target.value
	      }
	    }
	  }) : _vm._e()]) : _vm._e(), _vm._h('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.selectedLabel),
	      expression: "selectedLabel"
	    }],
	    ref: "reference",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.currentPlaceholder,
	      "name": _vm.name,
	      "disabled": _vm.disabled,
	      "readonly": !_vm.filterable || _vm.multiple,
	      "icon": _vm.iconClass
	    },
	    domProps: {
	      "value": (_vm.selectedLabel)
	    },
	    on: {
	      "focus": _vm.toggleMenu,
	      "click": _vm.toggleMenu,
	      "input": function($event) {
	        _vm.selectedLabel = $event
	      }
	    },
	    nativeOn: {
	      "mousedown": function($event) {
	        _vm.handleMouseDown($event)
	      },
	      "keyup": function($event) {
	        _vm.debouncedOnInputChange($event)
	      },
	      "keydown": [function($event) {
	        if ($event.keyCode !== 40) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('next')
	      }, function($event) {
	        if ($event.keyCode !== 38) { return; }
	        $event.preventDefault();
	        _vm.navigateOptions('prev')
	      }, function($event) {
	        if ($event.keyCode !== 13) { return; }
	        $event.preventDefault();
	        _vm.selectOption($event)
	      }, function($event) {
	        if ($event.keyCode !== 27) { return; }
	        $event.preventDefault();
	        _vm.visible = false
	      }, function($event) {
	        if ($event.keyCode !== 9) { return; }
	        _vm.visible = false
	      }],
	      "mouseenter": function($event) {
	        _vm.inputHovering = true
	      },
	      "mouseleave": function($event) {
	        _vm.inputHovering = false
	      }
	    }
	  }), _vm._h('transition', {
	    attrs: {
	      "name": "md-fade-bottom"
	    },
	    on: {
	      "after-leave": _vm.doDestroy
	    }
	  }, [_vm._h('el-select-menu', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible && _vm.emptyText !== false),
	      expression: "visible && emptyText !== false"
	    }],
	    ref: "popper"
	  }, [_vm._h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.options.length > 0 && _vm.filteredOptionsCount > 0 && !_vm.loading),
	      expression: "options.length > 0 && filteredOptionsCount > 0 && !loading"
	    }],
	    staticClass: "el-select-dropdown__list"
	  }, [_vm._t("default")]), (_vm.emptyText) ? _vm._h('p', {
	    staticClass: "el-select-dropdown__empty"
	  }, [_vm._s(_vm.emptyText)]) : _vm._e()])])])
	},staticRenderFns: []}

/***/ }

/******/ });