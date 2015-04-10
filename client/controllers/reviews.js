Template.review.events({
	"click .delete": function () {
		var review = {
			_id: this._id
		}

		Meteor.call('deleteReview', review);
	
		return false;
	}
});

Template.createReview.events({
  'submit': function(event) {
    var review = {
      rating: event.target.rating.value.trim(),
      comment: event.target.comment.value.trim(),
      isVisible: true
    };

    Meteor.call('createReview', review);

    return false;
  }
});