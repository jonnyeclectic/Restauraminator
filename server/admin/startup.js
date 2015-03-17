Meteor.startup(function() {
  var smtp = {
    username: 'restauraminator@gmail.com',
    password: 'WbDLYizvVHe2LB3P',
    server:   'smtp.gmail.com',
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
