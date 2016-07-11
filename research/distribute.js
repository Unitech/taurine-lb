var http = require('http').createServer().listen(3000)
, srv = require('distribute')(http);

srv.use(function (req, res, next) {
  next(8001);
});
