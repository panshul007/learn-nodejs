var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', 
function(err, data) { // Error-first callback -> a callback method will always pass error if any as first parameter. will be null if no error.
	console.log(data);
});

console.log('Done!');