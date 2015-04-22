// Schema
Schemas.Orders = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  storeId: {
    type: String
  },
  timestamp: {
    type: Date
  }
});

// Collection
Collections.Orders = new Meteor.Collection('orders');
Collections.Orders.attachSchema(Schemas.Orders);

// Methods
Meteor.methods({
  addOrder: function(options) {
    var storeId = Collections.Stores.findOne({ owner: Meteor.userId() })._id;
    Collections.Orders.insert({
      storeId: storeId,
      timestamp: options.timestamp
    });
  }
});
