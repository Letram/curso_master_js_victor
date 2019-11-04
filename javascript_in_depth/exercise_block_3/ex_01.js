'use strict';

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    if(!printData(true)) alert("Check your inputs, maybe you put something wrong.");
    return false;
});

document.getElementById("print_btn").addEventListener("click", (event) => {
    printData()
});

function printData(submitted = false) {
    let age = document.getElementById("form_age").value;
    let name = document.getElementById("form_name").value;
    let surname = document.getElementById("form_surname").value;

    if (submitted) {
        console.log({
            age, name, surname
        });
        if(name.trim() === "") return false;
        if(surname.trim() === "") return false;
        if(isNaN(parseInt(age))) return false;
    }
    let arr = [name, surname, age];
    let container = document.querySelector(".container");
    container.innerHTML = "";
    for (let index in arr) {
        let pElement = document.createElement("p");
        pElement.innerText = arr[index];
        container.appendChild(pElement);
    }
    return true;
}
