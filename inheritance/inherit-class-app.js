'use strict';

// NOTE -> the classes in JS is very very different than that of Java or C++. It is just a function encapsulation. 
// Prototypal inheritance is differnt from the OOPS concepts. It is just syntactical sugar so be carefull.

class Person {
	// The methods and properties created in this block are added to the prototype of the entity.
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;	
	}
	
	greet() {
		console.log('Hello ' + this.firstname + ' ' + this.lastname);	
	}
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);