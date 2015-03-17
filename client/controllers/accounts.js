Template.createAccount.events({
  'submit': function(event) {
    var account = {
      email: event.target.email.value,
      password: event.target.password.value,
      storeName: event.target.storeName.value
    };

    Meteor.call('validateEmailAddress', account.email, function(error, response) {
      if (error) {
        Session.set('alert', error.reason);
        return false;
      } else {
        if (response.error) {
          Session.set('alert', response.error);
          console.log(response.error);
        } else {
          Accounts.createUser({
            email: account.email,
            password: account.password,
            profile: {
              storeName: account.storeName
            }
          }, function (error) {
            if (error)
              Session.set('alert', error.reason);
              return false;
          });
        }
      }
    });

    return false;
  }
});

Template.signIn.events({
  'submit': function(event) {
    Meteor.loginWithPassword(event.target.email.value, event.target.password.value, function(error) {
      if (error)
        console.log(error.reason);
    });
    return false;
  }
});

Template.signOut.events({
  'submit': function(event) {
    Meteor.logout();
    return false;
  }
});

Template.alert.helpers({
  alert: function() {
    return Session.get('alert');
  }
});
