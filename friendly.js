var express = require('express');
var fs = require('fs');
var htmlfile = "friendly.html";

var app = express();
app.use("/styles", express.static(__dirname + "/styles"));

app.get('/', function(request, response) {
  response.send(fs.readFileSync(htmlfile).toString());
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
