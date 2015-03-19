Accounts.onCreateUser(function(options, user) {
  Meteor.call('createStore', {
    _id: 'test',
    owner: user._id,
    name: options.profile.storeName
  });

  if (options.profile)
    user.profile = options.profile;

  return user;
});
