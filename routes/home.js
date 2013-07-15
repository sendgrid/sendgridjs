var home = {
  index: {
    handler: function (request) {
      request.reply({ success: true, message: 'You are using sendgridjs.' });
    }
  }
};

server.route({
  method  : 'GET',
  path    : '/',
  config  : home.index
});
