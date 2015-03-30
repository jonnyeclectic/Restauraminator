Template.createProduct.events({
  'submit': function(event) {
    var product = {
      name: event.target.productName.value.trim(),
      shortDescription: event.target.shortDescription.value.trim(),
      longDescription: event.target.longDescription.value.trim(),
      isVisible: true
    };

   /* var shortDespcription = {
      sDescription: event.target.productsDescription.value.trim(),
      isVisible: true

    };*/

    Meteor.call('createProduct', product);

    return false;
  }
});
