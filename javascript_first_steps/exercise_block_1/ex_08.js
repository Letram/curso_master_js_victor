'use strict';

/*
Develop a program that compares two values and tells us which one is greater than the other or if they are equal.

@p1: number => first number to be asked for
@p2: number => second number to be asked for

@return {
    sum: number => one number plus the other,
    diff: number => one number minus the other,
    times: number => one number times the other,
    division: number => one number divided by the other
}
 */

var p1 = parseInt(prompt("Insert the first number", "0"));
var p2 = parseInt(prompt("Insert the second number", "0"));

while(isNaN(p1) || isNaN(p2)){
    p1 = parseInt(prompt("Insert the first number", "0"));
    p2 = parseInt(prompt("Insert the second number", "0"));
}

var result = {
    add: p1+p2,
    diff: p1-p2,
    times: p1*p2,
    div: p1/p2
};

document.write([result["add"].toString(), result["diff"].toString(), result["times"].toString(), result["div"]].toString());
console.log(result);
