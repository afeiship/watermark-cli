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
      gets: function(inArray){
        if(!Array.isArray(inArray)){
          nx.error('DO NOT SUPPORT GET ALL!')
        }
        return this.base(inArray);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappStorage;
  }

}());
