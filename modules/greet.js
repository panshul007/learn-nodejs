var greetSample = function(){
	console.log('Hello');	
}

module.exports = greetSample;

// All modules are actually converted to Immediately Invoked Function Expression by node before it is passed to V8 for execution.

//The above module is actually converted to :
/*
(function (exports, require, module, __filename, __dirname) {
	var greet = function(){
	console.log('Hello');	
	}

	module.exports = greet;
});
*/