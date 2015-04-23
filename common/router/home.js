HomePageController = BaseController.extend({
  waitOn: function() {
    this.storesSubscription = Meteor.subscribe('stores');
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

// home route
Router.route('home', {
  path: '/',
  controller: HomePageController
});