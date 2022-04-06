"use strict";
var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this.firstname = first;
        this.lastname = last;
    }
    return Customer;
}());
//Use
var object = new Customer("Peter", "Parker");
console.log(object.firstname);
console.log(object.lastname);
