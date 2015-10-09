// function statement
function greet() {
	console.log('hi');
}
greet();

// functions are first class -> that means we can pass then around like variables
function logGreeting(fn) {
	fn();
}
logGreeting(greet);

// function as an expression
var greetMe = function() {
	console.log('Hi Panshul');
} 
greetMe();
// function expressions are also first class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
	console.log('Hello Panshul Again..!!');
});