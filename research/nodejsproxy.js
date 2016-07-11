var http = require('http');

//var request    = require('request');
var url = require('url');

http.createServer(function(req, res) {

  //var options = url.parse(request.url);
  var options = {
    port : '8001',
    host : '127.0.0.1'
  }

  //req.pause();

  var connector = http.request(options, function(serverResponse) {
    //serverResponse.pause();
    //res.writeHeader(serverResponse.statusCode, serverResponse.headers);
    serverResponse.pipe(res);
    //serverResponse.resume();
  });
  req.pipe(connector);
  //req.resume();

  // var a = request({
  //   url : 'http://localhost:8001/',
  //   form: req.body
  // });

  // req.pipe(a)
  //   .pipe(res);



  //var proxy = http.createClient(80, "google.com");
  // var proxy_request = http.request({
  //   host : '127.0.0.1',
  //   port : 8001
  // }, function(res) {
  //   response.pipe(res);
  //   //res.pipe(response);
  // })

                                   // request.url, request.headers);
  // proxy_request.on('response', function (proxy_response) {
  //   proxy_response.pipe(response);
  //   response.writeHead(proxy_response.statusCode, proxy_response.headers);
  // });

  // request.pipe(proxy_request);
}).listen(4000);
