var net = require('net');
var TcpProxy = require('tcp-proxy');

var targets = [{
  host: '127.0.0.1',
  port: 8001
}, {
  host: '127.0.0.1',
  port: 8002
}];

var i = 0;

var proxies = targets.map(function (target) {
  return new TcpProxy({
    target: target
  });
});

var server = net.createServer(function(socket) {
  console.log('new connection', i % proxies.length);
  proxies[i++ % proxies.length].proxy(socket, {});
});

server.listen(8000);
