var path = require('path');
var internals = {};

exports.register = function Company (facet, options, next) {

  facet.views({
    engines: { hbs: 'handlebars' },
    path: path.resolve(__dirname, 'templates'),
  });

  facet.route({
    path: "/",
    method: "GET",
    handler: function(request, reply) {
      reply.view('index', {});
    }
  });

  next();
};