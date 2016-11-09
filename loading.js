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

	module.exports = __webpack_require__(119);


/***/ },

/***/ 52:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _directive = __webpack_require__(120);

	var _directive2 = _interopRequireDefault(_directive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _directive2.default;

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	var _vue = __webpack_require__(52);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Spinner = _vue2.default.extend(__webpack_require__(121));

	exports.install = function (Vue) {
	  var toggleLoading = function toggleLoading(el, binding) {
	    if (binding.value) {
	      Vue.nextTick(function () {
	        if (binding.modifiers.fullscreen) {
	          el.originalPosition = document.body.style.position;
	          el.originalOverflow = document.body.style.overflow;

	          ['top', 'right', 'bottom', 'left'].forEach(function (property) {
	            el.maskStyle[property] = '0';
	          });
	          el.maskStyle.position = 'fixed';
	          el.spinnerStyle.position = 'fixed';

	          insertDom(document.body, el, binding);
	        } else {
	          if (binding.modifiers.body) {
	            el.originalPosition = document.body.style.position;

	            ['top', 'left'].forEach(function (property) {
	              var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
	              el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
	            });
	            ['height', 'width'].forEach(function (property) {
	              el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
	            });

	            insertDom(document.body, el, binding);
	          } else {
	            el.originalPosition = el.style.position;

	            ['top', 'right', 'bottom', 'left'].forEach(function (property) {
	              el.maskStyle[property] = '0';
	            });

	            insertDom(el, el, binding);
	          }
	        }
	      });
	    } else {
	      if (el.domVisible) {
	        el.mask.style.display = 'none';
	        el.spinner.style.display = 'none';
	        el.domVisible = false;

	        if (binding.modifiers.fullscreen) {
	          document.body.style.overflow = el.originalOverflow;
	        }
	        if (binding.modifiers.fullscreen || binding.modifiers.body) {
	          document.body.style.position = el.originalPosition;
	        } else {
	          el.style.position = el.originalPosition;
	        }
	      }
	    }
	  };
	  var insertDom = function insertDom(parent, directive, binding) {
	    if (!directive.domVisible) {
	      Object.keys(directive.maskStyle).forEach(function (property) {
	        directive.mask.style[property] = directive.maskStyle[property];
	      });

	      Object.keys(directive.spinnerStyle).forEach(function (property) {
	        directive.spinner.style[property] = directive.spinnerStyle[property];
	      });

	      if (directive.originalPosition !== 'absolute') {
	        parent.style.position = 'relative';
	      }
	      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
	        parent.style.overflow = 'hidden';
	      }
	      directive.mask.style.display = 'block';
	      directive.spinner.style.display = 'inline-block';
	      directive.domVisible = true;

	      parent.appendChild(directive.mask);
	      directive.mask.appendChild(directive.spinner);
	      directive.domInserted = true;
	    }
	  };

	  Vue.directive('loading', {
	    bind: function bind(el, binding) {
	      el.mask = document.createElement('div');
	      el.mask.className = 'el-loading-mask';
	      el.maskStyle = {
	        position: 'absolute',
	        zIndex: '10000',
	        backgroundColor: 'rgba(255, 255, 255, .9)',
	        margin: '0'
	      };

	      var spinner = new Spinner({
	        data: {
	          text: el.getAttribute('element-loading-text'),
	          fullScreen: !!binding.modifiers.fullscreen
	        }
	      });
	      spinner.$mount(el.mask);
	      el.spinner = spinner.$el;
	      el.spinnerStyle = {
	        position: 'absolute'
	      };
	      toggleLoading(el, binding);
	    },

	    update: function update(el, binding) {
	      if (binding.oldValue !== binding.value) {
	        toggleLoading(el, binding);
	      }
	    },

	    unbind: function unbind(el, binding) {
	      if (el.domInserted) {
	        if (binding.modifiers.fullscreen || binding.modifiers.body) {
	          document.body.removeChild(el.mask);
	          el.mask.removeChild(el.spinner);
	        } else {
	          el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
	          el.spinner && el.spinner.parentNode && el.spinner.parentNode.removeChild(el.spinner);
	        }
	      }
	    }
	  });
	};

/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(122)

	/* template */
	var __vue_template__ = __webpack_require__(123)
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

/***/ 122:
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

	exports.default = {
	  data: function data() {
	    return {
	      text: null,
	      fullScreen: false
	    };
	  }
	};

/***/ },

/***/ 123:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-loading-spinner",
	    class: {
	      'is-full-screen': fullScreen
	    }
	  }, [_h('svg', {
	    staticClass: "circular",
	    attrs: {
	      "viewBox": "25 25 50 50"
	    }
	  }, [_h('circle', {
	    staticClass: "path",
	    attrs: {
	      "cx": "50",
	      "cy": "50",
	      "r": "20",
	      "fill": "none"
	    }
	  })]), (text) ? _h('p', {
	    staticClass: "el-loading-text"
	  }, [_s(text)]) : _e()])
	}},staticRenderFns: []}

/***/ }

/******/ });