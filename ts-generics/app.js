"use strict";
// Simple generic
function echo(data) {
    return data;
}
console.log(echo('Jul'));
console.log(echo(29));
console.log(echo({ name: 'Jul', age: 29 }));
// Better generic function
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Jul').length);
console.log(betterEcho(29));
console.log(betterEcho({ name: 'Jul', age: 29 }));
// Built-in Generics
var testResults = [1, 94, 2.33];
console.log(testResults.length);
// testResults.push("string") // wont work
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['Apple', 'Banana']);
