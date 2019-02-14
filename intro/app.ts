// string
let myName = 'Fola';
// myName = 27;

// number
let myAge = 27;
// myAge = "Fola"

// boolean
let hasHobbies = true;
// hasHobbies = 1;

// explicit types
let myRealAge: number;
myRealAge = 26;

// array
let hobbies: any[] = [ 'Cooking', 'Gaming' ];
hobbies = [ 100 ];

// tuples
let address: [string, number] = [ 'Supers', 99 ];

// enums - used to make numbers more expressive
enum Color {
	Gray, // 0
	Green = 100, // 100
	Blue // 101
}

let myColor: Color = Color.Green;
// myColor => 100;

// any - use this rarely
let car: any = 'BMW';
car = { brand: 'BMW', series: 3 };

// functions
// the type string specifies what the return value should be
function returnName(): string {
	return myName;
}

// void - you can't return anything in a void function
function sayHello(): void {
	console.log('Hello thee');
}

// argument types
function multiply(value1: number, value2: number): number {
	return value1 * value2;
}

// function types
let myMultiply: (val1: number, val2: number) => number;

// objects and types
let userData: { name: string; age: number } = {
	name: 'Fola',
	age: 26
};
// userData = {} // doesn't work

// complex object
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex: { data: number[]; output: (all: boolean) => number[] } = {
	data: [ 100, 3.99, 10 ],
	output: function(all: boolean): number[] {
		return this.data;
	}
};

let complex2: Complex = {
	data: [ 100, 3.99, 10 ],
	output: function(all: boolean): number[] {
		return this.data;
	}
};

// union types
// either a number or a string
let myRealRealAge: number | string = 28;

// check types
let finalValue = 'a string';

if (typeof finalValue === 'string') {
	console.log('Final value is a number');
}

// never
function neverReturns(): never {
	throw new Error('An error');
}

// nullable
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;

// Exercise
type BankAccount = { money: number; deposit: (val: number) => void };

let bankAccount: BankAccount = {
	money: 2000,
	deposit(value: number) {
		this.money += value;
	}
};

let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
	name: 'Max',
	bankAccount: bankAccount,
	hobbies: [ 'Sports', 'Cooking' ]
};

myself.bankAccount.deposit(3000);

console.log(myself);
