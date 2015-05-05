GamePageController = BaseController.extend({
waitOn: function() {
this.cartSubscription = Meteor.subscribe('cart', this.params._id);
},
onBeforeAction: function() {
if (!this.store() && this.storeSubscription.ready()) {
this.render('notFound');
} else {
this.next();
}
},
data: function() {
return {
carts: this.cart()
};
},

cart: function() {
return Collections.Carts.find();
}
});

Router.route('game', {
path: '/game/:_id',
controller: GamePageController
});
