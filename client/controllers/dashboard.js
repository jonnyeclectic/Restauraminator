Template.createProduct.events({
  'submit': function(event) {
    var product = {
      name: event.target.productName.value.trim(),
      shortDescription: event.target.shortDescription.value.trim(),
      longDescription: event.target.longDescription.value.trim(),
      foodPicture: event.target.foodPicture.value.trim(),
      isVisible: true
    };

    Meteor.call('createProduct', product);

    return false;
  }
});
