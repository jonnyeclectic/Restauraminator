Template.addToCart.events({
  'click .product': function(event) {
  var cart = {
      product: this._id,
      storeId: this.storeId
    };
   //Collections.update(this.id
  console.log(cart);//"You clicked something");
  Meteor.call('addToMyCart', cart);
  return false;
  }
});