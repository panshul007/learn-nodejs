var obj = {
	name: 'John Doe',
	greet: function(param) {
		console.log(`Hello ${ this.name }`);
		console.log(`parameter: ${ param }`);
	}
}

obj.greet('normal');
obj.greet.call({ name: 'Jane Doe' }, 'call'); // The parameter in the `call` over rides the 'this' object in the 'obj'.
//makes it very powerfull to borrow objects and pass an object on which we want them to work with. 
obj.greet.apply({ name: 'Jane Doe' }, ['apply']); 
// Does the same thing... only difference being, 'call' accepts comma separated parameters, after the object reference.
// The apply method accepts an array of parameters.
// The parameters in our case being -> if the 'greet' method accepts a parameter, then we can pass value to this parameter 
// with call and apply in their respective ways.