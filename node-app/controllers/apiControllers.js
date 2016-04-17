module.exports = function(app) {
	
	app.get('/api/person/:id', function(req, res) {
		// get the data from database
		res.json({ firstname: 'John', lastname: 'Doe' });
	});
	
	app.post('/api/person', jsonParser, function(req, res) {
		// save to database 
	});
	
	app.delete('api/person/:id', function(req, res) {
		// delete from the database
	});
}