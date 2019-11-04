'use strict';

/*
Show all even numbers between the two the used introduced

@p1: number => first number to be asked for
@p2: number => second number to be asked for
 */

var p1 = parseInt(prompt("Insert the first number", "0"));
var p2 = parseInt(prompt("Insert the second number", "0"));


while(isNaN(p1) || isNaN(p2)){
    p1 = parseInt(prompt("Insert the first number", "0"));
    p2 = parseInt(prompt("Insert the second number", "0"));
}

var first, second;
if(p1 >= p2){
    first = p2;
    second = p1;
}else{
    first = p1;
    second = p2;
}

var result = first + " ";
for (var i = first+1; i < second; i++){
    if(i % 2 !== 0)result += i + " ";
}
result += second;

console.log(result);
