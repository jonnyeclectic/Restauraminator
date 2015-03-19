Meteor.publish('userData', function() {
  var currentUser = this.userId;
  if (currentUser) {
    return Meteor.users.find({
      _id: currentUser
    }, {
      fields: {
        "emails.address[0]": true,
        "profile": true
      }
    });
  } else {
    return this.ready();
  }
});

Meteor.publish('store', function(id) {
  return Stores.find({ _id: id });
});

Meteor.publish('adminData', function() {
  return Stores.find({ owner: this.userId });
});

Meteor.publish('products', function(storeId) {
  return Products.find({ storeId: storeId });
});
