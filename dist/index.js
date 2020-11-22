/*!
 * name: @jswork/next-weapp-storage
 * description: Storage for weapp based on next.
 * homepage: https://github.com/afeiship/next-weapp-storage
 * version: 1.0.0
 * date: 2020-11-22 16:13:37
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxAbstractStorage = nx.AbstractStorage || require('@jswork/next-abstract-storage');

  var NxWeappStorage = nx.declare('nx.WeappStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function (inPrefix) {
        this.base({
          engine: wx,
          prefix: inPrefix || ''
        });
      },
      setAccessor: function () {
        this.accessor = {
          set: 'setStorageSync',
          get: 'getStorageSync',
          remove: 'removeStorageSync',
          clear: 'clearStorageSync'
        };
      },
      serialize: function (inTarget) {
        return inTarget;
      },
      keys: function () {
        return wx.getStorageInfoSync().keys;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappStorage;
  }
})();
