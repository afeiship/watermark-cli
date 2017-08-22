(function () {

  var global = global || window || self || this;
  var nx = global.nx || require('next-js-core2');
  var NxAbstractStorage = nx.AbstractStorage || require('next-abstract-storage');

  var NxWeappStorage = nx.declare('nx.WeappStorage', {
    extends: NxAbstractStorage,
    methods:{
      init: function(inPrefix){
        this.base({
          engine: wx,
          prefix: inPrefix || '',
          set: 'setStorageSync',
          get: 'getStorageSync',
          remove: 'removeStorageSync',
          clear:'clearStorageSync'
        });
      },
      keys: function(){
        return wx.getStorageInfoSync().keys;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappStorage;
  }

}());
