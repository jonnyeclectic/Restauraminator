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
/*
Router.onAfterAction(function () {
    $(document).foundation();
});
*/
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

// home route
Router.route('home', {
  path: '/',
  controller: BaseController
});
