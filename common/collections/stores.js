// Schema
Schemas.Stores = new SimpleSchema({
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
  shortDescription{
    type: String,
    optional: true
  },
  description: {
    type: String,
    optional: true
  }
});

// Collection
Collections.Stores = new Meteor.Collection('stores');
Collections.Stores.attachSchema(Schemas.Stores);

// Methods
Meteor.methods({
  createStore: function(options) {
    Collections.Stores.insert({
      owner: options.owner,
      name: options.name
    });
  }
});
