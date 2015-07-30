require('./lib/server')(1337);
var port = process.env.PORT || 1337;
require('./lib/server')(port);

console.log('Server running on http://localhost:1337');
