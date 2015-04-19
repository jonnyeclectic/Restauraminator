Template.addToMyCart.events({
  'click .product': function(event) {
  var cart = {
      products: this.name.trim(),
      storeId:  this.storeId,
      price: this.price
    };

  //console.log(cart);//"You clicked something");
  Meteor.call('addToMyCart', cart);
  Session.set("counter", Session.get("counter") + this.price);
  return false;
  }
});

Template.removeFromCart.events({
    'click .remove': function(event) {
        var cart = {
            products: this.myItem,
            _id:      this._id,
            storeId:  this.storeId,
            price: this.price
        };

        Meteor.call('removeFromCart', cart);
        Session.set("counter", Session.get("counter") - this.price);
        return false;
    }
});

Session.setDefault("counter", 0);
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


/*
Template.carryOrDelivery.events({
    'change .deliver': function(event) {
        Session.set("deliver", Session.get("deliver") * -1);
        var cOd = {
            deliver: Session.get("deliver"),
            storeId: this.storeId
        };
        carts.update(this.storeId, {$set: {deliver: 5} });
        //db.carts.update(this._id, {deliver: -1});
        Meteor.call('carryOrDelivery', cOd);
        return false;
    }
});






Session.setDefault("deliver", 1);
Template.carryOrDelivery.events({
    deliver: function () {
        Session.set("deliver", Session.get("deliver") * -1);
        console.log("You clicked something");
    }
});
*/
