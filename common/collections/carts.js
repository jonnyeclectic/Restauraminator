// Schema
Schemas.Carts = new SimpleSchema({
  _id: {
    type: String,
    index: true,
    optional: true
  },
  storeId: {
    type: String
  },
  userId: {
    type: String
  }
});

// Collection
Collections.Carts = new Meteor.Collection('carts');
Collections.Carts.attachSchema(Schemas.Carts);

// Methods
Meteor.methods({
  addToMyCart: function(options) {
    Collections.Carts.insert({
      storeId: options.storeId,
      userId: Meteor.userId(),
      products: options.product
    });
  }
});
