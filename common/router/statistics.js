StatisticsPageController = BaseController.extend({
  waitOn: function() {
    this.adminDataSubscription = Meteor.subscribe('adminData');

    var store = this.store();
    if (store)
      this.ordersSubscription = Meteor.subscribe('orders', this.store()._id);
  },
  data: function() {
    return {
      store: this.store(),
      orders: this.orders()
    };
  },

  store: function() {
    return Collections.Stores.findOne();
  },
  orders: function() {
    return Collections.Orders.find({}, {sort: {date_created: -1}});
  }
});

Router.route('statistics', {
  path: '/statistics',
  controller: StatisticsPageController
});
