Template.createProduct.events({
  'submit': function(event) {
    var product = {
      name: event.target.productName.value.trim(),
      inVisible: true
      name: event.target.shortDescription.value.trim(),
      isVisible: true
    };

    Meteor.call('createProduct', product);

    return false;
  }
});
