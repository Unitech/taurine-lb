
var rocky = require('rocky')


var proxy = rocky({ forwardHost:true })

proxy
  .balance(['http://localhost:8001']);

proxy.routeAll();

proxy.listen(3000);
