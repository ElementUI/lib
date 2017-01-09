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

	module.exports = __webpack_require__(65);


/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _collapseItem = __webpack_require__(66);

	var _collapseItem2 = _interopRequireDefault(_collapseItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_collapseItem2.default.install = function (Vue) {
	  Vue.component(_collapseItem2.default.name, _collapseItem2.default);
	};

	exports.default = _collapseItem2.default;

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(67)

	/* template */
	var __vue_template__ = __webpack_require__(69)
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

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _dom = __webpack_require__(68);

	var _emitter = __webpack_require__(13);

	var _emitter2 = _interopRequireDefault(_emitter);

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

	function getTransitionendEvent(el) {
	  var t = void 0;
	  var transitions = {
	    'transition': 'transitionend',
	    'OTransition': 'oTransitionEnd',
	    'MozTransition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd'
	  };

	  for (t in transitions) {
	    if (el.style[t] !== undefined) {
	      return transitions[t];
	    }
	  }
	};

	exports.default = {
	  name: 'ElCollapseItem',

	  componentName: 'ElCollapseItem',

	  mixins: [_emitter2.default],

	  data: function data() {
	    return {
	      contentWrapStyle: {
	        height: 'auto',
	        display: 'block'
	      },
	      contentHeight: 0
	    };
	  },


	  props: {
	    title: String,
	    name: {
	      type: [String, Number],
	      default: function _default() {
	        return this._uid;
	      }
	    }
	  },

	  computed: {
	    isActive: function isActive() {
	      return this.$parent.activeNames.indexOf(this.name) > -1;
	    }
	  },

	  watch: {
	    'isActive': function isActive(value) {
	      value ? this.open() : this.close();
	    }
	  },

	  methods: {
	    open: function open() {
	      var _this = this;

	      var contentWrapElm = this.$refs.contentWrap;
	      var contentHeight = this.contentHeight;

	      contentWrapElm.style.display = 'block';
	      contentWrapElm.style.height = '0';

	      setTimeout(function (_) {
	        contentWrapElm.style.height = contentHeight + 'px';
	        (0, _dom.once)(contentWrapElm, getTransitionendEvent(contentWrapElm), function () {
	          if (!_this.isActive) return;
	          contentWrapElm.style.height = 'auto';
	        });
	      }, 10);
	    },
	    close: function close() {
	      var _this2 = this;

	      var contentWrapElm = this.$refs.contentWrap;
	      var contentElm = this.$refs.content;
	      var contentHeight = contentElm.offsetHeight;

	      this.contentHeight = contentHeight;
	      contentWrapElm.style.height = contentHeight + 'px';

	      setTimeout(function (_) {
	        contentWrapElm.style.height = '0';
	        (0, _dom.once)(contentWrapElm, getTransitionendEvent(contentWrapElm), function () {
	          if (_this2.isActive) return;
	          contentWrapElm.style.display = 'none';
	        });
	      }, 10);
	    },
	    init: function init() {
	      if (!this.isActive) {
	        var contentWrapElm = this.$refs.contentWrap;
	        this.contentHeight = this.$refs.content.offsetHeight;
	        contentWrapElm.style.height = '0';
	        contentWrapElm.style.display = 'none';
	      }
	    },
	    handleHeaderClick: function handleHeaderClick() {
	      this.dispatch('ElCollapse', 'item-click', this);
	    }
	  },

	  mounted: function mounted() {
	    this.init();
	  }
	};

/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/dom");

/***/ },

/***/ 69:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-collapse-item",
	    class: {
	      'is-active': _vm.isActive
	    }
	  }, [_c('div', {
	    staticClass: "el-collapse-item__header",
	    on: {
	      "click": _vm.handleHeaderClick
	    }
	  }, [_c('i', {
	    staticClass: "el-collapse-item__header__arrow el-icon-arrow-right"
	  }), _vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('div', {
	    ref: "contentWrap",
	    staticClass: "el-collapse-item__wrap"
	  }, [_c('div', {
	    ref: "content",
	    staticClass: "el-collapse-item__content"
	  }, [_vm._t("default")], 2)])])
	},staticRenderFns: []}

/***/ }

/******/ });