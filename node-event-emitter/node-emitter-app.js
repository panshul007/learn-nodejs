var Emitter = require('events')

// For using event type enums. Typing event strings might cause untraceable typo bugs.
var eventConfig = require('./config').events;

var emtr = new Emitter();

// when an event 'greet' happens
emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

// another listener for the event 'greet'
emtr.on(eventConfig.GREET, function() {
	console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');