// function constructor

function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname);
}

var john = new Person('John', 'Doe');

console.log(john.firstname);
john.greet();
