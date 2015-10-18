var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/sampleData.json'); 

var writable = fs.createWriteStream(__dirname + '/sampleDataCopyPipe.json');

var compressed = fs.createWriteStream(__dirname + '/sampleDataCopyComp.json.gz');

var gzip = zlib.createGzip(); // transformer that compresses any chunk sent to it. this is readable and writeable stream.

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);

// file stream -> transformer stream -> file writer stream
// resource stream -> processing stream -> resource stream