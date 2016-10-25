var send = {
  index: {
    handler: function (request) {
      var payload   = request.payload;
      var from      = payload.from;
      var subject   = payload.subject;
      var html      = payload.html;
      var email     = {
        to:       TO,
        from:     from,
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
  method  : 'POST',
  path    : '/send',
  config  : send.index
});
