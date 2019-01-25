var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { hasOwn } from 'element-ui/lib/utils/util';

export function isVNode(node) {
  return node !== null && (typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object' && hasOwn(node, 'componentOptions');
};

export function getFirstComponentChild(children) {
  return children && children.filter(function (c) {
    return c && c.tag;
  })[0];
};