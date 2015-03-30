// Schema
Schemas.Products = new SimpleSchema({
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
    type: String
  },
  longDescription: {
    type: String,
    optional: true
  },
  isVisible: {
    type: Boolean,
    index: 1
  }
  foodPicture:{
    type: File
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
      shortDescription: options.shortDescription,
      longDescription: options.longDescription,
      foodPicture: options.foodPicture,
      isVisible: options.isVisible
    });
  }
});
