
function hash (ip, len) {
  var parts = '';
  for (var i = 0, _len = ip.length; i < _len; i++) {
    if (ip[i] >= '0' && ip[i] <= '9') {
      parts += ip[i];
    }
  }
  return Number(parts) % len;
}

console.log(hash('1.4.111.3', 3));
