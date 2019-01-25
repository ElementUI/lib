import normalizeWheel from 'normalize-wheel';

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      var normalized = normalizeWheel(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

export default {
  bind: function bind(el, binding) {
    mousewheel(el, binding.value);
  }
};