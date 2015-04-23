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
