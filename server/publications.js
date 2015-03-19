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
  return Collections.Stores.find({ _id: id });
});

Meteor.publish('adminData', function() {
  return Collections.Stores.find({ owner: this.userId });
});

Meteor.publish('products', function(storeId) {
  return Collections.Products.find({ storeId: storeId });
});
