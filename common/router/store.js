StorePageController = BaseController.extend({
  waitOn: function() {
    this.storeSubscription = Meteor.subscribe('store', this.params._id);
    this.cartSubscription = Meteor.subscribe('cart', this.params._id);
    this.productsSubscription = Meteor.subscribe('products', this.params._id);
  },
  onBeforeAction: function() {
    if (!this.store() && this.storeSubscription.ready()) {
      this.render('notFound');
    } else {
      this.next();
    }
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
        return Collections.Carts.find();
    },
  products: function() {
    return Collections.Products.find();
  },

  yieldTemplates: {
    'navbar-store': {to: 'navbar'}
  }
});

Router.route('store', {
  path: '/store/:_id',
  controller: StorePageController
});
