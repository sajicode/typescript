// decorators are functions you can attach to classes ,methods and properties

// decorator attached to class
function logged(constructorFn: Function) {
	console.log(constructorFn); // logs the class it is attached to
}

@logged
class Person {
	constructor() {
		console.log('Hello');
	}
}

// Factory
// function logging(value: boolean) {
// 	return value ? logged : null;
// }

// @logging(true)
// class Car {}

// Advanced
function printable(constructorFn: Function) {
	constructorFn.prototype.print = function() {
		// sets the print property on every class that uses this decorator
		console.log(this);
	};
}

@printable
class Plant {
	name: string = 'Green plant';
}

const plant = new Plant();
(<any>plant).print();

// Method decorators
// Property decorators
function editable(value: boolean) {
	return function(target: any, propName: string, descriptor: PropertyDescriptor) {
		descriptor.writable = value;
	};
}

function overWritable(value: boolean) {
	return function(target: any, propName: string): any {
		const newDescriptor: PropertyDescriptor = {
			writable: value
		};
		return newDescriptor;
	};
}

class Project {
	@overWritable(true) // prevents writing access to the property below (projectName)
	projectName: string;

	constructor(name: string) {
		this.projectName = name;
	}

	// false makes calcBudget uneditable & true makes it editable
	@editable(true)
	calcBudget() {
		console.log(1000);
	}
}

const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = function() {
	console.log(2000);
};
project.calcBudget();
console.log(project);

// Parameter decorators
function printInfo(target: any, methodName: string, paramIndex: number) {
	console.log(`Target: ${target}`);
	console.log(`Target: ${methodName}`);
	console.log(`Target: ${paramIndex}`);
}

class Course {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	printStudentNumbers(mode: string, @printInfo printAll: boolean) {
		if (printAll) {
			console.log(10000);
		} else {
			console.log(2000);
		}
	}
}

const course = new Course('Titan');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
