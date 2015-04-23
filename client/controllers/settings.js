Template.setLimit.events({
  'submit': function(event) {
    var calorieLimit = {
      _id: this.store._id,
      limit: event.target.limit.value.trim()
    };
    //console.log("id: " + calorieLimit._id + "\nlimit: " + calorieLimit.limit);
    Meteor.call('setLimit', calorieLimit);

    return false;
  }
});

Template.setRank.events({
  'submit': function(event) {
    var setting = {
      rank : event.target.rank.value.trim(),
      userEmail : this.profile.email
    };

    Meteor.call('setRank', setting);

    return false;
  }
});

Template.settings.helpers({
  inStore: function(id) {
    return id;
  }
});