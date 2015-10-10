// Pattern 4

// To get a different object everytime module is requested.

function Greetr() {
	this.greeting = 'Hello World!!!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

// In this case contrary to greet3 we do not construct the object and return, we make the export return the constructor function itself
// so that the caller can create an object as required. 
module.exports = Greetr;
