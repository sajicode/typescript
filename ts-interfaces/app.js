"use strict";
function greet(person) {
    console.log("Hello " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Arya';
}
var person = {
    firstName: 'Jules',
    age: 15,
    hobbies: ['cooking', 'sports'],
    greet: function (lastname) {
        console.log("Hi, I am " + this.firstName + " " + lastname);
    }
};
greet(person);
changeName(person);
greet(person);
person.greet('Pierce');
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = 'Arya';
    }
    Person.prototype.greet = function (lastname) {
        console.log("Hi, I am " + this.firstName + " " + lastname);
    };
    return Person;
}());
var newPerson = new Person();
newPerson.greet('Stark');
var myDoubleFunction;
myDoubleFunction = function (val1, val2) { return (val1 + val2) * 2; };
console.log(myDoubleFunction(3, 2));
var oldPerson = {
    age: 27,
    firstName: 'Lee',
    greet: function (lastname) {
        console.log("Hi, I am " + this.firstName + " " + lastname);
    }
};
console.log(oldPerson.greet('Adesoji'));
