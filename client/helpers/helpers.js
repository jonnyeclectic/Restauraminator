UI.registerHelper('userIdentity', function(userId) {
  var user = Meteor.users.findOne({ _id: userId });
  return user.emails[0].address;
});

UI.registerHelper('myTotal', function(storeId, userId){
    var cartItem = Collections.Carts.findOne({ storeId: storeId, userId: userId });
    if( typeof cartItem != 'undefined' && cartItem.total >= 0)
        return cartItem.total;
    else
        return 0;
});
