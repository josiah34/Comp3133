var Customer2 = /** @class */ (function () {
    function Customer2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer2.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Customer2;
}());
var customer2 = new Customer2("John", "Smith");
customer2.greeter();
