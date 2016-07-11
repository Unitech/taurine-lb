
var net = require('net');
var websocket = require('websocket-driver');

//ee1.setMaxListeners(Infinity)

// var targets = [{
//   host: '127.0.0.1',
//   port: 8001
// }, {
//   host: '127.0.0.1',
//   port: 8002
// }];

var targets = ['/tmp/s3.sock','/tmp/s4.sock'];

var i = 0;

var server = net.createServer(function(socket) {

  // var driver = websocket.server();

  // driver.on('connect', function() {
  //   if (websocket.isWebSocket(driver)) {
  //     driver.start();
  //   } else {

  //   }
  // });

  socket.setNoDelay(true);
  var proxy = net.createConnection(targets[0]);
  var ABproxy = net.createConnection(targets[1]);
  proxy.setNoDelay(true);
  ABproxy.setNoDelay(true);

  proxy.pipe(socket).pipe(proxy);
  socket.pipe(ABproxy).on('data', function(buff) {
    console.log(buff.toString());
  });
  //ABproxy.pipe(socket).pipe(ABproxy);

  socket.on('error', function(e) {
    console.error(e);
  });
});

server.listen(8000);
