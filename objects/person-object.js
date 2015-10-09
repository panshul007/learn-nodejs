var  person = {
	firstname: 'John',
	lastname: 'Doe',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
}

person.greet();

// also we can access the properties of an objects:

console.log(person['firstname']);