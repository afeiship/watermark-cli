(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxAbstractStorage = nx.AbstractStorage || require('next-abstract-storage');

  var NxWeappStorage = nx.declare('nx.WeappStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function(inPrefix) {
        this.base({
          engine: wx,
          prefix: inPrefix || ''
        });
      },
      keys: function() {
        return wx.getStorageInfoSync().keys;
      },
      setAccessor: function() {
        this.accessor = {
          set: 'setStorageSync',
          get: 'getStorageSync',
          remove: 'removeStorageSync',
          clear: 'clearStorageSync'
        };
      },
      stringify: function(inTarget) {
        return inTarget;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappStorage;
  }
})();
