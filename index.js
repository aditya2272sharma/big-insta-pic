var http = require('http');
var port = process.env.PORT || 5000;

http.createServer(function(req, res){
  res.statusCode = 200;
  res.setEncoding('utf8');
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}).listen(port);
