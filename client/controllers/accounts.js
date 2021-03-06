Template.createAccount.events({
    'submit': function(event) {

        // form values
        var account = {
            email: event.target.email.value.trim(),
            password: event.target.password.value,
            storeOption: event.target.storeOption.value.trim(),
            storeName: event.target.storeName.value.trim(),
            points: 0
        };

        var isOwner = !(account.storeName.length < 1);
        if (isOwner)
            account.storeOption = account.storeName;
        else
            account.storeName = event.target.storeOption.name.trim();

        // make sure the email is valid
        Meteor.call('validateEmail', account.email, function(error, result) {
            if (error) {
                Session.set('alert', error.reason);
                return false;
            }
        });

        // make sure the password is valid
        // NOTE: the password should never be sent directly to the server
        // Accounts.createUser uses bcrypt to send them, so it is fine
        if (account.password.length < 6) {
            Session.set('alert', 'Password must be 6 characters or longer.');
            return false;
        }

        // make sure the store name is valid
        /*
        if (account.storeName.length < 1) {
            Session.set('alert', 'Please enter a store name.');
            return false;
        }

        if (account.storeName.length < 1) {
            Session.set('alert', 'Please enter a store name.');
            return false;
        }
        */

        // finally, create the user
        Accounts.createUser({
            email: account.email,
            password: account.password,
            profile: {
                storeName: account.storeName,
                storeID: account.storeOption,
                email: account.email,
                isOwner: isOwner,
                isKitchen: false,
                isClerk: false,
                isManager: false
            }
        }, function(error) {
            if (error)
                console.log('Account creation error: ' + error.reason);
            Session.set('alert', '');
        });
        return false;
    }
});

Template.signIn.events({
    'submit': function(event) {
        Meteor.loginWithPassword(event.target.email.value, event.target.password.value, function(error) {
            if (error)
                console.log(error.reason);
            Router.go('dashboard');
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
