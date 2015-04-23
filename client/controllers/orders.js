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
