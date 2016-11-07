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

	module.exports = __webpack_require__(85);


/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/clickoutside");

/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	var ElDropdown = __webpack_require__(86);

	/* istanbul ignore next */
	ElDropdown.install = function (Vue) {
	  Vue.component(ElDropdown.name, ElDropdown);
	};

	module.exports = ElDropdown;

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(87)
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


	module.exports = __vue_exports__


/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _clickoutside = __webpack_require__(9);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _emitter = __webpack_require__(38);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElDropdown',

	  componentName: 'ElDropdown',

	  mixins: [_emitter2.default],

	  directives: { Clickoutside: _clickoutside2.default },

	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    menuAlign: {
	      type: String,
	      default: 'end'
	    },
	    type: String,
	    size: String,
	    splitButton: Boolean
	  },

	  data: function data() {
	    return {
	      timeout: null,
	      visible: false
	    };
	  },
	  mounted: function mounted() {
	    this.$on('menu-item-click', this.handleMenuItemClick);
	    this.initEvent();
	  },


	  watch: {
	    visible: function visible(val) {
	      this.broadcast('ElDropdownMenu', 'visible', val);
	    }
	  },

	  methods: {
	    show: function show() {
	      var _this = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this.visible = true;
	      }, 250);
	    },
	    hide: function hide() {
	      var _this2 = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this2.visible = false;
	      }, 150);
	    },
	    handleClick: function handleClick() {
	      this.visible = !this.visible;
	    },
	    initEvent: function initEvent() {
	      var trigger = this.trigger;
	      var show = this.show;
	      var hide = this.hide;
	      var handleClick = this.handleClick;
	      var splitButton = this.splitButton;

	      var triggerElm = splitButton ? this.$refs.trigger.$el : this.$slots.default[0].elm;

	      if (trigger === 'hover') {
	        triggerElm.addEventListener('mouseenter', show);
	        triggerElm.addEventListener('mouseleave', hide);

	        var dropdownElm = this.$slots.dropdown[0].elm;

	        dropdownElm.addEventListener('mouseenter', show);
	        dropdownElm.addEventListener('mouseleave', hide);
	      } else if (trigger === 'click') {
	        triggerElm.addEventListener('click', handleClick);
	      }
	    },
	    handleMenuItemClick: function handleMenuItemClick(command, instance) {
	      this.visible = false;
	      this.$emit('command', command, instance);
	    }
	  },

	  render: function render(h) {
	    var _this3 = this;

	    var hide = this.hide;
	    var splitButton = this.splitButton;
	    var type = this.type;
	    var size = this.size;


	    var handleClick = function handleClick(_) {
	      _this3.$emit('click');
	    };

	    var triggerElm = !splitButton ? this.$slots.default : h(
	      'el-button-group',
	      null,
	      [h(
	        'el-button',
	        {
	          attrs: { type: type, size: size },
	          nativeOn: {
	            click: handleClick
	          }
	        },
	        [this.$slots.default]
	      ), h(
	        'el-button',
	        { ref: 'trigger', attrs: { type: type, size: size },
	          'class': 'el-dropdown__caret-button' },
	        [h(
	          'i',
	          { 'class': 'el-dropdown__icon el-icon-caret-bottom' },
	          []
	        )]
	      )]
	    );

	    return h(
	      'div',
	      { 'class': 'el-dropdown', directives: [{
	          name: 'clickoutside',
	          value: hide
	        }]
	      },
	      [triggerElm, this.$slots.dropdown]
	    );
	  }
	};

/***/ }

/******/ });