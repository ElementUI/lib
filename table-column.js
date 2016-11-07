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

	module.exports = __webpack_require__(260);


/***/ },

/***/ 152:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/merge");

/***/ },

/***/ 209:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/tag");

/***/ },

/***/ 253:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/checkbox");

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	var ElTableColumn = __webpack_require__(261);

	/* istanbul ignore next */
	ElTableColumn.install = function (Vue) {
	  Vue.component(ElTableColumn.name, ElTableColumn);
	};

	module.exports = ElTableColumn;

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	exports.__esModule = true;

	var _checkbox = __webpack_require__(253);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _tag = __webpack_require__(209);

	var _tag2 = _interopRequireDefault(_tag);

	var _merge = __webpack_require__(152);

	var _merge2 = _interopRequireDefault(_merge);

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
	    renderHeader: function renderHeader(h) {
	      return h(
	        'el-checkbox',
	        {
	          nativeOn: {
	            click: this.toggleAllSelection
	          },
	          domProps: {
	            value: this.isAllSelected
	          }
	        },
	        []
	      );
	    },
	    renderCell: function renderCell(h, _ref) {
	      var row = _ref.row;
	      var column = _ref.column;
	      var store = _ref.store;
	      var $index = _ref.$index;

	      return h(
	        'el-checkbox',
	        {
	          domProps: {
	            value: store.isSelected(row)
	          },
	          attrs: {
	            disabled: column.selectable ? !column.selectable.call(null, row, $index) : false
	          },
	          on: {
	            input: function input() {
	              store.commit('rowSelectedChanged', row);
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
	    renderHeader: function renderHeader(h, _ref2) {
	      var column = _ref2.column;

	      return column.label || '#';
	    },
	    renderCell: function renderCell(h, _ref3) {
	      var $index = _ref3.$index;

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

	  (0, _merge2.default)(column, defaults[type || 'default']);

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

	var DEFAULT_RENDER_CELL = function DEFAULT_RENDER_CELL(h, _ref4, parent) {
	  var row = _ref4.row;
	  var column = _ref4.column;

	  return h(
	    'span',
	    null,
	    [parent.getCellContent(row, column.property, column.id)]
	  );
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
	    renderHeader: Function,
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
	    showTooltipWhenOverflow: Boolean,
	    showOverflowTooltip: Boolean,
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

	    var column = getDefaultColumn(type, {
	      id: columnId,
	      label: this.label,
	      property: this.prop || this.property,
	      type: type,
	      renderCell: DEFAULT_RENDER_CELL,
	      renderHeader: this.renderHeader,
	      minWidth: minWidth,
	      width: width,
	      isColumnGroup: isColumnGroup,
	      align: this.align ? 'is-' + this.align : null,
	      sortable: this.sortable,
	      sortMethod: this.sortMethod,
	      resizable: this.resizable,
	      showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
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

	    (0, _merge2.default)(column, forced[type] || {});

	    var renderCell = column.renderCell;
	    var _self = this;

	    column.renderCell = function (h, data) {
	      if (_self.$vnode.data.inlineTemplate) {
	        renderCell = function renderCell() {
	          data._staticTrees = _self._staticTrees;
	          data.$options = {};
	          data.$options.staticRenderFns = _self.$options.staticRenderFns;
	          data._renderProxy = _self._renderProxy;
	          data._m = _self._m;

	          return _self.customRender.call(data);
	        };
	      }

	      return _self.showOverflowTooltip || _self.showTooltipWhenOverflow ? h(
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
	          [renderCell(h, data, this._renderProxy)]
	        ), h(
	          'span',
	          { slot: 'content' },
	          [renderCell(h, data, this._renderProxy)]
	        )]
	      ) : h(
	        'div',
	        { 'class': 'cell' },
	        [renderCell(h, data, this._renderProxy)]
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
	    },
	    filters: function filters(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.filters = newVal;
	      }
	    },
	    filterMultiple: function filterMultiple(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.filterMultiple = newVal;
	      }
	    },
	    align: function align(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.align = newVal;
	      }
	    },
	    width: function width(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.width = newVal;
	        this.owner.scheduleLayout();
	      }
	    },
	    minWidth: function minWidth(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.minWidth = newVal;
	        this.owner.scheduleLayout();
	      }
	    },
	    fixed: function fixed(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.fixed = newVal;
	        this.owner.scheduleLayout();
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

/***/ }

/******/ });