ReviewsPageController = BaseController.extend({
  waitOn: function() {
    this.storeSubscription = Meteor.subscribe('store', this.params._id);
    this.reviewsSubscription = Meteor.subscribe('reviews', this.params._id);
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
      reviews: this.reviews()
    };
  },

  store: function() {
    return Collections.Stores.findOne();
  },
  
  reviews: function() {
    return Collections.Reviews.find();
  },

  yieldTemplates: {
    'navbar-store': {to: 'navbar'}
  }
});

Router.route('reviews', {
  path: '/store/:_id/reviews',
  controller: ReviewsPageController
});
