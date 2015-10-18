// using dynamic template -> manipulating strings before sending to response.
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	
	res.writeHead(200, { 'Content-Type': 'text/html' });
	var html = fs.readFileSync(__dirname + '/index3.html', 'utf8');
	var message = 'Hello World...!!!';
	html = html.replace('{Message}', message);
	res.end(html);
	
}).listen(1337, '127.0.0.1');