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
  name: {
    type: String
  },
  shortDescription: {
    type: String,
    optional: true
  },
  description: {
    type: String,
    optional: true
  },
  isVisible: {
    type: Boolean,
    index: 1
  }
});

// Collection
Collections.Carts = new Meteor.Collection('carts');
Collections.Carts.attachSchema(Schemas.Carts);

// Methods
Meteor.methods({
  createCart: function(options) {
    var storeId = Collections.Carts.findOne({ owner: Meteor.userId() })._id;

    Collections.Carts.insert({
      storeId: storeId,
      name: options.name,
      isVisible: options.isVisible
    });
  }
});
