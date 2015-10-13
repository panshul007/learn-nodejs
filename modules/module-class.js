'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter { // This is the class expression.
	constructor() {
		super();
		this.greeting = 'Hello World! inheritance classes!!';	
	}
	
	greet(data) {
		console.log(`${ this.greeting }: ${ data }`);
		this.emit('greet', data); 	
	}
}