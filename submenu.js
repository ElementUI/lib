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

	module.exports = __webpack_require__(256);


/***/ },

/***/ 153:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  computed: {
	    indexPath: function indexPath() {
	      var path = [this.index];
	      var parent = this.$parent;
	      while (parent.$options.componentName !== 'ElMenu') {
	        if (parent.index) {
	          path.unshift(parent.index);
	        }
	        parent = parent.$parent;
	      }
	      return path;
	    },
	    rootMenu: function rootMenu() {
	      var parent = this.$parent;
	      while (parent.$options.componentName !== 'ElMenu') {
	        parent = parent.$parent;
	      }
	      return parent;
	    },
	    paddingStyle: function paddingStyle() {
	      if (this.rootMenu.mode !== 'vertical') return {};

	      var padding = 20;
	      var parent = this.$parent;
	      while (parent && parent.$options.componentName !== 'ElMenu') {
	        if (parent.$options.componentName === 'ElSubmenu') {
	          padding += 20;
	        }
	        parent = parent.$parent;
	      }
	      return { paddingLeft: padding + 'px' };
	    }
	  }
	};

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _submenu = __webpack_require__(257);

	var _submenu2 = _interopRequireDefault(_submenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_submenu2.default.install = function (Vue) {
	  Vue.component(_submenu2.default.name, _submenu2.default);
	};

	exports.default = _submenu2.default;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(258)

	/* template */
	var __vue_template__ = __webpack_require__(259)
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

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _menuMixin = __webpack_require__(153);

	var _menuMixin2 = _interopRequireDefault(_menuMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  name: 'ElSubmenu',

	  componentName: 'ElSubmenu',

	  mixins: [_menuMixin2.default],

	  props: {
	    index: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      timeout: null,
	      active: false
	    };
	  },

	  computed: {
	    opened: function opened() {
	      return this.rootMenu.openedMenus.indexOf(this.index) !== -1;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.rootMenu.handleSubmenuClick(this.index, this.indexPath);
	    },
	    handleMouseenter: function handleMouseenter() {
	      var _this = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this.rootMenu.openMenu(_this.index, _this.indexPath);
	      }, 300);
	    },
	    handleMouseleave: function handleMouseleave() {
	      var _this2 = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this2.rootMenu.closeMenu(_this2.index, _this2.indexPath);
	      }, 300);
	    },
	    initEvents: function initEvents() {
	      var rootMenu = this.rootMenu,
	          handleMouseenter = this.handleMouseenter,
	          handleMouseleave = this.handleMouseleave,
	          handleClick = this.handleClick;

	      var triggerElm = void 0;

	      if (rootMenu.mode === 'horizontal' && rootMenu.menuTrigger === 'hover') {
	        triggerElm = this.$el;
	        triggerElm.addEventListener('mouseenter', handleMouseenter);
	        triggerElm.addEventListener('mouseleave', handleMouseleave);
	      } else {
	        triggerElm = this.$refs['submenu-title'];
	        triggerElm.addEventListener('click', handleClick);
	      }
	    }
	  },
	  created: function created() {
	    this.rootMenu.submenus[this.index] = this;
	  },
	  mounted: function mounted() {
	    var _this3 = this;

	    this.$on('item-select', function (index, indexPath) {
	      _this3.active = indexPath.indexOf(_this3.index) !== -1;
	    });
	    this.initEvents();
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

/***/ },

/***/ 259:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: {
	      'el-submenu': true,
	      'is-active': _vm.active,
	      'is-opened': _vm.opened
	    }
	  }, [_c('div', {
	    ref: "submenu-title",
	    staticClass: "el-submenu__title",
	    style: (_vm.paddingStyle)
	  }, [_vm._t("title"), _c('i', {
	    class: {
	      'el-submenu__icon-arrow': true,
	      'el-icon-arrow-down': _vm.rootMenu.mode === 'vertical',
	        'el-icon-caret-bottom': _vm.rootMenu.mode === 'horizontal'
	    }
	  })], 2), _c('transition', {
	    attrs: {
	      "name": _vm.rootMenu.mode === 'horizontal' ? 'el-zoom-in-top' : ''
	    }
	  }, [_c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.opened),
	      expression: "opened"
	    }],
	    staticClass: "el-menu"
	  }, [_vm._t("default")], 2)])], 1)
	},staticRenderFns: []}

/***/ }

/******/ });