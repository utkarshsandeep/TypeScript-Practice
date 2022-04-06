console.log("Hello world!");
let found: boolean = true;
let grade: number = 77.0;
found = false;
grade = 66.9;
let mydata: any = 44.0;
mydata = true;
mydata = "ttt";
console.log(found);
console.log(grade);
console.log(mydata);
let firstName: string = "Peter";
let lastName: string = "Parker";
console.log(`Hi ${firstName} ${lastName}`);
for (let i=1;i<=5;i++){
    console.log(i);
}
let arr: number[] = [5,6,5.8];
let avg: number = 0;
let total: number = 0;
for (let i = 0;i<arr.length;i++){
    console.log(arr[i]);
    total+=arr[i];
}
avg = total/arr.length;
console.log("Average is "+avg);
let sports: string[] = ["cricket","football","basketball","golf"];
for(let game of sports){
    if (game == "cricket"){
        console.log("My game ! " +game);
    } else {
        console.log(game);
    }
}
sports.push("swimming");
sports.push("tennis");
for(let game of sports){
    console.log(game);
}
sports.pop();
for(let game of sports){
    console.log(game);
}