StorePageController = BaseController.extend({
  waitOn: function() {
    this.storeSubscription = Meteor.subscribe('store', this.params._id);
  },
  store: function() {
    return Stores.findOne({ _id: this.params._id });
  },
  onBeforeAction: function() {
    if (!this.store() && this.storeSubscription.ready()) {
      this.render('notFound');
    } else {
      this.next();
    }
  },
  data: function() {
    return this.store();
  }
});

Router.route('store', {
  path: '/store/:_id',
  controller: StorePageController
});
