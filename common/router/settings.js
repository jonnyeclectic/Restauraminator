SettingsPageController = BaseController.extend({
  waitOn: function() {
    this.storeSubscription = Meteor.subscribe('store', this.params._id);
    this.productsSubscription = Meteor.subscribe('products', this.params._id);
    this.usersSubscription = Meteor.subscribe('users', this.params._id);
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
      store: this.store(),
      products: this.products(),
      users: this.users()
    };
  },
  users: function() {
    return Meteor.users.find();
  },
  store: function() {
    return Collections.Stores.findOne();
  },
  products: function() {
    return Collections.Products.find();
  }
});

Router.route('settings', {
  path: '/store/:_id/settings',
  controller: SettingsPageController
});
