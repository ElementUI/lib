exports.__esModule = true;
exports.use = exports.$t = undefined;

var _zhCn = require('element-ui/lib/locale/lang/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _format = require('./format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = (0, _format2.default)(_vue2.default);
var lang = _zhCn2.default;
var merged = false;

var $t = exports.$t = function $t(path, options) {
  var vuei18n = Object.getPrototypeOf(this || _vue2.default).$t;
  if (typeof vuei18n === 'function') {
    if (!merged) {
      merged = true;
      _vue2.default.locale(_vue2.default.config.lang, (0, _deepmerge2.default)(lang, _vue2.default.locale(_vue2.default.config.lang), { clone: true }));
    }
    return vuei18n.apply(this, [path, options]);
  }
  var array = path.split('.');
  var current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    var value = current[property];
    if (i === j - 1) return format(value, options);
    if (!value) return '';
    current = value;
  }
  return '';
};

var use = exports.use = function use(l) {
  lang = l || lang;
};
exports.default = { use: use, $t: $t };