"use strict";
// let & const
var variable = 'Test';
console.log(variable);
variable = 'Another variable';
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99
// Block scope var vs let
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Exercise
// 1
var double = function (value) { return value * 2; };
console.log(double(10));
// 2
var greet = function (name) {
    if (name === void 0) { name = 'Julian'; }
    console.log("Hello " + name);
};
greet();
greet('Florian');
// 3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// 4
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// 5
var testResults = [3.89, 2.99, 1.38];
console.log.apply(console, testResults);
// 6
var scientist = { firstName: 'Will', experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
