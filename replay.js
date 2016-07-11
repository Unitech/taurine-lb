
var net = require('net');

var targets = [{
  host: '127.0.0.1',
  port: 8001
}, {
  host: '127.0.0.1',
  port: 8002
}];

var i = 0;

var server = net.createServer(function(socket) {
  var proxy   = net.createConnection(targets[0]);
  var ABproxy = net.createConnection(targets[1]);

  socket.setNoDelay(true);
  proxy.setNoDelay(true);
  ABproxy.setNoDelay(true);

  proxy.pipe(socket).pipe(proxy);

  // Forward same traffic to ABProxy
  socket.pipe(ABproxy).on('data', function(buff) {
    // Here we retrieve result of test server
    console.log(buff.toString());
  });

  socket.on('error', function(e) {
    console.error(e);
  });
});

server.listen(8000);
