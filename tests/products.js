var assert = require('assert');

suite('Products', function() {
  test('in the server', function(done, server) {
    server.eval(function() {
      Collections.Products.insert({
        storeId: '0',
        name: 'name',
        shortDescription: 'shortDescription',
        longDescription: 'longDescription',
        calories: 'calories',
        picSite: 'picSite',
        isVisible: true
      });
      var products = Collections.Products.fetch();
      emit('products', products);
    });

    server.once('products', function(products) {
      assert.equal(products.length, 1);
      done();
    });
  });
});
