'use strict';

var EventEmitter = require('events');

class Greetr extends EventEmitter {
	constructor() {
		super();
		this.greeting = 'Hello World! inheritance classes!!';	
	}
	
	greet(data) {
		console.log(`${ this.greeting }: ${ data }`);
		this.emit('greet', data); 	
	}
}

var greet1 = new Greetr();

greet1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greet1.greet('Tony');
