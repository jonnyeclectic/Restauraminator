Accounts.onCreateUser(function(options, user) {
  Meteor.call('addStore', {
    _id: 'test',
    owner: user._id,
    name: options.profile.storeName
  });

  Meteor.call('sendWelcomeEmail', user.emails[0].address, options.profile.storeName, function(error) {
    if (error)
      console.log(error);
  });

  if (options.profile)
    user.profile = options.profile;

  return user;
});

Meteor.methods({
  sendWelcomeEmail: function(email, storeName) {
    check(email, String);

    SSR.compileTemplate('welcomeEmail', Assets.getText('email/welcomeEmail.html'));
    var emailTemplate = SSR.render('welcomeEmail', {
      email: email,
      storeName: storeName
    });

    return Email.send({
      to: email,
      from: "Restauraminator",
      subject: "Welcome to Restauraminator",
      html: emailTemplate
    });
  }
});
