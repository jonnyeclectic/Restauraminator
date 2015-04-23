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

Meteor.publish('users', function() {
  return Meteor.users.find();
});

Meteor.publish('store', function(_id) {
  return Collections.Stores.find({ _id: _id });
});

Meteor.publish('stores', function() {
  return Collections.Stores.find();
});

Meteor.publish('cart', function(storeId) {
  return Collections.Stores.find({  storeId: storeId });
});

Meteor.publish('adminData', function() {
  return Collections.Stores.find({ owner: this.userId });
});

Meteor.publish('products', function(storeId) {
  return Collections.Products.find({ storeId: storeId });
});

Meteor.publish('reviews', function(storeId) {
  return Collections.Reviews.find({ storeId: storeId });
});
