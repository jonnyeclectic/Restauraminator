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
    optional: true
  },
  deliver: {
        type: Number,
        optional: true
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
      deliver: 1
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
            price: options.price
        });
    }
});

Meteor.methods({
    carryOrDelivery: function(options) {
        Collections.Carts.update(
            {storeId: options.storeId},
            {$set: {deliver: 6} });
    }
});
