OrdersPageController = BaseController.extend({
  waitOn: function() {
    this.adminDataSubscription = Meteor.subscribe('adminData');

    var store = this.store();
    if (store)
      this.ordersSubscription = Meteor.subscribe('orders', this.store()._id);
  },
  data: function() {
    return {
      store: this.store(),
      processing: this.processing(),
      complete: this.complete()
    };
  },

  store: function() {
    return Collections.Stores.findOne();
  },
  processing: function() {
    return Collections.Orders.find({
      status : "processing"
    }, {sort: {date_created: -1}});
  },
  complete: function() {
    return Collections.Orders.find({
      status : "complete"
    }, {sort: {date_created: -1}});
  },
});

Router.route('orders', {
  path: '/orders',
  controller: OrdersPageController
});

Router.route('myOrders', {
  path: '/myOrders',
  controller: OrdersPageController
});