'use strict';

/*
Tell us if the number is even or odd

@value: number => number introduced by the user

@return if the number is even
 */

var value = parseInt(prompt("Insert a number", "0"));

while(isNaN(value)){
    value = parseInt(prompt("Insert a number", "0"));
}

console.log({isEven: value%2!==0});


