// Schema
Schemas.Stores = new SimpleSchema({
  _id: {
    type: String,
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
  },
  calorieLimit: {
    type: Number,
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
  },

  setLimit: function(options) {
    Collections.Stores.update(
      {_id: options._id},
      {$set: {calorieLimit: options.limit}}
    );
  },

  setRank: function(options) {
    var user = Meteor.users.findOne({'profile.email': options.userEmail});
    Meteor.users.update(
      {_id: user._id},
      {$set: {
        'profile.isKitchen': false,
        'profile.isClerk': false,
        'profile.isManager': false
      }}
    )
    if (options.rank == 1) {
      Meteor.users.update(
        {_id: user._id},
        {$set: {'profile.isKitchen': true}}
      );
    }
    else if (options.rank == 2) {
      Meteor.users.update(
        {_id: user._id},
        {$set: {'profile.isClerk': true}}
      );
    }
    else if (options.rank == 3) {
      Meteor.users.update(
        {_id: user._id},
        {$set: {'profile.isManager': true}}
      );
    }
  },

  getTitle: function(userEmail) {
    var user = Meteor.users.findOne({'profile.email': userEmail});
    if (user.profile.isOwner)
      return "Store Owner";
    else if (user.profile.isKitchen)
      return "Kitchen Staff";
    else if (user.profile.isOwner)
      return "Front Desk Clerk";
    else if (user.profile.isOwner)
      return "Store Manager";
  }
});
