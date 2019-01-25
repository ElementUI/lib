import { t as _t } from 'element-ui/lib/locale';

export default {
  methods: {
    t: function t() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _t.apply(this, args);
    }
  }
};