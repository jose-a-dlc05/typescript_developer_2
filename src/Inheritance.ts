// Inheritance is when a class can reuse the properties and methods of another class
// Use extends keyword to allow a class to inherit from another class
// Use super() in the constructor of the child class to call the constructor of the parent class
// Also, use the super.methodInParentClass() syntax to invoke the methodInParentClass() in the method
// of the child class.

class Person {
	constructor(protected firstName: string, protected lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	describe(): string {
		return `This is ${this.firstName}`;
	}
}

class Athlete extends Person {
	constructor(firstName: string, lastName: string, private sport: string) {
		super(firstName, lastName);
	}

	describe(): string {
		return `${this.firstName} ${this.lastName} is a ${this.sport} player!`;
	}
}

// An instance
const athleteOne: Athlete = new Athlete('Michael', 'Jordan', 'Basketball');
console.log(athleteOne.describe());
