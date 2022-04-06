"use strict";
var Customer2 = /** @class */ (function () {
    function Customer2(first, last) {
        this.firstname1 = first;
        this.lastname1 = last;
    }
    Customer2.prototype.getFirstName = function () {
        return this.firstname1;
    };
    Customer2.prototype.setFirstName = function (first) {
        this.firstname1 = first;
    };
    return Customer2;
}());
//Use
var object2 = new Customer2("A", "B");
object2.setFirstName("hello");
console.log(object2.getFirstName());
//Compile code: tsc --noEmitOnError Customer2.ts
