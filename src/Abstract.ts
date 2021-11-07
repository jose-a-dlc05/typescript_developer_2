// Classes
// An Abstract class is usually used to define common behaviors for derived classes to extend.
// Abstract classes cannot be instantiated.
// An Abstract class has at least one abstract method.
// To use an abstract class, you need to inherit it and provide the implementation for the abstract methods.

abstract class Animal {
	// constructor declares the name and favoriteFood properties.
	constructor(protected name: string, protected favoriteFood: string) {}

	abstract getFood(): string;

	nameOfAnimal(): string {
		return `This is a(n) ${this.name}`;
	}

	eatStatements(): string {
		return `${this.name} like to eat ${this.favoriteFood}`;
	}
}

class Lion extends Animal {
	constructor(name: string, favoriteFood: string) {
		super(name, favoriteFood);
	}

	getFood(): string {
		return `Lion is attacking it's prey, ${this.favoriteFood}`;
	}
}

class Elephant extends Animal {
	constructor(name: string, favoriteFood: string) {
		super(name, favoriteFood);
	}

	getFood(): string {
		return `Elephant is getting ready to eat ${this.favoriteFood}`;
	}
}

let lion = new Lion('Lion', 'Gazelle');
console.log(lion.nameOfAnimal());
console.log(lion.eatStatements());
console.log(lion.getFood());

let elephant = new Elephant('Elephant', 'peanuts');
console.log(elephant.nameOfAnimal());
console.log(elephant.eatStatements());
console.log(elephant.getFood());
