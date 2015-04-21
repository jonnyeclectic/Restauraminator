// static page names
var staticPages = [
  'about'
];

// hooks
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

Router.onAfterAction(function () {
    $(document).foundation();
});

// configure
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

HomePageController = BaseController.extend({
  waitOn: function() {
    this.storesSubscription = Meteor.subscribe('stores', this.params._id);
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
      stores: this.stores()
    };
  },
  stores: function() {
    return Collections.Stores.find();
  }
});

// home route
Router.route('home', {
  path: '/',
  controller: HomePageController
});

/*
// home route
Router.route('home', {
  path: '/',
  controller: BaseController
});
*/