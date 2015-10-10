// Patern 1
var greet = require('./modules/module-patterns/greet1');
greet();

// Pattern 2
var greet2 = require('./modules/module-patterns/greet2');
greet2.greet();

// or u can specify which method is required from the export.
var greet2_1 = require('./modules/module-patterns/greet2').greet;
greet2_1();

// Pattern 3
var greet3 = require('./modules/module-patterns/greet3');
greet3.greet();

// check if the same module is required again, do we get a new object or the same object is returned.
greet3.greeting = 'Changed Hello World!!!';

var greet3b = require('./modules/module-patterns/greet3');
greet3b.greet();
// In this test, greet3b is assigned the reference to the same object as greet3.
// Hence the modules are cached by the filename. 

// Pattern 4 -> getting a new object on calling the module.
var Greet4 = require('./modules/module-patterns/greet4');
var grtr = new Greet4();
grtr.greet();

//Pattern 5
var greet5 = require('./modules/module-patterns/greet5').greet;
greet5();