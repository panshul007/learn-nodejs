//Simplest possible event emitter
// constructor
function Emitter() {
	this.events = {};
}

// method used to add event handlers to the events array. i.e, it receives an event type and its listner action and adds to the events array.
Emitter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

// method gets event type, fetches the array of event handlers (listners) and loops through them executing them one by one.
Emitter.prototype.emit = function(type) {
	if (this.events[type]) {
		this.events[type].forEach(function(listener){
			listener();
		});
	}
}

module.exports = Emitter;