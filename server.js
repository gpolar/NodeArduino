var express = require('express');
var five = require("johnny-five");

var app = express();
var board = five.Board({"port":"COM3"});

var relay;
var temperature;

board.on("ready", function(){
    console.log("Arduino ")
    relay = new five.Relay(13);
    temperature = new five.Thermometer({
        controller: "LM35",
        pin: "A0"
    });

});

app.all('/*', function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');

    res.header('Access-Control-Allow-Headers','Content-type,X-Access-Token,X-Key,x-requested-with');

    next();
});

app.get('/temperature', function(req, res)
{
    res.send(temperature.celsius + "°C" + " - " + temperature.fahrenheit + "°F");
});

app.get('/ligar', function(req, res)
{
    relay.on();
    res.send('Ligado');
});

app.get('/desligar', function(req, res)
{
    relay.off();
    res.send('Desligado');
});

app.get('/', function(req, res)
{
    res.send('FIAP IOT');
});



var server = app.listen(3000);
console.log('Servidor na porta: %s', server.address().port);