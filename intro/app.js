"use strict";
// string
var myName = 'Fola';
// myName = 27;
// number
var myAge = 27;
// myAge = "Fola"
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// explicit types
var myRealAge;
myRealAge = 26;
// array
var hobbies = ['Cooking', 'Gaming'];
hobbies = [100];
// tuples
var address = ['Supers', 99];
// enums - used to make numbers more expressive
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Green;
// myColor => 100;
// any - use this rarely
var car = 'BMW';
car = { brand: 'BMW', series: 3 };
// functions
// the type string specifies what the return value should be
function returnName() {
    return myName;
}
// void - you can't return anything in a void function
function sayHello() {
    console.log('Hello thee');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// function types
var myMultiply;
// objects and types
var userData = {
    name: 'Fola',
    age: 26
};
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
// either a number or a string
var myRealRealAge = 28;
// check types
var finalValue = 'a string';
if (typeof finalValue === 'string') {
    console.log('Final value is a number');
}
// never
function neverReturns() {
    throw new Error('An error');
}
// nullable
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
