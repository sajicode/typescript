// let & const
let variable = 'Test';
console.log(variable);

variable = 'Another variable';
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);

// maxLevels = 99

// Block scope var vs let
function reset() {
	let variable = null;
	console.log(variable);
}

reset();
console.log(variable);

// Exercise
// 1
let double = (value: number): number => value * 2;
console.log(double(10));

// 2
let greet = (name = 'Julian') => {
	console.log(`Hello ${name}`);
};

greet();
greet('Florian');

// 3
let numbers = [ -3, 33, 38, 5 ];

console.log(Math.min(...numbers));

// 4
let newArray = [ 55, 20 ];

newArray.push(...numbers);
console.log(newArray);

// 5
let testResults = [ 3.89, 2.99, 1.38 ];

console.log(...testResults);

// 6
const scientist = { firstName: 'Will', experience: 12 };

let { firstName, experience } = scientist;

console.log(firstName, experience);
