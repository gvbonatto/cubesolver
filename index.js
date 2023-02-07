var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var Serialport = require('serialport');
var readline = require('@serialport/parser-readline');
var port = new Serialport('COM6', {
  baudRate: 9600,
});

const parser = new readline();
port.pipe(parser);

port.on('open', function() {
  console.log('Porta aberta');
});

io.on('connection', function(socket){
 console.log('socket.io connection');
 socket.on('input-text', function(data){
   port.write(data + 'T');
 });
 socket.on('disconnect', function(){
   console.log('disconnected');
 });
});

port.on('data', function() {
  console.log(data);
});

app.use(express.static('static'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
});
