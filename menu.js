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

	module.exports = __webpack_require__(122);


/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	var ElMenu = __webpack_require__(123);

	/* istanbul ignore next */
	ElMenu.install = function (Vue) {
	  Vue.component(ElMenu.name, ElMenu);
	};

	module.exports = ElMenu;

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(124)

	/* template */
	var __vue_template__ = __webpack_require__(125)
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

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _emitter = __webpack_require__(38);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElMenu',

	  componentName: 'ElMenu',

	  mixins: [_emitter2.default],

	  props: {
	    mode: {
	      type: String,
	      default: 'vertical'
	    },
	    defaultActive: {
	      type: String,
	      default: ''
	    },
	    defaultOpeneds: Array,
	    theme: {
	      type: String,
	      default: 'light'
	    },
	    uniqueOpened: Boolean,
	    router: Boolean,
	    menuTrigger: {
	      type: String,
	      default: 'hover'
	    }
	  },
	  data: function data() {
	    return {
	      activeIndex: this.defaultActive,
	      openedMenus: this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [],
	      menuItems: {},
	      submenus: {}
	    };
	  },

	  watch: {
	    defaultActive: function defaultActive(value) {
	      this.activeIndex = value;
	      if (!this.menuItems[value]) return;
	      var menuItem = this.menuItems[value];
	      var indexPath = menuItem.indexPath;

	      this.handleSelect(value, indexPath, null, menuItem);
	    },
	    defaultOpeneds: function defaultOpeneds(value) {
	      this.openedMenus = value;
	    }
	  },
	  methods: {
	    openMenu: function openMenu(index, indexPath) {
	      var openedMenus = this.openedMenus;
	      if (openedMenus.indexOf(index) !== -1) return;
	      // 将不在该菜单路径下的其余菜单收起
	      if (this.uniqueOpened) {
	        this.openedMenus = openedMenus.filter(function (index) {
	          return indexPath.indexOf(index) !== -1;
	        });
	      }
	      this.openedMenus.push(index);
	    },
	    closeMenu: function closeMenu(index, indexPath) {
	      this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
	    },
	    handleSubmenuClick: function handleSubmenuClick(index, indexPath) {
	      var isOpened = this.openedMenus.indexOf(index) !== -1;

	      if (isOpened) {
	        this.closeMenu(index, indexPath);
	        this.$emit('close', index, indexPath);
	      } else {
	        this.openMenu(index, indexPath);
	        this.$emit('open', index, indexPath);
	      }
	    },
	    handleSelect: function handleSelect(index, indexPath, route, instance) {
	      this.activeIndex = index;
	      this.$emit('select', index, indexPath, instance);

	      if (this.mode === 'horizontal') {
	        this.broadcast('ElSubmenu', 'item-select', [index, indexPath]);
	        this.openedMenus = [];
	      } else {
	        this.openActiveItemMenus();
	      }

	      if (this.router && route) {
	        try {
	          this.$router.push(route);
	        } catch (e) {
	          console.error(e);
	        }
	      }
	    },
	    openActiveItemMenus: function openActiveItemMenus() {
	      var _this = this;

	      var index = this.activeIndex;
	      if (!this.menuItems[index]) return;
	      if (index && this.mode === 'vertical') {
	        var indexPath = this.menuItems[index].indexPath;

	        // 展开该菜单项的路径上所有子菜单
	        indexPath.forEach(function (index) {
	          var submenu = _this.submenus[index];
	          submenu && _this.openMenu(index, submenu.indexPath);
	        });
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.openActiveItemMenus();
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

/***/ },

/***/ 125:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('ul', {
	    staticClass: "el-menu",
	    class: {
	      'el-menu--horizontal': mode === 'horizontal',
	        'el-menu--dark': theme === 'dark'
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ }

/******/ });