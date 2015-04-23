// All the values status can have
var statusValues = [
  "processing",
  "complete"
];

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
  },
  userId: {
    type: String
  },
  status: {
    type: String
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
      timestamp: options.timestamp,
      userId: Meteor.userId(),
      status: statusValues[0]
    });
  },

  processOrder: function(_id) {
    var order = Collections.Orders.findOne({ _id: _id });
    if (!order)
      return;

    var statusIndex = statusValues.indexOf(order.status) + 1;
    if (statusIndex >= statusValues.length)
      statusIndex = 0;

    Collections.Orders.update({
      _id: _id
    },{
      $set: {
        status: statusValues[statusIndex]
      }
    },{});
  },
  deleteOrder: function(_id) {
    Collections.Orders.remove({_id: _id});
  }
});
