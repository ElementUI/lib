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

	module.exports = __webpack_require__(262);


/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	var ElTabs = __webpack_require__(263);

	/* istanbul ignore next */
	ElTabs.install = function (Vue) {
	  Vue.component(ElTabs.name, ElTabs);
	};

	module.exports = ElTabs;

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(264)
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

/***/ 264:
/***/ function(module, exports) {

	
	module.exports = {
	  name: 'el-tabs',

	  props: {
	    type: String,
	    tabPosition: String,
	    activeName: String,
	    closable: false,
	    tabWidth: 0
	  },

	  data: function data() {
	    return {
	      children: null,
	      activeTab: null,
	      currentName: 0
	    };
	  },


	  watch: {
	    activeName: {
	      handler: function handler(val) {
	        this.currentName = val;
	      }
	    }
	  },

	  methods: {
	    handleTabRemove: function handleTabRemove(tab, event) {
	      event.stopPropagation();
	      var tabs = this.$children;

	      var index = tabs.indexOf(tab);
	      tab.$destroy(true);

	      if (tab.index === this.currentName) {
	        var nextChild = tabs[index];
	        var prevChild = tabs[index - 1];

	        this.currentName = nextChild ? nextChild.index : prevChild ? prevChild.index : '-1';
	      }
	      this.$emit('tab-remove', tab);
	      this.$forceUpdate();
	    },
	    handleTabClick: function handleTabClick(tab, event) {
	      this.currentName = tab.index;
	      this.$emit('tab-click', tab, event);
	    },
	    calcBarStyle: function calcBarStyle() {
	      var _this = this;

	      if (this.type || !this.$refs.tabs) return {};
	      var style = {};
	      var offset = 0;
	      var tabWidth = 0;

	      this.$children.every(function (panel, index) {
	        var $el = _this.$refs.tabs[index];
	        if (!$el) {
	          return false;
	        }
	        if (panel.index !== _this.currentName) {
	          offset += $el.clientWidth;
	          return true;
	        } else {
	          tabWidth = $el.clientWidth;
	          return false;
	        }
	      });

	      style.width = tabWidth + 'px';
	      style.transform = 'translateX(' + offset + 'px)';

	      return style;
	    }
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    this.$nextTick(function () {
	      _this2.currentName = _this2.activeName || _this2.$children[0].index || '1';
	    });
	  },
	  render: function render(h) {
	    var type = this.type;
	    var closable = this.closable;
	    var handleTabRemove = this.handleTabRemove;
	    var handleTabClick = this.handleTabClick;
	    var currentName = this.currentName;


	    var barStyle = this.calcBarStyle();
	    var activeBar = !type ? h(
	      'div',
	      { 'class': 'el-tabs__active-bar', style: barStyle },
	      []
	    ) : null;

	    var tabs = this.$children.map(function (tab, index) {
	      var btnClose = h('span', {
	        class: {
	          'el-icon-close': true
	        },
	        on: { click: function click(ev) {
	            handleTabRemove(tab, ev);
	          } }
	      });
	      var _tab = h('div', {
	        class: {
	          'el-tabs__item': true,
	          'is-active': currentName === tab.index,
	          'is-disabled': tab.disabled,
	          'is-closable': closable
	        },
	        ref: 'tabs',
	        refInFor: true,
	        on: { click: function click(ev) {
	            handleTabClick(tab, ev);
	          } }
	      }, [tab.label, closable ? btnClose : null, index === 0 ? activeBar : null]);
	      return _tab;
	    });
	    return h(
	      'div',
	      { 'class': {
	          'el-tabs': true,
	          'el-tabs--card': type === 'card',
	          'el-tabs--border-card': type === 'border-card'
	        } },
	      [h(
	        'div',
	        { 'class': 'el-tabs__header' },
	        [tabs]
	      ), h(
	        'div',
	        { 'class': 'el-tabs__content' },
	        [this.$slots.default]
	      )]
	    );
	  }
	};

/***/ }

/******/ });