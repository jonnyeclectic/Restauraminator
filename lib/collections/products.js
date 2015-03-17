// Schema
productSchema = new SimpleSchema({
  _id: {
    type: String,
    index: true,
    optional: true
  },
  shopId: {
    type: String
  },
  title: {
    type: String
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

