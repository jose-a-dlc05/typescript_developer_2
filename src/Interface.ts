// An interface is like a contract. When we sign up to it, or make a class implement it, we must follow the rules of interface or face error messages.
// They're a bit like abstract classes, with only abstract methods and properties. No concrete implementation or data is held within an interface.
// Interfaces are duck typed. The compiler simply checks that we have at least the required members. The argument to the function need not be an instance or match the interface exactly.
// It just needs to satisfy its requirements, and it's important to remember that interfaces are just more syntactic sugar.
// Interfaces with optional properties are written similar to other interfaces, with each optional property denoted by a ? at the end of the property name in the declaration.

interface Persona {
	nombre: string;
	edad: number;
	telefono: string | null;
}

class Empleado implements Persona {
	nombre: string;
	edad: number;
	telefono: string | null;
	constructor(nombre: string, edad: number, telefono: string | null = null) {
		this.nombre = nombre;
		this.edad = edad;
		this.telefono = telefono;
	}
}

const miguel: Empleado = new Empleado('miguel', 29);

// Excess property checking
// TypeScript helps use catch a particular type of problem around the use of object literals.
// interface Car {
// 	make: string;
// 	model: string;
// 	year: number;
// 	chargeVoltage?: number;
// }

// const civic = {
// 	make: 'Honda',
// 	model: 'Civic',
// 	year: 2020,
// 	chargeVoltage: 220,
// };

// function printCar(car: Car) {
// 	return `
//     Make: ${car.make}
//     Model: ${car.model}
//     Year: ${car.year}
//     Voltage: ${car.chargeVoltage}
//   `;
// }

// console.log(
// 	printCar({
// 		make: 'Honda',
// 		model: 'Civic',
// 		year: 2020,
// 		chargeVoltage: 220,
// 		color: 'red',
// 	}) // Extra)
// );

// To fix this:
// 1. Remove the color property from the object
// 2. Add a color: string to the function argument type
// 3. Create a variable to hold this value, and then pass the variable into the printCar function

// Indexable Types
// AKA Index Signatures
// Sometimes we need to represent a type for dictionaries, where values of a consistent type are retrievable by keys

// const phones = {
// 	home: { country: '+1', area: '211', number: '652-4515' },
// 	work: { country: '+1', area: '670', number: '752-5856' },
// 	fax: { country: '+1', area: '322', number: '525-4357' },
// };

const phones: {
	[k: string]: {
		country: string;
		area: string;
		number: string;
	};
} = {};

phones.fax = { country: '+1', area: '322', number: '525-4357' };
phones.home = { country: '+1', area: '211', number: '652-4515' };

console.log(phones);

// Extending an Interface
// Just like in JavaScript, a subclass extends from a base class.
// Additionally, a "sub-interface" extends from a base interface
interface Tree {
	isAlive(): boolean;
}
interface Willow extends Tree {
	getHeight(): string;
}
interface WeepingWillow extends Willow {
	getSpread(): string;
}
function careForDog(willowTree: WeepingWillow) {}

// Class extending another class and also implementing an Interface
class LivingOrganism {
	isAlive() {
		return true;
	}
}
interface AnimalLike {
	eat(food: string): void;
}
interface CanBark {
	bark(): string;
}

class Dog extends LivingOrganism implements AnimalLike, CanBark {
	bark() {
		return 'woof';
	}
	eat(food: string) {
		return `Eats bone`;
	}
}
