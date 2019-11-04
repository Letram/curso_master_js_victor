'use strict';

/*
Show all divisors of the number introduced by the user

@value: number => number introduced by the user
 */

var value = parseInt(prompt("Insert a number", "0"));

while(isNaN(value)){
    value = parseInt(prompt("Insert a number", "0"));
}

var divisors = "1 ";

for(var i = 2; i < value; i++){
    if(value % i === 0) divisors += i + " ";
}

divisors += value;

console.log(divisors);
