// Schema
Schemas.Carts = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  storeId: {
    type: String
  },
  userId: {
    type: String
  },
  price: {
    type: Number,
    decimal: true,
    optional: true
  },
  deliver: {
        type: Number,
        optional: true
  },
    cash: {
        type: Number,
        optional: true
    },
  total: {
    type: Number,
    decimal: true,
    optional: true//,
    //min: 0
  },
  myItem: {
    type: String,
    optional: true
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
      myItem: options.products,
      price: options.price,
      total: options.total,
      deliver: 1,
      cash:     1
    });
  }
});

Meteor.methods({
    removeFromCart: function(options) {
        Collections.Carts.remove({
            _id: options._id,
            storeId: options.storeId,
            userId: Meteor.userId(),
            myItem: options.products,
            price: options.price,
            total: options.total,
            deliver: options.deliver
        });
    },
    cash: function(options) {
        var storeID = Collections.Stores.findOne({ owner: Meteor.userId() })._id;
        Collections.Carts.update(
            {storeId: storeID, userId: Meteor.userId()},
            {$set: {cash: options.cash} },
            {multi: true});
    },
    carryOrDelivery: function(options) {
        var storeID = Collections.Stores.findOne({ owner: Meteor.userId() })._id;
        Collections.Carts.update(
            {storeId: storeID, userId: Meteor.userId()},
            {$set: {deliver: options.deliver} },
            {multi: true});
    },

    total: function(options) {
        var storeID = Collections.Stores.findOne({ owner: Meteor.userId() })._id;
        Collections.Carts.update(
            {storeId: storeID, userId: Meteor.userId()},
            {$set: {total: options.total.toFixed(2)} },
            {multi: true});
    }
});
