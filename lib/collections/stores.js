// Schema
var storeSchema = new SimpleSchema({
  _id: {
    type: String,
    index: true,
    optional: true
  },
  owner: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  }
});

// Collection
Stores = new Meteor.Collection('stores');
Stores.attachSchema(storeSchema);

// Publish
if (Meteor.isServer) {
  Meteor.publish('store', function(id) {
    return Stores.find({ _id: id });
  });
}

// Methods
Meteor.methods({
  addStore: function(options) {
    Stores.insert({
      owner: options.owner,
      name: options.name
    });
  }
});
