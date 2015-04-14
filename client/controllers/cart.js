Template.addToCart.events({
  'click .product': function(event) {
  var cart = {
      products: this.name,
      _id:      this._id,
      storeId: this.storeId
    };

  console.log(cart);//"You clicked something");
  Meteor.call('addToMyCart', cart);
  return false;
  }
});
