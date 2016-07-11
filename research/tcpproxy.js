var tcpProxy = require('tcp-proxy');

var server = tcpProxy.createServer({
  target: {
    host: '127.0.0.1',
    port: 8001
  }
});

server.listen(8000);
