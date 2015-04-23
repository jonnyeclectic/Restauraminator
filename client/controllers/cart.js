Template.addToMyCart.events({
  'click .product': function(event) {
  Session.set("counter", Session.get("counter") + this.price);
  var cart = {
      products: this.name.trim(),
      storeId:  this.storeId,
      price:    this.price,
      total:    Session.get("counter")
    };

  Meteor.call('addToMyCart', cart);
  Meteor.call('total', cart);
  return false;
  }
});

Template.removeFromCart.events({
    'click .remove': function(event) {
        if(Session.get("counter") - this.price >= 0)
            Session.set("counter", Session.get("counter") - this.price);
        var cart = {
            products: this.myItem,
            _id:      this._id,
            storeId:  this.storeId,
            price:    this.price,
            userId:   this.userId,
            total:    Session.get("counter"),
            deliver:  this.deliver
        };

        Meteor.call('total', cart);
        Meteor.call('removeFromCart', cart);
        return false;
    }
});

if(Meteor.isClient){
Session.setDefault("counter", 0.0);
Template.cart.helpers({
    counter: function () {
        return Session.get("counter");
    }
});

Session.setDefault("deliver", 1);
Template.carryOrDelivery.helpers({
    deliver: function () {
        return Session.get("deliver");
    }
});
}

Template.carryOrDelivery.events({
    'change .deliver': function(event) {
        Session.set("deliver", Session.get("deliver") * -1);
        var cOd = {
            deliver: Session.get("deliver"),
            user: this.userId
        };

        Meteor.call('carryOrDelivery', cOd);
        return false;
    }
});

Template.stripe.events({
    'click .submit': function(event) {
        var frm = document.getElementsByName('contact-form')[0];    //gets page
        frm.reset();                                                //resets page after submit
    }
});
    /*
    Template.signup.rendered = function(){
    $('#application-signup').validate({
    rules: {
    name: {
    required: true
},
                       emailAddress: {
                       required: true,
                       email: true
                       },
                       password: {
                       required: true,
                       minlength: 6
                       },
                       cardNumber: {
                       creditcard: true,
                       required: true
                       },
                       expMo: {
                       required: true
                       },
                       expYr: {
                       required: true
                       },
                       cvc: {
                       required: true
                       }
                       },
                       messages: {
                       name: {
                       required: "Please enter your name."
                       },
                       emailAddress: {
                       required: "Please enter your email address to sign up.",
                       email: "Please enter a valid email address."
                       },
                       password: {
                       required: "Please enter a password to sign up.",
                       minlength: "Please use at least six characters."
                       },
                       cardNumber: {
                       creditcard: "Please enter a valid credit card.",
                       required: "Required."
                       },
                       expMo: {
                       required: "Required."
                       },
                       expYr: {
                       required: "Required."
                       },
                       cvc: {
                       required: "Required."
                       }
                       },
                       submitHandler: function(){
    // We'll handle our actual signup event here.
}
});
}

var customer = {
    name: $('[name="fullName"]').val(),
    emailAddress: $('[name="emailAddress"]').val(),
    password: $('[name="password"]').val(),
    plan: $('[name="selectPlan"]:checked').val(),
    card: {
        number: $('[name="cardNumber"]').val(),
        exp_month: $('[name="expMo"]').val(),
        exp_year: $('[name="expYr"]').val(),
        cvc: $('[name="cvc"]').val()
    }
}

var submitButton = $('input[type="submit"]').button('loading');

Meteor.call('createTrialCustomer', customer, function(error, response){
    if (error) {
        alert(error.reason);
        submitButton.button('reset');
    } else {
        if ( response.error ) {
            alert(response.message);
            submitButton.button('reset');
        } else {
            Meteor.loginWithPassword(customer.emailAddress, customer.password, function(error){
                if (error) {
                    alert(error.reason);
                    submitButton.button('reset');
                } else {
                    Router.go('/lists');
                    submitButton.button('reset');
                }
            });
        }
    }
});

Meteor.call('createTrialCustomer', customer, function(error, response){
    if (error) {
        alert(error.reason);
        submitButton.button('reset');
    } else {
        if ( response.error ) {
            alert(response.message);
            submitButton.button('reset');
        } else {
            Meteor.loginWithPassword(customer.emailAddress, customer.password, function(error){
                if (error) {
                    alert(error.reason);
                    submitButton.button('reset');
                } else {
                    Router.go('/lists');
                    submitButton.button('reset');
                }
            });
        }
    }
});*/
