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

	module.exports = __webpack_require__(283);


/***/ },

/***/ 152:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/merge");

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	var Tree = __webpack_require__(284);

	/* istanbul ignore next */
	Tree.install = function (Vue) {
	  Vue.component(Tree.name, Tree);
	};

	module.exports = Tree;

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(285)

	/* template */
	var __vue_template__ = __webpack_require__(292)
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

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _tree = __webpack_require__(286);

	var _tree2 = _interopRequireDefault(_tree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-tree',

	  props: {
	    data: {
	      type: Array
	    },
	    renderContent: Function,
	    showCheckbox: {
	      type: Boolean,
	      default: false
	    },
	    props: {
	      default: function _default() {
	        return {
	          children: 'children',
	          label: 'label',
	          icon: 'icon'
	        };
	      }
	    },
	    lazy: {
	      type: Boolean,
	      default: false
	    },
	    highlightCurrent: Boolean,
	    load: {
	      type: Function
	    }
	  },

	  created: function created() {
	    this.$isTree = true;

	    this.tree = new _tree2.default({
	      data: this.data,
	      lazy: this.lazy,
	      props: this.props,
	      load: this.load
	    });
	  },
	  data: function data() {
	    return {
	      tree: {},
	      currentNode: null
	    };
	  },


	  components: {
	    ElTreeNode: __webpack_require__(288)
	  },

	  computed: {
	    children: {
	      set: function set(value) {
	        this.data = value;
	      },
	      get: function get() {
	        return this.data;
	      }
	    }
	  },

	  watch: {
	    data: function data(newVal) {
	      this.tree.root.setData(newVal);
	    }
	  },

	  methods: {
	    getCheckedNodes: function getCheckedNodes(leafOnly) {
	      return this.tree.getCheckedNodes(leafOnly);
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

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _node = __webpack_require__(287);

	var _node2 = _interopRequireDefault(_node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tree = function () {
	  function Tree(options) {
	    var _this = this;

	    _classCallCheck(this, Tree);

	    for (var option in options) {
	      if (options.hasOwnProperty(option)) {
	        this[option] = options[option];
	      }
	    }

	    this.root = new _node2.default({
	      data: this.data,
	      lazy: this.lazy,
	      props: this.props,
	      load: this.load
	    });

	    if (this.lazy && this.load) {
	      var loadFn = this.load;
	      loadFn(this.root, function (data) {
	        _this.root.doCreateChildren(data);
	      });
	    }
	  }

	  Tree.prototype.getCheckedNodes = function getCheckedNodes(leafOnly) {
	    var checkedNodes = [];
	    var walk = function walk(node) {
	      var childNodes = node.root ? node.root.childNodes : node.childNodes;

	      childNodes.forEach(function (child) {
	        if (!leafOnly && child.checked || leafOnly && child.isLeaf && child.checked) {
	          checkedNodes.push(child.data);
	        }

	        walk(child);
	      });
	    };

	    walk(this);

	    return checkedNodes;
	  };

	  return Tree;
	}();

	exports.default = Tree;
	;

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _merge = __webpack_require__(152);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var nodeIdSeed = 0;


	var reInitChecked = function reInitChecked(node) {
	  var siblings = node.childNodes;

	  var all = true;
	  var none = true;

	  for (var i = 0, j = siblings.length; i < j; i++) {
	    var sibling = siblings[i];
	    if (sibling.checked !== true || sibling.indeterminate) {
	      all = false;
	    }
	    if (sibling.checked !== false || sibling.indeterminate) {
	      none = false;
	    }
	  }

	  if (all) {
	    node.setChecked(true);
	  } else if (!all && !none) {
	    node.setChecked('half');
	  } else if (none) {
	    node.setChecked(false);
	  }
	};

	var getPropertyFromData = function getPropertyFromData(node, prop) {
	  var props = node.props;
	  var data = node.data || {};
	  var config = props[prop];

	  if (typeof config === 'function') {
	    return config(data, node);
	  } else if (typeof config === 'string') {
	    return data[config];
	  } else if (typeof config === 'undefined') {
	    return '';
	  }
	};

	var Node = function () {
	  function Node(options) {
	    _classCallCheck(this, Node);

	    this.id = nodeIdSeed++;
	    this.text = null;
	    this.checked = false;
	    this.indeterminate = false;
	    this.data = null;
	    this.expanded = false;
	    this.props = null;
	    this.parent = null;
	    this.lazy = false;

	    for (var name in options) {
	      if (options.hasOwnProperty(name)) {
	        this[name] = options[name];
	      }
	    }

	    // internal
	    this.level = -1;
	    this.loaded = false;
	    this.childNodes = [];
	    this.loading = false;

	    if (this.parent) {
	      this.level = this.parent.level + 1;
	    }

	    if (this.lazy !== true && this.data) {
	      this.setData(this.data);
	    }
	  }

	  Node.prototype.setData = function setData(data) {
	    if (!Array.isArray(data) && !data.$treeNodeId) {
	      Object.defineProperty(data, '$treeNodeId', {
	        value: this.id,
	        enumerable: false,
	        configurable: false,
	        writable: false
	      });
	    }

	    this.data = data;
	    this.childNodes = [];

	    var children = void 0;
	    if (this.level === -1 && this.data instanceof Array) {
	      children = this.data;
	    } else {
	      children = getPropertyFromData(this, 'children') || [];
	    }

	    for (var i = 0, j = children.length; i < j; i++) {
	      this.insertChild({ data: children[i] });
	    }
	  };

	  Node.prototype.insertChild = function insertChild(child, index) {
	    if (!child) throw new Error('insertChild error: child is required.');

	    if (!(child instanceof Node)) {
	      (0, _merge2.default)(child, {
	        parent: this,
	        lazy: this.lazy,
	        load: this.load,
	        props: this.props
	      });
	      child = new Node(child);
	    }

	    child.level = this.level + 1;

	    if (typeof index === 'undefined') {
	      this.childNodes.push(child);
	    } else {
	      this.childNodes.splice(index, 0, child);
	    }
	  };

	  Node.prototype.removeChild = function removeChild(child) {
	    var index = this.childNodes.indexOf(child);

	    if (index > -1) {
	      child.parent = null;
	      this.childNodes.splice(index, 1);
	    }
	  };

	  Node.prototype.removeChildByData = function removeChildByData(data) {
	    var targetNode = null;
	    this.childNodes.forEach(function (node) {
	      if (node.data === data) {
	        targetNode = node;
	      }
	    });

	    if (targetNode) {
	      this.removeChild(targetNode);
	    }
	  };

	  Node.prototype.expand = function expand(callback) {
	    if (this.shouldLoadData()) {
	      this.loadData(function (data) {
	        if (data instanceof Array) {
	          callback();
	        }
	      });
	    } else {
	      this.expanded = true;
	      if (callback) {
	        callback();
	      }
	    }
	  };

	  Node.prototype.doCreateChildren = function doCreateChildren(array) {
	    var _this = this;

	    var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    array.forEach(function (item) {
	      _this.insertChild((0, _merge2.default)({ data: item }, defaultProps));
	    });
	  };

	  Node.prototype.collapse = function collapse() {
	    this.expanded = false;
	  };

	  Node.prototype.shouldLoadData = function shouldLoadData() {
	    return this.lazy === true && this.load && !this.loaded;
	  };

	  Node.prototype.hasChild = function hasChild() {
	    var childNodes = this.childNodes;
	    if (!this.lazy || this.lazy === true && this.loaded === true) {
	      return childNodes && childNodes.length > 0;
	    }
	    return true;
	  };

	  Node.prototype.setChecked = function setChecked(value, deep) {
	    var _this2 = this;

	    this.indeterminate = value === 'half';
	    this.checked = value === true;

	    var handleDeep = function handleDeep() {
	      if (deep) {
	        var childNodes = _this2.childNodes;
	        for (var i = 0, j = childNodes.length; i < j; i++) {
	          var child = childNodes[i];
	          child.setChecked(value !== false, deep);
	        }
	      }
	    };

	    if (this.shouldLoadData()) {
	      // Only work on lazy load data.
	      this.loadData(function () {
	        handleDeep();
	      }, {
	        checked: value !== false
	      });
	    } else {
	      handleDeep();
	    }

	    var parent = this.parent;
	    if (parent.level === -1) return;

	    reInitChecked(parent);
	  };

	  Node.prototype.getChildren = function getChildren() {
	    // this is data
	    var data = this.data;
	    if (!data) return null;

	    var props = this.props;
	    var children = 'children';
	    if (props) {
	      children = props.children || 'children';
	    }

	    if (data[children] === undefined) {
	      data[children] = null;
	    }

	    return data[children];
	  };

	  Node.prototype.updateChildren = function updateChildren() {
	    var _this3 = this;

	    var newData = this.getChildren() || [];
	    var oldData = this.childNodes.map(function (node) {
	      return node.data;
	    });

	    var newDataMap = {};
	    var newNodes = [];

	    newData.forEach(function (item, index) {
	      if (item.$treeNodeId) {
	        newDataMap[item.$treeNodeId] = { index: index, data: item };
	      } else {
	        newNodes.push({ index: index, data: item });
	      }
	    });

	    oldData.forEach(function (item) {
	      if (!newDataMap[item.$treeNodeId]) _this3.removeChildByData(item);
	    });
	    newNodes.forEach(function (_ref) {
	      var index = _ref.index;
	      var data = _ref.data;
	      return _this3.insertChild({ data: data }, index);
	    });
	  };

	  Node.prototype.loadData = function loadData(callback) {
	    var _this4 = this;

	    var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (this.lazy === true && this.load && !this.loaded) {
	      this.loading = true;

	      var resolve = function resolve(children) {
	        _this4.loaded = true;
	        _this4.loading = false;
	        _this4.childNodes = [];

	        _this4.doCreateChildren(children, defaultProps);

	        if (callback) {
	          callback.call(_this4, children);
	        }
	      };

	      this.load(this, resolve);
	    } else {
	      if (callback) {
	        callback.call(this);
	      }
	    }
	  };

	  _createClass(Node, [{
	    key: 'label',
	    get: function get() {
	      return getPropertyFromData(this, 'label');
	    }
	  }, {
	    key: 'icon',
	    get: function get() {
	      return getPropertyFromData(this, 'icon');
	    }
	  }, {
	    key: 'isLeaf',
	    get: function get() {
	      return !this.hasChild();
	    }
	  }]);

	  return Node;
	}();

	exports.default = Node;

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(289)

	/* template */
	var __vue_template__ = __webpack_require__(291)
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

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _transition = __webpack_require__(290);

	var _transition2 = _interopRequireDefault(_transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-tree-node',

	  props: {
	    node: {
	      default: function _default() {
	        return {};
	      }
	    },
	    props: {},
	    renderContent: Function
	  },

	  components: {
	    CollapseTransition: _transition2.default,
	    NodeContent: {
	      props: {
	        node: {
	          required: true
	        }
	      },
	      render: function render(h) {
	        var parent = this.$parent;
	        return parent.renderContent ? parent.renderContent.call(parent._renderProxy, h, { _self: parent.$parent.$vnode.context, node: this.node }) : h(
	          'span',
	          { 'class': 'el-tree-node__label' },
	          [this.node.label]
	        );
	      }
	    }
	  },

	  data: function data() {
	    return {
	      $tree: null,
	      expanded: false,
	      childNodeRendered: false,
	      showCheckbox: false,
	      oldChecked: null,
	      oldIndeterminate: null
	    };
	  },


	  watch: {
	    'node.indeterminate': function nodeIndeterminate(val) {
	      this.handleSelectChange(this.node.checked, val);
	    },
	    'node.checked': function nodeChecked(val) {
	      this.handleSelectChange(val, this.node.indeterminate);
	    }
	  },

	  methods: {
	    handleSelectChange: function handleSelectChange(checked, indeterminate) {
	      if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
	        this.$tree.$emit('check-change', this.node.data, checked, indeterminate);
	      }
	      this.oldChecked = checked;
	      this.indeterminate = indeterminate;
	    },
	    handleClick: function handleClick() {
	      this.$tree.currentNode = this;
	    },
	    handleExpandIconClick: function handleExpandIconClick(event) {
	      var _this = this;

	      var target = event.target;
	      if (target.tagName.toUpperCase() !== 'DIV' && target.parentNode.nodeName.toUpperCase() !== 'DIV' || target.nodeName.toUpperCase() === 'LABEL') return;
	      if (this.expanded) {
	        this.node.collapse();
	        this.expanded = false;
	      } else {
	        this.node.expand(function () {
	          _this.expanded = true;
	          _this.childNodeRendered = true;
	        });
	      }
	      this.$tree.$emit('node-click', this.node.data, this.node, this);
	    },
	    handleUserClick: function handleUserClick() {
	      if (this.node.indeterminate) {
	        this.node.setChecked(this.node.checked, true);
	      }
	    },
	    handleCheckChange: function handleCheckChange(ev) {
	      if (!this.node.indeterminate) {
	        this.node.setChecked(ev.target.checked, true);
	      }
	    }
	  },

	  created: function created() {
	    var _this2 = this;

	    var parent = this.$parent;

	    if (parent.$isTree) {
	      this.$tree = parent;
	    } else {
	      this.$tree = parent.$tree;
	    }

	    var tree = this.$tree;
	    var props = this.props || {};
	    var childrenKey = props['children'] || 'children';

	    this.$watch('node.data.' + childrenKey, function () {
	      _this2.node.updateChildren();
	    });

	    if (!tree) {
	      console.warn('Can not find node\'s tree.');
	    }

	    this.showCheckbox = tree.showCheckbox;
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
	//
	//

/***/ },

/***/ 290:
/***/ function(module, exports) {

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transition = function () {
	  function Transition() {
	    _classCallCheck(this, Transition);
	  }

	  Transition.prototype.beforeEnter = function beforeEnter(el) {
	    el.dataset.oldPaddingTop = el.style.paddingTop;
	    el.dataset.oldPaddingBottom = el.style.paddingBottom;
	    el.style.height = '0';
	    el.style.paddingTop = 0;
	    el.style.paddingBottom = 0;
	  };

	  Transition.prototype.enter = function enter(el) {
	    el.dataset.oldOverflow = el.style.overflow;

	    el.style.display = 'block';
	    if (el.scrollHeight !== 0) {
	      el.style.height = el.scrollHeight + 'px';
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    } else {
	      el.style.height = '';
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    }

	    el.style.overflow = 'hidden';
	  };

	  Transition.prototype.afterEnter = function afterEnter(el) {
	    el.style.display = '';
	    el.style.height = '';
	    el.style.overflow = el.dataset.oldOverflow;
	  };

	  Transition.prototype.beforeLeave = function beforeLeave(el) {
	    el.dataset.oldPaddingTop = el.style.paddingTop;
	    el.dataset.oldPaddingBottom = el.style.paddingBottom;
	    el.dataset.oldOverflow = el.style.overflow;

	    el.style.display = 'block';
	    if (el.scrollHeight !== 0) {
	      el.style.height = el.scrollHeight + 'px';
	    }
	    el.style.overflow = 'hidden';
	  };

	  Transition.prototype.leave = function leave(el) {
	    if (el.scrollHeight !== 0) {
	      setTimeout(function () {
	        el.style.height = 0;
	        el.style.paddingTop = 0;
	        el.style.paddingBottom = 0;
	      });
	    }
	  };

	  Transition.prototype.afterLeave = function afterLeave(el) {
	    el.style.display = el.style.height = '';
	    el.style.overflow = el.dataset.oldOverflow;
	    el.style.paddingTop = el.dataset.oldPaddingTop;
	    el.style.paddingBottom = el.dataset.oldPaddingBottom;
	  };

	  return Transition;
	}();

	exports.default = {
	  functional: true,
	  render: function render(h, _ref) {
	    var children = _ref.children;

	    var data = {
	      on: new Transition()
	    };

	    children = children.map(function (item) {
	      item.data.class = ['collapse-transition'];
	      return item;
	    });

	    return h('transition', data, children);
	  }
	};

/***/ },

/***/ 291:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-tree-node",
	    class: {
	      expanded: childNodeRendered && expanded, 'is-current': $tree.currentNode === _self
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        handleClick($event)
	      }
	    }
	  }, [_h('div', {
	    staticClass: "el-tree-node__content",
	    style: ({
	      'padding-left': node.level * 16 + 'px'
	    }),
	    on: {
	      "click": handleExpandIconClick
	    }
	  }, [_h('span', {
	    staticClass: "el-tree-node__expand-icon",
	    class: {
	      'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded
	    }
	  }), (showCheckbox) ? _h('el-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (node.checked),
	      expression: "node.checked"
	    }],
	    attrs: {
	      "indeterminate": node.indeterminate
	    },
	    domProps: {
	      "value": (node.checked)
	    },
	    on: {
	      "change": handleCheckChange,
	      "input": function($event) {
	        node.checked = $event
	      }
	    },
	    nativeOn: {
	      "click": function($event) {
	        handleUserClick($event)
	      }
	    }
	  }) : _e(), (node.loading) ? _h('span', {
	    staticClass: "el-tree-node__icon el-icon-loading"
	  }) : _e(), _h('node-content', {
	    attrs: {
	      "node": node
	    }
	  })]), _h('collapse-transition', [_h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (expanded),
	      expression: "expanded"
	    }],
	    staticClass: "el-tree-node__children"
	  }, [_l((node.childNodes), function(child) {
	    return _h('el-tree-node', {
	      attrs: {
	        "render-content": renderContent,
	        "node": child
	      }
	    })
	  })])])])
	}},staticRenderFns: []}

/***/ },

/***/ 292:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-tree",
	    class: {
	      'el-tree--highlight-current': highlightCurrent
	    }
	  }, [_l((tree.root.childNodes), function(child) {
	    return _h('el-tree-node', {
	      attrs: {
	        "node": child,
	        "props": props,
	        "render-content": renderContent
	      }
	    })
	  })])
	}},staticRenderFns: []}

/***/ }

/******/ });