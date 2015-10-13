//NOTE -> we need the jsconfig.json file to tell the compiler the target compile version. to avoid getting errors.

//Template Literals ->
// A way to concatenate strings in Javascript (ES6)

var name = 'John Doe';

var greet1 = 'Hello ' + name;

var greet2 = `Hello ${ name }`; // This is a template literal.

console.log(greet1);
console.log(greet2);