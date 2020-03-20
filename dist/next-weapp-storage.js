/*!
 * name: @feizheng/next-weapp-storage
 * description: Storage for weapp based on next.
 * url: https://github.com/afeiship/next-weapp-storage
 * version: 1.0.0
 * date: 2020-03-20 13:27:50
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractStorage = nx.AbstractStorage || require('@feizheng/next-abstract-storage');

  var NxWeappStorage = nx.declare('nx.WeappStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function(inPrefix) {
        this.base({
          engine: wx,
          prefix: inPrefix || ''
        });
      },
      setAccessor: function() {
        this.accessor = {
          set: 'setStorageSync',
          get: 'getStorageSync',
          remove: 'removeStorageSync',
          clear: 'clearStorageSync'
        };
      },
      serialize: function(inTarget) {
        return inTarget;
      },
      keys: function() {
        return wx.getStorageInfoSync().keys;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappStorage;
  }
})();

//# sourceMappingURL=next-weapp-storage.js.map
