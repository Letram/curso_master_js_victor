document.getElementById("film_form").addEventListener("submit", (event) => {
    let filmName = document.getElementById("film_name").value;
    if (filmName.length > 0) {
        let span = document.getElementById("name_error");
        span.style.display = "none";
        if (typeof (Storage) === "undefined") {
            alert("Localstorage not available in this browser.");
        } else {
            let filmList = localStorage.getItem("filmList");
            console.log(filmList);
            let parsedFilmList = [];
            if (filmList !== null) {
                parsedFilmList = JSON.parse(filmList);
            }
            parsedFilmList.push(filmName);
            localStorage.setItem("filmList", JSON.stringify(parsedFilmList))
        }
    } else {
        let span = document.getElementById("span_error");
        span.style.display = "block";
    }
    event.preventDefault();
    return false;
});

document.getElementById("print_films_btn").addEventListener("click", (event) => {
    let filmListAsString = localStorage.getItem("filmList");
    let ul = document.getElementById("film_list");
    if (filmListAsString !== null) {
        let filmList = JSON.parse(filmListAsString);
        for (let i = 0; i < filmList.length; i++) {
            let p = document.createElement("p");
            p.innerText = filmList[i];
            let li = document.createElement("li");
            li.appendChild(p);
            ul.appendChild(li);
        }
    }else{
        let p = document.createElement("p");
        p.text = "There is no available data...";
        let li = document.createElement("li");
        li.appendChild(p);
        ul.appendChild(li);
    }
});
