let a = prompt("Please type first number", 0);
a = Number(a);
let b = prompt("Please type second number", 0);
b = Number(b);
while (!a){
    a = prompt("Incorrect type of first number, please use figures only", 0);
    a = Number(a);
}
while (!b){
    b = prompt("Incorrect type of second number, please use figures only", 0);
    b = Number(b);
}
let maxNumber = function (a, b){
    if (a === b){
        return "a = b";
    }else if (a < b){
        return b;
    }else{
        return a;
    }
}
alert(maxNumber(a, b));

// let number = prompt("Enter the number", 0);
// number = Number(number);
// while (!number){
//     number = prompt("Incorrect type of the number, please use figures only", 0);
//     number = Number(number);
// }
// let reverse = function (number){
//     return number* -1;
// }
// alert(reverse(number));

// let number = prompt("Enter the number", 0);
// number = Number(number);
// while (!number){
//     number = prompt("Incorrect type of the number, please use figures only", 0);
//     number = Number(number);
// }
// let count = prompt("Enter how many times needs to add 3 to your number", 0);
// count = Number(count);
// while (!count || count <= 0){
//     count = prompt("Incorrect type of the number, please write, how many times to add 3. Use figures only and must be above 0", 0);
//     count = Number(count);
// }
// let three = function(number, count){
//     return number+3*count;
// }
// alert(three(+number, +count));

// let m;
// let cm;
// let km = prompt("Enter number of km", 0);
// km = Number(km);
// while (!km){
//     km = prompt("Incorrect type of the number, please use figures only", 0);
//     km = Number(km);
// }
// let metric = prompt("Please specify what to convert it to", "m, cm");
// while (metric !== "m" && metric !== "cm"){
//     metric = prompt("Please choose m or cm", "m, cm");
// }
// let getMetric = function (metric, km, m, cm){
//     let KmToM = function (km){
//         return m=km*1000;
//     }
//     let KmToCm = function (km){
//         return cm=km*100000;
//     }
//     return (metric === "m") ? `${KmToM(km)}m` : `${KmToCm(km)}cm`
// }
// alert(getMetric(metric, km));