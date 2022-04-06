"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Cricket_1 = require("./Cricket");
var Football_1 = require("./Football");
//Objects not possible for Abstract classes
// let shapeOb = new Shape(10,20);
// console.log(shapeOb.getInfo());
var circleOb = new Circle_1.Circle(10, 20, 5);
console.log(circleOb.getInfo());
var rectOb = new Rectangle_1.Rectangle(10, 20, 5, 4);
console.log(circleOb.getInfo());
var shapes = [];
//shapes.push(shapeOb);
shapes.push(circleOb);
shapes.push(rectOb);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var sh = shapes_1[_i];
    console.log(sh.getInfo());
    console.log("Area " + sh.calculateArea());
}
var c1 = new Cricket_1.Cricket();
var f1 = new Football_1.Football();
var games = [];
games.push(c1);
games.push(f1);
for (var _a = 0, games_1 = games; _a < games_1.length; _a++) {
    var g = games_1[_a];
    console.log(g.getDailyWorkout());
}
