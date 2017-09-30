'use strict';

exports.__esModule = true;

var _ariaUtils = require('../aria-utils');

var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(parent, domNode) {
  this.domNode = domNode;
  this.parent = parent;
  this.subMenuItems = [];
  this.subIndex = 0;
  this.init();
};

Menu.prototype.init = function () {
  this.subMenuItems = this.domNode.querySelectorAll('li');
  this.addListeners();
};

Menu.prototype.gotoSubIndex = function (idx) {
  if (idx === this.subMenuItems.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = this.subMenuItems.length - 1;
  }
  this.subMenuItems[idx].focus();
  this.subIndex = idx;
};

Menu.prototype.addListeners = function () {
  var _this = this;

  var keys = _ariaUtils2.default.keys;
  var parentNode = this.parent.domNode;
  Array.prototype.forEach.call(this.subMenuItems, function (el) {
    el.addEventListener('keydown', function (event) {
      var prevdef = false;
      switch (event.keyCode) {
        case keys.down:
          _this.gotoSubIndex(_this.subIndex + 1);
          prevdef = true;
          break;
        case keys.up:
          _this.gotoSubIndex(_this.subIndex - 1);
          prevdef = true;
          break;
        case keys.tab:
          _ariaUtils2.default.triggerEvent(parentNode, 'mouseleave');
          break;
        case keys.enter:
        case keys.space:
          prevdef = true;
          event.currentTarget.click();
          break;
      }
      if (prevdef) {
        event.preventDefault();
        event.stopPropagation();
      }
      return false;
    });
  });
};

exports.default = Menu;