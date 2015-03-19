Template.dashboard.helpers({
  products: function() {
    Meteor.subscribe("products", this._id);
    return Products.find();
  }
});

Template.createProduct.events({
  'submit': function(event) {
    var product = {
      name: event.target.productName.value.trim(),
      isVisible: true
    };

    Meteor.call('createProduct', product);

    return false;
  }
});
