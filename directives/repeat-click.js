import { once, on } from 'element-ui/lib/utils/dom';

export default {
  bind: function bind(el, binding, vnode) {
    var interval = null;
    var startTime = void 0;
    var handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    var clear = function clear() {
      if (new Date() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    on(el, 'mousedown', function (e) {
      if (e.button !== 0) return;
      startTime = new Date();
      once(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};