var send = {
  index: {
    handler: function (request) {
      var to        = request.query.to;
      var subject   = request.query.subject;
      var html      = request.query.html;
      var email     = {
        to:       to,
        from:     FROM,
        subject:  subject,
        html:     html 
      }

      SendGrid.send(email, function(success, message) {
        if (!success) {
          request.reply({success: false, error: {message: message}});
        } else {
          request.reply({success: true, email: email});
        }
      });
    }
  }
};

server.route({
  method  : 'GET',
  path    : '/send',
  config  : send.index
});
