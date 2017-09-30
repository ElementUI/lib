'use strict';

exports.__esModule = true;

var _ariaMenuitem = require('./aria-menuitem');

var _ariaMenuitem2 = _interopRequireDefault(_ariaMenuitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menu = function menu(domNode) {
  this.domNode = domNode;
  this.init();
};

menu.prototype.init = function () {
  var menuChild = this.domNode.childNodes;
  menuChild.forEach(function (child) {
    var menuItem = new _ariaMenuitem2.default(child); // eslint-disable-line
  });
};
exports.default = menu;