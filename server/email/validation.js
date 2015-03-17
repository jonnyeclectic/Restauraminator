Future = Npm.require('fibers/future');

Meteor.methods({
  validateEmailAddress: function(address) {
    check(address, String);

    var validateEmail = new Future();

    HTTP.call("GET", "https://api.kickbox.io/v1/verify", {
      params: {
        email: address,
        apikey: "acdc7407d0ed76208b8c956adbac5cfa865885e7bd8fafb63ad297c32286b473"
      }
    }, function(error, response) {
      if (error) {
        return validateEmail["return"](error);
      } else {
        if (response.data.result === "invalid" || response.data.result === "unknown") {
          return validateEmail["return"]({
            error: "Sorry, your email was returned as invalid. Please try another address."
          });
        } else {
          return validateEmail["return"](true);
        }
      }
    });

    return validateEmail.wait();
  }
});