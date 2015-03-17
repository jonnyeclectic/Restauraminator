Meteor.publish('userData', function() {
  var currentUser = this.userId;
  if (currentUser) {
    return Meteor.users.find({
      _id: currentUser
    }, {
      fields: {
        "emails.address[0]": 1,
        "profile": 1
      }
    });
  } else {
    return this.ready();
  }
});
