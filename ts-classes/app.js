"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var person = new Person('Arya', 'Ariadne');
console.log(person);
// Inheritance
var Eva = /** @class */ (function (_super) {
    __extends(Eva, _super);
    function Eva(username) {
        var _this = _super.call(this, 'Max', username) || this;
        _this.age = 32;
        return _this;
    }
    return Eva;
}(Person));
var max = new Eva('Evangeline');
console.log(max);
// Getters & Setters
var Plant = /** @class */ (function () {
    // private _species: string;
    function Plant(_species) {
        this._species = _species;
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            value.length > 3 ? (this._species = value) : (this._species = 'Default');
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant('Tallinum');
console.log(plant.species);
plant.species = 'Crysanthum';
console.log(plant.species);
// static properties & methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircu = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14; // property can be used without instantiating class
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircu(5));
// Abstract classes - cannot be instantiated directly
// you have to inherit from them always to use their props & methods
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 500;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // changeName must be implemented
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super Project');
console.log(newProject);
// Private constructors
// Exercises
// 1
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('Toooooooot!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// 2
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle);
console.log(rectangle.calcSize());
// 3
var People = /** @class */ (function () {
    function People() {
        this._firstName = '';
    }
    Object.defineProperty(People.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            value.length > 3 ? (this._firstName = value) : (this._firstName = '');
        },
        enumerable: true,
        configurable: true
    });
    return People;
}());
var people = new People();
console.log(people.firstName);
people.firstName = 'Ma';
console.log(people.firstName);
people.firstName = 'Schwarz';
console.log(people.firstName);
