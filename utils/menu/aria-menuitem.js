'use strict';

exports.__esModule = true;

var _ariaUtils = require('../aria-utils');

var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

var _ariaSubmenu = require('./aria-submenu');

var _ariaSubmenu2 = _interopRequireDefault(_ariaSubmenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuItem = function menuItem(domNode) {
  this.domNode = domNode;
  this.submenu = null;
  this.init();
};

menuItem.prototype.init = function () {
  this.domNode.setAttribute('tabindex', '0');
  var menuChild = this.domNode.querySelector('.el-menu');
  if (menuChild) {
    this.submenu = new _ariaSubmenu2.default(this, menuChild);
  }
  this.addListeners();
};

menuItem.prototype.addListeners = function () {
  var _this = this;

  var keys = _ariaUtils2.default.keys;
  this.domNode.addEventListener('keydown', function (event) {
    var prevdef = false;
    switch (event.keyCode) {
      case keys.down:
        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseenter');
        _this.submenu.gotoSubIndex(0);
        prevdef = true;
        break;
      case keys.up:
        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseenter');
        _this.submenu.gotoSubIndex(_this.submenu.subMenuItems.length - 1);
        prevdef = true;
        break;
      case keys.tab:
        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseleave');
        break;
      case keys.enter:
      case keys.space:
        prevdef = true;
        event.currentTarget.click();
        break;
    }
    if (prevdef) {
      event.preventDefault();
    }
  });
};

exports.default = menuItem;