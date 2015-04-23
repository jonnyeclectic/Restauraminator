// Schema
Schemas.Notifications = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  userId: {
    type: String
  },
  storeId: {
    type: String
  },
  text: {
    type: String
  }
});

// Collection
Collections.Notifications = new Meteor.Collection('notifications');
Collections.Notifications.attachSchema(Schemas.Notifications);

// Methods
Meteor.methods({
  createNotification: function(options) {
    Collections.Notifications.insert({
      userId: Meteor.userId(),
      storeId: options.storeId,
      text: options.text
    });
  }
});
