Session.setDefault("numberOfCards", 1);
Session.setDefault("cards", [{ index: 1 }]);

Template.cart.helpers({
  cardPayment: function() {
    if (Session.get("cash") > 0)
      return false;
    else
      return true;
  },

  numberOfCards: function() {
    return Session.get("numberOfCards");
  },

  cards: function() {
    return Session.get("cards");
  },

  lastCard: function() {
    if (this.index == Session.get("numberOfCards")) {
      return true;
    }
    return false;
  }
});

Template.cart.events({
  'click .numberOfCards': function(event) {
    Session.set("numberOfCards", event.target.value);
    var cards = [];
    var n = Session.get("numberOfCards");
    for (var i = 1; i <= n; i++) {
      cards.push({ index: i });
    };
    Session.set("cards", cards);
  },

  'submit': function(event) {
    var order = {
      timestamp: new Date()
    };

    var cartOrder = {
        complete: 0
    }

    Session.set("counter", 0);
    Meteor.call('addOrder', order);
    Meteor.call('complete', cartOrder);
  }
});

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
            deliver:  this.deliver,
            cash:     this.cash,
            complete: this.complete
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

Session.setDefault("cash", 1);
Template.carryOrDelivery.helpers({
    deliver: function () {
        return Session.get("cash");
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

Template.cash.events({
    'change .cash': function(event) {
        Session.set("cash", Session.get("cash") * -1);
        var cOd = {
            cash: Session.get("cash"),
            user: this.userId
        };

        Meteor.call('cash', cOd);
        return false;
    }
});

Template.tipCalculator.events({
  'submit': function(event) {
    var tip = {
      percentage: event.target.percentage.value.trim()
    };
    Meteor.call('assignPercentage', tip);                            //resets page after submit
    return false;
  }
});
