var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/sampleData.json', 
{ //options
	encoding: 'utf8', // define encoding 
	highWaterMark: 32 * 1024 // define size of buffer 
}); 

var writable = fs.createWriteStream(__dirname + '/sampleDataCopy.json');

readable.on('data', function(chunk) {
	console.log(chunk.length);
	writable.write(chunk);
});