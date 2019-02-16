interface NamedPerson {
	firstName: string;
	age?: number; // age is optional
	[propName: string]: any; // unknown props
	greet(lastName: string): void;
}

function greet(person: NamedPerson) {
	console.log(`Hello ${person.firstName}`);
}

function changeName(person: NamedPerson) {
	person.firstName = 'Arya';
}
const person: NamedPerson = {
	firstName: 'Jules',
	age: 15,
	hobbies: [ 'cooking', 'sports' ],
	greet(lastname: string) {
		console.log(`Hi, I am ${this.firstName} ${lastname}`);
	}
};

greet(person);
changeName(person);
greet(person);
person.greet('Pierce');

class Person implements NamedPerson {
	firstName: string = 'Arya';
	greet(lastname: string) {
		console.log(`Hi, I am ${this.firstName} ${lastname}`);
	}
}

const newPerson = new Person();
newPerson.greet('Stark');

// passing in properties as arguments
// interface NamedPerson {
//   firstName: string;
//   age: number
// }

// greet({ firstName: "Eva", age: 34 });

// Function Types

interface DoubleValueFunc {
	(num1: number, num2: number): number;
}

let myDoubleFunction: DoubleValueFunc;

myDoubleFunction = (val1: number, val2: number) => (val1 + val2) * 2;

console.log(myDoubleFunction(3, 2));

// interface inheritance
interface AgedPerson extends NamedPerson {
	age: number;
}

const oldPerson: AgedPerson = {
	age: 27,
	firstName: 'Lee',
	greet(lastname: string) {
		console.log(`Hi, I am ${this.firstName} ${lastname}`);
	}
};

console.log(oldPerson.greet('Adesoji'));
