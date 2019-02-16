// Simple generic
function echo(data: any) {
	return data;
}

console.log(echo('Jul'));
console.log(echo(29));
console.log(echo({ name: 'Jul', age: 29 }));

// Better generic function
function betterEcho<T>(data: T) {
	return data;
}

console.log(betterEcho('Jul').length);
console.log(betterEcho(29));
console.log(betterEcho({ name: 'Jul', age: 29 }));

// Built-in Generics
const testResults: Array<number> = [ 1, 94, 2.33 ];
console.log(testResults.length);

// testResults.push("string") // wont work

// Arrays
function printAll<T>(args: T[]) {
	args.forEach((element) => console.log(element));
}

printAll<string>([ 'Apple', 'Banana' ]);

// Using Generic Types
const echo2: <T>(data: T) => T = betterEcho;
// constant should hold a function and also returns data

console.log(echo2<string>('Something'));

// Generic class

// class SimpleMath<T> {
// 	baseValue: T = 4;
// 	multiplyValue: T = 8
// 	calculate(): number {
// 		return +this.baseValue * +this.multiplyValue; // + parses to a number
// 	}
// }

// Constraints

// Using more than one generic type
