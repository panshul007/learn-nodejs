var moment = require('moment');
console.log(moment().format("ddd, hA"));

var express = require('express');
var app = express();

var port = process.env.PORT || 3000; // process.env gets the environment variable.

app.set('view engine', 'ejs'); // set the template engine.

app.use('/assets', express.static(__dirname + '/public')); // middle ware to stream the static files from public folder to the response.

//Creating ur own middleware. Very powerful to reuse the requsts and response. u can also use other third party middle wares as well.
app.use('/', function(req, res, next) {
	console.log('Request Url: ' + req.url);
	next(); // calls the next middleware function.
});

app.get('/', function(req, res) {
	res.render('index');
});

// app.get('/', function(req, res) {
// 	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>Hello World Express</h1></body></html>');
// });

// app.get('/person/:id', function(req, res) {
// 	res.send('<html><head></head><body><h1>Person: ' + 
// 	req.params.id + '</h1></body></html>');
// });

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id });
});


app.get('/personqstr/:id', function(req, res) {
	res.render('personqstr', { ID: req.params.id, QSTR: req.query.qstr });
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe'});
});

app.listen(port);