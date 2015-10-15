var buff = new Buffer('Hello', 'utf8');
console.log(buff);
console.log(buff.toString());
console.log(buff.toJSON());
console.log(buff[2]); // since buffer is an array.

//we can also write data to buffer
buff.write('wo');
console.log(buff.toString());