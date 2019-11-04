'use strict';

/*
1.- Ask for 6 numbers and insert it into an array.
2.- Print the array in the body and via console.
3.- Sort and print it again.
4.- Reverse and print.
5.- Print how many element does the array have
6.- Find a value that the user inserted.
 */

function start() {
    function step1() {
        let res = [];
        for(let i = 0; i < 6; i++){
            let value = parseInt(prompt(`Insert number for array position nº ${i}`, "0"));
            res.push(value)
        }
        return res;
    }

    let array = step1();

    function step2(arr) {
        console.log(arr);

        document.write("<ul>");
        for (let value in arr){
            document.write(`<li>${arr[value]}</li>`);
        }
        document.write("</ul>");
    }
    step2(array);

    function step3(array) {
        let res = Object.assign(array);
        res.sort();
        console.log(res);
    }

    step3(array);

    function step4(array) {
        let res = Object.assign(array);
        res.sort();
        res.reverse();
        console.log(res);
    }

    step4(array);

    function step5(array) {
        let res = Object.assign(array);
        console.log(res.length);
    }

    step5(array);

    function step6(array) {
        let value = parseInt(prompt("Type a number to look for: ", "0"));
        let index = array.find(element => element === value);

        if(index !== -1){
            alert(`Value found at position ${index}`);
        }else{
            alert("Value not found");
        }
    }

    step6(array);
}

start();
