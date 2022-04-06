"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer4 = void 0;
var Customer4 = /** @class */ (function () {
    function Customer4(_fname, _lname) {
        this._fname = _fname;
        this._lname = _lname;
    }
    Object.defineProperty(Customer4.prototype, "firstn", {
        get: function () {
            return this._fname;
        },
        set: function (first) {
            this._fname = first;
        },
        enumerable: false,
        configurable: true
    });
    return Customer4;
}());
exports.Customer4 = Customer4;
