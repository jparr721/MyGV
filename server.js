var http = require('http');
// var date = require('./modules.js');
var url = require ('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 ERROR BRO, ERROR MAN. IT'S ALL OVER");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(4200);

/**
var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/',  function(req, res){
    res.send('Hello World');
});
app.listen(port, function(err) {
    console.log('running server on port ' + port);
});

**/
