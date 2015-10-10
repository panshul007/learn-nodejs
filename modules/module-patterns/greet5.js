// Pattern 5
// The revealing module pattern.
// Exposing only the wanted properties and methods via a retuned object. 


var greeting = 'Hello World!!!!!';

function greet() {
	console.log(greeting);
}

module.exports = {
	greet: greet
}