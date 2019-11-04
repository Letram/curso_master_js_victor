'use strict';

/*
Develop a program that compares two values and tells us which one is greater than the other or if they are equal.

@p1: number => first number to be asked for
@p2: number => second number to be asked for

@return {
    biggest: number => the biggest number among those two,
    smallest: number => the smallest number among those two,
    are_equal: boolean => if they are equal or not
}
 */
var p1 = parseInt(prompt("Insert the first number", "0"));
var p2 = parseInt(prompt("Insert the second number", "0"));

while(isNaN(p1) || isNaN(p2)){
    p1 = parseInt(prompt("Insert the first number", "0"));
    p2 = parseInt(prompt("Insert the second number", "0"));

}

console.log(
    {
        biggest: p1>p2?p1:p2,
        smallest: p1<p2?p1:p2,
        are_equal: p1===p2
    }
);



