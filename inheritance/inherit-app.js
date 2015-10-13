var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = 'Hello World! inheritance!!';
}

util.inherits(Greetr, EventEmitter);
// All the objects created from Greetr will also get access to the methods and properties
// of EventEmitter

//We can still add methods and properties to the Greetr prototype.
Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data); // list of parameters I want to pass with the event
}

var greet1 = new Greetr();

greet1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greet1.greet('Tony');
