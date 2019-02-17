"use strict";
// decorators are functions you can attach to classes ,methods and properties
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// decorator attached to class
function logged(constructorFn) {
    console.log(constructorFn); // logs the class it is attached to
}
var Person = /** @class */ (function () {
    function Person() {
        console.log('Hello');
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// Factory
// function logging(value: boolean) {
// 	return value ? logged : null;
// }
// @logging(true)
// class Car {}
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        // sets the print property on every class that uses this decorator
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'Green plant';
    }
    Plant = __decorate([
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
// Method decorators
// Property decorators
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overWritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    // false makes calcBudget uneditable & true makes it editable
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overWritable(true) // prevents writing access to the property below (projectName)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(true)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project('Super Project');
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);
// Parameter decorators
function printInfo(target, methodName, paramIndex) {
    console.log("Target: " + target);
    console.log("Target: " + methodName);
    console.log("Target: " + paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course('Titan');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
