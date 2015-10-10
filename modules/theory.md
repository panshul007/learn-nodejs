All modules are actually converted to Immediately Invoked Function Expression by node before it is passed to V8 for execution.

```javascript
var greetSample = function(){
	console.log('Hello');	
}

module.exports = greetSample;
```

is actually converted to 

```javascript
(function (exports, require, module, __filename, __dirname) {
	var greet = function(){
	console.log('Hello');	
	}

	module.exports = greet;
});
```

### Stage 1
What we did here is create two modules:
 * english.js
 * spanish.js
 
Both of which have the same function `greet` and the `module.eports = greet`
They return the the greeting in english and in spanish respectively.

These modules could be simply used requring them. To make the code better.
Another module is created to encapsulate these two modules.
`index.js` -> simply requires these two modules and exports them as a single module as:

```javascript
module.exports = {
	english: english,
	spanish: spanish
}
``` 

In the file `module-app.js`, these modules are required and used. 
Instead of calling the filename, the directory path is used in the require statement.
Node will look for `modules.js`, if this file is not found, then it will search for a directory by the same name in the given
path. 
So in this case, the `modules` folder is imported with all the js files inside it. 

### Points to note:

Since a module is an IIFE, it is always advisable to have one entry point method. In other words one public method in a module.

Node will cache the module objects with the filenames. So multiple requests to a module are returned references to the same object. So take care to 
keep the modules stateless.