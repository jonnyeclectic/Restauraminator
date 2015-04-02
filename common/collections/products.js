// Schema
Schemas.Products = new SimpleSchema({
  _id: {
    type: String,
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
    index: true
  }
});

// Collection
Collections.Products = new Meteor.Collection('products');
Collections.Products.attachSchema(Schemas.Products);

// Methods
Meteor.methods({
  createProduct: function(options) {
    var storeId = Collections.Stores.findOne({ owner: Meteor.userId() })._id;

    Collections.Products.insert({
      storeId: storeId,
      name: options.name,
      isVisible: options.isVisible
    });
  }
});
