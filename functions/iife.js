// Imediately Invoked Function Expression

// wrapping the function in () tells that its a function.

// () after the function definition invokes the function immediately.

// Scope -> objects defined inside a function is protected or isolated by the function. cannot be accessed outside the function.

(function (lastname) {
	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);
}('Doe'));

var firstname = 'Jane';
console.log(firstname);
