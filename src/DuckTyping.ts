interface Human {
	fName: string;
	lName: string;
	getFullName(): string;
}

class Employee implements Human {
	fName: string = 'Harry';
	lName: string = 'Truman';
	getFullName(): string {
		return this.fName + this.lName;
	}
}

let aHuman: Human = new Employee();

let someObj = {
	first: 'Test',
	last: 'Test',
	getFull: () => 'Test',
};

aHuman = someObj;

// Duck-Typing is a method/rule used to check the type compatibility for more complex variable types.
// TypeScript uses the duck-typing method to compare one object with other objects by checking that both
// objects have the same type matching names or not. We cannot change the signature of a variable.

// These two objects are different but have the same property 'shape'.
// class Fruit {
// 	shape = 'round';
// }

// class Flower {
// 	shape = 'beautiful';
// }

// class Plant {
// 	shape = 'straight line';
// 	allWeather = 'false';
// }

// const apple: Fruit = new Fruit();
// const orange: Fruit = new Flower();
// const rose: Flower = new Fruit();
// const cucumber: Plant = new Fruit();

// You can see I can initialize orange of type Fruit with class Flower because the signature (structure) is the same. But with the variable cucumber of type Plant a compilation error comes up.

// The point here is that TypeScript does not care about the initializing class as long as it has all the props and methods of the class used for the type.

// It requires the structure to match but does not have to be a strict instance of classes or behavior
