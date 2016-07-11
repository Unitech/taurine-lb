
var http = require('http');

var server = http.createServer(function(req, res) {
  //console.log('got data', req.url);
  res.writeHead(202);
  res.end('hey');
}).listen(process.env.PORT || 8001, function() {
  console.log('App listening on port 8001');
});
