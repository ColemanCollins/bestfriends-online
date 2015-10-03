// this is the server that uses node-static to serve up the generated static files on heroku.
var static = require('node-static');
var file = new static.Server();
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);

// i think we can eventually pass in some fancy callbacks to serve multiple 'sites' if desired, 
// as well asgracefully handle things like 404 and 500 errors
// ...one day.