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

	module.exports = __webpack_require__(154);


/***/ },

/***/ 50:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 81:
/***/ function(module, exports) {

	module.exports = require("vue-popup");

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(155);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _main2.default;

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(50);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuePopup = __webpack_require__(81);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotificationConstructor = _vue2.default.extend(__webpack_require__(156));

	var instance = void 0;
	var instances = [];
	var seed = 1;

	var Notification = function Notification(options) {
	  options = options || {};
	  var userOnClose = options.onClose;
	  var id = 'notification_' + seed++;

	  options.onClose = function () {
	    Notification.close(id, userOnClose);
	  };

	  instance = new NotificationConstructor({
	    data: options
	  });
	  instance.id = id;
	  instance.vm = instance.$mount();
	  document.body.appendChild(instance.vm.$el);
	  instance.vm.visible = true;
	  instance.dom = instance.vm.$el;
	  instance.dom.style.zIndex = _vuePopup.PopupManager.nextZIndex();

	  var offset = options.offset || 0;
	  var topDist = offset;
	  for (var i = 0, len = instances.length; i < len; i++) {
	    topDist += instances[i].$el.offsetHeight + 16;
	  }
	  topDist += 16;
	  instance.top = topDist;
	  instances.push(instance);
	  return instance.vm;
	};

	['success', 'warning', 'info', 'error'].forEach(function (type) {
	  Notification[type] = function (options) {
	    if (typeof options === 'string') {
	      options = {
	        message: options
	      };
	    }
	    options.type = type;
	    return Notification(options);
	  };
	});

	Notification.close = function (id, userOnClose) {
	  var index = void 0;
	  var removedHeight = void 0;
	  for (var i = 0, len = instances.length; i < len; i++) {
	    if (id === instances[i].id) {
	      if (typeof userOnClose === 'function') {
	        userOnClose(instances[i]);
	      }
	      index = i;
	      removedHeight = instances[i].dom.offsetHeight;
	      instances.splice(i, 1);
	      break;
	    }
	  }

	  if (len > 1) {
	    for (i = index; i < len - 1; i++) {
	      instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - removedHeight - 16 + 'px';
	    }
	  }
	};

	exports.default = Notification;

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(157)

	/* template */
	var __vue_template__ = __webpack_require__(158)
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

/***/ 157:
/***/ function(module, exports) {

	'use strict';

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

	var typeMap = {
	  success: 'circle-check',
	  info: 'information',
	  warning: 'warning',
	  error: 'circle-cross'
	};

	exports.default = {
	  data: function data() {
	    return {
	      visible: false,
	      title: '',
	      message: '',
	      duration: 4500,
	      type: '',
	      customClass: '',
	      iconClass: '',
	      onClose: null,
	      closed: false,
	      top: null,
	      timer: null
	    };
	  },


	  computed: {
	    typeClass: function typeClass() {
	      return this.type && typeMap[this.type] ? 'el-icon-' + typeMap[this.type] : '';
	    }
	  },

	  watch: {
	    closed: function closed(newVal) {
	      if (newVal) {
	        this.visible = false;
	        this.$el.addEventListener('transitionend', this.destroyElement);
	      }
	    }
	  },

	  methods: {
	    destroyElement: function destroyElement() {
	      this.$el.removeEventListener('transitionend', this.destroyElement);
	      this.$destroy(true);
	      this.$el.parentNode.removeChild(this.$el);
	    },
	    close: function close() {
	      this.closed = true;
	      if (typeof this.onClose === 'function') {
	        this.onClose();
	      }
	    },
	    clearTimer: function clearTimer() {
	      clearTimeout(this.timer);
	    },
	    startTimer: function startTimer() {
	      var _this = this;

	      if (this.duration > 0) {
	        this.timer = setTimeout(function () {
	          if (!_this.closed) {
	            _this.close();
	          }
	        }, this.duration);
	      }
	    }
	  },

	  mounted: function mounted() {
	    var _this2 = this;

	    if (this.duration > 0) {
	      this.timer = setTimeout(function () {
	        if (!_this2.closed) {
	          _this2.close();
	        }
	      }, this.duration);
	    }
	  }
	};

/***/ },

/***/ 158:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('transition', {
	    attrs: {
	      "name": "el-notification-fade"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-notification",
	    class: _vm.customClass,
	    style: ({
	      top: _vm.top ? _vm.top + 'px' : 'auto'
	    }),
	    on: {
	      "mouseenter": function($event) {
	        _vm.clearTimer()
	      },
	      "mouseleave": function($event) {
	        _vm.startTimer()
	      }
	    }
	  }, [(_vm.type || _vm.iconClass) ? _h('i', {
	    staticClass: "el-notification__icon",
	    class: [_vm.typeClass, _vm.iconClass]
	  }) : _vm._e(), _h('div', {
	    staticClass: "el-notification__group",
	    class: {
	      'is-with-icon': _vm.typeClass || _vm.iconClass
	    }
	  }, [_h('span', [_vm._s(_vm.title)]), _h('p', [_vm._s(_vm.message)]), _h('div', {
	    staticClass: "el-notification__closeBtn el-icon-close",
	    on: {
	      "click": _vm.close
	    }
	  })])])])
	},staticRenderFns: []}

/***/ }

/******/ });