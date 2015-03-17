Meteor.startup(function() {
  var smtp = {
    username: 'restauraminator@gmail.com',
    password: 'WbDLYizvVHe2LB3P',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 25
  }
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
