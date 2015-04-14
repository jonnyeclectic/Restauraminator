CartPageController = BaseController.extend({
  waitOn: function() {
    this.cartSubscription = Meteor.subscribe('cart');
    this.storeSubscription = Meteor.subscribe('store', this.params.storeId);
    this.productsSubscription = Meteor.subscribe('products', this.params.storeId);
  },
  data: function() {
    return {
      carts: this.cart(),
      store: this.store(),
      products: this.products()
    };
  },
  store: function() {
    return Collections.Stores.findOne();
  },
  cart: function() {
    return Collections.Carts.findOne();
  },
  products: function() {
    return Collections.Products.find();
  }
});

Router.route('cart', {
  path: '/store/:storeId/cart',
  controller: CartPageController
});


