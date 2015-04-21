HomePageController = BaseController.extend({
  waitOn: function() {
    this.storesSubscription = Meteor.subscribe('stores', this.params._id);
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
      stores: this.stores()
    };
  },
  stores: function() {
    return Collections.Stores.find();
  }
});

Router.configure('home', {
  controller: HomePageController
});