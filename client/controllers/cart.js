Template.createCart.events({
  'submit': function(event) {
    var product = {
      name: Meteor.Identity,//event.target.productName.value.trim(),
      isVisible: true
    };

    Meteor.call('createCart', cart);

    return false;
  }
});
