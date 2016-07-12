var NginxConfFile = require('nginx-conf').NginxConfFile;

NginxConfFile.create('/etc/nginx/nginx.conf', function(err, conf) {
  console.log(conf.nginx.http.upstream[0]._add('server', '127.0.0.1:8003'));
});
