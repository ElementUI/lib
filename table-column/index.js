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

	module.exports = __webpack_require__(259);


/***/ },

/***/ 208:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/tag");

/***/ },

/***/ 252:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/checkbox");

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElTableColumn = __webpack_require__(260);

	/* istanbul ignore next */
	ElTableColumn.install = function (Vue) {
	  Vue.component(ElTableColumn.name, ElTableColumn);
	};

	module.exports = ElTableColumn;

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _checkbox = __webpack_require__(252);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _tag = __webpack_require__(208);

	var _tag2 = _interopRequireDefault(_tag);

	var _objectAssign = __webpack_require__(261);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var columnIdSeed = 1;

	var defaults = {
	  default: {
	    order: ''
	  },
	  selection: {
	    width: 48,
	    minWidth: 48,
	    realWidth: 48,
	    order: ''
	  },
	  index: {
	    width: 48,
	    minWidth: 48,
	    realWidth: 48,
	    order: ''
	  }
	};

	var forced = {
	  selection: {
	    headerTemplate: function headerTemplate(h) {
	      var _this = this;

	      return h(
	        'el-checkbox',
	        {
	          nativeOn: {
	            click: this.toggleAllSelection
	          },
	          domProps: {
	            value: this.isAllSelected
	          },
	          on: {
	            input: function input(value) {
	              _this.$emit('allselectedchange', value);
	            }
	          }
	        },
	        []
	      );
	    },
	    template: function template(h, _ref) {
	      var row = _ref.row;
	      var column = _ref.column;
	      var store = _ref.store;
	      var $index = _ref.$index;

	      return h(
	        'el-checkbox',
	        {
	          domProps: {
	            value: row.$selected
	          },
	          attrs: {
	            disabled: column.selectable ? !column.selectable.call(null, row, $index) : false
	          },
	          on: {
	            input: function input(value) {
	              row.$selected = value;store.commit('rowSelectedChanged', row);
	            }
	          }
	        },
	        []
	      );
	    },
	    sortable: false,
	    resizable: false
	  },
	  index: {
	    // headerTemplate: function(h) { return <div>#</div>; },
	    headerTemplate: function headerTemplate(h, label) {
	      return label || '#';
	    },
	    template: function template(h, _ref2) {
	      var $index = _ref2.$index;

	      return h(
	        'div',
	        null,
	        [$index + 1]
	      );
	    },
	    sortable: false
	  }
	};

	var getDefaultColumn = function getDefaultColumn(type, options) {
	  var column = {};

	  (0, _objectAssign2.default)(column, defaults[type || 'default']);

	  for (var name in options) {
	    if (options.hasOwnProperty(name)) {
	      var value = options[name];
	      if (typeof value !== 'undefined') {
	        column[name] = value;
	      }
	    }
	  }

	  if (!column.minWidth) {
	    column.minWidth = 80;
	  }

	  column.realWidth = column.width || column.minWidth;

	  return column;
	};

	exports.default = {
	  name: 'el-table-column',

	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    label: String,
	    property: String,
	    prop: String,
	    width: {},
	    minWidth: {},
	    template: String,
	    sortable: {
	      type: [Boolean, String],
	      default: false
	    },
	    sortMethod: Function,
	    resizable: {
	      type: Boolean,
	      default: true
	    },
	    align: String,
	    showTooltipWhenOverflow: {
	      type: Boolean,
	      default: false
	    },
	    fixed: [Boolean, String],
	    formatter: Function,
	    selectable: Function,
	    reserveSelection: Boolean,
	    filterMethod: Function,
	    filters: Array,
	    filterMultiple: {
	      type: Boolean,
	      default: true
	    }
	  },

	  render: function render() {},
	  data: function data() {
	    return {
	      isChildColumn: false,
	      columns: []
	    };
	  },
	  beforeCreate: function beforeCreate() {
	    this.row = {};
	    this.column = {};
	    this.$index = 0;
	  },


	  components: {
	    ElCheckbox: _checkbox2.default,
	    ElTag: _tag2.default
	  },

	  computed: {
	    owner: function owner() {
	      var parent = this.$parent;
	      while (parent && !parent.tableId) {
	        parent = parent.$parent;
	      }
	      return parent;
	    }
	  },

	  created: function created() {
	    this.customRender = this.$options.render;
	    this.$options.render = function (h) {
	      return h('div');
	    };

	    var columnId = this.columnId = (this.$parent.tableId || this.$parent.columnId + '_') + 'column_' + columnIdSeed++;

	    var parent = this.$parent;
	    var owner = this.owner;
	    this.isChildColumn = owner !== parent;

	    var type = this.type;

	    var width = this.width;
	    if (width !== undefined) {
	      width = parseInt(width, 10);
	      if (isNaN(width)) {
	        width = null;
	      }
	    }

	    var minWidth = this.minWidth;
	    if (minWidth !== undefined) {
	      minWidth = parseInt(minWidth, 10);
	      if (isNaN(minWidth)) {
	        minWidth = 80;
	      }
	    }

	    var isColumnGroup = false;
	    var template = void 0;

	    var property = this.prop || this.property;
	    if (property) {
	      template = function template(h, _ref3, parent) {
	        var row = _ref3.row;

	        return h(
	          'span',
	          null,
	          [parent.getCellContent(row, property, columnId)]
	        );
	      };
	    }

	    var column = getDefaultColumn(type, {
	      id: columnId,
	      label: this.label,
	      property: property,
	      type: type,
	      template: template,
	      minWidth: minWidth,
	      width: width,
	      isColumnGroup: isColumnGroup,
	      align: this.align ? 'is-' + this.align : null,
	      sortable: this.sortable,
	      sortMethod: this.sortMethod,
	      resizable: this.resizable,
	      showTooltipWhenOverflow: this.showTooltipWhenOverflow,
	      formatter: this.formatter,
	      selectable: this.selectable,
	      reserveSelection: this.reserveSelection,
	      fixed: this.fixed,
	      filterMethod: this.filterMethod,
	      filters: this.filters,
	      filterable: this.filters || this.filterMethod,
	      filterMultiple: this.filterMultiple,
	      filterOpened: false,
	      filteredValue: []
	    });

	    (0, _objectAssign2.default)(column, forced[type] || {});

	    var renderColumn = column.template;
	    var _self = this;

	    column.template = function (h, data) {
	      if (_self.$vnode.data.inlineTemplate) {
	        renderColumn = function renderColumn() {
	          data._staticTrees = _self._staticTrees;
	          data.$options = {};
	          data.$options.staticRenderFns = _self.$options.staticRenderFns;
	          data._renderProxy = _self._renderProxy;
	          data._m = _self._m;

	          return _self.customRender.call(data);
	        };
	      }

	      return _self.showTooltipWhenOverflow ? h(
	        'el-tooltip',
	        {
	          attrs: {
	            effect: this.effect,
	            placement: 'top',
	            disabled: this.tooltipDisabled }
	        },
	        [h(
	          'div',
	          { 'class': 'cell' },
	          [renderColumn(h, data, this._renderProxy)]
	        ), h(
	          'span',
	          { slot: 'content' },
	          [renderColumn(h, data, this._renderProxy)]
	        )]
	      ) : h(
	        'div',
	        { 'class': 'cell' },
	        [renderColumn(h, data, this._renderProxy)]
	      );
	    };

	    this.columnConfig = column;
	  },
	  destroyed: function destroyed() {
	    if (!this.$parent) return;
	    this.owner.store.commit('removeColumn', this.columnConfig);
	  },


	  watch: {
	    label: function label(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.label = newVal;
	      }
	    },
	    prop: function prop(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.property = newVal;
	      }
	    },
	    property: function property(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.property = newVal;
	      }
	    }
	  },

	  mounted: function mounted() {
	    var owner = this.owner;
	    var parent = this.$parent;
	    var columnIndex = void 0;

	    if (!this.isChildColumn) {
	      columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
	    } else {
	      columnIndex = [].indexOf.call(parent.$el.children, this.$el);
	    }

	    owner.store.commit('insertColumn', this.columnConfig, columnIndex);
	  }
	};

/***/ },

/***/ 261:
/***/ function(module, exports) {

	module.exports = require("object-assign");

/***/ }

/******/ });