// static page names
var staticPages = [
  'about'
];

var onBeforeActions;
onBeforeActions = {
  loginRequired: function(pause) {
    if (!Meteor.userId()) {
      this.render('home');
      return pause();
    }
    this.next();
  }
};

Router.onBeforeAction(onBeforeActions.loginRequired, {
    only: ['dashboard']
});

Router.configure({
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

// page controller
BaseController = RouteController.extend({
  layoutTemplate: 'layout'
});

// static page routes
staticPages.forEach(function(page, index, array) {
  Router.route(page, {
    name: page,
    controller: BaseController
  });
});

// home route
Router.route('home', {
  path: '/',
  controller: BaseController
});

// store
StorePageController = BaseController.extend({
  waitOn: function() {
    this.storeSubscription = Meteor.subscribe('store', this.params._id);
    this.productsSubscription = Meteor.subscribe('products', this.params._id);
  },
  store: function() {
    return Stores.findOne();
  },
  products: function() {
    return Products.find();
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
      store: this.store(),
      products: this.products()
    };
  }
});

Router.route('store', {
  path: '/store/:_id',
  controller: StorePageController
});

// dashboard
DashboardPageController = BaseController.extend({
  waitOn: function() {
    this.adminDataSubscription = Meteor.subscribe('adminData');
  },
  store: function() {
    return Stores.findOne();
  },
  data: function() {
    return this.store();
  }
});

Router.route('dashboard', {
  path: '/dashboard',
  controller: DashboardPageController
});

