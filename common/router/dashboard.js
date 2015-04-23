DashboardPageController = BaseController.extend({
  waitOn: function() {
    this.adminDataSubscription = Meteor.subscribe('adminData');

    var store = this.store();
    if (store) {
      this.productsSubscription = Meteor.subscribe('products', this.store()._id);
      this.notificationSubscription = Meteor.subscribe('notifications', this.store()._id);
    }
  },
  data: function() {
    return {
      store: this.store(),
      products: this.products(),
      notifications: this.notifications()
    };
  },

  store: function() {
    return Collections.Stores.findOne();
  },
  products: function() {
    return Collections.Products.find();
  },
  notifications: function() {
    return Collections.Notifications.find();
  }
});

Router.route('dashboard', {
  path: '/dashboard',
  controller: DashboardPageController
});
