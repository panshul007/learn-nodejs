var Emitter = require('./emitter')

var emtr = new Emitter();

// when an event 'greet' happens
emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});

// another listener for the event 'greet'
emtr.on('greet', function() {
	console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');