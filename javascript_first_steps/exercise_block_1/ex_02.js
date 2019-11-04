'use strict';

/*
Log sum and average of the numbers introduced in the program using a loop
if a negative number or a string is introduced the program exists.

@sum: number => sum of the values introduced
@values: number => number of values introduced
@value: number => number introduced
 */

var sum = 0;
var values = 0;
var value;

while(true){
    value = parseInt(prompt("Insert a value", "0"));
    if(value < 0 || isNaN(value))
        break;
    sum += value;
    values++;
    console.log({
        sum,
        average: sum/values
    });
}
