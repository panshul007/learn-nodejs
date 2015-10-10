// Pattern 3

// replace exports with custom object.

function Greetr() {
	this.greeting = 'Hello World!!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

// Use the constructor to create a new custom object and have exports return this new object. 
module.exports = new Greetr();