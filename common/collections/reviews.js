// Schema
Schemas.Reviews = new SimpleSchema({
  _id: {
    type: String,
    //index: true,
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

Collections.Reviews = new Meteor.Collection('reviews');
Collections.Reviews.attachSchema(Schemas.Reviews);