"use strict";
var Customer3 = /** @class */ (function () {
    function Customer3(first, last) {
        this._firstname = first;
        this._lastname = last;
    }
    Object.defineProperty(Customer3.prototype, "firstn", {
        get: function () {
            return this._firstname;
        },
        set: function (first) {
            this._firstname = first;
        },
        enumerable: false,
        configurable: true
    });
    return Customer3;
}());
//Use
var object3 = new Customer3("C", "D");
object3.firstn = "Brook";
console.log(object3.firstn);
// compile code : tsc --target ES5 --noEmitOnError Customer3.ts
