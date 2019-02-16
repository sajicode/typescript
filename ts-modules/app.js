var myMath;
(function (myMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        Circle.calculateCircumference = function (diameter) { return diameter * PI; };
    })(Circle = myMath.Circle || (myMath.Circle = {}));
})(myMath || (myMath = {}));
var myMath;
(function (myMath) {
    myMath.calculateRectangle = function (width, length) { return width * length; };
})(myMath || (myMath = {}));
// namespaces
/// <reference path="./circleMath.ts"/>
/// <reference path="./rectangleMath.ts"/>
console.log(myMath.Circle.calculateCircumference(12));
console.log(myMath.calculateRectangle(5, 9));
