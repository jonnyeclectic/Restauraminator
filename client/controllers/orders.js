Template.order.helpers({
  price: function() {
    return Math.round(this.cost * 100) / 100
  },

  paymentMethod: function() {
    if (this.cards == 0) {
      return "Cash Payment";
    } else if (this.cards == 1) {
      return "Card Payment";
    }
    var string = "Split Payment: " + this.cards + " Cards";
    return string;
  }
})

Template.order.events({
  'click .process': function(event) {
    Meteor.call('processOrder', this._id);

    var notification = {
      storeId: this.storeId,
      text: "Order: " + this._id + " processed"
    };
    Meteor.call('createNotification', notification);
  }
});

Template.myOrder.events({
  'click .delete': function(event) {
    Meteor.call('deleteOrder', this._id)
  }
});
