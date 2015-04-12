CartPageController = BaseController.extend({
  waitOn: function() {
    this.cartSubscription = Meteor.subscribe('cart');
    this.productsSubscription = Meteor.subscribe('products', this.params.storeId);
  },
  data: function() {
    return {
      cart: this.cart(),
      products: this.products()
    };
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


