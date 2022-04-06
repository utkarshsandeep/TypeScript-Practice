import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Cricket } from "./Cricket";
import { Football } from "./Football";
import { Coach } from "./Coach";

//Objects not possible for Abstract classes
// let shapeOb = new Shape(10,20);
// console.log(shapeOb.getInfo());

let circleOb = new Circle(10,20,5);
console.log(circleOb.getInfo());

let rectOb = new Rectangle(10,20,5,4);
console.log(circleOb.getInfo());

let shapes: Shape[] = [];
//shapes.push(shapeOb);
shapes.push(circleOb);
shapes.push(rectOb);

for (let sh of shapes){
    console.log(sh.getInfo());
    console.log("Area "+sh.calculateArea());
}

let c1 = new Cricket();
let f1 = new Football();

let games: Coach[] = [];
games.push(c1);
games.push(f1);

for (let g of games){
    console.log(g.getDailyWorkout());
}