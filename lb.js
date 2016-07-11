
var net = require('net');

const LB_MODE = 'leastconn';

var targets = [{
  host: '127.0.0.1',
  port: 8001,
  active_conn : 0,
  errors : 0
}];

// , {
//   host: '127.0.0.1',
//   port: 8002,
//   active_conn : 0,
//   errors : 0
// }, {
//   host: '127.0.0.1',
//   port: 8003,
//   active_conn : 0,
//   errors : 0
// }
var rri = 0;

function iphash (ip, len) {
  var parts = '';
  for (var i = 0, _len = ip.length; i < _len; i++) {
    if (ip[i] >= '0' && ip[i] <= '9') {
      parts += ip[i];
    }
  }
  return Number(parts) % len;
}

var server = net.createServer(function(socket) {
  var target_process;

  var meta = socket.address();

  if (LB_MODE == 'round_robin')
    target_process = targets[rri++ % targets.length];
  else if (LB_MODE == 'iphash')
    target_process = targets[iphash(meta.address, targets.length)];
  else if (LB_MODE == 'leastconn') {
    target_process = targets.sort(function(o, t) {
      return o.active_conn >= t.active_conn;
    })[0];
  }

  target_process.active_conn++;

  console.log('Redirecting connection to %s:%s',
              target_process.host,
              target_process.port);
  var proxy = net.createConnection(target_process);

  socket.setNoDelay(true);
  proxy.setNoDelay(true);

  proxy.pipe(socket).pipe(proxy);

  socket.on('end', function() {
    target_process.active_conn--;
  });

  socket.on('error', function(err) {
    target_process.active_conn--;
    socket.end();
  });

  proxy.on('error', function(err) {
    // @todo if error > max = drop host in targets array
    target_process.errors++;
    if (err.code != 'ECONNRESET' && err.code != 'ECONNREFUSED') {
        console.log(err);
      target_process.active_conn--;
    }
    socket.end();
  });
});

setInterval(function() {
  console.dir(targets);
}, 2000);
server.listen(7000, function() {
  console.log('listening on 7000');
});
