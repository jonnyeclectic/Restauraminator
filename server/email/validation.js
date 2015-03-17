Meteor.methods({
  validateEmail: function(email) {
    check(email, String);
    
    if (!email || email == ''){
        throw new Meteor.Error('empty-string', "Please enter an email address.")
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        throw new Meteor.Error('invalid-email', "The entered email is invalid.")
    }

    if (Meteor.users.findOne({
      emails: { $elemMatch: { address: email } }
    }) != undefined) {
      throw new Meteor.Error('user-exists', "The entered email is already is use.")
    }
    
    return true;
  }
});