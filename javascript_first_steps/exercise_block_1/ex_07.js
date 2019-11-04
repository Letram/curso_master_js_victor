'use strict';

/*
Print the multiplication table of a number

@value: number => number introduced by the user

@return the table of the number
 */

var value = parseInt(prompt("Insert a number", "0"));

while(isNaN(value)){
    value = parseInt(prompt("Insert a number", "0"));
}

var result = {};

for(let i = 1; i <= 10; i++){
    result[i] = {
        times: i,
        result: value*i
    }
}

console.log(result);
