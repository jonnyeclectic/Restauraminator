// Schema
Schemas.Reviews = new SimpleSchema({
  _id: {
    type: String,
    index: true,
    optional: true
  },
  storeId: {
    type: String
  },
  rating: {
    type: String
  },
  comment: {
    type: String
  },
  isVisible: {
    type: Boolean,
    index: 1
  }
});

// Collection
Collections.Reviews = new Meteor.Collection('reviews');
Collections.Reviews.attachSchema(Schemas.Reviews);

// Methods
Meteor.methods({
  createReview: function(options) {
    var storeId = Collections.Stores.findOne({ owner: Meteor.userId() })._id;

    Collections.Reviews.insert({
      storeId: storeId,
      rating: options.rating,
      comment: options.comment,
      isVisible: options.isVisible
    });
  },

  deleteReview: function(options) {
    Collections.Reviews.remove({
      _id: options._id
    });
  }
});
