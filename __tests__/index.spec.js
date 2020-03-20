(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxWeappStorage = require('../src/next-weapp-storage');

  describe('NxWeappStorage.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
