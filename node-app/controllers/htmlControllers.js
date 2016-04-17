module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.render('index');
	});
	
	app.get('/form', function(req, res) {
		res.render('indexform');
	});

	app.get('/json', function(req, res) {
		res.render('indexjson');
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
	
	app.post('/person', urlencodedParser, function(req, res) {
		res.send('Thank you!!');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});
}