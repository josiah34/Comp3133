"use strict";
exports.__esModule = true;
exports.Customer3 = void 0;
var Customer3 = /** @class */ (function () {
    function Customer3(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer3.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    Customer3.prototype.getAge = function () {
        return this.age;
    };
    return Customer3;
}());
exports.Customer3 = Customer3;
