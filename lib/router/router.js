// static page names
var staticPages = [
  'about'
];

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
