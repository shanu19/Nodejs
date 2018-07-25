var http =require('http');
var add = require('./ex_add.js');
var result = add.addtion (123,321);
var result1 = add.average (123,321);
//create a server object:
http.createServer(function (req, res) {
  res.write(result + \n); //write a response to the client
  res.write(result1); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
