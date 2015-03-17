UI.registerHelper('userIdentity', function(userId) {
  var user = Meteor.users.findOne({ _id: userId });
  return user.emails[0].address;
});