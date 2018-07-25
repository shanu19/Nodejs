var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('welcome to uki,I am Shanu!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
