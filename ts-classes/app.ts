class Person {
	name: string;
	protected age: number = 27;

	constructor(name: string, public username: string) {
		this.name = name;
	}

	printAge() {
		console.log(this.age);
	}
}

const person = new Person('Arya', 'Ariadne');

console.log(person);

// Inheritance
class Eva extends Person {
	constructor(username: string) {
		super('Max', username);
		this.age = 32;
	}
}

const max = new Eva('Evangeline');
console.log(max);

// Getters & Setters
class Plant {
	// private _species: string;
	constructor(private _species: string) {}

	get species() {
		return this._species;
	}

	set species(value: string) {
		value.length > 3 ? (this._species = value) : (this._species = 'Default');
	}
}

let plant = new Plant('Tallinum');

console.log(plant.species);

plant.species = 'Crysanthum';
console.log(plant.species);

// static properties & methods
class Helpers {
	static PI: number = 3.14; // property can be used without instantiating class
	static calcCircu(diameter: number): number {
		return this.PI * diameter;
	}
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircu(5));

// Abstract classes - cannot be instantiated directly
// you have to inherit from them always to use their props & methods
abstract class Project {
	projectName: string = 'Default';
	budget: number = 500;

	abstract changeName(name: string): void;

	calcBudget() {
		return this.budget * 2;
	}
}

class ITProject extends Project {
	// changeName must be implemented
	changeName(name: string): void {
		this.projectName = name;
	}
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super Project');
console.log(newProject);

// Private constructors

// Exercises
// 1
class Car {
	acceleration: number = 0;
	constructor(public name: string) {
		this.name = name;
	}

	honk(): void {
		console.log('Toooooooot!');
	}

	accelerate(speed: number): void {
		this.acceleration += speed;
	}
}

let car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// 2
class BaseObject {
	public width: number = 0;
	public length: number = 0;
}

class Rectangle extends BaseObject {
	calcSize(): number {
		return this.width * this.length;
	}
}

let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle);
console.log(rectangle.calcSize());

// 3
class People {
	private _firstName: string = '';

	get firstName() {
		return this._firstName;
	}

	set firstName(value: string) {
		value.length > 3 ? (this._firstName = value) : (this._firstName = '');
	}
}

let people = new People();
console.log(people.firstName);
people.firstName = 'Ma';
console.log(people.firstName);
people.firstName = 'Schwarz';
console.log(people.firstName);
