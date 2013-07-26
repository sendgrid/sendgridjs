var home = function (request) {
      request.reply({success: true, message: 'You are using sendgridjs.' });
};

server.route({
  method  : 'GET',
  path    : '/',
  handler : home
});
