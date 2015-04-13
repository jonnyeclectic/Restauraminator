Template.setLimit.events({
  'submit': function(event) {
    var calorieLimit = {
      _id: this.store._id,
      limit: event.target.limit.value.trim()
    };
    console.log("id: " + calorieLimit._id + "\nlimit: " + calorieLimit.limit);
    Meteor.call('setLimit', calorieLimit);

    return false;
  }
});