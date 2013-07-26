function MatchError (message) {
  this.message = message;
  this.name = "MatchError";
}

var send = function (request) {
  var emailParams = request.payload;

  // Load All Rules
  if(fs.existsSync("./rules/all.js")){
    var rules = require("./../rules/all");
  }else{
    var rules = {};
  }

  // Load Endpoint Rules
  if(request.params.endpoint && fs.existsSync("./rules/" + request.params.endpoint + ".js")){
    var endpointRules = require("./../rules/" + request.params.endpoint);
    for (var field in endpointRules) {
      if (endpointRules.hasOwnProperty(field)) {
        rules[field] = endpointRules[field];
      }
    }
  }

  try {

    // Validate Email Rules
    for (var field in rules) {
        if (rules.hasOwnProperty(field)) {
          if(!emailParams[field].match(rules[field])){
            throw new MatchError("Could not match: " + field);
          }
        }
    }

    email = new Email(emailParams);

    sendgrid.send(email, function(success, message) {
      if (!success) {
        request.reply({success: false, error: {type: "SendGrid Error", message: message}});
      } else {
        request.reply({success: true, email: email});
      }
    });

  } catch (e) {
    if(e instanceof MatchError){
      request.reply({success: false, error: {type: "Validation Error", message: e.message}});
    } else {
      request.reply({success: false, error: {type: "Unknown Error", message: e.message}});
    }
  }
};

server.route([
  {
    method  : 'POST',
    path    : '/send',
    handler : send
  },
  {
    method  : 'POST',
    path    : '/send/{endpoint?}',
    handler : send
  }
]);
