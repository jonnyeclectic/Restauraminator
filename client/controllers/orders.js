Template.order.events({
  'click .process': function(event) {
    Meteor.call('processOrder', this._id);
  }
});
