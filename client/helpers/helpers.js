UI.registerHelper('userIdentity', function(userId) {
  var user = Meteor.users.findOne({ _id: userId });
  return user.emails[0].address;
});

UI.registerHelper('win', function(storeId, userId) {
    var playerCart = Collections.Carts.findOne({ storeId: storeId, userId: userId });
    console.log( playerCart.game);
    return playerCart.game;
});

UI.registerHelper('myTotal', function(storeId, userId){
    var cartItem = Collections.Carts.findOne({ storeId: storeId, userId: userId, complete:1 });
    if( typeof cartItem != 'undefined' && cartItem.total >= 0)
        return cartItem.total;
    else
        return 0;
});

UI.registerHelper('ownerCheck', function(storeID, userID) {
    var store = Collections.Stores.findOne({_id: storeID});
    if (store.owner == userID)
        return true;
    else
        return false;
});

UI.registerHelper('lessThan', function(num1, num2) {
    if (num1 < num2)
        return true;
    else
        return false;
});

UI.registerHelper('getTip', function(storeId, userId) {
    var cart = Collections.Carts.findOne({ storeId: storeId, userId: userId});
    var tip = cart.total * (cart.tipPercentage / 100);
    if (typeof tip != 'undefined' && tip >= 0)
        return tip.toFixed(2);
    else
        return 0;
});

UI.registerHelper('customerRedirect', function(isOwner) {
    /*if (isOwner)
        return false;
    else*/
        Router.go('store');
});

UI.registerHelper('discount', function(storeID) {
   // console.log(Math.floor((Math.random() * 800) + 1));
    return Math.floor((Math.random() * 800) + 1);
});

UI.registerHelper('discount2', function(storeID) {
    //console.log(Math.floor((Math.random() * 800) + 1));
    return Math.floor((Math.random() * 800) + 1);
});
