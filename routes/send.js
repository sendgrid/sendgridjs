var send = {
  index: {
    handler: function (request) {
      var to        = request.query.to;
      var subject   = request.query.subject;
      var html      = request.query.html;

      SendGrid.send({
        to:       to,
        from:     FROM,
        subject:  subject,
        html:     html 
      }, function(success, message) {
        if (!success) {
          console.log(message);
        } else {
          request.reply({ success: true, message: 'Send the email here.' });
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
