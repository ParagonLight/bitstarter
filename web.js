var fs = require('fs');

var express = require('express');


var fileName = "index.html";
var content = fs.readFileSync(fileName, "utf-8");


var app = express.createServer(express.logger());

var buffer = new Buffer(content,"utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
