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

/***/ 3:
/***/ function(module, exports) {

	/* globals __VUE_SSR_CONTEXT__ */

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  injectStyles,
	  scopeId,
	  moduleIdentifier /* server only */
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  var hook
	  if (moduleIdentifier) { // server build
	    hook = function (context) {
	      // 2.3 injection
	      context = context || (this.$vnode && this.$vnode.ssrContext)
	      // 2.2 with runInNewContext: true
	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__
	      }
	      // inject component styles
	      if (injectStyles) {
	        injectStyles.call(this, context)
	      }
	      // register component module identifier for async chunk inferrence
	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier)
	      }
	    }
	    // used by ssr in case component is cached and beforeCreate
	    // never gets called
	    options._ssrRegister = hook
	  } else if (injectStyles) {
	    hook = injectStyles
	  }

	  if (hook) {
	    // inject component registration as beforeCreate hook
	    var existing = options.beforeCreate
	    options.beforeCreate = existing
	      ? [].concat(existing, hook)
	      : [hook]
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ },

/***/ 134:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/dom");

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _menu = __webpack_require__(205);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_menu2.default.install = function (Vue) {
	  Vue.component(_menu2.default.name, _menu2.default);
	};

	exports.default = _menu2.default;

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(206),
	  /* template */
	  __webpack_require__(211),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(18);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _ariaMenubar = __webpack_require__(207);

	var _ariaMenubar2 = _interopRequireDefault(_ariaMenubar);

	var _dom = __webpack_require__(134);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElMenu',

	  componentName: 'ElMenu',

	  mixins: [_emitter2.default],

	  provide: function provide() {
	    return {
	      rootMenu: this
	    };
	  },


	  components: {
	    'el-menu-collapse-transition': {
	      functional: true,
	      render: function render(createElement, context) {
	        var data = {
	          props: {
	            mode: 'out-in'
	          },
	          on: {
	            beforeEnter: function beforeEnter(el) {
	              el.style.opacity = 0.2;
	            },
	            enter: function enter(el) {
	              (0, _dom.addClass)(el, 'el-opacity-transition');
	              el.style.opacity = 1;
	            },
	            afterEnter: function afterEnter(el) {
	              (0, _dom.removeClass)(el, 'el-opacity-transition');
	              el.style.opacity = '';
	            },
	            beforeLeave: function beforeLeave(el) {
	              if (!el.dataset) el.dataset = {};

	              if ((0, _dom.hasClass)(el, 'el-menu--collapse')) {
	                (0, _dom.removeClass)(el, 'el-menu--collapse');
	                el.dataset.oldOverflow = el.style.overflow;
	                el.dataset.scrollWidth = el.scrollWidth;
	                (0, _dom.addClass)(el, 'el-menu--collapse');
	              }

	              el.style.width = el.scrollWidth + 'px';
	              el.style.overflow = 'hidden';
	            },
	            leave: function leave(el) {
	              if (!(0, _dom.hasClass)(el, 'el-menu--collapse')) {
	                (0, _dom.addClass)(el, 'horizontal-collapse-transition');
	                el.style.width = '64px';
	              } else {
	                (0, _dom.addClass)(el, 'horizontal-collapse-transition');
	                el.style.width = el.dataset.scrollWidth + 'px';
	              }
	            },
	            afterLeave: function afterLeave(el) {
	              (0, _dom.removeClass)(el, 'horizontal-collapse-transition');
	              if ((0, _dom.hasClass)(el, 'el-menu--collapse')) {
	                el.style.width = el.dataset.scrollWidth + 'px';
	              } else {
	                el.style.width = '64px';
	              }
	              el.style.overflow = el.dataset.oldOverflow;
	            }
	          }
	        };
	        return createElement('transition', data, context.children);
	      }
	    }
	  },

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
	    uniqueOpened: Boolean,
	    router: Boolean,
	    menuTrigger: {
	      type: String,
	      default: 'hover'
	    },
	    collapse: Boolean,
	    backgroundColor: String,
	    textColor: String,
	    activeTextColor: String
	  },
	  data: function data() {
	    return {
	      activeIndex: this.defaultActive,
	      openedMenus: this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [],
	      items: {},
	      submenus: {}
	    };
	  },

	  computed: {
	    hoverBackground: function hoverBackground() {
	      return this.backgroundColor ? this.mixColor(this.backgroundColor, 0.2) : '';
	    }
	  },
	  watch: {
	    defaultActive: function defaultActive(value) {
	      var item = this.items[value];
	      if (item) {
	        this.activeIndex = item.index;
	        this.initOpenedMenu();
	      } else {
	        this.activeIndex = '';
	      }
	    },
	    defaultOpeneds: function defaultOpeneds(value) {
	      this.openedMenus = value;
	    },
	    collapse: function collapse(value) {
	      if (value) this.openedMenus = [];
	    }
	  },
	  methods: {
	    getColorChannels: function getColorChannels(color) {
	      color = color.replace('#', '');
	      if (/^[1-9a-fA-F]{3}$/.test(color)) {
	        color = color.split('');
	        for (var i = 2; i >= 0; i--) {
	          color.splice(i, 0, color[i]);
	        }
	        color = color.join('');
	      }
	      if (/^[1-9a-fA-F]{6}$/.test(color)) {
	        return {
	          red: parseInt(color.slice(0, 2), 16),
	          green: parseInt(color.slice(2, 4), 16),
	          blue: parseInt(color.slice(4, 6), 16)
	        };
	      } else {
	        return {
	          red: 255,
	          green: 255,
	          blue: 255
	        };
	      }
	    },
	    mixColor: function mixColor(color, percent) {
	      var _getColorChannels = this.getColorChannels(color),
	          red = _getColorChannels.red,
	          green = _getColorChannels.green,
	          blue = _getColorChannels.blue;

	      if (percent > 0) {
	        // shade given color
	        red *= 1 - percent;
	        green *= 1 - percent;
	        blue *= 1 - percent;
	      } else {
	        // tint given color
	        red += (255 - red) * percent;
	        green += (255 - green) * percent;
	        blue += (255 - blue) * percent;
	      }
	      return 'rgb(' + Math.round(red) + ', ' + Math.round(green) + ', ' + Math.round(blue) + ')';
	    },
	    addItem: function addItem(item) {
	      this.$set(this.items, item.index, item);
	    },
	    removeItem: function removeItem(item) {
	      delete this.items[item.index];
	    },
	    addSubmenu: function addSubmenu(item) {
	      this.$set(this.submenus, item.index, item);
	    },
	    removeSubmenu: function removeSubmenu(item) {
	      delete this.submenus[item.index];
	    },
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
	    closeMenu: function closeMenu(index) {
	      this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
	    },
	    handleSubmenuClick: function handleSubmenuClick(submenu) {
	      var index = submenu.index,
	          indexPath = submenu.indexPath;

	      var isOpened = this.openedMenus.indexOf(index) !== -1;

	      if (isOpened) {
	        this.closeMenu(index);
	        this.$emit('close', index, indexPath);
	      } else {
	        this.openMenu(index, indexPath);
	        this.$emit('open', index, indexPath);
	      }
	    },
	    handleItemClick: function handleItemClick(item) {
	      var index = item.index,
	          indexPath = item.indexPath;

	      this.activeIndex = item.index;
	      this.$emit('select', index, indexPath, item);

	      if (this.mode === 'horizontal' || this.collapse) {
	        this.openedMenus = [];
	      }

	      if (this.router) {
	        this.routeToItem(item);
	      }
	    },

	    // 初始化展开菜单
	    initOpenedMenu: function initOpenedMenu() {
	      var _this = this;

	      var index = this.activeIndex;
	      var activeItem = this.items[index];
	      if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

	      var indexPath = activeItem.indexPath;

	      // 展开该菜单项的路径上所有子菜单
	      indexPath.forEach(function (index) {
	        var submenu = _this.submenus[index];
	        submenu && _this.openMenu(index, submenu.indexPath);
	      });
	    },
	    routeToItem: function routeToItem(item) {
	      var route = item.route || item.index;
	      try {
	        this.$router.push(route);
	      } catch (e) {
	        console.error(e);
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.initOpenedMenu();
	    this.$on('item-click', this.handleItemClick);
	    this.$on('submenu-click', this.handleSubmenuClick);
	    if (this.mode === 'horizontal') {
	      new _ariaMenubar2.default(this.$el); // eslint-disable-line
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

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _ariaMenuitem = __webpack_require__(208);

	var _ariaMenuitem2 = _interopRequireDefault(_ariaMenuitem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Menu = function Menu(domNode) {
	  this.domNode = domNode;
	  this.init();
	};

	Menu.prototype.init = function () {
	  var menuChildren = this.domNode.childNodes;
	  [].filter.call(menuChildren, function (child) {
	    return child.nodeType === 1;
	  }).forEach(function (child) {
	    new _ariaMenuitem2.default(child); // eslint-disable-line
	  });
	};
	exports.default = Menu;

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _ariaUtils = __webpack_require__(209);

	var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

	var _ariaSubmenu = __webpack_require__(210);

	var _ariaSubmenu2 = _interopRequireDefault(_ariaSubmenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MenuItem = function MenuItem(domNode) {
	  this.domNode = domNode;
	  this.submenu = null;
	  this.init();
	};

	MenuItem.prototype.init = function () {
	  this.domNode.setAttribute('tabindex', '0');
	  var menuChild = this.domNode.querySelector('.el-menu');
	  if (menuChild) {
	    this.submenu = new _ariaSubmenu2.default(this, menuChild);
	  }
	  this.addListeners();
	};

	MenuItem.prototype.addListeners = function () {
	  var _this = this;

	  var keys = _ariaUtils2.default.keys;
	  this.domNode.addEventListener('keydown', function (event) {
	    var prevDef = false;
	    switch (event.keyCode) {
	      case keys.down:
	        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseenter');
	        _this.submenu.gotoSubIndex(0);
	        prevDef = true;
	        break;
	      case keys.up:
	        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseenter');
	        _this.submenu.gotoSubIndex(_this.submenu.subMenuItems.length - 1);
	        prevDef = true;
	        break;
	      case keys.tab:
	        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseleave');
	        break;
	      case keys.enter:
	      case keys.space:
	        prevDef = true;
	        event.currentTarget.click();
	        break;
	    }
	    if (prevDef) {
	      event.preventDefault();
	    }
	  });
	};

	exports.default = MenuItem;

/***/ },

/***/ 209:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var aria = aria || {};

	aria.Utils = aria.Utils || {};

	/**
	 * @desc Set focus on descendant nodes until the first focusable element is
	 *       found.
	 * @param element
	 *          DOM node for which to find the first focusable descendant.
	 * @returns
	 *  true if a focusable element is found and focus is set.
	 */
	aria.Utils.focusFirstDescendant = function (element) {
	  for (var i = 0; i < element.childNodes.length; i++) {
	    var child = element.childNodes[i];
	    if (aria.Utils.attemptFocus(child) || aria.Utils.focusFirstDescendant(child)) {
	      return true;
	    }
	  }
	  return false;
	};

	/**
	 * @desc Find the last descendant node that is focusable.
	 * @param element
	 *          DOM node for which to find the last focusable descendant.
	 * @returns
	 *  true if a focusable element is found and focus is set.
	 */

	aria.Utils.focusLastDescendant = function (element) {
	  for (var i = element.childNodes.length - 1; i >= 0; i--) {
	    var child = element.childNodes[i];
	    if (aria.Utils.attemptFocus(child) || aria.Utils.focusLastDescendant(child)) {
	      return true;
	    }
	  }
	  return false;
	};

	/**
	 * @desc Set Attempt to set focus on the current node.
	 * @param element
	 *          The node to attempt to focus on.
	 * @returns
	 *  true if element is focused.
	 */
	aria.Utils.attemptFocus = function (element) {
	  if (!aria.Utils.isFocusable(element)) {
	    return false;
	  }
	  aria.Utils.IgnoreUtilFocusChanges = true;
	  try {
	    element.focus();
	  } catch (e) {}
	  aria.Utils.IgnoreUtilFocusChanges = false;
	  return document.activeElement === element;
	};

	aria.Utils.isFocusable = function (element) {
	  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) {
	    return true;
	  }

	  if (element.disabled) {
	    return false;
	  }

	  switch (element.nodeName) {
	    case 'A':
	      return !!element.href && element.rel !== 'ignore';
	    case 'INPUT':
	      return element.type !== 'hidden' && element.type !== 'file';
	    case 'BUTTON':
	    case 'SELECT':
	    case 'TEXTAREA':
	      return true;
	    default:
	      return false;
	  }
	};

	/**
	 * 触发一个事件
	 * mouseenter, mouseleave, mouseover, keyup, change, click 等
	 * @param  {Element} elm
	 * @param  {String} name
	 * @param  {*} opts
	 */
	aria.Utils.triggerEvent = function (elm, name) {
	  var eventName = void 0;

	  if (/^mouse|click/.test(name)) {
	    eventName = 'MouseEvents';
	  } else if (/^key/.test(name)) {
	    eventName = 'KeyboardEvent';
	  } else {
	    eventName = 'HTMLEvents';
	  }
	  var evt = document.createEvent(eventName);

	  for (var _len = arguments.length, opts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    opts[_key - 2] = arguments[_key];
	  }

	  evt.initEvent.apply(evt, [name].concat(opts));
	  elm.dispatchEvent ? elm.dispatchEvent(evt) : elm.fireEvent('on' + name, evt);

	  return elm;
	};

	aria.Utils.keys = {
	  tab: 9,
	  enter: 13,
	  space: 32,
	  left: 37,
	  up: 38,
	  right: 39,
	  down: 40
	};

	exports.default = aria.Utils;

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _ariaUtils = __webpack_require__(209);

	var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SubMenu = function SubMenu(parent, domNode) {
	  this.domNode = domNode;
	  this.parent = parent;
	  this.subMenuItems = [];
	  this.subIndex = 0;
	  this.init();
	};

	SubMenu.prototype.init = function () {
	  this.subMenuItems = this.domNode.querySelectorAll('li');
	  this.addListeners();
	};

	SubMenu.prototype.gotoSubIndex = function (idx) {
	  if (idx === this.subMenuItems.length) {
	    idx = 0;
	  } else if (idx < 0) {
	    idx = this.subMenuItems.length - 1;
	  }
	  this.subMenuItems[idx].focus();
	  this.subIndex = idx;
	};

	SubMenu.prototype.addListeners = function () {
	  var _this = this;

	  var keys = _ariaUtils2.default.keys;
	  var parentNode = this.parent.domNode;
	  Array.prototype.forEach.call(this.subMenuItems, function (el) {
	    el.addEventListener('keydown', function (event) {
	      var prevDef = false;
	      switch (event.keyCode) {
	        case keys.down:
	          _this.gotoSubIndex(_this.subIndex + 1);
	          prevDef = true;
	          break;
	        case keys.up:
	          _this.gotoSubIndex(_this.subIndex - 1);
	          prevDef = true;
	          break;
	        case keys.tab:
	          _ariaUtils2.default.triggerEvent(parentNode, 'mouseleave');
	          break;
	        case keys.enter:
	        case keys.space:
	          prevDef = true;
	          event.currentTarget.click();
	          break;
	      }
	      if (prevDef) {
	        event.preventDefault();
	        event.stopPropagation();
	      }
	      return false;
	    });
	  });
	};

	exports.default = SubMenu;

/***/ },

/***/ 211:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('el-menu-collapse-transition', [_c('ul', {
	    key: +_vm.collapse,
	    staticClass: "el-menu",
	    class: {
	      'el-menu--horizontal': _vm.mode === 'horizontal',
	        'el-menu--collapse': _vm.collapse
	    },
	    style: ({
	      backgroundColor: _vm.backgroundColor || ''
	    }),
	    attrs: {
	      "role": "menubar"
	    }
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }

/******/ });