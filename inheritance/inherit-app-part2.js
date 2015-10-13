//NOTE -> please refer to inherit-app.js, commnets to explanations of part 1.

var EventEmitter = require('events');
var util = require('util');

// Currently we can add methods and properties to Greetr prototype and not the Greetr object.
// But what if the inherited EventEmitter creats or adds methods or properties to the Greetr object.
// These will not be propogated to the all the objects of Greetr... but only to a specific object.

// To solve this problem, we pass the object instance of Greetr object to the EventEmitter Constructor.

function Greetr() {
	//Part 2
	EventEmitter.call(this); // this -> the Greetr object instance passed to EventEmitter -> so all the properties and methods are
	// added to the this object. Hence all the objects of Greetr have the same properties and methods added by EventEmitter.
	//
	this.greeting = 'Hello World! inheritance!!';
}

util.inherits(Greetr, EventEmitter);


Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data); // list of parameters I want to pass with the event
}

var greet1 = new Greetr();

greet1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greet1.greet('Tony');
