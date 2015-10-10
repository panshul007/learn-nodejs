// Node looks for native modules if no path is specified, only a file name is specified. 

var util = require('util');

var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting); 