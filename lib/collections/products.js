// Schema
productSchema = new SimpleSchema({
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
Products = new Meteor.Collection('products');
Products.attachSchema(productSchema);

// Methods
Meteor.methods({
  createProduct: function(options) {
    var storeId = Stores.findOne({ owner: Meteor.userId() })._id;

    Products.insert({
      storeId: storeId,
      name: options.name,
      isVisible: options.isVisible
    });
  }
});
