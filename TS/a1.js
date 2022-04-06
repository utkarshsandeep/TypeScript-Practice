"use strict";
console.log("Hello world!");
var found = true;
var grade = 77.0;
found = false;
grade = 66.9;
var mydata = 44.0;
mydata = true;
mydata = "ttt";
console.log(found);
console.log(grade);
console.log(mydata);
var firstName = "Peter";
var lastName = "Parker";
console.log("Hi ".concat(firstName, " ").concat(lastName));
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
var arr = [5, 6, 5.8];
var avg = 0;
var total = 0;
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    total += arr[i];
}
avg = total / arr.length;
console.log("Average is " + avg);
var sports = ["cricket", "football", "basketball", "golf"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var game = sports_1[_i];
    if (game == "cricket") {
        console.log("My game ! " + game);
    }
    else {
        console.log(game);
    }
}
sports.push("swimming");
sports.push("tennis");
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var game = sports_2[_a];
    console.log(game);
}
sports.pop();
for (var _b = 0, sports_3 = sports; _b < sports_3.length; _b++) {
    var game = sports_3[_b];
    console.log(game);
}
