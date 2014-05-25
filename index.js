var express = require('express');
var connect = require('connect');
var fs = require('fs');
var htmlfile = "index.html";

var app = express();

app.get('/', function(request, response) {
  response.send(fs.readFileSync(htmlfile).toString());
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
