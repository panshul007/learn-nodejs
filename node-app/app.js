var moment = require('moment');
console.log(moment().format("ddd, hA"));

var express = require('express');
var app = express();

var port = process.env.PORT || 3000; // process.env gets the environment variable.

app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello World Express</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe'});
});

app.listen(port);